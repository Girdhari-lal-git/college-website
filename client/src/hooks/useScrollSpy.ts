import { useEffect, useState } from "react";

interface UseScrollSpyProps {
    sectionIds: string[];
    offset?: number;
}

export const useScrollSpy = ({
    sectionIds,
    offset = 140,
}: UseScrollSpyProps) => {

    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

    useEffect(() => {

        const handleScroll = () => {

            const scrollPosition = window.scrollY + offset;

            let currentSection = sectionIds[0];

            for (const id of sectionIds) {

                const section = document.getElementById(id);

                if (!section) continue;

                if (section.offsetTop <= scrollPosition) {
                    currentSection = id;
                }

            }

            setActiveSection(currentSection);

        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [sectionIds, offset]);

    return activeSection;
};