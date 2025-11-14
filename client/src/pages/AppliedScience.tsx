import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import ProfileMessageSection from '@/components/ProfileMessageSection'
import OverviewSection from '@/components/OverviewSection'
import Checklist from '@/components/Checklist'
import { Check } from 'lucide-react'
import InfoCard from '@/components/InfoCard'
import Message from '@/components/Message'
import ProfileCard from '@/components/ProfileCard'
import FacultySwiper from '@/components/FacultySwiper'
import LabInfoCard from '@/components/LabInfoCard'

import CourseOutcomeAccordion, { SubjectCO } from '@/components/CourseOutcomeAccordion'
import Cta from '@/components/Cta'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

interface Faculty {
  _id: string;
  name: string;
  department: string;
  designation: string;
  gender: string;
  imageUrl?: string;
}


export const courseData: SubjectCO[] = [
    {
        subject: "Engineering Mathematics-I",
        subjectCode: "251AS2-01",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Remember the formulas and concepts of differentiation and integration, maxima and minima of a function, and distinguish between vector fields and scalar fields." },
            { coNumber: "CO2", coDefinition: "Comprehend the properties of Fourier series, the geometry of tangent planes and normal lines. Estimate the gradient, divergence and curl of a vector and vector identities." },
            { coNumber: "CO3", coDefinition: "Apply techniques of multivariable calculus, Lagrange multipliers, multiple integration, and vector integral theorems (Green’s, Gauss’s, and Stokes’s) to solve real-world engineering problems." },
            { coNumber: "CO4", coDefinition: "Classify critical points of multivariable functions, identify even and odd functions for Fourier series and apply integral theorems under suitable condition." },
            { coNumber: "CO5", coDefinition: "Evaluate complex integrals (line, surface & volume) and assess the convergence of Fourier series and improper integrals involving Beta and Gamma functions for practical use." },
        ],
    },
    {
        subject: "Engineering Physics",
        subjectCode: "251AS2-02/252AS2-02",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall and define fundamental concepts, laws, and terminology related to wave optics, quantum mechanics, lasers, optical fibres, material science, semiconductors, and electromagnetism. Recall the definition and importance of water hardness, fuel classification, corrosion, Advanced Engineering materials and e-waste." },
            { coNumber: "CO2", coDefinition: "Understand the principles of interference and diffraction, the properties of wave functions, the mechanism of laser action, and the band theory of solids. Understand the purification process of municipal water; boiler troubles and issues related to corrosion and correlate different water softening techniques and corrosion prevention practices." },
            { coNumber: "CO3", coDefinition: "Apply key concepts in Quantum Mechanics, Lasers, and Optical Fibers, including wave-particle duality, Schrödinger's equation, laser operation, and optical fibre communication, to solve problems and assess their applications in various fields. Apply the synthesis of advanced materials and management of e-waste." },
            { coNumber: "CO4", coDefinition: "Analyze the diffraction of light, the energy levels and spatial distribution of a particle in one-dimensional Analyze the fuel quality, Engineering materials and their applications for sustainable development of society and environment." },
            { coNumber: "CO5", coDefinition: "Evaluate the core concepts of Electrodynamics, including Maxwell's equations, alongside Green Energy technologies and the basics of Nanotechnology and its applications. Determine the fuel's calorific value, and the amount of air needed for fuel burning for mitigating energy demand of industry." },
        ],
    },
    {
        subject: "Communication Skills",
        subjectCode: "251HS1-04",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Identify and explain types of communication, barriers, and techniques for effective team building. Define the basic structure, components, and functioning of a computer system, including the role of CPU, memory, input/output devices, and software classifications, flowchart & algorithms." },
            { coNumber: "CO2", coDefinition: "Apply grammatical rules (tenses, active/passive voice, reported speech, infinitives, gerunds, punctuation) to construct error-free sentences. Develop simple C Programs using Tokens, Data Types, Variables, Constants, Operators, Expressions, Pre-processor Directives, and input-output statements with proper program structure." },
            { coNumber: "CO3", coDefinition: "Demonstrate personality development and presentation skills such as body language, time management, goal setting, and impression management. Apply Conditional and looping control statements, arrays (one dimensional and two dimensional), string handling functions and matrix operations to solve computational problems." },
            { coNumber: "CO4", coDefinition: "Develop professional writing skills through tasks such as emails, business letters, resumes, blogs, reports, and paraphrasing exercises. Analyze and design modular programs using functions, recursion, pointers, arrays, and dynamic memory allocation." },
            { coNumber: "CO5", coDefinition: "Analyze and interpret literary texts (poetry & prose) to enhance critical thinking, creativity, and aesthetic understanding. Implement file operations and user-defined data types (structures, unions) to manage data storage and processing using text and binary files in C." },
        ],
    },
    {
        subject: "Basic Electrical & Electronics Engineering",
        subjectCode: "251EE3-08/252EE3-08",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the foundational concepts related to the DC and AC circuits, transformers, and power conversion devices." },
            { coNumber: "CO2", coDefinition: "Understand relevant laws and theorems useful for the DC and AC circuits, and transformers." },
            { coNumber: "CO3", coDefinition: "Apply appropriate circuit solving technique(s) to solve electrical networks." },
            { coNumber: "CO4", coDefinition: "Analyze the key attributes of several power conversion devices." },
            { coNumber: "CO5", coDefinition: "Make evaluation of different feedback mechanisms in the context of oscillators." },
        ],
    },
    {
        subject: "Web Designing",
        subjectCode: "251CS3-09",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the principles of web page design and distinguish between types of websites, along with the basic concepts and applications of HTML in web development. Remember the basic concepts of sub domains of mechanical engineering and engineering materials. Describe the scope, specializations, and societal role of civil engineering with examples of practical applications. Understand about synthesis of Nylon 6, 6 & Bakelite." },
            { coNumber: "CO2", coDefinition: "Understand the basic concept of Java Script and its application. Understand the various conventional and advanced manufacturing processes. Knowledge of pumps, IC engines, refrigerator and air conditioning and IC engines. Demonstrate the basic techniques of surveying, including linear and angular measurements, levelling, and the use of modern instruments like Total Stations and GPS. Analyze different properties of lubricating oil." },
            { coNumber: "CO3", coDefinition: "Recognize and apply the elements of Creating Style Sheets (CSS). Apply knowledge of pumps, refrigeration and air conditioning. Analyze different civil engineering materials and basic building concepts, distinguishing their properties, applications, and contribution to structural integrity. Analyze quality of coal by proximate analysis." },
            { coNumber: "CO4", coDefinition: "Understand and apply advanced web technologies including XML, DOM, and AJAX for asynchronous data exchange and web service integration in modern web applications. Analyze the various power transmission system. Evaluate transportation systems by identifying modes of transport and recommending safety measures based on accident causes. Evaluate various quality parameters of water like hardness, DO, Chlorine, pH, TDS and conductivity of given water samples." },
            { coNumber: "CO5", coDefinition: "Introduce basics concept of Web Hosting and apply the concept of SEO. Evaluate various thermodynamic systems & performance of IC engine. Design basic sustainable solutions in civil engineering by integrating advancements like smart cities, green buildings, solid waste management, and disaster management techniques. Evaluate the strength of Ferrous Ammonium Sulphate solution with the help of K2Cr2O7 solution." },
        ],
    },
    {
        subject: "Language Lab",
        subjectCode: "251HS1-22/252HS1-22",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand Phonetic Symbols and Transcriptions for accurate pronunciation using IPA and software tools. Understand leadership, interpersonal, and motivational skills required for effective team collaboration and performance in professional settings. Understand and describe the structure of a C program to explain, write, compile and execute programs using input and output statements." },
            { coNumber: "CO2", coDefinition: "Enhance Listening and Speaking Skills through role-plays, simulations, JAM, and Extempore activities. Develop smart goals, manage time and stress, and adopt emotional intelligence practices for balanced personal and professional growth. Understand and use the concept of functions, file operations and design new user-defined functions to solve module driven problems." },
            { coNumber: "CO3", coDefinition: "Participate effectively in Group Discussions and Mock Interviews, demonstrating appropriate body language and communication techniques. Analyze the body language through effective communication, first impressions, and interview techniques for career advancement and formal interactions. Demonstrate and write programs by applying the decision control statements and loop control statements using different operators." },
            { coNumber: "CO4", coDefinition: "Improve Writing Skills through structured tasks such as storytelling, narration, and dialogue writing. Create customer handling, selling, and negotiation techniques while resolving conflicts in diverse workplace scenarios. Illustrate and apply the concept of modular programming and recursion." },
            { coNumber: "CO5", coDefinition: "Develop and deliver effective Presentations using digital tools, with clarity, structure, and confidence. Demonstrate self-awareness and confidence through structured participation in interactive and performance-based activities such as mock interviews and presentations. Design object-based programs by creating new data type using structure, union and pointer." },
        ],
    },
    {
        subject: "Basic Electrical & Electronics Engineering Lab",
        subjectCode: "251EE3-26/252EE3-26",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand and describe the structure of a C program to explain, write, compile and execute programs using input and output statements." },
            { coNumber: "CO2", coDefinition: "Understand and use the concept of functions, file operations and design new user-defined functions to solve module driven problems." },
            { coNumber: "CO3", coDefinition: "Demonstrate and write programs by applying the decision control statements and loop control statements using different operators." },
            { coNumber: "CO4", coDefinition: "Illustrate and apply the concept of modular programming and recursion." },
            { coNumber: "CO5", coDefinition: "Design object-based programs by creating new data type using structure, union and pointer." },
        ],
    },
    {
        subject: "Web Designing Lab",
        subjectCode: "251CS3-27/",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the principles of web page design and distinguish between types of websites, along with the basic concepts and applications of HTML in web development." },
            { coNumber: "CO2", coDefinition: "Understand the basic concept of Java Script and its application." },
            { coNumber: "CO3", coDefinition: "Recognize and apply the elements of Creating Style Sheets (CSS)." },
            { coNumber: "CO4", coDefinition: "Apply advanced web technologies including XML, DOM, and AJAX for asynchronous data exchange and web service integration in modern web applications." },
            { coNumber: "CO5", coDefinition: "Introduce basics concept of Web Hosting and apply the concept of SEO." },
        ],
    },
    {
        subject: "Advanced Manufacturing Practices Workshop Lab",
        subjectCode: "251ME3-28/252ME3-28",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the appropriate tools, materials, instruments required for Carpentry, LASER cutting and fitting shops. Understand surveying techniques using tape, compass, and leveling instruments for field measurements. Discuss the concept of engineering terminology, engineering scales and conic sections and basic designing software." },
            { coNumber: "CO2", coDefinition: "Understand the concepts of Welding and sheet metal shops for joining process. Apply the shape characteristics of aggregates through Flakiness and Elongation Index tests. Apply the necessary skills in drawing and explaining orthographic projection of points, lines, and planes." },
            { coNumber: "CO3", coDefinition: "To Study and acquire knowledge on various basic machines like lathe, drilling, shaping on wooden and metallic work pieces. Analyze the use and operation of modern electronic surveying instruments like EDM and Total Station. Analyze and Draw projections of solids." },
            { coNumber: "CO4", coDefinition: "Apply the concepts of Foundry and Additive manufacturing processes with practical knowledge. Evaluate physical properties of bricks using standard laboratory tests. Draw and classify the sections of solids." },
            { coNumber: "CO5", coDefinition: "Apply knowledge to make a final project with help of various machine tools. Identify and explain various sanitary and water supply fittings used in civil. Explain various commands and create drawing in AutoCAD." },
        ],
    },
    {
        subject: "Design Thinking Lab",
        subjectCode: "251SK3-32",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the appropriate software, materials, instruments required for LASER cutting and engraving Processes." },
            { coNumber: "CO2", coDefinition: "Understand the concepts of Additive Manufacturing process." },
            { coNumber: "CO3", coDefinition: "Understand the concepts of Reverse Engineering with practical applications." },
            { coNumber: "CO4", coDefinition: "Apply knowledge to make a final project with help of various machine tools." },
            { coNumber: "CO5", coDefinition: "To study and acquire knowledge of Eagle or KiCAD software for PCB designing." },
        ],
    },
    {
        subject: "Innovation Development Lab",
        subjectCode: "252SK3-33",
        semester: "Semester 2",
        outcomes: [
            { coNumber: "CO1", coDefinition: "To Study and acquire knowledge of Robotics links and mechanisms." },
            { coNumber: "CO2", coDefinition: "Understand the concepts of SMT pick & place machine." },
            { coNumber: "CO3", coDefinition: "Understand the concepts of coding with practical applications." },
            { coNumber: "CO4", coDefinition: "Apply knowledge to make a final project with help of various machine tools." },
            { coNumber: "CO5", coDefinition: "To Study and acquire knowledge of PCB designing." },
        ],
    },
    {
        subject: "NSS",
        subjectCode: "251FC8-0X",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Remember the purpose, objectives, and structure of the National Service Scheme." },
            { coNumber: "CO2", coDefinition: "Understand the importance of cleanliness, hygiene, and environmental sustainability." },
            { coNumber: "CO3", coDefinition: "Apply NSS principles to engage in activities that promote health, safety, and awareness." },
            { coNumber: "CO4", coDefinition: "Analyze social issues through participation in community-based programs and outreach visits." },
            { coNumber: "CO5", coDefinition: "Evaluate the impact of NSS activities on personal, institutional, and societal development." },
        ],
    },
    {
        subject: "Sports and Yoga",
        subjectCode: "251FC8-0X",
        semester: "Semester 1",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Remember the well-being of the body and self." },
            { coNumber: "CO2", coDefinition: "Make the students understand the importance of sound health and fitness principles as they relate to better health." },
            { coNumber: "CO3", coDefinition: "Expose the students to a variety of physical and yogic activities aimed at stimulating their continued inquiry about Yoga, physical education, health, and fitness." },
            { coNumber: "CO4", coDefinition: "Exhibit sportsmanship, motivation, and teamwork through participation in physical fitness and sports activities." },
            { coNumber: "CO5", coDefinition: "To develop among students an appreciation of physical activity as a lifetime pursuit and a means to better health." },
        ],
    },
    {
        subject: "Engineering Mathematics-II",
        subjectCode: "252AS2-01",
        semester: "Semester 2",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall fundamental concepts and results related to matrices and basic concepts of differential equations." },
            { coNumber: "CO2", coDefinition: "Explain the principles of the Rank-nullity theorem, Cayley-Hamilton theorem and the classification of ODE & PDE with appropriate terminology and structure." },
            { coNumber: "CO3", coDefinition: "Apply appropriate methods to solve systems of linear equations, first-order and second-order ODE & PDE using variation of parameters." },
            { coNumber: "CO4", coDefinition: "Analyze the structure and properties of diagonalize matrix and examine differential equations using Charpit’s method and separation of variables." },
            { coNumber: "CO5", coDefinition: "Evaluate the solution for higher-order ODEs and PDEs and determine Laplace, heat, and wave equations in Cartesian and Polar form." },
        ],
    },
    {
        subject: "Human Values and Ethics",
        subjectCode: "252HS1-05",
        semester: "Semester 2", 
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the co-relationship between “Values”; and “skills” to ensure persistent happiness and prosperity." },
            { coNumber: "CO2", coDefinition: "Understand the co-existence of Human Being - Harmony in ‘Body’ and ‘I’." },
            { coNumber: "CO3", coDefinition: "Applying harmonious values in family, society and environment for universal order." },
            { coNumber: "CO4", coDefinition: "Analyze the holistic perception of harmony at all levels of existence." },
            { coNumber: "CO5", coDefinition: "Creating a prototype of harmony in professional and personal lives by understanding and evaluating co-existence of human being with all four orders of nature." },
        ],
    },
    {
        subject: "Object Oriented Programming",
        subjectCode: "252CS3-07",
        semester: "Semester 2",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define the core principles of object-oriented programming and apply them to real-world problem- solving using C++. Define basic C++ Program using i/o variables and structures. Recall and understand the conventional representation of machine components and material, types of Lines & dimensioning." },
            { coNumber: "CO2", coDefinition: "Describe fundamental programming constructs including data types, operators, control statements, and loops to build logic- driven programs. Explain the classes for code reuse. Explain concept of first and third angle projections and prepare drawing of simple machine elements, sectional views for various parts and assembly." },
            { coNumber: "CO3", coDefinition: "Implement C++ programs using class-based structures, encapsulation, constructors, destructors, and object interactions. Apply object-oriented programming concepts using class and objects. Draw and explain various types of temporary and permanent fasteners." },
            { coNumber: "CO4", coDefinition: "Differentiate advanced object-oriented features such as inheritance, polymorphism, operator overloading, and dynamic binding. Illustrate the concepts of inheritance and polymorphism for reusable code and dynamic behaviour. Draw freehand sketches of lines, materials and various components i.e. bearings, couplings, Welded joints, pipe joints, valves etc." },
            { coNumber: "CO5", coDefinition: "Develop robust modular, reusable, and maintainable code with principles of object-oriented programming for extensible software development. Analyze the generic classes concepts in programming problem. Explain various commands and create drawing in AutoCAD." },
        ],
    
    },
    {
        subject: "NSS",
        subjectCode: "252FC8-0X",
        semester: "Semester 2",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Remember the purpose, objectives, and structure of the National Service Scheme." },
            { coNumber: "CO2", coDefinition: "Understand the importance of cleanliness, hygiene, and environmental sustainability." },
            { coNumber: "CO3", coDefinition: "Apply NSS principles to engage in activities that promote health, safety, and awareness." },
            { coNumber: "CO4", coDefinition: "Analyze social issues through participation in community-based programs and outreach visits." },
            { coNumber: "CO5", coDefinition: "Evaluate the impact of NSS activities on personal, institutional, and societal development." },
        ],
    },
    {
        subject: "Sports and Yoga",
        subjectCode: "252FC8-0X",
        semester: "Semester 2",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Remember the well-being of the body and self." },
            { coNumber: "CO2", coDefinition: "Make the students understand the importance of sound health and fitness principles as they relate to better health." },
            { coNumber: "CO3", coDefinition: "Expose the students to a variety of physical and yogic activities aimed at stimulating their continued inquiry about Yoga, physical education, health, and fitness." },
            { coNumber: "CO4", coDefinition: "Exhibit sportsmanship, motivation, and teamwork through participation in physical fitness and sports activities." },
            { coNumber: "CO5", coDefinition: "To develop among students an appreciation of physical activity as a lifetime pursuit and a means to better health." },
        ],
    },
];


