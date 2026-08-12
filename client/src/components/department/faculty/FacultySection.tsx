import { useEffect, useState } from "react";

import { DepartmentSection } from "../section";
import FacultyGrid from "./FacultyGrid";
import { FacultyProfile } from "./types";

interface Props {
    department: string;
}

const FacultySection = ({ department }: Props) => {
    const [faculty, setFaculty] = useState<FacultyProfile[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFaculty = async () => {
            try {
                const response = await fetch("/api/faculty");
                

                if (!response.ok) {
                    throw new Error("Failed to fetch faculty.");
                }

                const data = await response.json();
                console.log("All Faculty:", data.data);
                console.log("Total Faculty:", data.data.length);
                const filteredFaculty =
                    data.data?.filter(
                        (member: FacultyProfile & { department: string }) =>
                            member.department === department
                    ) || [];

                    console.log("Filtered Faculty:", filteredFaculty);
                    console.log("Filtered Count:", filteredFaculty.length);

                setFaculty(filteredFaculty);
            } catch (error) {
                console.error("Error loading faculty:", error);
            } finally {
                setLoading(false);
            }
        };

        loadFaculty();
    }, [department]);

    return (
        <DepartmentSection
            id="faculty"
            label="Faculty"
            title="Meet Our Faculty"
            subtitle="Experienced educators, researchers and mentors committed to academic excellence."
        >
            {loading ? (
                <div className="py-16 text-center">
                    <p className="text-neutral-500">
                        Loading faculty members...
                    </p>
                </div>
            ) : faculty.length > 0 ? (
                <FacultyGrid faculty={faculty} />
            ) : (
                <div className="py-16 text-center">
                    <p className="text-neutral-500">
                        No faculty members found.
                    </p>
                </div>
            )}
        </DepartmentSection>
    );
};

export default FacultySection;