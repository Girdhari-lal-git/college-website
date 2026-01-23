import React from "react";
import GovernanceSidebar from "./GovernanceSidebar";
import GovernanceContent from "./GovernanceContent";
import { CommitteeData } from "@/types/governance";

interface Props {
  data: Record<string, CommitteeData>;
}

const GovernancePanel: React.FC<Props> = ({ data }) => {
  const bodies = Object.keys(data);
  const [active, setActive] = React.useState(bodies[0]);

  const activeCommittee = data[active];
  
  const [activeSub, setActiveSub] = React.useState<string | null>(null);
        React.useEffect(() => {
          setActiveSub(null);
        }, [active]);


  const displayTitle =
  (activeCommittee.type === "bos-group" ||
    activeCommittee.type === "gr-group") &&
  activeSub
    ? `${activeCommittee.title} – ${activeSub}`
    : activeCommittee.title;


  return (
    <div className="grid md:grid-cols-4 gap-6">
      <GovernanceSidebar
        bodies={bodies}
        active={active}
        onSelect={setActive}
      />

      <div className="md:col-span-3">

        {/* ✅ Committee Name */}
        <div className="w-full mb-6 text-center border border-primary rounded-lg bg-primary/5">
  <h2 className="text-2xl font-bold text-primary px-6 py-4">
    {displayTitle}
  </h2>
</div>
        <GovernanceContent committee={data[active]} onSubChange={setActiveSub} />
      </div>
    </div>
  );
};

export default GovernancePanel;
