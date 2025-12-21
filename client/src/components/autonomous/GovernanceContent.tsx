import React from "react";
import CommitteeLayout, {
  CommitteeData,
} from "../governance/CommitteeLayout";
import EmptyState from "../common/EmptyState";

interface Props {
  data?: CommitteeData;
}

const GovernanceContent: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <EmptyState message="Committee data not available." />;
  }

  return (
    <div className="border rounded-lg p-6">
      <CommitteeLayout data={data} />
    </div>
  );
};

export default GovernanceContent;
