import React from "react";

const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <div className="p-6 text-center text-muted-foreground border rounded-lg">
    {message}
  </div>
);

export default EmptyState;
