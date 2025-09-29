import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';
import Cta from '@/components/Cta';
import InfoCard from '@/components/InfoCard';
import IntroductionSection from '@/components/IntroductionSection';
import LazyImage from '@/components/LazyImage';


// OBE Annual Reports Data
const obereportsDocumentData = [
    {
        sno: 1,
        name: 'Annual Report 2023-24',
        download: (
            <a href="https://drive.google.com/file/d/1soaLlIi4kmeYECqya5Aaz1077ldYgWL8/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Annual Report 2022-23',
        download: (
            <a href="https://drive.google.com/file/d/1ZmOXAW28n182jbcXIFuVpLx60aTLYJm6/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Annual Report 2021-22',
        download: (
            <a href="https://drive.google.com/file/d/1qabfAC2dTYbZQrzvv28jVPa_HrfMhRT4/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Annual Report 2020-21',
        download: (
            <a href="https://drive.google.com/file/d/1wp1vaheZSTe2YgJrb92NvCSlkUEuUUZD/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    }
];

// OBE Annual Reports Table Columns
const obereportdocumentColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];


// OBE Analysis Data
const obeanalysisDocumentData = [
    {
        sno: 1,
        name: 'Analysis Report 2023-24',
        download: (
            <a href="https://drive.google.com/file/d/1soaLlIi4kmeYECqya5Aaz1077ldYgWL8/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Analysis Report 2022-23',
        download: (
            <a href="https://drive.google.com/file/d/1ZmOXAW28n182jbcXIFuVpLx60aTLYJm6/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Analysis Report 2021-22',
        download: (
            <a href="https://drive.google.com/file/d/1qabfAC2dTYbZQrzvv28jVPa_HrfMhRT4/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Analysis Report 2020-21',
        download: (
            <a href="https://drive.google.com/file/d/1wp1vaheZSTe2YgJrb92NvCSlkUEuUUZD/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    }
];

// OBE Analysis Table Columns
const obeanalysisdocumentColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];



const introductionContent = (
    <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
            Outcome-based Education (OBE) emphasizes on many components in terms of student achievement in a program. The most important components are the Course Outcome (CO's) Program Outcomes (POs), Program Specific Outcome (PSO's).
        </p>
        <p className="text-gray-700 leading-relaxed">
            A knowledge-based society characterized by a scientific outlook and a culture of cooperation is the long-term goal of the Poornima Institute of Engineering & Technology, Jaipur. The institute's mission is to educate students for success in an increasingly globalized economy by providing them with a balanced education.
        </p>
        <p className="text-gray-700 leading-relaxed">
            Course Outcomes (COs) are defined for each course using Bloom's Taxonomy by each course coordinator and are approved Department Advisory Board. The Program Outcomes are in line with Washington Accord & NBA guidelines, catering to Graduate Attributed. All the CO's and mapped with Program Outcomes (POs) and Program Specific Outcomes (PSOs) for further attainment analysis.
        </p>
    </div>
);

const ProgramsContent = (
    <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
            The National Board of Accreditation (NBA) defines program outcomes as statements that specify what students are expected to know and be able to do by the time of their graduation. These are in line with the Graduate Attributes as defined by the Washington Accord.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
                {[
                    "Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
                    "Problem Analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                    "Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                    "Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                    "Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                    "The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice."
                ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                        <p className="text-sm text-gray-700"><span className="font-semibold">{item.split(':')[0]}:</span>{item.split(':')[1]}</p>
                    </div>
                ))}
            </div>
            
            <div className="space-y-4">
                {[
                    "Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                    "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                    "Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                    "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                    "Project Management and Finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                    "Life-Long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
                ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary hover:shadow-md transition-shadow">
                        <p className="text-sm text-gray-700"><span className="font-semibold">{item.split(':')[0]}:</span>{item.split(':')[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const data = {
    heading: "OBE Framework",
    paragraphs: [
        <div key="list" className="space-y-4">
            <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                </div>
                <p className="text-gray-700">Identify & define the learning outcomes at all levels and explicitly document the same in the curriculum.</p>
            </div>
            <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                </div>
                <p className="text-gray-700">Organizing the teaching and learning activity through student-centered activity and project base learning.</p>
            </div>
            <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                </div>
                <p className="text-gray-700">Assessment and evaluation at all levels of learning outcomes i.e. PSOs, POs and COs</p>
            </div>
        </div>,
    ],
    images: [
        {
            src: "/images/obe/1.png",
            alt: "OBE Framework Diagram",
        },
    ],
};

const Formulation = {
    heading: "Formulation of PO's and PSO's",
    paragraphs: [
        <div key="formulation" className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
                Program Specific Outcomes (PSOs) represent what the graduate students of a specific degree program should be able to do, while Course Outcomes are the resultant knowledge skills that students acquire at the end of the course.
            </p>
            <p className="text-gray-700 leading-relaxed">
                PSOs are built on three behavioral components: knowledge, skill, and attitude. These are statements made by the institute to stakeholders (employers, students, etc.) that should be measurable, appropriate, realistic, and achievable.
            </p>
            <p className="text-gray-700 leading-relaxed">
                They describe the career and professional accomplishments that the program is preparing graduates to accomplish after 4 years of graduation.
            </p>
        </div>
    ],
    images: [
        {
            src: "/images/obe/2.png",
            alt: "Formulation Process Diagram",
        },
    ],
};

const OBE = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <BreadCrumb
                title="Outcome Based Education (OBE)"
                description="Comprehensive framework for student achievement through Course Outcomes, Program Outcomes, and Program Specific Outcomes"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'OBE', isCurrent: true },
                ]}
            />

            {/* Introduction Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-8xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-primary mb-4">Outcome Based Education</h1>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Empowering students through measurable learning outcomes and continuous improvement
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm border border-blue-100">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-graduation-cap text-white text-xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Introduction to OBE</h2>
                            </div>
                            {introductionContent}
                        </div>
                    </div>
                </div>
            </section>

            {/* OBE Framework Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <IntroductionSection {...data} reverse={false} />
                </div>
            </section>

            {/* Formulation Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="container mx-auto px-4">
                    <IntroductionSection {...Formulation} reverse={true} />
                </div>
            </section>

            {/* Program Outcomes Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-8xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-4">Program Outcomes</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto"></div>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                As defined by NBA in line with Washington Accord Graduate Attributes
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            {ProgramsContent}
                        </div>
                    </div>
                </div>
            </section>

            {/* Refinement Process Section */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-4">
                    <div className="max-w-8xl mx-auto text-center text-white">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="fas fa-sync-alt text-2xl"></i>
                        </div>
                        <h2 className="text-3xl font-bold mb-6">The Process of Refinement of PO's</h2>
                        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                            <p className="text-lg leading-relaxed">
                                The refinement of Program Outcomes (POs) involves iterative assessment, stakeholder engagement, and curriculum alignment. Initially defined based on accreditation guidelines, POs are continuously reviewed with input from faculty, industry experts, and students. Curriculum alignment ensures that educational objectives match desired outcomes. Assessment methods are refined to measure PO attainment effectively. Feedback from stakeholders informs adjustments, fostering alignment with industry needs and educational standards. This iterative process ensures POs remain relevant and reflective of program goals, facilitating continuous improvement in educational quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PSO Definition Process */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-8xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-4">Process for Defining PSOs</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto"></div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
                            <p className="text-gray-700 text-lg text-center mb-8">
                                The program Assessment committee along with the stakeholders define the program specific outcomes after having a brainstorming session with the stakeholders.
                            </p>
                            
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                <LazyImage
                                    src="/images/obe/3.png"
                                    alt="PSO Definition Process Diagram"
                                    className="w-full max-w-2xl h-auto mx-auto block rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* IIC Annual Reports */}
                         <div className="container mt-14 mx-auto mb-10">
                            <h2 className="text-3xl text-primary font-bold mb-8 text-center">OBE Booklets</h2>
                            <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                            <DynamicTable columns={obereportdocumentColumns} data={obereportsDocumentData} />
                        </div>

            {/* IIC Annual Reports */}
                         <div className="container mt-14 mx-auto mb-10">
                            <h2 className="text-3xl text-primary font-bold mb-8 text-center">OBE Analysis</h2>
                            <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                            <DynamicTable columns={obeanalysisdocumentColumns} data={obeanalysisDocumentData} />
                        </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default OBE