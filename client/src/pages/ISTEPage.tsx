
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import OverviewSection from '@/components/OverviewSection'
import InfoCard from '@/components/InfoCard'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const studentOfficeBearers = [
  { registrationNo: 'PIET24CA060', name: 'Umesh Jangid', phone: '7014934436', designation: 'Chair Person' },
  { registrationNo: 'PIET23CR038', name: 'Lakshita Prajapati', phone: '8000696041', designation: 'Treasurer' },
  { registrationNo: 'PIET25CR051', name: 'Sakshi Chanda', phone: '9256236357', designation: 'Secretary' },
  { registrationNo: 'PIET23AD050', name: 'Rudraksh Garg', phone: '7597714387', designation: 'Executive Committee Member' },
  { registrationNo: 'PIET23CS089', name: 'Komal Choudhary', phone: '9352869968', designation: 'Executive Committee Member' },
  { registrationNo: 'PIET24CA006', name: 'Anshul Kumar', phone: '9462735373', designation: 'Executive Committee Member' },
  { registrationNo: 'PIET25CR056', name: 'Siddhi Gupta', phone: '6350099272', designation: 'Executive Committee Member' },
  { registrationNo: 'PIET24CS123', name: 'Piyush Bissa', phone: '7976187978', designation: 'Executive Committee Member' },
  { registrationNo: 'PIET25CR030', name: 'Lucky Saini', phone: '9549974901', designation: 'Executive Committee Member' },
  { registrationNo: 'PIET25CR023', name: 'Kanishk Sahrma', phone: '7850061130', designation: 'Executive Committee Member' }
]

const facultyCoordinators = [
  { department: 'Applied Sciences', name: 'Dr. Balwan', phone: '9001893262', designation: 'Chairman' },
  { department: 'Applied Sciences', name: 'Dr. Mukesh Chandra', phone: '9897195374', designation: 'Secretary' },
  { department: 'Applied Sciences', name: 'Dr. Sama Jain', phone: '9414321634', designation: 'Faculty Advisor' },
  { department: 'Applied Sciences', name: 'Dr. Bhanu Pratap', phone: '8118874724', designation: 'Faculty Coordinators' },
  { department: 'AI&DS', name: 'Dr. Uday Pratap', phone: '6394235053', designation: 'Faculty Coordinators' },
  { department: 'AI&DS', name: 'Dr. Budesh Kanwar', phone: '9460503316', designation: 'Faculty Coordinators' },
  { department: 'CSE', name: 'Dr. Anil Kumar', phone: '9896017351', designation: 'Faculty Coordinators' },
  { department: 'CSE', name: 'Mr. Dinesh Bhatia', phone: '9828153460', designation: 'Faculty Coordinators' },
  { department: 'CSE', name: 'Mr. Vivek Saxena', phone: '7568555557', designation: 'Faculty Coordinators' }
]

const studentColumns = [
  { label: 'Registration No.', key: 'registrationNo' },
  { label: 'Name', key: 'name' },
  { label: 'Phone No.', key: 'phone' },
  { label: 'Designation', key: 'designation' }
]

const facultyColumns = [
  { label: 'Department', key: 'department' },
  { label: 'Name', key: 'name' },
  { label: 'Phone No.', key: 'phone' },
  { label: 'Designation', key: 'designation' }
]

