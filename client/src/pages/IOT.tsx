import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import ProfileMessageSection from "@/components/ProfileMessageSection";
import OverviewSection from "@/components/OverviewSection";
import Checklist from "@/components/Checklist";
import { Check } from "lucide-react";
import InfoCard from "@/components/InfoCard";
import Message from "@/components/Message";
import ProfileCard from "@/components/ProfileCard";
import FacultySwiper from "@/components/FacultySwiper";
import LabInfoCard from "@/components/LabInfoCard";
import CourseOutcomeAccordion, {
    SubjectCO,
} from "@/components/CourseOutcomeAccordion";
import Cta from "@/components/Cta";
import DynamicTable from "@/components/DynamicTable ";
import StudentProjectsGrid from "@/components/StudentProjectsGrid";
import { StudentProject } from "@/components/types";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

interface Faculty {
    _id: string;
    name: string;
    department: string;
    designation: string;
    gender: string;
    imageUrl?: string;
}
const projectData: StudentProject[] = [
    {
        sno: 1,
        title: "Laser Cut Wall Clock",
        studentCoordinator: "Rahul Jain",
        facultyCoordinator: "Nitin Mukesh Mathur",
        facilityUsed: "LASER cutter, various hardware and software support",
    },
    {
        sno: 2,
        title: "3D printer lithophane technology",
        studentCoordinator: "Rachit Agarwal",
        facultyCoordinator: "Udit Mamodiya",
        facilityUsed: "FDM printer and other hardware and software support",
    },
    {
        sno: 3,
        title: "Reverse engineering",
        studentCoordinator: "Parv Sharma",
        facultyCoordinator: "Udit Mamodiya",
        facilityUsed:
            "3D scanning, 3D printer, and other hardware and software support",
    },
    {
        sno: 4,
        title: "3D printed mobile stand",
        studentCoordinator: "Vaidika Duggar",
        facultyCoordinator: "Nitin Mukesh Mathur",
        facilityUsed: "3D printer and raw material support",
    },
    {
        sno: 5,
        title: "Stone paper scissor machine",
        studentCoordinator: "Yuvraj Dagur",
        facultyCoordinator: "Udit Mamodiya",
        facilityUsed:
            "3D printer for printing out the elements and parts of hand, Laser cutter to cut out the sheet parts and to give support in working of hands, other components and machines to assemble the fingers, palm, wrist and the forearm.",
    },
    {
        sno: 6,
        title: "Li fi",
        studentCoordinator: "Satish Parmar",
        facultyCoordinator: "Pradeep Kumar",
        facilityUsed: "PCB router, solder etc.",
    },
    {
        sno: 7,
        title: "Fingerprint Door system",
        studentCoordinator: "Ishaan Jain",
        facultyCoordinator: "Nitin Mukesh Mathur",
        facilityUsed: "PCB, LASER cutter, and other hardware support",
    },
    {
        sno: 8,
        title: "World Map on laser cutting and engraving machine",
        studentCoordinator: "Pranay Sharma",
        facultyCoordinator: "Nitin Mukesh Mathur",
        facilityUsed:
            "LASER cutting and engraving machine, acrylic sheets, etc.",
    },
    {
        sno: 9,
        title: "Mini Tape dispenser",
        studentCoordinator: "Harshit Gupta",
        facultyCoordinator: "Nitin Mukesh Mathur",
        facilityUsed: "Cura, 3D printer, PLA rolls, etc.",
    },
    {
        sno: 10,
        title: "Decorative Wall",
        studentCoordinator: "Himanshu Moyal",
        facultyCoordinator: "Nitin Mukesh Mathur",
        facilityUsed:
            "RD works, LASER cutting and engraving machine, acrylic sheets, etc.",
    },
    // ... other projects
];

const columns = [
    { label: "S.No", key: "sno" },
    { label: "Application No.", key: "applicationNo" },
    { label: "Applicant Name", key: "applicantName" },
    { label: "Affiliation", key: "affiliation" },
    { label: "Title of Invention", key: "title" },
    { label: "Status", key: "status" },
];

const data = [
    {
        sno: 1,
        applicationNo: "202411000922",
        applicantName: "Indra Kishor",
        affiliation: "PIET",
        title: "IoT enabled extended reality for college virtual tour: an immersive mobile application with real voice and avatar assistant",
        status: "Published",
    },
    {
        sno: 2,
        applicationNo: "202311076140",
        applicantName: "Indra Kishor",
        affiliation: "PIET",
        title: "Development of AI intelligence-based agrigenous system enhancing farming efficiency based on the IoT-AR Drone approach",
        status: "Published",
    },
    {
        sno: 3,
        applicationNo: "202311051802",
        applicantName: "Indra Kishor",
        affiliation: "PIET",
        title: "Impressive XR system with voice assistant interaction for exploring educational institutions",
        status: "Published",
    },
    {
        sno: 4,
        applicationNo: "202311037396",
        applicantName: "Abhishek Dadhich",
        affiliation: "PIET",
        title: "Digital system for student presence",
        status: "Published",
    },
    {
        sno: 5,
        applicationNo: "202311075320",
        applicantName: "Indra Kishor",
        affiliation: "PIET",
        title: "An IoT-based two-way people counter with dynamic tracking and data regression for single door entry and exit",
        status: "Published",
    },
    {
        sno: 6,
        applicationNo: "202211039557",
        applicantName: "Dr. Rakhi Mutha",
        affiliation: "PIET, Jaipur",
        title: "Identification and mitigation of attacks in wireless sensor networks using trust-based blockchain mechanism",
        status: "Published (2022)",
    },
    {
        sno: 7,
        applicationNo: "202211066470",
        applicantName: "Mr. Atrakesh Pandey",
        affiliation: "PIET, Jaipur",
        title: "A hybrid approach using RNN and CNN for predicting 1-4D structure of protein from amino acid sequences",
        status: "Published (2022)",
    },
    {
        sno: 8,
        applicationNo: "202211033519",
        applicantName: "Dr. Shashi Kant Rathore",
        affiliation: "PIET, Jaipur",
        title: "Bayesian approach in spam detection with nature-inspired optimization",
        status: "Published (2022)",
    },
    {
        sno: 9,
        applicationNo: "202211065546",
        applicantName: "Dr. Purushottam Lal",
        affiliation: "PIET, Jaipur",
        title: "Automatic signature verification to maintain social distancing",
        status: "Published (2022)",
    },
    {
        sno: 10,
        applicationNo: "202211065546",
        applicantName: "Mr. Deepak Moud",
        affiliation: "PIET, Jaipur",
        title: "Automatic signature verification to maintain social distancing",
        status: "Published (2022)",
    },
    {
        sno: 11,
        applicationNo: "202211067216",
        applicantName: "Mr. Rahul Gupta",
        affiliation: "PIET, Jaipur",
        title: "Reduced switch multilevel inverter for improved power quality based on solar photovoltaic systems",
        status: "Published (2022)",
    },
    {
        sno: 12,
        applicationNo: "202211067504",
        applicantName: "Dr. Shruti Thapar",
        affiliation: "PIET, Jaipur",
        title: "System and model for development of energy-efficient routing protocol for wireless sensor networks for enhancement of sensor node and battery lifetime",
        status: "Published (2022)",
    },
    {
        sno: 13,
        applicationNo: "202211067504",
        applicantName: "Dr. Purushottam Lal",
        affiliation: "PIET, Jaipur",
        title: "System and model for development of energy-efficient routing protocol for wireless sensor networks for enhancement of sensor node and battery lifetime",
        status: "Published (2022)",
    },
    {
        sno: 14,
        applicationNo: "202211067504",
        applicantName: "Dr. Uday Pratap Singh",
        affiliation: "PIET, Jaipur",
        title: "System and model for development of energy-efficient routing protocol for wireless sensor networks for enhancement of sensor node and battery lifetime",
        status: "Published (2022)",
    },
    {
        sno: 15,
        applicationNo: "202211067504",
        applicantName: "Ms. Ritu Shukla",
        affiliation: "PIET, Jaipur",
        title: "System and model for development of energy-efficient routing protocol for wireless sensor networks for enhancement of sensor node and battery lifetime",
        status: "Published (2022)",
    },
    {
        sno: 16,
        applicationNo: "202211067216",
        applicantName: "Dr. Purushottam Lal",
        affiliation: "PIET, Jaipur",
        title: "Reduced switch multilevel inverter for improved power quality based on solar photovoltaic systems",
        status: "Published (2022)",
    },
    {
        sno: 17,
        applicationNo: "202211062722",
        applicantName: "Dr. Purushottam Lal",
        affiliation: "PIET, Jaipur",
        title: "An intelligent system for peer-to-peer wireless power transfer among ubiquitous devices",
        status: "Published (2022)",
    },
    {
        sno: 18,
        applicationNo: "202211069267",
        applicantName: "Dr. Purushottam Lal",
        affiliation: "PIET, Jaipur",
        title: "Security improvement in storage of Dockers containers on cloud server",
        status: "Published (2022)",
    },
    {
        sno: 19,
        applicationNo: "202211069267",
        applicantName: "Dr. Uday Pratap Singh",
        affiliation: "PIET, Jaipur",
        title: "Security improvement in storage of Dockers containers on cloud server",
        status: "Published (2022)",
    },
    {
        sno: 20,
        applicationNo: "202211069267",
        applicantName: "Mr. Vivek Saxena",
        affiliation: "PIET, Jaipur",
        title: "Security improvement in storage of Dockers containers on cloud server",
        status: "Published (2022)",
    },
    {
        sno: 21,
        applicationNo: "202211070247",
        applicantName: "Ms. Shikha Gautam",
        affiliation: "PIET, Jaipur",
        title: "QR-based automated system for the collection & donation of residual medicine stocks",
        status: "Published (2022)",
    },
];

