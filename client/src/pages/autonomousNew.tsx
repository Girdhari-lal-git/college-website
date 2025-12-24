import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import Checklist from "@/components/Checklist";
import OverviewSection from "@/components/OverviewSection";
import SyllabusExplorer from "@/components/autonomous/SyllabusExplorer";

/* Components */
import AutonomousTabs from "@/components/autonomous/AutonomousTabs";
import GovernancePanel from "@/components/autonomous/GovernancePanel";
import SyllabusPanel from "@/components/autonomous/SyllabusPanel";
import ExamSection from "@/components/autonomous/exam/ExamSection";



/* Data */
import { governanceData } from "@/data/governance";

/* OPTIONAL: syllabus data (dummy for now, replace later) */
const minorSyllabus = [
  {
    srNo: 1,
    offeringDept: "Computer Science & Engineering",
    title: "Minor in Artificial Intelligence",
    supportingPrograms: "CSE, AI & DS, IT",
    link: "/pdfs/syllabus/minor-ai.pdf"
  }
];

const honorsSyllabus = [
  {
    srNo: 1,
    department: "Computer Science & Engineering",
    title: "Honors in Data Science",
    branch: "CSE",
    link: "/pdfs/syllabus/honors-ds.pdf"
  }
];

const highlights = [
  "Full academic freedom to design and update curriculum regularly",
  "Examinations, evaluations, and results managed by the institute",
  "Faster declaration of results ensuring efficiency",
  "Flexibility to adopt modern teaching-learning practices",
  "Enhanced research and innovation ecosystem",
];

const AutonomousPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<
    "about" | "announcements" | "governance" | "syllabus" | "policies" | "exam-section"
  >("about");

  return (
    <div>
         <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="PIET- an autonomous Institute"
                description="Poornima Institute operates as an autonomous institution with academic,
          administrative, and financial autonomy in accordance with UGC norms."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "An Autonomous Institute",
                        isCurrent: true,
                    },
                ]}
            />
    
    <section className="section-padding container mx-auto mt-10 mb-20">
     

      {/* TABS */}
      <AutonomousTabs active={activeTab} onChange={(tab: string) => setActiveTab(tab as "about" | "announcements" | "governance" | "syllabus" | "policies" | "exam-section")} />

      {/* TAB CONTENT */}

     
      <div className="mt-6">
        {/* ABOUT AUTONOMY */}
        {activeTab === "about" && (
            
          <div className="card-hover border rounded-lg p-6 prose max-w-none">
             {/* Hero / Overview Section */}
      <OverviewSection
        title="PIET- An Autonomous Institute"
        subtitle="Empowering Education with Freedom & Innovation"
        reverse={false}
        image={{
          src: "/images/autonomous/autonomous.jpg",
          alt: "Autonomous college campus",
          caption: "Recognized by UGC & RTU, Kota",
        }}
      >
        <p className="mb-4 text-justify">
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
            <h3>About Autonomy</h3>
            <p>
              An autonomous engineering college has the freedom to design its
              curriculum, adopt innovative teaching methods, and conduct
              examinations independently while adhering to UGC and affiliating
              university regulations.
            </p>

            <h4>Benefits</h4>
            <ul>
              <li>Industry-relevant and flexible curriculum</li>
              <li>Faster academic reforms</li>
              <li>Enhanced research and innovation</li>
            </ul>

            <h4>Responsibilities</h4>
            <ul>
              <li>Maintain academic standards</li>
              <li>Ensure transparent evaluation</li>
              <li>Regular academic audits</li>
            </ul>
          </div>
        )}

        {/* ANNOUNCEMENTS */}
        {activeTab === "announcements" && (
          <div className="card-hover border rounded-lg p-6">
            <h3 className="font-heading mb-4">Announcements</h3>
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-2">Announcement</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">
                    Autonomous Regulations Notification
                  </td>
                  <td className="border p-2">15-07-2024</td>
                  <td className="border p-2">
                    <a className="text-primary" href="#">
                      PDF
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* GOVERNANCE */}
        {activeTab === "governance" && (
          <GovernancePanel data={governanceData} />
        )}

        {/* SYLLABUS */}
        {activeTab === "syllabus" && <SyllabusExplorer />}


        {/* POLICIES */}
        {activeTab === "policies" && (
          <div className="card-hover border rounded-lg p-6">
            <h3 className="font-heading mb-4">Policies</h3>
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-2">Sr. No.</th>
                  <th className="border p-2">Policy Name</th>
                  <th className="border p-2">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Academic Integrity Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="#">
                      PDF
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {/* EXAM SECTION */}
        {activeTab === "exam-section" && <ExamSection />}
      </div>
    </section>
    <Cta />
    <Footer />
    </div>
  );
};

export default AutonomousPage;
