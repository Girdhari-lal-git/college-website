
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
    { sn: 1, category:"Chairman, Academic Council", nominationby:"Shanti Education Society", name: "Dr. Dinesh Goyal", address: "Principal & Director, Poornima Institute of Engineering & Technology, Jaipur (principal.piet@poornima.org)" },

{ sn: 2, category:"HoD, CSE", nominationby:"Institute Member", name: "Dr. Anil Kumar", address: "HOD, CSE Department, Poornima Institute of Engineering & Technology, Jaipur (anil.kumar@poornima.org)" },

{ sn: 3, category:"HoD, AI&DS", nominationby:"Institute Member", name: "Dr. Budesh Kanwar", address: "HoD, AI&DS Department, Poornima Institute of Engineering & Technology, Jaipur (budesh.kanwar@poornima.org)" },

{ sn: 4, category:"HoD, Applied Sciences", nominationby:"Institute Member", name: "Dr. Sama Jain", address: "HoD, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur (sama.jain@poornima.org)" },

{ sn: 5, category:"HoD, IoT", nominationby:"Institute Member", name: "Dr. Payal Bansal", address: "HoD, IoT Department, Poornima Institute of Engineering & Technology, Jaipur (payal.bansal@poornima.org)" },

{ sn: 6, category:"Teachers", nominationby:"Institute Member", name: "Dr. O. P. Sikhwal", address: "Professor, Mathematics, Poornima Institute of Engineering & Technology, Jaipur (om.sikhwal@poornima.org)" },

{ sn: 7, category:"Teachers", nominationby:"Institute Member", name: "Dr. Rekha Rani Agarwal", address: "Professor, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur (rekharani.agarwal@poornima.org)" },

{ sn: 8, category:"Teachers", nominationby:"Institute Member", name: "Dr. Navin Goyal", address: "Associate Professor, CSE Department, Poornima Institute of Engineering & Technology, Jaipur (Navin.goyal@poornima.org)" },

{ sn: 9, category:"Teachers", nominationby:"Institute Member", name: "Dr. Prince Dawar", address: "Associate Professor, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur (prince.dawar@poornima.org)" },

{ sn: 10, category:"Experts / Academicians", nominationby:"Nominated by Principal", name: "Mr. Sankalp Gupta", address: "Director, TechnoS Center of Excellence, Jaipur (sankalp.g@technos.in)" },

{ sn: 11, category:"Experts / Academicians", nominationby:"Nominated by Principal", name: "Dr. Ashish Jain", address: "CEO, AnkTech Softwares Pvt. Ltd. (ashish.jain@anktech.co.in)" },

{ sn: 12, category:"Experts / Academicians", nominationby:"Nominated by Principal", name: "Dr. Somitra Sanidhya", address: "Professor, Wadhwani School of AI and Intelligent Systems, IIT Kanpur (somitra@iitk.ac.in)" },

{ sn: 13, category:"Experts / Academicians", nominationby:"Nominated by Principal", name: "Dr. Ghanshyam Singh", address: "Professor, EC Department, MNIT Jaipur (gsingh.ece@mnit.ac.in)" },

{ sn: 14, category:"Nominees of the University", nominationby:"University Nominee", name: "Dr. D. N. Vyas", address: "Associate Professor and Principal, MLV Textile & Engineering College, Bhilwara (dnvyas@mlvti.ac.in)" },

{ sn: 15, category:"Nominees of the University", nominationby:"University Nominee", name: "Dr. B. L. Gupta", address: "Associate Professor and Principal, Govt. Engineering College, Dholpur (principal.gecdholpurraj@gmail.com)" },

{ sn: 16, category:"Nominees of the University", nominationby:"University Nominee", name: "Dr. Deepak Bhatia", address: "Assistant Professor, Department of Electronic Engineering, University Dept., RTU Kota (dbhatia@rtu.ac.in)" },

{ sn: 17, category:"Controller of Examination", nominationby:"Institute Member", name: "Dr. Amit Shrivastava", address: "Professor, Electrical Engineering, Poornima Institute of Engineering & Technology, Jaipur (amit.shrivastava@poornima.org)" },

{ sn: 18, category:"Member Secretary", nominationby:"Nominated by Principal", name: "Dr. Ajay Maurya", address: "Professor, AI & DS, Poornima Institute of Engineering & Technology, Jaipur (ajaymaurya@poornima.org)" },

{ sn: 19, category:"Registrar", nominationby:"Invited Member", name: "Dr. Balwan", address: "Registrar, Poornima Institute of Engineering & Technology, Jaipur (registrar.piet@poornima.org)" },

{ sn: 20, category:"IQAC Convener", nominationby:"Invited Member", name: "Dr. Mukesh Chandra", address: "IQAC Convener, Poornima Institute of Engineering & Technology, Jaipur (iqac.piet@poornima.org)" },

{ sn: 21, category:"Member Secretary of BoS", nominationby:"Invited Member", name: "Ex Officio", address: "Member Secretary of all respective BoS" },

  ];

  const meetings = [
    { sn: 1, meeting: "Meeting 1", date: "2025-07-14", mom: "https://drive.google.com/file/d/1tiSM3_s5QAAjLrn5FiCgVi22W8uIrpH1/view?usp=drive_link" },
    { sn: 2, meeting: "Meeting 2", date: "2025-08-13", mom: "https://drive.google.com/file/d/17PB0h5BIfZrRi2Wmbv-1lAtRLODgy_5l/view?usp=drive_link" },
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
          <table className="w-full  border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 border">Sn</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Nominated By</th>
                <th className="px-4 py-2 border">Name of the Member</th>
                <th className="px-4 py-2 border">Designation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.sn} className="text-left hover:bg-gray-50">
                  <td className="border px-4 py-2">{m.sn}</td>
                  <td className="border px-4 py-2">{m.category}</td>
                  <td className="border px-4 py-2">{m.nominationby}</td>
                  <td className="border px-4 py-2">{m.name}</td>
                  <td className="border px-4 py-2">{m.address}</td> 
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