const activitiesData = [
  {
    sno: 1,
    name: "Workshop on Traffic Rules and Road Safety Awareness",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2018-19",
  },
  {
    sno: 2,
    name: "Workshop on IBM IoT",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2018-19",
  },
  {
    sno: 3,
    name: "Workshop on Java Database Connectivity (JDBC)",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2018-19",
  },
  {
    sno: 4,
    name: "Workshop on Software Development Process Using Agile",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2018-19",
  },
  {
    sno: 5,
    name: "Workshop on Applying Agile in Software Projects",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2019-20",
  },
  {
    sno: 6,
    name: "FDP on Machine Learning Using Python – II",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2020-21",
  },
  {
    sno: 7,
    name: "Faculty Development Programme",
    department: "PIET",
    sponsoredBy: "ISTE",
    year: "2020-21",
  },
  {
    sno: 8,
    name: "FDP on IoT Using Raspberry Pi",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2020-21",
  },
  {
    sno: 9,
    name: "Workshop on IoT and Its Applications Using Raspberry Pi",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2021-22",
  },
  {
    sno: 10,
    name: "Workshop on AI & Data Science Master Classes",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2021-22",
  },
  {
    sno: 11,
    name: "Three Days Hands-on Workshop on Basics of Python",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2021-22",
  },
  {
    sno: 12,
    name: "Workshop on Applications of AI Using ML & DL",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2021-22",
  },
  {
    sno: 13,
    name: "Two Days Workshop on Fundamentals of C Language",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2021-22",
  },
  {
    sno: 14,
    name: "ISTE Sponsored Five Days Add-on Program on Website Design & Development with Digital Marketing",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2021-22",
  },
  {
    sno: 15,
    name: "Online Session on Innovations in AI & Data Science and Career Opportunities",
    department: "PIET",
    sponsoredBy: "ISTE",
    year: "2021-22",
  },
  {
    sno: 16,
    name: "FDP on Hands-on Practice on Network Programming",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2022-23",
  },
  {
    sno: 17,
    name: "Three Days Workshop on PHP Database Connectivity",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2022-23",
  },
  {
    sno: 18,
    name: "Three Days Workshop on Cloud Computing and Emerging Trends",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2022-23",
  },
  {
    sno: 19,
    name: "Special Lecture on Application Layer",
    department: "Department of AI & DS, PIET",
    sponsoredBy: "ISTE",
    year: "2022-23",
  },
  {
    sno: 20,
    name: "Two Days Workshop on Internet of Things",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2022-23",
  },
  {
    sno: 21,
    name: "Five Days Industrial Workshop on DevOps Virtualization",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2022-23",
  },
  {
    sno: 22,
    name: "Seminar on Study Abroad by IDP",
    department: "PIET",
    sponsoredBy: "ISTE",
    year: "2022-23",
  },
  {
    sno: 23,
    name: "School Teachers Awareness Program",
    department: "Idea Lab, IIC, PIET",
    sponsoredBy: "ISTE, CSI, AICTE & NSS",
    year: "2022-23",
  },
  {
    sno: 24,
    name: "FDP on Advanced Tools & Techniques for Quality Research Analysis and Writing",
    department: "PIET",
    sponsoredBy: "ISTE",
    year: "2022-23",
  },
  {
    sno: 25,
    name: "First International Conference on Mathematics, Modelling and Statistics (ICMMS 2023)",
    department: "Department of Mathematics, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 26,
    name: "International Student Workshop 2024 on Data Science & Python",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 27,
    name: "Workshop on Neural Networks",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 28,
    name: "Workshop on Natural Language Processing",
    department: "Department of AI & DS, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 29,
    name: "Two Days Workshop on Prompt Engineering with Generative AI",
    department: "Department of AI & DS, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 30,
    name: "Hands-on Data Analytics Workshop by GRRAS Solutions",
    department: "Department of AI & DS, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 31,
    name: "AWS Workshop: Master Cloud Computing Essentials",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 32,
    name: "FDP on Wireless Networks",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 33,
    name: "Python Programming with Flask Framework",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 34,
    name: "Java Full Stack Workshop",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 35,
    name: "DSA Workshop",
    department: "Department of Computer Science & Engineering, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 36,
    name: "Poster Making Competition",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 37,
    name: "Online Quiz",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2023-24",
  },
  {
    sno: 38,
    name: "Write for the Rights Competition",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2024-25",
  },
  {
    sno: 39,
    name: "Five Days Quiz Nights (Instagram)",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2024-25",
  },
  {
    sno: 40,
    name: "Debate Competition",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2025-26",
  },
  {
    sno: 41,
    name: "Industrial Visit",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2025-26",
  },
  {
    sno: 42,
    name: "Research Paper Insights Session",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2025-26",
  },
  {
    sno: 43,
    name: "Career Roadmap Session",
    department: "Department of Applied Sciences, PIET",
    sponsoredBy: "ISTE",
    year: "2025-26",
  },
];


 {/* const activitiesData = [
  {
    sno: 1,
    name: 'ISTE Sponsored Activities Report (2018-2024)',
    download: (
      <a href="https://drive.google.com/file/d/1_b5bvncn_i3ksY-qvpT31z497feAE5-C/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
        <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
          <i className="fas fa-download" /> Download PDF
        </button>
      </a>
    )
  }
] */}

const activitiesColumns = [
  { label: 'S.No', key: 'sno' },
  { label: 'Activity Name', key: 'name' },
  { label: 'Conducting Department', key: 'department' },
  { label: 'Sponsored By', key: 'sponsoredBy' },
  { label: 'Year', key: 'year' }
]

