import { Alumni } from "./types";

interface Props {
    alumni: Alumni[];
}

const AlumniView = ({
    alumni,
}: Props) => {
    if (alumni.length === 0) {
        return (
            <div className="py-12 text-center text-neutral-500">
                Alumni highlights will be updated soon.
            </div>
        );
    }

    return (
        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
            "
        >
            {alumni.map((item) => (
                <article
                    key={item.id}
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                    "
                >
                    <img
                        src={item.photo}
                        alt={item.name}
                        className="
                            h-48
                            w-full
                            object-cover
                        "
                    />

                    <div className="p-5">

                        <h3 className="
                            text-xl
                            font-semibold
                            text-primary
                        ">
                            {item.name}
                        </h3>

                        <p className="
                            mt-1
                            text-sm
                            text-neutral-500
                        ">
                            {item.program} • {item.graduationYear}
                        </p>

                        <p className="
                            mt-4
                            font-medium
                            text-neutral-800
                        ">
                            {item.designation}
                        </p>

                        <p className="
                            mt-1
                            text-sm
                            text-neutral-600
                        ">
                            {item.organization}
                        </p>

                    </div>
                </article>
            ))}
        </div>
    );
};

export default AlumniView;