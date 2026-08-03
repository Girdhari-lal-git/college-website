import DepartmentNavigationItem from "./DepartmentNavigationItem";
import { NavigationItem } from "./types";
import { LAYOUT } from "@/constants/layout";

interface Props {
    items: NavigationItem[];
    activeSection: string;
    onNavigate: (id: string) => void;
}

const DepartmentNavigation = ({
    items,
    activeSection,
    onNavigate,
}: Props) => {
    return (
        <nav
            className="
                sticky
                z-40
                bg-white/95
                backdrop-blur-md
                border-b
                shadow-sm
            "
            style={{
                top: `${LAYOUT.HEADER_HEIGHT}px`,
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className="
                        flex
                        items-center
                        gap-3
                        overflow-x-auto
                        scrollbar-hide
                        scroll-smooth
                        snap-x
                        snap-mandatory
                        px-4
                        py-3
                        whitespace-nowrap
                    "
                >
                    {items.map((item) => (
                        <DepartmentNavigationItem
                            key={item.id}
                            item={item}
                            active={activeSection === item.id}
                            onClick={onNavigate}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default DepartmentNavigation;