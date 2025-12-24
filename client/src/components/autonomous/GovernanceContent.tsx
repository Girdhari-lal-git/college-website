import React from "react";
import { CommitteeData } from "@/types/governance";
import CommitteeRenderer from "@/components/governance/CommitteeRenderer";

interface Props {
  committee: CommitteeData;
}

const GovernanceContent: React.FC<Props> = ({ committee }) => {
  return <CommitteeRenderer committee={committee} />;
};

export default GovernanceContent;
