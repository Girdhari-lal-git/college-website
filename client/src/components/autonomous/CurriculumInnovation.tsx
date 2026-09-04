import React from "react";
import { BrainCircuit, ShieldCheck, Cpu, BookOpen, GraduationCap, ArrowRight,  Network, } from "lucide-react";

interface CurriculumInnovationProps {
    onExploreMinor: () => void;
    onExploreOpenElectives: () => void;
}

const minorDegrees = [
    {
        title: "Artificial Intelligence & Machine Learning",
        short: "AI & ML",
        department: "Department of AI & Data Science",
        icon: BrainCircuit,
    },
    {
        title: "Cyber Security",
        short: "Cyber Security",
        department: "Department of Computer Science & Engineering",
        icon: ShieldCheck,
    },
    {
        title: "VLSI Design",
        short: "VLSI Design",
        department: "Department of Internet of Things",
        icon: Cpu,
    },
];

const openElectives = [
    {
        semester: "Semester 6",
        courses: [
            "Deep Learning",
            "Cryptography & Cyber Security",
            "Blockchain",
            "Robotics & AI",
            "Information Systems Security",
            "Neural Networks",
            "VLSI Design",
            "Wearable Electronics",
            "Advanced Wireless Communication",
        ],
    },

    {
        semester: "Semester 7",
        courses: [
            "Big Data Analytics & MLOps",
            "Quantum Computing",
            "Parallel Computing",
            "Quantum AI",
            "AI Agents",
            "AR & VR",
            "MEMS Design",
            "Satellite Communication",
            "Nanoelectronics",
        ],
    },

    {
        semester: "Semester 8",
        courses: [
            "Design, Technology & Innovation",
            "AI in HR Management",
            "Digital Marketing",
            "Mobile VR & AI",
            "Scalable Data Science",
            "GPU Architecture & Programming",
            "Next-Gen Semiconductor Devices",
            "CMOS Digital VLSI",
            "Advanced Computational Techniques",
        ],
    },
];

const CurriculumInnovation: React.FC<
    CurriculumInnovationProps
