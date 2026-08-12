import { useEffect, useRef, useState } from "react";
import DepartmentNavigationItem from "./DepartmentNavigationItem";
import { NavigationItem } from "./types";

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

    const navigationRef = useRef<HTMLDivElement>(null);

    const [isPinned, setIsPinned] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [navigationTop, setNavigationTop] = useState(0);

    /*
     * Get actual height of college header
     */
    useEffect(() => {

        const updateHeaderHeight = () => {

            const header =
                document.getElementById(
                    "college-main-header"
                );

            if (!header) return;

            setHeaderHeight(
                header.getBoundingClientRect().height
            );
        };

        updateHeaderHeight();

        window.addEventListener(
            "resize",
            updateHeaderHeight
        );

        return () => {
            window.removeEventListener(
                "resize",
                updateHeaderHeight
            );
        };

    }, []);


    /*
     * Find actual position of department navigation
     */
    useEffect(() => {

        const updateNavigationPosition = () => {

            if (!navigationRef.current) return;

            const rect =
                navigationRef.current.getBoundingClientRect();

            setNavigationTop(
                rect.top + window.scrollY
            );
        };

        updateNavigationPosition();

        window.addEventListener(
            "resize",
            updateNavigationPosition
        );

        return () => {
            window.removeEventListener(
                "resize",
                updateNavigationPosition
            );
        };

    }, []);


    /*
     * Detect when navigation reaches
     * the bottom of college header
     */
    useEffect(() => {

        const handleScroll = () => {

            const shouldPin =
                window.scrollY >=
                navigationTop - headerHeight;

            setIsPinned(shouldPin);
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };

    }, [navigationTop, headerHeight]);


    return (

        <div
            ref={navigationRef}
            className="relative w-full z-40"
        >

            {/* 
                Keeps the page from jumping when
                navigation becomes fixed
            */}
            {isPinned && (
                <div
                    aria-hidden="true"
                    style={{
                        height: "56px",
                    }}
                />
            )}


            <nav
                className="
                    w-full
                    border-b
                    border-gray-200
                    bg-white
                    shadow-sm
                "
                style={{
                    position: isPinned
                        ? "fixed"
                        : "relative",

                    top: isPinned
                        ? `${headerHeight}px`
                        : "auto",

                    left: 0,
                    right: 0,

                    zIndex: 40,
                }}
            >

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >

                    <div className="flex overflow-x-auto">

                        {items.map((item) => (

                            <DepartmentNavigationItem
                                key={item.id}
                                item={item}
                                active={
                                    activeSection === item.id
                                }
                                onClick={onNavigate}
                            />

                        ))}

                    </div>

                </div>

            </nav>

        </div>
    );
};

export default DepartmentNavigation;