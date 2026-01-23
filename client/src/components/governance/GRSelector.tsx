const GRSelector = ({ departments, active, onChange }: any) => {
  // ✅ SAFETY GUARD
  if (!departments || typeof departments !== "object") {
    return null; // or loading indicator
  }

  const committeeKeys = Object.keys(departments);
  if (committeeKeys.length === 0) {
    return (
      <p className="text-sm text-muted-foreground mb-4">
        No Grievance Redressal committee available.
      </p>
    );
  }

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {committeeKeys.map((dept) => (
        <button
          key={dept}
          onClick={() => onChange(dept)}
          className={active === dept ? "btn-primary" : "btn-outline"}
        >
          {dept}
        </button>
      ))}
    </div>
  );
};

export default GRSelector;
