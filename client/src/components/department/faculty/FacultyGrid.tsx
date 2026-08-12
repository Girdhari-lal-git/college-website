import FacultyCard from "./FacultyCard";
import { FacultyProfile } from "./types"

interface Props {
    faculty: FacultyProfile[];
}

const designationOrder = [
    "Professor",
    "Associate Professor",
    "Assistant Professor",
    "Teaching Assistant",
    "Technical assistant",
];

const FacultyGrid = ({ faculty }: Props) => {
    return (
        <div className="space-y-12">
            {designationOrder.map((designation) => {
                const members = faculty.filter(
                    (member) => member.designation === designation
                );

                if (members.length === 0) return null;

                return (
                    <section key={designation}>
                        <h3 className="mb-6 text-2xl font-semibold text-primary">
                            {designation}
                        </h3>

                        <div
                            className="
                                grid
                                gap-6
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                            "
                        >
                            {members.map((member) => (
                                <FacultyCard
                                    key={member._id}
                                    faculty={member}
                                />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default FacultyGrid;