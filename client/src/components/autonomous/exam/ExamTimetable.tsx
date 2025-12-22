import React from "react";

const ExamTimetable: React.FC = () => {
  return (
    <div>
      <h3 className="font-heading mb-4">Exam Timetable</h3>

      <table className="w-full border text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="border p-2">Sr. No.</th>
            <th className="border p-2">Name of File</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">End Term Exam Schedule</td>
            <td className="border p-2">Autonomous Exam – May 2025</td>
            <td className="border p-2">
              <a className="text-primary" href="#">PDF</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExamTimetable;
