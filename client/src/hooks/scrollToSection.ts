import { LAYOUT } from "@/constants/layout";

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset =
        LAYOUT.HEADER_HEIGHT +
        LAYOUT.NAVIGATION_HEIGHT +
        LAYOUT.SECTION_OFFSET;

    window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
    });
};