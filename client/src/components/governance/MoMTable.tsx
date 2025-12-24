import React from "react";
import { MoMItem } from "@/types/governance";

interface Props {
  data: readonly MoMItem[];
}

const MoMTable: React.FC<Props> = ({ data }) => {
  if (!data.length) {
    return <p className="text-sm text-muted-foreground">No MoM available.</p>;
  }

  return (
    <>
      <h3 className="font-semibold mb-2">Minutes of Meeting (MoM)</h3>
      <table className="w-full border text-sm mb-6">
        <thead className="bg-muted">
          <tr>
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MoMTable;
