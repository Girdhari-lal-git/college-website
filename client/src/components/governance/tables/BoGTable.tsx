import React from "react";

const BoGTable = ({ members }: any) => (
  <table className="w-full border text-sm mb-6">
    <thead className="bg-muted">
      <tr>
        <th>Sr. No.</th>
        <th>Position in GC</th>
        <th>Nominated By</th>
        <th>Category</th>
        <th>Name</th>
        <th>Email-ID</th>
      </tr>
    </thead>
    <tbody>
      {members.map((m: any, i: number) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{m.position}</td>
          <td>{m.nominatedBy}</td>
          <td>{m.category}</td>
          <td>{m.name}</td>
          <td>{m.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BoGTable;
