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
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

interface Faculty {
    _id: string;
    name: string;
    department: string;
    designation: string;
    gender: string;
    imageUrl?: string;
}

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
        subjectCode: "3CS2-01",
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
        subjectCode: "3CS1-02",
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
        subjectCode: "3CS3-04",
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
        subjectCode: "3CS4-05",
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
        subjectCode: "3CS4-06",
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
        subjectCode: "3CS4-07",
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
        subjectCode: "3CS4-21",
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
        subjectCode: "3CS4-22",
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
        subjectCode: "3CS4-23",
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
        subjectCode: "3CS4-24",
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
        subject: "Industrial Training",
        subjectCode: "3CS7-30",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Compose an interest in research-oriented fields and develop the ability to research for literature and prepare brief report." },
            { coNumber: "CO2", coDefinition: "Identify the skills, competencies and points of view needed by professionals in the field most closely related to the course." },
            { coNumber: "CO3", coDefinition: "Discuss and identify about topics of current intellectual importance." },
            { coNumber: "CO4", coDefinition: "Develop the communication skills and awareness about the industrial environment." },
            { coNumber: "CO5", coDefinition: "Revise Skill development for presentation." }
        ],
    },
    {
        subject: "Discrete Mathematics Structure",
        subjectCode: "4CS2-01",
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
        subjectCode: "4CS1-03",
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
        subjectCode: "4CS3-04",
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
        subjectCode: "4CS4-05",
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
        subjectCode: "4CS4-06",
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
        subjectCode: "4CS4-07",
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
        subjectCode: "4CS4-21",
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
        subjectCode: "4CS4-22",
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
        subjectCode: "4CS4-23",
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
        subjectCode: "4CS4-24",
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
        subjectCode: "4CS4-25",
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
        subjectCode: "5CS3-01",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Solve the theory algebra and linear algebra in source coding." },
            { coNumber: "CO2", coDefinition: "Create channel performance using information theory." },
            { coNumber: "CO3", coDefinition: "Manipulate linear block codes for error detection and error correction." },
            { coNumber: "CO4", coDefinition: "Modify Cyclic codes for error detection and error correction." },
            { coNumber: "CO5", coDefinition: "Discover convolution codes for performance analysis." }
        ],
    },
    {
        subject: "Compiler Design",
        subjectCode: "5CS4-02",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Explain the fundamental concepts, structure, and functions of a compiler, and distinguish different phases of compilation." },
            { coNumber: "CO2", coDefinition: "Apply lexical analysis techniques to construct finite automata and recognize tokens using regular expressions." },
            { coNumber: "CO3", coDefinition: "Implement syntax and semantic analysis using parsing techniques, context-free grammars, and symbol tables." },
            { coNumber: "CO4", coDefinition: "Develop intermediate code representations and perform code optimization techniques to improve execution efficiency." },
            { coNumber: "CO5", coDefinition: "Implement simple compiler components using code generation, error handling, and optimization strategies." }
        ],
    },
    {
        subject: "Operating Systems",
        subjectCode: "5CS4-03",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the evolution, objectives, structure, and functionalities of operating systems, including the basic concepts of processes and files." },
            { coNumber: "CO2", coDefinition: "Explain memory management techniques such as paging, segmentation, page replacement algorithms, and virtual memory handling through case studies." },
            { coNumber: "CO3", coDefinition: "Apply processor and process management techniques including inter-process communication, scheduling, mutual exclusion, and multithreading." },
            { coNumber: "CO4", coDefinition: "Analyze deadlock conditions and device management using resource allocation models and disk scheduling algorithms." },
            { coNumber: "CO5", coDefinition: "Evaluate file management techniques—such as directory structures, access methods, file security—in UNIX, Linux, and Mobile OS environments." }
        ],
    },
    {
        subject: "Computer Graphics & Multimedia",
        subjectCode: "5CS4-04",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the basics of computer graphics, including graphics standards and fundamental concepts." },
            { coNumber: "CO2", coDefinition: "Explain and analyze various algorithms for scan conversion and area filling of basic geometrical primitives." },
            { coNumber: "CO3", coDefinition: "Illustrate and implement algorithms for 2D transformations and clipping." },
            { coNumber: "CO4", coDefinition: "Compare different color models in computer graphics and develop animated motions using OpenGL." },
            { coNumber: "CO5", coDefinition: "Assess the fundamental concepts of parallel and perspective projections and evaluate various algorithms for 3D transformations." }
        ],
    },
    {
        subject: "Analysis of Algorithm",
        subjectCode: "5CS4-05",
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
        subject: "Wireless Communication (Elective)",
        subjectCode: "5CS5-11",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognizing Mobile Radio Propagation, Fading, Diversity Concepts and Channel Modeling." },
            { coNumber: "CO2", coDefinition: "Relate the concept of cellular system and their technical challenges." },
            { coNumber: "CO3", coDefinition: "Correlate the Digital Signalling concept with fading channels." },
            { coNumber: "CO4", coDefinition: "Estimate the equalization techniques in wireless communication and error probability in faded channels." },
            { coNumber: "CO5", coDefinition: "Summarize the impacts of Design Parameters, Beam Forming and MIMO Systems in wireless communication." }
        ],
    },
    {
        subject: "Human Computer Interaction (Elective)",
        subjectCode: "5CS5-12",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Explain the evolution of HCI, usability concepts, and its relationship with software engineering." },
            { coNumber: "CO2", coDefinition: "Apply model-based design approaches and laws such as GOMS, Fitts’ law, and Hick-Hyman’s law for interface evaluation." },
            { coNumber: "CO3", coDefinition: "Analyze usability guidelines, heuristic evaluation techniques, and user interaction models to improve interface designs." },
            { coNumber: "CO4", coDefinition: "Design interactive systems using task modeling techniques (HTA, CTT), dialogue design, and formal modeling methods." },
            { coNumber: "CO5", coDefinition: "Conduct empirical research in HCI, including experimental design, usability testing, and data analysis." }
        ],
    },
    {
        subject: "Computer Graphics & Multimedia Techniques Lab",
        subjectCode: "5CS4-21",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand and apply the various predefined functions for drawing various geometric shapes." },
            { coNumber: "CO2", coDefinition: "Explain and analyze various algorithms to scan, convert the basic geometrical primitives, transformations, Area filling, clipping." },
            { coNumber: "CO3", coDefinition: "Explain, illustrate and design various kinds of viewing and Projections." },
            { coNumber: "CO4", coDefinition: "Explain, illustrate and design various kinds of clipping techniques." },
            { coNumber: "CO5", coDefinition: "Define, explain and apply various concepts associated with computer graphics to develop the animated game." }
        ],
    },
    {
        subject: "Compiler Design Lab",
        subjectCode: "5CS4-22",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the various forms of tokens and lexemes." },
            { coNumber: "CO2", coDefinition: "Calculate scanning by using the concept of finite state automation, parse." },
            { coNumber: "CO3", coDefinition: "Arrange intermediate code for various statements in a programming language concept." },
            { coNumber: "CO4", coDefinition: "Organize the storage for heap structure." },
            { coNumber: "CO5", coDefinition: "Construct various language patterns using flex tools they are also able to parse." }
        ],
    },
    {
        subject: "Analysis of Algorithm Lab",
        subjectCode: "5CS4-23",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Observe the complexity of fundamental algorithms." },
            { coNumber: "CO2", coDefinition: "Relate sorting algorithms in real-world scenarios." },
            { coNumber: "CO3", coDefinition: "Construct a binary search tree using assorted algorithms." },
            { coNumber: "CO4", coDefinition: "Test algorithms for finding minimum spanning trees." },
            { coNumber: "CO5", coDefinition: "Appraise algorithms for pattern matching." }
        ],
    },
    {
        subject: "Advance Java Lab",
        subjectCode: "5CS4-24",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the foundational principles of Java programming and identify tools used in program design environments." },
            { coNumber: "CO2", coDefinition: "Utilize the principles of overloading, inheritance, and access controls in the context of class structures." },
            { coNumber: "CO3", coDefinition: "Implement the concept of interfaces and demonstrate the process of importing packages in Java." },
            { coNumber: "CO4", coDefinition: "Formulate application designs incorporating file handling, exception management and multithreading." },
            { coNumber: "CO5", coDefinition: "Construct applications through the utilization of applets, and create intricate polygon designs, demonstrating creative and evaluative skills." }
        ],
    },
    {
        subject: "Industrial Training",
        subjectCode: "5CS7-30",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Participate in the projects in industries during his or her industrial training." },
            { coNumber: "CO2", coDefinition: "Describe use of advanced tools and techniques encountered during industrial training and visit." },
            { coNumber: "CO3", coDefinition: "Interact with industrial personnel and follow engineering practices and discipline prescribed in industry." },
            { coNumber: "CO4", coDefinition: "Develop awareness about general workplace behavior and build interpersonal and team skills." },
            { coNumber: "CO5", coDefinition: "Prepare professional work reports and presentations." }
        ],
    },
    {
        subject: "Digital Image Processing",
        subjectCode: "6CS3-01",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall basic facts and concepts of digital image, digital image representation and need of digital image processing." },
            { coNumber: "CO2", coDefinition: "Explain ideas or concepts of different type of transformation and filtering techniques on an image." },
            { coNumber: "CO3", coDefinition: "Determine the various noise models and apply the values for restoration and degradation models." },
            { coNumber: "CO4", coDefinition: "Illustrating various image compression techniques." },
            { coNumber: "CO5", coDefinition: "Validating different Image Transformation and Segmentation Techniques." }
        ],
    },
    {
        subject: "Machine Learning",
        subjectCode: "6CS4-02",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand key machine learning concepts, objectives, and the differences between learning paradigms with their practical applications." },
            { coNumber: "CO2", coDefinition: "Apply supervised learning algorithms like Linear Regression, Naïve Bayes, Decision Trees, and SVMs to real-world classification and regression tasks." },
            { coNumber: "CO3", coDefinition: "Analyze unsupervised learning methods such as clustering and association rule mining to identify hidden data patterns." },
            { coNumber: "CO4", coDefinition: "Evaluate feature extraction and selection techniques, including PCA and feature ranking, to improve model efficiency and accuracy." },
            { coNumber: "CO5", coDefinition: "Design machine learning models using semi-supervised, reinforcement, and deep learning approaches, including neural networks and recommendation systems." }
        ],
    },
    {
        subject: "Information Security System",
        subjectCode: "6CS4-03",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Identify services that enhance the security and its mechanism." },
            { coNumber: "CO2", coDefinition: "Explain and apply modern block cipher with modes. Classify security attacks on information over network. Describe and apply classical encryption techniques." },
            { coNumber: "CO3", coDefinition: "Compare conventional encryption algorithms & public key cryptography, and design Encryption algorithm to provide the Integration and confidentiality of a message." },
            { coNumber: "CO4", coDefinition: "Understand the concept of hash function with application and message authentication code in security system." },
            { coNumber: "CO5", coDefinition: "Classify key management schemes and discuss web security and transport level security protocols." }
        ],
    },
    {
        subject: "Computer Architecture and Organization",
        subjectCode: "6CS4-04",
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
        subjectCode: "6CS4-05",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand and use various types of logic and knowledge representation schemes." },
            { coNumber: "CO2", coDefinition: "Implement AI concepts in game playing including minimax algorithm and alpha-beta pruning." },
            { coNumber: "CO3", coDefinition: "Use of logic, calculus, theorem formulation to enhance knowledge and reasoning." },
            { coNumber: "CO4", coDefinition: "Evaluate the various Supervised and Unsupervised Learning algorithms using appropriate Dataset." },
            { coNumber: "CO5", coDefinition: "Design and evaluate Deep learning Algorithms." }
        ],
    },
    {
        subject: "Cloud Computing",
        subjectCode: "6CS4-06",
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
        subject: "E Commerce & ERP",
        subjectCode: "6CS5-13",
     semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Describe the Ecommerce and ERP, delving into their respective requisites and the infrastructure needed to support them." },
            { coNumber: "CO2", coDefinition: "Examine the necessary infrastructure and software prerequisites to ensure the operational functionality of Ecommerce portals." },
            { coNumber: "CO3", coDefinition: "Elaborate on the operational mechanisms of the Internet, web portals, and Ecommerce portals, while highlighting the essential infrastructure requirements." },
            { coNumber: "CO4", coDefinition: "Apply the effectiveness of tools and techniques in the realm of digital marketing, considering their resultant impact." },
            { coNumber: "CO5", coDefinition: "Construct an XML-based database and formulate an XML application tailored for storing data." }
        ],
    },
    {
        subject: "Digital Image Processing Lab",
        subjectCode: "6CS4-21",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply image enhancement operation and image Arithmetic Operations on a given image." },
            { coNumber: "CO2", coDefinition: "Demonstrate image restoration and histogram processing on images." },
            { coNumber: "CO3", coDefinition: "Distinguish and compare various Noise and filtering algorithms on images." },
            { coNumber: "CO4", coDefinition: "Illustrate image restoration and segmentation techniques on an image." },
            { coNumber: "CO5", coDefinition: "Apply pattern recognition techniques on images using features extraction." }
        ],
    },
    {
        subject: "Machine Learning Lab",
        subjectCode: "6CS4-22",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the mathematical and statistical prospective of machine learning algorithms through python programming." },
            { coNumber: "CO2", coDefinition: "Evaluate the machine learning models pre-processed through various feature engineering algorithms by python programming." },
            { coNumber: "CO3", coDefinition: "Design and evaluate the supervised models through python in built functions." },
            { coNumber: "CO4", coDefinition: "Design and evaluate the unsupervised models through python in built functions." },
            { coNumber: "CO5", coDefinition: "Understand the basic concepts of deep neural network model and design the same." }
        ],
    },
    {
        subject: "Python Lab",
        subjectCode: "6CS4-23",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "List various data types in python and use them to solve basic python programs." },
            { coNumber: "CO2", coDefinition: "Describe Conditional statements and Looping structures concepts in python and apply these to create searching and sorting programs." },
            { coNumber: "CO3", coDefinition: "Explain usage of List, Tuples, Set, Dictionary and Strings and use these to solve programming problems in different ways." },
            { coNumber: "CO4", coDefinition: "Discuss file handling concepts and apply them to create basic data handling programs." },
            { coNumber: "CO5", coDefinition: "Understand various built-in python functions and formulate user-defined functions." }
        ],
    },
    {
        subject: "Mobile Application Development Lab",
        subjectCode: "6CS4-24",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Construct fundamental concepts of Android programming." },
            { coNumber: "CO2", coDefinition: "Construct diverse Android applications focusing on layouts and immersive interactive interfaces." },
            { coNumber: "CO3", coDefinition: "Build Android applications centered around server less mobile databases such as SQLite." },
            { coNumber: "CO4", coDefinition: "Demonstrate an application that records data onto the SD card." },
            { coNumber: "CO5", coDefinition: "Design a compact Android Studio application." }
        ],
    },
    {
        subject: "Internet of Things",
        subjectCode: "7CS4-01",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the constituent Components within IoT Architecture." },
            { coNumber: "CO2", coDefinition: "Construct connections between Devices and Sensors, applying theoretical understanding." },
            { coNumber: "CO3", coDefinition: "Implement wireless data transmission techniques among various devices." },
            { coNumber: "CO4", coDefinition: "Evaluate and select appropriate IoT Devices and Sensors based on provided Case Studies." },
            { coNumber: "CO5", coDefinition: "Execute the upload and download of sensor data on cloud and server, culminating in a comprehensive and proficient utilization demonstration." }
        ],
    },
    {
        subject: "Environmental Engineering & Disaster Management",
        subjectCode: "7AG6-60",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall key terminologies, sources of water, types of waste, pollutants, and related environmental standards." },
            { coNumber: "CO2", coDefinition: "Explain the importance of safe water supply, drinking water standards, domestic and solid waste management systems." },
            { coNumber: "CO3", coDefinition: "Apply BIS standards and design principles to assess pollution control and sanitation methods in real-life scenarios." },
            { coNumber: "CO4", coDefinition: "Analyze the requirements and design considerations for water supply systems and wastewater disposal in urban and rural contexts." },
            { coNumber: "CO5", coDefinition: "Evaluate the effects of pollutants and waste disposal practices on human health and the environment." }
        ],
    },
    {
        subject: "Internet of Things Lab",
        subjectCode: "7CS4-21",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the constituent Components within IoT Architecture." },
            { coNumber: "CO2", coDefinition: "Construct connections between Devices and Sensors, applying theoretical understanding." },
            { coNumber: "CO3", coDefinition: "Implement wireless data transmission techniques among various devices." },
            { coNumber: "CO4", coDefinition: "Evaluate and select appropriate IoT Devices and Sensors based on provided Case Studies." },
            { coNumber: "CO5", coDefinition: "Execute the upload and download of sensor data on cloud and server, culminating in a comprehensive and proficient utilization demonstration." }
        ],
    },
    {
        subject: "Cyber Security Lab",
        subjectCode: "7CS4-22",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Utilizing substitution and transposition techniques to achieve encryption and decryption of plain text, demonstrating comprehension and practical application." },
            { coNumber: "CO2", coDefinition: "Design a solution for Key Exchange problem and understand the general attacks on system." },
            { coNumber: "CO3", coDefinition: "Analyse the data transferred in client server communication and working of various network protocol." },
            { coNumber: "CO4", coDefinition: "Understand security-based tools like Wire shark, tcp dump, rootkits, snort etc." },
            { coNumber: "CO5", coDefinition: "Apply encryption, decryption techniques for secure data transmission, and digital signature generation, demonstrating understanding and application." }
        ],
    },
    {
        subject: "Industrial Training Seminar",
        subjectCode: "7CS7-30",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply the knowledge to work on any project in computing." },
            { coNumber: "CO2", coDefinition: "Know how to write reports in industrial technical seminar." },
            { coNumber: "CO3", coDefinition: "Develop the communication skills to work with a group of workers and learn the proper behavior in a working environment." },
            { coNumber: "CO4", coDefinition: "Know how to work with multi-tasking professionals and multidisciplinary team." },
            { coNumber: "CO5", coDefinition: "Develop skills to improve presentation and other soft" }
        ],
    },
    {
        subject: "Technical Seminar",
        subjectCode: "7CS7-40",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define the motivation for any topic of interest and describe" },
            { coNumber: "CO2", coDefinition: "List relevant sources for a literature survey and construct a document based on technical publications." },
            { coNumber: "CO3", coDefinition: "Analyse the proof-of-concept and recognize patterns in" },
            { coNumber: "CO4", coDefinition: "Discuss effective presentation techniques and enhance soft skills." },
            { coNumber: "CO5", coDefinition: "Apply new and recent technology (e.g. Latex) to translate" }
        ],
    },
    {
        subject: "Big Data Analytics",
        subjectCode: "8CS4-01",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the fundamental concepts of Big Data, and hadoop ecosystem components, architecture of Hadoop Distributed File System (HDFS) and MapReduce framework." },
            { coNumber: "CO2", coDefinition: "Develop MapReduce programs (WordCount, Weather Data Analysis) and write Pig Latin scripts/Hive queries for big data processing." },
            { coNumber: "CO3", coDefinition: "Analyze performance of various Hadoop configurations (Local, Pseudo-distributed, Fully Distributed modes) and optimize MapReduce jobs using Combiners, Partitioners, and Custom writable." },
            { coNumber: "CO4", coDefinition: "Evaluate the suitability of Big Data tools (Pig vs. Hive) for different data processing scenarios and critique the efficiency of HDFS storage strategies." },
            { coNumber: "CO5", coDefinition: "Design & implement an end-to-end Big Data solution using Hadoop ecosystem tools (HDFS, MapReduce, Pig, Hive) to process, analyze, and visualize a real-world dataset." }
        ],
    },
    {
        subject: "Soft Computing",
        subjectCode: "8EE6-60",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply fundamental fuzzy set theory and approximate reasoning to handle uncertainty in real-world decision-making scenarios." },
            { coNumber: "CO2", coDefinition: "Implement various neural network architectures (e.g., multilayer perceptrons, radial basis function networks) for pattern recognition and predictive modelling." },
            { coNumber: "CO3", coDefinition: "Analyze evolutionary algorithms (e.g., Genetic Algorithms, Particle Swarm Optimization) to solve optimization and search problems under complex constraints." },
            { coNumber: "CO4", coDefinition: "Evaluate the effectiveness of hybrid soft computing techniques (e.g., neuro-fuzzy systems, genetic-fuzzy systems) in solving intricate real-world tasks." },
            { coNumber: "CO5", coDefinition: "Design and develop innovative soft computing solutions by integrating fuzzy logic, neural networks, and evolutionary algorithms for advanced data-driven applications." }
        ],
    },
    {
        subject: "Big Data Analytics Lab",
        subjectCode: "8CS4-21",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Summarize and implement the basic data structure algorithms like Linked list, stack, queue, set and map in Java." },
            { coNumber: "CO2", coDefinition: "Illustrate the knowledge and implement different file management in Hadoop." },
            { coNumber: "CO3", coDefinition: "Discuss the example of map reduces and develop the data application using variety of system." },
            { coNumber: "CO4", coDefinition: "Evaluate and perform different operation on Data using Pig Latin." },
            { coNumber: "CO5", coDefinition: "Illustrate different operations on relations and databases using Hive." }
        ],
    },
    {
        subject: "Software Testing & Validation Lab",
        subjectCode: "8CS4-22",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the Automation Testing Approach using various tool." },
            { coNumber: "CO2", coDefinition: "Analyse & discuss the performance of different websites using JMeter." },
            { coNumber: "CO3", coDefinition: "Calculate the coverage analysis of programs using Eclemma tool." },
            { coNumber: "CO4", coDefinition: "Describe & calculate the mutation score for various programs using jumble testing tool." },
            { coNumber: "CO5", coDefinition: "Generate Test sequences and compare using Selenium tool for different websites." }
        ],
    },
    {
        subject: "Project",
        subjectCode: "8CS7-50",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Carry out a substantial research-based project which will provide the solution to the society." },
            { coNumber: "CO2", coDefinition: "Find out the need for practical implementation of the solution." },
            { coNumber: "CO3", coDefinition: "Provide design solutions by considering ethical issues." },
            { coNumber: "CO4", coDefinition: "Exhibit the solutions to the stakeholders." },
            { coNumber: "CO5", coDefinition: "Illustration of ideas using respective tools." }
        ],
    },
    {
        subject: "Advanced Engineering Mathematics",
        subjectCode: "3CSR2-01",
         semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall and define fundamental concepts related to probability, probabilistic models, and random variables, including their basic rules and principles." },
            { coNumber: "CO2", coDefinition: "Explain and interpret statistical methods for probability distributions, differentiating between discrete and continuous random variables." },
            { coNumber: "CO3", coDefinition: "Formulate mathematical models for industrial problems using linear programming and solve them using graphical methods." },
            { coNumber: "CO4", coDefinition: "Analyze linear programming problems to identify the most suitable optimization technique and apply it for effective solutions." },
            { coNumber: "CO5", coDefinition: "Evaluate classical methods for solving nonlinear and linear optimization problems, assessing the efficiency and optimality of the solutions." },
        ],
    },
    {
        subject: "Technical Communication",
        subjectCode: "3CSR1-02",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the process of technical communication in terms of Listening, Speaking, Reading and Writing." },
            { coNumber: "CO2", coDefinition: "Apply the knowledge of Technical Materials/Texts in various technical documents." },
            { coNumber: "CO3", coDefinition: "Identify writing skills in various documents of technical and business communication." },
            { coNumber: "CO4", coDefinition: "Implement the knowledge of technical communication in framing the Technical Reports, articles and their formats." },
            { coNumber: "CO5", coDefinition: "Create technical and business documents, edit and proofread them." },
        ],
    },
    {
        subject: "Digital Electronics",
        subjectCode: "3CSR3-04",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define basic principles of digital circuits and different number systems." },
            { coNumber: "CO2", coDefinition: "Distinguish logic expressions and circuits using Boolean laws and K-map." },
            { coNumber: "CO3", coDefinition: "Implement combinational circuits for practical digital logic applications." },
            { coNumber: "CO4", coDefinition: "Compare sequential circuit components and their functionality using state tables, transition diagrams, and timing characteristics." },
            { coNumber: "CO5", coDefinition: "Develop optimized digital logic circuits using various minimization techniques, combinational and sequential circuit design methodologies, and implement them using different logic families." },
        ],
    },
    {
        subject: "Data Structures and Algorithms",
        subjectCode: "3CSR4-05",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define fundamental concepts of stacks, queues, linked lists, trees, graphs, and hashing, along with their representations and basic operations." },
            { coNumber: "CO2", coDefinition: "Describe the applications of stacks, queues, and linked lists in problem-solving, including infix to postfix conversion, round-robin scheduling, and linked list operations." },
            { coNumber: "CO3", coDefinition: "Implement searching (sequential and binary search) and sorting techniques (bubble sort, quick sort, merge sort, heap sort, etc.) for efficient data management." },
            { coNumber: "CO4", coDefinition: "Analyze tree and graph algorithms, including tree traversals, binary search trees, B-trees, AVL trees, and graph traversal techniques (BFS & DFS)." },
            { coNumber: "CO5", coDefinition: "Validate various hashing techniques, collision resolution methods, and shortest path algorithms (Dijkstra’s algorithm, Prim’s & Kruskal’s algorithms) for optimized data retrieval." },
        ],
    },
    {
        subject: "Object Oriented Programming",
        subjectCode: "3CSR4-06", 
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define the basic concepts of object-oriented programming constructs using C++ language." },
            { coNumber: "CO2", coDefinition: "Inferring the knowledge of OOP features into real world problems." },
            { coNumber: "CO3", coDefinition: "Apply OOP features to solve real problems using C++ programming language." },
            { coNumber: "CO4", coDefinition: "Analyze and compare various OOP techniques with other programming paradigms." },
            { coNumber: "CO5", coDefinition: "Create applications using file handling, templates, exception handling & OOP features in C++." },
        ],
    },
    {
        subject: "Software Engineering",
        subjectCode: "3CSR4-07",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define fundamental concepts of software engineering, including software life-cycle models, requirements specification, and verification & validation techniques." },
            { coNumber: "CO2", coDefinition: "Describe software project management processes, such as resource estimation, effort estimation models, risk analysis, and project scheduling." },
            { coNumber: "CO3", coDefinition: "Implement requirement analysis techniques using structured and object-oriented approaches, including FSM models, data flow diagrams, and software prototyping." },
            { coNumber: "CO4", coDefinition: "Analyze software design principles, modular design techniques, and documentation strategies for effective software system development." },
            { coNumber: "CO5", coDefinition: "Validate object-oriented analysis and design methodologies, including UML-based modeling, class and object relationships." },
        ],
    },
    {
        subject: "Data Structures & Algorithms Lab",
        subjectCode: "3CSR4-21",
        semester: "Semester 3", 
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize fundamental Stack and Queue operations to address a range of engineering problems." },
            { coNumber: "CO2", coDefinition: "Relate the principles of Linked Lists to offer solutions for computer-based issues." },
            { coNumber: "CO3", coDefinition: "Discover different Search and Sorting methods to rationalize their application in diverse scenarios." },
            { coNumber: "CO4", coDefinition: "Devise diverse operations on non-linear data structures such as trees and graphs." },
            { coNumber: "CO5", coDefinition: "Propose a solution for a provided engineering problem utilizing Stack, Queue, Linked List, Tree and Sorting." },
        ],
    },
    {
        subject: "Object Oriented Programming Lab",
        subjectCode: "3CSR4-22",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Create and explain Basic C++ Program using i/o variables and structures." },
            { coNumber: "CO2", coDefinition: "Apply object-oriented programming concepts using class and objects." },
            { coNumber: "CO3", coDefinition: "Design and assess the classes for code reuse." },
            { coNumber: "CO4", coDefinition: "Analysis and apply the generic classes concepts in programming problem." },
            { coNumber: "CO5", coDefinition: "Illustrate and evaluate the file Input Output mechanisms." },
        ],
    },
    {
        subject: "Software Engineering Lab",
        subjectCode: "3CSR4-23",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Observe the requirements specification, function-oriented design using Software Analysis and Software Design of given project and relate the use of Appropriate CASE tools and other tools in the software life cycle." },
            { coNumber: "CO2", coDefinition: "Translate Software Requirements Specification (SRS) for a given problem in IEEE template." },
            { coNumber: "CO3", coDefinition: "Select DFD model (level-0, level-1 DFD and Data dictionary) of the project." },
            { coNumber: "CO4", coDefinition: "Prepare all Structure and Behavior UML diagram of the given project." },
            { coNumber: "CO5", coDefinition: "Prepare all Structure and Behavior UML diagram of the given project." },
        ],
    },
    {
        subject: "Digital Electronics Lab",
        subjectCode: "3CSR4-24",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Demonstrate the basics of logic gates." },
            { coNumber: "CO2", coDefinition: "Demonstrate basic combinational circuits and verify their functionalities." },
            { coNumber: "CO3", coDefinition: "Apply the working mechanism and design guidelines of different sequential circuits in the digital system design." },
            { coNumber: "CO4", coDefinition: "Construct different types of counters for real time digital systems." },
            { coNumber: "CO5", coDefinition: "Distinguish the different types of shift registers." },
        ],
    },
    {
        subject: "Industrial Training",
        subjectCode: "3CSR7-30",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Compose an interest in research-oriented fields and develop the ability to research for literature and prepare brief report." },
            { coNumber: "CO2", coDefinition: "Identify the skills, competencies and points of view needed by professionals in the field most closely related to the course." },
            { coNumber: "CO3", coDefinition: "Discuss and identify about topics of current intellectual importance." },
            { coNumber: "CO4", coDefinition: "Develop the communication skills and awareness about the industrial environment." },
            { coNumber: "CO5", coDefinition: "Revise Skill development for presentation." },
        ],
    },
    {
        subject: "Discrete Mathematics Structure",
        subjectCode: "4CSR2-01", 
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall basic concepts of sets, relations, functions, and discrete structures." },
            { coNumber: "CO2", coDefinition: "Interpret and explain principles of logic to understand and validate mathematical arguments." },
            { coNumber: "CO3", coDefinition: "Apply appropriate techniques of set theory, relations and combinatorics to solve problems." },
            { coNumber: "CO4", coDefinition: "Classify algebraic structures such as groups, rings, and fields to solve complex algebraic problems." },
            { coNumber: "CO5", coDefinition: "Evaluate solutions of real-world problems using graph theory, standard results and graph algorithms." },
        ],
    },
    {
        subject: "Managerial Economics and Financial Accounting",
        subjectCode: "4CSR1-03",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize and describe the fundamental concepts of Economics and Financial Management and define the meaning of national income, demand, supply, cost, market structure, and balance sheet." },
            { coNumber: "CO2", coDefinition: "Calculate and Classify the domestic product, national product and elasticity of price on demand and supply." },
            { coNumber: "CO3", coDefinition: "Draw the cost graphs, revenue graphs and forecast the impact of change in price in various Perfect as well as imperfect market structures." },
            { coNumber: "CO4", coDefinition: "Compare the financial statements to interpret the financial position of the firm and evaluate the project investment decisions." },
            { coNumber: "CO5", coDefinition: "" },
        ],
    },
    {
        subject: "Microprocessor & Interfaces",
        subjectCode: "4CSR3-04",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Discuss working of functional components of computer system." },
            { coNumber: "CO2", coDefinition: "Demonstrate an overall functional structure of the Microprocessor." },
            { coNumber: "CO3", coDefinition: "Explain how interrupts are used to implement I/O control and data transfers." },
            { coNumber: "CO4", coDefinition: "To learn the design aspects of I/O and Memory Interfacing circuits." },
            { coNumber: "CO5", coDefinition: "Implement their practical approach through laboratory experiments." },
        ],
    },
    {
        subject: "Database Management System",
        subjectCode: "4CSR4-05",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Identify the fundamental elements of relational database management systems." },
            { coNumber: "CO2", coDefinition: "Design and explain the basic concepts of relational data model, entity-relationship model, and relational database design." },
            { coNumber: "CO3", coDefinition: "Apply the relational database theory to formulate basic and advanced SQL queries and relational algebra expressions for the queries." },
            { coNumber: "CO4", coDefinition: "Identify the use of normalization and functional dependency in database design." },
            { coNumber: "CO5", coDefinition: "Classify the implementation details of Concurrency control protocols and discuss various database recovery methods." },
        ],
    },
    {
        subject: "Theory of Computation",
        subjectCode: "4CSR4-06",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define fundamental concepts of finite automata, regular expressions, and grammars in formal language processing and un-decidable problems." },
            { coNumber: "CO2", coDefinition: "Describe PD, Context Free Grammar, and Turing machines as language acceptors and transducers, along with derivation trees in context-free grammars." },
            { coNumber: "CO3", coDefinition: "Implement fundamental concepts of Finite Automata and Regular Expressions, including Finite State Machines (FSMs) context-free grammars to determine language recognition and processing." },
            { coNumber: "CO4", coDefinition: "Analyze formal languages using the Pumping Lemma, Myhill-Nerode theorem, closure properties, and problems related to CNF and GNF, including the membership problem, to classify languages." },
            { coNumber: "CO5", coDefinition: "Validate computational problems in terms of computability, complexity classes (P, NP, NP-complete), and decidability, along with the hierarchy of formal languages, properties of RL and REL, and the Chomsky hierarchy." },
        ],
    },
    {
        subject: "Data Communication and Computer Networks",
        subjectCode: "4CSR4-07",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Able to identify the principles of layered protocol architecture; be able to recognize and generalize the system functions in the correct protocol layer and further illustrate how the layers interact." },
            { coNumber: "CO2", coDefinition: "State and cite mathematical problems for data-link and network protocols." },
            { coNumber: "CO3", coDefinition: "Use network layer protocols and calculate number of subnets required for a network." },
            { coNumber: "CO4", coDefinition: "Compute the reliability of data transfer over transport layer by lossy channel bit errors problem." },
            { coNumber: "CO5", coDefinition: "Select and plan for common services, system services, such as name and address lookups, and communications applications." },
        ],
    },
    {
        subject: "Microprocessor & Interfaces Lab",
        subjectCode: "4CSR4-21",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Analyze the fundamentals of assembly level programming" },
            { coNumber: "CO2", coDefinition: "Apply interfacing concept between input and output devices." },
            { coNumber: "CO3", coDefinition: "Elaborate the interfacing of various other devices with microprocessor." },
            { coNumber: "CO4", coDefinition: "Compose the various program on different problems using Assembly Language Programming." },
            { coNumber: "CO5", coDefinition: "Implement standard microprocessor real time interfaces including digital-to-analog converters and analog-to-digital Converters." },
        ],
    },
    {
        subject: "Database Management System Lab",
        subjectCode: "4CSR4-22",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Create and execute a database schema for a specified problem domain." },
            { coNumber: "CO2", coDefinition: "Manage integrity constraints within a database using a relational database management system (RDBMS)." },
            { coNumber: "CO3", coDefinition: "Construct and devise a graphical user interface (GUI) application using a fourth-generation programming language (3GL)." },
            { coNumber: "CO4", coDefinition: "Composing PL/SQL code encompassing stored procedures, stored functions, cursors, and packages." },
            { coNumber: "CO5", coDefinition: "Produce SQL and Procedural interfaces to SQL comprehensively." },
        ],
    },
    {
        subject: "Network Programming Lab",
        subjectCode: "4CSR4-23",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Identify the functioning of various networking equipment’s." },
            { coNumber: "CO2", coDefinition: "Illustrate the LAN Installation techniques and Configurations techniques." },
            { coNumber: "CO3", coDefinition: "Solving various Error correcting techniques and framing methods." },
            { coNumber: "CO4", coDefinition: "Practise the programs for client and server involving UDP/TCP sockets using socket programming." },
            { coNumber: "CO5", coDefinition: "Estimate the communication between client and server using Network Simulator." },
        ],
    },
    {
        subject: "Linux Shell Programming Lab",
        subjectCode: "4CSR4-24",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Summarize the concepts and commands in UNIX." },
            { coNumber: "CO2", coDefinition: "Construct the directory layout of a typical UNIX system, maintain, and secure UNIX directories and files." },
            { coNumber: "CO3", coDefinition: "Illustrate the knowledge to use the several shell quoting mechanisms correctly." },
            { coNumber: "CO4", coDefinition: "Construct regular expression using filters and various commands to express the patterns." },
            { coNumber: "CO5", coDefinition: "Write simple scripts to develop basic command output." },
        ],
    },
    {
        subject: "Java Lab",
        subjectCode: "4CSR4-25",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Express and restate fundamentals of java, and tools for program designing environments." },
            { coNumber: "CO2", coDefinition: "Construct classes and implement the principles of method overloading, inheritance, and access controls within those classes." },
            { coNumber: "CO3", coDefinition: "Develop Java packages and incorporate the concept of interfaces, along with importing these packages in Java." },
            { coNumber: "CO4", coDefinition: "Formulate the application by managing file operations, handling exceptions, and implementing threads." },
            { coNumber: "CO5", coDefinition: "Create applications utilizing Java applets and design various polygons. This task involves the application of knowledge and the synthesis of design skills." },
        ],
    },
    {
        subject: "Information Theory & Coding",
        subjectCode: "5CSR3-01",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Solve the theory algebra and linear algebra in source coding." },
            { coNumber: "CO2", coDefinition: "Create channel performance using information theory." },
            { coNumber: "CO3", coDefinition: "Manipulate linear block codes for error detection and error correction." },
            { coNumber: "CO4", coDefinition: "Modify Cyclic codes for error detection and error correction." },
            { coNumber: "CO5", coDefinition: "Discover convolution codes for performance analysis." },
        ],
    },
    {
        subject: "Compiler Design",
        subjectCode: "5CSR4-02",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Explain the fundamental concepts, structure, and functions of a compiler, and distinguish different phases of compilation." },
            { coNumber: "CO2", coDefinition: "Apply lexical analysis techniques to construct finite automata and recognize tokens using regular expressions." },
            { coNumber: "CO3", coDefinition: "Implement syntax and semantic analysis using parsing techniques, context-free grammars, and symbol tables." },
            { coNumber: "CO4", coDefinition: "Develop intermediate code representations and perform code optimization techniques to improve execution efficiency." },
            { coNumber: "CO5", coDefinition: "Implement simple compiler components using code generation, error handling, and optimization strategies." },
        ],
    },
    {
        subject: "Operating Systems",
        subjectCode: "5CSR4-03",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the evolution, objectives, structure, and functionalities of operating systems, including the basic concepts of processes and files." },
            { coNumber: "CO2", coDefinition: "Explain memory management techniques such as paging, segmentation, page replacement algorithms, and virtual memory handling through case studies." },
            { coNumber: "CO3", coDefinition: "Apply processor and process management techniques including inter-process communication, scheduling, mutual exclusion, and multithreading." },
            { coNumber: "CO4", coDefinition: "Analyze deadlock conditions and device management using resource allocation models and disk scheduling algorithms." },
            { coNumber: "CO5", coDefinition: "Evaluate file management techniques—such as directory structures, access methods, file security—in UNIX, Linux, and Mobile OS environments." },
        ],
    },
    {
        subject: "Computer Graphics & Multimedia",
        subjectCode: "5CSR4-04",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the basics of computer graphics, including graphics standards and fundamental concepts." },
            { coNumber: "CO2", coDefinition: "Explain and analyze various algorithms for scan conversion and area filling of basic geometrical primitives." },
            { coNumber: "CO3", coDefinition: "Illustrate and implement algorithms for 2D transformations and clipping." },
            { coNumber: "CO4", coDefinition: "Compare different color models in computer graphics and develop animated motions using OpenGL." },
            { coNumber: "CO5", coDefinition: "Assess the fundamental concepts of parallel and perspective projections and evaluate various algorithms for 3D transformations." },
        ],
    },
    {
        subject: "Analysis of Algorithm",
        subjectCode: "5CSR4-05",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall fundamental algorithmic concepts such as complexity, asymptotic notations and different types of algorithm design paradigms." },
            { coNumber: "CO2", coDefinition: "Describe the conditions under which appropriate algorithm design approach is used to solve a particular problem." },
            { coNumber: "CO3", coDefinition: "Implement appropriate algorithm design techniques to solve computational problems and compare their efficiency." },
            { coNumber: "CO4", coDefinition: "Analyze and assess the time and space complexity of algorithms, identify potential areas for optimization based on various factors and evaluate their performance." },
            { coNumber: "CO5", coDefinition: "Contribute to the field of algorithm design by proposing new techniques or improvements in existing techniques." },
        ],
    },
    {
        subject: "Wireless Communication (Elective)",
        subjectCode: "5CSR5-11",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognizing Mobile Radio Propagation, Fading, Diversity Concepts and Channel Modeling." },
            { coNumber: "CO2", coDefinition: "Relate the concept of cellular system and their technical challenges." },
            { coNumber: "CO3", coDefinition: "Correlate the Digital Signalling concept with fading channels." },
            { coNumber: "CO4", coDefinition: "Estimate the equalization techniques in wireless communication and error probability in faded channels." },
            { coNumber: "CO5", coDefinition: "Summarize the impacts of Design Parameters, Beam Forming and MIMO Systems in wireless communication." },
        ],
    },
    {
        subject: "Human Computer Interaction (Elective)",
        subjectCode: "5CSR5-12",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Explain the evolution of HCI, usability concepts, and its relationship with software engineering." },
            { coNumber: "CO2", coDefinition: "Apply model-based design approaches and laws such as GOMS, Fitts’ law, and Hick-Hyman’s law for interface evaluation." },
            { coNumber: "CO3", coDefinition: "Analyze usability guidelines, heuristic evaluation techniques, and user interaction models to improve interface designs." },
            { coNumber: "CO4", coDefinition: "Design interactive systems using task modeling techniques (HTA, CTT), dialogue design, and formal modeling methods." },
            { coNumber: "CO5", coDefinition: "Conduct empirical research in HCI, including experimental design, usability testing, and data analysis." },
        ],
    },
    {
        subject: "Computer Graphics & Multimedia Techniques Lab",
        subjectCode: "5CSR4-21",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand and apply the various predefined functions for drawing various geometric shapes." },
            { coNumber: "CO2", coDefinition: "Explain and analyze various algorithms to scan, convert the basic geometrical primitives, transformations, Area filling, clipping." },
            { coNumber: "CO3", coDefinition: "Explain, illustrate and design various kinds of viewing and Projections." },
            { coNumber: "CO4", coDefinition: "Explain, illustrate and design various kinds of clipping techniques." },
            { coNumber: "CO5", coDefinition: "Define, explain and apply various concepts associated with computer graphics to develop the animated game." },
        ],
    },
    {
        subject: "Compiler Design Lab",
        subjectCode: "5CSR4-22",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the various forms of tokens and lexemes." },
            { coNumber: "CO2", coDefinition: "Calculate scanning by using the concept of finite state automation, parse." },
            { coNumber: "CO3", coDefinition: "Arrange intermediate code for various statements in a programming language concept." },
            { coNumber: "CO4", coDefinition: "Organize the storage for heap structure." },
            { coNumber: "CO5", coDefinition: "Construct various language patterns using flex tools they are also able to parse." },
        ],
    },
    {
        subject: "Analysis of Algorithm Lab",
        subjectCode: "5CSR4-23",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Observe the complexity of fundamental algorithms." },
            { coNumber: "CO2", coDefinition: "Relate sorting algorithms in real-world scenarios." },
            { coNumber: "CO3", coDefinition: "Construct a binary search tree using assorted algorithms." },
            { coNumber: "CO4", coDefinition: "Test algorithms for finding minimum spanning trees." },
            { coNumber: "CO5", coDefinition: "Appraise algorithms for pattern matching." },
        ],
    },
    {
        subject: "Advance Java Lab",
        subjectCode: "5CSR4-24",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the foundational principles of Java programming and identify tools used in program design environments." },
            { coNumber: "CO2", coDefinition: "Utilize the principles of overloading, inheritance, and access controls in the context of class structures." },
            { coNumber: "CO3", coDefinition: "Implement the concept of interfaces and demonstrate the process of importing packages in Java." },
            { coNumber: "CO4", coDefinition: "Formulate application designs incorporating file handling, exception management and multithreading." },
            { coNumber: "CO5", coDefinition: "Construct applications through the utilization of applets, and create intricate polygon designs, demonstrating creative and evaluative skills." },
        ],
    },
    {
        subject: "Industrial Training (Postgraduate / Seminar)",
        subjectCode: "5CSR7-30",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Participate in the projects in industries during his or her industrial training." },
            { coNumber: "CO2", coDefinition: "Describe use of advanced tools and techniques encountered during industrial training and visit." },
            { coNumber: "CO3", coDefinition: "Interact with industrial personnel and follow engineering practices and discipline prescribed in industry." },
            { coNumber: "CO4", coDefinition: "Develop awareness about general workplace behavior and build interpersonal and team skills." },
            { coNumber: "CO5", coDefinition: "Prepare professional work reports and presentations." },
        ],
    },
    {
        subject: "Digital Image Processing",
        subjectCode: "6CSR3-01",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall basic facts and concepts of digital image, digital image representation and need of digital image processing." },
            { coNumber: "CO2", coDefinition: "Explain ideas or concepts of different type of transformation and filtering techniques on an image." },
            { coNumber: "CO3", coDefinition: "Determine the various noise models and apply the values for restoration and degradation models." },
            { coNumber: "CO4", coDefinition: "Illustrating various image compression techniques." },
            { coNumber: "CO5", coDefinition: "Validating different Image Transformation and Segmentation Techniques." },
        ],
    },
    {
        subject: "Machine Learning",
        subjectCode: "6CSR4-02",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand key machine learning concepts, objectives, and the differences between learning paradigms with their practical applications." },
            { coNumber: "CO2", coDefinition: "Apply supervised learning algorithms like Linear Regression, Naïve Bayes, Decision Trees, and SVMs to real-world classification and regression tasks." },
            { coNumber: "CO3", coDefinition: "Analyze unsupervised learning methods such as clustering and association rule mining to identify hidden data patterns." },
            { coNumber: "CO4", coDefinition: "Evaluate feature extraction and selection techniques, including PCA and feature ranking, to improve model efficiency and accuracy." },
            { coNumber: "CO5", coDefinition: "Design machine learning models using semi-supervised, reinforcement, and deep learning approaches, including neural networks and recommendation systems." },
        ],
    },
    {
        subject: "Information Security System",
        subjectCode: "6CSR4-03",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Identify services that enhance the security and its mechanism." },
            { coNumber: "CO2", coDefinition: "Explain and apply modern block cipher with modes. Classify security attacks on information over network. Describe and apply classical encryption techniques." },
            { coNumber: "CO3", coDefinition: "Compare conventional encryption algorithms & public key cryptography, and design Encryption algorithm to provide the Integration and confidentiality of a message." },
            { coNumber: "CO4", coDefinition: "Understand the concept of hash function with application and message authentication code in security system." },
            { coNumber: "CO5", coDefinition: "Classify key management schemes and discuss web security and transport level security protocols." },
        ],
    },
    {
        subject: "Computer Architecture and Organization",
        subjectCode: "6CSR4-04",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the basic concepts of computer data representation, including data types, complements, and fixed-point and floating-point formats." },
            { coNumber: "CO2", coDefinition: "Explain the principles of register transfer, micro-operations, and the organization of a basic computer, including instruction codes and memory transfers." },
            { coNumber: "CO3", coDefinition: "Apply programming techniques in machine language and assembly language to implement arithmetic and logic operations on a basic computer." },
            { coNumber: "CO4", coDefinition: "Analyze the structure and functioning of the Central Processing Unit (CPU), including pipelining, vector processing, and addressing modes, to understand performance optimization." },
            { coNumber: "CO5", coDefinition: "Evaluate the effectiveness of memory organization techniques (e.g., cache, virtual memory) and input-output methods (e.g., DMA, interrupts) in designing efficient computer systems." },
        ],
    },
    {
        subject: "Artificial Intelligence",
        subjectCode: "6CSR4-05",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand and use various types of logic and knowledge representation schemes." },
            { coNumber: "CO2", coDefinition: "Implement AI concepts in game playing including minimax algorithm and alpha-beta pruning." },
            { coNumber: "CO3", coDefinition: "Use of logic, calculus, theorem formulation to enhance knowledge and reasoning." },
            { coNumber: "CO4", coDefinition: "Evaluate the various Supervised and Unsupervised Learning algorithms using appropriate Dataset." },
            { coNumber: "CO5", coDefinition: "Design and evaluate Deep learning Algorithms." },
        ],
    },
    {
        subject: "Cloud Computing",
        subjectCode: "6CSR4-06",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define key cloud computing concepts, characteristics, architecture and virtualization." },
            { coNumber: "CO2", coDefinition: "Explain the principles of cloud computing, its various services and virtualization concepts." },
            { coNumber: "CO3", coDefinition: "Apply cloud computing principles to design the architecture of a cloud computing environment." },
            { coNumber: "CO4", coDefinition: "Compare different cloud deployment models and analyze the security implications of cloud computing." },
            { coNumber: "CO5", coDefinition: "Assess the performance and scalability of different clouds and feasibility of migrating to the cloud." },
        ],
    },
    {
        subject: "E Commerce & ERP",
        subjectCode: "6CSR5-13",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Describe the Ecommerce and ERP, delving into their respective requisites and the infrastructure needed to support them." },
            { coNumber: "CO2", coDefinition: "Examine the necessary infrastructure and software prerequisites to ensure the operational functionality of Ecommerce portals." },
            { coNumber: "CO3", coDefinition: "Elaborate on the operational mechanisms of the Internet, web portals, and Ecommerce portals, while highlighting the essential infrastructure requirements." },
            { coNumber: "CO4", coDefinition: "Apply the effectiveness of tools and techniques in the realm of digital marketing, considering their resultant impact." },
            { coNumber: "CO5", coDefinition: "Construct an XML-based database and formulate an XML application tailored for storing data." },
        ],
    },
    {
        subject: "Digital Image Processing Lab",
        subjectCode: "6CSR4-21",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply image enhancement operation and image Arithmetic Operations on a given image." },
            { coNumber: "CO2", coDefinition: "Demonstrate image restoration and histogram processing on images." },
            { coNumber: "CO3", coDefinition: "Distinguish and compare various Noise and filtering algorithms on images." },
            { coNumber: "CO4", coDefinition: "Illustrate image restoration and segmentation techniques on an image." },
            { coNumber: "CO5", coDefinition: "Apply pattern recognition techniques on images using features extraction." },
        ],
    },
    {
        subject: "Machine Learning Lab",
        subjectCode: "6CSR4-22",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the mathematical and statistical prospective of machine learning algorithms through python programming." },
            { coNumber: "CO2", coDefinition: "Evaluate the machine learning models pre-processed through various feature engineering algorithms by python programming." },
            { coNumber: "CO3", coDefinition: "Design and evaluate the supervised models through python in built functions." },
            { coNumber: "CO4", coDefinition: "Design and evaluate the unsupervised models through python in built functions." },
            { coNumber: "CO5", coDefinition: "Understand the basic concepts of deep neural network model and design the same." },
        ],
    },
    {
        subject: "Python Lab",
        subjectCode: "6CSR4-23",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "List various data types in python and use them to solve basic python programs." },
            { coNumber: "CO2", coDefinition: "Describe Conditional statements and Looping structures concepts in python and apply these to create searching and sorting programs." },
            { coNumber: "CO3", coDefinition: "Explain usage of List, Tuples, Set, Dictionary and Strings and use these to solve programming problems in different ways." },
            { coNumber: "CO4", coDefinition: "Discuss file handling concepts and apply them to create basic data handling programs." },
            { coNumber: "CO5", coDefinition: "Understand various built-in python functions and formulate user-defined functions." },
        ],
    },
    {
        subject: "Mobile Application Development Lab",
        subjectCode: "6CSR4-24",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Construct fundamental concepts of Android programming." },
            { coNumber: "CO2", coDefinition: "Construct diverse Android applications focusing on layouts and immersive interactive interfaces." },
            { coNumber: "CO3", coDefinition: "Build Android applications centered around server less mobile databases such as SQLite." },
            { coNumber: "CO4", coDefinition: "Demonstrate an application that records data onto the SD card." },
            { coNumber: "CO5", coDefinition: "Design a compact Android Studio application." },
        ],
    },
    {
        subject: "Internet of Things",
        subjectCode: "7CSR4-01",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the constituent Components within IoT Architecture." },
            { coNumber: "CO2", coDefinition: "Construct connections between Devices and Sensors, applying theoretical understanding." },
            { coNumber: "CO3", coDefinition: "Implement wireless data transmission techniques among various devices." },
            { coNumber: "CO4", coDefinition: "Evaluate and select appropriate IoT Devices and Sensors based on provided Case Studies." },
            { coNumber: "CO5", coDefinition: "Execute the upload and download of sensor data on cloud and server, culminating in a comprehensive and proficient utilization demonstration." },
        ],
    },
    {
        subject: "Environmental Engineering & Disaster Management",
        subjectCode: "7AG6-60",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall key terminologies, sources of water, types of waste, pollutants, and related environmental standards." },
            { coNumber: "CO2", coDefinition: "Explain the importance of safe water supply, drinking water standards, domestic and solid waste management systems." },
            { coNumber: "CO3", coDefinition: "Apply BIS standards and design principles to assess pollution control and sanitation methods in real-life scenarios." },
            { coNumber: "CO4", coDefinition: "Analyze the requirements and design considerations for water supply systems and wastewater disposal in urban and rural contexts." },
            { coNumber: "CO5", coDefinition: "Evaluate the effects of pollutants and waste disposal practices on human health and the environment." },
        ],
    },
    {
        subject: "Internet of Things Lab",
        subjectCode: "7CSR4-21",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize the constituent Components within IoT Architecture." },
            { coNumber: "CO2", coDefinition: "Construct connections between Devices and Sensors, applying theoretical understanding." },
            { coNumber: "CO3", coDefinition: "Implement wireless data transmission techniques among various devices." },
            { coNumber: "CO4", coDefinition: "Evaluate and select appropriate IoT Devices and Sensors based on provided Case Studies." },
            { coNumber: "CO5", coDefinition: "Execute the upload and download of sensor data on cloud and server, culminating in a comprehensive and proficient utilization demonstration." },
        ],
    },
    {
        subject: "Cyber Security Lab",
        subjectCode: "7CSR4-22",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Utilizing substitution and transposition techniques to achieve encryption and decryption of plain text, demonstrating comprehension and practical application." },
            { coNumber: "CO2", coDefinition: "Design a solution for Key Exchange problem and understand the general attacks on system." },
            { coNumber: "CO3", coDefinition: "Analyse the data transferred in client server communication and working of various network protocol." },
            { coNumber: "CO4", coDefinition: "Understand security-based tools like Wire shark, tcp dump, rootkits, snort etc." },
            { coNumber: "CO5", coDefinition: "Apply encryption, decryption techniques for secure data transmission, and digital signature generation, demonstrating understanding and application." },
        ],
    },
    {
        subject: "Industrial Training Seminar",
        subjectCode: "7CSR7-30",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply the knowledge to work on any project in computing." },
            { coNumber: "CO2", coDefinition: "Know how to write reports in industrial technical seminar." },
            { coNumber: "CO3", coDefinition: "Develop the communication skills to work with a group of workers and learn the proper behavior in a working environment." },
            { coNumber: "CO4", coDefinition: "Know how to work with multi-tasking professionals and multidisciplinary team." },
            { coNumber: "CO5", coDefinition: "Develop skills to improve presentation and other soft" },
        ],
    },
    {
        subject: "Technical Seminar",
        subjectCode: "7CSR7-40",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define the motivation for any topic of interest and describe" },
            { coNumber: "CO2", coDefinition: "List relevant sources for a literature survey and construct a document based on technical publications." },
            { coNumber: "CO3", coDefinition: "Analyse the proof-of-concept and recognize patterns in" },
            { coNumber: "CO4", coDefinition: "Discuss effective presentation techniques and enhance soft skills." },
            { coNumber: "CO5", coDefinition: "Apply new and recent technology (e.g. Latex) to translate" },
        ],
    },
    {
        subject: "Big Data Analytics",
        subjectCode: "8CSR4-01",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the fundamental concepts of Big Data, and hadoop ecosystem components, architecture of Hadoop Distributed File System (HDFS) and MapReduce framework." },
            { coNumber: "CO2", coDefinition: "Develop MapReduce programs (WordCount, Weather Data Analysis) and write Pig Latin scripts/Hive queries for big data processing." },
            { coNumber: "CO3", coDefinition: "Analyze performance of various Hadoop configurations (Local, Pseudo-distributed, Fully Distributed modes) and optimize MapReduce jobs using Combiners, Partitioners, and Custom writable." },
            { coNumber: "CO4", coDefinition: "Evaluate the suitability of Big Data tools (Pig vs. Hive) for different data processing scenarios and critique the efficiency of HDFS storage strategies." },
            { coNumber: "CO5", coDefinition: "Design & implement an end-to-end Big Data solution using Hadoop ecosystem tools (HDFS, MapReduce, Pig, Hive) to process, analyze, and visualize a real-world dataset." },
        ]
    },
    {
        subject: "Soft Computing",
        subjectCode: "8EE6-60",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply fundamental fuzzy set theory and approximate reasoning to handle uncertainty in real-world decision-making scenarios." },
            { coNumber: "CO2", coDefinition: "Implement various neural network architectures (e.g., multilayer perceptrons, radial basis function networks) for pattern recognition and predictive modelling." },
            { coNumber: "CO3", coDefinition: "Analyze evolutionary algorithms (e.g., Genetic Algorithms, Particle Swarm Optimization) to solve optimization and search problems under complex constraints." },
            { coNumber: "CO4", coDefinition: "Evaluate the effectiveness of hybrid soft computing techniques (e.g., neuro-fuzzy systems, genetic-fuzzy systems) in solving intricate real-world tasks." },
            { coNumber: "CO5", coDefinition: "Design and develop innovative soft computing solutions by integrating fuzzy logic, neural networks, and evolutionary algorithms for advanced data-driven applications." },
        ],
    },
    {
        subject: "Big Data Analytics Lab",
        subjectCode: "8CSR4-21",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Summarize and implement the basic data structure algorithms like Linked list, stack, queue, set and map in Java." },
            { coNumber: "CO2", coDefinition: "Illustrate the knowledge and implement different file management in Hadoop." },
            { coNumber: "CO3", coDefinition: "Discuss the example of map reduces and develop the data application using variety of system." },
            { coNumber: "CO4", coDefinition: "Evaluate and perform different operation on Data using Pig Latin." },
            { coNumber: "CO5", coDefinition: "Illustrate different operations on relations and databases using Hive." },
        ],
    },
    {
        subject: "Software Testing & Validation Lab",
        subjectCode: "8CSR4-22",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the Automation Testing Approach using various tool." },
            { coNumber: "CO2", coDefinition: "Analyse & discuss the performance of different websites using JMeter." },
            { coNumber: "CO3", coDefinition: "Calculate the coverage analysis of programs using Eclemma tool." },
            { coNumber: "CO4", coDefinition: "Describe & calculate the mutation score for various programs using jumble testing tool." },
            { coNumber: "CO5", coDefinition: "Generate Test sequences and compare using Selenium tool for different websites." },
        ],
    },
    {
        subject: "Project",
        subjectCode: "8CSR7-50",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Carry out a substantial research-based project which will provide the solution to the society." },
            { coNumber: "CO2", coDefinition: "Find out the need for practical implementation of the solution." },
            { coNumber: "CO3", coDefinition: "Provide design solutions by considering ethical issues." },
            { coNumber: "CO4", coDefinition: "Exhibit the solutions to the stakeholders." },
            { coNumber: "CO5", coDefinition: "Illustration of ideas using respective tools." },
        ],
    },
];