> = ({
    onExploreMinor,
    onExploreOpenElectives,
}) => {
    return (
        <section className="mt-12">

            {/* Heading */}

            <div className="text-center mb-10">

                <span className="text-sm font-semibold tracking-widest uppercase text-secondary">
                    Curriculum Innovation
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                    Flexible. Multidisciplinary. Future-Ready.
                </h3>

                <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-7">
                    Our autonomous status enables PIET to introduce
                    flexible academic pathways that allow students to
                    develop expertise beyond their core discipline.
                </p>

            </div>


            {/* TWO MAJOR INITIATIVES */}

            <div className="grid lg:grid-cols-5 gap-8 mb-10 items-start">

                {/* MINOR DEGREE */}

                <div className="lg:col-span-2 border rounded-2xl bg-white shadow-sm overflow-hidden">

                    <div className="p-7">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <GraduationCap
                                    className="text-primary"
                                    size={26}
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-primary">
                                    Minor Degree
                                </h4>

                                <p className="text-sm text-gray-500">
                                    Specialization beyond the major degree
                                </p>
                            </div>

                        </div>

                        <p className="text-gray-600 leading-7 mb-6">
                            Students can pursue a Minor Degree in an
                            emerging technology domain alongside their
                            major program, enabling interdisciplinary
                            expertise and broader career opportunities.
                        </p>


                        <div className="space-y-3">

                            {minorDegrees.map((minor) => {

                                const Icon = minor.icon;

                                return (
                                    <div
                                        key={minor.short}
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            p-4
                                            rounded-xl
                                            bg-gray-50
                                            border
                                            border-gray-100
                                        "
                                    >

                                        <div className="flex-shrink-0">
                                            <Icon
                                                size={22}
                                                className="text-primary"
                                            />
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-gray-800">
                                                {minor.title}
                                            </h5>

                                            <p className="text-sm text-gray-500">
                                                {minor.department}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>


                        <button
                            onClick={onExploreMinor}
                            className="
                                mt-6
                                w-full
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-primary
                                text-white
                                py-3
                                hover:bg-secondary
                                transition
                            "
                        >
                            Explore Minor Degree Syllabi

                            <ArrowRight size={18} />
                        </button>

                    </div>

                </div>


                {/* OPEN ELECTIVES */}

                <div className="lg:col-span-3 border rounded-2xl bg-white shadow-sm overflow-hidden">

                    <div className="p-7">

                        <div className="flex items-center gap-4 mb-5">

                            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <BookOpen
                                    className="text-secondary"
                                    size={26}
                                />
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-primary">
                                    Open Electives
                                </h4>

                                <p className="text-sm text-gray-500">
                                    Multidisciplinary learning opportunities
                                </p>
                            </div>

                        </div>

                        <p className="text-gray-600 leading-7 mb-6">
                            Students can choose courses offered by other
                            departments, encouraging multidisciplinary
                            learning and exposure to emerging technologies.
                        </p>


                        {/* SEMESTERS */}

                        <div className="grid md:grid-cols-3 gap-3">

    {openElectives.map((item) => (

        <div
            key={item.semester}
            className="
                rounded-xl
                bg-gray-50
                border
                border-gray-100
                p-4
            "
        >

            <div className="font-bold text-primary mb-3">
                {item.semester.replace(
                    "Semester ",
                    "Sem "
                )}
            </div>

            <ul className="space-y-1.5">

                {item.courses.map((course) => (

                    <li
                        key={course}
                        className="
                            flex
                            items-start
                            gap-2
                            text-xs
                            text-gray-600
                            leading-5
                        "
                    >
                        <span className="text-primary">
                            •
                        </span>

                        <span>
                            {course}
                        </span>
                    </li>

                ))}

            </ul>

        </div>

    ))}

</div>


                        <div className="mt-6 pt-5 border-t">

                            <div className="flex items-center gap-2 text-sm text-gray-600">

                                <Network
                                    size={18}
                                    className="text-primary"
                                />

                                <span>
                                    Courses offered across CE, AI & DS and ECE
                                </span>

                            </div>

                        </div>


                        <button
                            onClick={onExploreOpenElectives}
                            className="
                                mt-6
                                w-full
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-primary
                                text-white
                                py-3
                                hover:bg-secondary
                                transition
                            "
                        >
                            Explore Open Electives

                            <ArrowRight size={18} />
                        </button>

                    </div>

                </div>

            </div>


            {/* THREE MINOR SPECIALIZATIONS */}

            <div className="border rounded-2xl overflow-hidden mb-10 bg-white">

                <div className="bg-primary text-white px-6 py-5">

                    <h4 className="text-2xl font-bold">
                        Three Emerging Technology Specializations
                    </h4>

                    <p className="mt-1 text-white/80">
                        Build an additional specialization alongside your
                        major degree.
                    </p>

                </div>


                <div className="grid md:grid-cols-3">

                    {minorDegrees.map((minor) => {

                        const Icon = minor.icon;

                        return (
                            <div
                                key={minor.short}
                                className="
                                    p-6
                                    border-b
                                    md:border-b-0
                                    md:border-r
                                    last:border-r-0
                                "
                            >

                                <Icon
                                    size={30}
                                    className="text-primary mb-4"
                                />

                                <h5 className="font-bold text-lg">
                                    {minor.short}
                                </h5>

                                <p className="text-sm text-gray-500 mt-2">
                                    {minor.department}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>


            {/* KEY MESSAGE */}

            <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-5">

                <p className="text-gray-700 leading-7 mb-0">

                    <strong className="text-primary">
                        Academic flexibility in action:
                    </strong>{" "}
                    PIET's autonomous curriculum enables students to
                    complement their core engineering education with
                    specialized Minor Degrees and multidisciplinary Open
                    Elective courses.

                </p>

            </div>

        </section>
    );
};

export default CurriculumInnovation;