import React from "react";

export interface CommitteeMember {
  name: string;
  designation: string;
  affiliation?: string;
}

export interface MoMItem {
  date: string;
  title: string;
  link: string;
}

export interface ATRItem {
  action: string;
  status: string;
}

export interface CommitteeData {
  title: string;
  description?: string;
  members: CommitteeMember[];
  mom: MoMItem[];
  atr: ATRItem[];
}

interface Props {
  data?: CommitteeData;
}

const CommitteeLayout: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="animate-fadeIn">
      <h2 className="font-heading text-2xl mb-2">{data.title}</h2>
      {data.description && (
        <p className="text-muted-foreground mb-6">{data.description}</p>
      )}

      {/* MEMBERS */}
      <h3 className="font-semibold mb-2">Committee Members</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Designation</th>
              <th className="border p-2">Affiliation</th>
            </tr>
          </thead>
          <tbody>
            {data.members.map((m, i) => (
              <tr key={i}>
                <td className="border p-2">{m.name}</td>
                <td className="border p-2">{m.designation}</td>
                <td className="border p-2">{m.affiliation || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOM */}
      <h3 className="font-semibold mb-2">Minutes of Meeting (MoM)</h3>
      <ul className="mb-6 space-y-1">
        {data.mom.map((m, i) => (
          <li key={i}>
            <a
              href={m.link}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {m.date} – {m.title}
            </a>
          </li>
        ))}
      </ul>

      {/* ATR */}
      <h3 className="font-semibold mb-2">Action Taken Report (ATR)</h3>
      <ul className="list-disc ml-6 text-sm">
        {data.atr.map((a, i) => (
          <li key={i}>
            {a.action} — <strong>{a.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommitteeLayout;
