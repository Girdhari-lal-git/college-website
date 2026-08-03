import { DepartmentHeroData } from "./types";
import DepartmentContainer from "../layout/DepartmentContainer";
import DepartmentHeroButtons from "./DepartmentHeroButtons";

interface Props {
    data: DepartmentHeroData;
}

const DepartmentHero = ({ data }: Props) => {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-primary
                text-white
                py-4
            "
        >
            {/* Background Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-primary
                    via-primary/95
                    to-secondary/80
                "
            />

            {/* Pattern (future) */}
            <div className="absolute inset-0 opacity-10" />

            <DepartmentContainer>

                <div
    className="
        relative
        flex
        h-[200px]
        flex-col
        justify-center
    "
>
                    <p
                        className="
                            text-sm
                            uppercase
                            tracking-[0.25em]
                            text-white/80
                        "
                    >
                        Department
                    </p>

                    <h1
                        className="
                            mt-2
                            text-3xl
                            font-bold
                            leading-tight
                            lg:text-4xl
                        "
                    >
                        {data.name}
                    </h1>

                    <p
                        className="
                            mt-4
                            text-xl
                            text-white/90
                        "
                    >
                        {data.tagline}
                    </p>

                    {data.description && (
                        <p
                            className="
                                mt-6
                                max-w-3xl
                                text-base
                                leading-7
                                text-white/80
                            "
                        >
                            {data.description}
                        </p>
                    )}
                    <DepartmentHeroButtons buttons={data.buttons} />

                </div>

            </DepartmentContainer>

        </section>
    );
};

export default DepartmentHero;