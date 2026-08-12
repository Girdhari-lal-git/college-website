import { Mail, Briefcase, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import { FacultyProfile as FacultyProfileType } from "./types";

interface Props {
    faculty: FacultyProfileType;
}

const FacultyProfile = ({ faculty }: Props) => {
    return (
        <div
            className="
                mt-10
                overflow-hidden
                rounded-2xl
                border
                bg-white
                shadow-lg
            "
        >
            <div
                className="
                    grid
                    gap-8
                    p-8
                    lg:grid-cols-[300px_1fr]
                "
            >
                {/* Left Side */}
                <div className="flex flex-col items-center">

                    <img
                        src={
    faculty.imageUrl ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s"
}
                        alt={faculty.name}
                        className="
                            aspect-[4/5]
                            w-full
                            max-w-[260px]
                            rounded-xl
                            object-cover
                            shadow-md
                        "
                    />

                    <h3 className="mt-6 text-2xl font-bold text-center text-primary">
                        {faculty.name}
                    </h3>

                    <p className="mt-2 text-center text-secondary font-medium">
                        {faculty.designation}
                    </p>

                    {faculty.qualification && (
                        <p className="mt-1 text-sm text-neutral-600">
                            {faculty.qualification}
                        </p>
                    )}

                </div>

                {/* Right Side */}
                <div className="space-y-8">

                    {/* Contact */}

                    <section>

                        <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-primary">
                            <Mail size={18} />
                            Contact
                        </h4>

                        {faculty.email ? (
                            <a
                                href={`mailto:${faculty.email}`}
                                className="text-secondary hover:underline"
                            >
                                {faculty.email}
                            </a>
                        ) : (
                            <p className="text-neutral-500">
                                Email not available.
                            </p>
                        )}

                    </section>

                    {/* Experience */}

                    {faculty.experience && (

                        <section>

                            <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-primary">
                                <Briefcase size={18} />
                                Experience
                            </h4>

                            <p className="leading-7 text-neutral-700">
                                {faculty.experience}
                            </p>

                        </section>

                    )}

                    {/* Research Interests */}

                    {faculty.researchInterests &&
                        faculty.researchInterests.length > 0 && (

                            <section>

                                <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-primary">
                                    <GraduationCap size={18} />
                                    Research Interests
                                </h4>

                                <div className="flex flex-wrap gap-3">

                                    {faculty.researchInterests.map((interest) => (

                                        <span
                                            key={interest}
                                            className="
                                                rounded-full
                                                bg-primary/10
                                                px-4
                                                py-2
                                                text-sm
                                                text-primary
                                            "
                                        >
                                            {interest}
                                        </span>

                                    ))}

                                </div>

                            </section>

                        )}

                    {/* Specialization */}

                    {faculty.specialization &&
                        faculty.specialization.length > 0 && (

                            <section>

                                <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-primary">
                                    <BookOpen size={18} />
                                    Areas of Specialization
                                </h4>

                                <div className="flex flex-wrap gap-3">

                                    {faculty.specialization.map((item) => (

                                        <span
                                            key={item}
                                            className="
                                                rounded-full
                                                bg-secondary/10
                                                px-4
                                                py-2
                                                text-sm
                                                text-secondary
                                            "
                                        >
                                            {item}
                                        </span>

                                    ))}

                                </div>

                            </section>

                        )}

                    {/* Academic Profiles */}

                    {(faculty.googleScholar ||
                        faculty.scopus ||
                        faculty.orcid) && (

                        <section>

                            <h4 className="mb-4 text-lg font-semibold text-primary">
                                Academic Profiles
                            </h4>

                            <div className="flex flex-wrap gap-4">

                                {faculty.googleScholar && (

                                    <a
                                        href={faculty.googleScholar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-lg
                                            border
                                            px-4
                                            py-2
                                            hover:bg-primary/5
                                        "
                                    >
                                        Google Scholar
                                        <ExternalLink size={16} />
                                    </a>

                                )}

                                {faculty.scopus && (

                                    <a
                                        href={faculty.scopus}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-lg
                                            border
                                            px-4
                                            py-2
                                            hover:bg-primary/5
                                        "
                                    >
                                        Scopus
                                        <ExternalLink size={16} />
                                    </a>

                                )}

                                {faculty.orcid && (

                                    <a
                                        href={faculty.orcid}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-lg
                                            border
                                            px-4
                                            py-2
                                            hover:bg-primary/5
                                        "
                                    >
                                        ORCID
                                        <ExternalLink size={16} />
                                    </a>

                                )}

                            </div>

                        </section>

                    )}

                </div>

            </div>

        </div>
    );
};

export default FacultyProfile;