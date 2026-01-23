import React from "react";
import { CommitteeData } from "@/types/governance";
import CommitteeRenderer from "@/components/governance/CommitteeRenderer";



interface Props {
  committee: CommitteeData;
  onSubChange?: (name: string | null) => void;
}

const GovernanceContent: React.FC<Props> = ({
  committee,
  onSubChange
}) => {
  return (
    <CommitteeRenderer
      committee={committee}
      onSubChange={onSubChange}
    />
  );
};

export default GovernanceContent;
