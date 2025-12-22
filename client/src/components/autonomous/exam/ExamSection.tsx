import React from "react";
import ExamTabs from "./ExamTabs";
import QuestionPapers from "./QuestionPapers";
import ExamTimetable from "./ExamTimetable";
import ResultRedirect from "./ResultRedirect";

const ExamSection: React.FC = () => {
  const [active, setActive] = React.useState<
    "question-papers" | "exam-timetable" | "result"
  >("question-papers");

  return (
    <div className="grid md:grid-cols-4 gap-6">
      <ExamTabs active={active} onChange={setActive} />

      <div className="md:col-span-3 border rounded-lg p-6">
        {active === "question-papers" && <QuestionPapers />}
        {active === "exam-timetable" && <ExamTimetable />}
        {active === "result" && <ResultRedirect />}
      </div>
    </div>
  );
};

export default ExamSection;