const fdpColumns = [
    { label: "S.No", key: "sno" },
    { label: "Title of FDP / Workshop", key: "title" },
];

const fdpData = [
    {
        sno: 1,
        title: "SUMMER INTERNSHIP 2022 ON ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
    },
    {
        sno: 2,
        title: "SUMMER INTERNSHIP-2022 FULL STACK WEB DEVELOPER (PHP WITH MYSQL)",
    },
    {
        sno: 3,
        title: "WEEKS AICTE TRAINING AND LEARNING (ATAL) FACULTY DEVELOPMENT PROGRAM",
    },
    { sno: 4, title: "SIX DAY WORKSHOP ON CORE JAVA-HANDS ON" },
    {
        sno: 5,
        title: "ONLINE EXPERT TALK ON “A FIRST DIVE TO MOBILE APP DEVELOPMENT”",
    },
    {
        sno: 6,
        title: "Five DAYS WORKSHOP ON CYBER SECURITY AND ETHICAL HACKING",
    },
    {
        sno: 7,
        title: "Three DAYS FACULTY DEVELOPMENT PROGRAM ON CYBER SECURITY AND ETHICAL HACKING",
    },
    { sno: 8, title: "AN EXPERT TALK ON CORPORATE AND SERVICE INDUSTRY READY" },
    { sno: 9, title: "5 DAYS INDUSTRIAL WORKSHOP ON “DEVOPS VIRTUALIZATION”" },
    { sno: 10, title: "AN EXPERT TALK ON “METAVERSE BEYOND THE HYPE”" },
    { sno: 11, title: "SIX DAYS WORKSHOP ON “INTERNET OF THINGS”" },
    {
        sno: 12,
        title: "SUMMER INTERNSHIP ON MACHINE LEARNING AND DATASCIENCE-2022",
    },
    { sno: 13, title: "ENGIFEST-2022, ENGINEERS DAY CELEBRATION, 2022" },
];

