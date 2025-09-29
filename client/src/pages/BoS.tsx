
import React, { useState } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from '@/components/LazyImage';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import { Calendar, Download } from 'lucide-react';

"use client";


const bosTabs = ["CSE", "AI & DS", "IoT", "Applied Sciences"];

// Meeting data (without committee column)
const bosMeetings: Record<string, any[]> = {
  CSE: [
    { srNo: 1, meeting: "BOS Meeting 1", date: "2023-05-15", mom: "#" },
    { srNo: 2, meeting: "BOS Meeting 2", date: "2023-11-10", mom: "#" },
  ],
  "AI & DS": [{ srNo: 1, meeting: "BOS Meeting 1", date: "2023-07-20", mom: "#" }],
  IoT: [{ srNo: 1, meeting: "BOS Meeting 1", date: "2023-06-12", mom: "#" }],
  "Applied Sciences": [{ srNo: 1, meeting: "BOS Meeting 1", date: "2023-08-01", mom: "#" }],
};

// Committee members data per department
const bosCommittees: Record<string, any[]> = {
  CSE: [
    { srNo: 1, name: "Prof. A Sharma", designation: "Professor", position: "Chairman" },
    { srNo: 2, name: "Dr. B Gupta", designation: "Associate Professor", position: "Member" },
  ],
  "AI & DS": [
    { srNo: 1, name: "Dr. C Singh", designation: "Professor", position: "Chairman" },
  ],
  IoT: [
    { srNo: 1, name: "Dr. D Kumar", designation: "Professor", position: "Chairman" },
  ],
  "Applied Sciences": [
    { srNo: 1, name: "Dr. E Verma", designation: "Professor", position: "Chairman" },
  ],
};

export default function BOSPage() {
  const [activeTab, setActiveTab] = useState("CSE");

  return (

    <div className="min-h-screen bg-neutral-50">
         <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Board of Studies (BOS)"
                description="The Board of Studies (BOS) is the primary academic body in each department, responsible for curriculum design, review, and updates."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Board of Studies (BOS)", isCurrent: true },
                ]}
            />
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-primary text-center mb-10">
          Board of Studies (BOS)
        </h1>

        {/* About Section */}
        <p className="text-neutral-700 text-lg mb-6 text-justify">
          The Board of Studies (BOS) is the primary academic body in each
          department, responsible for designing, reviewing, and updating
          curricula, syllabi, and teaching methodologies. It ensures that the
          academic programs remain relevant, comprehensive, and aligned with
          industry needs and university guidelines.
        </p>

        {/* Roles & Responsibilities */}
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Roles & Responsibilities
        </h2>
        <ul className="list-disc pl-6 mb-10 text-neutral-700 space-y-2">
          <li>Formulate and recommend curriculum and syllabi for approval.</li>
          <li>Review academic content periodically and suggest updates.</li>
          <li>Ensure inclusion of emerging technologies and skills.</li>
          <li>Recommend reference materials, lab practices, and teaching innovations.</li>
          <li>Assess academic quality and relevance to industry standards.</li>
        </ul>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {bosTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold shadow-md transition-all ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary hover:bg-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

          {/* Committee Table */}
        <h2 className="text-xl font-semibold text-primary mb-4">
          {activeTab} – Committee Members
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="px-4 py-2 border">Sr. No.</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Designation</th>
                <th className="px-4 py-2 border">Position</th>
              </tr>
            </thead>
            <tbody>
              {bosCommittees[activeTab].map((c, idx) => (
                <tr key={idx} className="text-center hover:bg-gray-50">
                  <td className="border px-4 py-2">{c.srNo}</td>
                  <td className="border px-4 py-2">{c.name}</td>
                  <td className="border px-4 py-2">{c.designation}</td>
                  <td className="border px-4 py-2">{c.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Meetings Table */}
        <h2 className="text-xl font-semibold text-primary mb-4">
          {activeTab} – Meetings
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 border">Sr. No.</th>
                <th className="px-4 py-2 border">Meeting Number</th>
                <th className="px-4 py-2 border">Date of Meeting</th>
                <th className="px-4 py-2 border">MoM</th>
              </tr>
            </thead>
            <tbody>
              {bosMeetings[activeTab].map((m, idx) => (
                <tr key={idx} className="text-center hover:bg-gray-50">
                  <td className="border px-4 py-2">{m.srNo}</td>
                  <td className="border px-4 py-2">{m.meeting}</td>
                  <td className="border px-4 py-2">{m.date}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={m.mom}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      View MoM
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </section>
    <Cta />
    <Footer />
    </div>
  );
}



