const FinanceCommitteeTable = ({ members }: any) => (
  <table className="w-full border text-sm mb-6">
    <thead className="bg-muted">
      <tr>
        <th>S. No.</th>
        <th>Position</th>
        <th>Department</th>
        <th>Designation</th>
        <th>Name</th>
        <th>Email-ID</th>
      </tr>
    </thead>
    <tbody>
      {members.map((m: any, i: number) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{m.position}</td>
          <td>{m.department}</td>
          <td>{m.designation}</td>
          <td>{m.name}</td>
          <td>{m.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default FinanceCommitteeTable;
