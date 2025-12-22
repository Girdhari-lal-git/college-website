const BoSTable = ({ members }: any) => (
  <table className="w-full border text-sm mb-6">
    <thead className="bg-muted">
      <tr>
        <th>Sr. No.</th>
        <th>Category</th>
        <th>Nominated By</th>
        <th>Name</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {members.map((m: any, i: number) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{m.category}</td>
          <td>{m.nominatedBy}</td>
          <td>{m.name}</td>
          <td>{m.address}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default BoSTable;
