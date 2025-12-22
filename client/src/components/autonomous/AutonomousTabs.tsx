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
  "exam-section",

];

const tabLabels: Record<string, string> = {
  about: "ABOUT",
  announcements: "ANNOUNCEMENTS",
  governance: "GOVERNANCE",
  syllabus: "SYLLABUS",
  "exam-section": "EXAMINATIONS",
  policies: "POLICIES",
};

const AutonomousTabs: React.FC<Props> = ({ active, onChange }) => {
  return (
    <div className="flex gap-3 mb-8 flex-wrap">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={active === t ? "btn-primary" : "btn-outline"}
        >
           {tabLabels[t]}
        </button>
      ))}
    </div>
  );
};

export default AutonomousTabs;
