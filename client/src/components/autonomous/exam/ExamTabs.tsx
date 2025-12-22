import React from "react";

const tabs = [
  "question-papers",
  "exam-timetable",
  "exam-notices",
  "result",
] as const;

type TabType = typeof tabs[number];

interface Props {
  active: TabType;
  onChange: (tab: TabType) => void;
}

const ExamTabs: React.FC<Props> = ({ active, onChange }) => {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      <button
        onClick={() => onChange("question-papers")}
        className={active === "question-papers" ? "btn-primary w-full" : "btn-outline w-full"}
      >
        Previous Year Question Papers
      </button>

      <button
        onClick={() => onChange("exam-timetable")}
        className={active === "exam-timetable" ? "btn-primary w-full" : "btn-outline w-full"}
      >
        Exam Timetable
      </button>

      <button
        onClick={() => onChange("exam-notices")}
        className={active === "exam-notices" ? "btn-primary w-full" : "btn-outline w-full"}
      >
        Notices
      </button>

      <button
        onClick={() => onChange("result")}
        className={active === "result" ? "btn-primary w-full" : "btn-outline w-full"}
      >
        Result
      </button>
    </div>
  );
};

export default ExamTabs;
