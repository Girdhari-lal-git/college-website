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
                relative
                overflow-x-hidden
                bg-white
                text-gray-800
            "
        >
            {children}
        </main>
    );
};

export default DepartmentLayout;