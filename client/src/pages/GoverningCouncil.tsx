import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const councilColumns = [
    { label: "SN.", key: "sno" },
    { label: "Name", key: "name" },
    { label: "Designation", key: "position" },
    { label: "Category", key: "category" },
   
    
    
    
];

const councilMembers = [
    {
  sno: 1,
  position: " Chairman, Poornima Group",
  nominatedBy: "Chairman, Board of Governors",
  category: "Management",
  name: "Sh. Shashikant Singhi",
  email: "sksinghi@poornima.org",
},
{
  sno: 2,
  position: "Director General, Poornima Group",
  nominatedBy: "Shanti Education Society",
  category: "Management",
  name: "Sh. M.K.M. Shah",
  email: "mkm@poornima.org",
},
{
  sno: 3,
  position: "Director (Infrastructure), Poornima Group",
  nominatedBy: "Shanti Education Society",
  category: "Management",
  name: "Mr. Hari Singh Shekhawat",
  email: "director.infrastructure@poornima.org / shekhawat_erhs@poornima.org",
},
{
  sno: 4,
  position: "Director, Poornima Group",
  nominatedBy: "Shanti Education Society",
  category: "Management",
  name: "Ar. Rahul Singhi",
  email: "rahulsinghi@poornima.org",
},
{
  sno: 5,
  position: "Director (Admissions), Poornima Group",
  nominatedBy: "Shanti Education Society",
  category: "Management",
  name: "Dr. Neeraj Jain",
  email: "neerajj@poornima.org",
},
{
  sno: 6,
  position: "Professor & HoD CSE Department, PIET",
  nominatedBy: "Principal (Seniority Rotation)",
  category: "Teachers of the College",
  name: "Dr. Anil Kumar",
  email: "anilkumar@poornima.org",
},
{
  sno: 7,
  position: "Professor & HoD AI&DS Department, PIET",
  nominatedBy: "Principal (Seniority Rotation)",
  category: "Teachers of the College",
  name: "Dr. Budesh Kanwar",
  email: "budesh.kanwar@poornima.org",
},
{
  sno: 8,
  position: "Registrar, PIET",
  nominatedBy: "Administrative Officer / Senior Administrative Staff",
  category: "Administrative Staff of the College",
  name: "Dr. Balwan",
  email: "registrar.piet@poornima.org",
},
{
  sno: 9,
  position: "Educationist/Industrialist",
  nominatedBy: "Management",
  category: "Educationist / Industrialist",
  name: "Mr. Anupam Gupta",
  email: "anupam@celebaltech.com",
},
{
  sno: 10,
  position: "Dean Academics, RTU Kota",
  nominatedBy: "Rajasthan Technical University, Kota",
  category: "University Nominee",
  name: "Prof. (Dr.) D. K. Palwalia",
  email: "dkpalwalia@rtu.ac.in / dean.academic@rtu.ac.in",
},
{
  sno: 11,
  position: "Director (Alumni & Corporate Relations), Poornima Group",
  nominatedBy: "Shanti Education Society",
  category: "Institution Representative",
  name: "Mrs. Dipti Lodha",
  email: "diptilodha@poornima.org",
},
{
  sno: 12,
  position: "Director (Student Welfare), Poornima Group",
  nominatedBy: "Shanti Education Society",
  category: "Institution Representative",
  name: "Mr. Ashwini Lata",
  email: "dsw@poornima.org",
},
{
  sno: 13,
  position: "Director (Finance), Poornima Group",
  nominatedBy: "Shanti Education Society",
  category: "Institution Representative",
  name: "Mr. Jai Sharma",
  email: "jaisharma@poornima.org",
},
{
  sno: 14,
  position: "Professor & Controller of Examinations, PIET",
  nominatedBy: "Principal",
  category: "Institution Representative",
  name: "Dr. Amit Shrivastava",
  email: "coe.piet@poornima.org",
},
{
  sno: 15,
  position: "Professor & IQAC Convenor, PIET",
  nominatedBy: "Principal",
  category: "Institution Representative",
  name: "Dr. Mukesh Chandra",
  email: "iqac.piet@poornima.org",
},
{
  sno: 16,
  position: "Professor & HoD AS Department, PIET",
  nominatedBy: "Principal",
  category: "Institution Representative",
  name: "Dr. Sama Jain",
  email: "sama.jain@poornima.org",
},
{
  sno: 17,
  position: "Professor & HoD ECE Department, PIET",
  nominatedBy: "Principal",
  category: "Institution Representative",
  name: "Dr. Payal Bansal",
  email: "payal.bansal@poornima.org",
},
{
  sno: 18,
  position: "Proctor, PIET",
  nominatedBy: "Principal",
  category: "Institution Representative",
  name: "Mr. Ashok Kumar",
  email: "proctor.piet@poornima.org",
},
{
  sno: 19,
  position: "COO, W3 Care Technologies Pvt. Ltd.",
  nominatedBy: "Principal",
  category: "Alumni/Industry Expert of CS/IT",
  name: "Ms. Sonu Bala, COO, W3 Care Technologies Pvt. Ltd.",
  email: "sonu@w3care.com",
},
{
  sno: 20,
  position: "Senior Quality Assurance Specialist, Hornblower Group",
  nominatedBy: "Principal",
  category: "Alumni/Industry Expert of Emerging Technologies",
  name: "Mr. Khushal Gupta",
  email: "Khushal.dec@gmail.com",
},
{
  sno: 21,
  position: "Founder & CEO, SINCGRID, New Delhi",
  nominatedBy: "Principal",
  category: "Alumni/Industry Expert of ECE/EE",
  name: "Mr. Arun Kumar",
  email: "arun@sincgrid.com",
},
{
  sno: 22,
  position: "CEO, Softserv",
  nominatedBy: "Principal",
  category: "Alumni/Industry Expert of HR",
  name: "Mr. Manoj Pipersania",
  email: "manoj@softserv.in",
},
{
  sno: 23,
  position: "Principal & Director, PIET",
  nominatedBy: "Ex-Officio",
  category: "Principal of College",
  name: "Dr. Dinesh Goyal",
  email: "principal.piet@poornima.org",
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
        name: "2nd Meeting of BoG",
        download: (
            <a
                href="https://drive.google.com/file/d/1AsDmcdR2hvGCz2PTCEm2vGyeJk8ZrFgT/view?usp=drive_link"
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
                title="Board of Governors"
                description="The Governing Council (GC) is the highest policy-making body of the Institute. It is responsible for the overall governance and strategic direction of the Institute, ensuring that it fulfills its mission and objectives."
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
