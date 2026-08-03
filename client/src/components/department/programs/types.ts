import { LucideIcon } from "lucide-react";

export interface Career {
    title: string;
    description?: string;
    icon?: LucideIcon;
}

export interface PEO {
    title: string;
    description: string;
}

export interface PSO {
    title: string;
    description: string;
}

export interface Program {

    id: string;

    shortTitle: string;

    title: string;

    icon: LucideIcon;

    gradient: string;

    duration: string;

    intake: string;

    overview: string;

    highlights: string[];

    careers: Career[];

    peos: PEO[];

    psos: PSO[];

    accreditation?: string;

    curriculumLink?: string;

    brochureLink?: string;

}