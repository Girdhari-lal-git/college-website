import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";


// Data for various sections

const benefits = [
  "Opportunities to network on a local level.",
  "Free website hosting for the branch.",
  "Funding for events, projects, and activities.",
  "Project development & sponsorship via IEEE.",
  "Support in hosting professional awareness programs.",
  "Connection with like‑minded global IEEE groups.",
];

const cisObjectives = [
  "Hands‑on workshops in neural networks, fuzzy systems, evolutionary computation.",
  "Career guidance sessions by industry experts.",
  "Networking with professionals and researchers.",
  "Encourage student research projects in computational intelligence.",
  "Seminars, guest lectures, and conferences to share latest trends.",
];

const membershipBenefits = [
  "Access to IEEE Xplore digital library.",
  "Webinars, workshops & certification programs.",
  "Global professional networking.",
  "Mentoring, job boards & career fairs.",
  "Discounts on IEEE conferences and publications.",
  "Leadership opportunities within IEEE.",
  "Local community engagement and outreach.",
  "Recognition through IEEE awards.",
];

const cisActivities = [
  {
    date: "March 15, 2024",
    event: "Session on Text Classification and Sentiment Analysis",
    coordinator: "Dr. Budesh Kanwar",
  },
  {
    date: "March 06, 2024",
    event: "Launch of IEEE CIS PIET Student Branch",
    coordinator: "Dr. Budesh Kanwar",
  },
  {
    date: "Feb 28–29, 2024",
    event: "ANN Workshop using Python & TensorFlow",
    coordinator: "Dr. Sandeep Gupta, Kamal Saini, Alka Rani",
  },
];

const cisCommittee = [
  { role: "Advisor", name: "Dr. Budesh Kanwar" },
  { role: "Counselor", name: "Dr. Sourabh Raj" },
  { role: "Chair", name: "Vikas Sharma" },
  { role: "Vice Chair", name: "Vanshaj Gaur" },
  { role: "Secretary", name: "Tanishq Soni" },
  { role: "Web Master", name: "Rishabh Gupta" },
  { role: "Treasurer", name: "Shashank Singh Shekhawat" },
];

const members = [
  { name: "Divya Jangid", id: "99805880" },
  { name: "Gargi Sharma", id: "99804233" },
  { name: "Gargi Tak", id: "99799641" },
  { name: "Heena Kuntal", id: "99802894" },
  { name: "Rhythm Verma", id: "99799165" },
  { name: "Navdeep Doriya", id: "99802968" },
  { name: "Rishabh Gupta", id: "99802537" },
  { name: "Sejal Jain", id: "99805824" },
  { name: "Sangita Biswas", id: "100042492" },
  { name: "Sakshi Mundra", id: "100042583" },
  { name: "Shashank Shekhawat", id: "99802409" },
  { name: "Simran Jethwani", id: "99805889" },
  { name: "Vanshaj Gaur", id: "99799567" },
  { name: "Vikas Sharma", id: "99793894" },
  { name: "Tanishq Soni", id: "99873568" },
];

const IEEEPage = () => (
  <div className="min-h-screen bg-gray-100">
    <AccessibilityFeatures />
    <Header />

    <BreadCrumb
      title="IEEE Student Branch"
      description="Fostering technical excellence, networking, and research at PIET."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IEEE Student Branch", isCurrent: true },
      ]}
    />

    {/* IEEE Logo Section */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <img
          src={"/public/images/ieee-logo.png"}
          alt="IEEE Logo"
          className="mx-auto h-24 mb-6 transform hover:scale-105 transition-transform duration-300"
        />
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          The IEEE Student Branch at PIET empowers students through innovation, collaboration, and technical excellence.
        </p>
      </div>
    </section>

    {/* Cards Section */}
    <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <InfoCard
        iconClass="fas fa-layer-group"
        title="Scope & Structure"
        content="A campus-level unit promoting technical development & networking; led by chair, vice-chair, secretary, treasurer under faculty advisor guidance."
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      />
      <InfoCard
        iconClass="fas fa-chalkboard-teacher"
        title="Activities"
        content="We organize workshops, seminars, industrial visits, competitions, enhancing students’ skills in engineering and technology."
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      />
      <InfoCard
        iconClass="fas fa-user-check"
        title="Membership"
        content="Open to all IEEE student members at PIET; includes CIS & Circuits & Systems Society chapters."
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      />
    </div>

    {/* Certificate Section */}
    <section className="py-30 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl text-[#00629B] font-extrabold mb-6">
          IEEE CIS Chapter Recognition
        </h2>
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-lg md:max-w-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src={"/public/images/IEE.jpg"}
              alt="IEEE CIS Chapter Certificate"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto">
          Proudly recognized by IEEE for our contributions to computational intelligence and student development.
        </p>
      </div>
    </section>

    {/* Additional Cards Section */}
    <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <InfoCard
        iconClass="fas fa-trophy"
        title="Membership Benefits"
        content={<Checklist items={membershipBenefits} />}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      />
      <InfoCard
        iconClass="fas fa-robot"
        title="IEEE CIS Objectives"
        content={<Checklist items={cisObjectives} />}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      />
      <InfoCard
        iconClass="fas fa-handshake"
        title="Branch Benefits"
        content={<Checklist items={benefits} />}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      />
    </div>

    {/* Event Gallery Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-[#00629B] font-extrabold mb-8 text-center">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src={"/public/images/event1.png"}
            alt="Text Classification Workshop"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"
          />
          <img
            src={"/public/images/event2.png"}
            alt="IEEE CIS Launch Event"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"
          />
          <img
            src={"/public/images/event1.png"}
            alt="ANN Workshop"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"
          />
        </div>
        <p className="text-lg text-gray-700 mt-6 text-center">
          Relive the moments from our workshops, seminars, and networking events!
        </p>
      </div>
    </section>

    {/* Committee Section */}
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-[#00629B] font-extrabold mb-8 text-center">
          IEEE CIS Committee @ PIET
        </h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <DynamicTable
            columns={[
              { label: "Role", key: "role" },
              { label: "Name", key: "name" },
            ]}
            data={cisCommittee}
            className="table-auto w-full text-left"
            rowClassName="hover:bg-blue-50 transition-colors duration-200"
          />
        </div>
      </div>
    </section>

    {/* Members Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-[#00629B] font-extrabold mb-8 text-center">
          IEEE CIS Members
        </h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <DynamicTable
            columns={[
              { label: "Member Name", key: "name" },
              { label: "Member ID", key: "id" },
            ]}
            data={members}
            className="table-auto w-full text-left"
            rowClassName="hover:bg-blue-50 transition-colors duration-200"
          />
        </div>
      </div>
    </section>

    {/* Activities Section */}
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-[#00629B] font-extrabold mb-8 text-center">
          Key Activities (2024)
        </h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <DynamicTable
            columns={[
              { label: "Date", key: "date" },
              { label: "Activity", key: "event" },
              { label: "Coordinator(s)", key: "coordinator" },
            ]}
            data={cisActivities}
            className="table-auto w-full text-left"
            rowClassName="hover:bg-blue-50 transition-colors duration-200"
          />
        </div>
      </div>
    </section>

    <Cta />
    <Footer />
  </div>
);

export default IEEEPage;