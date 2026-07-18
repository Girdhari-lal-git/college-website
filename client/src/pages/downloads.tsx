import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import DynamicTable from "@/components/DynamicTable ";

interface Column<T> {
    label: string;
    key: keyof T;
}

interface downloadstaffRow {
    sno: number;
    name: string;
    download: React.ReactNode;
}

//NAAC staff download table
const downloadstaffColumns: Column<downloadstaffRow>[] = [
    { label: "S. No", key: "sno" },
    { label: "Name of form", key: "name" },
    { label: "Download", key: "download" },
];

const downloadstaffData: downloadstaffRow[] = [
  { sno: 1, name: "E_1 Joining Report", download: (<a href="https://drive.google.com/file/d/1-bjf5vf3AsqWt5xR4DuSHXz4ZvF8OIV5/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 2, name: "E_2 Leave Application Form", download: (<a href="https://drive.google.com/file/d/1prPd8Sh8hh3FzJ0-DhyvDs8WpT0Yo7Ax/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 3, name: "E_3 Requisition or Demand of Vehicles to be hired from outside", download: (<a href="https://drive.google.com/file/d/1eMSyWQMO_afeWV_hOhybR7I3AbacBK-e/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 4, name: "E_4 Employee Smart ID Card Format", download: (<a href="https://drive.google.com/file/d/1z7vhXDY5NunZoDkNvxx2MPZoElVRSctI/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 5, name: "E_5 Campus Accommodation For Employees", download: (<a href="https://drive.google.com/file/d/1-UIFW3GSwlerXW57c0PKZcTEaunhH9zV/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 6, name: "E_6 (VISITING FACULTY)", download: (<a href="https://drive.google.com/file/d/125-yRfQz3fFO7uIsN29H_-v1BmYxVqRz/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 7, name: "E_6 (TA)", download: (<a href="https://drive.google.com/file/d/1YEadG16_rFzam2kTDmdgiMqbmU1x4lQ-/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 8, name: "E_6 (Faculty)", download: (<a href="https://drive.google.com/file/d/1UsaTaVnt4Wfm1Ym19GIyVnMQMhuigOci/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 9, name: "E_6 (Admin)", download: (<a href="https://drive.google.com/file/d/1rmg4Y7t-Pl3yejzo1Pjux6N-1JQnVp4w/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 10, name: "E_6 (Admin Hindi)", download: (<a href="https://drive.google.com/file/d/1LY9LkmNl0s4rvGBrG6pxl_dpGf2dG0oL/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 11, name: "E_7 Cash Advance, Travel Expenses Requisition Slip and Staff Loan Requisition Slip", download: (<a href="https://drive.google.com/file/d/1BozTyxBZ85KvR1-sbGUypE90jaU23Ant/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 12, name: "E_8 Application Form For Transport Facility For Employees", download: (<a href="https://drive.google.com/file/d/1bLmJ4VQUWP8x_YlxIWxARBShySX1gp-P/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 13, name: "E_9 No Dues", download: (<a href="https://drive.google.com/file/d/19xXukhcNMtnPp3LQMZeHmoUfSzsxib9l/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 14, name: "E_10 Query-Form", download: (<a href="https://drive.google.com/file/d/1VOvmNgudIcJtcsku8lJu_t4FtsajeooD/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 15, name: "E_11 Application for ESIC Card", download: (<a href="https://drive.google.com/file/d/1vqMmgGm9RUz_sLyRmRUDuiyacZSGoGzh/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 16, name: "E_12 Certificate of Employees Address", download: (<a href="https://drive.google.com/file/d/122G3OskJ_GN7ldS-FhCugevgZLsEjLdc/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 17, name: "E_14 Fortnightly Attendance Analysis of Hostellers", download: (<a href="https://drive.google.com/file/d/1-iExAZNA9KHMPCPvkyiR-1Y7HkVss4NV/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 18, name: "E_15 Format For General & Financial Approvals", download: (<a href="https://drive.google.com/file/d/150eatkomtl3zPmnOvl3xjJ2kiA-_CfpT/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 19, name: "E_16 Recommendation For Completing Higher Degree", download: (<a href="https://drive.google.com/file/d/1I29kXKvtHYLn3nNTM5Lh4H7l9paewX8a/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 20, name: "E_18 Application for participation in conference, seminar, workshop, trainings, symposia etc", download: (<a href="https://drive.google.com/file/d/1E8z-l9LAciLkQWGRoaacM2pqCSrdj91w/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 21, name: "E_19 Dr. S. M. Seth Auditorium", download: (<a href="https://drive.google.com/file/d/1ieoWyTlRezS6ImYOLmq6njVSDYvPcvv3/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 22, name: "E_20 Application Form for Technical Publication Incentive Scheme", download: (<a href="https://drive.google.com/file/d/1lR6VvjJfzNnHuYgkJYj6k_fBVtKN0DjB/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 23, name: "E_21 Requisition Form for Photographer and Campus Meal", download: (<a href="https://drive.google.com/file/d/1ksO1TYy2bsgtI6__Kd9m8tnWuTuvaYaa/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 24, name: "E_24 Staff Tax Declaration Form", download: (<a href="https://drive.google.com/file/d/1fK2CeXK_aLoNkpq7nOgSsMgyNnF8wX17/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) },
  { sno: 25, name: "E_25 Scholarship Grant Application Form", download: (<a href="https://drive.google.com/file/d/16CjsGRK9hG-ta4zgPJGem9YznOd1eC-f/view?usp=drive_link" download target="_blank" rel="noopener noreferrer"><button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2"><i className="fas fa-download" /> Download</button></a>) }
];


//Student download table


const downloadstudentColumns: Column<downloadstaffRow>[] = [
    { label: "S. No", key: "sno" },
    { label: "Name", key: "name" },
    { label: "Download", key: "download" },
];

const downloadstudentData: downloadstaffRow[] = [
    {
    sno: 1,
    name: "S-1 : Student No Dues",
    download: (
        <a href="https://drive.google.com/file/d/1b-U32sxRRyszCzaRv66D3CBIqc7eLkkL/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 2,
    name: "S-2 : Student No Dues (Hosteller)",
    download: (
        <a href="https://drive.google.com/file/d/1tYzG2pmSeoZU9D4ClGKU5mHS18cUM_as/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 3,
    name: "S-3 : Application Form for Registration of II, III & IV Year",
    download: (
        <a href="https://drive.google.com/file/d/1Ts7z6SChSvyAU0AXFiea7mTnZBJT1nuQ/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 4,
    name: "S-4 : Smart ID Card",
    download: (
        <a href="https://drive.google.com/file/d/1ONteALKnV_pFzca0wjccxpiokPf565VX/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 5,
    name: "S-5 : Application for Refund of Access Fee",
    download: (
        <a href="https://drive.google.com/file/d/1cxG2mNgf5T6zQ7farvCooo-4lz4Hoi5N/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 6,
    name: "S-6 : Semester Internship",
    download: (
        <a href="https://drive.google.com/file/d/12W8KrQJFjiIflZbbz2zWgLvRUzMmrQr6/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 7,
    name: "S-7 : Application for College Transportation",
    download: (
        <a href="https://drive.google.com/file/d/1dJau5GBWPEJfw8oDK7meg3lbYjxvCxo9/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 8,
    name: "S-7B : Application Form for Availing Coaching Shuttle",
    download: (
        <a href="https://drive.google.com/file/d/1K25N8QrdTTfRIe4tNUQ9WgtNfYkuvu5H/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 9,
    name: "S-8 : Undertaking for Industrial Visit",
    download: (
        <a href="https://drive.google.com/file/d/16VXAmXKk3P-oIRyG3D3jUnJKb4q4YtYt/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 10,
    name: "S-10 : Hosteller Leave Application Form",
    download: (
        <a href="https://drive.google.com/file/d/199FlTMLIwsUOl_AvpxNAxBzz2sKcCWPi/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 11,
    name: "S-11 : OutPass for Hosteller",
    download: (
        <a href="https://drive.google.com/file/d/1CTFiJpSHuZsTrs3B0_e1EWOyds1-CRxp/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 12,
    name: "S-12 : Application for Mentorship",
    download: (
        <a href="https://drive.google.com/file/d/1MnRhH1H6P_qnA-0Y5rKi-FDDV0Laygfp/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 13,
    name: "S-13 : Self Help Group",
    download: (
        <a href="https://drive.google.com/file/d/1oyaptaEJIBtWVDMtzK7rbpymhYcbUmw6/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 14,
    name: "S-15 : Application Form for Loan Application",
    download: (
        <a href="https://drive.google.com/file/d/1CBx1Bs-Shpm4SwcYhiMnOawxNEm153K8/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 15,
    name: "S-16 : Poornima Student Work Abroad Program",
    download: (
        <a href="https://drive.google.com/file/d/1Wcy_RYs2zpEEcRb-18wArLAivH73WDL5/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 16,
    name: "S-18 : Student Participation in Activities Outside Poornima Institute",
    download: (
        <a href="https://drive.google.com/file/d/1ibHy7SRF0WMRvnqKsMq8gFqitW9vhIlL/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 17,
    name: "S-19 : Requisition of CC/TC/Degree",
    download: (
        <a href="https://drive.google.com/file/d/1U8-gvGpw-MgEjJ1BsO8w346B1ZXzbSWO/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 18,
    name: "S-20 : Application for Updation in Marks",
    download: (
        <a href="https://drive.google.com/file/d/1YWp0H8xREYDrMzu9nobo0ZzKtUPPeeTR/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 19,
    name: "S-21 : Information Collection Form for MOOCs",
    download: (
        <a href="https://drive.google.com/file/d/1ZRT0WMW5XAELiAA6zKCN_ho7AZEbZW1b/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 20,
    name: "S-22 : Student NEFT Details for Reimbursement",
    download: (
        <a href="https://drive.google.com/file/d/1N3Lt1WCOFyI6Ey47v0y3F2O4Y4_83bWL/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
{
    sno: 21,
    name: "S-23 : Loan Amount Confirmation",
    download: (
        <a href="https://drive.google.com/file/d/16fArwcSlZUuWHmRic12BU1E6WNDdRKU8/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                <i className="fas fa-download" /> Download
            </button>
        </a>
    ),
},
];

const downloads: React.FC = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="Downloads"
                description="Download various forms and documents for staff and student use."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Downloads", isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Staff-Downloads
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable
                    columns={downloadstaffColumns}
                    data={downloadstaffData}
                />
            </div>

             <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Students-Downloads
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable
                    columns={downloadstudentColumns}
                    data={downloadstudentData}
                />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default downloads;
