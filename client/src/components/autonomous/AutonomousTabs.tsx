import React from "react";

interface Props {
  active: string;
  onChange: (tab: string) => void;
}

const tabs = [
  "about",
  "announcements",
  "governance",
  "syllabus",
  "policies",
];

const AutonomousTabs: React.FC<Props> = ({ active, onChange }) => {
  return (
    <div className="flex gap-3 mb-8 flex-wrap">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={active === t ? "btn-primary" : "btn-outline"}
        >
          {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default AutonomousTabs;
