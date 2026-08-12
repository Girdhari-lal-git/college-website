export interface Achievement {
    id: string;
    name: string;
    photo: string;
    role: string;
    achievement: string;
    year: string;
}

export interface Placement {
    id: string;
    name: string;
    photo: string;
    program: string;
    company: string;
    package: string;
    year: string;
}

export interface Alumni {
    id: string;
    name: string;
    photo: string;
    program: string;
    graduationYear: string;
    designation: string;
    organization: string;
}

export interface ProjectDomain {
    id: string;
    name: string;
    count: number;
    icon?: string;
}

export interface DepartmentHighlightsData {
    achievements: Achievement[];
    placements: Placement[];
    alumni: Alumni[];
    projectDomains: ProjectDomain[];
    projectsPdf?: string;
}