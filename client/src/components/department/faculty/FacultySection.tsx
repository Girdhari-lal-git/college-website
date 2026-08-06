import { DepartmentSection } from "../section";
import FacultyGrid from "./FacultyGrid";
import { FacultyProfile } from "./types"

interface Props {
    faculty: FacultyProfile[];
    loading: boolean;
}

const FacultySection = ({ faculty, loading }: Props) => {
    return (
        <DepartmentSection
            id="faculty"
            label="Faculty"
            title="Meet Our Faculty"
            subtitle="Experienced educators, researchers and mentors committed to academic excellence."
        >
            {loading ? (
                <div className="py-20 text-center">
                    Loading Faculty...
                </div>
            ) : (
                <FacultyGrid faculty={faculty} />
            )}
        </DepartmentSection>
    );
};

export default FacultySection;