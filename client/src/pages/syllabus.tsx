import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import DynamicTable from "@/components/DynamicTable ";
import { useState } from "react";

const programs = [
  "Computer Engineering",
  "Artificial Intelligence & Data Science",
  "CSE (Artificial Intelligence)",
  "CSE (Data Science)",
  "CSE (IoT)",
  "Electronics and Communication Engineering",
  "Electrical Engineering",
  "CSE (Indian Language)",
  
];

export default function SyllabusPage() {
  const [year, setYear] = useState(1);
  const [program, setProgram] = useState(programs[0]);

  return (

    <div>

         <Header />
            <BreadCrumb
                title="Downloads"
                description="Download various forms and documents for staff and student use."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Downloads", isCurrent: true },
                ]}
            />
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary text-center mb-10">
          Syllabus
        </h1>

        {/* Year Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[1, 2, 3, 4].map((y) => (
            <button
              key={y}
              onClick={() => {
                setYear(y);
                setProgram(programs[0]); // reset to first program
              }}
              className={`px-6 py-2 rounded-lg font-semibold shadow-md transition-all ${
                year === y
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary hover:bg-primary/10"
              }`}
            >
              Year {y}
            </button>
          ))}
        </div>

        {/* Year Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          {year === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Year 1 – Common Foundation Courses
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li>Engineering Mathematics I & II</li>
                <li>Engineering Physics</li>
                <li>Engineering Chemistry</li>
                <li>Basic Electrical & Electronics Engineering</li>
                <li>Computer Programming</li>
                <li>Communication Skills</li>
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 transition"
                >
                  Download Full Syllabus (PDF)
                </a>
              </div>
            </div>
          )}

          {year > 1 && (
  <div>
    <h2 className="text-2xl font-bold text-secondary mb-6">
      Year {year} – Program Syllabi
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-2 border">Sr. No.</th>
            <th className="px-4 py-2 border">Name of Program</th>
            <th className="px-4 py-2 border">Syllabus (PDF)</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((p, idx) => (
            <tr key={idx} className="text-center hover:bg-gray-50">
              <td className="border px-4 py-2">{idx + 1}</td>
              <td className="border px-4 py-2">{p}</td>
              <td className="border px-4 py-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Syllabus
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

        </div>
      </div>
    </section>
    <Cta />
    <Footer />
    </div>
  );
}
