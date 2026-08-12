export interface Laboratory {
    id: string;

    name: string;

    image: string;

    shortDescription: string;

    description: string;

    capacity: number;

    coordinator: string;

    technicalAssistant: string;

    software: string[];

    equipment: string[];
}