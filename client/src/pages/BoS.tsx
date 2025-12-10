
import React, { useState } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from '@/components/LazyImage';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import { Calendar, Download } from 'lucide-react';

"use client";


const bosTabs = ["Applied Sciences","CSE", "AI & DS", "IoT", ];

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
  { srNo: 1, Category: "Head of Department (Chairperson)", Nominatedby: "Chairman, Academic Council", name: "Dr. Anil Kumar", address: "Professor (HoD), CSE Department, Poornima Institute of Engineering & Technology, Jaipur anilkumar@poornima.org" },

  { srNo: 2, Category: "Faculty", Nominatedby: "Chairman, Board of Studies", name: "Ms. Shikha Gautam", address: "Assistant Professor (Dy. HoD - Academic), CSE Department, Poornima Institute of Engineering & Technology, Jaipur shikha.gautam@poornima.org" },

  { srNo: 3, Category: "Faculty", Nominatedby: "Chairman, Board of Studies", name: "Mr. Abhishek Dadhich", address: "Assistant Professor (Dy. HoD - Admin), CSE Department, Poornima Institute of Engineering & Technology, Jaipur abhishek.dadhich@poornima.org" },

  { srNo: 4, Category: "Faculty", Nominatedby: "Chairman, Board of Studies", name: "Dr. Shalini Chaudhary", address: "Associate Professor, CSE Department, Poornima Institute of Engineering & Technology, Jaipur shalini.chaudhary@poornima.org" },

  { srNo: 5, Category: "Faculty", Nominatedby: "Chairman, Board of Studies", name: "Dr. Navin Kumar Goyal", address: "Associate Professor, CSE Department, Poornima Institute of Engineering & Technology, Jaipur navin.goyal@poornima.org" },

  { srNo: 6, Category: "Faculty", Nominatedby: "Chairman, Board of Studies", name: "Dr. Shruti Thapar", address: "Associate Professor, CSE Department, Poornima Institute of Engineering & Technology, Jaipur shruti.thapar@poornima.org" },

  { srNo: 7, Category: "Faculty", Nominatedby: "Chairman, Board of Studies", name: "Dr. Prince Dawar", address: "Professor, Humanities, Poornima Institute of Engineering & Technology, Jaipur prince.dawar@poornima.org" },

  { srNo: 8, Category: "Subject experts", Nominatedby: "Academic Council", name: "Dr. Dheeraj Agarwal", address: "Associate Professor, MNIT Bhopal dheerajagrawal@manit.ac.in" },

  { srNo: 9, Category: "Subject experts", Nominatedby: "Academic Council", name: "Dr. Pilli Emmanuel Shubhakar", address: "Associate Professor, CSE, MNIT Jaipur espilli.cse@mnit.ac.in" },

  { srNo: 10, Category: "Expert", Nominatedby: "Nominated by Hon’ble Vice-Chancellor", name: "Sh. Anurag Jagetiya", address: "Assistant Professor, MLV Textile & Engineering College, Bhilwara" },

  { srNo: 11, Category: "Industry/Corporate", Nominatedby: "Nominated by Principal", name: "Rahul Jain", address: "CEO, Project Lead, Avinex Software Pvt. Ltd rj@astroninc.com" },

  { srNo: 12, Category: "Alumni", Nominatedby: "Nominated by Principal", name: "Ms. Tanya Varshney", address: "Alumni (2023 Batch), Student, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur 2019pietcstanya176@poornima.org" },

  { srNo: 13, Category: "Expert", Nominatedby: "Nominated by Principal", name: "Dr. Dilip Singh Sisodia", address: "Associate Professor & HoD, Department of Computer Science and Engineering, NIT Raipur Dssisodia.cs@nitrr.ac.in" },

  { srNo: 14, Category: "Member Secretary", Nominatedby: "Nominated by Principal", name: "Dr. Omprakash Sikhwal", address: "Professor, Mathematics, Poornima Institute of Engineering & Technology, Jaipur om.sikhwal@poornima.org" }
]
,
  "AI & DS": [
  { srNo: 1, Category: "Head of Department (Chairperson)", Nominatedby: "Chairman, Academic Council", name: "Prof. (Dr.) Budesh Kanwar", address: "Professor (HoD), Artificial Intelligence & Data Science Department, PIET, Jaipur budesh.kanwar@poornima.org" },

  { srNo: 2, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Ms. Alka Rani", address: "Assistant Professor (Dy. HoD), Artificial Intelligence & Data Science Department, PIET, Jaipur alka.rani@poornima.org" },

  { srNo: 3, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Prof. (Dr.) Priya Mathur", address: "Professor, Artificial Intelligence & Data Science Department, PIET, Jaipur priya.mathur@poornima.org" },

  { srNo: 4, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Prof. (Dr.) Ajay Maurya", address: "Professor, Artificial Intelligence & Data Science Department, PIET, Jaipur ajaymaurya@poornima.org" },

  { srNo: 5, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Prof. (Dr.) Sandeep Gupta", address: "Professor, Artificial Intelligence & Data Science Department, PIET, Jaipur sandeep.gupta@poornima.org" },

  { srNo: 6, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Dr. Saurabh Raj", address: "Associate Professor, Artificial Intelligence & Data Science Department, PIET, Jaipur saurabh.raj@poornima.org" },

  { srNo: 7, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Dr. Krati Sharma", address: "Professor, Applied Sciences Department, PIET, Jaipur krati.sharma@poornima.org" },

  { srNo: 8, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Mr. Anurag Anand Duvey", address: "Assistant Professor, Artificial Intelligence & Data Science Department, PIET, Jaipur anurag.duvey@poornima.org" },

  { srNo: 9, Category: "Subject experts", Nominatedby: "Academic Council", name: "Dr. Basant Agarwal", address: "Associate Professor, Central University Rajasthan basant@curaj.ac.in" },

  { srNo: 10, Category: "Subject experts", Nominatedby: "Academic Council", name: "Dr. Satish Kumar Singh", address: "Associate Professor, IT Department, IIIT Allahabad; Section Chair, IEEE UP Section sk.singh@iiita.ac.in" },

  { srNo: 11, Category: "Expert", Nominatedby: "Nominated by Hon’ble Vice-Chancellor", name: "Sh. Anurag Jagetiya", address: "Assistant Professor, MLV Textile & Engineering College, Bhilwara" },

  { srNo: 12, Category: "Industry", Nominatedby: "Principal", name: "Mr. Virendra Rathore", address: "CEO, 3Edge Technologies Pvt. Ltd virendra@3edgetechnologies.com" },

  { srNo: 13, Category: "Alumni", Nominatedby: "Principal", name: "Mr. Tanishk Bansal", address: "Ex-Student, PIET 2020pietadtanishk58@poornima.org" },

  { srNo: 14, Category: "Expert", Nominatedby: "Principal", name: "Mr. Ram Bhagat Suthar", address: "Director of Software Engineering, McKinsey & Company rambsuthar@gmail.com" },

  { srNo: 15, Category: "Member Secretary", Nominatedby: "Chairman, Board of Studies", name: "Dr. Uday Pratap Singh", address: "Associate Professor (Dy. HoD), Artificial Intelligence & Data Science Department, PIET, Jaipur uday.pratap@poornima.org" }
],
  IoT: [
  { srNo: 1, Category: "Head of Department (Chairperson)", Nominatedby: "Chairman, Academic Council", name: "Dr. Payal Bansal", address: "Professor (HoD), CSE (IoT) Department, PIET, Jaipur payal.bansal@poornima.org" },

  { srNo: 2, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Dr. Ritam Dutta", address: "Professor, CSE (IoT) Department, PIET, Jaipur ritam.dutta@poornima.org" },

  { srNo: 3, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Dr. Aisha Rafi", address: "Associate Professor, Applied Sciences Department, PIET, Jaipur aisha.rafi@poornima.org" },

  { srNo: 4, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Dr. Neetu Sharma", address: "Associate Professor, Applied Sciences Department, PIET, Jaipur neetu.sharma@poornima.org" },

  { srNo: 5, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Dr. Rajendra Singh", address: "Associate Professor, Applied Sciences Department, PIET, Jaipur rajendra.singh@poornima.org" },

  { srNo: 6, Category: "Teachers", Nominatedby: "Chairman, BOS", name: "Dr. Sanjay Sinha", address: "Professor, Computer Science & Engineering Department, PIET, Jaipur sanjay.sinha@poornima.org" },

  { srNo: 7, Category: "Subject experts", Nominatedby: "Academic Council", name: "Dr. Vijay Chatterjee", address: "Senior Scientist, CEERI Pilani vc@ceeri.res.in" },

  { srNo: 8, Category: "Subject experts", Nominatedby: "Academic Council", name: "Dr. Dipti Saxena", address: "Associate Professor, Department of Electrical Engineering, MNIT Jaipur Dsaxena.ee@mnit.ac.in" },

  { srNo: 9, Category: "Expert", Nominatedby: "Nominated by Hon’ble Vice-Chancellor", name: "Dr. M.L. Meena", address: "Assistant Professor, Department of Electronics Engineering, University Department, RTU Kota" },

  { srNo: 10, Category: "Industry/Corporate", Nominatedby: "Nominated by Principal", name: "Dr. Anupam Agarwal", address: "Chair, IIFON Anupamagrawal.in@gmail.com" },

  { srNo: 11, Category: "Expert", Nominatedby: "Nominated by Principal", name: "Dr. John Jose", address: "Head, Centre for Career Development & Associate Professor, Department of CSE, IIT Guwahati johnjose@iitg.ac.in" },

  { srNo: 12, Category: "Expert", Nominatedby: "Nominated by Principal", name: "Dr. Abhishek Sharma", address: "Associate Professor, Department of Smart Embedded Systems and IoT, LNMIIT Jaipur, Rajasthan" },

  { srNo: 13, Category: "Member Secretary", Nominatedby: "Chairman, Board of Studies", name: "Dr. Madhav Sharma", address: "Associate Professor, CSE (IoT) Department, PIET, Jaipur madhav.sharma@poornima.org" }
],
  "Applied Sciences": [
  { srNo: 1, Category: "Head of Department(Chairperson)", Nominatedby: "Chairman, Academic Council", name: "Dr. Sama Jain", address: "Professor (HoD), Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur sama.jain@poornima.org" },

  { srNo: 2, Category: "Teachers", Nominatedby: "Chairman, Board of Studies", name: "Dr. Nitin Mukesh Mathur", address: "Associate Professor (Dy. HoD - Admin), Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur nitinmukesh@poornima.org" },

  { srNo: 3, Category: "Teachers", Nominatedby: "Chairman, Board of Studies", name: "Dr. Sanjay Kumar Sinha", address: "Professor, CSE Department, Poornima Institute of Engineering & Technology, Jaipur sanjay.sinha@poornima.org" },

  { srNo: 4, Category: "Teachers", Nominatedby: "Chairman, Board of Studies", name: "Dr. Neetu Sharma", address: "Associate Professor, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur neetu.sharma@poornima.org" },

  { srNo: 5, Category: "Teachers", Nominatedby: "Chairman, Board of Studies", name: "Dr. Ashish Laddha", address: "Associate Professor, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur ashish.laddha@poornima.org" },

  { srNo: 6, Category: "Teachers", Nominatedby: "Chairman, Board of Studies", name: "Dr. Mahak Bhatia", address: "Associate Professor, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur mahak.bhatia@poornima.org" },

  { srNo: 7, Category: "Teachers", Nominatedby: "Chairman, Board of Studies", name: "Dr. Rajendra Singh", address: "Associate Professor, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur rajendra.singh@poornima.org" },

  { srNo: 8, Category: "Teachers", Nominatedby: "Chairman, Board of Studies", name: "Dr. Krati Sharma", address: "Professor, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur krati.sharma@poornima.org" },

  { srNo: 9, Category: "Teachers", Nominatedby: "Chairman, Board of Studies", name: "Dr. Rekha Rani Agrawal", address: "Professor, Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur rekharani.agrawal@poornima.org" },

  { srNo: 10, Category: "Subject experts", Nominatedby: "Academic Council", name: "Dr. Akash Saxena", address: "Professor, EE Dept., Central University of Haryana drakash@cuh.ac.in akashvitjpr@gmail.com" },

  { srNo: 11, Category: "Subject experts", Nominatedby: "Academic Council", name: "Dr. Sushil Kumar Jain", address: "Professor, Manipal University Jaipur sushilkumar.jain@jaipur.manipal.edu" },

  { srNo: 12, Category: "Expert", Nominatedby: "Nominated by Hon’ble Vice-Chancellor", name: "Dr. Irum Alvi", address: "Assistant Professor, Department of HEAS, UD, RTU, Kota ialvi@rtu.ac.in" },

  { srNo: 13, Category: "Industry/ corporate", Nominatedby: "Nominated by Principal", name: "Dr. Sunil Kumar Jangir", address: "Senior Manager - Projects & Process, Wisflux Private Limited, Jaipur sunil.j@wisflux.com" },

  { srNo: 14, Category: "Expert", Nominatedby: "Nominated by Principal", name: "Dr. Ashish Kumar Tripathi", address: "Assistant Professor, Department of Computer Science, MNIT, Jaipur ashish.cse@mnit.ac.in" },

  { srNo: 15, Category: "Member Secretary", Nominatedby: "Nominated by Principal", name: "Dr. Bhanu Pratap", address: "Associate Professor (Dy. HoD - Academic), Applied Sciences Department, Poornima Institute of Engineering & Technology, Jaipur bhanu.pratap@poornima.org" },

  { srNo: 16, Category: "Invited Member", Nominatedby: "Nominated by Principal", name: "Dr. Abhineet Verma", address: "Assistant Professor, Department of Chemistry, MNIT, Jaipur abhineet.chy@mnit.ac.in" },

  { srNo: 17, Category: "Invited Member", Nominatedby: "Nominated by Principal", name: "Dr. Amit Srivastava", address: "Professor, Department of Electrical Engineering, Poornima Institute of Engineering & Technology, Jaipur amit.shrivastava@poornima.org" },

  { srNo: 18, Category: "Invited Member", Nominatedby: "Nominated by Principal", name: "Dr. Mukesh Chandra", address: "Professor, Department of Physics, Poornima Institute of Engineering & Technology, Jaipur mukesh.chandra@poornima.org" },

  { srNo: 19, Category: "Invited Member", Nominatedby: "Nominated by Principal", name: "Dr. Balwan", address: "Associate Professor, Department of Civil Engineering, Poornima Institute of Engineering & Technology, Jaipur balwan.sheshma@poornima.org" }
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
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Nominated by</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Address</th>
              </tr>
            </thead>
            <tbody>
              {bosCommittees[activeTab].map((c, idx) => (
                <tr key={idx} className="text-center hover:bg-gray-50">
                  <td className="border px-4 py-2">{c.srNo}</td>
                  <td className="border px-4 py-2">{c.Category || '-'}</td>
                  <td className="border px-4 py-2">{c.Nominatedby || '-'}</td>  
                  <td className="border px-4 py-2">{c.name}</td>
                  <td className="border px-4 py-2">{c.address || '-'}</td>
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



