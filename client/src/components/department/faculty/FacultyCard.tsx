import { FacultyProfile } from "./types"
interface Props {
    faculty: FacultyProfile;
}

const FacultyCard = ({ faculty }: Props) => {
    return (
        <div
            className="
                rounded-2xl
                border
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >
            <img
                src={faculty.photo}
                alt={faculty.name}
                className="
                    h-64
                    w-full
                    rounded-t-2xl
                    object-cover
                "
            />

            <div className="p-5">

                <h4 className="text-lg font-semibold">
                    {faculty.name}
                </h4>

                <p className="mt-1 text-primary">
                    {faculty.designation}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                    {faculty.qualification}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {faculty.specialization
                        ?.slice(0, 3)
                        .map((area) => (
                            <span
                                key={area}
                                className="
                                    rounded-full
                                    bg-primary/10
                                    px-3
                                    py-1
                                    text-xs
                                    text-primary
                                "
                            >
                                {area}
                            </span>
                        ))}
                </div>

                <button
                    className="
                        mt-5
                        text-sm
                        font-medium
                        text-secondary
                        hover:text-primary
                    "
                >
                    View Profile →
                </button>

            </div>
        </div>
    );
};

export default FacultyCard;