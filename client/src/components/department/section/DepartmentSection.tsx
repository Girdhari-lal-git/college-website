import React from "react";
import DepartmentContainer from "../layout/DepartmentContainer";
import SectionHeader from "./SectionHeader";

interface Props {
    id: string;

    label?: string;

    title: string;

    subtitle?: string;

    children: React.ReactNode;

    className?: string;

    centered?: boolean;
}

const DepartmentSection = ({
    id,
    label,
    title,
    subtitle,
    children,
    className = "",
    centered = false,
}: Props) => {

    return (

        <section
            id={id}
            className={`
                py-20
                scroll-mt-36
                ${className}
            `}
        >

            <DepartmentContainer>

                <SectionHeader
                    label={label}
                    title={title}
                    subtitle={subtitle}
                    centered={centered}
                />

                {children}

            </DepartmentContainer>

        </section>

    );

};

export default DepartmentSection;