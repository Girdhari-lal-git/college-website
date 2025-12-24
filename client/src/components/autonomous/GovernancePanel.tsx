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

  return (
    <div className="grid md:grid-cols-4 gap-6">
      <GovernanceSidebar
        bodies={bodies}
        active={active}
        onSelect={setActive}
      />

      <div className="md:col-span-3">
        <GovernanceContent committee={data[active]} />
      </div>
    </div>
  );
};

export default GovernancePanel;
