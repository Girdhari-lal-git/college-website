const ExaminationCommitteeTable = ({ members }: any) => (
  <table className="w-full border text-sm mb-6">
    <thead className="bg-muted">
      <tr>
        <th>Sr. No.</th>
        <th>Category</th>
        <th>Nominee</th>
        <th>Designation</th>
        <th>Name</th>
        <th>E-mail</th>
      </tr>
    </thead>
    <tbody>
      {members.map((m: any, i: number) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{m.category}</td>
          <td>{m.nominee}</td>
          <td>{m.designation}</td>
          <td>{m.name}</td>
          <td>{m.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default ExaminationCommitteeTable;
