import { ArrowRight, CheckCircle2, Clock3, Users } from "lucide-react";
import { Program } from "./types";

interface ProgramCardProps {
    program: Program;
    isActive: boolean;
    onSelect: (id: string) => void;
}

const ProgramCard = ({
    program,
    isActive,
    onSelect,
}: ProgramCardProps) => {
    const Icon = program.icon;

    return (
        <button
            onClick={() => onSelect(program.id)}
            className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                border
                text-left
                transition-all
                duration-500
                w-full
                ${
                    isActive
                        ? "border-primary shadow-2xl scale-[1.02] ring-2 ring-primary/20"
                        : "border-gray-200 hover:border-primary/40 hover:shadow-xl hover:-translate-y-2"
                }
            `}
        >
            {/* Gradient Header */}

            <div
                className={`relative bg-gradient-to-r ${program.gradient} p-7 text-white`}
            >
                {/* Background Icon */}

                <div className="absolute top-3 right-3 opacity-15">
                    <Icon size={90} />
                </div>

                {/* Main Icon */}

                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Icon size={34} />
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                    {program.shortTitle}
                </h3>

                <p className="mt-1 text-white/90 leading-relaxed">
                    {program.title}
                </p>
            </div>

            {/* Content */}

            <div className="p-6">

                <p className="text-gray-600 leading-7 line-clamp-3">
                    {program.overview}
                </p>

                {/* Highlights */}

                <div className="mt-6 space-y-3">

                    {program.highlights.slice(0, 4).map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-3"
                        >
                            <CheckCircle2
                                size={18}
                                className="text-primary shrink-0"
                            />

                            <span className="text-gray-700 text-sm">
                                {item}
                            </span>
                        </div>
                    ))}

                </div>

                {/* Footer */}

                <div className="border-t mt-7 pt-5 flex justify-between">

                    <div className="flex items-center gap-2 text-sm text-gray-700">

                        <Users
                            size={18}
                            className="text-primary"
                        />

                        {program.intake}

                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">

                        <Clock3
                            size={18}
                            className="text-primary"
                        />

                        {program.duration}

                    </div>

                </div>

                {/* CTA */}

                <div
                    className={`mt-6 flex items-center justify-between font-medium transition-colors
                    ${
                        isActive
                            ? "text-primary"
                            : "text-gray-500 group-hover:text-primary"
                    }`}
                >
                    <span>
                        {isActive
                            ? "Viewing Details"
                            : "Explore Program"}
                    </span>

                    <ArrowRight
                        size={18}
                        className={`
                            transition-transform
                            duration-300
                            ${
                                isActive
                                    ? "rotate-90"
                                    : "group-hover:translate-x-1"
                            }
                        `}
                    />
                </div>

            </div>
        </button>
    );
};

export default ProgramCard;