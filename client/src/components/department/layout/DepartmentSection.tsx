import { ReactNode } from "react";
import DepartmentContainer from "./DepartmentContainer";
import { LAYOUT } from "@/constants/layout";

interface Props {
    id: string;
    title: string;
    children: ReactNode;
    className?: string;
}

const DepartmentSection = ({
    id,
    title,
    children,
    className = "",
}: Props) => {
    return (
        <section
            id={id}
            className={`scroll-mt-[140px] py-16 lg:py-20 ${className}`}
        >
            <DepartmentContainer>

                <div className="mb-10">

                    <h2
                        className="
                            text-3xl
                            lg:text-4xl
                            font-bold
                            text-primary
                        "
                    >
                        {title}
                    </h2>

                    <div
                        className="
                            mt-3
                            h-1
                            w-20
                            rounded-full
                            bg-secondary
                        "
                    />

                </div>

                {children}

            </DepartmentContainer>
        </section>
    );
};

export default DepartmentSection;