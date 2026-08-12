import { useState } from "react";

import { DepartmentSection } from "../section";

import HighlightTabs, {
    HighlightType,
} from "./HighlightTabs";

import AchievementsView from "./AchievementsView";
import PlacementsView from "./PlacementsView";
import AlumniView from "./AlumniView";
import ProjectsView from "./ProjectsView";

import { DepartmentHighlightsData } from "./types";

interface Props {
    data: DepartmentHighlightsData;
}

const DepartmentHighlightsSection = ({
    data,
}: Props) => {

    const [active, setActive] =
        useState<HighlightType>("achievements");

    return (
        <DepartmentSection
            id="highlights"
            label="Department Highlights"
            title="Achievements, Careers & Innovation"
            subtitle="Explore notable achievements, career success, distinguished alumni and student innovation from the department."
        >

            <HighlightTabs
                active={active}
                onChange={setActive}
            />

            <div className="mt-10">

                {active === "achievements" && (
                    <AchievementsView
                        achievements={data.achievements}
                    />
                )}

                {active === "placements" && (
                    <PlacementsView
                        placements={data.placements}
                    />
                )}

                {active === "alumni" && (
                    <AlumniView
                        alumni={data.alumni}
                    />
                )}

                {active === "projects" && (
                   <ProjectsView
                    projectDomains={data.projectDomains}
                    projectsPdf={data.projectsPdf}
/>
                )}

            </div>

        </DepartmentSection>
    );
};

export default DepartmentHighlightsSection;