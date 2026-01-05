import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

/* ================= DATA ================= */

const membershipBenefits = [
  "Access to IEEE Xplore Digital Library",
  "Global professional networking",
  "Workshops, webinars & certifications",
  "Leadership and volunteering opportunities",
  "Discounts on conferences & publications",
  "Recognition through IEEE awards",
];

const branchBenefits = [
  "Funding support for events & projects",
  "Industry mentoring and expert sessions",
  "Research and innovation culture",
  "Professional awareness programs",
  "Collaboration with global IEEE chapters",
];

const activities = [
  { date: "15 Mar 2024", event: "Text Classification & Sentiment Analysis", coordinator: "Dr. Budesh Kanwar" },
  { date: "06 Mar 2024", event: "Launch of IEEE CIS PIET Student Branch", coordinator: "Dr. Budesh Kanwar" },
  { date: "28–29 Feb 2024", event: "ANN Workshop using Python & TensorFlow", coordinator: "Dr. Sandeep Gupta & Team" },
  { date: "21 Jul 2025", event: "IEEE & Generative AI Session", coordinator: "IEEE PIET" },
  { date: "25 Aug 2025", event: "IEEE Interactive Session", coordinator: "IEEE PIET" },
  { date: "06 Oct 2025", event: "IEEE Day Inaugural", coordinator: "Dr. Payal Bansal" },
  { date: "07 Oct 2025", event: "WIE Inaugural & Panel Discussion", coordinator: "IEEE Team PIET" },
  { date: "08 Oct 2025", event: "IEEE Day Brain War", coordinator: "IEEE Team PIET" },
  { date: "09 Oct 2025", event: "IEEE Gaming Session", coordinator: "IEEE Team PIET" },
  { date: "10 Oct 2025", event: "Udbhav 2025 & Valedictory Ceremony", coordinator: "IEEE Team PIET" },
];

const chapters = [
  {
    name: "Computational Intelligence Society (CIS)",
    members: [
      { role: "Vice Chairperson", name: "Jayansh Jaiminee", reg: "PIET24CA027" },
      { role: "Treasurer", name: "Shravan Sharma", reg: "PIET24CD052" },
      { role: "Secretary", name: "Bhoomi Soni", reg: "PIET25EC004" },
      { role: "Webmaster", name: "Vibha Jain", reg: "PIET25CD059" },
    ],
  },
  {
    name: "Antennas & Propagation Society (APS)",
    members: [
      { role: "Vice Chairperson", name: "Ujjwal Dubey", reg: "PIET24CI042" },
      { role: "Treasurer", name: "Akhilesh Agnihotri", reg: "PIET25CS013" },
      { role: "Secretary", name: "Hariom Chaudhary", reg: "PIET24AD025" },
    ],
  },
  {
    name: "Circuits & Systems Society (CAS)",
    members: [
      { role: "Vice Chairperson", name: "Ankit Rao", reg: "PIET24CS019" },
      { role: "Treasurer", name: "Hrishita Rathore", reg: "PIET25EC010" },
      { role: "Secretary", name: "Mahi Rajawat", reg: "PIET25CS088" },
    ],
  },
  {
    name: "Women in Engineering (WIE)",
    members: [
      { role: "Chairperson", name: "Khwaish Saini", reg: "PIET23AD030" },
      { role: "Vice Chairperson", name: "Palak Agrawal", reg: "PIET24AD039" },
      { role: "Treasurer", name: "Manya Rohilla", reg: "PIET25CD033" },
      { role: "Secretary", name: "Gargi Bindal", reg: "PIET25CD019" },
    ],
  },
  {
    name: "Electromagnetic Compatibility Society (EMC)",
    members: [
      { role: "Chairperson", name: "Muskan Sharma", reg: "PIET23CS108" },
      { role: "Vice Chairperson", name: "Dishu Choudhary", reg: "PIET24AD020" },
      { role: "Treasurer", name: "Pratham Deep", reg: "PIET24CD063" },
      { role: "Secretary", name: "Deepanshu Shekhawat", reg: "PIET24CS042" },
    ],
  },
];

