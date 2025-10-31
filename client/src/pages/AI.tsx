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

export const courseData: SubjectCO[] = [
    {
        subject: "Advanced Engineering Mathematics",
        subjectCode: "3AID2-01",
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
        subjectCode: "3AID1-02",
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
        subjectCode: "3AID3-04",
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
        subject: "Data Structure & Algorithms",
        subjectCode: "3AID4-05",
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
        subjectCode: "3AID4-06",
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
        subjectCode: "3AID4-03",
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
        subject: "Data Structures and Algorithms Lab",
        subjectCode: "3AID4-21",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand and Examine the concept of array & its storage." },
            { coNumber: "CO2", coDefinition: "Illustrate the implementation of basic data structure using an array." },
            { coNumber: "CO3", coDefinition: "Analyse and compare different searching and sorting techniques." },
            { coNumber: "CO4", coDefinition: "Develop programs to perform operations on Non-linear Data Structures such as Tree and Graphs." },
            { coNumber: "CO5", coDefinition: "Design and use different sorting algorithms." },
        ],
    },
    {
        subject: "Object Oriented Programming Lab",
        subjectCode: "3AID4-22",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the concept of C++ programming language while evaluating different access specifiers to define member function." },
            { coNumber: "CO2", coDefinition: "Implement memory allocation techniques and various inbuilt functions." },
            { coNumber: "CO3", coDefinition: "Know inheritance and analyse the types of inheritance." },
            { coNumber: "CO4", coDefinition: "Apply the concept of polymorphism to perform different types of bindings." },
            { coNumber: "CO5", coDefinition: "Develop and use of application related to I/O and file handling with exception handling." },
        ],
    },
    {
        subject: "Software Engineering Lab",
        subjectCode: "3AID4-23",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the software engineering methodologies involved in the phases for project development." },
            { coNumber: "CO2", coDefinition: "Know about open-source tools used for implementing software engineering methods." },
            { coNumber: "CO3", coDefinition: "Develop product-startups implementing software process models in software engineering methods." },
            { coNumber: "CO4", coDefinition: "Understand Open-source Tools: StarUML / UMLGraph / Topcased." },
            { coNumber: "CO5", coDefinition: "Discuss and analyse how to develop software requirements specifications for a given problem." },
        ],
    },
    {
        subject: "Digital Electronics Lab",
        subjectCode: "3AID4-24",
        semester: "Semester 3",
        outcomes: [
            { coNumber: "CO1", coDefinition: "List different types of logic gates, identify their ICs and also verify their truth tables." },
            { coNumber: "CO2", coDefinition: "Demonstrate the functioning of basic logic gates, adder, and subtractor using universal gates." },
            { coNumber: "CO3", coDefinition: "Design a combinational circuit using MSI devices and verify its functionalities." },
            { coNumber: "CO4", coDefinition: "Develop various sequential circuit using Flip Flops and verify its functionalities." },
            { coNumber: "CO5", coDefinition: "Formulate Various types of counters, Shift registers SISO, SIPO, PISO, PIPO using Flip-Flops and verify its functionalities using simulation tool." },
        ],
    },
    {
        subject: "Industrial Training",
        subjectCode: "3AID7-30",
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
        subject: "Discrete Mathematical Structures",
        subjectCode: "4AID2-01",
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
        subjectCode: "4AID1-03",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Recognize and describe the fundamental concepts of Economics and Financial Management and define the meaning of national income, demand, supply, cost, market structure, and balance sheet." },
            { coNumber: "CO2", coDefinition: "Calculate and Classify the domestic product, national product and elasticity of price on demand and supply." },
            { coNumber: "CO3", coDefinition: "Draw the cost graphs, revenue graphs and forecast the impact of change in price in various Perfect as well as imperfect market structures." },
            { coNumber: "CO4", coDefinition: "Compare the financial statements to interpret the financial position of the firm and evaluate the project investment decisions." },
        ],
    },
    {
        subject: "Microprocessors & Interfaces",
        subjectCode: "4AID3-04",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define working of functional components of computer system." },
            { coNumber: "CO2", coDefinition: "Understand an overall functional structure of the Microprocessor." },
            { coNumber: "CO3", coDefinition: "Explain how interrupts are used to implement I/O control and data transfers." },
            { coNumber: "CO4", coDefinition: "Illustrating the design aspects of I/O and Memory Interfacing circuits." },
            { coNumber: "CO5", coDefinition: "Validating the practical approach of microprocessor through laboratory experiments." },
        ],
    },
    {
        subject: "Database Management System",
        subjectCode: "4AID4-05",
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
        subjectCode: "4AID4-06",
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
        subjectCode: "4AID4-07",
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
        subject: "Microprocessor and Interface Lab",
        subjectCode: "4AID4-21",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Knowing and apply the fundamentals of assembly level programming of microprocessors and microcontroller." },
            { coNumber: "CO2", coDefinition: "Implement standard microprocessor real time interfaces including GPIO, serial ports, digital-to-analog converters and analog-to-digital converters." },
            { coNumber: "CO3", coDefinition: "Interpret Troubleshoot interactions between software and hardware." },
            { coNumber: "CO4", coDefinition: "Analyze abstract problems and apply a combination of hardware and software to address the problem." },
            { coNumber: "CO5", coDefinition: "Use standard test and measurement equipment to evaluate digital interfaces." },
        ],
    },
    {
        subject: "Data Base Management System Lab",
        subjectCode: "4AID4-22",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Know how to make database schema for given scenrios." },
            { coNumber: "CO2", coDefinition: "Apply Keys and Constraints on database using RDBMS." },
            { coNumber: "CO3", coDefinition: "Formulate aggregate functions." },
            { coNumber: "CO4", coDefinition: "Compose pl/sql including stored procedures, stored functions, cursors concept." },
            { coNumber: "CO5", coDefinition: "Develop Triggers, SQL and Procedural interfaces." },
        ],
    },
    {
        subject: "Network Programming Lab",
        subjectCode: "4AID4-23",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Describe the functioning of various networking equipment’s and Standard Network Topologies." },
            { coNumber: "CO2", coDefinition: "Explain and Define the LAN Installation and Configurations techniques." },
            { coNumber: "CO3", coDefinition: "Design code for various Error correcting techniques and framing methods through C Language." },
            { coNumber: "CO4", coDefinition: "Analyze and verify client and server involving UDP/TCP sockets using Socket Programming." },
            { coNumber: "CO5", coDefinition: "Demonstrate and determine the Communication Models between client and server using Network Simulator." },
        ],
    },
    {
        subject: "Linux Shell Programming Lab",
        subjectCode: "4AID4-24",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Know and apply Key Concepts and Commands for Shell Programming." },
            { coNumber: "CO2", coDefinition: "Analyze the different security measures that can be implemented to protect the directory structure." },
            { coNumber: "CO3", coDefinition: "Define Approaches to Mastering Shell Quoting Mechanisms." },
            { coNumber: "CO4", coDefinition: "Evaluate Patterns with simple Regular Expressions using Filters using various Command." },
            { coNumber: "CO5", coDefinition: "Explain how to use scripting to enhance command output." },
        ],
    },
    {
        subject: "Java Lab",
        subjectCode: "4AID4-25",
        semester: "Semester 4",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Use the syntax and semantics of java programming language and basic concepts of OOP." },
            { coNumber: "CO2", coDefinition: "Develop reusable programs using the concepts of inheritance, polymorphism, interfaces and packages." },
            { coNumber: "CO3", coDefinition: "Apply the concepts of Multithreading and Exception handling to develop efficient and error free codes." },
            { coNumber: "CO4", coDefinition: "Design event driven GUI and web related applications which mimic the real word scenarios." },
            { coNumber: "CO5", coDefinition: "Design the applications using applets and use of graphics in java." },
        ],
    },
    {
        subject: "Data Mining-Concepts and Techniques",
        subjectCode: "5AID3-01",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Explain the basic concepts, functionalities, and system types in data mining, including key preprocessing steps such as data cleaning, transformation, and discretization." },
            { coNumber: "CO2", coDefinition: "Apply classification techniques such as Decision Trees, Naïve Bayes, SVM, and Neural Networks to perform predictive modeling on labeled datasets." },
            { coNumber: "CO3", coDefinition: "Analyze unlabeled datasets using clustering algorithms including partitioning, hierarchical, and advanced model-based methods." },
            { coNumber: "CO4", coDefinition: "Extract frequent patterns and generate association rules using algorithms like Apriori and FP-Growth for knowledge discovery." },
            { coNumber: "CO5", coDefinition: "Evaluate recent trends in data mining (web, spatial, temporal, etc.) and assess ethical, privacy, and social implications of data mining in real-world applications." },
        ],
    },
    {
        subject: "Compiler Design",
        subjectCode: "5AID4-02",
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
        subject: "Operating System",
        subjectCode: "5AID4-03",
        semester: "Semester 5",

        outcomes: [
            { coNumber: "CO1", coDefinition: "Recall the evolution, objectives, structure, and functionalities of operating systems, including the basic concepts of processes and files." },
            { coNumber: "CO2", coDefinition: "Explain memory management techniques such as paging, segmentation, page replacement algorithms, and virtual memory handling through case studies." },
            { coNumber: "CO3", coDefinition: "Apply processor and process management techniques including inter-process communication, scheduling, mutual exclusion, and multithreading." },
            { coNumber: "CO4", coDefinition: "Analyze deadlock conditions and device management using resource allocation models and disk scheduling algorithms." },
        ],
    },
    {
        subject: "Compiler Design Lab",
        subjectCode: "5CDS4-22",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand Lexical analyzer and use this knowledge to implement its various sub-functions for any regular language." },
            { coNumber: "CO2", coDefinition: "Design and code of Symbol Table in C language." },
            { coNumber: "CO3", coDefinition: "Verify the code for Lexical analyzer for given language using C and LEX tools." },
            { coNumber: "CO4", coDefinition: "Apply the Code of YAAC Program for identification of strings and Operators." },
            { coNumber: "CO5", coDefinition: "Analyze context free grammar and Code for First and Follows using programming language C." },
        ],
    },
    {
        subject: "Analysis of Algorithm Lab",
        subjectCode: "5CDS4-23",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Analyze algorithms in terms of space and time complexity." },
            { coNumber: "CO2", coDefinition: "Implement problems using brute force, divide and conquer and decrease and conquer techniques." },
            { coNumber: "CO3", coDefinition: "Simulate problems using greedy, dynamic programming and backtracking approaches." },
            { coNumber: "CO4", coDefinition: "Use different string-matching algorithms." },
            { coNumber: "CO5", coDefinition: "Explore the implementation of Problem classes Np, Np-Hard and Np-complete." },
        ],
    },
    {
        subject: "Advanced Java Lab",
        subjectCode: "5CDS4-24",
        semester: "Semester 5",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Know the fundamentals of MVC with Applets and Swing." },
            { coNumber: "CO2", coDefinition: "Know and implement the concept of Java Database Connectivity (JDBC) and Client server programming." },
            { coNumber: "CO3", coDefinition: "Implement the concept of RMI and implement distributed application." },
            { coNumber: "CO4", coDefinition: "Design the web application by using the concept of JAVA Servlet." },
            { coNumber: "CO5", coDefinition: "Design the web application by using the concept of JSP." },
        ],
    },
    {
        subject: "Industrial Training (5th year)",
        subjectCode: "5CDS7-30",
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
        subjectCode: "6CDS3-01",
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
        subjectCode: "6CDS4-02",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Explain the fundamental concepts of machine learning and implement supervised learning algorithms for solving real-world problems." },
            { coNumber: "CO2", coDefinition: "Apply unsupervised learning algorithms to analyze and interpret patterns in unlabeled data." },
            { coNumber: "CO3", coDefinition: "Evaluate machine learning models and implement dimensionality reduction and feature selection techniques to improve model performance." },
            { coNumber: "CO4", coDefinition: "Develop solutions using semi-supervised learning and reinforcement learning approaches for complex problem solving." },
            { coNumber: "CO5", coDefinition: "Design and implement neural network-based models and recommendation systems for diverse applications." },
        ],
    },
    {
        subject: "Information System Security",
        subjectCode: "6CDS4-03",
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
        subject: "Computer Architecture & Organization",
        subjectCode: "6CDS4-04",
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
        subjectCode: "6CDS4-05",
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
        subjectCode: "6CDS4-06",
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
        subject: "Artificial Neural Network",
        subjectCode: "6CDS5-11",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand fundamentals of neural network, neuron models and their role in AI." },
            { coNumber: "CO2", coDefinition: "Examine application of perceptron models and learning algorithms in pattern classification & regression problems." },
            { coNumber: "CO3", coDefinition: "Implement back propagation generalization and optimization techniques for efficient supervised learning." },
            { coNumber: "CO4", coDefinition: "Comparative Analysis of unsupervised learning using Self-Organizing Maps and Learning Vector Quantization for adaptive classification." },
            { coNumber: "CO5", coDefinition: "Evaluate neurodynamical systems attractor models and Hopfield networks for realising recurrent neural network behavior and stability." },
        ],
    },
    {
        subject: "Digital Image Processing Lab",
        subjectCode: "6CDS4-21",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply a proper image enhancement technique for given a set of noisy images." },
            { coNumber: "CO2", coDefinition: "Able to design and implement the various Linear filtering methods for image enhancement." },
            { coNumber: "CO3", coDefinition: "Implement the different Geometric transformations on images and understand two-dimensional Fourier transform." },
            { coNumber: "CO4", coDefinition: "Develop any application using different image processing techniques." },
            { coNumber: "CO5", coDefinition: "To learn the spatial and frequency domain techniques of image compression." },
        ],
    },
    {
        subject: "Machine Learning Lab",
        subjectCode: "6CDS4-22",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Know the filteration of data to get the desired results in data analysis." },
            { coNumber: "CO2", coDefinition: "Apply machine learning models as per the real-life problem statements." },
            { coNumber: "CO3", coDefinition: "Use of supervised and unsupervised learning algorithms." },
            { coNumber: "CO4", coDefinition: "Develop neural networks for learning non-linear functions in Python." },
            { coNumber: "CO5", coDefinition: "Apply Machine Learning algorithms and Neural Networks to solve real world problems." },
        ],
    },
    {
        subject: "Python Lab",
        subjectCode: "6CDS4-23",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Know the fundamental data types of python." },
            { coNumber: "CO2", coDefinition: "Apply knowledge of if-else, while and for loop for decision control." },
            { coNumber: "CO3", coDefinition: "Understand various methods to manipulate String." },
            { coNumber: "CO4", coDefinition: "Know functions and file handling in python." },
            { coNumber: "CO5", coDefinition: "Implement sorting algorithms for various scenarios." },
        ],
    },
    {
        subject: "Mobile Application Development Lab",
        subjectCode: "6CDS4-24",
        semester: "Semester 6",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Know the components and structure of mobile application development frameworks for Android and windows OS-based mobiles." },
            { coNumber: "CO2", coDefinition: "Understand how to work with various mobile application development frameworks." },
            { coNumber: "CO3", coDefinition: "Apply the basic and important design concepts and issues of development of mobile applications." },
            { coNumber: "CO4", coDefinition: "Implement activities with dialogs, spinner, fragments and navigation drawer by applying themes." },
            { coNumber: "CO5", coDefinition: "Develop mobile applications using SQLite." },
        ],
    },
    {
        subject: "Data Visualization and Exploration With R",
        subjectCode: "7CDS4-01",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the fundamentals of R programming and data structures including vectors, data frames, and lists." },
            { coNumber: "CO2", coDefinition: "Apply data importing, cleaning, and preparation techniques using R for visualization and exploration." },
            { coNumber: "CO3", coDefinition: "Create basic and advanced data visualizations using base R, lattice, and ggplot2 libraries." },
            { coNumber: "CO4", coDefinition: "Perform exploratory data analysis (EDA) to summarize datasets and detect patterns, anomalies, and relationships." },
            { coNumber: "CO5", coDefinition: "Implement statistical models including regression and clustering using R and interpret the results." },
        ],
    },
    {
        subject: "Environmental Engineering and Disaster Management",
        subjectCode: "7AG6-60.2",
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
        subject: "Data Visualization and Exploration with R Lab",
        subjectCode: "7CDS4-21",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Identify and explain various data visualization tools and their key features." },
            { coNumber: "CO2", coDefinition: "Develop basic data visualizations using R or Python libraries." },
            { coNumber: "CO3", coDefinition: "Install, configure, and utilize Tableau for creating visual analytics." },
            { coNumber: "CO4", coDefinition: "Analyze and prepare datasets for visualization using Tableau functions." },
            { coNumber: "CO5", coDefinition: "Create interactive dashboards in Tableau to communicate insights effectively." },
        ],
    },
    {
        subject: "Social Media Analytics Lab",
        subjectCode: "7CDS4-22",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply Natural Language Processing (NLP) techniques such as stop word elimination, stemming, lemmatization, and POS tagging using Python’s NLTK library." },
            { coNumber: "CO2", coDefinition: "Analyze customer product reviews using sentiment analysis tools to determine polarity and subjectivity for opinion mining." },
            { coNumber: "CO3", coDefinition: "Interpret and analyze web server logs and hyperlink structures to extract actionable insights on user behaviour and web usage patterns." },
            { coNumber: "CO4", coDefinition: "Evaluate web content for search engine optimization by identifying spamdexing techniques such as keyword stuffing and content duplication." },
            { coNumber: "CO5", coDefinition: "Utilize Google Analytics tools to measure website performance metrics such as conversion statistics, visitor demographics, and traffic sources for data-driven decision-making." },
        ],
    },
    {
        subject: "Industrial Training Seminar",
        subjectCode: "7CDS7-30",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Apply the knowledge to work on any project in computing." },
            { coNumber: "CO2", coDefinition: "Know how to write reports in industrial technical seminar." },
            { coNumber: "CO3", coDefinition: "Develop the communication skills to work with a group of workers and learn the proper behavior in a working environment." },
            { coNumber: "CO4", coDefinition: "Know how to work with multi-tasking professionals and multidisciplinary team." },
            { coNumber: "CO5", coDefinition: "Develop skills to improve presentation and other soft skills." },
        ],
    },
    {
        subject: "Technical Seminar",
        subjectCode: "7CDS7-40",
        semester: "Semester 7",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Define the motivation for any topic of interest and describe the thought process development for a technical presentation." },
            { coNumber: "CO2", coDefinition: "List relevant sources for a literature survey and construct a document based on technical publications." },
            { coNumber: "CO3", coDefinition: "Analyse the proof of proof-of-concept and recognize patterns in related data." },
            { coNumber: "CO4", coDefinition: "Discuss effective presentation techniques and enhance soft skills." },
            { coNumber: "CO5", coDefinition: "Apply new and recent technology (e.g. Latex) to translate technical reports accurately." },
        ],
    },
    {
        subject: "Deep Learning and Its Applications",
        subjectCode: "8CDS4-01",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "To know the basic knowledge of Learning Algorithms." },
            { coNumber: "CO2", coDefinition: "To Analysis and design of the Neural Network Concepts so that Test and validate a trained network to generalizes." },
            { coNumber: "CO3", coDefinition: "To Apply and development of a CNN-based application." },
            { coNumber: "CO4", coDefinition: "Explain the architecture and applications of RNNs, Bidirectional RNNs, Encoder-Decoder sequence-to-sequence architectures, Back propagation Through Time for training RNNs, LSTM networks." },
            { coNumber: "CO5", coDefinition: "To Develop and recognize the Theoretical foundations and practical implementations of auto encoders in real-world scenarios will be explored." },
        ],
    },
    {
        subject: "Disaster Management",
        subjectCode: "8TT6-60.2",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "To know types of disaster and hazards and related issues." },
            { coNumber: "CO2", coDefinition: "Describe various Hydro-meteorological and Geological Based Disasters." },
            { coNumber: "CO3", coDefinition: "Apply methods of community involvement as an essential part of successful DRR. Humanitarian Assistance/Support before and after disaster." },
            { coNumber: "CO4", coDefinition: "Formulate technological innovations in Disaster Risk Reduction: Advantages and problems." },
            { coNumber: "CO5", coDefinition: "Use experience on conducting independent DM study including data search, analysis and presentation of disaster case study." },
        ],
    },
    {
        subject: "Deep Learning & Its Application Lab",
        subjectCode: "8CDS4-21",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Demonstrate recall of fundamental concepts in deep learning, including neural network architectures, activation functions, and optimization algorithms, through quizzes, exams, and class discussions." },
            { coNumber: "CO2", coDefinition: "Explain the principles underlying various deep learning techniques, such as convolutional neural networks (CNNs) for image processing and recurrent neural networks (RNNs) for sequential data, by summarizing key concepts and providing examples." },
            { coNumber: "CO3", coDefinition: "Apply deep learning algorithms to solve practical problems in computer vision, natural language processing, and other domains, by designing and implementing neural network models in programming assignments and projects." },
            { coNumber: "CO4", coDefinition: "Analyze the performance of deep learning models and interpret their results using relevant metrics and visualization tools, evaluating the effectiveness of different architectures and optimization strategies through experiments and case studies." },
            { coNumber: "CO5", coDefinition: "Design novel deep learning solutions for complex problems, integrating multiple techniques and adapting them to new domains, by proposing innovative project ideas and implementing them with creativity and originality." },
        ],
    },
    {
        subject: "Robot Programming Lab",
        subjectCode: "8CDS4-22",
        semester: "Semester 8",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Programming programming concepts to effectively program robots for various tasks." },
            { coNumber: "CO2", coDefinition: "Analyze and select effective algorithms for solving robotics problems." },
            { coNumber: "CO3", coDefinition: "Synthesize knowledge to design and implement functional robotic systems." },
            { coNumber: "CO4", coDefinition: "Evaluate robot performance and optimize algorithms for better efficiency." },
            { coNumber: "CO5", coDefinition: "Critically evaluate ethical implications and propose responsible strategies." },
        ],
    },
    {
        subject: "Project",
        subjectCode: "8CDS7-50",
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


const labData = [
    {
    image: "/images/Labs/AI&DS/CS-lab-1.jpg",
    title: "DEEP LEARNING LAB",
    facultyInCharge: "Ms. Bhawana Purohit",
    labAssistant: "Mr. Rajesh Chaoudhary",
    roomNumber: "B003",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
  {
    image: "/images/Labs/AI&DS/CS-lab-2.jpg",
    title: "NUMERICAL MODELING LAB",
    facultyInCharge: "Mr. Ebtasam Ahmad Siddiqui",
    labAssistant: "Mr. Rajesh Chaoudhary",
    roomNumber: "B005",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
  {
    image: "/images/Labs/AI&DS/CS-lab-3.jpg",
    title: "COMPUTER-AIDED DESIGN LAB",
    facultyInCharge: "Mr. Vaibhav Shekhawat",
    labAssistant: "Mr. Hansraj Meena",
    roomNumber: "B14",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
  {
    image: "/images/Labs/AI&DS/C-lang-lab.jpg",
    title: "PROGRAMMING & OPTIMIZATION LAB",
    facultyInCharge: "Mr. Mohnish Sachdeva",
    labAssistant: "Mr. Hansraj Meena",
    roomNumber: "B15",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
  {
    image: "/images/Labs/AI&DS/CS-lab-6.jpg",
    title: "JAVA TECHNOLOGY LAB",
    facultyInCharge: "Mr. Punit Kumar",
    labAssistant: "Mr. Amardeep Singh",
    roomNumber: "B17",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
  {
    image: "/images/Labs/AI&DS/cs-lab-5.jpg",
    title: "CLOUD COMPUTING LAB",
    facultyInCharge: "Mr. Girdhari Lal",
    labAssistant: "Mr. Amardeep Singh",
    roomNumber: "B20",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
  {
    image: "/images/Labs/AI&DS/cs-lab-4.jpg",
    title: "DIGITAL ELECTRONICS LAB",
    facultyInCharge: "Dr. Saurabh Raj",
    labAssistant: "Mr. Rajneesh Chopra",
    roomNumber: "A105",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
  {
    image: "/images/Labs/AI&DS/CS-lab-3.jpg",
    title: "BUSINESS INTELLIGENCE LAB",
    facultyInCharge: "Mr. Kamal Saini",
    labAssistant: "Mr. Vishnu Sain",
    roomNumber: "A111",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
  {
    image: "/images/Labs/AI&DS/CS-lab-2.jpg",
    title: "AWS LAB",
    facultyInCharge: "Dr. Ajay Mourya",
    labAssistant: "Mr. Amardeep Singh",
    roomNumber: "B-20",
    syllabusLink: "https://example.com/syllabus.pdf",
  },
];
const points = [
    "Established in 2021 with cutting-edge AI & Data Science programs.",
    "Industry partnerships with leaders like AWS for real-world exposure.",
    "100% student placement in top software and IT companies.",
    "Faculty actively engaged in research and innovation.",
];

const missionPoints = [
    "FDeliver high-quality, industry-relevant education in AI and Data Science aligned with global standards.",
    "Foster innovation and research through collaboration with academia and industry partners like AWS.",
    "Empower students with practical skills, ethical awareness, and entrepreneurial mindset for successful careers.",
    "Promote continuous learning and professional development among faculty and students.",
];

const objectivePoints = [
    "Provide a robust curriculum integrating AI, Data Science, and foundational computer science principles.",
    "Facilitate industry engagement through projects, internships, and guest lectures.",
    "Support student research and participation in conferences and workshops.",
    "Ensure 100% placement by building strong industry connections and skill development initiatives.",
];

const visionContent = (
    <div className="flex flex-col items-center text-center space-y-4">
    <i className="fas fa-lightbulb text-yellow-500 text-5xl"></i>
    <p className="text-gray-700 flex-grow flex items-center justify-center text-justify">
      To be a center of excellence in Artificial Intelligence and Data Science
        education and research, nurturing innovative leaders who transform
        society through cutting-edge technology and interdisciplinary
        collaboration.
    </p>
  </div> 
    
);
{/*<p className="text-justify text-xl 2xl:text-2xl">
        To be a center of excellence in Artificial Intelligence and Data Science
        education and research, nurturing innovative leaders who transform
        society through cutting-edge technology and interdisciplinary
        collaboration.
    </p> */}

const projectFieldCounts = [
    { field: "Machine Learning/Deep Learning", count: 9 },
    { field: "Artificial Intelligence", count: 5 },
    { field: "Web Development", count: 4 },
    { field: "Blockchain", count: 1 },
    { field: "AR / VR", count: 1 },
    { field: "NLP", count: 1 },
];

const missionContent = <Checklist items={missionPoints} />;

const objectiveContent = <Checklist items={objectivePoints} />;

const columns = [
    { label: "S.No", key: "sno" },
    { label: "Title of FDP / Workshop", key: "title" },
];

const data = [
    {
        sno: 1,
        title: "Workshop Faculty Development Program Conference Event Conducted",
    },
    { sno: 2, title: "SPL Webinar Conducted" },
    { sno: 3, title: "FDPs Workshop Conference Seminar Participation Details" },
    { sno: 4, title: "Student Achievements" },
    { sno: 5, title: "Appeared in Gate" },
    { sno: 6, title: "Paper Published By Students" },
    { sno: 7, title: "Workshop Conference Seminar of Students" },
    { sno: 8, title: "Inside outside Participation" },
    { sno: 9, title: "Award Recognization" },
];
const AI = () => {
    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFaculty = async () => {
            try {
                const response = await fetch("/api/faculty");
                if (response.ok) {
                    const data = await response.json();
                    // Filter faculty by AI and Data Science department
                    const aiFaculty =
                        data.data?.filter(
                            (faculty: Faculty) =>
                                faculty.department === "AI and Data Science",
                        ) || [];

                    // Transform data to match FacultySwiper expected format
                    const transformedFaculty = aiFaculty.map(
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
                title="Department of Artificial Intelligence & Data Science"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Department of Artificial Intelligence & Data Science",
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
                    src: "/images/department/ai.jpg",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p className="mb-6 leading-relaxed text-neutral-800">
                    The Department of Artificial Intelligence & Data Science at
                    Poornima Institute of Engineering & Technology was
                    established in 2021 with a commitment to deliver exceptional
                    education in the dynamic fields of AI and DS. Our mission is
                    to nurture innovation and research while providing students
                    with a robust curriculum endorsed by Rajasthan Technical
                    University, KOTA.
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
                        content={`Welcome to the Department of Artificial Intelligence & Data Science at Poornima Institute of Engineering & Technology!

Established in 2021, our department is at the forefront of innovation and excellence within the Poornima Foundation. With a focus on providing quality education and fostering research and innovation in the dynamic fields of Artificial Intelligence & Data Science, we are dedicated to nurturing the next generation of leaders and researchers.

Our undergraduate program, leading to a B.Tech. in Artificial Intelligence & Data Science, offers students a comprehensive curriculum aligned with the standards set by Rajasthan Technical University, KOTA. With an emphasis on hands-on learning and practical experience, our state-of-the-art infrastructure and cutting-edge laboratory facilities provide students with the tools and resources they need to succeed in today's rapidly evolving technological landscape.

At our department, we believe in fostering a culture of innovation, critical thinking, and ethical responsibility. Our faculty members are not only educators but also mentors who guide students in their academic and professional journey. Through industry partnerships, research collaborations, and practical projects, we ensure that our graduates are well-prepared to meet the challenges of the AI and Data Science industry.

We invite you to explore our programs, facilities, and opportunities. Together, let's shape the future of technology and make a positive impact on society through the power of Artificial Intelligence and Data Science.

- Dr. Budesh Kanwar
HOD, Department of AI & Data Science, PIET`}
                        imageUrl="/images/hod/ai.png"
                        imageAlt="Dr. Budesh Kanwar - HOD, Department of AI & Data Science"
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
                            No faculty members found for AI and Data Science
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
            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    FDP / Workshop
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={columns} data={data} />
            </div>
            <Cta />
            <Footer />
        </div>
    );
};

export default AI;
