export interface FacultyProfile {
    _id: string;

    name: string;

    designation: string;

    qualification?: string;

    photo: string;

    email?: string;

    specialization?: string[];

    experience?: string;

    researchInterests?: string[];

    googleScholar?: string;

    scopus?: string;

    orcid?: string;
    isHod?: boolean;
    isdyHod?: boolean;
}