// ...existing code...
const labData = [
    {
        image: "https://stock.adobe.com/274385444",
        title: "Network & Mobile Application Lab",
        facultyInCharge: "Ms. Priya Verma",
        labAssistant: "Mr. Lokesh Sharma",
        roomNumber: "C-201",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083",
        title: "Open Source Lab",
        facultyInCharge: "Dr. Navin Goyal",
        labAssistant: "Mr. Deepak Sain",
        roomNumber: "C-202",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "System Design Lab",
        facultyInCharge: "Ms. Rekha Devrani",
        labAssistant: "Mr. Deepak Sain",
        roomNumber: "C-206",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083",
        title: "Microprocessor and Interfaces Lab",
        facultyInCharge: "Dr. Shalini Chaudhary",
        labAssistant: "Ms. Divya Rastogi",
        roomNumber: "C-205",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "Database Management System Lab",
        facultyInCharge: "Ms. Shruti Gupta",
        labAssistant: "Mr. Ashok Sharma",
        roomNumber: "C-301",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083",
        title: "Augmented Reality and Virtual Reality Lab",
        facultyInCharge: "Mr. Udbhav Ojha",
        labAssistant: "Mr. Ashok Sharma",
        roomNumber: "C-305",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "MACHINE LEARNING Lab",
        facultyInCharge: "Ms. Bersha Kumari",
        labAssistant: "Mr. Gyan Aloriya",
        roomNumber: "C-302(A)",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083",
        title: "Graphics & Vision Lab",
        facultyInCharge: "Ms. Chanchal Tiwari",
        labAssistant: "Mr. Gyan Aloriya",
        roomNumber: "C-302(B)",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "Internet Of Things (IOT) Lab",
        facultyInCharge: "Mr. Abhishek Dadhich",
        labAssistant: "Mr. Bilal Hussain / Ms. Divya Rastogi",
        roomNumber: "A-204",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083",
        title: "High Performance Computing Lab",
        facultyInCharge: "Mr. Indra Kishor",
        labAssistant: "Mr. Manish Acharya",
        roomNumber: "A-207",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "System Programming Lab",
        facultyInCharge: "Ms. Madhu Chaudhary",
        labAssistant: "Mr. Bilal Hussain",
        roomNumber: "A-209",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083",
        title: "Advanced Computing Lab",
        facultyInCharge: "Mr. Nitin Phulwani",
        labAssistant: "Mr. Manish Acharya",
        roomNumber: "A-208",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
];
const points = [
    "Outcome based quality education",
    "Introducing New Technology Machine learning, Data Science, SalesForce.",
    "Utilization of Information technology",
    "Student Driven Department",
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
    <p>
        To foster an environment of innovation, research, and academic
        excellence that prepares future technocrats and leaders to address
        global challenges in computer engineering and technology.
    </p>
);

const projectFieldCounts = [
  { field: "Artificial Intelligence and Machine Learning", count: 12 },
  { field: "Augmented and Virtual Reality", count: 3 },
  { field: "Blockchain", count: 1 },
  { field: "Deep Learning", count: 2 },
  { field: "Internet of Things", count: 11 },
  { field: "Mobile Application Development", count: 7 },
  { field: "Robotics", count: 1 },
  { field: "VR + IOT + Robotics", count: 1 },
  { field: "Web Designing", count: 24 },
  { field: "Others (WebAI, Cloud, IOTML)", count: 5 },
];



const missionContent = <Checklist items={missionPoints} />;

const objectiveContent = <Checklist items={objectivePoints} />;

const ComputerScience = () => {
    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFaculty = async () => {
            try {
                const response = await fetch("/api/faculty");
                if (response.ok) {
                    const data = await response.json();
                    // Filter faculty by Computer Engineering department
                    const csFaculty =
                        data.data?.filter(
                            (faculty: Faculty) =>
                                faculty.department === "Computer Engineering",
                        ) || [];

                    // Transform data to match FacultySwiper expected format
                    const transformedFaculty = csFaculty.map(
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
                title="Department Of Computer Science"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Department of Computer Science",
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
                    src: "/images/department/ce.jpg",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p>
                    The Department of Computer Engineering was established in
                    2007 with the vision to create an environment fostering new
                    ideas, research, and technological advancements, preparing
                    tomorrow's technocrats and innovators to meet global
                    challenges. Over the years, the Department of Computer
                    Engineering (CS) at PIET has achieved significant success
                    and numerous accolades.
                </p>
                <br />
                <p>
                    In 2017-18, the Department earned accreditation from the
                    National Board of Accreditation (NBA), a status that extends
                    through the 2023-24 academic session. This recognition
                    places the department among the elite in India, confirming
                    its adherence to best practices and benchmarks in
                    engineering.
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
                        content={`"To create an environment in which new ideas, research and technology development and the technocrats and innovators of tomorrow become competent to face the global challenges"

The department of CE has been accredited by the National Board of Accreditation (NBA) in the year 2017-18 and got compliance till session 2023. This brings department of CE to the elite list of departments holding NBA accreditation in India. As a result, the PIET CE department is currently recognized for offering the best practices and industry standards in engineering. This achievement is only possible because of the continuous efforts of dedicated mentors and bright students. The department had never compromised on the quality of education and to assure this an adequate number of faculty members and technical assistants were always appointed. The majority of faculty members hold an M.Tech degree as a minimum qualification.

Additionally, 40% of the faculty in the department hold a PhD. The department believes in outcome-based education and a result-oriented approach, which enables us to attract intelligent students available in the state and as well as outside. Currently, 642 students are enrolled in the department. The admission in the department from 2007 to 2022 has been consistent and has always been more than 95%. The department of CE has the best infrastructure, in terms of thirteen computer labs, ten classrooms, 2 Electronic labs and 19 faculty rooms. The department has one state of art online lab for conducting online tests and research and development. With the honour of being the largest and most responsible department in the institute, department of CE has always got the highest result and the result has always been consistent and encouraging. Due to its working methodologies and industry-oriented approach, it has converted the hard work of students into strong placements. The department has got the highest placement in PIET.

In terms of percentage, placement is increasing and many students got placed in big IT Giants like Infosys, TCS, Capgemini, IBM, Evolphin, Nagarro, and Appirio every year. To be recognized by industrial houses as a source of consultancy and process management department always nurture students to develop innovative projects using innovative technologies. Students develop a project in each year of study starting from I year in the field of machine learning, Cloud Computing, Data Science, Big data, sales Force, IoT, image processing and Industry oriented projects using PHP, Python, and JAVA. AICTE sponsored MODROB Deep learning and Neural network Lab with RTX 8000 Quadro GPU is used for project development To showcase projects Department of Computer Engineering organizes a project exhibition "Udhbhav " every year for students of all years. Computer Engineering, PIET in which around more than 100 projects were developed under NSP. The department holds its position of being the most innovative and research-oriented workplace so around 80% students of final year publish review Research papers in the area of smart computation and technology. Every faculty member publishes at least two papers each year. To encourage and to provide platform one International Conferences on Smart Computation and Technology (ICSCT)and ICIMMI have been organized.

- Dr. Anil Kumar
HOD, Department of Computer Engineering, PIET`}
                        imageUrl="/images/hod/ce.jpg"
                        imageAlt="Dr. Anil Kumar - HOD, Department of Computer Engineering"
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
                            No faculty members found for Computer Engineering
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {labData.map((lab, index) => (
                            <LabInfoCard key={index} {...lab} />
                        ))}
                    </div>
                </div>
            </section>

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


            <CourseOutcomeAccordion data={courseData} />

            {/* ipr's data */}

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    IPR's
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={columns} data={data} />
            </div>

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    {" "}
                    FDP / Workshop
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={fdpColumns} data={fdpData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default ComputerScience;