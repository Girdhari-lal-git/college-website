// src/data/departments/ai-ds.ts

import { Brain, Cpu, Database, Briefcase, Bot, BarChart3, Search, Network, Target,Lightbulb, Users, Rocket, GraduationCap } from "lucide-react";

{/*import { DepartmentData } from "@/components/department/types"; */} // We'll create this later if needed.

const departmentHighlights = {
    achievements: [
        {
            id: "achievement-1",
            name: "Dr. Ananya Sharma",
            photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
            role: "Assistant Professor",
            achievement:
                "Recognized for outstanding contribution to Artificial Intelligence research and student innovation.",
            year: "2026",
        },
        {
            id: "achievement-2",
            name: "Rahul Meena",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
            role: "B.Tech AI & DS Student",
            achievement:
                "Secured a position among the top teams in a national-level Artificial Intelligence hackathon.",
            year: "2026",
        },
        {
            id: "achievement-3",
            name: "Priya Verma",
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
            role: "B.Tech AI & DS Student",
            achievement:
                "Received recognition for an innovative computer vision based student project.",
            year: "2025",
        },
    ],

    placements: [
        {
            id: "placement-1",
            name: "Arjun Sharma",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
            program: "B.Tech AI & DS",
            company: "TechNova Solutions",
            package: "₹18 LPA",
            year: "2026",
        },
        {
            id: "placement-2",
            name: "Neha Singh",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
            program: "B.Tech CSE (AI)",
            company: "DataSphere Technologies",
            package: "₹15 LPA",
            year: "2026",
        },
        {
            id: "placement-3",
            name: "Karan Verma",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
            program: "B.Tech CSE (DS)",
            company: "Insight Analytics",
            package: "₹12 LPA",
            year: "2025",
        },
    ],

    alumni: [
        {
            id: "alumni-1",
            name: "Dr. Rohan Mehta",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
            program: "B.Tech CSE",
            graduationYear: "2020",
            designation: "AI Research Scientist",
            organization: "Future AI Labs",
        },
        {
            id: "alumni-2",
            name: "Sneha Kapoor",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
            program: "B.Tech AI & DS",
            graduationYear: "2021",
            designation: "Machine Learning Engineer",
            organization: "Global Tech Solutions",
        },
        {
            id: "alumni-3",
            name: "Amit Joshi",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
            program: "B.Tech CSE (AI)",
            graduationYear: "2022",
            designation: "Data Scientist",
            organization: "Analytics One",
        },
    ],

    projectDomains: [
        {
            id: "computer-vision",
            name: "Computer Vision",
            count: 6,
            icon: "eye",
        },
        {
            id: "artificial-intelligence",
            name: "Artificial Intelligence",
            count: 10,
            icon: "brain",
        },
        {
            id: "data-science",
            name: "Data Science",
            count: 8,
            icon: "chart",
        },
        {
            id: "natural-language-processing",
            name: "Natural Language Processing",
            count: 5,
            icon: "message",
        },
        {
            id: "iot-ai",
            name: "IoT & AI",
            count: 4,
            icon: "cpu",
        },
        {
            id: "web-development",
            name: "Web Development",
            count: 7,
            icon: "code",
        },
    ],

    projectsPdf: "#",
};


const downloads = [
    {
        id: "ai-ds-syllabus",
        name: "AI & DS Syllabus",
        fileUrl: "/downloads/ai-ds-syllabus.pdf",
    },
    {
        id: "cse-ai-syllabus",
        name: "CSE (AI) Syllabus",
        fileUrl: "/downloads/cse-ai-syllabus.pdf",
    },
    {
        id: "cse-ds-syllabus",
        name: "CSE (DS) Syllabus",
        fileUrl: "/downloads/cse-ds-syllabus.pdf",
    },
    {
        id: "department-brochure",
        name: "Department Brochure",
        fileUrl: "/downloads/department-brochure.pdf",
    },
    {
        id: "student-project-list",
        name: "Student Project List",
        fileUrl: "/downloads/student-project-list.pdf",
    },
];

