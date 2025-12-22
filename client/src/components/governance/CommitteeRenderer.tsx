import React from "react";

import BoGTable from "./tables/BoGTable";
import AcademicCouncilTable from "./tables/AcademicCouncilTable";
import BoSTable from "./tables/BoSTable";
import FinanceCommitteeTable from "./tables/FinanceCommitteeTable";
import ExaminationCommitteeTable from "./tables/ExaminationCommitteeTable";

import BoSSelector from "./BoSSelector";
import MoMTable from "./MoMTable";
import ATRTable from "./ATRTable";

interface Props {
  committee: any;
}

const CommitteeRenderer: React.FC<Props> = ({ committee }) => {
  // 🔹 Helper function to render committee-specific table
  const renderCommitteeTable = (data: any) => {
    switch (data.type) {
      case "bog":
        return <BoGTable members={data.members} />;

      case "academic-council":
        return <AcademicCouncilTable members={data.members} />;

      case "finance":
        return <FinanceCommitteeTable members={data.members} />;

      case "examination":
        return <ExaminationCommitteeTable members={data.members} />;

      default:
        return null;
    }
  };

  // 🔹 Special handling for Board of Studies (multiple departments)
  if (committee.type === "bos-group") {
    const departments = Object.keys(committee.departments);
    const [activeDept, setActiveDept] = React.useState(departments[0]);

    const activeBoS = committee.departments[activeDept];

    return (
      <>
        <BoSSelector
          departments={committee.departments}
          active={activeDept}
          onChange={setActiveDept}
        />

        <BoSTable members={activeBoS.members} />
        <MoMTable data={activeBoS.mom} />
        <ATRTable data={activeBoS.atr} />
      </>
    );
  }

  // 🔹 Default rendering for all other committees
  return (
    <>
      {renderCommitteeTable(committee)}
      <MoMTable data={committee.mom} />
      <ATRTable data={committee.atr} />
    </>
  );
};

export default CommitteeRenderer;
