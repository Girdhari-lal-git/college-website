
import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import DynamicTable from '@/components/DynamicTable ';
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import { ChevronDown, ChevronRight, Download, FileText, Calendar, Award, Users, Lightbulb } from 'lucide-react';

const IPRCell = () => {
    const iprCommittee = [
        {
            sno: 1,
            name: "Dr. Dinesh Goyal",
            designation: "Director",
            institute: "Poornima Institute of Engineering & Technology, Jaipur",
            contact: "9887678379",
            email: "dinesh.goyal@poornima.org"
        },
        {
            sno: 2,
            name: "Mr. Pankaj kumar",
            designation: "IPR Trainer and Facilitator",
            institute: "I P constellation (IPC) Private Limited",
            contact: "8619109061",
            email: "ipr.pkumar@gmail.com"
        },
        {
            sno: 3,
            name: "Dr. Payal Bansal",
            designation: "HOD, IOT",
            institute: "Poornima Institute of Engineering & Technology, Jaipur",
            contact: "97854 87195",
            email: "payal.bansal@poornima.org"
        },
        {
            sno: 4,
            name: "Mr Ashish Jain",
            designation: "Managing Director",
            institute: "Anktech Software Pvt. Ltd.",
            contact: "9001070444",
            email: "ashish.jain2@anktech.co.in"
        },
        {
            sno: 5,
            name: "Ms Sonal Srivastava",
            designation: "Founding Partner, Patent Agent",
            institute: "Freelance IPR Attorny",
            contact: "9953275218",
            email: "sonal@onlinepatentfiling.com"
        }
    ];

    const usefulLinks = [
        { name: "IPR India", url: "https://ipindia.gov.in/" },
        { name: "IP services India", url: "https://ipindia.gov.in/ip-services.htm" },
        { name: "Patent Facilitating Centre", url: "https://ipindia.gov.in/patent-facilitating-centre.htm" },
        { name: "Rajiv Gandhi National Institute of Intellectual Property", url: "https://rgniipm.gov.in/" }
    ];

    const patentSearchLinks = [
        { name: "InPass (Indian Patent Advanced Search System)", url: "https://iprsearch.ipindia.gov.in/publicsearch" },
        { name: "WIPO (World Intellectual Property Organization) Patentscope", url: "https://patentscope.wipo.int/" },
        { name: "USPTO (United States Patent and Trademark Office)", url: "https://www.uspto.gov/patents/search" },
        { name: "Espacenet (European Patent Office- Patent Search)", url: "https://worldwide.espacenet.com/" },
        { name: "Google Patents", url: "https://patents.google.com/" },
        { name: "IP India", url: "https://ipindia.gov.in/" }
    ];

    const incentiveTable = [
        { category: "Successful Registration / Application for Copyright/Patent", amount: "INR 3000" },
        { category: "Grant Of Copyright", amount: "INR 3000" },
        { category: "Publishing Of Patent", amount: "INR 5000" },
        { category: "Grant Of Patent(Non-Commercial)", amount: "INR 30000" },
        { category: "Grant Of Patent(Commercial)", amount: "INR 50000" }
    ];

    const impdataColumns = [
            { label: "S. No", key: "sno" },
            { label: "Policy", key: "name" },
            { label: "Download", key: "download" },
        ];
    
    const impdata = [
    {
        sno: 1,
        name: "IPR Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1E1SAKv1UpD6_h3-pt4lJ0YOgHbexS5VY/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 2,
        name: "IPR Cell",
        download: (
            <a
                href="https://drive.google.com/file/d/1K9aw4cV7kHD-yZgZcKm00rim_Dk2WPt7/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    }, 
];



    {/* Sample IPR data for demonstration purposes. In a real application, this would likely come from an API or database. */}

    const iprData = {
        2025: [
            { sno: 1, grantNo: '202511076121', author: 'Dr. Sandeep Gupta', affiliation: 'PIET, Jaipur', title: 'Adaptive Voice-Controlled Robotic Navigation System with Distributed Processing Architecture' },
    { sno: 2, grantNo: '202511076485', author: 'Dr. Sandeep Gupta', affiliation: 'PIET, Jaipur', title: 'Dual-Thread Mobile Acoustic Sensing System with Real-Time Audio Processing and Wireless Communication' },
    { sno: 3, grantNo: '202511076492', author: 'Dr. Sandeep Gupta', affiliation: 'PIET, Jaipur', title: 'Integrated Bluetooth Communication Framework for Simultaneous Motor Control and Video Streaming in Embedded Robotics' },
    { sno: 4, grantNo: '202511077395', author: 'Dr. Sandeep Gupta', affiliation: 'PIET, Jaipur', title: 'Intelligent Quadruped Spider Robot System with Dual-Domain Power Architecture and Biomimetic Locomotion' },
    { sno: 5, grantNo: '202511077025', author: 'Abhay Choudhary', affiliation: 'PIET, Jaipur', title: 'Development of An Electric Vehicle with Integrated Dyanamo for Recharging Battery and Enhacning Vehicle Safeyt' },
    { sno: 6, grantNo: '202511077038', author: 'Abhay Choudhary', affiliation: 'PIET, Jaipur', title: 'Development of an Automated Cloth Protection System from Rain, Water Droplets in Winters and Night time Retrieval Functionality' },
    { sno: 7, grantNo: '202511077039', author: 'Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AI-Driven IoT-Enabled Hardware-Accelerated Search Engine for Optimized Real-Time Distributed Data Retrieval and Processing' },
    { sno: 8, grantNo: '202511077049', author: 'Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AI-Optimized Real-Time VR Teleportation System for Workspace Navigation Using 360° Cameras & HTC VIVE Controllers' },
    { sno: 9, grantNo: '202511077071', author: 'Indra Kishor', affiliation: 'PIET, Jaipur', title: 'System and Method for Voice-Based Knowledge Evaluation Using Offline Speech Recognition and AI-Driven Answer Processing' },
    { sno: 10, grantNo: '202511077084', author: 'Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AI-Powered Autonomous Physiotherapy Robot with Adaptive Therapy Optimization and IoT-Enabled Remote Monitoring' },
    { sno: 11, grantNo: '202511003955', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'REVOLUTIONIZING TRAIN HOSPITALITY WITH INTELLIGENT PNR INTEGRATION AND REAL-TIME TRACKING' },
    { sno: 12, grantNo: '202511003957', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'Intelligent Autonomous Drone: Dual-Battery Swapping, Ethical AI Navigation, IoT Weather Insights, AR/VR Control, and Noise-Cancelling Communication' },
    { sno: 13, grantNo: '202511004327', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AI-POWERED ROBOTIC NAVIGATION SYSTEM FOR DYNAMIC TRAFFIC MANAGEMENT USING IOT AND DEEP LEARNING' },
    { sno: 14, grantNo: '202511004346', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AN INTELLIGENT VOICE COMMUNICATION SYSTEM FOR HUMANOID ROBOT WITH MOOD RECOGNITION AND SELF-LEARNING FOR PERSONALIZED INTERACTION BASED ON IOT AND DEEP LEARNING' },
    { sno: 15, grantNo: '202511004358', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'A NOVEL VR-BASED HAND THERAPY SYSTEM EMPOWERED BY IOT AND AI-ML FOR STROKE REHABILITATION' },
    { sno: 16, grantNo: '202511004363', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'ADAPTIVE AI SYSTEM FOR FACE RECOGNITION AND INTELLIGENT VOICE INTERACTION IN LEARNING ENVIRONMENTS' },
    { sno: 17, grantNo: '202511004392', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AUTONOMOUS HUMANOID ROBOT WITH REAL-TIME BRAIN-MIMICKING CAPABILITIES USING NEURAL SIGNAL PROCESSING' },
    { sno: 18, grantNo: '202511004399', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'BI-DIRECTIONAL LINE FOLLOWING ROBOT WITH ENHANCED SENSOR INTEGRATION AND AUTONOMOUS OPERATIONAL CAPABILITIES' },
    { sno: 19, grantNo: '202511004408', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'VISIONARY CONNECT: MULTI-FUNCTIONAL SMART GLASSES FOR ENHANCED COMMUNICATION AND MOBILITY FOR THE HEARING, SPEECH, AND VISION IMPAIRED' },
    { sno: 20, grantNo: '202511008505', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'Smart Pool Guardian: Voice-Controlled Management System' },
    { sno: 21, grantNo: '202511009043', author: 'Aditya Pareek', affiliation: 'PIET, Jaipur', title: 'EmpowerFemGuard: Smart Vending with Mobile Authentication & Personalized Usage Tracking' },
    { sno: 22, grantNo: '202511018359', author: 'Ms. Shruti Gupta', affiliation: 'PIET, Jaipur', title: 'Safeguarding Health: IoT-Powered Smart Water Monitoring for Cholera Control' },
    
        ],
        2022: [
            { sno: 1, grantNo: '202241065504', author: 'Dr. Pankaj Rahi', affiliation: 'PIET, Jaipur', title: 'A Smart Evaluation Method Of The Effect Of Economic Development On Crypto-Currency Using Machine Learning Techniques' },
            { sno: 2, grantNo: '202241054495', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'A Smart Management System For Controlling Medical Robot Beds For Preventing Bedsores Using Artificial Intelligence And Machine Learning' },
            { sno: 3, grantNo: '202241051919', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'An Intelligent Method For Defect Recognition In Additive Manufacturing Using Image Processing Based On Iot & Ai' },
            { sno: 4, grantNo: '202241042430', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'An Intelligent System And A Method For Monitoring Laundry Machine Operations Using Machine Learning For Analysis Of Acoustic Transducer Signal Information' },
            { sno: 5, grantNo: '202241026520', author: 'Mr Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Intelligent System For Automatic Penalty On Traffic Rule Violations Based On Blockchain And Machine Learning' },
            { sno: 6, grantNo: '202241025599', author: 'Dr. Rakhi Mutha', affiliation: 'PIET, Jaipur', title: 'A Data Processing Device for Electric Vehicle Based on Iot' },
            { sno: 7, grantNo: '202241020511', author: 'Mr Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Integrated library management system for various public and private institutions based on iot sensor' },
            { sno: 8, grantNo: '202231005248', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Intelligent System For Automatic Outdoor Street Lighting Fault Detection And Management System Based On Iot And Machine Learning' },
            { sno: 9, grantNo: '202211074981', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Development Of An Intelligent Transistor System For Smart Cities To Provide Commercial Parking Spaces Using Artificial Intelligence And Machine Learning Techniques' },
            { sno: 10, grantNo: '202211067502', author: 'Dr Shruti Thapar', affiliation: 'PIET, Jaipur', title: 'System And Model For Development Of Energy Efficient Routing Protocol For Wireless Sensor Networks For Enhancement Of Sensor Node And Battery Lifetime' },
            { sno: 11, grantNo: '202211066190', author: 'Dr. Devesh Kumar Bandil', affiliation: 'PIET, Jaipur', title: 'An Artificial Intelligence Based System For Providing Empirical Investigation Of The Determinants Of Corporate Capital Structure Decisions And Method Thereof' },
            { sno: 12, grantNo: '202211039557', author: 'Dr. Rakhi Mutha', affiliation: 'PIET, Jaipur', title: 'Identification And Mitigation Of Attacks In Wireless Sensor Network Using Trust Based Blockchain Mechanism' },
            { sno: 13, grantNo: '202211023593', author: 'Dr. Budesh kanwar', affiliation: 'PIET, Jaipur', title: 'Data Science based Machine Learning Model on Economic Applications' },
            { sno: 14, grantNo: '202211022102', author: 'Dr. Priyanka Kaushik', affiliation: 'PIET, Jaipur', title: 'Systems and Methods for Monitoring and Diagnostics of Cyber/Network Security Remotely Using Machine Learning Feature' },
            { sno: 15, grantNo: '202211005093', author: 'Dr. Priyanka kaushik', affiliation: 'PIET, Jaipur', title: 'Method for cursor mention control calibration and object selection using Deep Learning' },
            { sno: 16, grantNo: '202211070762', author: 'Dr. Budesh Kanwer', affiliation: 'PIET, Jaipur', title: 'Enhancement in Navigation system with Verbalbriefing and short video of important destinations' },
            { sno: 17, grantNo: '202211070247', author: 'Shikha Gautam', affiliation: 'PIET, Jaipur', title: 'QR based Automated System for the Collection & Donation of Residuals Medicine Stocks' },
            { sno: 18, grantNo: '202211069267', author: 'Vivek Saxena', affiliation: 'PIET, Jaipur', title: 'Security Improvement In Storage Of Dockers Containers On Cloud Server' },
            { sno: 19, grantNo: '202211068998', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'An Intelligent System And Method For Smart Cities To Provide Parking Solutions By Leasing Out Personal And Commercial Parking Spaces Using Artificial Intelligence' },
            { sno: 20, grantNo: '202211067851', author: 'Alka Rani', affiliation: 'PIET, Jaipur', title: 'An Intelligent System And Method For Developing Iot Based Virtual Doctor' },
            { sno: 21, grantNo: '202211067504', author: 'Dr. Shruti Thapar', affiliation: 'PIET, Jaipur', title: 'System And Model For Development Of Energy Efficient Routing Protocol For Wireless Sensor Networks For Enhancement Of Sensor Node And Battery Lifetime' },
            { sno: 22, grantNo: '202211067216', author: 'Rahul Gupta', affiliation: 'PIET, Jaipur', title: 'Reduced Switch Multilevel Inverter For Improved Power Quality Based On Solar Photovoltaic Systems' },
            { sno: 23, grantNo: '202211065546', author: 'Deepak Moud', affiliation: 'PIET, Jaipur', title: 'Automatic Signature Verification To Maintain Social Distancing' },
            { sno: 24, grantNo: '202211062722', author: 'Dr. Dinesh Goyal', affiliation: 'PIET, Jaipur', title: 'An Intelligent System For Peer-To-Peer Wireless Power Transfer Among Ubiquitous Devices' },
            { sno: 25, grantNo: '202211062261', author: 'Parv Sharma', affiliation: 'PIET, Jaipur', title: 'An Intelligent System & Method For Autonomous Sunlight Reflector And Moisture Level Indicator With Nutrient Provider' },
            { sno: 26, grantNo: '202211060618', author: 'Anurag Anand Duvey', affiliation: 'PIET, Jaipur', title: 'An Intelligent Management System For Foul Detection And Performance Analysis In Football Matches Using Artificial Intelligence With Machine Learning Techniques' },
            { sno: 27, grantNo: '202211059380', author: 'Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'System & Method For Intelligent Virtual Stock Trading And Management Using Machine Learning Approach' },
            { sno: 28, grantNo: '202211007358', author: 'Dr Neeraj', affiliation: 'PIET, Jaipur', title: 'Design and Implementation of Wireless Sensor Network Architecture for Leak Detection and Monitoring in Gas Supply Distribution Network' },
            { sno: 29, grantNo: '202211007357', author: 'Dr Bhanu Pratap', affiliation: 'PIET, Jaipur', title: 'Novel Resin Based Dental Composites filled with Wollastonite and Nano Alumina' },
            { sno: 30, grantNo: '202211007356', author: 'Mr. Atrakesh Pandey', affiliation: 'PIET, Jaipur', title: 'Automated Time table Generator Using mc learning' },
            { sno: 31, grantNo: '202211007355', author: 'Ms. Shefali Parihar', affiliation: 'PIET, Jaipur', title: 'Energy Aware Aggregate and Clustering Node Rotation with Sink Relocation in MANET' },
            { sno: 32, grantNo: '202211007354', author: 'Mr. Sharad Shrivastava', affiliation: 'PIET, Jaipur', title: 'Manufacture of highly efficient & low-cost solar cells using Perovskites based on TiO2 nanostructure' },
            { sno: 33, grantNo: '202211007353', author: 'Mr. Pawan Kumar Patidar', affiliation: 'PIET, Jaipur', title: 'Skin Disease Identification Using Machine Learning Algorithms (SVM, KNN and RNN)' },
            { sno: 34, grantNo: '202211007352', author: 'Ms. Priyanka Sharma', affiliation: 'PIET, Jaipur', title: 'An Intelligent System for Automated Text Caption Generation from Medical Images Using Image Processing' },
            { sno: 35, grantNo: '202211007351', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'An Intelligent Iot-Based Solar Tracking System with Deep Learning Analysis and Method for its Application' },
            { sno: 36, grantNo: '202211007350', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'System & Method for Intelligent Virtual Stock Trading and Management Using Machine Learning Approach' },
            { sno: 37, grantNo: '202211007349', author: 'Dr Rakhi Mutha', affiliation: 'PIET, Jaipur', title: 'Time, Service and Energy Based Credit Token System in BlockChain Applicable in Indian Urban Areas' },
            { sno: 38, grantNo: '202231062750', author: 'Mr. Anurag Anand Duvey', affiliation: 'PIET, Jaipur', title: 'Development Of A Smart Vehicle Horn management System Based On Artificial Intelligence And Machine Learning for Noise Pollution Control' },
            { sno: 39, grantNo: '372899-001', author: 'Dr. Pankaj Rahi', affiliation: 'PIET, Jaipur', title: 'Dr. Pankaj Rahi' }
        ],
        2021: [
            { sno: 1, grantNo: '202111011259', author: 'Dr. Dinesh Goyal', affiliation: 'PIET, Jaipur', title: 'Method and system for modeling of scalable cloud environment' },
            { sno: 2, grantNo: '202111009955', author: 'Dr. Anil Kumar', affiliation: 'PIET, Jaipur', title: 'Development of Scene Perception System for Visually impaired People using IoT based System' },
            { sno: 3, grantNo: '202111056332', author: 'Dr. Rakhi Mutha', affiliation: 'PIET, Jaipur', title: 'Best HR Practices in an Organized Retail Sector' },
            { sno: 4, grantNo: '202111058507', author: 'Dr. Pooja Gupta', affiliation: 'PIET, Jaipur', title: 'Cushioned Piled Raft foundation to protect buildings: Novel composite piled raft' },
            { sno: 5, grantNo: '2021105547', author: 'Dr. Anil Kumar', affiliation: 'PIET, Jaipur', title: 'Smart and Intelligent Medical Bed for Child Patient Care' },
            { sno: 6, grantNo: '2021105487', author: 'Dr. Pooja Gupta', affiliation: 'PIET, Jaipur', title: 'Novel Granular piles installation process in soft clays with the calculation using design Charts' },
            { sno: 7, grantNo: '2021104892', author: 'Dr. Anil Kumar', affiliation: 'PIET, Jaipur', title: 'Method of Garbage Monitoring and Cleaning Process by IoT' }
        ],
        2020: [
            { sno: 1, grantNo: '202011008465', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Method of food delivery for matching supply and demand of food donators and food receivers' },
            { sno: 2, grantNo: '202011009938', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Method of obstacles detection and control of robotic wheelchair' },
            { sno: 3, grantNo: '202011022112', author: 'Dr. Dinesh Goyal', affiliation: 'PIET, Jaipur', title: 'VITRO: Virtual Trial Room' },
            { sno: 4, grantNo: '202011025393', author: 'Mr. Manish Bhardwaj', affiliation: 'PIET, Jaipur', title: 'A Real Time Drowsiness Detection using Machine Learning & Artificial Intelligence' },
            { sno: 5, grantNo: '202041017124', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Wearable Device For Monitor And Control The Mental Stress During Isolation' },
            { sno: 6, grantNo: '202041048753', author: 'Dr. Dinesh Goyal', affiliation: 'PIET, Jaipur', title: 'Method for semantic segmentation of digital image in electronic device interface using machine learning' }
        ],
        2019: [
            { sno: 1, grantNo: '201911017877', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'System Of Power Management With Maximum Power Point Tracking (Mppt) Control Of Large-Scale Grid Connected Inverter For Photovoltaic Applications' },
            { sno: 2, grantNo: '201911031482', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'System of smart grid network for electricity supply in smart cities using big data computing' },
            { sno: 3, grantNo: '201921031179', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Machine-learning based method for optimization of power management in renewable and nonrenewable energy resources' },
            { sno: 4, grantNo: '201941029525', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'System of heat sink motor control for consumer electronic devices' },
            { sno: 7, grantNo: '202511004392', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AUTONOMOUS HUMANOID ROBOT WITH REAL-TIME BRAIN-MIMICKING CAPABILITIES USING NEURAL SIGNAL PROCESSING' },
            { sno: 8, grantNo: '202511004399', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'BI-DIRECTIONAL LINE FOLLOWING ROBOT WITH ENHANCED SENSOR INTEGRATION AND AUTONOMOUS OPERATIONAL CAPABILITIES' },
            { sno: 9, grantNo: '202511004408', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'VISIONARY CONNECT: MULTI-FUNCTIONAL SMART GLASSES FOR ENHANCED COMMUNICATION AND MOBILITY FOR THE HEARING, SPEECH, AND VISION IMPAIRED' },
            { sno: 10, grantNo: '202511008505', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'Smart Pool Guardian: Voice-Controlled Management System' },
            { sno: 11, grantNo: '202511009043', author: 'Aditya Pareek', affiliation: 'PIET, Jaipur', title: 'EmpowerFemGuard: Smart Vending with Mobile Authentication & Personalized Usage Tracking' },
            { sno: 12, grantNo: '4142/2025-CO/L', author: 'Dr. Sonia Kaur Bansal', affiliation: 'PIET, Jaipur', title: 'Interactive Multi-Sensory Learning Method for Teaching English Poetry in Classrooms' },
        ],
        2024: [
            { sno: 1, grantNo: '202411000987', author: 'Mr. Adiya Pareek', affiliation: 'PIET, Jaipur', title: 'PawsGuard Pro: Integrated GPS-GSM Pet Tracker with Heartbeat Monitoring' },
            { sno: 2, grantNo: '202411000979', author: 'Mr. Adiya Pareek', affiliation: 'PIET, Jaipur', title: 'CamScanPay: QR Code Payment Authentication with Fingerprint Security' },
            { sno: 3, grantNo: '202411000922', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'IoT Enable Extended Reality for College Virtual Tour: An Emusive Mobile Application with Real Voice' },
            { sno: 4, grantNo: '202411001312', author: 'Ms. Himani Jangid', affiliation: 'PIET, Jaipur', title: 'Sustainable AgriTech: A Comprehensive IoT Approach to Smart Farming' },
            { sno: 5, grantNo: '202411001543', author: 'Mr. Nakshatra Kumar Gupta', affiliation: 'PIET, Jaipur', title: 'Innovative Smart Mirror: A Fusion of Technology and Elegance' },
            { sno: 6, grantNo: '202411001779', author: 'Mr. Kunal Sharma', affiliation: 'PIET, Jaipur', title: 'Integrative Solar-Electric Vehicle Power System with High-Efficiency Battery Management' },
            { sno: 7, grantNo: '202411025820', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'Street Light Advanced Emergency Sensor and Switch System' },
            { sno: 8, grantNo: '202411025772', author: 'Ms. Aniva Sharma', affiliation: 'PIET, Jaipur', title: 'TempFlow Hydration: Your Personalized Thirst Quencher' },
            { sno: 9, grantNo: '202411025774', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'Licence Plate Recognition System for Anti-Counterfeiting' },
            { sno: 10, grantNo: '202411025781', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'IoT-Enhanced Collaborative Robot: Intelligent Solutions for Advanced Healthcare and Home Security with AR Integration' },
            { sno: 11, grantNo: '202411026398', author: 'Mr. Vikash Sharma', affiliation: 'PIET, Jaipur', title: 'Smart Glove System Enabling Gesture-Driven Speech Interface for Augmentative and Alternative Communication (AAC) in Speech-Impaired Individuals' },
            { sno: 12, grantNo: '202411025837', author: 'Mr. Abhay Choudhary', affiliation: 'PIET, Jaipur', title: 'Development of Vehicle Monitoring System' },
            { sno: 13, grantNo: '202411026396', author: 'Mr. Rajendra Singh', affiliation: 'PIET, Jaipur', title: 'To protect the Healthy with sensors in Jacket utilizing Modern Technology' },
            { sno: 14, grantNo: '202411026387', author: 'Ms. Jayshree Surolia', affiliation: 'PIET, Jaipur', title: 'Mobile Device Based Communication System for Alerts, Pertaining to Women Safety' },
            { sno: 15, grantNo: '202411026385', author: 'Dr. Payal Bansal', affiliation: 'PIET, Jaipur', title: 'Water Saving Module by Integrating Flush Model System' },
        ],
        2023: [
            { sno: 1, grantNo: '202311037475', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Intelligent waste segregation: Enhancing efficiency through smart dustbin for dry and wet waste segregation' },
            { sno: 2, grantNo: '202311037494', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Advanced and compact IoT-based system for home automation and intelligent electricity' },
            { sno: 3, grantNo: '202311049138', author: 'Satish Parmar', affiliation: 'PIET, Jaipur', title: 'Design and development of an IoT-based knee guard to aid blind individual in obstacle avoidance' },
            { sno: 4, grantNo: '202311037396', author: 'Mr. Abhishek Dadhich', affiliation: 'PIET, Jaipur', title: "Digital system for student's presence" },
            { sno: 5, grantNo: '202311051802', author: 'Mr. Indra Kishore', affiliation: 'PIET, Jaipur', title: 'Immersive XR system with voice assistant integration for exploring of educational institutions' },
            { sno: 6, grantNo: '202311037912', author: 'Dr. Uday Singh', affiliation: 'PIET, Jaipur', title: 'Network Traffic Analyzer using NodeMCU-32' },
            { sno: 7, grantNo: '202311078174', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'An Intelligent Automatic Bill Generation System' },
            { sno: 8, grantNo: '202311076140', author: 'Mr. Indra Kishore', affiliation: 'PIET, Jaipur', title: 'Development of the Artificial Intelligence-Based AgroGenius System for Enhancing Farming Efficiency Based on the IoT-AR Drone Approach' },
            { sno: 9, grantNo: '202311075320', author: 'Mr. Indra Kishore', affiliation: 'PIET, Jaipur', title: 'An IoT-Based Two-Way People Counter with Dynamic Tracking and Data Regression Analysis for Single Door Entry and Exit' },
            { sno: 10, grantNo: '202311037945', author: 'Dr. Anil Kumar', affiliation: 'PIET, Jaipur', title: 'Implementing IOT for Garbage Monitoring and Removal' },
            { sno: 11, grantNo: '202311086335', author: 'Mr. Rahul Sawhney', affiliation: 'PIET, Jaipur', title: 'Comparative Performance of Deep Learning Architectures in Lower-Grade Segmentation: An Empirical Analysis' },
        ],
    };
    
    const IPRAccordion = ({ year, data }: { year: string; data: any[] }) => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
            <div className="bg-white shadow-lg rounded-xl border border-gray-100 mb-6 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                    className="cursor-pointer bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 flex justify-between items-center hover:from-secondary hover:to-primary transition-all duration-300" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5" />
                        <span className="font-bold text-lg">Patents Filed in {year}</span>
                        <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold">
                            {data.length} Patents
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </div>
                </div>
                {isOpen && (
                    <div className="p-6 bg-gray-50">
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">S. No</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Grant No.</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Author</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Affiliation</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Title</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {data.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-blue-50 transition-colors duration-200">
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.sno}</td>
                                            <td className="px-4 py-3 text-sm text-primary font-semibold">{item.grantNo}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">{item.author}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700">{item.affiliation}</td>
                                            <td className="px-4 py-3 text-sm text-gray-900 font-medium leading-relaxed">{item.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        );
    };
    
    const StatsCard = ({ icon, title, value, color }: { icon: React.ReactNode; title: string; value: string; color: string }) => (
        <div className={`${color} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-white/80 text-sm font-medium">{title}</p>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                </div>
                <div className="text-white/80">
                    {icon}
                </div>
            </div>
        </div>
    );

    const totalPatents = Object.values(iprData).reduce((sum, yearData) => sum + yearData.length, 0);
    const years = Object.keys(iprData).length;
    const latestYear = Math.max(...Object.keys(iprData).map(Number));

    return (

        
        <div>
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Intellectual Property Rights (IPR) Cell"
                description="Encouraging, protecting, managing and commercializing Intellectual Property generated through the College."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Innovation", href: "#" },
                    { label: "IPR Cell", isCurrent: true },
                ]}
            />

            {/* Stats Section */}
                        <section className="py-16 bg-gray-50">
                            <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <StatsCard
                                        icon={<FileText className="h-8 w-8" />}
                                        title="Total Patents Filed"
                                        value={totalPatents.toString()}
                                        color="bg-primary"
                                    />
                                    <StatsCard
                                        icon={<Calendar className="h-8 w-8" />}
                                        title="Years of Innovation"
                                        value={years.toString()}
                                        color="bg-primary"
                                    />
                                    <StatsCard
                                        icon={<Award className="h-8 w-8" />}
                                        title="Latest Patents"
                                        value={iprData[latestYear.toString()]?.length.toString() || '0'}
                                        color="bg-primary"
                                    />
                                    <StatsCard
                                        icon={<Users className="h-8 w-8" />}
                                        title="Active Researchers"
                                        value="25+"
                                        color="bg-primary"
                                    />
                                </div>
                            </div>
                        </section>
            

            <div className="container mx-auto px-6 py-12">
                {/* Introduction Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-shield-alt text-secondary mr-3"></i>
                            About IPR Cell
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Intellectual property plays an important role in providing a competitive edge to any Institution. 
                            The tangible assets like inventions, designs, software, brand name and other creative & innovative 
                            ideas are more valuable than physical assets. PIET IPR Cell is committed to encourage, protect, 
                            manage and commercialize Intellectual Property such as Patent, Copyright, Trademark etc. generated 
                            through the College. The cell creates conducive environment in the academics for the development 
                            of Intellectual Property. Faculty and students of PIET are actively participating in the IPR 
                            filing process in different disciplines of Engineering & Technology.
                        </p>
                    </div>
                </section>

                {/* Importance of IPR */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-lightbulb text-secondary mr-3"></i>
                            Importance of IPR
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            It is necessary to protect the Intellectual property in order to enable organizations to earn 
                            recognition or financial benefits. Governments of various countries protect the innovative ideas 
                            of the inventors through Intellectual Property Rights (IPR). Recently, IPR has become a central 
                            issue in the developed and developing countries. The rationale for this IPR lies in the need to 
                            create awareness about the importance of IPRs as a marketable financial asset and economic tool 
                            among the researchers, faculty and students of the College. Intellectual property Rights: means 
                            the rights derived from the IP e.g. Patents, registered designs, copyright etc.
                        </p>
                    </div>
                </section>

                {/* Objectives */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-bullseye text-secondary mr-3"></i>
                            Objectives
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To create an awareness about IPR for faculties and students of the Institution.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To impart training on future endeavours regarding patent filing processes, procedure of IPR, screen projects, make drafts and file patents to the competing authority.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To conduct workshops, seminars and training course on IPR.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To promote better understanding of IPR.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To encourage faculty members and students to go patentable works.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                Frame and keep updated IPR Policy of the Institution.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                Communicate the IPR Policy to the various stakeholders and the Inventors of the Institution, students in general.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                Identify prospective inventions, innovations, Service improvement ideas and Copyrights.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                Study and recommend inventions etc for feasibility of converting to patents/Copyrights.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To promote technology advancements for improved quality of life and environment protection.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Strategies */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-chess text-secondary mr-3"></i>
                            Strategies
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>IPR cell shall guide and help the faculty members and students of PIET in patentability assessment and to apply for various IPRs such as Invention(s), Designs, Integrated Circuit Layouts and other creative works.</p>
                            
                            <p>The faculty members /students desirous of filing a patent or for any other IPR application would be given the necessary advice and guidance by the IPR cell.</p>
                            
                            <p>An internal approval from the Principal wherein the names of the Inventors/Authors shall be mentioned is to be signed by the Principal and forwarded by the HOD for approval of the Head of IPR Cell.</p>
                            
                            <p>Invention Patent /Trademark and similar documents are to be treated and maintained confidentially by the IPR Cell.</p>
                            
                            <p>The IPR cell shall help the inventor in drafting the patent application/ or any other IPR application and filling of relevant forms.</p>
                            
                            <p>The draft application along with the relevant forms shall be forwarded to the concerned authority by the IPR cell.</p>
                            
                            <p>Any work sought to be filed by a faculty member and or student(s) arising out of R&D work done at PIET will be filed in joint names as inventors or authors while PIET shall be the applicant and owner of Intellectual Property (IP).</p>
                            
                            <p>After filing of the application for IP protection, the inventors shall inform the IPR cell of any further development, if any, in the related R & D work.</p>
                        </div>
                    </div>
                </section>

                {/* Types of IP */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-layer-group text-secondary mr-3"></i>
                            Types of Intellectual Property
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Patent</h3>
                                <p className="text-gray-700 text-sm">An exclusive right granted for an invention, which is a product or a process that provides a new way of doing something, or offers a new technical solution to a problem.</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Copyright</h3>
                                <p className="text-gray-700 text-sm">An exclusive right given to the author of the original literary, architectural, dramatic, musical and artistic works; cinematograph films; and sound recordings.</p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Trade/Service Mark</h3>
                                <p className="text-gray-700 text-sm">A mark capable of being represented graphically and which is capable of distinguishing the goods or services of one person from those of others.</p>
                            </div>
                            <div className="border-l-4 border-yellow-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Industrial Design</h3>
                                <p className="text-gray-700 text-sm">Features of shape, configuration, pattern, ornament or composition of lines or colours applied to any article by any industrial process.</p>
                            </div>
                            <div className="border-l-4 border-red-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">IC Layout Designs</h3>
                                <p className="text-gray-700 text-sm">A layout of transistors and other circuitry elements and includes lead wires connecting such elements expressed in a semiconductor integrated circuit.</p>
                            </div>
                            <div className="border-l-4 border-indigo-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">New Plant Variety</h3>
                                <p className="text-gray-700 text-sm">A plant variety that is novel, distinct and shows uniform and stable characteristics.</p>
                            </div>
                            <div className="border-l-4 border-pink-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Biotechnology Inventions</h3>
                                <p className="text-gray-700 text-sm">Include recombinant products such as vectors, nucleotide sequences and micro‐organisms.</p>
                            </div>
                            <div className="border-l-4 border-teal-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Traditional Knowledge</h3>
                                <p className="text-gray-700 text-sm">Knowledge developed by indigenous or local communities for the use of natural resources, passed from one generation to another traditionally.</p>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Patent Portfolio by Year
                        </h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Browse through our year-wise collection of patents, showcasing continuous innovation 
                            and research excellence across various technological domains.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {Object.keys(iprData).sort((a, b) => b.localeCompare(a)).map((year) => (
                            <IPRAccordion key={year} year={year} data={iprData[year as unknown as keyof typeof iprData]} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Areas Section */}
            <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Key Research Areas</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Artificial Intelligence', count: '15+', icon: '🤖' },
                            { title: 'Internet of Things', count: '12+', icon: '🌐' },
                            { title: 'Robotics & Automation', count: '8+', icon: '🦾' },
                            { title: 'Healthcare Technology', count: '6+', icon: '🏥' }
                        ].map((area, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
                                <div className="text-4xl mb-4">{area.icon}</div>
                                <h3 className="font-bold text-primary mb-2">{area.title}</h3>
                                <p className="text-gray-600">{area.count} Patents</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

                {/* IPR Committee */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-users text-secondary mr-3"></i>
                            IPR Committee
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Name</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Designation</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Institute/Company</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Contact</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {iprCommittee.map((member) => (
                                        <tr key={member.sno} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3">{member.sno}</td>
                                            <td className="border border-gray-300 px-4 py-3 font-medium">{member.name}</td>
                                            <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                                            <td className="border border-gray-300 px-4 py-3">{member.institute}</td>
                                            <td className="border border-gray-300 px-4 py-3">{member.contact}</td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">
                                                    {member.email}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Useful Links */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-link text-secondary mr-3"></i>
                            Useful Links
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {usefulLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow hover:text-secondary"
                                >
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Promotional Scheme */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-gift text-secondary mr-3"></i>
                            Promotional Scheme for Patents & Copyrights
                        </h2>
                        <div className="mb-6">
                            <p className="text-gray-700 mb-4">
                                The Management of Poornima is pleased to declare the "PROMOTIONAL SCHEME FOR PATENTS & COPYRIGHTS" 
                                for faculty & staff members. This scheme will cover the registration/ filing as well as award/ grant 
                                of copyrights and patents (including design registration, Silicon Chip Design etc.).
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-primary mb-4">Key Features:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <i className="fas fa-star text-yellow-500 mr-3 mt-1"></i>
                                    100% reimbursement of filing fees for any Patent/Copyright filed in India
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-star text-yellow-500 mr-3 mt-1"></i>
                                    50% of registration/application fee borne by Poornima, 50% by applicant(s)
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-star text-yellow-500 mr-3 mt-1"></i>
                                    Separate agreement required before initiating application process
                                </li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-primary mb-4">Incentive Structure:</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-primary text-white">
                                            <th className="border border-gray-300 px-4 py-3 text-left">Category</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {incentiveTable.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-3">{item.category}</td>
                                                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">{item.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Important Conditions:</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Incentive applicable for applicants who have served Poornima for minimum 1 year</li>
                                <li>• In case of multiple applicants, amount will be equally divided</li>
                                <li>• Incentive given to principal applicant only</li>
                                <li>• No incentive for provisional copyrights/patents</li>
                                <li>• Copy of proof of award/grant must be submitted to Office of Registrar</li>
                                <li>• Expert committee will be constituted for consideration of applications</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Patent Search */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-search text-secondary mr-3"></i>
                            Patent Search Resources
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {patentSearchLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow hover:text-secondary"
                                >
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="container mt-10 mx-auto my-10">
                
                <h2 className="text-3xl text-primary font-bold mt-16 mb-8 text-center">
                    Important Documents
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={impdataColumns} data={impdata} />
            </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IPRCell;
