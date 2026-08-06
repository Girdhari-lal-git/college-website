import { OverviewData } from "./types";
import { DepartmentSection } from "../section";
import { Target, Rocket, CheckCircle2 } from "lucide-react";
import { useState } from "react";


interface Props {
    data: OverviewData;
}



const OverviewSection = ({ data }: Props) => {

    const [expanded, setExpanded] = useState(false);
    return (

        <DepartmentSection
            id="overview"
           title="Department Overview"
           
        >

            {/* =========================
                ABOUT + IMAGE
            ========================== */}

            <div className="grid lg:grid-cols-5 gap-10">

                {/* About */}

                <div className="lg:col-span-3">

                    <h3 className="text-2xl font-semibold text-primary mb-6">
                        About Department
                    </h3>

                    <div className="space-y-5 text-justify">

                        {data.about.map((paragraph, index) => (

                            <p
                                key={index}
                                className="text-gray-700 leading-8"
                            >
                                {paragraph}
                            </p>

                        ))}

                    </div>

                </div>

                {/* Image + Facts */}

                <div className="lg:col-span-2">

                    {/* Department Image */}

                    <div
                        className="
                            rounded-xl
                            overflow-hidden
                            shadow-lg
                            border
                        "
                    >

                        <img
                            src={data.departmentImage}
                            alt="Department"
                            className="
                                w-full
                                h-72
                                object-cover
                            "
                        />

                    </div>

                   

                </div>
                

            </div>
 {/* Quick Facts */}

                    <div
                        className="
                            grid
                            grid-cols-5
                            gap-4
                            mt-6
                        "
                    >

                        {data.quickFacts.map((fact) => {

                            const Icon = fact.icon;

                            return (

                                <div
                                    key={fact.label}
                                    className="
                                        rounded-lg
                                        border
                                        p-4
                                        bg-white
                                    "
                                >

                                    <Icon
                                        size={20}
                                        className="text-secondary mb-3"
                                    />

                                    <p className="text-sm text-gray-500">
                                        {fact.label}
                                    </p>

                                    <h4 className="font-semibold text-primary">
                                        {fact.value}
                                    </h4>

                                </div>

                            );
 
                        })}

                    </div>
            {/* =========================
                VISION & MISSION
            ========================== */}

            

<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">

    {/* Vision */}
    <div className="lg:col-span-2">
        <div
            className="
                h-full
                rounded-2xl
                border
                border-primary/15
                bg-gradient-to-br
                from-primary/5
                to-white
                p-8
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
            "
        >
            <div className="flex items-center gap-4 mb-6">

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        bg-primary
                        text-white
                    "
                >
                    <Target size={36} />
                </div>

                <div>

                    <p className="text-sm uppercase tracking-widest text-secondary font-semibold">
                        Our
                    </p>

                    <h3 className="text-4xl font-bold text-primary">
                        Vision
                    </h3>

                </div>

            </div>

            <div className="h-1 w-20 bg-secondary rounded-full mb-6"></div>

            <p className="leading-8 text-justify text-gray-700">
                {data.vision}
            </p>

        </div>
    </div>

    {/* Mission */}
    <div className="lg:col-span-3">

        <div
            className="
                h-full
                rounded-2xl
                border
                border-secondary/15
                bg-gradient-to-br
                from-secondary/5
                to-white
                p-8
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
            "
        >

            <div className="flex items-center gap-4 mb-4">

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        bg-secondary
                        text-white
                    "
                >
                    <Rocket size={24} />
                </div>

                <div>

                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                        Our
                    </p>

                    <h3 className="text-3xl font-bold text-primary">
                        Mission
                    </h3>

                </div>

            </div>

            <div className="h-1 w-20 bg-primary rounded-full mb-2"></div>

            <div className="space-y-2">

                {data.mission.map((item, index) => (

                    <div
                        key={index}
                        className="
                            flex
                            items-start
                            gap-4
                            rounded-xl
                            border
                            border-gray-100
                            bg-white
                            p-5
                            transition-all
                            duration-300
                            hover:border-secondary/30
                            hover:shadow-md
                        "
                    >

                        <CheckCircle2
                            size={22}
                            className="
                                mt-1
                                shrink-0
                                text-secondary
                            "
                        />

                        <p className="leading-7 text-justify text-gray-700">
                            {item}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    </div>

</div>

            {/* =========================
                    HOD MESSAGE
            ========================== */}

            <div
                className="
                    mt-12
                    rounded-xl
                    border
                    p-8
                    bg-white
                "
            >

                <div className="grid lg:grid-cols-4 gap-8">

                    <div>

                        <img
                            src={data.hod.image}
                            alt={data.hod.name}
                            className="
                                w-full
                                rounded-lg
                                shadow
                            "
                        />

                    </div>

                    <div className="lg:col-span-3">

                        <h3 className="text-2xl font-semibold text-primary">
                            Message from the Head
                        </h3>

                        <h4 className="mt-5 font-bold">
                            {data.hod.name}
                        </h4>

                        <p className="text-secondary mb-5">
                            {data.hod.designation}
                        </p>

                   <div
    className={`
        overflow-hidden
        transition-all
        duration-500
    `}
>
    <div className={`${expanded ? "" : "line-clamp-6"}`}>
        {data.hod.message.map((paragraph, index) => (
            <p
                key={index}
                className="mb-5 text-justify leading-8 text-gray-700 last:mb-0"
            >
                {paragraph}
            </p>
        ))}
    </div>
</div>

                       <button
    onClick={() => setExpanded(!expanded)}
    className="
        mt-6
        inline-flex
        items-center
        gap-2
        font-semibold
        text-secondary
        hover:text-primary
        transition-colors
    "
>
    {expanded ? "Show Less" : "Read Complete Message"}

    <span
        className={`
            transition-transform
            duration-300
            ${expanded ? "rotate-180" : ""}
        `}
    >
        ▼
    </span>
</button>

                    </div>

                </div>

            </div>

        </DepartmentSection>

    );

};

export default OverviewSection;