export const courseData: SubjectCO[] = [
    {
        subject: "Advanced Engineering Mathematics",
        subjectCode: "3CIT2-01",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall and define fundamental concepts related to probability, probabilistic models, and random variables, including their basic rules and principles." },
            { coNumber: "CO2", coDefinition: "Explain and interpret statistical methods for probability distributions, differentiating between discrete and continuous random variables." },
            { coNumber: "CO3", coDefinition: "Formulate mathematical models for industrial problems using linear programming and solve them using graphical methods." },
            { coNumber: "CO4", coDefinition: "Analyze linear programming problems to identify the most suitable optimization technique and apply it for effective solutions." },
            { coNumber: "CO5", coDefinition: "Evaluate classical methods for solving nonlinear and linear optimization problems, assessing the efficiency and optimality of the solutions." }
        ],
    },
    {
        subject: "Technical Communication",
        subjectCode: "3CIT1-02",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the process of technical communication in terms of Listening, Speaking, Reading and Writing." },
            { coNumber: "CO2", coDefinition: "Apply the knowledge of Technical Materials/Texts in various technical documents." },
            { coNumber: "CO3", coDefinition: "Identify writing skills in various documents of technical and business communication." },
            { coNumber: "CO4", coDefinition: "Implement the knowledge of technical communication in framing the Technical Reports, articles and their formats." },
            { coNumber: "CO5", coDefinition: "Create technical and business documents, edit and proofread them." }
        ],
    },
    {
        subject: "Digital Electronics",
        subjectCode: "3CIT3-04",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define basic principles of digital circuits and different number systems." },
            { coNumber: "CO2", coDefinition: "Distinguish logic expressions and circuits using Boolean laws and K-map." },
            { coNumber: "CO3", coDefinition: "Implement combinational circuits for practical digital logic applications." },
            { coNumber: "CO4", coDefinition: "Compare sequential circuit components and their functionality using state tables, transition diagrams, and timing characteristics." },
            { coNumber: "CO5", coDefinition: "Develop optimized digital logic circuits using various minimization techniques, combinational and sequential circuit design methodologies, and implement them using different logic families." }
        ],
    },
    {
        subject: "Data Structures and Algorithms",
        subjectCode: "3CIT4-05",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define fundamental concepts of stacks, queues, linked lists, trees, graphs, and hashing, along with their representations and basic operations." },
            { coNumber: "CO2", coDefinition: "Describe the applications of stacks, queues, and linked lists in problem-solving, including infix to postfix conversion, round-robin scheduling, and linked list operations." },
            { coNumber: "CO3", coDefinition: "Implement searching (sequential and binary search) and sorting techniques (bubble sort, quick sort, merge sort, heap sort, etc.) for efficient data management." },
            { coNumber: "CO4", coDefinition: "Analyze tree and graph algorithms, including tree traversals, binary search trees, B-trees, AVL trees, and graph traversal techniques (BFS & DFS)." },
            { coNumber: "CO5", coDefinition: "Validate various hashing techniques, collision resolution methods, and shortest path algorithms (Dijkstra’s algorithm, Prim’s & Kruskal’s algorithms) for optimized data retrieval." }
        ],
    },
    {
        subject: "Object Oriented Programming",
        subjectCode: "3CIT4-06",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define the basic concepts of object-oriented programming constructs using C++ language." },
            { coNumber: "CO2", coDefinition: "Inferring the knowledge of OOP features into real world problems." },
            { coNumber: "CO3", coDefinition: "Apply OOP features to solve real problems using C++ programming language." },
            { coNumber: "CO4", coDefinition: "Analyze and compare various OOP techniques with other programming paradigms." },
            { coNumber: "CO5", coDefinition: "Create applications using file handling, templates, exception handling & OOP features in C++." }
        ],
    },
    {
        subject: "Software Engineering",
        subjectCode: "3CIT4-07",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define fundamental concepts of software engineering, including software life-cycle models, requirements specification, and verification & validation techniques." },
            { coNumber: "CO2", coDefinition: "Describe software project management processes, such as resource estimation, effort estimation models, risk analysis, and project scheduling." },
            { coNumber: "CO3", coDefinition: "Implement requirement analysis techniques using structured and object-oriented approaches, including FSM models, data flow diagrams, and software prototyping." },
            { coNumber: "CO4", coDefinition: "Analyze software design principles, modular design techniques, and documentation strategies for effective software system development." },
            { coNumber: "CO5", coDefinition: "Validate object-oriented analysis and design methodologies, including UML-based modeling, class and object relationships." }
        ],
    },
    {
        subject: "Data Structures & Algorithms Lab",
        subjectCode: "3CIT4-21",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize fundamental Stack and Queue operations to address a range of engineering problems." },
            { coNumber: "CO2", coDefinition: "Relate the principles of Linked Lists to offer solutions for computer-based issues." },
            { coNumber: "CO3", coDefinition: "Discover different Search and Sorting methods to rationalize their application in diverse scenarios." },
            { coNumber: "CO4", coDefinition: "Devise diverse operations on non-linear data structures such as trees and graphs." },
            { coNumber: "CO5", coDefinition: "Propose a solution for a provided engineering problem utilizing Stack, Queue, Linked List, Tree and Sorting." }
        ],
    },
    {
        subject: "Object Oriented Programming Lab",
        subjectCode: "3CIT4-22",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Create and explain Basic C++ Program using i/o variables and structures." },
            { coNumber: "CO2", coDefinition: "Apply object-oriented programming concepts using class and objects." },
            { coNumber: "CO3", coDefinition: "Design and assess the classes for code reuse." },
            { coNumber: "CO4", coDefinition: "Analysis and apply the generic classes concepts in programming problem." },
            { coNumber: "CO5", coDefinition: "Illustrate and evaluate the file Input Output mechanisms." }
        ],
    },
    {
        subject: "Software Engineering Lab",
        subjectCode: "3CIT4-23",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Observe the requirements specification, function-oriented design using Software Analysis and Software Design of given project and relate the use of Appropriate CASE tools and other tools in the software life cycle." },
            { coNumber: "CO2", coDefinition: "Translate Software Requirements Specification (SRS) for a given problem in IEEE template." },
            { coNumber: "CO3", coDefinition: "Select DFD model (level-0, level-1 DFD and Data dictionary) of the project." },
            { coNumber: "CO4", coDefinition: "Prepare all Structure and Behavior UML diagram of the given project." },
            { coNumber: "CO5", coDefinition: "Prepare all Structure and Behavior UML diagram of the given project." }
        ],
    },
    {
        subject: "Digital Electronics Lab",
        subjectCode: "3CIT4-24",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Demonstrate the basics of logic gates." },
            { coNumber: "CO2", coDefinition: "Demonstrate basic combinational circuits and verify their functionalities." },
            { coNumber: "CO3", coDefinition: "Apply the working mechanism and design guidelines of different sequential circuits in the digital system design." },
            { coNumber: "CO4", coDefinition: "Construct different types of counters for real time digital systems." },
            { coNumber: "CO5", coDefinition: "Distinguish the different types of shift registers." }
        ],
    },
    {
        subject: "Discrete Mathematics Structure",
        subjectCode: "4CIT2-01",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall basic concepts of sets, relations, functions, and discrete structures." },
            { coNumber: "CO2", coDefinition: "Interpret and explain principles of logic to understand and validate mathematical arguments." },
            { coNumber: "CO3", coDefinition: "Apply appropriate techniques of set theory, relations and combinatorics to solve problems." },
            { coNumber: "CO4", coDefinition: "Classify algebraic structures such as groups, rings, and fields to solve complex algebraic problems." },
            { coNumber: "CO5", coDefinition: "Evaluate solutions of real-world problems using graph theory, standard results and graph algorithms." }
        ],
    },
    {
        subject: "Managerial Economics and Financial Accounting",
        subjectCode: "4CIT1-03",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize and describe the fundamental concepts of Economics and Financial Management and define the meaning of national income, demand, supply, cost, market structure, and balance sheet." },
            { coNumber: "CO2", coDefinition: "Calculate and Classify the domestic product, national product and elasticity of price on demand and supply." },
            { coNumber: "CO3", coDefinition: "Draw the cost graphs, revenue graphs and forecast the impact of change in price in various Perfect as well as imperfect market structures." },
            { coNumber: "CO4", coDefinition: "Compare the financial statements to interpret the financial position of the firm and evaluate the project investment decisions." },
            { coNumber: "CO5", coDefinition: "" }
        ],
    },
    {
        subject: "Microprocessor & Interfaces",
        subjectCode: "4CIT3-04",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Discuss working of functional components of computer system." },
            { coNumber: "CO2", coDefinition: "Demonstrate an overall functional structure of the Microprocessor." },
            { coNumber: "CO3", coDefinition: "Explain how interrupts are used to implement I/O control and data transfers." },
            { coNumber: "CO4", coDefinition: "To learn the design aspects of I/O and Memory Interfacing circuits." },
            { coNumber: "CO5", coDefinition: "Implement their practical approach through laboratory experiments." }
        ],
    },
    {
        subject: "Database Management System",
        subjectCode: "4CIT4-05",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Identify the fundamental elements of relational database management systems." },
            { coNumber: "CO2", coDefinition: "Design and explain the basic concepts of relational data model, entity-relationship model, and relational database design." },
            { coNumber: "CO3", coDefinition: "Apply the relational database theory to formulate basic and advanced SQL queries and relational algebra expressions for the queries." },
            { coNumber: "CO4", coDefinition: "Identify the use of normalization and functional dependency in database design." },
            { coNumber: "CO5", coDefinition: "Classify the implementation details of Concurrency control protocols and discuss various database recovery methods." }
        ],
    },
    {
        subject: "Theory of Computation",
        subjectCode: "4CIT4-06",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define fundamental concepts of finite automata, regular expressions, and grammars in formal language processing and un-decidable problems." },
            { coNumber: "CO2", coDefinition: "Describe PD, Context Free Grammar, and Turing machines as language acceptors and transducers, along with derivation trees in context-free grammars." },
            { coNumber: "CO3", coDefinition: "Implement fundamental concepts of Finite Automata and Regular Expressions, including Finite State Machines (FSMs) context-free grammars to determine language recognition and processing." },
            { coNumber: "CO4", coDefinition: "Analyze formal languages using the Pumping Lemma, Myhill-Nerode theorem, closure properties, and problems related to CNF and GNF, including the membership problem, to classify languages." },
            { coNumber: "CO5", coDefinition: "Validate computational problems in terms of computability, complexity classes (P, NP, NP-complete), and decidability, along with the hierarchy of formal languages, properties of RL and REL, and the Chomsky hierarchy." }
        ],
    },
    {
        subject: "Data Communication and Computer Networks",
        subjectCode: "4CIT4-07",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Able to identify the principles of layered protocol architecture; be able to recognize and generalize the system functions in the correct protocol layer and further illustrate how the layers interact." },
            { coNumber: "CO2", coDefinition: "State and cite mathematical problems for data-link and network protocols." },
            { coNumber: "CO3", coDefinition: "Use network layer protocols and calculate number of subnets required for a network." },
            { coNumber: "CO4", coDefinition: "Compute the reliability of data transfer over transport layer by lossy channel bit errors problem." },
            { coNumber: "CO5", coDefinition: "Select and plan for common services, system services, such as name and address lookups, and communications applications." }
        ],
    },
    {
        subject: "Microprocessor & Interfaces Lab",
        subjectCode: "4CIT4-21",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Analyze the fundamentals of assembly level programming" },
            { coNumber: "CO2", coDefinition: "Apply interfacing concept between input and output devices." },
            { coNumber: "CO3", coDefinition: "Elaborate the interfacing of various other devices with microprocessor." },
            { coNumber: "CO4", coDefinition: "Compose the various program on different problems using Assembly Language Programming." },
            { coNumber: "CO5", coDefinition: "Implement standard microprocessor real time interfaces including digital-to-analog converters and analog-to-digital Converters." }
        ],
    },
    {
        subject: "Database Management System Lab",
        subjectCode: "4CIT4-22",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Create and execute a database schema for a specified problem domain." },
            { coNumber: "CO2", coDefinition: "Manage integrity constraints within a database using a relational database management system (RDBMS)." },
            { coNumber: "CO3", coDefinition: "Construct and devise a graphical user interface (GUI) application using a fourth-generation programming language (3GL)." },
            { coNumber: "CO4", coDefinition: "Composing PL/SQL code encompassing stored procedures, stored functions, cursors, and packages." },
            { coNumber: "CO5", coDefinition: "Produce SQL and Procedural interfaces to SQL comprehensively." }
        ],
    },
    {
        subject: "Network Programming Lab",
        subjectCode: "4CIT4-23",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Identify the functioning of various networking equipment’s." },
            { coNumber: "CO2", coDefinition: "Illustrate the LAN Installation techniques and Configurations techniques." },
            { coNumber: "CO3", coDefinition: "Solving various Error correcting techniques and framing methods." },
            { coNumber: "CO4", coDefinition: "Practise the programs for client and server involving UDP/TCP sockets using socket programming." },
            { coNumber: "CO5", coDefinition: "Estimate the communication between client and server using Network Simulator." }
        ],
    },
    {
        subject: "Linux Shell Programming Lab",
        subjectCode: "4CIT4-24",
        semester: "Semester 4", 
        outcomes: [
            { coNumber: "CO1", coDefinition: "Summarize the concepts and commands in UNIX." },
            { coNumber: "CO2", coDefinition: "Construct the directory layout of a typical UNIX system, maintain, and secure UNIX directories and files." },
            { coNumber: "CO3", coDefinition: "Illustrate the knowledge to use the several shell quoting mechanisms correctly." },
            { coNumber: "CO4", coDefinition: "Construct regular expression using filters and various commands to express the patterns." },
            { coNumber: "CO5", coDefinition: "Write simple scripts to develop basic command output." }
        ],
    },
    {
        subject: "Java Lab",
        subjectCode: "4CIT4-25",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Express and restate fundamentals of java, and tools for program designing environments." },
            { coNumber: "CO2", coDefinition: "Construct classes and implement the principles of method overloading, inheritance, and access controls within those classes." },
            { coNumber: "CO3", coDefinition: "Develop Java packages and incorporate the concept of interfaces, along with importing these packages in Java." },
            { coNumber: "CO4", coDefinition: "Formulate the application by managing file operations, handling exceptions, and implementing threads." },
            { coNumber: "CO5", coDefinition: "Create applications utilizing Java applets and design various polygons. This task involves the application of knowledge and the synthesis of design skills." }
        ],
    },
    {
        subject: "Information Theory & Coding",
        subjectCode: "5CIT3-01",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall fundamental concepts of information theory such as entropy, uncertainty, and mutual information." },
            { coNumber: "CO2", coDefinition: "Explain the working principles of source and channel coding techniques including Huffman, Shannon-Fano, and Lempel-Ziv coding." },
            { coNumber: "CO3", coDefinition: "Apply source and channel coding theorems to compute entropy, mutual information, and channel capacity for discrete memory less systems." },
            { coNumber: "CO4", coDefinition: "Analyze the structure and performance of linear block codes and cyclic codes using generator and parity check matrices over Galois fields." },
            { coNumber: "CO5", coDefinition: "Evaluate the performance of convolutional codes using Viterbi decoding and assess error correction capabilities through free distance." }
        ],
    },
    {
        subject: "Compiler Design",
        subjectCode: "5CIT4-02",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the fundamental concepts of compilers, interpreters, phases of a compiler, and finite automata used in lexical analysis." },
            { coNumber: "CO2", coDefinition: "Describe various parsing techniques including LL, LR, SLR, LALR, and associated error handling methods." },
            { coNumber: "CO3", coDefinition: "Apply syntax-directed definitions and generate intermediate code such as three-address code, DAGs, and postfix expressions." },
            { coNumber: "CO4", coDefinition: "Analyze storage organization, activation records, and symbol table structures used in block-structured languages." },
            { coNumber: "CO5", coDefinition: "Evaluate and optimize code using control flow graphs, loop optimizations, DAGs, and peephole optimization strategies." }
        ],
    },
    {
        subject: "Operating System",
        subjectCode: "5CIT4-03",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the history, structure, and fundamental operations of modern operating systems." },
            { coNumber: "CO2", coDefinition: "Explain the concepts of process management, inter-process communication, and scheduling algorithms." },
            { coNumber: "CO3", coDefinition: "Apply memory management techniques such as paging, segmentation, and page replacement policies to manage virtual memory efficiently." },
            { coNumber: "CO4", coDefinition: "Analyze deadlock conditions using resource allocation graphs and propose strategies for deadlock prevention, avoidance, and detection." },
            { coNumber: "CO5", coDefinition: "Evaluate file and device management techniques, including access methods, disk scheduling algorithms, and file security mechanisms." }
        ],
    },
    {
        subject: "Fundamental of IoT",
        subjectCode: "5CIT4-04",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the basic concepts, vision, architectural view, and examples of IoT and M2M communication." },
            { coNumber: "CO2", coDefinition: "Explain the design principles, communication technologies, and standardization layers of IoT/M2M systems." },
            { coNumber: "CO3", coDefinition: "Apply knowledge of sensors, embedded platforms (Arduino, Raspberry Pi, etc.), and wireless sensor networks in IoT applications." },
            { coNumber: "CO4", coDefinition: "Analyze networking and communication issues in IoT such as MAC protocols, routing, data aggregation, and sensor deployment." },
            { coNumber: "CO5", coDefinition: "Evaluate real-world IoT challenges and implement practical IoT solutions using Arduino and related hardware." }
        ],
    },
    {
        subject: "Analysis of Algorithm",
        subjectCode: "5CIT4-05",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall fundamental algorithmic concepts such as complexity, asymptotic notations and different types of algorithm design paradigms." },
            { coNumber: "CO2", coDefinition: "Describe the conditions under which appropriate algorithm design approach is used to solve a particular problem." },
            { coNumber: "CO3", coDefinition: "Implement appropriate algorithm design techniques to solve computational problems and compare their efficiency." },
            { coNumber: "CO4", coDefinition: "Analyze and assess the time and space complexity of algorithms, identify potential areas for optimization based on various factors and evaluate their performance." },
            { coNumber: "CO5", coDefinition: "Contribute to the field of algorithm design by proposing new techniques or improvements in existing techniques." }
        ],
    },
    {
        subject: "Wireless Communication (Compiler-like description present)",
        subjectCode: "5CIT4-11",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the fundamental concepts of compilers, interpreters, phases of a compiler, and finite automata used in lexical analysis." },
            { coNumber: "CO2", coDefinition: "Describe various parsing techniques including LL, LR, SLR, LALR, and associated error handling methods." },
            { coNumber: "CO3", coDefinition: "Apply syntax-directed definitions and generate intermediate code such as three-address code, DAGs, and postfix expressions." },
            { coNumber: "CO4", coDefinition: "Analyze storage organization, activation records, and symbol table structures used in block-structured languages." },
            { coNumber: "CO5", coDefinition: "Evaluate and optimize code using control flow graphs, loop optimizations, DAGs, and peephole optimization strategies." }
        ],
    },
    {
        subject: "Human Computer Interaction",
        subjectCode: "5CIT4-12",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall key concepts, historical evolution, usability definitions, and aesthetics of HCI and GUI design." },
            { coNumber: "CO2", coDefinition: "Explain various models of HCI including GOMS, Fitts' law, Hick-Hyman’s law, and apply them to evaluate system performance." },
            { coNumber: "CO3", coDefinition: "Apply user-centered design guidelines like Shneiderman’s, Norman’s principles, and Nielsen’s heuristics in interface prototyping and evaluation." },
            { coNumber: "CO4", coDefinition: "Analyze user research methods such as heuristic evaluation, contextual inquiry, cognitive walkthrough, and experimental designs like ANOVA." },
            { coNumber: "CO5", coDefinition: "Evaluate and model user interactions using formal task modeling methods such as HTA, FSMs, Petri Nets, and Concur Task Trees." }
        ],
    },
    {
        subject: "IoT Architecture and Protocols",
        subjectCode: "5CIT4-13",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall key components, design principles, and layered architecture of IoT systems." },
            { coNumber: "CO2", coDefinition: "Explain the fundamentals of M2M communication, IoT protocols, gateways, and networking technologies." },
            { coNumber: "CO3", coDefinition: "Apply IoT reference architectures and models to design basic IoT solutions while considering real-world constraints." },
            { coNumber: "CO4", coDefinition: "Analyze various IoT communication protocols across the Data Link, Network, Transport, and Session layers for efficient data transfer and control." },
            { coNumber: "CO5", coDefinition: "Evaluate service layer standards and security mechanisms for reliable and secure IoT deployments." }
        ],
    },
    {
        subject: "Internet of Things Lab",
        subjectCode: "5CIT4-21",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the basic structure and syntax of Arduino programs including setup and loop functions, serial communication methods, and data types." },
            { coNumber: "CO2", coDefinition: "Understand programming logic and control structures such as if-else, switch, loops, arrays, and time-based functions using Arduino." },
            { coNumber: "CO3", coDefinition: "Apply digital and analog I/O functions to control LEDs, 7-segment displays, buttons, and switches." },
            { coNumber: "CO4", coDefinition: "Analyze sensor data and communication protocols (UART, I2C, SPI) to interface with various modules like temperature, PIR, infrared, ultrasonic sensors, and accelerometers." },
            { coNumber: "CO5", coDefinition: "Evaluate actuator control logic by interfacing servo motors, stepper motors, and DC motors using Arduino for practical IoT applications." }
        ],
    },
    {
        subject: "Compiler Design Lab",
        subjectCode: "5CIT4-22",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall fundamental concepts of compiler design such as lexical analysis, syntax analysis, symbol table, and grammar rules." },
            { coNumber: "CO2", coDefinition: "Understand and analyze lexical elements like keywords, operators, identifiers, and tokens in C files using C and LEX programming." },
            { coNumber: "CO3", coDefinition: "Apply knowledge of LEX and YACC tools to perform lexical and syntax analysis tasks, including pattern recognition and grammar validation." },
            { coNumber: "CO4", coDefinition: "Analyze and manipulate files to perform character-level and word-level parsing operations such as counting spaces, lines, and character frequencies." },
            { coNumber: "CO5", coDefinition: "Design and implement a symbol table and programs to compute FIRST sets and evaluate arithmetic expressions using context-free grammars." }
        ],
    },
    {
        subject: "Analysis of Algorithms Lab",
        subjectCode: "5CIT4-23",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand and interpret the working principles of various algorithmic techniques such as divide-and-conquer, greedy, dynamic programming, and backtracking." },
            { coNumber: "CO2", coDefinition: "Apply sorting algorithms like Quick Sort and Merge Sort to datasets and analyze their performance based on input size." },
            { coNumber: "CO3", coDefinition: "Analyze graph-based algorithms (BFS, DFS, Dijkstra’s, Kruskal’s, Prim’s, Floyd’s, Warshall’s) for solving real-world shortest path, spanning tree, and connectivity problems." },
            { coNumber: "CO4", coDefinition: "Evaluate the computational efficiency of algorithms by measuring and comparing time complexity and plotting performance graphs for varying input sizes." },
            { coNumber: "CO5", coDefinition: "Design and implement algorithms for solving classical computational problems such as 0/1 Knapsack and N-Queens using dynamic programming and backtracking techniques." }
        ],
    },
    {
        subject: "Advanced Java Lab",
        subjectCode: "5CIT4-24",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the fundamentals of Swing, MVC architecture, applets, and GUI components to develop Java-based desktop applications." },
            { coNumber: "CO2", coDefinition: "Apply Java networking and database programming techniques using java.net and java.sql packages, JDBC drivers, and client-server architecture." },
            { coNumber: "CO3", coDefinition: "Analyze and implement distributed applications using Java RMI, JNDI, object serialization, and internationalization features." },
            { coNumber: "CO4", coDefinition: "Evaluate the structure of enterprise applications using J2EE architecture, web containers, and n-tier application concepts." },
            { coNumber: "CO5", coDefinition: "Design and develop dynamic web applications using Servlets and JSP, incorporating session handling, filters, JSP tag libraries, and JSTL features." }
        ],
    },
    {
        subject: "Digital Image Processing",
        subjectCode: "6CIT3-01",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall key concepts in digital image representation, sampling, quantization, and acquisition." },
            { coNumber: "CO2", coDefinition: "Understand and interpret various image enhancement and transformation techniques including histogram processing and filtering." },
            { coNumber: "CO3", coDefinition: "Apply frequency domain and wavelet transforms for filtering and enhancement of digital images." },
            { coNumber: "CO4", coDefinition: "Analyze noise models and implement image restoration techniques such as inverse and homomorphic filtering." },
            { coNumber: "CO5", coDefinition: "Evaluate and compare image compression techniques such as Huffman, Arithmetic, and JPEG compression." }
        ],
    },
    {
        subject: "Machine Learning",
        subjectCode: "6CIT4-02",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define the fundamental concepts, scope, and objectives of Machine Learning." },
            { coNumber: "CO2", coDefinition: "Explain various supervised learning algorithms such as Linear Regression, Naive Bayes, Decision Trees, KNN, Logistic Regression, SVM, and Random Forests, along with their real-world applications." },
            { coNumber: "CO3", coDefinition: "Apply unsupervised learning algorithms like k-means, Hierarchical Clustering, GMM, and Association Rule Mining for clustering and pattern discovery on unlabeled datasets." },
            { coNumber: "CO4", coDefinition: "Analyze feature extraction and selection techniques like PCA, SVD, and feature ranking methods for effective data representation and dimensionality reduction." },
            { coNumber: "CO5", coDefinition: "Evaluate machine learning models using appropriate model selection techniques and performance metrics." }
        ],
    },
    {
        subject: "Information Security System",
        subjectCode: "6CIT4-03",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define the key objectives, scope, terminology, and outcomes of cryptography and network security." },
            { coNumber: "CO2", coDefinition: "Explain various types of security attacks, services, and mechanisms, and analyze classical encryption techniques such as substitution and transposition ciphers." },
            { coNumber: "CO3", coDefinition: "Apply modern symmetric key cryptographic algorithms such as DES and AES and compare their design principles, strengths, and operational modes (ECB, CBC, CFB, OFB, CTR)." },
            { coNumber: "CO4", coDefinition: "Analyze public key cryptographic systems like RSA, Rabin, ElGamal, and ECC, and evaluate their suitability for different secure communication scenarios." },
            { coNumber: "CO5", coDefinition: "Evaluate the design and security of cryptographic hash functions, MACs, and digital signatures, including SHA, HMAC, and NIST signature standards." }
        ],
    },
    {
        subject: "Computer Architecture and Organization",
        subjectCode: "6CIT4-04",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the basic concepts of computer data representation, including data types, complements, and fixed-point and floating-point formats." },
            { coNumber: "CO2", coDefinition: "Explain the principles of register transfer, micro-operations, and the organization of a basic computer, including instruction codes and memory transfers." },
            { coNumber: "CO3", coDefinition: "Apply programming techniques in machine language and assembly language to implement arithmetic and logic operations on a basic computer." },
            { coNumber: "CO4", coDefinition: "Analyze the structure and functioning of the Central Processing Unit (CPU), including pipelining, vector processing, and addressing modes, to understand performance optimization." },
            { coNumber: "CO5", coDefinition: "Evaluate the effectiveness of memory organization techniques (e.g., cache, virtual memory) and input-output methods (e.g., DMA, interrupts) in designing efficient computer systems." }
        ],
    },
    {
        subject: "Artificial Intelligence",
        subjectCode: "6CIT4-05",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall and list fundamental concepts of Artificial Intelligence, including intelligent agents, types of AI, and basic search techniques such as BFS, DFS, and Hill Climbing." },
            { coNumber: "CO2", coDefinition: "Explain various search strategies and game-playing algorithms such as A*, Minimax, and Alpha-Beta Pruning, and describe how these techniques are used to solve AI problems." },
            { coNumber: "CO3", coDefinition: "Implement AI algorithms for problem-solving using informed and uninformed search strategies, and decision trees, SVMs, and neural networks in learning tasks." },
            { coNumber: "CO4", coDefinition: "Differentiate between propositional and first-order logic, and analyze AI planning approaches and knowledge representation techniques for logical reasoning." },
            { coNumber: "CO5", coDefinition: "Evaluate the effectiveness of AI approaches like Bayesian reasoning, constraint satisfaction, and learning models in solving real-world problems involving uncertainty and NLP." }
        ],
    },
    {
        subject: "Cloud Computing",
        subjectCode: "6CIT4-06",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define key cloud computing concepts, characteristics, architecture and virtualization." },
            { coNumber: "CO2", coDefinition: "Explain the principles of cloud computing, its various services and virtualization concepts." },
            { coNumber: "CO3", coDefinition: "Apply cloud computing principles to design the architecture of a cloud computing environment." },
            { coNumber: "CO4", coDefinition: "Compare different cloud deployment models and analyze the security implications of cloud computing." },
            { coNumber: "CO5", coDefinition: "Assess the performance and scalability of different clouds and feasibility of migrating to the cloud." }
        ],
    },
    {
        subject: "Privacy and Security in IoT",
        subjectCode: "6CIT5-04",
        semester: "Semester 6",

        outcomes: [
            { coNumber: "CO1", coDefinition: "Explain the layered IoT security architecture, its enabling technologies, and typical attack surfaces." },
            { coNumber: "CO2", coDefinition: "Analyze access control threats, privacy issues, and availability risks by constructing fault and attack trees for representative IoT scenarios." },
            { coNumber: "CO3", coDefinition: "Apply appropriate cryptographic primitives—encryption, hashing, digital signatures, and secure key management schemes—to secure IoT messaging protocols such as MQTT or CoAP." },
            { coNumber: "CO4", coDefinition: "Design an end-to-end identity & access management (IAM) workflow for a smart device ecosystem, incorporating lifecycle management, credential provisioning, and least privilege authorization." },
            { coNumber: "CO5", coDefinition: "Evaluate cloud based IoT security controls and recommend an enterprise cloud IoT security architecture that meets specified confidentiality, integrity, and availability requirements." }
        ],
    },
    {
        subject: "Wireless Communication (Distributed Systems description)",
        subjectCode: "6CIT5-11",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Describe the architecture, design issues, and components of distributed systems." },
            { coNumber: "CO2", coDefinition: "Explain concurrency, inter-process communication, synchronization, and coordination models in distributed systems." },
            { coNumber: "CO3", coDefinition: "Apply scheduling algorithms and analyze distributed file system mechanisms." },
            { coNumber: "CO4", coDefinition: "Analyze the implementation of distributed shared memory, consistency models, and mutual exclusion mechanisms." },
            { coNumber: "CO5", coDefinition: "Evaluate fault-tolerant techniques, distributed agreement protocols, and replicated data management strategies." }
        ],
    },
    {
        subject: "Wireless Communication (WSN)",
        subjectCode: "6CIT5-12",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall and describe the basic components, classifications, and architectural limitations of wireless sensor networks." },
            { coNumber: "CO2", coDefinition: "Explain the design challenges and physical layer functions such as encoding, modulation, and sensor network optimization." },
            { coNumber: "CO3", coDefinition: "Apply the knowledge of MAC protocols (contention-free, contention-based, hybrid) in designing medium access strategies." },
            { coNumber: "CO4", coDefinition: "Analyze different routing protocols including flooding, gossiping, hierarchical, and location-based approaches." },
            { coNumber: "CO5", coDefinition: "Evaluate network and node-level QoS mechanisms and assess power management techniques in wireless sensor networks." }
        ],
    },
    {
        subject: "Digital Image Processing Lab",
        subjectCode: "6CIT4-21",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the fundamental concepts of image processing operations such as histogram analysis, thresholding, and convolution techniques." },
            { coNumber: "CO2", coDefinition: "Explain the principles behind geometric transformations, frequency domain filtering, and morphological operations applied to digital images." },
            { coNumber: "CO3", coDefinition: "Implement various image processing techniques such as histogram equalization, linear and non-linear filtering, and morphological transformations using programming tools." },
            { coNumber: "CO4", coDefinition: "Examine and evaluate the effects of edge detection and filtering techniques on noisy and clean images to understand their performance and limitations." },
            { coNumber: "CO5", coDefinition: "Design and develop a complete image processing workflow to solve real-world image enhancement or analysis problems using appropriate spatial and frequency domain techniques." }
        ],
    },
    {
        subject: "Machine Learning Lab",
        subjectCode: "6CIT4-22",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand and explain core concepts of machine learning algorithms such as hypothesis space search, classification, regression, and clustering." },
            { coNumber: "CO2", coDefinition: "Apply supervised learning algorithms like Find-S, Candidate Elimination, ID3, Naïve Bayes, and k-NN on real-world datasets using Python/Java." },
            { coNumber: "CO3", coDefinition: "Analyze machine learning models such as Decision Trees, Artificial Neural Networks, and Bayesian Networks to evaluate model behavior and generalization." },
            { coNumber: "CO4", coDefinition: "Evaluate machine learning classifiers using metrics like accuracy, precision, recall, and clustering quality, and compare EM vs k-Means clustering algorithms." },
            { coNumber: "CO5", coDefinition: "Design and implement non-parametric and probabilistic ML models like Locally Weighted Regression and Naïve Bayes for real-world data interpretation and decision making." }
        ],
    },
    {
        subject: "Python Lab for IoT (Programming)",
        subjectCode: "6CIT4-23",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall Python syntax, commands, and basic programming constructs to perform operations using command line, scripts, and file handling." },
            { coNumber: "CO2", coDefinition: "Understand and implement core Python features such as control flow, functions, strings, lists, sets, dictionaries, classes, and inheritance." },
            { coNumber: "CO3", coDefinition: "Apply Python to perform computational tasks (factorial, Fibonacci, prime number checks, string operations, etc.) and execute them in Raspberry Pi." },
            { coNumber: "CO4", coDefinition: "Analyze Raspberry Pi GPIO interactions with components like LEDs, switches, sensors, and 7-segment displays to evaluate their behavior under different conditions." },
            { coNumber: "CO5", coDefinition: "Create Python programs to integrate IoT components (DHT, PIR, ultrasonic sensors, camera) with cloud data upload and automation using cron jobs." }
        ],
    },
    {
        subject: "Android / Mobile Development Lab",
        subjectCode: "6CIT4-24",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the basic components and development environment of Android Studio to build simple Android applications." },
            { coNumber: "CO2", coDefinition: "Understand the use of activities, intents, and user interfaces to develop basic Android applications like login and calculator apps." },
            { coNumber: "CO3", coDefinition: "Apply Android development concepts to work with multimedia (images/videos), file handling (SD card), and RSS feeds." },
            { coNumber: "CO4", coDefinition: "Analyze the usage of databases (SQLite) and location-based services (GPS) for building real-time, data-driven Android applications." },
            { coNumber: "CO5", coDefinition: "Design and develop interactive mobile applications including games and graphical interfaces by integrating various Android components." }
        ],
    }
];


