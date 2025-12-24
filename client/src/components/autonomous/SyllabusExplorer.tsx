import React from "react";
import { syllabusData } from "@/data/syllabusData";

const degrees = ["Regular", "Minor", "Honors"];
const programs = [
  "Applied Sciences",
  "CSE",
  "CSE (R)",
  "AI & DS",
  "CS (AI)",
  "CS (DS)",
  "CS (IoT)",
];
const sessions = ["2023-24", "2024-25", "2025-26"];

const SyllabusExplorer: React.FC = () => {
  const [degree, setDegree] = React.useState<string>("");
  const [program, setProgram] = React.useState<string>("");
  const [session, setSession] = React.useState<string>("");
  const [semester, setSemester] = React.useState<number | "">("");

  const semesters =
    program === "Applied Sciences"
      ? [1, 2]
      : [3, 4, 5, 6, 7, 8];

  const filteredData = syllabusData.filter(
    (s) =>
      (!degree || s.degree === degree) &&
      (!program || s.program === program) &&
      (!session || s.session === session) &&
      (!semester || s.semester === semester)
  );

  return (
    <div className="card-hover border rounded-lg p-6">
      <h3 className="font-heading mb-6">Syllabus</h3>

      {/* FILTERS */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <select className="input" value={degree} onChange={(e) => setDegree(e.target.value)}>
          <option value="">Select Degree</option>
          {degrees.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <select className="input" value={program} onChange={(e) => setProgram(e.target.value)}>
          <option value="">Select Program</option>
          {programs.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <select className="input" value={session} onChange={(e) => setSession(e.target.value)}>
          <option value="">Select Session</option>
          {sessions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          className="input"
          value={semester}
          onChange={(e) => setSemester(Number(e.target.value))}
          disabled={!program}
        >
          <option value="">Select Semester</option>
          {semesters.map((sem) => (
            <option key={sem} value={sem}>
              Semester {sem}
            </option>
          ))}
        </select>
      </div>

      {/* RESULT TABLE */}
      <table className="w-full border text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="border p-2">Syllabus Title</th>
            <th className="border p-2">Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={2} className="border p-4 text-center text-muted-foreground">
                No syllabus found
              </td>
            </tr>
          ) : (
            filteredData.map((s, i) => (
              <tr key={i}>
                <td className="border p-2">{s.title}</td>
                <td className="border p-2">
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary"
                  >
                    Download
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

export default SyllabusExplorer;
