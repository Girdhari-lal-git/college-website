import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const councilColumns = [
    { label: "SN.", key: "sno" },
    { label: "Position in GC", key: "position" },
    { label: "Nominated by", key: "nominatedBy" },
    { label: "Category", key: "category" },
    { label: "Name", key: "name" },
    { label: "Email-ID", key: "email" },
];

const councilMembers = [
    {
    sno: 1,
    position: "Management-1",
    nominatedBy: "Chairman, Board of Governors",
    category: "Management",
    name: "Sh. Shashikant Singhi, Chairman, Poornima Group",
    email: "sksinghi@poornima.org",
  },
  {
    sno: 2,
    position: "Management-2",
    nominatedBy: "Shanti Education Society",
    category: "Management",
    name: "Sh. M.K.M. Shah, Director General, Poornima Group",
    email: "mkm@poornima.org",
  },
  {
    sno: 3,
    position: "Management-3",
    nominatedBy: "Shanti Education Society",
    category: "Management",
    name: "Mr. Hari Singh Shekhawat, Director (Infrastructure), Poornima Group",
    email: "director.infrastructure@poornima.org, shekhawat_erhs@poornima.org",
  },
  {
    sno: 4,
    position: "Management-4",
    nominatedBy: "Shanti Education Society",
    category: "Management",
    name: "Ar. Rahul Singhi, Director, Poornima Group",
    email: "rahulsinghi@poornima.org",
  },
  {
    sno: 5,
    position: "Management-5",
    nominatedBy: "Shanti Education Society",
    category: "Management",
    name: "Dr. Neeraj Jain, Director (Admissions), Poornima Group",
    email: "neerajj@poornima.org",
  },
  {
    sno: 6,
    position: "Teacher-1",
    nominatedBy: "Principal (seniority rotation)",
    category: "Teacher",
    name: "Dr. Anil Kumar, Professor, HoD CSE, PIET",
    email: "anilkumar@poornima.org",
  },
  {
    sno: 7,
    position: "Teacher-2",
    nominatedBy: "Principal (seniority rotation)",
    category: "Teacher",
    name: "Dr. Budesh Kanwar, Professor, HoD AI&DS, PIET",
    email: "budesh.kanwar@poornima.org, anilkumar@poornima.org",
  },
  {
    sno: 8,
    position: "Admin Staff",
    nominatedBy: "Administrative Officer/Senior Staff",
    category: "Administrative Staff",
    name: "Dr. Balwan, Registrar, PIET",
    email: "registrar.piet@poornima.org",
  },
  {
    sno: 9,
    position: "Educationist",
    nominatedBy: "Management",
    category: "Educationist/Industrialist",
    name: "Mr. Anupam Gupta, Entrepreneur/Industrialist",
    email: "anupam@celebaltech.com",
  },
  {
    sno: 10,
    position: "State Nominee",
    nominatedBy: "Directorate of Higher Education/State Council",
    category: "State Government Nominee",
    name: "Nominated by the State Government",
    email: "---",
  },
  {
    sno: 11,
    position: "University Nominee",
    nominatedBy: "RTU, Kota (Vice Chancellor Representative)",
    category: "University Nominee",
    name: "Prof. (Dr.) D. K. Palwalia, Dean Academics, RTU",
    email: "dkpalwalia@rtu.ac.in, dean.academic@rtu.ac.in",
  },
  {
    sno: 12,
    position: "Member Secretary",
    nominatedBy: "Ex-Officio",
    category: "Principal & Director",
    name: "Dr. Dinesh Goyal, Principal & Director, PIET",
    email: "principal.piet@poornima.org",
  },
  {
    sno: 13,
    position: "Institution-1",
    nominatedBy: "Shanti Education Society",
    category: "Institution Representative",
    name: "Mrs. Dipti Lodha, Director (Alumni & Corporate Relations)",
    email: "diptilodha@poornima.org",
  },
  {
    sno: 14,
    position: "Institution-2",
    nominatedBy: "Shanti Education Society",
    category: "Institution Representative",
    name: "Mr. Ashwini Lata, Dean Student Welfare, Poornima Group",
    email: "dsw@poornima.org",
  },
  {
    sno: 15,
    position: "Institution-3",
    nominatedBy: "Shanti Education Society",
    category: "Institution Representative",
    name: "Mr. Jai Sharma, Director (Finance), Poornima Group",
    email: "jaisharma@poornima.org",
  },
  {
    sno: 16,
    position: "Institution-4",
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Dr. Mukesh Chandra, Professor, IQAC Convenor, PIET",
    email: "iqac.piet@poornima.org",
  },
  {
    sno: 17,
    position: "Institution-5",
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Dr. Sama Jain, Professor, HoD AS Dept., PIET",
    email: "sama.jain@poornima.org",
  },
  {
    sno: 18,
    position: "Institution-6",
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Dr. Payal Bansal, Professor, HoD IoT Dept., PIET",
    email: "payal.bansal@poornima.org",
  },
  {
    sno: 19,
    position: "Institution-7",
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Mr. Ashok Kumar, Proctor, PIET",
    email: "proctor.piet@poornima.org",
  },
  {
    sno: 20,
    position: "Alumni-CS/IT",
    nominatedBy: "Principal",
    category: "Alumni/Industry Expert",
    name: "Ms. Sonu Bala, COO, W3 Care Technologies Pvt. Ltd",
    email: "sonu@w3care.com",
  },
  {
    sno: 21,
    position: "Alumni-EmergingTech",
    nominatedBy: "Principal",
    category: "Alumni/Industry Expert",
    name: "Mr. Khushal Gupta, Sr. QA Specialist, Hornblower Group",
    email: "khushal.dec@gmail.com",
  },
  {
    sno: 22,
    position: "Alumni-ECE/EE",
    nominatedBy: "Principal",
    category: "Alumni/Industry Expert",
    name: "Mr. Arun Kumar, SINCGRID, New Delhi",
    email: "arun@sincgrid.com",
  },
  {
    sno: 23,
    position: "Alumni-HR",
    nominatedBy: "Principal",
    category: "Alumni/Industry Expert",
    name: "Mr. Manoj Papapersia, CEO, Softserv",
    email: "manoj@softserv.in",
  },
];