export const aiDsDepartment = {
    hero: {
        name: "Department of Artificial Intelligence & Data Science",

        tagline: "Creating Future AI Leaders",

        description:
            "The Department of Artificial Intelligence & Data Science prepares students to become future-ready professionals through industry-oriented education, research, innovation and experiential learning.",

        buttons: [
            {
                label: "Download Brochure",
                href: "#downloads",
                variant: "primary" as const,
            },
            {
                label: "Contact Department",
                href: "#contact",
                variant: "secondary" as const,
            },
        ],
    },

    
    overview: {
        about: [
            "The Department of Artificial Intelligence & Data Science was established with the vision of creating highly skilled professionals capable of solving real-world problems using Artificial Intelligence, Machine Learning and Data Science.",

            "The department offers modern undergraduate programmes supported by experienced faculty members, advanced laboratories, industry collaborations and project-based learning. Students actively participate in research, innovation, hackathons, internships and technical events.",

            "Our curriculum is designed to bridge the gap between academia and industry while encouraging creativity, critical thinking, ethical values and lifelong learning.",
        ],

        departmentImage:
            "/images/departments/ai-ds/department.jpg",

        quickFacts: [
            {
                icon: GraduationCap,
                label: "Programmes",
                value: "3",
            },
            {
                icon: Users,
                label: "Faculty",
                value: "25+",
            },
            {
                icon: Database,
                label: "Laboratories",
                value: "8",
            },
            {
                icon: Target,
                label: "Established",
                value: "2021",
            },
            {
                icon: Rocket,
                label: "Students",
                value: "550+",
            },
            
        ],

        vision:
            "To become a centre of excellence in Artificial Intelligence and Data Science through quality education, innovation, research and industry collaboration.",

        mission: [
            "Provide quality education in Artificial Intelligence and Data Science through outcome-based teaching-learning practices.",

            "Promote research, innovation and interdisciplinary collaboration to solve real-world problems.",

            "Develop ethical, industry-ready professionals with leadership, entrepreneurial mindset and lifelong learning abilities.",
        ],

        hod: {
            name: "Dr. XXXXX XXXXX",

            designation: "Professor & Head",

            qualification: "Ph.D.",

            image:
                "/images/faculty/hod.jpg",

            message: [
                "Welcome to the Department of Artificial Intelligence and Data Science. It gives me immense pleasure to introduce a department committed to academic excellence, innovation and holistic student development.",

                "Artificial Intelligence is transforming every aspect of modern society. Our curriculum, laboratories and industry collaborations are carefully designed to equip students with strong technical knowledge and practical skills.",

                "We strongly encourage students to participate in research, innovation, internships, hackathons and industry projects so that they become competent professionals capable of addressing future technological challenges.",

                "I invite you to become a part of our vibrant learning community and join us in shaping the future through Artificial Intelligence and Data Science.",
            ],
        },
    },

    programs: [
        {
            id: "ai-ds",

            shortTitle: "AI & DS",

            title:
                "B.Tech Artificial Intelligence & Data Science",

            icon: Brain,

            gradient:
                "from-primary via-primary to-secondary",

            duration: "4 Years",

            intake: "180 Seats",

            overview:
                "The B.Tech programme in Artificial Intelligence & Data Science equips students with strong theoretical foundations and practical expertise in Artificial Intelligence, Machine Learning, Deep Learning, Data Analytics, Computer Vision and Intelligent Systems.",

            highlights: [
                "Industry-oriented curriculum",
                "Project-based learning",
                "Advanced AI & ML laboratories",
                "Hackathons and Innovation Challenges",
                "Research-driven education",
                "Internships with leading industries",
                "Certification opportunities",
                "Capstone projects",
            ],

            careers: [
                {
                    title: "AI Engineer",
                    icon: Bot,
                    description:
                        "Develop intelligent systems using Machine Learning and Deep Learning.",
                },
                {
                    title: "Machine Learning Engineer",
                    icon: Cpu,
                    description:
                        "Design and deploy predictive models and intelligent algorithms.",
                },
                {
                    title: "Data Scientist",
                    icon: Database,
                    description:
                        "Extract meaningful insights from structured and unstructured data.",
                },
                {
                    title: "Computer Vision Engineer",
                    icon: Search,
                    description:
                        "Develop image and video analysis applications.",
                },
                {
                    title: "NLP Engineer",
                    icon: Network,
                    description:
                        "Build intelligent language processing systems.",
                },
                {
                    title: "AI Research Engineer",
                    icon: Lightbulb,
                    description:
                        "Contribute to advanced AI research and innovation.",
                },
            ],

            peos: [
                {
                    title: "PEO-1",
                    description:
                        "Graduates will establish successful careers in Artificial Intelligence, Data Science and allied domains.",
                },
                {
                    title: "PEO-2",
                    description:
                        "Graduates will pursue higher education, research and innovation while contributing to society.",
                },
                {
                    title: "PEO-3",
                    description:
                        "Graduates will demonstrate ethical leadership, entrepreneurship and lifelong learning.",
                },
            ],

            psos: [
                {
                    title: "PSO-1",
                    description:
                        "Apply Artificial Intelligence and Machine Learning techniques to solve complex engineering problems.",
                },
                {
                    title: "PSO-2",
                    description:
                        "Design intelligent systems using modern programming tools, cloud platforms and data-driven technologies.",
                },
                {
                    title: "PSO-3",
                    description:
                        "Develop scalable AI solutions considering ethics, sustainability and industry requirements.",
                },
            ],
        },
        {
    id: "cse-ai",

    shortTitle: "CSE (AI)",

    title: "B.Tech Computer Science & Engineering (Artificial Intelligence)",

    icon: Cpu,

    gradient: "from-primary via-primary to-secondary",

    duration: "4 Years",

    intake: "60 Seats",

    overview:
        "The B.Tech in Computer Science & Engineering (Artificial Intelligence) combines the strong foundation of Computer Science with specialised knowledge in Artificial Intelligence. The programme prepares students to design, develop and deploy intelligent software systems while building expertise in algorithms, programming, machine learning, deep learning, natural language processing, robotics and intelligent automation.",

    highlights: [
        "Strong Computer Science foundation",
        "Specialisation in Artificial Intelligence",
        "Machine Learning & Deep Learning",
        "Natural Language Processing",
        "Computer Vision Applications",
        "Cloud Computing & Intelligent Systems",
        "Industry-oriented Projects",
        "Internships and Technical Certifications"
    ],

    careers: [
        {
            title: "Artificial Intelligence Engineer",
            icon: Bot,
            description:
                "Design intelligent software systems and AI-powered applications."
        },
        {
            title: "Machine Learning Engineer",
            icon: Brain,
            description:
                "Develop predictive models using supervised and unsupervised learning."
        },
        {
            title: "Software Development Engineer",
            icon: Cpu,
            description:
                "Build scalable software applications integrated with AI capabilities."
        },
        {
            title: "Computer Vision Engineer",
            icon: Search,
            description:
                "Develop image processing, facial recognition and autonomous vision systems."
        },
        {
            title: "NLP Engineer",
            icon: Network,
            description:
                "Create intelligent conversational systems, chatbots and language models."
        },
        {
            title: "AI Solution Architect",
            icon: Lightbulb,
            description:
                "Design enterprise-scale AI solutions integrating cloud and modern technologies."
        }
    ],

    peos: [
        {
            title: "PEO-1",
            description:
                "Graduates will establish successful careers in Computer Science and Artificial Intelligence across academia and industry."
        },
        {
            title: "PEO-2",
            description:
                "Graduates will demonstrate analytical thinking, innovation and research capabilities while pursuing higher education or entrepreneurship."
        },
        {
            title: "PEO-3",
            description:
                "Graduates will exhibit ethical values, leadership qualities and commitment towards lifelong learning."
        }
    ],

    psos: [
        {
            title: "PSO-1",
            description:
                "Design and develop intelligent software solutions using Artificial Intelligence, Machine Learning and modern programming technologies."
        },
        {
            title: "PSO-2",
            description:
                "Apply Computer Science fundamentals to analyse, design and optimise intelligent computing systems."
        },
        {
            title: "PSO-3",
            description:
                "Develop secure, scalable and industry-ready AI applications using contemporary tools, frameworks and cloud platforms."
        }
    ]
}

        // We'll add CSE (AI) and CSE (DS) after the framework is tested.
    ],

    laboratories: [
    {
        id: "ai-lab",

        name: "Artificial Intelligence Laboratory",

        image: "/images/departments/ai-ds/labs/ai-lab.jpg",

        shortDescription:
            "Modern computing laboratory supporting Artificial Intelligence, Machine Learning and Data Science practical courses.",

        description:
            "The laboratory provides a high-performance computing environment equipped with modern software tools and hardware resources for practical learning, research and project development.",

        capacity: 60,

        coordinator: "Dr. Shipra Bhatia",

        technicalAssistant: "Mr. XXXXX",

        software: [
            "Python",
            "Anaconda",
            "TensorFlow",
            "PyTorch",
            "Jupyter Notebook",
            "VS Code"
        ],

        equipment: [
            "High Performance Workstations",
            "48 GB GPU Workstation",
            "Gigabit Network",
            "Projector"
        ],

        objectives: [
            "Hands-on AI & ML experiments",
            "Deep Learning model development",
            "Research and project implementation"
        ]
    }
],

 highlights: departmentHighlights,


 downloads,
};