const labData = [
   

    // Newly added data
    {
        image: "/images/Labs/AS/AppliedScienceDepartmentB06.jpeg",
        title: "Engineering Physics Lab",
        facultyInCharge: "Dr. Rajendra Singh",
        labAssistant: "Ms. Seema Sharma",
        roomNumber: "B06",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/Chemistry-lab.jpg",
        title: "Engineering Chemistry Lab",
        facultyInCharge: "Dr. Nupur Jain",
        labAssistant: "Ms. Rekha Kumari",
        roomNumber: "005",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartmentB10.jpeg",
        title: "Language Lab",
        facultyInCharge: "Dr. Neetu Sharma",
        labAssistant: "Mr. Manraj Prajapat",
        roomNumber: "B10",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartment(006).jpeg",
        title: "Employability & Soft Skills Lab",
        facultyInCharge: "Dr. Krati Sharma",
        labAssistant: "Mr. Narendra Saini",
        roomNumber: "006",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartmentB09.jpeg",
        title: "Computer Programming Lab",
        facultyInCharge: "Mr. Arvind Mathur",
        labAssistant: "Mr. Rajesh Kumar Gurjar",
        roomNumber: "B09",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartment109.jpeg",
        title: "Computer Programming Lab",
        facultyInCharge: "Ms. Charul Bapna",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "109",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartment007.jpeg",
        title: "Basic Electrical & Electronics Engineering Lab",
        facultyInCharge: "Dr. Ashish Laddha",
        labAssistant: "Mr. Mahendra Sharma",
        roomNumber: "007",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartment008.jpeg",
        title: "Web Designing Lab",
        facultyInCharge: "Dr. Sanjay Kumar Sinha",
        labAssistant: "Mr. Ashish Mahawar",
        roomNumber: "008",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartment(B08).jpeg",
        title: "Advanced Manufacturing Practices Workshop",
        facultyInCharge: "Dr. Nitin Mukesh Mathur",
        labAssistant: "Mr. Vimal Jain",
        roomNumber: "B08",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AIDSDepartment(B23).jpeg",
        title: "Basic Civil Engineering Lab",
        facultyInCharge: "Mr. Mukul Nama",
        labAssistant: "Mr. Umesh Sharma",
        roomNumber: "B23",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartment(B11).jpeg",
        title: "Computer Aided Engineering Graphics",
        facultyInCharge: "Mr. Naveen Porwal",
        labAssistant: "Mr. Manraj Prajapat",
        roomNumber: "B11",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/AS/AppliedScienceDepartment110.jpeg",
        title: "Computer Aided Engineering Graphics",
        facultyInCharge: "Mr. Sharad Srivastava",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "110",
        syllabusLink: "https://example.com/syllabus.pdf",
    }
];

