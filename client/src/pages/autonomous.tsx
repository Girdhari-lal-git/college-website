import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import OverviewSection from "@/components/OverviewSection";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import { useState } from "react";

const ImportantAnnouncements = () => {
  const [activeTab, setActiveTab] = useState("governance");

  const governanceLinks = [
    { title: "Governing Body and MoM", link: "/governing-council" },
    { title: "Academic Council and MoM", link: "/academicCouncil" },
    { title: "BOS and MoM", link: "/BoS" },
    { title: "Finance Committee and MoM", link: "https://www.piet.poornima.org/PIET_NAAC_SSR/committees/7_Finance_committee_2024-25.pdf" },
  ];

  const syllabusLinks = [
    { title: "View Syllabus", link: "/syllabus" },
    
  ];

  const announcements = [
    {
      title: "Circular-End Semester Practical Examination timetable (First Year- First Semester 2025-26)",
      date: "2025-12-13",
      link: "https://drive.google.com/file/d/1mwNJRXihlglzhpScKdMY82CTM4VGVf2e/view?usp=drive_link",
    },
    {
      title: "Circular - End Semester Theory Examination timetable for B.Tech. First Year, First Semester (January 2026)",
      date: "2025-12-13",
      link: "https://drive.google.com/file/d/1LyuDN3VF2qNnRCHwQmPyFdxkxBdLv3_r/view?usp=drive_link",
    }, 
    {
      title: "Circular - Academic and Examination Policy of PIET as an Autonomous Institution",
      date: "2025-11-08",
      link: "https://drive.google.com/file/d/1_W20LF_ShbHlJQgqGk9M2GxLnCb99OPC/view?usp=drive_link",
    },
    {
      title: "UGC Notification of Autonomous Status",
      date: "2025-01-15",
      link: "/notices/ugc-autonomy-notification.pdf",
    },
    {
      title: "RTU Approval Order",
      date: "2025-01-20",
      link: "/notices/rtu-autonomy-approval.pdf",
    },
    {
      title: "Examination Guidelines under Autonomous Scheme",
      date: "2025-02-01",
      link: "/notices/exam-guidelines.pdf",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Important Information
        </h2>
        <p className="text-center text-neutral-600 mb-10">
          Access governance documents, syllabus details, policies, and official
          announcements.
        </p>

        {/* Tabs */}
        <div className="w-[90%] mx-auto flex justify-center gap-8 mb-4 flex-wrap">
          {["governance", "syllabus", "policies", "announcements"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                tab === "policies"
                  ? (window.location.href = "/rules-regulation")
                  : setActiveTab(tab)
              }
              className={`px-6 py-2 rounded-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-white text-primary border hover:bg-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow divide-y divide-neutral-200">
          {activeTab === "governance" &&
            governanceLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center p-4 hover:bg-neutral-70 transition"
              >
                 <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-neutral-500"></p>
              </a>
            ))}

          {activeTab === "syllabus" &&
            syllabusLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center p-4 hover:bg-neutral-50 transition"
              >
                 <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-neutral-500"></p>
              </a>
            ))}

          {activeTab === "announcements" &&
            announcements.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 hover:bg-neutral-50 transition"
              >
                <div>
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.date}</p>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Download
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const highlights = [
  "Full academic freedom to design and update curriculum regularly",
  "Examinations, evaluations, and results managed by the institute",
  "Faster declaration of results ensuring efficiency",
  "Flexibility to adopt modern teaching-learning practices",
  "Enhanced research and innovation ecosystem",
];

const benefits = [
  "Choice-Based Credit System (CBCS) with flexibility in course selection",
  "Curriculum aligned with industry and emerging technologies",
  "Faster academic decisions and timely results",
  "More opportunities for internships, industry tie-ups, and placements",
  "Exposure to global collaborations and research projects",
  "Skill-based, outcome-driven education improving employability",
];

const notices = [
  {
    title: "UGC Notification of Autonomous Status",
    date: "2025-01-15",
    link: "/notices/ugc-autonomy-notification.pdf",
  },
  {
    title: "RTU Approval Order",
    date: "2025-01-20",
    link: "/notices/rtu-autonomy-approval.pdf",
  },
  {
    title: "Examination Guidelines under Autonomous Scheme",
    date: "2025-02-01",
    link: "/notices/exam-guidelines.pdf",
  },
];

const Autonomous = () => {
  return (
    <div>
      <AccessibilityFeatures />
      <Header />

      {/* Announcement Strip */}
      <div className="bg-gradient-primary text-white py-3">
        <div className="container text-center font-semibold animate-fadeIn">
          🎉 Poornima Institute of Engineering and Technology is now an{" "}
          <span className="text-accent">Autonomous Institution</span>, approved by{" "}
          <strong>UGC</strong> & <strong>RTU, Kota</strong>.
        </div>
      </div>

      {/* Breadcrumb */}
      <BreadCrumb
        title="Autonomous Status"
        description="Celebrating a new milestone in academic freedom and excellence at PIET."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Autonomous Status", isCurrent: true },
        ]}
      />

      {/* Hero / Overview Section */}
      <OverviewSection
        title="PIET Achieves Autonomous Status"
        subtitle="Empowering Education with Freedom & Innovation"
        reverse={false}
        image={{
          src: "/images/autonomous/autonomous.jpg",
          alt: "Autonomous college campus",
          caption: "Recognized by UGC & RTU, Kota",
        }}
      >
        <p>
          Poornima Institute of Engineering and Technology (PIET) has been
          conferred the prestigious status of{" "}
          <strong>Autonomous Institution</strong> by the{" "}
          <strong>University Grants Commission (UGC)</strong> and{" "}
          <strong>Rajasthan Technical University (RTU)</strong>.  
          <br />
          <br />
          This recognition is a testament to PIET’s consistent pursuit of
          academic excellence, innovation, and holistic student development.
          With autonomy, PIET can now introduce cutting-edge curricula, ensure
          quicker evaluations, and build stronger industry-academic
          collaborations, preparing our students for the future of work.
        </p>
        <Checklist items={highlights} />
      </OverviewSection>

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">
            Why Autonomy Matters for Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <InfoCard
                key={index}
                title={item}
                iconClass="fas fa-check-circle"
                content={<p>{item}</p>}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Important Announcements Section */}
      <ImportantAnnouncements />



      {/* Vision Section with Image */}
      <section className="py-16 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              A New Era of Academic Excellence
            </h2>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              With autonomy, PIET will strengthen its mission to provide
              <strong> flexible, innovative, and globally benchmarked
              education</strong>. We are committed to nurturing leaders and
              innovators through updated curricula, research initiatives,
              skill-based learning, and outcome-driven education.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Our journey as an Autonomous Institution will open doors to{" "}
              <strong>international collaborations</strong>, stronger industry
              partnerships, and accelerated growth in{" "}
              <strong>research and innovation</strong>.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Students learning"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
};



export default Autonomous;