const documentColumns = [
    { label: "S. No", key: "sno" },
    { label: "Minutes of Meeting", key: "name" },
    { label: "Download", key: "download" },
];

const documentData = [
    {
        sno: 1,
        name: "1st Meeting of BoG",
        download: (
            <a
                href="https://drive.google.com/file/d/1-N9zmUr3ng8_1U9v44E7h7_DLTSm_z_m/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition flex items-center gap-2">
                    <i className="fas fa-download"></i>
                </button>
            </a>
        ),
    },
    {
        sno: 1,
        name: "16th GC Minutes Of Meeting",
        download: (
            <a
                href="https://drive.google.com/file/d/1AqrY365OFdEfD3YeVaEY4TPfP0eaKW0T/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition flex items-center gap-2">
                    <i className="fas fa-download"></i>
                </button>
            </a>
        ),
    },
    {
        sno: 2,
        name: "15th GC Minutes Of Meeting",
        download: (
            <a
                href="https://drive.google.com/file/d/1Xt10-6_i4vzwvYWrGLCCrXKYuJJ7jAOE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition flex items-center gap-2">
                    <i className="fas fa-download"></i>
                </button>
            </a>
        ),
    },
    {
        sno: 3,
        name: "14th GC Minutes Of Meeting",
        download: (
            <a
                href="https://drive.google.com/file/d/1-vpbqySSb1y8TuH9sKT4HDWoHGEQmv_y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition flex items-center gap-2">
                    <i className="fas fa-download"></i>
                </button>
            </a>
        ),
    },
    {
        sno: 4,
        name: "13th GC Minutes Of Meeting",
        download: (
            <a
                href="https://drive.google.com/file/d/1WlToHyAJ3NcdEGt7boSCMrz0VAW-poBS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition flex items-center gap-2">
                    <i className="fas fa-download"></i>
                </button>
            </a>
        ),
    },
    {
        sno: 5,
        name: "12th GC Minutes Of Meeting",
        download: (
            <a
                href="https://drive.google.com/file/d/1O5pNQ244ATfywSxLtNn6zJof34xVmWMh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition flex items-center gap-2">
                    <i className="fas fa-download"></i>
                </button>
            </a>
        ),
    },
    {
        sno: 6,
        name: "11th GC Minutes Of Meeting",
        download: (
            <a
                href="https://drive.google.com/file/d/1yYOyAOggkC_2XcMpTWGNO4U-XYZzDM1o/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition flex items-center gap-2">
                    <i className="fas fa-download"></i>
                </button>
            </a>
        ),
    },
    {
        sno: 7,
        name: "10th GC Minutes Of Meeting",
        download: (
            <a
                href="https://drive.google.com/file/d/15wXU6VGC3VIlxe4mZxzmZR7j8__lzU0s/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition flex items-center gap-2">
                    <i className="fas fa-download"></i>
                </button>
            </a>
        ),
    },
];

const GoverningCouncil: React.FC = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Governing Council"
                description="Meet the members guiding Poornima Institute of Engineering & Technology."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Governing Council", isCurrent: true },
                ]}
            />

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center ">
                    List of constituent members of Board of Governors
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>

                <DynamicTable columns={councilColumns} data={councilMembers} />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center ">
                    Minutes of Governing Council Meeting
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>

                <DynamicTable columns={documentColumns} data={documentData} />
            </div>

            <Footer />
        </div>
    );
};

export default GoverningCouncil;
