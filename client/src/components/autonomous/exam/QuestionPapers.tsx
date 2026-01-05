import React from "react";
import { questionPapers } from "@/data/questionPapers";

const programs = [
  "Applied Science",
  "CSE",
  "CSE (R)",
  "AI & DS",
  "CS (AI)",
  "CS (DS)",
  "CS (IoT)",
];

const sessions = ["2025-26", "2026-27"];
const examTypes = ["First Mid Term", "Second Mid Term", "End Term"];

const QuestionPapers: React.FC = () => {
  const [program, setProgram] = React.useState(programs[0]);
  const [session, setSession] = React.useState(sessions[0]);
  const [examType, setExamType] = React.useState(examTypes[0]);
  const [semester, setSemester] = React.useState<number>(1);

  const semesters =
    program === "Applied Science"
      ? [1, 2]
      : [3, 4, 5, 6, 7, 8];

  React.useEffect(() => {
    setSemester(semesters[0]); // reset semester when program changes
  }, [program]);

  const filteredPapers = questionPapers.filter(
    (p) =>
      p.program === program &&
      p.session === session &&
      p.examType === examType &&
      p.semester === semester
  );

  return (
    <div>
      <h3 className="font-heading mb-4">Previous Year Question Papers</h3>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <select className="border p-2 rounded" value={program} onChange={e => setProgram(e.target.value)}>
          {programs.map(p => <option key={p}>{p}</option>)}
        </select>

        <select className="border p-2 rounded" value={session} onChange={e => setSession(e.target.value)}>
          {sessions.map(s => <option key={s}>{s}</option>)}
        </select>

        <select className="border p-2 rounded" value={semester} onChange={e => setSemester(Number(e.target.value))}>
          {semesters.map(sem => (
            <option key={sem} value={sem}>
              Semester {sem}
            </option>
          ))}
        </select>

        <select className="border p-2 rounded" value={examType} onChange={e => setExamType(e.target.value)}>
          {examTypes.map(e => <option key={e}>{e}</option>)}
        </select>
      </div>

      {/* Papers Table */}
      <table className="w-full border text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Subject Code</th>
            <th className="border p-2">Subject Name</th>
            <th className="border p-2">Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredPapers.length === 0 ? (
            <tr>
              <td colSpan={4} className="border p-4 text-center text-muted-foreground">
                No question papers found
              </td>
            </tr>
          ) : (
            filteredPapers.map((p, i) => (
              <tr key={i}>
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">{p.subjectCode}</td>
                <td className="border p-2">{p.subjectName}</td>
                <td className="border p-2">
                  <a className="text-primary" href={p.link} target="_blank" rel="noreferrer">
                    PDF
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionPapers;
