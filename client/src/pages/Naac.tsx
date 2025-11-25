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

interface NaacFirstCycleRow {
    sno: number;
    name: string;
    download: React.ReactNode;
}

//NAAC Second Cycle Data
const naacSecondCycleColumns: Column<NaacFirstCycleRow>[] = [
    { label: "S. No", key: "sno" },
    { label: "Name", key: "name" },
    { label: "Download", key: "download" },
];

const naacSecondCycleData: NaacFirstCycleRow[] = [
    {
        sno: 1,
        name: "NAAC Certificate (Second Cycle) ",
        download: (
            <a
                href="https://drive.google.com/file/d/1fJcFEU1aiHIiVjM0in0Nyagww5LpAKwo/view?usp=drive_link"
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
        name: "NAAC Score Card (Second Cycle) ",
        download: (
            <a
                href="https://drive.google.com/file/d/1dEFtPlAYSep8dZh0paEXk8-fK-oWDusv/view?usp=drive_link"
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
                href="https://drive.google.com/file/d/174GPWntu1bvNlEVsukp_hNGaNAqCNcmN/view?usp=drive_link"
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


//NAAC First Cycle Data


const naacFirstCycleColumns: Column<NaacFirstCycleRow>[] = [
    { label: "S. No", key: "sno" },
    { label: "Name", key: "name" },
    { label: "Download", key: "download" },
];

const naacFirstCycleData: NaacFirstCycleRow[] = [
    {
        sno: 1,
        name: "NAAC Certificate (First Cycle) ",
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
        name: "NAAC Score Card (First Cycle)",
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
        name: "NAAC SSR Report (First Cycle)",
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

const NaacFirstCycle: React.FC = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="NAAC- National Assessment and Accreditation Council"
                description="Download the NAAC Certificate, Score Card, and SSR Report from the first cycle of accreditation."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "NAAC", isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    NAAC Second Cycle Documents
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable
                    columns={naacSecondCycleColumns}
                    data={naacSecondCycleData}
                />
            </div>

             <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    NAAC First Cycle Documents
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable
                    columns={naacFirstCycleColumns}
                    data={naacFirstCycleData}
                />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default NaacFirstCycle;
