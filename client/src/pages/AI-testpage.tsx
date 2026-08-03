import DepartmentNavigation from "@/components/department/navigation/DepartmentNavigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/hooks/scrollToSection";
import { departmentSections } from "@/components/department/navigation/departmentSections";
import { DepartmentLayout } from "@/components/department/layout";
import { DepartmentSection } from "@/components/department/layout";
import { DepartmentHero } from "@/components/department/hero";
import { DepartmentHeroData } from "@/components/department/hero/types";





const TestDepartmentPage = () => {

    
const sectionIds = departmentSections.map(section => section.id);

const heroData: DepartmentHeroData = {
    name: "Department of Artificial Intelligence & Data Science",

    tagline: "Empowering Future AI Innovators",

    
    buttons: [
        {
            label: "Download Brochure",
            href: "#",
            variant: "primary",
        },
        {
            label: "Contact Department",
            href: "#",
            variant: "secondary",
        },
    ],

    stats: [],
};

const activeSection = useScrollSpy({
    sectionIds,
}); 


    return (
        <DepartmentLayout>
            {/* Hero */}
            <DepartmentHero data={heroData} />

            {/* Navigation */}
            <DepartmentNavigation
    items={departmentSections}
    activeSection={activeSection}
    onNavigate={scrollToSection}
/> 

            {/* Sections */}
            {departmentSections.map((section) => (
     <DepartmentSection id={section.id}
    title={section.label}
>
                    
                    <div className="mt-4 space-y-4">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-lg border bg-gray-50 p-6"
                            >
                                <h3 className="font-semibold">
                                    Dummy Card {index + 1}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque habitant morbi
                                    tristique senectus et netus et malesuada
                                    fames ac turpis egestas.
                                </p>
                            </div>
                        ))}
                    </div>
                </DepartmentSection>
            ))}

        </DepartmentLayout>
    );
};

export default TestDepartmentPage;