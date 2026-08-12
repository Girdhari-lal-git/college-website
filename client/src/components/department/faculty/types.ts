export interface FacultyProfile {
    _id: string;

    name: string;

    designation: string;

    department: string;

    gender: string;

    imageUrl?: string;

    qualification?: string;

    email?: string;

    specialization?: string[];

    experience?: string;

    researchInterests?: string[];

    googleScholar?: string;

    scopus?: string;

    orcid?: string;

    isHod?: boolean;
}