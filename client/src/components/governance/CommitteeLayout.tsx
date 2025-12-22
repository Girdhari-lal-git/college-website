import React from "react";

export interface CommitteeMember {
  sr: string;
  gcposition: string;
  nominatedby: string;
  category: string;
  name: string;
  email: string;
 
}

export interface MoMItem {
  srno: number;
  date: string;
  title: string;
  link: string;
}

export interface ATRItem {
  action: string;
  status: string;
  link: string;
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
              <th className="border p-2">Sr. No.</th>
              <th className="border p-2">GC Position</th>
              <th className="border p-2">Nominated By</th>
              <th className="border p-2">Category</th>  
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.members.map((m, i) => (
              <tr key={i}>
                <td className="border p-2">{m.sr}</td>
                <td className="border p-2">{m.gcposition}</td>
                <td className="border p-2">{m.nominatedby}</td>
                <td className="border p-2">{m.category}</td>
                <td className="border p-2">{m.name}</td>
                <td className="border p-2">{m.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOM */}
                          <h3 className="font-semibold mb-2">Minutes of Meeting (MoM)</h3>

                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border text-sm">
                        <thead className="bg-muted">
                          <tr>
                            <th className="border p-2 text-left">Sr. No.</th>
                            <th className="border p-2 text-left">Title</th>
                            <th className="border p-2 text-left">Date</th>
                            <th className="border p-2 text-left">Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.mom.map((m, i) => (
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


      {/* ATR */}
      <h3 className="font-semibold mb-2">Action Taken Report (ATR)</h3>

<div className="overflow-x-auto mb-6">
  <table className="w-full border text-sm">
    <thead className="bg-muted">
      <tr>
        <th className="border p-2 text-left">Sr. No.</th>
        <th className="border p-2 text-left">Action Taken</th>
        <th className="border p-2 text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      {data.atr.map((a, i) => (
        <tr key={i}>
          <td className="border p-2">{i + 1}</td>
          <td className="border p-2">{a.action}</td>
          <td className="border p-2 font-medium">{a.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default CommitteeLayout;
