export interface DepartmentStat {
    label: string;
    value: string | number;
}

export interface DepartmentHeroData {
    name: string;
    tagline: string;
    description?: string;

    heroImage?: string;

    brochureUrl?: string;
    contactUrl?: string;

}

export interface DepartmentHeroButton {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
}

export interface DepartmentHeroData {
    name: string;
    tagline: string;
    description?: string;

    buttons: DepartmentHeroButton[];
}