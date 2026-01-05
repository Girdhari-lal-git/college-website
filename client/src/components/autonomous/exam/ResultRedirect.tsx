import React from "react";

const ResultRedirect: React.FC = () => {
  return (
    <div className="text-center p-10 border rounded-lg">
      <h3 className="font-heading mb-4">Examination Results</h3>
      <p className="mb-6">
        Click the button below to view examination results.
      </p>
      <a href="https://www.tcsion.com/SelfServices/" className="btn-primary">
        View Results
      </a>
    </div>
  );
};

export default ResultRedirect;