const ISTEPage = () => {
  return (
    <div>
      <AccessibilityFeatures />
      <Header />
      <BreadCrumb
        title="PIET ISTE Chapter"
        description="Discover how our ISTE chapter promotes technical education excellence at PIET."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'ISTE Chapter', isCurrent: true },
        ]}
      />

         {/* ISTE Logo Section */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <img
          src={"/images/council/iste.png"}
          alt="ISTE Logo"
          className="mx-auto h-24 mb-6 transform hover:scale-105 transition-transform duration-300"
        />
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          The ISTE Student Branch at PIET empowers students through innovation, collaboration, and technical excellence.
        </p>
      </div>
    </section>

      <OverviewSection
        title="ISTE Student Chapter @ PIET"
        subtitle="About ISTE"
        reverse={false}
        image={{
          src: '/images/chapters/iste/ISTE_Certificate_3.jpg',
          alt: 'ISTE Chapter at PIET',
        }}
      >
        <p>
          The Indian Society for Technical Education (ISTE) stands as the foremost national non-profit professional society dedicated to the advancement of the technical education system in our nation. With a primary focus on fostering the career development of teachers and nurturing the personality development of students, ISTE is committed to the holistic growth of our technical education system.
        </p>
        <br />
        <p>
          First started in 1941 as the Association of Principals of Technical Institutions (APTI), it was converted into "Indian Society for Technical Education" in 1968 with a view to enlarge its activities to advance the cause of technological education. The ISTE at PIET was started in the year 2010.
        </p>
        <br />
        <p>
          ISTE conducts various co-curricular activities which restore with the changing curriculum and educational processes. It has always tried to improve students' technical prowess, and boost them to put their learning into practice.
        </p>
      </OverviewSection>

      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Vision"
          iconClass="fas fa-eye"
          content={
            <p>
              ISTE's vision is that all educators are empowered to harness technology to accelerate innovation in teaching and learning, and inspire learners to reach their greatest potential.
            </p>
          }
        />
        
        <InfoCard
          title="Mission"
          iconClass="fas fa-bullseye"
          content={
            <p>
              ISTE inspires educators worldwide to use technology to innovate teaching and learning, accelerate good practice and solve tough problems in education by providing community, knowledge and the ISTE standards.
            </p>
          }
        />
      </div>

      <div className="container mx-auto my-10">
        <InfoCard
          title="Aims & Objectives of ISTE Student Chapter"
          iconClass="fas fa-target"
          content={
            <>
              <ul className="list-disc list-inside space-y-2">
                <li>Outline the overall objectives and duties of technical education.</li>
                <li>Utilize the expertise of Engineering Sciences to benefit society.</li>
                <li>Cultivate proficient educators and educational leaders.</li>
                <li>Enhance instructional techniques, practices, and administrative procedures.</li>
                <li>Elevate professional values and benchmarks.</li>
                <li>Establish strong connections between technical institutions, industry, and society.</li>
                <li>Recognize individuals with honorary fellowships, awards, and prizes for advancing the goals of Technical Education.</li>
              </ul>
            </>
          }
        />
      </div>

      <div className="container mx-auto my-10">
        <InfoCard
          title="ISTE at PIET"
          iconClass="fas fa-university"
          content={
            <>
              <ul className="list-disc list-inside space-y-2">
                <li>The PIET maintains an Educational Institution Membership with ISTE, encompassing both faculty and students.</li>
                <li>The membership for faculty members is granted for a lifetime, while for students, it is valid for duration of 4 years.</li>
                <li>Currently, the chapter boasts an impressive count of approximately 800 student members, alongside 15 faculty members from diverse departments.</li>
                <li>The ISTE Student Chapter arranges Inter-departmental competitions, Quiz competitions, and Guest Lectures by distinguished experts.</li>
                <li>Programs focused on enhancing skills in report writing and project management are organized.</li>
                <li>Lectures on moral values and ethics are conducted to inspire these essential principles among members.</li>
                <li>The chapter actively encourages discussions, brain-storming sessions, and group activities to foster innovation.</li>
              </ul>
            </>
          }
        />
      </div>

      <div className="container mt-10 mx-auto">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">Student Office Bearers</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <DynamicTable columns={studentColumns} data={studentOfficeBearers} />
      </div>

      <div className="container mt-14 mx-auto">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">Faculty Coordinators</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <DynamicTable columns={facultyColumns} data={facultyCoordinators} />
      </div>

      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Activities at PIET"
          iconClass="fas fa-calendar-alt"
          content={
            <>
              <p className="mb-3">
                Respective departments decide about technical activities under the ISTE banner. Activities are planned to not affect regular academics.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Inter-departmental competitions and Quiz competitions</li>
                <li>Guest lectures by industry experts</li>
                <li>Skill enhancement programs</li>
                <li>Report writing and project management workshops</li>
                <li>Moral values and ethics sessions</li>
              </ul>
            </>
          }
        />

        <InfoCard
          title="Financial Support"
          iconClass="fas fa-money-bill-wave"
          content={
            <p>
              Financial support for activities is managed through the ISTE account of PIET itself, which includes remuneration for guest speakers, travel allowance, mementos, refreshments, certificates, and gifts. No permission from ISTE New Delhi is required for institute-level activities.
            </p>
          }
        />
      </div>

      <div className="container mt-14 mx-auto">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">ISTE Sponsored Activities</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <DynamicTable columns={activitiesColumns} data={activitiesData} />
      </div>

      <div className="container mt-14 mx-auto mb-16">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">ISTE Certificates</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl">
            <img 
              src="/images/chapters/iste/iste_cert_1.jpg" 
              alt="ISTE Institutional Membership Certificate" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl">
            <img 
              src="/images/chapters/iste/iste_cert_2.jpg" 
              alt="ISTE Institutional Membership Certificate" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            
          </div>
        </div>
      </div>

      <div className="container mt-14 mx-auto mb-16">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">Some Glimpses</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="aspect-square">
    <img
      src="/images/chapters/iste/Stage1.jpeg"
      alt="Event 1"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/iste/iste-2.jpg"
      alt="Event 2"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/iste/iste.JPG"
      alt="Event 3"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/iste/Debate1.jpeg"
      alt="Event 4"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/iste/group1.jpeg"
      alt="Event 5"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/iste/Visit1.jpeg"
      alt="Event 6"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
</div>


      </div>


      <Cta />
      <Footer />
    </div>
  )
}

export default ISTEPage
