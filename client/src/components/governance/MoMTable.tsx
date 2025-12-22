import React from "react";

interface MoMItem {
  title: string;
  date: string;
  link: string;
}

interface Props {
  data: MoMItem[];
}

const MoMTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="mb-6 text-sm text-muted-foreground">
        No Minutes of Meeting available.
      </div>
    );
  }

  return (
    <>
      <h3 className="font-semibold mb-2">Minutes of Meeting (MoM)</h3>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="border p-2">Sr. No.</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m, i) => (
              <tr key={i}>
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">{m.title}</td>
                <td className="border p-2">{m.date}</td>
                <td className="border p-2">
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MoMTable;
