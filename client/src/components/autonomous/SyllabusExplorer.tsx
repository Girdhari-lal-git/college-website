import React from "react";
import { syllabusData, SyllabusItem } from "@/data/syllabusData";

const degrees = ["B. Tech.", "M. Tech."];

const programsByDegree: Record<string, string[]> = {
  "B. Tech.": [
    "First Year",
    "CSE",
    "CS (R)",
    "AI & DS",
    "CS (AI)",
    "CS (DS)",
    "CS (IoT)",
  ],
  "M. Tech.": ["CSE", "AI & DS"],
};

const SyllabusExplorer: React.FC = () => {
  const [degree, setDegree] = React.useState<string>("");
  const [branch, setBranch] = React.useState<string>("");
  const [semester, setSemester] = React.useState<number | "">("");

  // Semester rules
  const semesters = React.useMemo(() => {
    if (!degree || !branch) return [];

    if (degree === "B. Tech." && branch === "First Year") {
      return [1, 2];
    }

    if (degree === "B. Tech.") {
      return [3, 4, 5, 6, 7, 8];
    }

    if (degree === "M. Tech.") {
      return [1, 2, 3, 4];
    }

    return [];
  }, [degree, branch]);

  // Reset dependent filters
  React.useEffect(() => {
    setBranch("");
    setSemester("");
  }, [degree]);

  React.useEffect(() => {
    setSemester("");
  }, [branch]);

  const filteredData: SyllabusItem[] = syllabusData.filter(
    (s) =>
      (!degree || s.degree === degree) &&
      (!branch || s.branch === branch) &&
      (!semester || s.semester === semester)
  );

  return (
    <div className="card-hover border rounded-lg p-6">
      <h3 className="font-heading mb-6">Syllabus</h3>

      {/* FILTERS */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Degree */}
        <select
          className="input"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        >
          <option value="">Select Degree</option>
          {degrees.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        {/* Program */}
        <select
          className="input"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          disabled={!degree}
        >
          <option value="">Select Program</option>
          {degree &&
            programsByDegree[degree]?.map((b) => (
              <option key={b}>{b}</option>
            ))}
        </select>

        {/* Semester */}
        <select
          className="input"
          value={semester}
          onChange={(e) => setSemester(Number(e.target.value))}
          disabled={!branch}
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
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Document</th>
            <th className="border p-2">Short Description</th>
            <th className="border p-2">Scheme</th>
            <th className="border p-2">Syllabus</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="border p-4 text-center text-muted-foreground"
              >
                Please select Degree, Program and Semester
              </td>
            </tr>
          ) : (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item.subjectName}</td>
                <td className="border p-2">{item.description}</td>
                <td className="border p-2">
                  <a
                    href={item.schemeLink}
                    className="text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </td>
                <td className="border p-2">
                  <a
                    href={item.syllabusLink}
                    className="text-primary"
                    target="_blank"
                    rel="noreferrer"
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
