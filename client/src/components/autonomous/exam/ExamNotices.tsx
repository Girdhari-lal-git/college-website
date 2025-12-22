import React from "react";

const ExamNotices: React.FC = () => {
  return (
    <div>
      <h3 className="font-heading mb-4">Notices</h3>

      <table className="w-full border text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Name of File</th>
            <th className="border p-2">Short Description</th>
            <th className="border p-2">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Exam Form Notification</td>
            <td className="border p-2">
              Notice regarding submission of examination form
            </td>
            <td className="border p-2">
              <a className="text-primary" href="#">
                PDF
              </a>
            </td>
          </tr>

          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Guidelines for End Term Exam</td>
            <td className="border p-2">
              Instructions for students appearing in end term examination
            </td>
            <td className="border p-2">
              <a className="text-primary" href="#">
                PDF
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExamNotices;
