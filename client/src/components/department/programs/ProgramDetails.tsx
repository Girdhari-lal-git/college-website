import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Program } from "./types";

import OverviewPanel from "./OverviewPanel";
import CareerPanel from "./CareerPanel";
import PEOPanel from "./PEOPanel";
import PSOPanel from "./PSOPanel";

type ProgramTab =
    | "overview"
    | "careers"
    | "peos"
    | "psos";

interface ProgramDetailsProps {
    program: Program;
}

const tabs: {
    id: ProgramTab;
    label: string;
}[] = [
    {
        id: "overview",
        label: "Overview",
    },
    {
        id: "careers",
        label: "Careers",
    },
    {
        id: "peos",
        label: "PEOs",
    },
    {
        id: "psos",
        label: "PSOs",
    },
];

const ProgramDetails = ({
    program,
}: ProgramDetailsProps) => {

    const [activeTab, setActiveTab] =
        useState<ProgramTab>("overview");

    return (

        <div className="mt-10">

            {/* Tabs */}

            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                    border-b
                    pb-5
                    mb-8
                "
            >

                {tabs.map((tab) => (

                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            rounded-full
                            px-5
                            py-2.5
                            text-sm
                            font-medium
                            transition-all
                            duration-300
                            ${
                                activeTab === tab.id
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary"
                            }
                        `}
                    >
                        {tab.label}
                    </button>

                ))}

            </div>

            {/* Panel */}

            <AnimatePresence mode="wait">

                <motion.div
                    key={`${program.id}-${activeTab}`}
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -15,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                >

                    {activeTab === "overview" && (
                        <OverviewPanel
                            program={program}
                        />
                    )}

                    {activeTab === "careers" && (
                        <CareerPanel
                            careers={program.careers}
                        />
                    )}

                    {activeTab === "peos" && (
                        <PEOPanel
                            peos={program.peos}
                        />
                    )}

                    {activeTab === "psos" && (
                        <PSOPanel
                            psos={program.psos}
                        />
                    )}

                </motion.div>

            </AnimatePresence>

        </div>

    );
};

export default ProgramDetails;