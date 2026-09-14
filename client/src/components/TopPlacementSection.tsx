import React, { useState } from "react";
import {
    Building2,
    GraduationCap,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export interface PlacementStudent {
    name: string;
    batch: string;
    program: string;
    designation: string;
    company: string;
    package?: string;
    image: string;
}

interface Props {
    students: PlacementStudent[];
}

const TopPlacementSection: React.FC<Props> = ({ students }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % students.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + students.length) % students.length
        );
    };

    /*
     * Creates exactly 3 visible cards on desktop.
     * When we reach the end, it starts again from the beginning.
     */
    const visibleStudents = Array.from(
        { length: Math.min(3, students.length) },
        (_, index) => students[(currentIndex + index) % students.length]
    );

    if (!students.length) return null;

    return (
        <section className="py-16 bg-white">

            <div className="container mx-auto px-4">

                {/* Heading */}

                <div className="text-center mb-10">

                    <p className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
                        Placements
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                        Top Placements
                    </h2>

                    <div className="w-20 h-1 bg-secondary mx-auto mt-4" />

                    <p className="text-gray-600 max-w-2xl mx-auto mt-5">
                        Our students securing opportunities with leading
                        organizations across the technology industry.
                    </p>

                </div>


                {/* Carousel */}

                <div className="relative">

                    {/* Left Arrow */}

                    {students.length > 3 && (
                        <button
                            onClick={prevSlide}
                            aria-label="Previous placement"
                            className="
                                absolute
                                left-0
                                top-1/2
                                -translate-y-1/2
                                -translate-x-1/2
                                z-10
                                w-11
                                h-11
                                rounded-full
                                bg-white
                                border
                                border-gray-200
                                shadow-lg
                                flex
                                items-center
                                justify-center
                                text-primary
                                hover:bg-primary
                                hover:text-white
                                transition
                            "
                        >
                            <ChevronLeft size={22} />
                        </button>
                    )}


                    {/* Cards */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {visibleStudents.map((student, index) => (

                            <div
                                key={`${student.name}-${student.batch}-${index}`}
                                className="
                                    bg-white
                                    border
                                    border-gray-200
                                    rounded-2xl
                                    overflow-hidden
                                    shadow-sm
                                    hover:shadow-lg
                                    transition-all
                                    duration-300
                                "
                            >

                                {/* Image */}

                                <div className="aspect-[4/5] overflow-hidden bg-gray-100">

                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            hover:scale-105
                                            transition-transform
                                            duration-500
                                        "
                                    />

                                </div>


                                {/* Details */}

                                <div className="p-6">

                                    <h3 className="text-xl font-bold text-primary">
                                        {student.name}
                                    </h3>


                                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">

                                        <GraduationCap size={16} />

                                        <span>
                                            {student.program} · {student.batch}
                                        </span>

                                    </div>


                                    <div className="mt-5 space-y-3">

                                        <div>

                                            <p className="text-xs uppercase tracking-wide text-gray-400">
                                                Designation
                                            </p>

                                            <p className="font-medium text-gray-800">
                                                {student.designation}
                                            </p>

                                        </div>


                                        <div className="flex items-start gap-2">

                                            <Building2
                                                size={17}
                                                className="text-secondary mt-0.5"
                                            />

                                            <div>

                                                <p className="text-xs uppercase tracking-wide text-gray-400">
                                                    Organization
                                                </p>

                                                <p className="font-semibold text-gray-800">
                                                    {student.company}
                                                </p>

                                            </div>

                                        </div>


                                        {student.package && (
                                            <div className="pt-3 border-t border-gray-100">

                                                <p className="text-xs uppercase tracking-wide text-gray-400">
                                                    Package
                                                </p>

                                                <p className="text-lg font-bold text-secondary">
                                                    {student.package}
                                                </p>

                                            </div>
                                        )}

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* Right Arrow */}

                    {students.length > 3 && (
                        <button
                            onClick={nextSlide}
                            aria-label="Next placement"
                            className="
                                absolute
                                right-0
                                top-1/2
                                -translate-y-1/2
                                translate-x-1/2
                                z-10
                                w-11
                                h-11
                                rounded-full
                                bg-white
                                border
                                border-gray-200
                                shadow-lg
                                flex
                                items-center
                                justify-center
                                text-primary
                                hover:bg-primary
                                hover:text-white
                                transition
                            "
                        >
                            <ChevronRight size={22} />
                        </button>
                    )}

                </div>

            </div>

        </section>
    );
};

export default TopPlacementSection;