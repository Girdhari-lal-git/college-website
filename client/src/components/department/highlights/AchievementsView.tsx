import { Achievement } from "./types";


interface Props {
    achievements: Achievement[];
}

const AchievementsView = ({
    achievements,
}: Props) => {
    if (achievements.length === 0) {
        return (
            <div className="py-12 text-center text-neutral-500">
                Achievement information will be updated soon.
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
            {achievements.map((item) => (
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

                        <p className="text-sm text-secondary">
                            {item.year}
                        </p>

                        <h3 className="
                            mt-1
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
                            {item.role}
                        </p>

                        <p className="
                            mt-4
                            text-sm
                            leading-6
                            text-neutral-700
                        ">
                            {item.achievement}
                        </p>

                    </div>
                </article>
            ))}
        </div>
    );
};

export default AchievementsView;