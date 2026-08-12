import { useState } from "react";

import LaboratoryCard from "./LaboratoryCard";
import { Laboratory } from "./types";

interface Props {
    laboratories: Laboratory[];
}

const LaboratoryGrid = ({
    laboratories,
}: Props) => {

    const [selectedLabId, setSelectedLabId] =
        useState<string | null>(null);

    const handleSelect = (id: string) => {

        setSelectedLabId((current) =>
            current === id
                ? null
                : id
        );

    };

    return (

        <div
            className="
                grid
                gap-8
                md:grid-cols-2
            "
        >

            {laboratories.map((laboratory) => (

                <LaboratoryCard
                    key={laboratory.id}
                    laboratory={laboratory}
                    active={
                        selectedLabId === laboratory.id
                    }
                    onSelect={handleSelect}
                />

            ))}

        </div>

    );

};

export default LaboratoryGrid;