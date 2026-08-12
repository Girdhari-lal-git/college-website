import { ChevronDown, ChevronUp } from "lucide-react";
import { Laboratory } from "./types";

interface Props {
    laboratory: Laboratory;
    active: boolean;
    onSelect: (id: string) => void;
}

const LaboratoryCard = ({
    laboratory,
    active,
    onSelect,
}: Props) => {
    return (
        <div
            className={`
                overflow-hidden
                rounded-2xl
                border
                bg-white
                shadow-sm
                transition-all
                duration-300

                ${
                    active
                        ? "border-primary shadow-lg"
                        : "border-gray-200 hover:shadow-md"
                }
            `}
        >
            {/* Clickable Header */}

            <button
                onClick={() => onSelect(laboratory.id)}
                className="w-full text-left"
            >
                <img
                    src={laboratory.image}
                    alt={laboratory.name}
                    className="
                        w-full
                        h-40
                        aspect-[7/5]
                        object-cover
                    "
                />

                <div className="p-4">

                    <h3 className="text-xl font-semibold text-primary">
                        {laboratory.name}
                    </h3>

                    <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                        {laboratory.shortDescription}
                    </p>

                    <div className="mt-4 space-y-1 text-sm">

                        <p>
                            <strong>Capacity:</strong>{" "}
                            {laboratory.capacity} Students
                        </p>

                        <p>
                            <strong>Coordinator:</strong>{" "}
                            {laboratory.coordinator}
                        </p>

                        <p>
                            <strong>Technical Assistant:</strong>{" "}
                            {laboratory.technicalAssistant}
                        </p>

                    </div>

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            justify-between
                            border-t
                            pt-3
                        "
                    >

                        <span className="text-primary font-medium">

                            {active
                                ? "Hide Details"
                                : "View Details"}

                        </span>

                        {active ? (
                            <ChevronUp size={18} />
                        ) : (
                            <ChevronDown size={18} />
                        )}

                    </div>

                </div>
            </button>

            {/* Expanded Content */}

            {active && (

                <div
                    className="
                        border-t
                        bg-gray-50
                        px-4
                        py-4
                        animate-fadeIn
                    "
                >

                    <div className="space-y-5">

                        <div>

                            <h4 className="font-semibold text-primary mb-2">
                                Description
                            </h4>

                            <p className="text-sm text-neutral-700 leading-6">
                                {laboratory.description}
                            </p>

                        </div>

                        <div>

                            <h4 className="font-semibold text-primary mb-2">
                                Software Available
                            </h4>

                            <div className="flex flex-wrap gap-2">

                                {laboratory.software.map((item) => (

                                    <span
                                        key={item}
                                        className="
                                            rounded-full
                                            bg-primary/10
                                            px-3
                                            py-1
                                            text-xs
                                            text-primary
                                        "
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>

                        <div>

                            <h4 className="font-semibold text-primary mb-2">
                                Major Equipment
                            </h4>

                            <div className="grid grid-cols-2 gap-2 text-sm">

                                {laboratory.equipment.map((item) => (

                                    <div key={item}>
                                        • {item}
                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
};

export default LaboratoryCard;