const points = [
    'Teachers play a foundational role in shaping students’ lives by inspiring, motivating, and making learning interesting and creative.',
    'PIET is a reputed institution in Jaipur, ranked No. 3 in RTU QIV rankings.',
    'Offers an ideal learning environment with cultural exposure and value-based education.',
    "Teachers not only teach but also inspire students to embrace creativity and strive for excellence.",
];

const missionPoints = [
    'Foster an environment that develops skills for creating and implementing new ideas',
    'Enhance questioning, observation, testing, analysis, and communication abilities.',
    'Deliver quality education integrating emerging technologies and research.',
    'Promote high standards of ethics, transparency, and accountability.',

];

const objectivePoints = [
    'Better Results & Attendance',
    'More Student driven activity',
    'Outcome oriented academic & non- academic activities',
    'Better Communication Skills',
]

const visionContent = (
    <div className="flex flex-col items-center text-center space-y-4">
    <i className="fas fa-lightbulb text-yellow-500 text-5xl"></i>
    <p className="text-gray-700 flex-grow flex items-center justify-center text-justify">
      To create knowledge based society with scientific temper through cutting-edge
        technologies, innovative research and to become valuable resource for enriching mankind.
    </p>
  </div> 
);
   {/* <p className="text-gray-700 flex-grow flex items-center justify-center text-center">
        To create knowledge based society with scientific temper through cutting-edge
        technologies, innovative research and to become valuable resource for enriching mankind.
    </p> */}




