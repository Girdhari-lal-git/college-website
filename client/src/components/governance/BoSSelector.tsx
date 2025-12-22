const BoSSelector = ({ departments, active, onChange }: any) => (
  <div className="flex gap-2 mb-4 flex-wrap">
    {Object.keys(departments).map((dept) => (
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
export default BoSSelector;
