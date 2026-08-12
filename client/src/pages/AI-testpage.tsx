import DepartmentNavigation from "@/components/department/navigation/DepartmentNavigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/hooks/scrollToSection";
import { departmentSections } from "@/components/department/navigation/departmentSections";
import { DepartmentLayout } from "@/components/department/layout";
import { DepartmentSection } from "@/components/department/layout";
import { DepartmentHero } from "@/components/department/hero";
import { DepartmentHeroData } from "@/components/department/hero/types";
import { OverviewSection } from "@/components/department/overview";
import { Calendar, GraduationCap, Users, FlaskConical, Building2, Handshake, } from "lucide-react";
import { aiDsDepartment } from "@/data/departments/ai-ds";
import {ProgramsSection} from "@/components/department/programs";
import FacultySection from "@/components/department/faculty/FacultySection";
import { LaboratoriesSection } from "@/components/department/labs";
import { DepartmentHighlightsSection, } from "@/components/department/highlights";
import { DownloadsSection } from "@/components/department/downloads";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";





const TestDepartmentPage = () => {

    
const sectionIds = departmentSections.map(section => section.id);
{/*}
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

const overviewData = {
    about: [
        "The Department of Artificial Intelligence & Data Science is committed to developing future-ready engineers through a balanced blend of academics, research, innovation and industry collaboration.",

        "The department offers modern undergraduate programs designed to equip students with strong theoretical foundations and practical exposure in Artificial Intelligence, Machine Learning, Data Science, Cloud Computing and related emerging technologies.",

        "Students actively participate in research, hackathons, internships, industry projects and innovation activities, enabling them to become competent professionals and responsible citizens.",
    ],

    departmentImage: "/images/department/ai.jpg", // Replace with your image

    quickFacts: [
        {
            icon: Calendar,
            label: "Established",
            value: "2021",
        },
        {
            icon: GraduationCap,
            label: "Programs",
            value: "3",
        },
        {
            icon: Users,
            label: "Faculty",
            value: "25+",
        },
        {
            icon: FlaskConical,
            label: "Laboratories",
            value: "8",
        },
        {
            icon: Building2,
            label: "Students",
            value: "550+",
        },
        
    ],

    vision:
        "To develop technocrats in the domain of emerging technologies by making them ethical professionals with innovative knowledge and scientific temper to enrich the society ready to face global challenges.",

    mission:[
        "M1: To develop the students as technocrats proficient with technologies in the field of Artificial Intelligence & Data Science.",
        "M2:To provide quality education as per need of industry and professions, while ensuring students’ contribution to society through research development aptitude.",
        "M3:To nurture the students with professional ethics & concern towards mankind in a global perspective.",
],
    hod: {
        name: "Dr. Budesh Kanwar",
        designation: "Professor & Head",

        image: "/images/hod/ai.png",

        message:[
            "Welcome to the Department of Artificial Intelligence & Data Science at Poornima Institute of Engineering & Technology!",
            "Established in 2021, our department is at the forefront of innovation and excellence within the Poornima Foundation. With a focus on providing quality education and fostering research and innovation in the dynamic fields of Artificial Intelligence & Data Science, we are dedicated to nurturing the next generation of leaders and researchers.",
            "Our undergraduate program, leading to a B.Tech. in Artificial Intelligence & Data Science, offers students a comprehensive curriculum aligned with the standards set by Rajasthan Technical University, KOTA. With an emphasis on hands-on learning and practical experience, our state-of-the-art infrastructure and cutting-edge laboratory facilities provide students with the tools and resources they need to succeed in today's rapidly evolving technological landscape.",
            "At our department, we believe in fostering a culture of innovation, critical thinking, and ethical responsibility. Our faculty members are not only educators but also mentors who guide students in their academic and professional journey. Through industry partnerships, research collaborations, and practical projects, we ensure that our graduates are well-prepared to meet the challenges of the AI and Data Science industry.",
            "We invite you to explore our programs, facilities, and opportunities. Together, let's shape the future of technology and make a positive impact on society through the power of Artificial Intelligence and Data Science.",
        ],
    },
}; */}

const activeSection = useScrollSpy({
    sectionIds,
}); 

    return (
        
        <DepartmentLayout>
             <AccessibilityFeatures />
             <Header />
            {/* Hero */}
            <DepartmentHero
    data={aiDsDepartment.hero}
/>

            {/* Navigation */}
            <DepartmentNavigation
    items={departmentSections}
    activeSection={activeSection}
    onNavigate={scrollToSection} /> 
<main>
            {/* Overview */}
            <OverviewSection
    data={aiDsDepartment.overview}
/>

            {/* Program Sections */}
           <ProgramsSection
    programs={aiDsDepartment.programs}
/>

            {/* Faculty Section */}
           <FacultySection
    department="AI and Data Science"
/>

<LaboratoriesSection
    laboratories={aiDsDepartment.laboratories}
/>


            {/* Highlights Section */}
            <DepartmentHighlightsSection
    data={aiDsDepartment.highlights}
/>


 {/* Downloads */}
             <DownloadsSection
    downloads={aiDsDepartment.downloads}
/>       

      </main>     
      <Cta />
            <Footer />

        </DepartmentLayout>
    );
};

export default TestDepartmentPage;