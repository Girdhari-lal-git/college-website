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
        name: "NAAC Certificate",
        download: (
            <a
                href="https://drive.google.com/file/d/1m3kUGHhUblrY7SOobKjf1TmdYJSsqkzd/view?usp=drive_link"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 2,
        name: "NAAC Score Card",
        download: (
            <a
                href="https://drive.google.com/file/d/1Qez7cEf3y6SyhFdef3JAxH_8yEmxD1Xd/view?usp=drive_link"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 3,
        name: "NAAC SSR Report (Second Cycle)",
        download: (
            <a
                href="https://drive.google.com/file/d/1Oaglfsnel_GyFF4xY-0d9vZRnJbS0wyJ/view?usp=drive_link"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
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
