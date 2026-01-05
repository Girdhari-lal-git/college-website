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

/* OPTIONAL: syllabus data */
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
                    UGC Grants Autonomy to PIET (Approval Letter)
                  </td>
                  <td className="border p-2">03-07-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/123FMQxBN6xvkRDkEOpDi-2yS0dQw5Cab/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    RTU Notification on PIET's Autonomous Status
                  </td>
                  <td className="border p-2">09-07-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1TeLf_4NWqRtsTm5jtVsMJjK9r4hYMHT_/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    Constitution of PIET Autonomous board of Governors
                  </td>
                  <td className="border p-2">10-06-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1dQtIsQlimHEzx9G5WhiFe6u8d_pq1cbz/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    Constitution of PIET Academic Council
                  </td>
                  <td className="border p-2">21-07-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1_hbp_YjqD1ct65PNU1d9R6epXVrEhxNB/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    Publication of Academic and Examination Policy for Autonomous Batches (Admitted from Academic Year 2025–2026 Onwards)
                  </td>
                  <td className="border p-2">08-11-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1_W20LF_ShbHlJQgqGk9M2GxLnCb99OPC/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    Constitution of Board of Studies for Department of Applied Sciences
                  </td>
                  <td className="border p-2">28-07-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1zVIkXdTOHu3TdmhtK--CCMS9_vCaUvKK/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    Constitution of Board of Studies for Department of Computer Science & Engineering
                  </td>
                  <td className="border p-2">14-08-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1TdLrWFk9Sb2Ge3FCPxnHsNCDAyeUB9e4/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                   Constitution of Board of Studies for Department of Artificial Intelligence & Data Science
                  </td>
                  <td className="border p-2">14-08-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/15F3oKqm7oLnOgYKOzorbpPr7A6DUNzRZ/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">
                    Constitution of Board of Studies for Department of Internet of Things
                  </td>
                  <td className="border p-2">12-08-2025</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1RUbatq8h4xJQ9QK6vmXhGmEF8ZzTgtd5/view?usp=drive_link">
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

        {/* SYLLABUS EXPLORER */}
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
                  <td className="border p-2">Academic and examination Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1j5RsxfifAv7Rz1131ra4xCSUO5jc7s9W/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">2</td>
                  <td className="border p-2">Service Rules/ Human Resource Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1T-fPtAhwGuKgahTu0VDwHyNhy-MExMZj/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">3</td>
                  <td className="border p-2">Code of Conduct for Faculty, Staff and Students</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1vsi_6FrfkIOOHlI9tM6fTVAevWKHf8IC/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">4</td>
                  <td className="border p-2">Admission Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1fPFuygnbBY_RD9zxBJH_7ajC7aRZ94zy/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">5</td>
                  <td className="border p-2">Student Grievance Redressal Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1CxjIZygLQ3wMvc3ZlqSxN4YWYF9pYVgG/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">6</td>
                  <td className="border p-2">Anti-Ragging Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="#">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">7</td>
                  <td className="border p-2">Prevention of Sexual Harassment Policy(ICC)</td>
                  <td className="border p-2">
                    <a className="text-primary" href="#">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">8</td>
                  <td className="border p-2">Equal Opportunity Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1xBlKPmy9Sx-RHh-ha0jXPbwgHXjr8aEp/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td className="border p-2">9</td>
                  <td className="border p-2">Internship Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1fCZHQYXUVpBNiMgJ0PCCieC7UZELY2Z2/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">10</td>
                  <td className="border p-2">Internal Quality Assurance Cell (IQAC) Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">11</td>
                  <td className="border p-2">Fee Refund Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/11Sk42Fd1opFSsa0AwR_yEIMqOfOa6Im0/view?usp=drive_link">
                      PDF
                    </a>
                  </td>
                </tr>
                 <tr>
                  <td className="border p-2">12</td>
                  <td className="border p-2">Finance Policy</td>
                  <td className="border p-2">
                    <a className="text-primary" href="https://drive.google.com/file/d/1ffyGVMiDl1Xiw7tT_QYJg89m8MN5iwgV/view?usp=drive_link">
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