/* ================= COMPONENT ================= */

const IEEEPage = () => (
  <div className="min-h-screen bg-gray-100">
    <AccessibilityFeatures />
    <Header />

    <BreadCrumb
      title="IEEE Student Branch"
      description="Professional excellence, leadership and innovation at PIET"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IEEE Student Branch", isCurrent: true },
      ]}
    />

    {/* HERO */}
    <section className="py-16 bg-white text-center">
      <img src="/images/ieee-logo.png" alt="IEEE Logo" className="mx-auto h-24 mb-6" />
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        The IEEE Student Branch at Poornima Institute of Engineering & Technology
        empowers students through technical excellence, leadership development,
        research exposure, and global professional networking.
      </p>
    </section>

    {/* AWARD */}
    <section className="py-14 bg-gradient-to-r from-[#00629B] to-[#004a78] text-white text-center">
      <h2 className="text-3xl font-extrabold mb-4">
        IEEE India Council Outstanding Emerging Student Branch Award – 2025
      </h2>
      <p className="text-lg max-w-4xl mx-auto">
        Poornima Institute of Engineering & Technology has been honored with this
        prestigious national award in recognition of impactful IEEE activities,
        strong student leadership, and sustained professional excellence.
      </p>
    </section>

    {/* INFO CARDS */}
    <section className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <InfoCard title="About IEEE @ PIET" content="A dynamic professional body fostering innovation, research, leadership, and global exposure." iconClass={""} />
      <InfoCard title="Membership Benefits" content={<Checklist items={membershipBenefits} />} iconClass={""} />
      <InfoCard title="Branch Advantages" content={<Checklist items={branchBenefits} />} iconClass={""} />
    </section>

    

    {/* CHAPTERS */}
    <section className="py-16 bg-white">
      <h2 className="text-3xl text-[#00629B] font-extrabold mb-8 text-center">
        IEEE Student Chapters & Leadership
      </h2>
      <div className="container mx-auto px-6">
        {chapters.map((chapter, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-bold text-[#004a78] mb-4">{chapter.name}</h3>
            <DynamicTable
              columns={[
                { label: "Role", key: "role" },
                { label: "Name", key: "name" },
                { label: "Registration No.", key: "reg" },
              ]}
              data={chapter.members}
            />
          </div>
        ))}
      </div>
    </section>

    {/* CLOSING */}
    <section className="py-12 bg-gray-50 text-center">
      <p className="text-lg text-gray-700 max-w-4xl mx-auto">
        Heartiest congratulations to all the selected student leaders.
        The IEEE Student Branch at PIET looks forward to organizing impactful
        technical events, workshops, and professional initiatives for the
        holistic development of students.
      </p>
    </section>

    {/* ACTIVITIES */}
    <section className="py-16 bg-white">
      <h2 className="text-3xl text-[#00629B] font-extrabold mb-8 text-center">
        Major IEEE Activities
      </h2>
      <div className="container mx-auto px-6">
        <DynamicTable
          columns={[
            { label: "Date", key: "date" },
            { label: "Activity", key: "event" },
            { label: "Coordinator(s)", key: "coordinator" },
          ]}
          data={activities}
        />
      </div>
    </section>

    {/* PHOTO GALLERY */}
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl text-[#00629B] font-extrabold mb-8 text-center">
        Event Gallery
      </h2>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["ieee-1.JPG","ieee-2.JPG","ieee-3.jpg","ieee-4.jpg","ieee-5.jpg","ieee-6.jpg"].map((img, i) => (
          <img
            key={i}
            src={`/images/chapters/ieee/${img}`}
            alt="IEEE Event"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"
          />
        ))}
      </div>
    </section>

    <Cta />
    <Footer />
  </div>
);

export default IEEEPage;
