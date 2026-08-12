import { DepartmentSection } from "../section";
import LaboratoryGrid from "./LaboratoryGrid";
import { Laboratory } from "./types";

interface Props {
    laboratories: Laboratory[];
}

const LaboratoriesSection = ({
    laboratories,
}: Props) => {
    return (
        <DepartmentSection
            id="laboratories"
            label="Infrastructure"
            title="State-of-the-Art Laboratories"
            subtitle="Hands-on learning through modern laboratories equipped with the latest computing resources."
        >
            <LaboratoryGrid
                laboratories={laboratories}
            />
        </DepartmentSection>
    );
};

export default LaboratoriesSection;