const projectFieldCounts = [
    { field: "Machine Learning/Deep Learning", count: 5 },
    { field: "Artificial Intelligence", count: 6 },
    { field: "Web Development", count: 4 },
    { field: "Blockchain", count: 2 },
    { field: "AR / VR", count: 4 },
    { field: "NLP", count: 2 },
];

const labData = [
    {
        image: "/images/Labs/Iot/308-Simulation-lab.jpg", // computer lab
        title: "Simulation Lab",
        facultyInCharge: "Ms. Samiksha Agarwal",
        labAssistant: "Mr. Vinod Kumar Gurjar",
        roomNumber: "A‑308",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/Iot/309-Robotics-and-communication-lab.jpg", // language/computer cubicle lab
        title: "Robotics and Communication Lab",
        facultyInCharge: "Dr. Ritam Dutta",
        labAssistant: "Mr. Laxman Singh Chauhan ",
        roomNumber: "A‑309",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/Iot/310-Data-Analytics-lab.jpg", // reuse for Manufacturing Workshop temporarily
        title: "Data Analytics Lab",
        facultyInCharge: "Dr. Madhav Sharma",
        labAssistant: "Mr. Vansh Veer Singh Rajawat",
        roomNumber: "A‑310",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "/images/Labs/Iot/Idea-lab.jpg",
        title: "AICTE-IDEA Lab",
        facultyInCharge: "Dr. Payal Bansal",
        labAssistant: "Mr. Surendra Singh",
        roomNumber: "B-006A",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    
];
const points = [
    "AICTE- IDEA Lab ( Simulation lab, Testing Lab, PCB Design Lab, Mechancial Workshop lab, 3D Printing lab and laser cutter & Beam Works lab)",
    "Internet of Things Lab",
   
    "Robotics Lab",
    "Machine learning & Data Analytics Lab",
    
];

const missionPoints = [
    "To provide a comprehensive outcome-based education through a robust curriculum and hands-on learning.",
    "To promote research, innovation, and entrepreneurial thinking among students and faculty.",
    "To bridge the gap between academia and industry through real-world projects, internships, and technical collaborations.",
    "To ensure holistic student development by nurturing ethical values, professional skills, and lifelong learning.",
];

const objectivePoints = [
    "Deliver high-quality education in core and emerging areas of computer engineering.",
    "Facilitate research and innovation through faculty guidance, conferences, and technical events.",
    "Equip students with industry-ready skills through workshops, coding contests, and placement preparation.",
    "Encourage students to contribute to society with transparency and integrity through tech-enabled solutions.",
];

const visionContent = (
     <div className="flex flex-col items-center text-center space-y-4">
    <i className="fas fa-lightbulb text-yellow-500 text-5xl"></i>
    <p className="text-gray-700 flex-grow flex items-center justify-center text-justify">
       To foster an environment of innovation, research, and academic
        excellence that prepares future technocrats and leaders to address
        global challenges in computer engineering and technology.
    </p>
  </div> 
    
);

const projects = [
    { name: "Airtificial Intelligence and Machine Learning	" },
    {
        name: "Augmented and Virtual Reality	",
    },
    { name: "Blockchain" },
    { name: "Deep Learning	" },
    {
        name: "Internet of Things	",
    },
    { name: "E-commerce website" },
    { name: "Mobile Application Development	" },
    { name: "LIBRARY MANAGEMENT" },
    { name: "5 MIN TAXI" },
    { name: "Flexstart" },
    { name: "Task management system" },
    { name: "WeatherHub" },
    { name: "React Weather" },
    { name: "To-Do List, Calculator" },
    { name: "MusicBee" },
    { name: "Flexstart" },
    { name: "SPOTIFY CLONE" },
    { name: "AnCrypt" },
    { name: "Havenly" },
    { name: "Restaurant website" },
    { name: "Interior product website" },

    // Add more...
];

const missionContent = <Checklist items={missionPoints} />;

const objectiveContent = <Checklist items={objectivePoints} />;

const IOT = () => {
    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFaculty = async () => {
            try {
                const response = await fetch("/api/faculty");
                if (response.ok) {
                    const data = await response.json();
                    // Filter faculty by Internet of Things department
                    const iotFaculty =
                        data.data?.filter(
                            (faculty: Faculty) =>
                                faculty.department === "Internet of Things",
                        ) || [];

                    // Transform data to match FacultySwiper expected format
                    const transformedFaculty = iotFaculty.map(
                        (faculty: Faculty) => ({
                            imageSrc:
                                faculty.imageUrl ||
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
                            name: faculty.name,
                            gender: faculty.gender,
                            designation: faculty.designation,
                        }),
                    );

                    setFacultyData(transformedFaculty);
                }
            } catch (error) {
                console.error("Error loading faculty:", error);
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
                title="Department of Internet of Things"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Department of Internet of Things",
                        isCurrent: true,
                    },
                ]}
            />

            {/* overview sections start */}

            <OverviewSection
                title="Introduction"
                subtitle="An Insight into PIET"
                reverse={false}
                image={{
                    src: "https://www.piet.poornima.org/images/idealab.jpeg",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p className="mb-1 text-justify">
                   The Department of Internet of Things (IoT) at PIET, established in 2023-24, aims to create a dynamic
                    ecosystem where innovation and technology converge to shape future technocrats. The department offers
                     a B.Tech in Computer Science & Engineering (IoT) with an intake of 60 seats, approved by AICTE and
                      affiliated to Rajasthan Technical University. With highly qualified faculty, including Ph.D. holders,
                       and modern infrastructure, we attract talented students from across the region. Through project
                        exhibitions, conferences, workshops, and industry partnerships, the department fosters research,
                         skill development, and hands-on learning, ensuring students are well-prepared for the digital age.
                </p>
                <br />
                <p className="mb-1 text-justify">
                    The department is equipped with state-of-the-art laboratories, including:
                </p>

               <Checklist items={points} /> 

                <br />
            </OverviewSection>

            {/* vision and mission section */}

            <div className=" container  mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch text-justify ">
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
                <div className="max-w-7xl mx-auto px-8">
                    <Message
                        title="Message from the HOD"
                        content={`Dear Students, Faculty, and Visitors,

As the Head of Department (HoD), it is my privilege to lead a team of dedicated faculty members and passionate students who are at the forefront of shaping the future of IoT (Internet of Things). Our department serves as a hub for cutting-edge research, technological advancement, and academic excellence.

At the core of our mission is the belief that IoT has the potential to revolutionize industries, enhance quality of life, and address complex societal challenges. Through our interdisciplinary approach, we strive to empower students with the knowledge, skills, and mindset required to thrive in this rapidly evolving field.

Our department is more than just a collection of classrooms and laboratories; it is a vibrant community of innovators, problem solvers, and visionaries. Here, collaboration is key, and diversity of thought is celebrated. We provide a nurturing environment where students are encouraged to explore, experiment, and push the boundaries of what is possible.

As the landscape of IoT continues to evolve, we remain committed to staying at the forefront of innovation. Our faculty members are actively engaged in groundbreaking research and industry partnerships, ensuring that our curriculum remains relevant and our students are prepared for the challenges of tomorrow.

The Department of Internet of Things at PIET stands as a testament to our commitment to excellence in education and research. We are dedicated to developing smart solutions that connect devices, systems, and people, creating a more efficient and sustainable world.

Whether you are a prospective student, a current member of our department, or a curious visitor, I invite you to join us on this exciting journey. Together, let's explore the endless possibilities of IoT and inspire the next generation of technological leaders.

Thank you for your interest in the IoT Department. I look forward to welcoming you to our community.

- Dr. Payal Bansal
HOD, Department of Internet of Things, PIET`}
                        imageUrl="/images/hod/dr. Payal Bansal.jpg"
                        imageAlt="Dr. Payal Bansal - HOD, Department of Internet of Things"
                    />
                </div>
            </section>

            {/* faculty cards */}

            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Meet Our Faculty
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                {loading ? (
                    <div className="text-center py-8">
                        <p className="text-neutral-600">Loading faculty...</p>
                    </div>
                ) : facultyData.length > 0 ? (
                    <FacultySwiper profiles={facultyData} />
                ) : (
                    <div className="text-center py-8">
                        <p className="text-neutral-600">
                            No faculty members found for Internet of Things
                            department.
                        </p>
                    </div>
                )}
            </section>

            {/* labs cards */}

            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-10">
                        Our Laboratories
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {labData.map((lab, index) => (
                            <LabInfoCard key={index} {...lab} />
                        ))}
                    </div>
                </div>
            </section>

            {/* student projects section 
            <section className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-4">
                        Student Projects
                    </h2>
                    <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
                        Explore innovative ideas and solutions created by our
                        students across various disciplines.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white border border-neutral-200 rounded-lg p-5 shadow hover:shadow-md transition-all group cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                                    <i className="fa-solid fa-hand-point-right text-secondary"></i>{" "}
                                    {project.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CourseOutcomeAccordion data={courseData} />  */}

            {/* ipr's data */}

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    IPR's
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={columns} data={data} />
            </div>

              {/* student projects section */}
<section className="py-16 bg-neutral-50">
  <div className="container mx-auto px-4">
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


            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    {" "}
                    FDP / Workshop
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={fdpColumns} data={fdpData} />
            </div>
            <div className="container mt-10 mx-auto">
                <StudentProjectsGrid projects={projectData} />;
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IOT;
