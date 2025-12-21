import React from "react";

interface MinorRow {
  srNo: number;
  offeringDept: string;
  title: string;
  supportingPrograms: string;
  link: string;
}

interface HonorsRow {
  srNo: number;
  department: string;
  title: string;
  branch: string;
  link: string;
}

interface Props {
  minor: MinorRow[];
  honors: HonorsRow[];
}

const SyllabusPanel: React.FC<Props> = ({ minor, honors }) => {
  const [type, setType] = React.useState<"minor" | "honors">("minor");
  const rows = type === "minor" ? minor : honors;

  return (
    <div className="border rounded-lg p-6">
      <div className="flex gap-4 mb-6">
        <button
          className={type === "minor" ? "btn-primary" : "btn-outline"}
          onClick={() => setType("minor")}
        >
          Minor Degree
        </button>
        <button
          className={type === "honors" ? "btn-primary" : "btn-outline"}
          onClick={() => setType("honors")}
        >
          Honors Degree
        </button>
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-muted">
          <tr>
            {type === "minor" ? (
              <>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Offering Dept.</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Supporting Programs</th>
                <th className="border p-2">Syllabus</th>
              </>
            ) : (
              <>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Branch</th>
                <th className="border p-2">Syllabus</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((r: any) => (
            <tr key={r.srNo}>
              <td className="border p-2">{r.srNo}</td>
              {Object.keys(r)
                .filter((k) => k !== "srNo")
                .map((k, i) => (
                  <td key={i} className="border p-2">
                    {k === "link" ? (
                      <a
                        href={r[k]}
                        className="text-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    ) : (
                      r[k]
                    )}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SyllabusPanel;