const projectFieldCounts = [
    { field: "Machine Learning/Deep Learning", count: 9 },
    { field: "Artificial Intelligence", count: 5 },
    { field: "Web Development", count: 4 },
    { field: "Blockchain", count: 1 },
    { field: "AR / VR", count: 1 },
    { field: "NLP", count: 1 },
];










const missionContent = (
    <Checklist items={missionPoints} />
);

const objectiveContent = (
    <Checklist items={objectivePoints} />
);


const AppliedScience = () => {
    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFaculty = async () => {
            try {
                const response = await fetch('/api/faculty');
                if (response.ok) {
                    const data = await response.json();
                    
                    // Debug: Log all faculty data to see department names
                    console.log('All faculty data:', data.data);
                    console.log('Department names:', data.data?.map((f: Faculty) => f.department));
                    
                    // Filter faculty by Applied Science department
                    const appliedScienceFaculty = data.data?.filter((faculty: Faculty) => 
                        faculty.department === 'Applied Science'
                    ) || [];
                    
                    console.log('Applied Science faculty found:', appliedScienceFaculty);
                    
                    // Transform data to match FacultySwiper expected format
                    const transformedFaculty = appliedScienceFaculty.map((faculty: Faculty) => ({
                        imageSrc: faculty.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
                        name: faculty.name,
                        gender: faculty.gender,
                        designation: faculty.designation,
                    }));
                    
                    setFacultyData(transformedFaculty);
                }
            } catch (error) {
                console.error('Error loading faculty:', error);
            } finally {
                setLoading(false);
            }
        };

        loadFaculty();
    }, []);

    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Department Of Applied Science"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Department of Applied Science', isCurrent: true },
                ]}
            />

            {/* overview sections start */}

            <OverviewSection
                title="Introduction"
                subtitle="An Insight into PIET"
                reverse={false}
                image={{
                    src: "/images/department/1.jpeg",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p>
                    Established in 2007, it is the core department for first-year engineering students. It focuses on imparting fundamental scientific and technical knowledge in subjects like Physics, Chemistry, Mathematics, Communication Techniques, and Basic Engineering disciplines. Practical learning and skill development are emphasized to prepare students for advanced engineering education.

                </p>


                <Checklist items={points} />


                <br />

            </OverviewSection>



            {/* vision and mission section */}

            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                <InfoCard
                    title="Vision"
                    iconClass="fas fa-eye"
                    content={visionContent}
                />

                <InfoCard
                    title="Mission"
                    iconClass="fas fa-bullseye"
                    content={missionContent}
                />
                <InfoCard
                    title="Objective of Department"
                    iconClass="fas fa-tasks"
                    content={objectiveContent}
                />
            </div>


            {/* hod message */}
            <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="container mx-auto px-4">
                    <Message
                        title="Message from the HOD"
                        content={`"Scientific learning is best achieved by doing science"

This teaching philosophy enables student community to learn and simultaneously make scientific contribution to society. We are committed to deliver an excellent graduate program of study as well as provide an opportunity for cutting-edge research in all natural and applied sciences.

I feel elated to introduce you to the Department of Applied Sciences which is the foundation of Engineers that strives for increasing the knowledge, enhancing the critical thinking, ability to change information into knowledge and power of analyzing things technically.

Department of Applied Sciences plays a vital role in an engineering college catering to the teaching of basic Sciences and Humanities courses for engineering students of all branches. The purpose of applied sciences in Engineering study is to lay a strong foundation of basic principles of various disciplines such as Mathematics, Physics, Chemistry, Computers, Electronics, Mechanics and Communication Skills in the mind of the learners, so that they proceed to rest of their years of study with up to date knowledge and training of basic engineering skills.

- Dr. Sama Jain
HOD, Department of Applied Sciences, PIET`}
                        imageUrl="/images/messages/hod.jpeg"
                        imageAlt="Dr. Sama Jain - HOD, Department of Applied Sciences"
                    />
                </div>
            </section>


            {/* faculty cards */}

            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Meet Our Faculty</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                {loading ? (
                    <div className="text-center py-8">
                        <p className="text-neutral-600">Loading faculty...</p>
                    </div>
                ) : facultyData.length > 0 ? (
                    <FacultySwiper profiles={facultyData} />
                ) : (
                    <div className="text-center py-8">
                        <p className="text-neutral-600">No faculty members found for Applied Science department.</p>
                    </div>
                )}
            </section>



            {/* labs cards */}

            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Laboratories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {labData.map((lab, index) => (
                            <LabInfoCard key={index} {...lab} />
                        ))}
                    </div>
                </div>
            </section>

             {/* student projects section */}
<section className="py-16 bg-neutral-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-primary mb-4">
      Student Projects
    </h2>
    <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
      Number of projects by field
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mb-8">
      {projectFieldCounts.map((g) => (
        <div
          key={g.field}
          className="bg-white border border-neutral-200 rounded-lg p-6 shadow text-center"
        >
          <h3 className="text-lg font-semibold text-primary mb-2">
            {g.field}
          </h3>
          <p className="text-2xl font-bold text-neutral-700">
            {g.count} project{g.count > 1 ? "s" : ""}
          </p>
        </div>
      ))}
    </div>

    {/* View All Projects button */}
    <div className="text-center">
      <a
        href="https://example.com/projects.pdf" // replace with your PDF link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
      >
        View All Projects
      </a>
    </div>
  </div>
</section>
            <CourseOutcomeAccordion data={courseData} />

            <Cta />
            <Footer />
        </div>
    )
}

export default AppliedScience