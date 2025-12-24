const BoSTable = ({ members }: any) => (
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm shadow-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
            Sr. No.
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
            Category
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
            Nominated By
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
            Name
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
            Address
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">
            E-Mail
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {members?.length > 0 ? (
          members.map((m: any, i: number) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3 text-gray-700">
                {i + 1}
              </td>
              <td className="px-4 py-3 text-gray-700">
                {m.category}
              </td>
              <td className="px-4 py-3 text-gray-700">
                {m.nominatedBy}
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {m.name}
              </td>
              <td className="px-4 py-3 text-gray-700">
                {m.address}
              </td>
              <td className="px-4 py-3 text-blue-600">
                {m.email ? (
                  <a
                    href={`mailto:${m.email}`}
                    className="hover:underline"
                  >
                    {m.email}
                  </a>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={6}
              className="px-4 py-6 text-center text-gray-500"
            >
              No BoS members available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default BoSTable;
