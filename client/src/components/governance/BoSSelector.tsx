const BoSSelector = ({ departments, active, onChange }: any) => {
  // ✅ SAFETY GUARD
  if (!departments || typeof departments !== "object") {
    return null; // or loading indicator
  }

  const departmentKeys = Object.keys(departments);

  if (departmentKeys.length === 0) {
    return (
      <p className="text-sm text-muted-foreground mb-4">
        No Board of Studies departments available.
      </p>
    );
  }

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {departmentKeys.map((dept) => (
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

export default BoSSelector;
