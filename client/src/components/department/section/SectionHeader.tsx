import React from "react";

interface Props {
    label?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
}

const SectionHeader = ({
    label,
    title,
    subtitle,
    centered = false,
}: Props) => {

    return (

        <div
            className={`
                mb-12
                ${centered ? "text-center" : ""}
            `}
        >

            {label && (

                <p
                    className="
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-secondary
                        font-semibold
                    "
                >
                    {label}
                </p>

            )}

            <h2
                className="
                    mt-2
                    text-3xl
                    lg:text-4xl
                    font-bold
                    text-primary
                "
            >
                {title}
            </h2>

            {subtitle && (

                <p
                    className="
                        mt-4
                        max-w-3xl
                        text-gray-600
                        leading-7
                        mx-auto
                    "
                >
                    {subtitle}
                </p>

            )}

            <div
                className={`
                    mt-6
                    h-1
                    w-20
                    rounded-full
                    bg-secondary

                    ${centered ? "mx-auto" : ""}
                `}
            />

        </div>

    );

};

export default SectionHeader;