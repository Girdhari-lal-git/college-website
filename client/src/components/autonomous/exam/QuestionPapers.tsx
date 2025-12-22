import React from "react";

const programs = ["CSE", "CSE (R)", "AI & DS", "CS (AI)", "CS (DS)"];
const sessions = ["2023-24", "2024-25", "2025-26"];
const examTypes = ["First Mid Term", "Second Mid Term", "End Term"];

const QuestionPapers: React.FC = () => {
  const [program, setProgram] = React.useState(programs[0]);
  const [session, setSession] = React.useState(sessions[0]);
  const [examType, setExamType] = React.useState(examTypes[0]);

  return (
    <div>
      <h3 className="font-heading mb-4">Previous Year Question Papers</h3>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <select className="border p-2 rounded" value={program} onChange={e => setProgram(e.target.value)}>
          {programs.map(p => <option key={p}>{p}</option>)}
        </select>

        <select className="border p-2 rounded" value={session} onChange={e => setSession(e.target.value)}>
          {sessions.map(s => <option key={s}>{s}</option>)}
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
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">CSE301</td>
            <td className="border p-2">Data Structures</td>
            <td className="border p-2">
              <a className="text-primary" href="#">PDF</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuestionPapers;
