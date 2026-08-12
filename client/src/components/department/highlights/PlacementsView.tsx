import { Placement } from "./types";

interface Props {
    placements: Placement[];
}

const PlacementsView = ({
    placements,
}: Props) => {
    if (placements.length === 0) {
        return (
            <div className="py-12 text-center text-neutral-500">
                Placement highlights will be updated soon.
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
            {placements.map((item) => (
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

                        <p className="
                            text-3xl
                            font-bold
                            text-primary
                        ">
                            {item.package}
                        </p>

                        <h3 className="
                            mt-2
                            text-lg
                            font-semibold
                            text-neutral-800
                        ">
                            {item.name}
                        </h3>

                        <p className="
                            mt-1
                            text-sm
                            text-neutral-500
                        ">
                            {item.program}
                        </p>

                        <div className="
                            mt-4
                            border-t
                            pt-3
                            text-sm
                        ">
                            <p>
                                <span className="font-medium">
                                    Company:
                                </span>{" "}
                                {item.company}
                            </p>

                            <p className="mt-1 text-neutral-500">
                                {item.year}
                            </p>
                        </div>

                    </div>
                </article>
            ))}
        </div>
    );
};

export default PlacementsView;