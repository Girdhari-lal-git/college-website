import React from "react";

interface ATRItem {
  title: string;
  date: string;
  link: string;
}

interface Props {
  data: ATRItem[];
}

const ATRTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="mb-6 text-sm text-muted-foreground">
        No Action Taken Reports available.
      </div>
    );
  }

  return (
    <>
      <h3 className="font-semibold mb-2">Action Taken Report (ATR)</h3>

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
            {data.map((a, i) => (
              <tr key={i}>
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">{a.title}</td>
                <td className="border p-2">{a.date}</td>
                <td className="border p-2">
                  <a
                    href={a.link}
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

export default ATRTable;
