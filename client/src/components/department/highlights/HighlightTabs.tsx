import {
    Trophy,
    Briefcase,
    GraduationCap,
    Lightbulb,
} from "lucide-react";

export type HighlightType =
    | "achievements"
    | "placements"
    | "alumni"
    | "projects";

interface Props {
    active: HighlightType;
    onChange: (type: HighlightType) => void;
}

const tabs = [
    {
        id: "achievements" as HighlightType,
        label: "Achievements",
        icon: Trophy,
    },
    {
        id: "placements" as HighlightType,
        label: "Top Placements",
        icon: Briefcase,
    },
    {
        id: "alumni" as HighlightType,
        label: "Top Alumni",
        icon: GraduationCap,
    },
    {
        id: "projects" as HighlightType,
        label: "Student Projects",
        icon: Lightbulb,
    },
];

const HighlightTabs = ({
    active,
    onChange,
}: Props) => {
    return (
        <div
            className="
                grid
                gap-4
                sm:grid-cols-2
                lg:grid-cols-4
            "
        >
            {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = active === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className={`
                            group
                            rounded-2xl
                            border
                            p-5
                            text-left
                            transition-all
                            duration-300

                            ${
                                isActive
                                    ? "border-primary bg-primary text-white shadow-lg"
                                    : "border-gray-200 bg-white text-neutral-700 hover:border-primary/40 hover:shadow-md"
                            }
                        `}
                    >
                        <Icon
                            size={25}
                            className={
                                isActive
                                    ? "text-white"
                                    : "text-primary"
                            }
                        />

                        <h3
                            className={`
                                mt-4
                                text-lg
                                font-semibold
                                ${
                                    isActive
                                        ? "text-white"
                                        : "text-primary"
                                }
                            `}
                        >
                            {tab.label}
                        </h3>
                    </button>
                );
            })}
        </div>
    );
};

export default HighlightTabs;