import { useState } from "react";

import { DepartmentSection } from "../section";
import ProgramDetails from "./ProgramDetails";
import { Program } from "./types";

interface Props {
    programs: Program[];
}

const ProgramsSection = ({
    programs,
}: Props) => {

    const [selectedProgramId, setSelectedProgramId] =
        useState(programs[0].id);

    const selectedProgram =
        programs.find(
            (program) => program.id === selectedProgramId
        )!;

    return (

        <DepartmentSection
            id="programs"
            label="Academic Programs"
            title="Explore Our Academic Programs"
            subtitle="Choose the programme that aligns with your interests and career aspirations."
        >

            {/* Program Tabs */}

            <div
                className="
                    flex
                    flex-wrap
                    gap-4
                    mb-10
                "
            >

                {programs.map((program) => (

                    <button
                        key={program.id}
                        onClick={() =>
                            setSelectedProgramId(program.id)
                        }
                        className={`
                            rounded-full
                            px-6
                            py-3
                            font-medium
                            transition-all
                            duration-300

                            ${
                                selectedProgramId === program.id
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-gray-100 hover:bg-primary/10 hover:text-primary"
                            }
                        `}
                    >

                        {program.shortTitle}

                    </button>

                ))}

            </div>

            <ProgramDetails
                program={selectedProgram}
            />

        </DepartmentSection>

    );

};

export default ProgramsSection;