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
            <td className="border p-2">First Year First Mid Term Exam (Theory)</td>
            <td className="border p-2">First year (Autonomous) First mid term Theory Exam – Oct- 2025</td>
            <td className="border p-2">
              <a className="text-primary" href="#">PDF</a>
            </td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">First Year First Mid Term Exam (Practical)</td>
            <td className="border p-2">First year (Autonomous) First mid term Practical Exam – Oct- 2025</td>
            <td className="border p-2">
              <a className="text-primary" href="#">PDF</a>
            </td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">First Year Second Mid Term Exam (Theory)</td>
            <td className="border p-2">First year (Autonomous) Second mid term Theory Exam – Nov- 2025</td>
            <td className="border p-2">
              <a className="text-primary" href="#">PDF</a>
            </td>
          </tr>
          <tr>
            <td className="border p-2">4</td>
            <td className="border p-2">First Year Second Mid Term Exam (Practical)</td>
            <td className="border p-2">First year (Autonomous) Second mid term Practical Exam – Nov- 2025</td>
            <td className="border p-2">
              <a className="text-primary" href="#">PDF</a>
            </td>
          </tr>
           <tr>
            <td className="border p-2">5</td>
            <td className="border p-2">First Year End Term Exam (Theory)</td>
            <td className="border p-2">First year (Autonomous) End term Theory Exam – Jan- 2026</td>
            <td className="border p-2">
              <a className="text-primary" href="https://drive.google.com/file/d/1LyuDN3VF2qNnRCHwQmPyFdxkxBdLv3_r/view?usp=drive_link">PDF</a>
            </td>
          </tr>
          <tr>
            <td className="border p-2">6</td>
            <td className="border p-2">First Year End Term Exam (Practical)</td>
            <td className="border p-2">First year (Autonomous) End term Practical Exam – Dec- 2025</td>
            <td className="border p-2">
              <a className="text-primary" href="https://drive.google.com/file/d/1mwNJRXihlglzhpScKdMY82CTM4VGVf2e/view?usp=drive_link">PDF</a>
            </td>
          </tr>
           <tr>
            <td className="border p-2">7</td>
            <td className="border p-2">Revised End Term Exam Schedule January 2026</td>
            <td className="border p-2">The End Semester Theory Examination for B.Tech. First Year, First Semester (January 2026) has been postponed. The examination will now commence from 05/01/2026 as per the revised timetable enclosed.</td>
            <td className="border p-2">
              <a className="text-primary" href="https://drive.google.com/file/d/1QNX5xLcplMz7lNi9d8e_pdlkixuriw8K/view?usp=drive_link">PDF</a>
            </td>
          </tr>
          <tr>
            <td className="border p-2">8</td>
            <td className="border p-2">B.Tech. I - Semester RTU Back Examination Time Table.</td>
            <td className="border p-2">RTU B.Tech. I Year I Semester Back Examination for students enrolled in session 2020-21 and onward batch Time Table is enclosed for your reference.</td>
            <td className="border p-2">
              <a className="text-primary" href="https://drive.google.com/file/d/1gc9inXhhrEjnTPK7QnBJFw-0bq_k0med/view?usp=drive_link">PDF</a>
            </td>
          </tr>
           <tr>
            <td className="border p-2">9</td>
            <td className="border p-2">B.Tech. III - Semester RTU Main / Back and Re Back Examination Jan 2026 - Time Table.</td>
            <td className="border p-2">Time Table of RTU B.Tech. III - Semester Examination is enclosed herewith for your reference.</td>
            <td className="border p-2">
              <a className="text-primary" href="https://drive.google.com/file/d/1h6nzvS32Q23YOUvOeiFxY6ygEAkpyA3t/view?usp=drive_link">PDF</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExamTimetable;
