export interface QuickFact {
    icon: React.ElementType;
    label: string;
    value: string;
}

export interface HodData {
    name: string;
    designation: string;
    image: string;
    message: string[];
}

export interface OverviewData {
    about: string[];
    departmentImage: string;

    quickFacts: QuickFact[];

    vision: string;
    mission: string[];

    hod: HodData;
}