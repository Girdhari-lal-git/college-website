
import React, { useState } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from '@/components/LazyImage';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import { Calendar, Download } from 'lucide-react';

"use client";

export default function AcademicCouncilPage() {
  const members = [
    { sn: 1, name: "Prof. A. Sharma", designation: "Principal", position: "Chairman" },
    { sn: 2, name: "Dr. B. Gupta", designation: "Professor", position: "Member" },
    { sn: 3, name: "Dr. C. Singh", designation: "Associate Professor", position: "Member" },
  ];

  const meetings = [
    { sn: 1, meeting: "Meeting 1", date: "2023-05-10", mom: "#" },
    { sn: 2, meeting: "Meeting 2", date: "2023-12-01", mom: "#" },
  ];

  return (

    <div className="min-h-screen bg-neutral-50">
         <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Academic Council"
                description="The Academic Council is the highest academic body of the institution, responsible for policy-making in academic matters."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Academic Council", isCurrent: true },
                ]}
            />
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-primary text-center mb-10">
          Academic Council
        </h1>

        {/* About Section */}
        <p className="text-neutral-700 text-lg mb-6 text-justify">
          The Academic Council is the highest academic body of the institution,
          responsible for policy-making in academic matters. It regulates and
          oversees the teaching, learning, and evaluation processes, and ensures
          quality in education and research.
        </p>

        {/* Roles & Responsibilities */}
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Roles & Responsibilities
        </h2>
        <ul className="list-disc pl-6 mb-10 text-neutral-700 space-y-2">
          <li>Approval of courses, curricula, and syllabi.</li>
          <li>Ensuring academic standards and quality assurance.</li>
          <li>Reviewing examination and evaluation methods.</li>
          <li>Promoting research and innovation.</li>
          <li>Advising on academic collaborations and initiatives.</li>
        </ul>

        {/* Members Table */}
        <h2 className="text-xl font-semibold text-primary mb-4">Members</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 border">Sn</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Designation</th>
                <th className="px-4 py-2 border">Position</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.sn} className="text-center hover:bg-gray-50">
                  <td className="border px-4 py-2">{m.sn}</td>
                  <td className="border px-4 py-2">{m.name}</td>
                  <td className="border px-4 py-2">{m.designation}</td>
                  <td className="border px-4 py-2">{m.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Meetings Table */}
        <h2 className="text-xl font-semibold text-primary mb-4">Meetings & MoM</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 border">Sn</th>
                <th className="px-4 py-2 border">Meeting</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">MoM</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((m) => (
                <tr key={m.sn} className="text-center hover:bg-gray-50">
                  <td className="border px-4 py-2">{m.sn}</td>
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
