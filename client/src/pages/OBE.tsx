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
        name: 'OBE Manual 2026-27',
        download: (
            <a href="https://drive.google.com/file/d/1mOGR6gSn8kLID-r-nbcd0Z3krNvvsPNE/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'OBE Manual 2025-26',
        download: (
            <a href="https://drive.google.com/file/d/1mOGR6gSn8kLID-r-nbcd0Z3krNvvsPNE/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'OBE Manual 2024-25',
        download: (
            <a href="https://drive.google.com/file/d/1n9MTuZdTL75VHBIJoTBoI56JOGdTTjM8/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'OBE Manual 2023-24',
        download: (
            <a href="https://drive.google.com/file/d/18ymY8phfGUeMChfrZZUuA0_q6hrSLdOU/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: 'OBE Manual 2022-23',
        download: (
            <a href="https://drive.google.com/file/d/17lcj31h5GDEj2shV-ejoyGchhUa9pWcg/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: 'OBE Manual 2021-22',
        download: (
            <a href="https://drive.google.com/file/d/1gnB6zzKCqrCwJyTfxXn8k26G4uv8HSpS/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 7,
        name: 'OBE Manual 2020-21',
        download: (
            <a href="https://drive.google.com/file/d/15RYhWj4hGmFuhYAXCE8yjGQb-Ss8KdE3/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 8,
        name: 'OBE Manual 2019-20',
        download: (
            <a href="https://drive.google.com/file/d/1cIOq8yI-vt4_d33lGTcrzZTeOD_EPAl_/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 9,
        name: 'OBE Manual 2018-19',
        download: (
            <a href="https://drive.google.com/file/d/1YEUsgNAFEr_TLL5beLdf7Hm2PerWHpbk/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
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
            "Engineering Knowledge: Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in WK1 to WK4 respectively to develop to the solution of complex engineering problems.",
            
            "Problem Analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development. (WK1 to WK4)",
            
            "Design/Development of Solutions: Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required. (WK5)",
            
            "Conduct Investigations of Complex Problems: Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions. (WK8).",
            
            "Engineering Tool Usage: Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems. (WK2 and WK6)",
            
            "The Engineer and The World: Analyze and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment. (WK1, WK5, and WK7)."
        ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">{item.split(':')[0]}:</span>
                    {item.substring(item.indexOf(':') + 1)}
                </p>
            </div>
        ))}
    </div>

    <div className="space-y-4">
        {[
            "Ethics: Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws. (WK9)",
            
            "Individual and Collaborative Team work: Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams.",
            
            "Communication: Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences.",
            
            "Project Management and Finance: Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.",
            
            "Life-Long Learning: Recognize the need for, and have the preparation and ability for i) independent and life-long learning ii) adaptability to new and emerging technologies iii) critical thinking in the broadest context of technological change. (WK8)"
        ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">{item.split(':')[0]}:</span>
                    {item.substring(item.indexOf(':') + 1)}
                </p>
            </div>
        ))}
    </div>
</div>
    </div>
);

const WKContent = (
    <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
            The Knowledge and Attitude Profile (WK) describes the knowledge and understanding
            expected of engineering graduates in relation to the practice of engineering. The
            profile comprises nine knowledge and attitude areas, covering scientific foundations,
            mathematics and computing, engineering fundamentals, specialist knowledge, design,
            engineering practice, societal aspects, research and emerging technologies, and
            professional ethics.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
                {[
                    "WK1: A systematic, theory-based understanding of the natural sciences applicable to the discipline and awareness of relevant social sciences.",

                    "WK2: Conceptually-based mathematics, numerical analysis, data analysis, statistics and formal aspects of computer and information science to support detailed analysis and modelling applicable to the discipline.",

                    "WK3: A systematic, theory-based formulation of engineering fundamentals required in the engineering discipline.",

                    "WK4: Engineering specialist knowledge that provides theoretical frameworks and bodies of knowledge for the accepted practice areas in the engineering discipline; much is at the forefront of the discipline.",

                    "WK5: Knowledge, including efficient resource use, environmental impacts, whole-life cost, re-use of resources, net zero carbon, and similar concepts, that supports engineering design and operations in a practice area."
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow"
                    >
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">
                                {item.split(':')[0]}:
                            </span>
                            {item.substring(item.indexOf(':') + 1)}
                        </p>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                {[
                    "WK6: Knowledge of engineering practice (technology) in the practice areas in the engineering discipline.",

                    "WK7: Knowledge of the role of engineering in society and identified issues in engineering practice in the discipline, such as the professional responsibility of an engineer to public safety and sustainable development.",

                    "WK8: Engagement with selected knowledge in the current research literature of the discipline, awareness of the power of critical thinking and creative approaches to evaluate emerging issues.",

                    "WK9: Ethics, inclusive behavior and conduct. Knowledge of professional ethics, responsibilities, and norms of engineering practice. Awareness of the need for diversity by reason of ethnicity, gender, age, physical ability etc. with mutual understanding and respect, and of inclusive attitudes."
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary hover:shadow-md transition-shadow"
                    >
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">
                                {item.split(':')[0]}:
                            </span>
                            {item.substring(item.indexOf(':') + 1)}
                        </p>
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
    heading: "PO's and PSO's",
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

            {/* WK Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-8xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-4">Knowloedge & Attitute Profile (WK)</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto"></div>
                           {WKContent}
                        </div>
                    </div>
                </div>
            </section>

            {/* Refinement Process Section 
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
*/}
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

            {/* PEO Definition Process */}
<section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                    Process for Defining PEOs
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
                <p className="text-gray-700 text-lg text-center mb-8">
                    The Program Educational Objectives (PEOs) of the department are
                    defined through a systematic stakeholder-driven process involving
                    the Departmental Advisory Committee, faculty, students, alumni,
                    parents, prospective employers, and the assessment committee.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <LazyImage
                        src="/images/obe/PeO_Define.png"
                        alt="PEO Definition Process Diagram"
                        className="w-full max-w-4xl h-auto mx-auto block rounded-lg shadow-md"
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

            {/* IIC Annual Reports 
                         <div className="container mt-14 mx-auto mb-10">
                            <h2 className="text-3xl text-primary font-bold mb-8 text-center">OBE Analysis</h2>
                            <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                            <DynamicTable columns={obeanalysisdocumentColumns} data={obeanalysisDocumentData} />
                        </div> */}

            <Cta />
            <Footer />
        </div>
    )
}

export default OBE