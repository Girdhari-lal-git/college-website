import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const DepartmentLayout = ({
    children,
}: Props) => {
    return (
        <main
            className="
                bg-white
                text-gray-800
            "
        >
            {children}
        </main>
    );
};

export default DepartmentLayout;