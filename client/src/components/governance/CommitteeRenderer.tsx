import React from "react";

import BoGTable from "./tables/BoGTable";
import AcademicCouncilTable from "./tables/AcademicCouncilTable";
import BoSTable from "./tables/BoSTable";
import FinanceCommitteeTable from "./tables/FinanceCommitteeTable";
import ExaminationCommitteeTable from "./tables/ExaminationCommitteeTable";

import BoSSelector from "./BoSSelector";
import MoMTable from "./MoMTable";
import ATRTable from "./ATRTable";

import { CommitteeData } from "@/types/governance";

interface Props {
  committee: CommitteeData;
}

const CommitteeRenderer: React.FC<Props> = ({ committee }) => {
  /* =====================================================
     ✅ ALL HOOKS — TOP LEVEL ONLY
     ===================================================== */
  const [activeDept, setActiveDept] = React.useState<string | null>(null);

  /* =====================================================
     🔹 Sync activeDept when committee changes
     ===================================================== */
  React.useEffect(() => {
    if (committee.type === "bos-group") {
      const keys = Object.keys(committee.departments ?? {});
      setActiveDept(keys.length > 0 ? keys[0] : null);
    } else {
      setActiveDept(null);
    }
  }, [committee]);

  /* =====================================================
     🔹 Render normal committees
     ===================================================== */
  if (committee.type !== "bos-group") {
    return (
      <>
        {committee.type === "bog" && (
          <BoGTable members={committee.members ?? []} />
        )}

        {committee.type === "academic-council" && (
          <AcademicCouncilTable members={committee.members ?? []} />
        )}

        {committee.type === "finance" && (
          <FinanceCommitteeTable members={committee.members ?? []} />
        )}

        {committee.type === "examination" && (
          <ExaminationCommitteeTable members={committee.members ?? []} />
        )}

        <MoMTable data={committee.mom ?? []} />
        <ATRTable data={committee.atr ?? []} />
      </>
    );
  }

  /* =====================================================
     🔹 Render Board of Studies (bos-group)
     ===================================================== */
  const departments = Object.keys(committee.departments ?? {});

  if (!activeDept || !committee.departments[activeDept]) {
    return <p>Loading Board of Studies…</p>;
  }

  const activeBoS = committee.departments[activeDept];

  return (
    <>
      <BoSSelector
        departments={committee.departments}
        active={activeDept}
        onChange={setActiveDept}
      />

      <BoSTable members={activeBoS.members ?? []} />
      <MoMTable data={activeBoS.mom ?? []} />
      <ATRTable data={activeBoS.atr ?? []} />
    </>
  );
};

export default CommitteeRenderer;
