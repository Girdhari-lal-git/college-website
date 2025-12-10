import React from "react";
import { useState } from "react";
import SimpleImageSlider from "@/components/SimpleImageSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import FacultySwiper from "@/components/FacultySwiper";
import LazyImage from "@/components/LazyImage";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const images = [
    "https://www.piet.poornima.org/img_idealab/ud1.PNG",
    "https://www.piet.poornima.org/img_idealab/ud2.PNG",
    "https://www.piet.poornima.org/img_idealab/ud3.PNG",
    "https://www.piet.poornima.org/img_idealab/ud4.PNG",
];

const objectivePoints = [
    "Promotes innovation and entrepreneurship.",
    "For students in technical institutions.",
    "Provides a supportive environment. ",
    "Offers resources and guidance.",
    "Helps turn ideas into startups.",
];
const altTexts = [
    "Description for image 1",
    "Description for image 2",
    "Description for image 3",
];
const objectiveContent = <Checklist items={objectivePoints} />;

const visionContent = (
    <p>
        The IDEA Lab will be set up in technical education institutions across
        the country. It will be equipped with state-of-the-art facilities and
        resources to support the development of student ideas and projects. The
        lab will also provide students with access to mentors, experts, and
        industry leaders who can provide guidance and support throughout the
        development process.
        <br />
    </p>
);

const facultyData = [
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/1_Dr._Dinesh_Goyal.jpg",
        name: "Prof (Dr.) Dinesh Goyal",
        gender: "Male",
        designation:
            "Chief Mentor, PIET-AICTE IDEA LAB, Principal & Director, PIET",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/2_Dr._Payal_Bansal.jpg",
        name: "Dr. Payal Bansal",
        gender: "Female",
        designation:
            "HoD, IDEA Lab Outreach & Research, Professor, Department of ECE",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/3_Reshma_Kala.jpg",
        name: "Ms. Reshma Kala",
        gender: "Female",
        designation: "Assistant Professor, Co-coordinator PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/4_Dr._Ritam_Dutta.jpg",
        name: "Dr. Ritam Dutta",
        gender: "Male",
        designation: "Professor, Department of IoT",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/5_Aniva_Sharma.JPG",
        name: "Ms. Aniva Sharma",
        gender: "Female",
        designation: "Assistant Professor, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/6_Ashish_Ladda.jpg",
        name: "Mr. Ashish Laddha",
        gender: "Male",
        designation: "Technical Guru, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/7_Lakshman_Singh.jpg",
        name: "Mr. Lakshman Singh Chauhan",
        gender: "Male",
        designation: "Technical Officer, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/8_Sanjeev_Rishi.jpg",
        name: "Mr. Sanjeev Rishi",
        gender: "Male",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/9_Divya_Rostogi.jpg",
        name: "Ms. Divya Rastogi",
        gender: "Female",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/10_Sumit_Lunia.jpg",
        name: "Mr. Sumit Lunia",
        gender: "Male",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    },
];
const achievementcolumns = [
    { label: "S.No", key: "sno" },
    { label: "Participants", key: "participants" },
    { label: "Venue", key: "venue" },
    { label: "Outcomes", key: "outcome" },
];
const achievementdata = [
    {
        sno: 1,
        participants:
            "Team Name - Parksphere: Sudhanshu Tiwari, Kunal Sharma, Megh Shah, Dev Tekwani",
        venue: "Panipat Institute Of Engineering and Technology (National Innovation Challenge), Dec 2022, 1 day",
        outcome: "National Innovation Challenge",
    },
    {
        sno: 2,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "Abes Engineering College (Idea Lab Innovation Challenge), 2 days",
        outcome: "2nd winner",
    },
    {
        sno: 3,
        participants: "Team Name - Error: Kunal Sharma",
        venue: "LNMIIT (LNM HACKS), Jan 2023, 3 days",
        outcome: "3rd position",
    },
    {
        sno: 4,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "VGU (Hackathon), 3 days",
        outcome: "Top 10",
    },
    {
        sno: 5,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "VIT (Project Exhibition), 1 day",
        outcome: "2nd Position",
    },
    {
        sno: 6,
        participants:
            "Team Name - Web3 Wizards: Megh Shah, Mitushi Yadav, Arun Joseph",
        venue: "JIET Jodhpur (Hackathon), Mar 2023",
        outcome: "2nd prize",
    },
    {
        sno: 7,
        participants:
            "Team Name - Bug Squashers: Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "DU (Hackathon), Feb 2023, 2 days",
        outcome: "Top 15",
    },
    {
        sno: 8,
        participants:
            "Team Name - netWork: Rhythm Verma, Kartik Mehta, Sahaj Jain, Mayank Arora",
        venue: "SKIT (Start-up Expo), Apr 2023, 1 day",
        outcome: "Invited to work in their incubation cell",
    },
    {
        sno: 9,
        participants:
            "Team Name - Bug Squashers: Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "Thapar Institute of Engineering and Technology (Hackathon), Mar 2023, 2 days",
        outcome: "Built NFT games",
    },
    {
        sno: 10,
        participants:
            "Team Name - Bit-4-Byte: Hiya Gurbani, Lavina Sevani, Harshit Verma, Jatin Nama",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Top 7 in Software category",
    },
    {
        sno: 11,
        participants:
            "Team Name - The Errors: Kartikey Sharma, Gauri Singhal, Garvit Arora, Arpita Garg",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Top 5 in Hardware category",
    },
    {
        sno: 12,
        participants:
            "Team Name - Error 404: Harshvardhan Sharma, Mahendra Kumawat, Anurag Dadhich",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome:
            "Learned about the latest technologies and gained practical knowledge",
    },
    {
        sno: 13,
        participants: "Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome:
            "Learned about the latest technologies and gained practical knowledge",
    },
    {
        sno: 14,
        participants:
            "Burhanuddin Bohra, Kinana Bohra, Paawan Sharma, Diksha Kanwar",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome:
            "Learned about the latest technologies and gained practical knowledge",
    },
    {
        sno: 15,
        participants:
            "Pranav Agrawal, Lakshay Singh Chouhan, Chaitanya Sharma, Kashish Aggarwal",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome:
            "Learned about the latest technologies and gained practical knowledge",
    },
];

const workshopcolumns = [
    { label: "S.No", key: "sno" },
    { label: "NAME OF THE EVENT", key: "eventname" },
    { label: "START DATE", key: "startdate" },
    { label: "END DATE", key: "enddate" },
    { label: "PARTICIPANTS", key: "participants" },
];
const workshopdata = [
    //Year 2021-22
    {
    "sno": "1",
    "eventname": "Faculty Development Program on PCB Design, Solar Inverters, Soldering and IoT Integration Using NodeMCU",
    "startdate": "19 April 2022",
    "enddate": "21 April 2022",
    "participants": "40"
  },
  {
    "sno": "2",
    "eventname": "Robotics in Indian Industry- Future Trends",
    "startdate": "27 May 2022",
    "enddate": "27 May 2022",
    "participants": "18"
  },
  {
    "sno": "3",
    "eventname": "School Visit - Neerja Modi School",
    "startdate": "08 June 2022",
    "enddate": "08 June 2022",
    "participants": "23"
  },

  // year 2022-23

  {
    "sno": "4",
    "eventname": "FDP on IoT based Product Development (using Advanced Digital Manufacturing Equipment, Tools and Resources)",
    "startdate": "13 July 2022",
    "enddate": "15 July 2022",
    "participants": "50"
  },
  {
    "sno": "5",
    "eventname": "Summer Internship Program on IoT based Product Development, using Advanced Digital Manufacturing Equipment, Tools and Resources",
    "startdate": "18 July 2022",
    "enddate": "18 July 2022",
    "participants": "146"
  },
  {
    "sno": "6",
    "eventname": "National Level Project Exhibition \"UDHBHAV\" 2022",
    "startdate": "22 August 2022",
    "enddate": "22 August 2022",
    "participants": "610"
  },
  {
    "sno": "7",
    "eventname": "FDP on Reverse Engineering for Product Design using CAD",
    "startdate": "01 September 2022",
    "enddate": "07 September 2022",
    "participants": "40"
  },
  {
    "sno": "8",
    "eventname": "Awareness Workshop for Industry Person",
    "startdate": "12 September 2022",
    "enddate": "12 September 2022",
    "participants": "11"
  },
  {
    "sno": "9",
    "eventname": "Awareness Workshop for Industry Person",
    "startdate": "14 September 2022",
    "enddate": "14 September 2022",
    "participants": "11"
  },
  {
    "sno": "10",
    "eventname": "A National Level Project Exhibition 2022 - VGU",
    "startdate": "15 September 2022",
    "enddate": "15 September 2022",
    "participants": "20"
  },
  {
    "sno": "11",
    "eventname": "Outside Participation",
    "startdate": "14 October 2022",
    "enddate": "16 October 2022",
    "participants": "10"
  },
  {
    "sno": "12",
    "eventname": "Awareness Workshop for Industry",
    "startdate": "18 October 2022",
    "enddate": "19 October 2022",
    "participants": "14"
  },
  {
    "sno": "13",
    "eventname": "Ideation Workshop for Students",
    "startdate": "21 September 2022",
    "enddate": "23 September 2022",
    "participants": "35"
  },
  {
    "sno": "14",
    "eventname": "Open Day for School Students",
    "startdate": "23 September 2022",
    "enddate": "23 September 2022",
    "participants": "37"
  },
  {
    "sno": "15",
    "eventname": "School Teacher Awareness Program",
    "startdate": "23 September 2022",
    "enddate": "28 September 2022",
    "participants": "14"
  },
  {
    "sno": "16",
    "eventname": "STUDENTS SKILLING PROGRAM",
    "startdate": "28 September 2022",
    "enddate": "03 October 2022",
    "participants": "29"
  },
  {
    "sno": "17",
    "eventname": "STUDENTS SKILLING PROGRAM",
    "startdate": "06 October 2022",
    "enddate": "11 October 2022",
    "participants": "43"
  },
  {
    "sno": "18",
    "eventname": "Professional Skilling Program",
    "startdate": "18 October 2022",
    "enddate": "22 October 2022",
    "participants": "43"
  },
  {
    "sno": "19",
    "eventname": "STUDENTS SKILLING PROGRAM",
    "startdate": "09 November 2022",
    "enddate": "16 November 2022",
    "participants": "52"
  },
  {
    "sno": "20",
    "eventname": "STUDENTS SKILLING PROGRAM",
    "startdate": "11 November 2022",
    "enddate": "16 November 2022",
    "participants": "53"
  },
  {
    "sno": "21",
    "eventname": "A Session on Design Thinking",
    "startdate": "18 November 2022",
    "enddate": "18 November 2022",
    "participants": "49"
  },
  {
    "sno": "22",
    "eventname": "ABES AICTE IDEA LAB STUDENT AMBASSADOR REGIONAL INNOVATION CHALLENGE",
    "startdate": "18 November 2022",
    "enddate": "19 November 2022",
    "participants": "11"
  },
  {
    "sno": "23",
    "eventname": "One Day Session for Deaf & Dumb School Students",
    "startdate": "26 November 2022",
    "enddate": "26 November 2022",
    "participants": "53"
  },
  {
    "sno": "24",
    "eventname": "STUDENTS SKILLING PROGRAM ON 3D PRINTING",
    "startdate": "30 November 2022",
    "enddate": "30 November 2022",
    "participants": "53"
  },
  {
    "sno": "25",
    "eventname": "Student Skilling Program On Laser Cutting & Engraving Process",
    "startdate": "01 December 2022",
    "enddate": "01 December 2022",
    "participants": "48"
  },
  {
    "sno": "26",
    "eventname": "Student Skilling Program on 3D Scanner",
    "startdate": "05 December 2022",
    "enddate": "05 December 2022",
    "participants": "54"
  },
  {
    "sno": "27",
    "eventname": "STUDENTS SKILLING PROGRAM ON LASER CUTTER MACHINE",
    "startdate": "07 December 2022",
    "enddate": "07 December 2022",
    "participants": "54"
  },
  {
    "sno": "28",
    "eventname": "Student Skilling Program on EAGLE CAD Software",
    "startdate": "08 December 2022",
    "enddate": "08 December 2022",
    "participants": "54"
  },
  {
    "sno": "29",
    "eventname": "Student Skilling Program on PCB Milling Machine",
    "startdate": "09 December 2022",
    "enddate": "09 December 2022",
    "participants": "46"
  },
  {
    "sno": "30",
    "eventname": "NATIONAL INNOVATION CHALLENGE At PIET, Panipat",
    "startdate": "10 December 2022",
    "enddate": "10 December 2022",
    "participants": "10"
  },
  {
    "sno": "31",
    "eventname": "Students Training Program on CNC Router",
    "startdate": "19 December 2022",
    "enddate": "20 December 2022",
    "participants": "52"
  },
  {
    "sno": "32",
    "eventname": "Entrepreneurship For Absolute Beginners",
    "startdate": "27 December 2022",
    "enddate": "27 December 2022",
    "participants": "57"
  },
  {
    "sno": "33",
    "eventname": "Skilling Development Program",
    "startdate": "28 December 2022",
    "enddate": "28 December 2022",
    "participants": "53"
  },
  {
    "sno": "34",
    "eventname": "Awareness Workshop for Industry",
    "startdate": "28 December 2022",
    "enddate": "29 December 2022",
    "participants": "14"
  },
  {
    "sno": "35",
    "eventname": "WORKSHOP ON ARDUINO C",
    "startdate": "29 December 2022",
    "enddate": "29 December 2022",
    "participants": "60"
  },
  {
    "sno": "36",
    "eventname": "A session on “Recent Trends in CAD Software for Engineering Students”",
    "startdate": "10 January 2023",
    "enddate": "11 January 2023",
    "participants": "60"
  },
  {
    "sno": "37",
    "eventname": "Skill Development Program on 3D Scanner and CO2 Laser Cutter",
    "startdate": "11 January 2023",
    "enddate": "12 January 2023",
    "participants": "53"
  },
  {
    "sno": "38",
    "eventname": "WORKSHOP ON 3D PRINTING IN INDUSTRY 4.0",
    "startdate": "17 January 2023",
    "enddate": "17 January 2023",
    "participants": "53"
  },
  {
    "sno": "39",
    "eventname": "Awareness Program on PCB Fabrication and Digital Manufacturing",
    "startdate": "23 January 2023",
    "enddate": "28 January 2023",
    "participants": ""
  },
  {
    "sno": "40",
    "eventname": "Outside Participation LNMIIT Hackathon",
    "startdate": "27 January 2023",
    "enddate": "29 January 2023",
    "participants": "24"
  },
  {
    "sno": "41",
    "eventname": "FDP SESSION FUTURE SCOPE OF ADDITIVE MANUFACTURING",
    "startdate": "06 February 2023",
    "enddate": "11 February 2023",
    "participants": "17"
  },
  {
    "sno": "42",
    "eventname": "SKILLING DEVELOPMENT PROGRAM ON PCB MILLING MACHINE",
    "startdate": "09 February 2023",
    "enddate": "10 February 2023",
    "participants": "36"
  },
  {
    "sno": "43",
    "eventname": "AWARENESS WORKSHOP FOR INDUSTRY PERSONS",
    "startdate": "09 February 2023",
    "enddate": "10 February 2023",
    "participants": "17"
  },
  {
    "sno": "44",
    "eventname": "SKILLING DEVELOPMENT PROGRAM ON \"LASER CUTTING AND ENGRAVING MACHINE\"",
    "startdate": "23 February 2023",
    "enddate": "25 February 2023",
    "participants": "35"
  },
  {
    "sno": "45",
    "eventname": "SKILLING DEVELOPMENT PROGRAM ON EAGLE SOFTWARE",
    "startdate": "15 March 2023",
    "enddate": "16 March 2023",
    "participants": "40"
  },
  {
    "sno": "46",
    "eventname": "SKILLING DEVELOPMENT PROGRAM ON AUTO CAD SOFTWARE",
    "startdate": "17 March 2023",
    "enddate": "18 March 2023",
    "participants": "52"
  },
  {
    "sno": "47",
    "eventname": "SKILLING DEVELOPMENT PROGRAM ON SOLID WORKS SOFTWARE",
    "startdate": "20 March 2023",
    "enddate": "21 March 2023",
    "participants": "44"
  },
  {
    "sno": "48",
    "eventname": "ONE DAY OF HANDS-ON TRAINING ON ARDUINO",
    "startdate": "23 March 2023",
    "enddate": "23 March 2023",
    "participants": "43"
  },
  {
    "sno": "49",
    "eventname": "SKILL DEVELOPMENT PROGRAM (SDP) ON ELECTRONIC SYSTEM DESIGN USING PCB PROTOTYPING",
    "startdate": "23 March 2023",
    "enddate": "25 March 2023",
    "participants": "37"
  },
  {
    "sno": "50",
    "eventname": "SKILL DEVELOPMENT PROGRAM ON FUSION 360",
    "startdate": "03 April 2023",
    "enddate": "04 April 2023",
    "participants": "51"
  },
  {
    "sno": "51",
    "eventname": "Digital Manufacturing and Industry 4.0",
    "startdate": "05 April 2023",
    "enddate": "06 April 2023",
    "participants": "46"
  },
  {
    "sno": "52",
    "eventname": "STUDENT TRAINING PROGRAM ON ARDUINO",
    "startdate": "14 April 2023",
    "enddate": "15 April 2023",
    "participants": "51"
  },
  {
    "sno": "53",
    "eventname": "Three days student training program on IDEA Lab Machinery",
    "startdate": "17 April 2023",
    "enddate": "19 April 2023",
    "participants": "30"
  },
  {
    "sno": "54",
    "eventname": "Student Skilling Program on Advanced PCB using Eagle CAD",
    "startdate": "04 May 2023",
    "enddate": "06 May 2023",
    "participants": "25"
  },
  {
    "sno": "55",
    "eventname": "Skill Development Program on Product Design and Prototyping using Sensors",
    "startdate": "10 May 2023",
    "enddate": "12 May 2023",
    "participants": ""
  },
  {
    "sno": "56",
    "eventname": "WORKSHOP ON IOT FROM IDEA TO PROTOTYPE: RAPID PROTOTYPING TECHNIQUES",
    "startdate": "18 May 2023",
    "enddate": "20 May 2023",
    "participants": "53"
  },
  {
    "sno": "57",
    "eventname": "ARDUINO IDE WORKSHOP",
    "startdate": "15 June 2023",
    "enddate": "17 June 2023",
    "participants": "53"
  },
  {
    "sno": "58",
    "eventname": "Workshop on PCB Milling Machine",
    "startdate": "17 December 2022",
    "enddate": "17 December 2022",
    "participants": ""
  },
  {
    "sno": "59",
    "eventname": "INTER COLLAGE STUDENT AWARENESS PROGRAM",
    "startdate": "09 September 2022",
    "enddate": "09 September 2022",
    "participants": "17"
  },
  {
    "sno": "60",
    "eventname": "2nd Edition of Poornima Hackathon",
    "startdate": "03 March 2023",
    "enddate": "04 March 2023",
    "participants": "1000+"
  },

  // year 2023-24
  {
    "sno": "61",
    "eventname": "3D PRINTING WORKSHOP",
    "startdate": "03 July 2023",
    "enddate": "05 July 2023",
    "participants": "44"
  },
  {
    "sno": "62",
    "eventname": "3 days skilling program on smart manufacturing",
    "startdate": "05 July 2023",
    "enddate": "07 July 2023",
    "participants": "53"
  },
  {
    "sno": "63",
    "eventname": "3 days skilling program on smart manufacturing and prototyping",
    "startdate": "10 July 2023",
    "enddate": "12 July 2023",
    "participants": "39"
  },
  {
    "sno": "64",
    "eventname": "Student ideation program on experiential learning in IoT",
    "startdate": "12 July 2023",
    "enddate": "14 July 2023",
    "participants": "44"
  },
  {
    "sno": "65",
    "eventname": "Skilling Program on Design Thinking and Advanced Manufacturing",
    "startdate": "19 July 2023",
    "enddate": "21 July 2023",
    "participants": "29"
  },
  {
    "sno": "66",
    "eventname": "Skilling Program on Design Thinking and Product Development",
    "startdate": "24 July 2023",
    "enddate": "25 July 2023",
    "participants": "33"
  },
  {
    "sno": "67",
    "eventname": "Skilling Program on Transforming Research into Publication, Patent, Project and Product Development",
    "startdate": "26 July 2023",
    "enddate": "28 July 2023",
    "participants": "40"
  },
  {
    "sno": "68",
    "eventname": "Ideation Workshop on Integrated Manufacturing Techniques",
    "startdate": "07 August 2023",
    "enddate": "09 August 2023",
    "participants": "36"
  },
  {
    "sno": "69",
    "eventname": "Skilling Program on Reverse Engineering",
    "startdate": "10 August 2023",
    "enddate": "12 August 2023",
    "participants": "41"
  },
  {
    "sno": "70",
    "eventname": "Skilling Program on Basics of Arduino and its Arduino",
    "startdate": "16 August 2023",
    "enddate": "19 August 2023",
    "participants": "31"
  },
  {
    "sno": "71",
    "eventname": "6 Days Skilling Program on CNC Router, Laser Cutter and 3D Printer",
    "startdate": "21 August 2023",
    "enddate": "26 August 2023",
    "participants": "39"
  },
  {
    "sno": "72",
    "eventname": "Skilling Program on Embedded System",
    "startdate": "24 September 2023",
    "enddate": "26 September 2023",
    "participants": "31"
  },
  {
    "sno": "73",
    "eventname": "1st International Conference on Innovation and Intellectual Property for Sustainable Development",
    "startdate": "01 September 2023",
    "enddate": "02 September 2023",
    "participants": "26"
  },
  {
    "sno": "74",
    "eventname": "Skilling Program on PCB Designing and Digital Manufacturing for Product Development",
    "startdate": "31 August 2023",
    "enddate": "02 September 2023",
    "participants": "32"
  },
  {
    "sno": "75",
    "eventname": "Hands-on Session on PCB Designing using Ki-CAD Software",
    "startdate": "11 September 2023",
    "enddate": "13 September 2023",
    "participants": "28"
  },
  {
    "sno": "76",
    "eventname": "Designing the Future - Navigating the World of PCBs with Cutting-Edge Software Solutions",
    "startdate": "04 January 2024",
    "enddate": "06 January 2024",
    "participants": "45"
  },
  {
    "sno": "77",
    "eventname": "Designing the Future - IoT Workshop for Beginners",
    "startdate": "08 January 2024",
    "enddate": "10 January 2024",
    "participants": "40"
  },
  {
    "sno": "78",
    "eventname": "Unlocking Creativity: Introducing the IDEA LAB to School Faculty",
    "startdate": "11 January 2024",
    "enddate": "13 January 2024",
    "participants": "35"
  },
  {
    "sno": "79",
    "eventname": "Reverse Engineering for Security",
    "startdate": "15 January 2024",
    "enddate": "17 January 2024",
    "participants": "42"
  },
  {
    "sno": "80",
    "eventname": "Advanced 3D Printing Workshop: Unleashing Innovation in Additive Manufacturing",
    "startdate": "18 January 2024",
    "enddate": "20 January 2024",
    "participants": "60"
  },
  {
    "sno": "81",
    "eventname": "The Ideation Workshop on Integrated Manufacturing",
    "startdate": "27 January 2024",
    "enddate": "29 January 2024",
    "participants": "40"
  },
  {
    "sno": "82",
    "eventname": "Interactive Session: Integration of IoT with PCBs - Challenges and Solutions",
    "startdate": "04 February 2024",
    "enddate": "04 February 2024",
    "participants": "50"
  },
  {
    "sno": "83",
    "eventname": "Expert Talk on The Development of Company Resources Through Virtualization Technology",
    "startdate": "10 February 2024",
    "enddate": "10 February 2024",
    "participants": "50"
  },
  {
    "sno": "84",
    "eventname": "REPORT ON PCB DESIGNING",
    "startdate": "19 February 2024",
    "enddate": "21 February 2024",
    "participants": "45"
  },
  {
    "sno": "85",
    "eventname": "Report on Ideation Workshop",
    "startdate": "22 February 2024",
    "enddate": "22 February 2024",
    "participants": "52"
  },
  {
    "sno": "86",
    "eventname": "3D Modeling Using AutoCAD Workshop",
    "startdate": "26 February 2024",
    "enddate": "28 February 2024",
    "participants": "42"
  },
  {
    "sno": "87",
    "eventname": "Introduction to Vinyl Cutter Workshop",
    "startdate": "03 March 2024",
    "enddate": "06 March 2024",
    "participants": "54"
  },
  {
    "sno": "88",
    "eventname": "IEEE NEXUS : Connecting you to technological excellence",
    "startdate": "06 March 2024",
    "enddate": "06 March 2024",
    "participants": "60"
  },
  {
    "sno": "89",
    "eventname": "Creating 3D Models using 3D Printer",
    "startdate": "11 March 2024",
    "enddate": "13 March 2024",
    "participants": "55"
  },
  {
    "sno": "90",
    "eventname": "Trends and Innovation in Health Care",
    "startdate": "16 March 2024",
    "enddate": "16 March 2024",
    "participants": "55"
  },
  {
    "sno": "91",
    "eventname": "Fabrication of PCB using Ink-Toner Method",
    "startdate": "18 March 2024",
    "enddate": "20 March 2024",
    "participants": "60"
  },
  {
    "sno": "92",
    "eventname": "Introduction to SLA 3D Printing",
    "startdate": "26 March 2024",
    "enddate": "28 March 2024",
    "participants": "45"
  },
  {
    "sno": "93",
    "eventname": "Field Visit: Pre-Incubation Units at Bhamashah Techno Hub, Jaipur",
    "startdate": "03 April 2024",
    "enddate": "03 April 2024",
    "participants": "40"
  },
  {
    "sno": "94",
    "eventname": "IDE Bootcamp",
    "startdate": "09 April 2024",
    "enddate": "10 April 2024",
    "participants": "177"
  },
  {
    "sno": "95",
    "eventname": "Leadership Talk with Prof. T.G. Sitharam",
    "startdate": "15 April 2024",
    "enddate": "15 April 2024",
    "participants": "50"
  },
  {
    "sno": "96",
    "eventname": "Industry Visit to TechnoS Instruments",
    "startdate": "18 April 2024",
    "enddate": "18 April 2024",
    "participants": "52"
  },
  {
    "sno": "97",
    "eventname": "Introduction to 3D Scanning",
    "startdate": "22 April 2024",
    "enddate": "24 April 2024",
    "participants": "50"
  },
  {
    "sno": "98",
    "eventname": "Approach to Innovation and IPR Registration",
    "startdate": "26 April 2024",
    "enddate": "26 April 2024",
    "participants": ""
  },
  {
    "sno": "99",
    "eventname": "Workshop on Introduction to Sensors and Their Application",
    "startdate": "02 May 2024",
    "enddate": "02 May 2024",
    "participants": "27"
  },
  {
    "sno": "100",
    "eventname": "Expert Talk on The Topic of Utilizing Virtualization Technology",
    "startdate": "10 May 2024",
    "enddate": "10 May 2024",
    "participants": "45"
  },
  {
    "sno": "101",
    "eventname": "The Student Ideation Program on Experimental Learning in IoT",
    "startdate": "16 May 2024",
    "enddate": "17 May 2024",
    "participants": "33"
  },
  {
    "sno": "102",
    "eventname": "Coding for Sensor Integration Workshop for First-Year Students",
    "startdate": "13 May 2024",
    "enddate": "15 May 2024",
    "participants": "48"
  },
  {
    "sno": "103",
    "eventname": "DESIGN THINKING AND PRODUCT DEVELOPMENT",
    "startdate": "24 May 2024",
    "enddate": "26 May 2024",
    "participants": "55"
  },
  {
    "sno": "104",
    "eventname": "Technology Awareness Session: Bridging Gaps, Shaping the Future",
    "startdate": "11 May 2024",
    "enddate": "11 May 2024",
    "participants": "52"
  },
  {
    "sno": "105",
    "eventname": "Workshop on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs",
    "startdate": "18 May 2024",
    "enddate": "20 May 2024",
    "participants": "50"
  },
  {
    "sno": "106",
    "eventname": "Laser Installation Workshop",
    "startdate": "06 June 2024",
    "enddate": "06 June 2024",
    "participants": "40"
  },
  {
    "sno": "107",
    "eventname": "SIH 2023",
    "startdate": "19 December 2023",
    "enddate": "20 December 2023",
    "participants": ""
  },
  {
    "sno": "108",
    "eventname": "Education: 3D printing in prototyping",
    "startdate": "16 November 2023",
    "enddate": "18 November 2023",
    "participants": ""
  },
  {
    "sno": "109",
    "eventname": "Crafting the future: Unleashing Creativity at the Nexus of IoT and Laser Cutting",
    "startdate": "04 December 2023",
    "enddate": "06 December 2023",
    "participants": ""
  },
  {
    "sno": "110",
    "eventname": "Innovation at the intersection: Exploring Synergies between IoT & 3D Printing",
    "startdate": "30 November 2023",
    "enddate": "02 December 2023",
    "participants": ""
  },
  {
    "sno": "111",
    "eventname": "IoT Architecture & Components",
    "startdate": "02 January 2024",
    "enddate": "06 January 2024",
    "participants": ""
  },
  {
    "sno": "112",
    "eventname": "Exploring eco-friendly 3D Printing materials in IoT Applications",
    "startdate": "27 November 2023",
    "enddate": "29 November 2023",
    "participants": ""
  },
  {
    "sno": "113",
    "eventname": "Implementing IoT and laser cutting in educational settings for interactive learning",
    "startdate": "07 December 2023",
    "enddate": "09 December 2023",
    "participants": ""
  },

  //year 2024-25

  {
    "sno": "114",
    "eventname": "From Object to Digital Twin: The Power of 3D Scanning",
    "startdate": "16 August 2024",
    "enddate": "16 August 2024",
    "participants": "33"
  },
  {
    "sno": "115",
    "eventname": "LASERTECH WORKSHOP: FROM DESIGN TO CUT",
    "startdate": "20 August 2024",
    "enddate": "20 August 2024",
    "participants": "31"
  },
  {
    "sno": "116",
    "eventname": "Laser cutting workshop",
    "startdate": "28 August 2024",
    "enddate": "28 August 2024",
    "participants": "25"
  },
  {
    "sno": "117",
    "eventname": "Orientation Session on Smart India Hackathon",
    "startdate": "10 September 2024",
    "enddate": "10 September 2024",
    "participants": "570"
  },
  {
    "sno": "118",
    "eventname": "Smart India Internal Hackathon",
    "startdate": "13 September 2024",
    "enddate": "14 September 2024",
    "participants": "552"
  },
  {
    "sno": "119",
    "eventname": "Laser Craft Workshop: Mastering the art of Laser cutting",
    "startdate": "27 September 2024",
    "enddate": "27 September 2024",
    "participants": "37"
  },
  {
    "sno": "120",
    "eventname": "Hack India",
    "startdate": "03 October 2024",
    "enddate": "04 October 2024",
    "participants": "118"
  },
  {
    "sno": "121",
    "eventname": "3D Printing Workshop",
    "startdate": "17 October 2024",
    "enddate": "17 October 2024",
    "participants": "43"
  },
  {
    "sno": "122",
    "eventname": "Building the Future: Robotic Arm Workshop",
    "startdate": "14 October 2024",
    "enddate": "14 October 2024",
    "participants": "37"
  },
  {
    "sno": "123",
    "eventname": "UDHBHAV 2024",
    "startdate": "06 November 2024",
    "enddate": "06 November 2024",
    "participants": "621"
  },
  {
    "sno": "124",
    "eventname": "Hack Sprint DCGC 2.0 Google Cloud Hackathon",
    "startdate": "13 November 2024",
    "enddate": "13 November 2024",
    "participants": "289"
  },
  {
    "sno": "125",
    "eventname": "Ki-Cad Workshop",
    "startdate": "22 January 2025",
    "enddate": "24 January 2025",
    "participants": "22"
  },
  {
    "sno": "126",
    "eventname": "FDP on Laser for Applied Sciences and IoT",
    "startdate": "04 February 2025",
    "enddate": "04 February 2025",
    "participants": "24"
  },
  {
    "sno": "127",
    "eventname": "The Art of Sensor Interfacing Using Arduino",
    "startdate": "10 February 2025",
    "enddate": "12 February 2025",
    "participants": "28"
  },
  {
    "sno": "128",
    "eventname": "Crafting with Lasers: A Begineer's Workshop",
    "startdate": "04 February 2025",
    "enddate": "06 February 2025",
    "participants": ""
  },
  {
    "sno": "129",
    "eventname": "Introduction to 3D Printing and Ultimate Cura",
    "startdate": "05 February 2025",
    "enddate": "07 February 2025",
    "participants": ""
  },
  {
    "sno": "130",
    "eventname": "IETE Inaugration and ISF Foundation Day/ IETE Day: Skill Enhancement",
    "startdate": "14 February 2025",
    "enddate": "14 February 2025",
    "participants": ""
  },
  {
    "sno": "131",
    "eventname": "Project Expo",
    "startdate": "14 February 2025",
    "enddate": "14 February 2025",
    "participants": ""
  },
  {
    "sno": "132",
    "eventname": "AICTE IDEA LAB Tech Fest",
    "startdate": "07 March 2025",
    "enddate": "07 March 2025",
    "participants": ""
  },
  {
    "sno": "133",
    "eventname": "A Hands on Workshop on Design Thinking",
    "startdate": "20 March 2025",
    "enddate": "20 March 2025",
    "participants": ""
  },
  {
    "sno": "134",
    "eventname": "An Expert Session on Filing to Grant Patents",
    "startdate": "02 April 2025",
    "enddate": "02 April 2025",
    "participants": ""
  },
  {
    "sno": "135",
    "eventname": "Unlocking Innovation: Exploring Intellectual Property Rights (IPR) In the Digital Age",
    "startdate": "12 March 2025",
    "enddate": "12 March 2025",
    "participants": ""
  },
  {
    "sno": "136",
    "eventname": "Government Senior Secondary School, Vanasthali, Newai Visit",
    "startdate": "20 February 2025",
    "enddate": "20 February 2025",
    "participants": ""
  },
  {
    "sno": "137",
    "eventname": "Industry Visit: Software Technology Parks of India",
    "startdate": "11 March 2025",
    "enddate": "11 March 2025",
    "participants": ""
  },
  {
    "sno": "138",
    "eventname": "A Hands-on Workshop on PCB Designing",
    "startdate": "01 April 2025",
    "enddate": "03 April 2025",
    "participants": ""
  },
  {
    "sno": "139",
    "eventname": "Awareness Workshop for industry - I",
    "startdate": "10 March 2025",
    "enddate": "11 March 2025",
    "participants": ""
  },
  {
    "sno": "140",
    "eventname": "Awareness Workshop for industry - II",
    "startdate": "26 March 2025",
    "enddate": "27 March 2025",
    "participants": ""
  },

  //2025-26

  
  {
    "sno": "141",
    "eventname": "Foreign Students Visit",
    "startdate": "09 July 2025",
    "enddate": "09 July 2025",
    "participants": "18"
  },
  {
    "sno": "142",
    "eventname": "Industry Expert Session - I (IIFON)",
    "startdate": "14 July 2025",
    "enddate": "14 July 2025",
    "participants": "28"
  },
  {
    "sno": "143",
    "eventname": "A Hands-on FDP for Educators",
    "startdate": "19 July 2025",
    "enddate": "25 July 2025",
    "participants": "19"
  },
  {
    "sno": "144",
    "eventname": "Awareness Workshop for Industry for Technical Assistants",
    "startdate": "21 July 2025",
    "enddate": "22 July 2025",
    "participants": "10"
  },
  {
    "sno": "145",
    "eventname": "Industry Expert Session - II (Arun and CM Sir)",
    "startdate": "21 July 2025",
    "enddate": "22 July 2025",
    "participants": ""
  },
  {
    "sno": "146",
    "eventname": "Awareness Workshops for Industry - I (PCE)",
    "startdate": "07 August 2025",
    "enddate": "08 August 2025",
    "participants": ""
  },
  {
    "sno": "147",
    "eventname": "School Visit (CA)",
    "startdate": "21 August 2025",
    "enddate": "21 August 2025",
    "participants": "71"
  },
  {
    "sno": "148",
    "eventname": "Mentorship Programme - Parul University",
    "startdate": "21 August 2025",
    "enddate": "22 August 2025",
    "participants": "110"
  },
  {
    "sno": "149",
    "eventname": "Awareness Workshops for Industry - II (HONDA)",
    "startdate": "01 September 2025",
    "enddate": "02 September 2025",
    "participants": ""
  },
  {
    "sno": "150",
    "eventname": "Workshop on Laser-based Prototyping & Fabrication",
    "startdate": "10 September 2025",
    "enddate": "12 September 2025",
    "participants": "55"
  },
  {
    "sno": "151",
    "eventname": "Awareness Workshops for Industry - III (SKIT)",
    "startdate": "15 September 2025",
    "enddate": "16 September 2025",
    "participants": ""
  },
  {
    "sno": "152",
    "eventname": "SIH Internal Hackathon 2025",
    "startdate": "18 September 2025",
    "enddate": "19 September 2025",
    "participants": "900"
  },
  {
    "sno": "153",
    "eventname": "3-D Printer Workshop",
    "startdate": "24 September 2025",
    "enddate": "26 September 2025",
    "participants": "49"
  },
  {
    "sno": "154",
    "eventname": "School Visit (GA)",
    "startdate": "26 September 2025",
    "enddate": "26 September 2025",
    "participants": "60"
  },
  {
    "sno": "155",
    "eventname": "Internal Hackathon for Hardware Category",
    "startdate": "29 September 2025",
    "enddate": "29 September 2025",
    "participants": "42"
  },
  {
    "sno": "156",
    "eventname": "3D Printer Workshop for Hostlers",
    "startdate": "06 October 2025",
    "enddate": "08 October 2025",
    "participants": "55"
  },
  {
    "sno": "157",
    "eventname": "Industry Expert Session - III",
    "startdate": "10 October 2025",
    "enddate": "11 October 2025",
    "participants": "130"
  },
  {
    "sno": "158",
    "eventname": "Laser Cutter Workshop for Day’s Scholar",
    "startdate": "15 October 2025",
    "enddate": "17 October 2025",
    "participants": "34"
  },
  {
    "sno": "159",
    "eventname": "Industry Expert Session - IV",
    "startdate": "27 October 2025",
    "enddate": "28 October 2025",
    "participants": "110"
  },
  {
    "sno": "160",
    "eventname": "Industry Expert Session - V",
    "startdate": "03 November 2025",
    "enddate": "04 November 2025",
    "participants": "140"
  },

];

const facilitiesData = [
    {
        title: "CNC Router",
        description:
            "A CNC router is a computer-controlled cutting machine used to cut various materials like wood, metals, and plastics. It operates using CAD/CAM software to convert designs into G-code, guiding the machine's movements. CNC routers are versatile and can produce items such as furniture, signboards, and musical instruments with high precision and efficiency.",
        imageUrl: "/images/mach/1.jpg",
    },
    {
        title: "3D Printer SLA",
        description:
            "Stereolithography (SLA) 3D printers use light to cure liquid resin into hardened plastic, making them ideal for creating detailed prototypes, medical models, and production parts. This technology helps businesses reduce outsourcing costs, accelerate development cycles, and optimize production processes.",
        imageUrl: "/images/mach/2.jpg",
    },
    {
        title: "3D Printer FDM",
        description:
            "Fused Deposition Modeling (FDM) 3D printing involves extruding thermoplastic material layer by layer to create durable parts and prototypes. This method uses a heated nozzle to fuse material in precise patterns, forming strong objects. FDM is widely used for industrial applications, including prototyping and prosthetics.",
        imageUrl: "/images/mach/3.jpg",
    },
    {
        title: "Vinyl Cutter",
        description:
            "A vinyl cutter is a computer-controlled machine that uses a sharp blade to cut shapes and letters from adhesive vinyl for signs, banners, and advertisements. It can also cut specialty papers and thin magnets.",
        imageUrl: "/images/mach/4.jpg",
    },
    {
        title: "Laser Cutter",
        description:
            "Laser cutting uses a high-power laser to vaporize materials, resulting in precise cuts, commonly used in industrial manufacturing, small businesses, and hobbyist projects. It works by directing a focused laser beam through CNC-controlled optics.",
        imageUrl: "/images/mach/5.jpg",
    },
    {
        title: "Reflow Oven",
        description:
            "A reflow oven is used for soldering surface mount components to PCBs. It heats PCBs using infrared, convection, or a combination of both methods to ensure precise temperature control.",
        imageUrl: "/images/mach/6.jpg",
    },
    {
        title: "PCB Drilling",
        description:
            "PCB drilling creates holes and cavities in a circuit board for mounting components. The process involves mechanical drilling and chemical etching to achieve precise hole sizes.",
        imageUrl: "/images/mach/7.jpg",
    },
    {
        title: "3D Scanner",
        description:
            "3D scanning captures the shape and appearance of real-world objects to create digital 3D models. Technologies like LIDAR, structured light, and computed tomography are used.",
        imageUrl: "/images/mach/8.jpg",
    },
    {
        title: "PCB Milling",
        description:
            "A PCB milling system creates prototype circuit boards by removing copper from a sheet. This non-chemical process is ideal for in-house fabrication, reducing PCB turnaround time.",
        imageUrl: "/images/mach/9.jpg",
    },
    {
        title: "Scroll Saw",
        description:
            "A scroll saw cuts intricate shapes in wood, metal, and other materials using a thin, vibrating blade. It's useful for making detailed items like jewelry and ornaments.",
        imageUrl: "/images/mach/10.jpg",
    },
    {
        title: "Disc Sander",
        description:
            "A disc sander uses a rotating sanding disc to smooth and shape materials like wood, metal, and plastic. It's versatile for tasks like shaping, finishing, and polishing surfaces.",
        imageUrl: "/images/mach/11.jpg",
    },
    {
        title: "Multi-purpose Lathe/Drill/Mill Machine",
        description:
            "A multi-purpose lathe/drill/mill machine is versatile for turning, drilling, milling, and engraving various materials. It features a lathe bed, drill chuck, milling head, and engraving tool.",
        imageUrl: "/images/mach/11.jpg",
    },
    {
        title: "Cone Pulley",
        description:
            "A cone pulley/belt-driven heavy-duty machine uses a cone pulley and belt to transmit power, making it ideal for heavy-duty tasks like turning metal and wood.",
        imageUrl: "/images/mach/12.jpg",
    },
    {
        title: "Bench Grinder",
        description:
            "A bench grinder uses two abrasive wheels to grind, sharpen, polish, and clean metal and other materials. It's versatile for tasks like sharpening tools and shaping metal.",
        imageUrl: "/images/mach/13jpg",
    },
    {
        title: "Pratham 5.0",
        description:
            "Pratham 5.0 is an industrial 3D printer with a 500 x 500 x 500 mm build volume, capable of printing large and complex objects. It features fast print speeds, auto bed leveling, and filament detection.",
        imageUrl: "/images/mach/14.jpg",
    },
    {
        title: "SMD Hot Air Gun",
        description:
            "An SMD hot air gun is designed for precise SMD soldering and desoldering, offering adjustable temperature settings and various nozzles for controlled heating.",
        imageUrl: "/images/mach/15.jpg",
    },
    {
        title: "Analog Soldering Station",
        description:
            "Analog soldering stations use a mechanical thermostat for temperature control, with adjustments made via a knob. They are more affordable and user-friendly compared to digital models.",
        imageUrl: "/images/mach/16.jpg",
    },
    {
        title: "Industrial Vacuum Cleaner",
        description:
            "Industrial vacuum cleaners are robust machines designed for heavy-duty cleaning in factories and warehouses. They feature powerful motors and HEPA filters for dust control.",
        imageUrl: "/images/mach/17.jpg",
    },
    {
        title: "Oscilloscope 2 Analogue",
        description:
            "Analog oscilloscopes display electrical signal waveforms using a cathode ray tube (CRT). They measure signal properties like amplitude and frequency.",
        imageUrl: "/images/mach/18.jpg",
    },
    {
        title: "Oscilloscope Model EL 801",
        description:
            "The EL 801 is a general-purpose oscilloscope with 1 MHz bandwidth and various controls for signal analysis. Known for its reliability and versatility.",
        imageUrl: "/images/mach/19.jpg",
    },
    {
        title: "Laser Cutter Machine",
        description:
            "A laser cutter is a precision machine tool that uses a high-powered laser beam to cut, engrave, and shape various materials. It accurately cuts complex designs and patterns with minimal waste. The laser cutter's advanced technology ensures precise control, high speed, and clean finishes.",
        imageUrl: "/images/mach/20.jpg",
    },
    {
        title: "SMT Pick and Place",
        description:
            "An SMT (Surface-Mount Technology) pick-and-place machine is an automated system used in electronics manufacturing to place surface-mount components onto printed circuit boards (PCBs). It uses precision nozzles and cameras to accurately pick components from feeders and place them on the board.",
        imageUrl: "/images/mach/22.jpeg",
    },
    {
        title: "Robotic Arm",
        description:
            "A robotic arm is a programmable mechanical device that mimics the movement of a human arm. It typically consists of joints, links, and end-effectors, allowing it to perform tasks such as gripping, lifting, and manipulating objects. Robotic arms are widely used in manufacturing, automation, and medical applications.",
        imageUrl: "/images/mach/23.jpeg",
    },
];




const IdealLab = () => {

    {/*Patent data in different format */} 

type Patent = { sno: string; appNo: string; applicant: string; title: string };
    const [activeYear, setActiveYear] = useState("2025");

    const patentsByYear: Record<string, Patent[]> =  {
        "2022": [
            {
  sno: "01",
  appNo: "202241065504",
  applicant: "Dr. Pankaj Rahi",
  title: "A Smart Evaluation Method of The Effect of Economic Development On Crypto-Currency Using Machine Learning Techniques",
},
{
  sno: "02",
  appNo: "202241054495",
  applicant: "Mr. Udit Mamodiya",
  title: "A Smart Management System For Controlling Medical Robot Beds For Preventing Bedsores Using Artificial Intelligence And Machine Learning",
},
{
  sno: "03",
  appNo: "202241051919",
  applicant: "Mr. Udit Mamodiya",
  title: "An Intelligent Method For Defect Recognition In Additive Manufacturing Using Image Processing Based On IoT & AI",
},
{
  sno: "04",
  appNo: "202241042430",
  applicant: "Mr. Udit Mamodiya",
  title: "An Intelligent System And A Method For Monitoring Laundry Machine Operations Using Machine Learning For Analysis of Acoustic Transducer Signal Information",
},
{
  sno: "05",
  appNo: "202241026520",
  applicant: "Mr. Udit Mamodiya",
  title: "Intelligent System For Automatic Penalty On Traffic Rule Violations Based On Blockchain And Machine Learning",
},
{
  sno: "06",
  appNo: "202241025599",
  applicant: "Dr. Rakhi Mutha",
  title: "A Data Processing Device For Electric Vehicle Based On IoT",
},
{
  sno: "07",
  appNo: "202241020511",
  applicant: "Mr. Udit Mamodiya",
  title: "Integrated Library Management System For Various Public And Private Institutions Based On IoT Sensor",
},
{
  sno: "08",
  appNo: "202231005248",
  applicant: "Mr. Udit Mamodiya",
  title: "Intelligent System For Automatic Outdoor Street Lighting Fault Detection And Management System Based On IoT And Machine Learning",
},
{
  sno: "09",
  appNo: "202211074981",
  applicant: "Mr. Udit Mamodiya",
  title: "Development of An Intelligent Transistor System For Smart Cities To Provide Commercial Parking Spaces Using Artificial Intelligence And Machine Learning Techniques",
},
{
  sno: "10",
  appNo: "202211067502",
  applicant: "Dr. Shruti Thapar",
  title: "System And Model For Development of Energy Efficient Routing Protocol For Wireless Sensor Networks For Enhancement of Sensor Node And Battery Lifetime",
},
{
  sno: "11",
  appNo: "202211066190",
  applicant: "Dr. Devesh Kumar Bandil",
  title: "An Artificial Intelligence Based System For Providing Empirical Investigation of The Determinants of Corporate Capital Structure Decisions And Method Thereof",
},
{
  sno: "12",
  appNo: "202211039557",
  applicant: "Dr. Rakhi Mutha",
  title: "Identification And Mitigation of Attacks In Wireless Sensor Network Using Trust Based Blockchain Mechanism",
},
{
  sno: "13",
  appNo: "202211023593",
  applicant: "Dr. Budesh Kanwar",
  title: "Data Science Based Machine Learning Model On Economic Applications",
},
{
  sno: "14",
  appNo: "202211022102",
  applicant: "Dr. Priyanka Kaushik",
  title: "Systems And Methods For Monitoring And Diagnostics of Cyber/Network Security Remotely Using Machine Learning Feature",
},
{
  sno: "15",
  appNo: "202211005093",
  applicant: "Dr. Priyanka Kaushik",
  title: "Method For Cursor Mention Control Calibration And Object Selection Using Deep Learning",
},
{
  sno: "16",
  appNo: "202211070762",
  applicant: "Dr. Budesh Kanwer",
  title: "Enhancement In Navigation System With Verbalbriefing And Short Video of Important Destinations",
},
{
  sno: "17",
  appNo: "202211070247",
  applicant: "Shikha Gautam",
  title: "QR Based Automated System For The Collection & Donation of Residuals Medicine Stocks",
},
{
  sno: "18",
  appNo: "202211069267",
  applicant: "Vivek Saxena",
  title: "Security Improvement In Storage of Dockers Containers On Cloud Server",
},
{
  sno: "19",
  appNo: "202211068998",
  applicant: "Mr. Udit Mamodiya",
  title: "An Intelligent System And Method For Smart Cities To Provide Parking Solutions By Leasing Out Personal And Commercial Parking Spaces Using Artificial Intelligence",
},
{
  sno: "20",
  appNo: "202211067851",
  applicant: "Alka Rani",
  title: "An Intelligent System And Method For Developing IoT Based Virtual Doctor",
},
{
  sno: "21",
  appNo: "202211067504",
  applicant: "Dr. Shruti Thapar",
  title: "System And Model For Development of Energy Efficient Routing Protocol For Wireless Sensor Networks For Enhancement of Sensor Node And Battery Lifetime",
},
{
  sno: "22",
  appNo: "202211067216",
  applicant: "Rahul Gupta",
  title: "Reduced Switch Multilevel Inverter For Improved Power Quality Based On Solar Photovoltaic Systems",
},
{
  sno: "23",
  appNo: "202211065546",
  applicant: "Deepak Moud",
  title: "Automatic Signature Verification To Maintain Social Distancing",
},
{
  sno: "24",
  appNo: "202211062722",
  applicant: "Dr. Dinesh Goyal",
  title: "An Intelligent System For Peer-To-Peer Wireless Power Transfer Among Ubiquitous Devices",
},
{
  sno: "25",
  appNo: "202211062261",
  applicant: "Parv Sharma",
  title: "An Intelligent System & Method For Autonomous Sunlight Reflector And Moisture Level Indicator With Nutrient Provider",
},
{
  sno: "26",
  appNo: "202211060618",
  applicant: "Anurag Anand Duvey",
  title: "An Intelligent Management System For Foul Detection And Performance Analysis In Football Matches Using AI & ML",
},
{
  sno: "27",
  appNo: "202211059380",
  applicant: "Mr. Udit Mamodiya",
  title: "System & Method For Intelligent Virtual Stock Trading And Management Using Machine Learning Approach",
},
{
  sno: "28",
  appNo: "202211007358",
  applicant: "Dr. Neeraj",
  title: "Design And Implementation of Wireless Sensor Network Architecture For Leak Detection And Monitoring In Gas Supply Distribution Network",
},
{
  sno: "29",
  appNo: "202211007357",
  applicant: "Dr. Bhanu Pratap",
  title: "Novel Resin Based Dental Composites Filled With Wollastonite And Nano Alumina",
},
{
  sno: "30",
  appNo: "202211007356",
  applicant: "Mr. Atrakesh Pandey",
  title: "Automated Time Table Generator Using ML",
},
{
  sno: "31",
  appNo: "202211007355",
  applicant: "Ms. Shefali Parihar",
  title: "Energy Aware Aggregate And Clustering Node Rotation With Sink Relocation In MANET",
},
{
  sno: "32",
  appNo: "202211007354",
  applicant: "Mr. Sharad Shrivastava",
  title: "Manufacture of Highly Efficient & Low-Cost Solar Cells Using Perovskites Based On TiO2 Nanostructure",
},
{
  sno: "33",
  appNo: "202211007353",
  applicant: "Mr. Pawan Kumar Patidar",
  title: "Skin Disease Identification Using Machine Learning Algorithms (SVM, KNN and RNN)",
},
{
  sno: "34",
  appNo: "202211007352",
  applicant: "Ms. Priyanka Sharma",
  title: "An Intelligent System For Automated Text Caption Generation From Medical Images Using Image Processing",
},
{
  sno: "35",
  appNo: "202211007351",
  applicant: "Mr. Udit Mamodiya",
  title: "An Intelligent IoT-Based Solar Tracking System With Deep Learning Analysis And Method For Its Application",
},
{
  sno: "36",
  appNo: "202211007350",
  applicant: "Mr. Udit Mamodiya",
  title: "System & Method For Intelligent Virtual Stock Trading And Management Using Machine Learning Approach",
},
{
  sno: "37",
  appNo: "202211007349",
  applicant: "Dr. Rakhi Mutha",
  title: "Time, Service And Energy Based Credit Token System In Blockchain Applicable In Indian Urban Areas",
},
{
  sno: "38",
  appNo: "202231062750",
  applicant: "Mr. Anurag Anand Duvey",
  title: "Development of A Smart Vehicle Horn Management System Based On AI & ML For Noise Pollution Control",
},
{
  sno: "39",
  appNo: "372899-001",
  applicant: "Dr. Pankaj Rahi",
  title: "IoT Based Crowd Management System",
}

        ],
        "2023": [

            {
  sno: "01",
  appNo: "202311034721",
  applicant: "Dr. Pankaj Rahi",
  title: "Development of Machine Learning Based Approach To Predict Charging Demand For Electric Vehicles",
},
{
  sno: "02",
  appNo: "202311008390",
  applicant: "Dr. Pankaj Rahi",
  title: "End-User Meaningless Unpronounceable One Time Password (Emu-Otp) With Dynamic One-Time Password Virtual Keyboard",
},
{
  sno: "03",
  appNo: "202311086335",
  applicant: "Mr. Rahul Sawhney",
  title: "Comparative Performance of Deep Learning Architectures In Lower-Grade Segmentation: An Empirical Study",
},
{
  sno: "04",
  appNo: "202311078174",
  applicant: "Ms. Alka Rani",
  title: "An Intelligent Automatic Bill Generation System",
},
{
  sno: "05",
  appNo: "202311076140",
  applicant: "Mr. Indra Kishor",
  title: "Development of The Artificial Intelligence-Based Agrogenius System For Enhancing Farming Efficiency",
},
{
  sno: "06",
  appNo: "202311075320",
  applicant: "Mr. Indra Kishor",
  title: "An IoT-Based Two-Way People Counter With Dynamic Tracking And Data Regression Analysis For Single Door Entry And Exit",
},
{
  sno: "07",
  appNo: "202311051802",
  applicant: "Mr. Indra Kishor",
  title: "Immersive XR System With Voice Assistant Integration For Exploring Educational Institutions",
},
{
  sno: "08",
  appNo: "202311049138",
  applicant: "Mr. Satish Parmar",
  title: "Design And Development of An IoT-Based Knee Guard To Aid Blind Individuals In Obstacle Avoidance",
},
{
  sno: "09",
  appNo: "202311037945",
  applicant: "Dr. Anil Kumar",
  title: "Implementing IoT For Garbage Monitoring And Removal",
},
{
  sno: "10",
  appNo: "202311037912",
  applicant: "Mr. Nikhil Rastogi",
  title: "Network Traffic Analyzer Using NodeMCU-32",
},
{
  sno: "11",
  appNo: "202311037494",
  applicant: "Mr. Kunal Sharma",
  title: "Advanced & Compact IoT-Based System For Home Automation And Intelligent Electricity Management",
},
{
  sno: "12",
  appNo: "202311037475",
  applicant: "Mr. Aditya",
  title: "Intelligent Waste Segregation: Enhancing Efficiency Through Smart Dustbins For Dry And Wet Waste",
},
{
  sno: "13",
  appNo: "202311037396",
  applicant: "Mr. Abhishek Dadhich",
  title: "Digital System For Student’s Presence",
}

        ],
        "2024": [
          {
  sno: "01",
  appNo: "202411000987",
  applicant: "Mr. Adiya Pareek",
  title: "PawsGuard Pro: Integrated GPS-GSM Pet Tracker with Heartbeat Monitoring",
},
{
  sno: "02",
  appNo: "202411000979",
  applicant: "Mr. Adiya Pareek",
  title: "CamScanPay: QR Code Payment Authentication with Fingerprint Security",
},
{
  sno: "03",
  appNo: "202411000922",
  applicant: "Mr. Indra Kishor",
  title: "IoT Enable Extended Reality for College Virtual Tour: An Emusive Mobile Application with Real Voice",
},
{
  sno: "04",
  appNo: "202411001312",
  applicant: "Ms. Himani Jangid",
  title: "Sustainable AgriTech: A Comprehensive IoT Approach to Smart Farming",
},
{
  sno: "05",
  appNo: "202411001543",
  applicant: "Mr. Nakshatra Kumar Gupta",
  title: "Innovative Smart Mirror: A Fusion of Technology and Elegance",
},
{
  sno: "06",
  appNo: "202411001779",
  applicant: "Mr. Kunal Sharma",
  title: "Integrative Solar-Electric Vehicle Power System with High-Efficiency Battery Management",
},
{
  sno: "07",
  appNo: "202411025820",
  applicant: "Ms. Alka Rani",
  title: "Street Light Advanced Emergency Sensor and Switch System",
},
{
  sno: "08",
  appNo: "202411025772",
  applicant: "Ms. Aniva Sharma",
  title: "TempFlow Hydration: Your Personalized Thirst Quencher",
},
{
  sno: "09",
  appNo: "202411025774",
  applicant: "Ms. Alka Rani",
  title: "Licence Plate Recognition System for Anti-Counterfeiting",
},
{
  sno: "10",
  appNo: "202411025781",
  applicant: "Mr. Indra Kishor",
  title: "IoT-Enhanced Collaborative Robot: Intelligent Solutions for Advanced Healthcare and Home Security with AR Integration",
},
{
  sno: "11",
  appNo: "202411026398",
  applicant: "Mr. Vikash Sharma",
  title: "Smart Glove System Enabling Gesture-Driven Speech Interface for AAC in Speech-Impaired Individuals",
},
{
  sno: "12",
  appNo: "202411025837",
  applicant: "Mr. Abhay Choudhary",
  title: "Development of Vehicle Monitoring System",
},
{
  sno: "13",
  appNo: "202411026396",
  applicant: "Mr. Rajendra Singh",
  title: "To Protect the Healthy with Sensors in Jacket Utilizing Modern Technology",
},
{
  sno: "14",
  appNo: "202411026387",
  applicant: "Ms. Jayshree Surolia",
  title: "Mobile Device Based Communication System for Alerts, Pertaining to Women Safety",
},
{
  sno: "15",
  appNo: "202411026385",
  applicant: "Dr. Payal Bansal",
  title: "Water Saving Module by Integrating Flush Model System",
}

        ],
        "2025": [
            {
  sno: "01",
  appNo: "202511003955",
  applicant: "Mr. Indra Kishor",
  title: "Revolutionizing Train Hospitality with Intelligent PNR Integration and Real-Time Tracking",
},
{
  sno: "02",
  appNo: "202511003957",
  applicant: "Mr. Indra Kishor",
  title: "Intelligent Autonomous Drone: Dual-Battery Swapping, Ethical AI Navigation, IoT Weather Insights, AR/VR Control, and Noise-Cancelling Communication",
},
{
  sno: "03",
  appNo: "202511004327",
  applicant: "Mr. Indra Kishor",
  title: "AI-Powered Robotic Navigation System for Dynamic Traffic Management Using IoT and Deep Learning",
},
{
  sno: "04",
  appNo: "202511004346",
  applicant: "Mr. Indra Kishor",
  title: "An Intelligent Voice Communication System for Humanoid Robot with Mood Recognition and Self-Learning for Personalized Interaction Based on IoT and Deep Learning",
},
{
  sno: "05",
  appNo: "202511004358",
  applicant: "Mr. Indra Kishor",
  title: "A Novel VR-Based Hand Therapy System Empowered by IoT and AI-ML for Stroke Rehabilitation",
},
{
  sno: "06",
  appNo: "202511004363",
  applicant: "Mr. Indra Kishor",
  title: "Adaptive AI System for Face Recognition and Intelligent Voice Interaction in Learning Environments",
},
{
  sno: "07",
  appNo: "202511004392",
  applicant: "Mr. Indra Kishor",
  title: "Autonomous Humanoid Robot with Real-Time Brain-Mimicking Capabilities Using Neural Signal Processing",
},
{
  sno: "08",
  appNo: "202511004399",
  applicant: "Mr. Indra Kishor",
  title: "Bi-Directional Line Following Robot with Enhanced Sensor Integration and Autonomous Operational Capabilities",
},
{
  sno: "09",
  appNo: "202511004408",
  applicant: "Mr. Indra Kishor",
  title: "Visionary Connect: Multi-Functional Smart Glasses for Enhanced Communication and Mobility for the Hearing, Speech, and Vision Impaired",
},
{
  sno: "10",
  appNo: "202511008505",
  applicant: "Ms. Alka Rani",
  title: "Smart Pool Guardian: Voice-Controlled Management System",
},
{
  sno: "11",
  appNo: "202511009043",
  applicant: "Aditya Pareek",
  title: "EmpowerFemGuard: Smart Vending with Mobile Authentication & Personalized Usage Tracking",
},
{
  sno: "12",
  appNo: "Not Available",
  applicant: "Dr. Sonia Kaur Bansal",
  title: "Interactive Multi-Sensory Learning Method for Teaching English Poetry in Classrooms",
}

        ],
        "2026": [],
        "archive": [
            {
  sno: "01",
  appNo: "1185981",
  applicant: "Dr. Udit Mamodiya",
  title: "Investigation for Performance Comparison of Solar Tracking System with Static Solar Structure",
},
{
  sno: "02",
  appNo: "IN202131052882",
  applicant: "Kumar Devadutta",
  title: "Health Monitoring Finger Ring Through Sensing the Sweat of Human Body Using Internet of Things",
},
{
  sno: "03",
  appNo: "IN202121048446",
  applicant: "Dr. Punit Kumar",
  title: "Smart Shoe for Blind People to Detect Obstacles Using Internet of Things & Artificial Intelligence",
},
{
  sno: "04",
  appNo: "IN202111045498",
  applicant: "Dr. Pooja Singh",
  title: "Sustainable Healthcare System Based on IoT and AI for Indoor Environment Monitoring and Its Control",
},
{
  sno: "05",
  appNo: "IN202111045498",
  applicant: "Dr. Pooja Singh",
  title: "Sustainable Healthcare System Based on IoT and AI for Indoor Environment Monitoring and Its Control",
},
{
  sno: "06",
  appNo: "IN202131027065",
  applicant: "Dr. Rabinarayan Satpathy",
  title: "System for Vaccination of Citizens Against COVID-19 Using Smart Robotic Arms Based on Computational Intelligence Method",
},
{
  sno: "07",
  appNo: "IN202141029006",
  applicant: "Dr. Azeem Hafiz P A",
  title: "Smart System for Driver’s Performance Evaluation Using Machine Learning",
},
{
  sno: "08",
  appNo: "IN202111024129",
  applicant: "Dr. Ranjana",
  title: "Internet of Things Based User Controlled Solar Energy Powered Smart Irrigation System for Precision Agriculture",
},
{
  sno: "09",
  appNo: "IN202131017275",
  applicant: "Dr. Sushree Bibhuprada",
  title: "IoT Based System for Monitoring and Notification for Usage of Liquefied Petroleum Gas",
},
{
  sno: "10",
  appNo: "IN202131015815",
  applicant: "Dr. Shrabanee Swagatika",
  title: "Method for Accessing Data Records of a Master Data Management System",
},
{
  sno: "11",
  appNo: "IN202131008193",
  applicant: "Dr. Chinmaya Ranjan Pattanaik",
  title: "Machine Learning Based Process for Medical Data-Pattern Identification & Application with Visualization in User Interfaces",
},
{
  sno: "12",
  appNo: "IN202031052588",
  applicant: "Dr. Satish Kumar Kalhotra",
  title: "Method for Preventing Security Violation in Communication Network of Internet of Things (IoT) Devices",
},
{
  sno: "13",
  appNo: "AU2021104203",
  applicant: "Dr. Udit Mamodiya",
  title: "Intelligent System & Method for Recognizing Fake Speech Using Artificial Intelligence & Blockchain Technology",
},
{
  sno: "14",
  appNo: "AU2021102658",
  applicant: "Dr. Udit Mamodiya",
  title: "Intelligent Earphone System for Remote Health Monitoring Using Artificial Intelligence",
},
{
  sno: "15",
  appNo: "AU2021100143",
  applicant: "Dr. Udit Mamodiya",
  title: "Computer-Implemented Method for Encryption Over a Blockchain Data Sharing in Secure Network",
},
{
  sno: "16",
  appNo: "202211062261",
  applicant: "Mr. Parv Sharma",
  title: "An Intelligent System and Method for Autonomous Sunlight Reflector and Moisture Level Indicator with Nutrient Provider",
}

        ],
    };

    const years = ["2022", "2023", "2024", "2025", "2026", "archive"];

     {/*Project data in different format */} 

type Project = { sno: string; projectname: string; studentname: string | string[]; facultycoordinator: string; facilityused: string };
    

  const projectsByYear: Record<string, Project[]> =  {
      "2022": [
{
  sno: "01",
  projectname: "Laser Cut Wall Clock",
  studentname: "Rahul Jain",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "LASER cutter, various hardware and software support"
},
{
  sno: "02",
  projectname: "3D printer lithophane technology",
  studentname: "Rachit Agarwal",
  facultycoordinator: "Udit Mamodiya",
  facilityused: "FDM printer and other hardware and software support"
},
{
  sno: "03",
  projectname: "Reverse engineering",
  studentname: "Parv Sharma",
  facultycoordinator: "Udit Mamodiya",
  facilityused: "3D scanning, 3D printer, and other hardware and software support"
},
{
  sno: "04",
  projectname: "3D printed mobile stand",
  studentname: "Vaidika Duggar",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "3D printer and raw material support"
},
{
  sno: "05",
  projectname: "Stone paper scissor machine",
  studentname: "Yuvraj Dagur",
  facultycoordinator: "Udit Mamodiya",
  facilityused: "3D printer, Laser cutter, and other machine components"
},
{
  sno: "06",
  projectname: "Li fi",
  studentname: "Satish Parmar",
  facultycoordinator: "Pradeep Kumar",
  facilityused: "PCB router, solder etc."
},
{
  sno: "07",
  projectname: "Fingerprint Door system",
  studentname: "Ishaan Jain",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "PCB, LASER cutter, and other hardware support"
},
{
  sno: "08",
  projectname: "World Map on laser cutting and engraving machine",
  studentname: "Pranay Sharma",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "LASER cutting and engraving machine, acrylic sheets, etc."
},
{
  sno: "09",
  projectname: "Mini Tape dispenser",
  studentname: "Harshit Gupta",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "Cura, 3D printer, PLA rolls, etc."
},
{
  sno: "10",
  projectname: "Decorative Wall",
  studentname: "Himanshu Moyal",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "RD works, LASER cutting and engraving machine, acrylic sheets, etc."
},
{
  sno: "11",
  projectname: "Speaker designing",
  studentname: "Naveen Chaudhary",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "PCB, LASER cutting, soldering and other hardware support"
},
{
  sno: "12",
  projectname: "Chess designing",
  studentname: "Karan Tamboliya",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "LASER cutting machine, MDF sheets, etc."
},
{
  sno: "13",
  projectname: "Laser cut press fit vintage car",
  studentname: "Gaurav Prajapati",
  facultycoordinator: "Nitin Mukesh Mathur",
  facilityused: "LASER cutting, MDF sheets, Glue gun, etc."
},
{
  sno: "14",
  projectname: "Moisture indicator",
  studentname: "Parv Sharma",
  facultycoordinator: "Reshma Kala",
  facilityused: "PCB, LASER cutting, 3D printer, etc."
},
{
  sno: "15",
  projectname: "Gesture control",
  studentname: "Vikash Sharma",
  facultycoordinator: "Reshma Kala",
  facilityused: "PCB designing, sensors, 3D printer, etc."
},
{
  sno: "16",
  projectname: "3D Hologram",
  studentname: "Preetish Mehta",
  facultycoordinator: "Rajendra Singh",
  facilityused: "Laser Cut, 3D Printer, PCB and other hardware and software support"
},
{
  sno: "17",
  projectname: "Remote Control car",
  studentname: "Gunjan Sharma",
  facultycoordinator: "Rajendra Singh",
  facilityused: "3D Printer, LASER cutter, and other hardware/software materials"
},
{
  sno: "18",
  projectname: "Shield Vroom",
  studentname: "Kunal Saini",
  facultycoordinator: "Rajendra Singh",
  facilityused: "LASER cutting, 3D Printer and other hardware and software support"
},
{
  sno: "19",
  projectname: "Earthquake detection and warning system",
  studentname: "Shyam Singh",
  facultycoordinator: "Udit Mamodiya",
  facilityused: "LASER cutting and various small electronic components"
},
      ],
      "2023": [
  {
    sno: "1",
    projectname: "Smart Mood Lamp",
    studentname: "Vikash Sharma",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "2",
    projectname: "Home automation",
    studentname: "Gagan Nandwana",
    facultycoordinator: "Nitin Mukesh Mathur",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "3",
    projectname: "Customized Memento",
    studentname: "Ayush Agrawal",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "4",
    projectname: "IoT based security system",
    studentname: "Shashank Singh Shekhawat",
    facultycoordinator: "Nitin Mukesh Mathur",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "5",
    projectname: "Weather reporting system",
    studentname: "Aman Jain",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "6",
    projectname: "Smart switch with IoT",
    studentname: "Udit Kumar Sharma",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "Laser cutting, IoT kit, Eagle software, PCB and other hardware & software support"
  },
  {
    sno: "7",
    projectname: "Sensor network with IoT",
    studentname: "Armaan Solanki",
    facultycoordinator: "Nitin Mukesh Mathur",
    facilityused: "LASER cutting, PCB design, Eagle and other hardware & software support"
  },
  {
    sno: "8",
    projectname: "Electronic visiting card",
    studentname: "Aman Ahamad",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "EAGLE, IoT kit, Arduino, LASER cutting and other hardware & software support"
  },
  {
    sno: "9",
    projectname: "Motion capture device",
    studentname: "Divya Meena",
    facultycoordinator: "Nitin Mukesh Mathur",
    facilityused: "LASER cutting, IoT kit, and different hardware and software supports"
  },
  {
    sno: "10",
    projectname: "Smart dustbin",
    studentname: "Aditya Vyas",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "LASER cutting, EAGLE software, IoT kit and other hardware & software"
  },
  {
    sno: "11",
    projectname: "Pistart studio",
    studentname: "Parv Sharma",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "Hardware and software support"
  },
  {
    sno: "12",
    projectname: "Smart mood lamp",
    studentname: "Palak Agarwal",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "IoT kit, laser cutting & engraving machine, and other hardware & software support"
  },
  {
    sno: "13",
    projectname: "Teacher record management system",
    studentname: "Vikash Sharma",
    facultycoordinator: "Anil Kumar",
    facilityused: "Projector, high-end PC"
  },
  {
    sno: "14",
    projectname: "IoT based smart electricity system for society",
    studentname: "Kunal Sharma",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "ESP32, high-end PCs, printer, projector, relay module, PCB milling machine, soldering iron, position sensor"
  },
  {
    sno: "15",
    projectname: "Smart mirror",
    studentname: "Kunal Sharma, Manvendra Singh, Nakshatra",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "High-end PCs, printer, projector, drill machine, monitor"
  },
  {
    sno: "16",
    projectname: "Anti car accident alarm",
    studentname: "Amit Yadav",
    facultycoordinator: "Reshma Kala",
    facilityused: "IoT kit, sensors, 3D printing, laser cutting etc."
  },
  {
    sno: "17",
    projectname: "Laser Light security",
    studentname: "Saurabh Saini",
    facultycoordinator: "Reshma Kala",
    facilityused: "IoT kit, laser cutting and other hardware & software"
  },
  {
    sno: "18",
    projectname: "Portable washing machine",
    studentname: "Burhanuddin Bohra",
    facultycoordinator: "Nitin Mukesh Mathur",
    facilityused: "Software support"
  },
  {
    sno: "19",
    projectname: "PCB etching machine",
    studentname: "Hiya Gurbani",
    facultycoordinator: "Udit Mamodiya",
    facilityused: "IoT kit, laser cutting & engraving machine and other hardware and software support"
  },
  {
    sno: "20",
    projectname: "Fire alarm",
    studentname: "Himani Jangid",
    facultycoordinator: "Aniva Sharma",
    facilityused: "IoT kit, Eagle software, and various hardware & software support"
  },
  {
    sno: "21",
    projectname: "Human following robot",
    studentname: "Pareek Aditya Kailashchand",
    facultycoordinator: "Aniva Sharma",
    facilityused: "PCB, sensors, IoT and other hardware & software support"
  }
],
      "2024": [
  {
    sno: "1",
    projectname: "Dry and waste segregator",
    studentname: ["Adhya Agrawal", "Ayush Single", "Bhoomi Singhal", "Bhanu Prakash Swami", "Divyanshu Sharma"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "2",
    projectname: "Smart door lock with RFID sensor",
    studentname: ["Manan Jain", "Karan Awasthi", "Himanshu Kumar", "Lakshya Gupta", "Jaitin Yadav"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "3",
    projectname: "Solar Garper",
    studentname: ["Kartar Singh Jadon", "Indresh Sharma", "Himanshu", "Laksh Vyas", "Khwaish Saini", "Hitesh Sharma"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "4",
    projectname: "Portable ventilator system",
    studentname: ["Anag Agrawal", "Akshat Jain", "Aditiya Kumar", "Aagam Jain", "Ansh Kumawat"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "5",
    projectname: "Wall guard file system",
    studentname: ["Divyanshu Prajapati", "Anuraj Kumar", "Akshat Agrawal", "Akshat Singh Solanki"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "6",
    projectname: "Home automation system",
    studentname: ["Abhishek Vashishtha", "Aditya Kumar", "Akshya Vyas", "Daksh Jain", "Divyansh Sharma"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "7",
    projectname: "Bank locker security system",
    studentname: ["Krishan Pal Singh", "Manveer Singh", "Molika Singh", "Kartik Kumar", "Manvaditya Singh"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "8",
    projectname: "Automatic solar tracker",
    studentname: ["Sanyam Kothari", "Sanchit Saraswat", "Saksham Sharna", "Sanjay Single", "Rahul Prajapat"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software support"
  },
  {
    sno: "9",
    projectname: "Wi-Fi based home automation",
    studentname: ["Lakshya Singh Bhati", "Pradeep Sharma", "Piyush Sharma", "Naitik Sharma", "Naman Verma"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "10",
    projectname: "EDM",
    studentname: ["Harshita Sharma", "Ishant Kumar Gupta", "Jatin Ajmera", "Karan Patodiya", "Jitendra Prajapat", "Joy Dixit"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "11",
    projectname: "Air quality monitor",
    studentname: ["Anubhav Gautam", "Chandra Bhushan", "Anurag Kumar", "Ayush Agrawal", "Chetan Pratap"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "12",
    projectname: "Car parking system",
    studentname: ["Avantika Chouhan", "Bhumika Maheshwari", "Dhuvani Jain", "Divyanshi Sharma", "Himanshu Singh"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "13",
    projectname: "Smart shop system prototype",
    studentname: ["Digendra Sharma", "Divyansh Sharma", "Divyansh Malviya", "Dhruw Jain", "Dhruw Sharma"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "14",
    projectname: "Irrigation automation",
    studentname: ["Himanshu Singh", "Kunal Kumar", "Kumari Saloni", "Manas Jain", "Jatin Kinra", "Hassan Hameed"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "15",
    projectname: "Mini oscilloscope",
    studentname: ["Deepak Sharma", "Harsh Anand", "Divya Gouttam", "Gaurav Choudhary", "Divyansh Khandelwal"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "16",
    projectname: "Data transfer using Li-Fi",
    studentname: ["Chayan Jain", "Chhavi Jain", "Arpit Garg", "Bhanu Pratap Singh Chouhan", "Daksh Mahehra"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "17",
    projectname: "Train accident prevention",
    studentname: ["Sparsh Jain", "Shrishti Khandelwal", "Sudhanshu Sharma", "Swasti Jain", "Tarun Saini"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "18",
    projectname: "Keyless bike & smart helmet",
    studentname: ["Krish Agrawal", "Kartik Duseja", "Lav Gurjar", "Madhav Khandelwal"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "19",
    projectname: "Home automation system",
    studentname: ["Vishal Jangid", "Vansh Jain", "Vashudev Sharma", "Vikash Sharma", "Yashasvi Agarwal", "Vinit Gautam"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "20",
    projectname: "Weather station",
    studentname: ["Anirudh Singh Bhati", "Aadhar Gautam", "Abhishek Agarwal", "Anshika Agal", "Aaditya Gautam"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "21",
    projectname: "Attendance system using RFID",
    studentname: ["Avani Jain", "Avani Sharma", "Avdhi Khandelwal", "Bhargavi Gupta", "Ayush Kumar", "Dault Kumar Jain"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "22",
    projectname: "Earthquake detector",
    studentname: ["Mridul Gupta", "Nilesh Kumar", "Mohit Soni", "Kunal Sharma", "Kanak Jangid"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "23",
    projectname: "LPG leakage safety device",
    studentname: ["Keshav Kumar Sharma", "Mahaveer Singh Rathore", "Kartikey Sharma", "Gagan Rathore", "Jayant Roop"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "24",
    projectname: "Soldier position and health tracking system",
    studentname: ["Krish Khandelwal", "Harshul Dadhich", "Harshit Kumar", "Harshit Gehlot", "Mudit Pancholi"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "25",
    projectname: "Automatic stair light system",
    studentname: ["Pranav Khandewal", "Rhishikesh Porwal", "Prachi Soni", "Shraya Singh", "Sunidhi", "Rohit Bhatia"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "26",
    projectname: "Multifunctional surveillance car",
    studentname: ["Komal", "Kushi Kumari", "Kaumudi Mishra", "Lakshita Sharma"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "27",
    projectname: "Earthquake detector alarm",
    studentname: ["Utkarsh", "Vidhi Dubey", "Youraj Singh", "Zubia Khanm", "Tribhuwan Singh"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "28",
    projectname: "Sentry turret for intrusion detection",
    studentname: ["Aaditya Vinayak"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench used in IDEA Lab"
  },
  {
    sno: "29",
    projectname: "IV bag monitoring alert system",
    studentname: ["Kuldeep Soni", "Hardik", "Himanshu Sharma", "Hement Sharma", "Kuldeep Saini"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "30",
    projectname: "Wi-Fi home surveillance camera",
    studentname: ["Rishab Pugalia", "Rishabh Jain", "Riya", "Sachin Kumar", "Sadhana Patidar"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "31",
    projectname: "Temperature controlled fan",
    studentname: ["Giriraj Singh", "Bhavy Soni", "Gaurav Mittal", "Dhruv Sharma", "Divyanshu Gupta"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "32",
    projectname: "Smart security system",
    studentname: ["Himanshu Verma", "Harsh Khandelwal", "Ishpreet Kaur", "Etisha Jangid", "Imtuyai Alam"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "33",
    projectname: "Obstacle detective walking stick for blind people",
    studentname: ["Yuvraj", "Yash Swami", "Preeti Shekhawat", "Saksham Yadav", "Rahul", "Rashi Sharma"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "34",
    projectname: "Road accident analysis",
    studentname: ["Sakshi Mittal", "Unnati Sharma", "Vishakha Sharma", "Rajan Agrawal"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "35",
    projectname: "Obstacle detection stick for blind people",
    studentname: ["Dev Sharma", "Avi Mathur", "Abhikirti Saxena", "Akshita", "Diya Beniwal"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "36",
    projectname: "Smart lock with security camera",
    studentname: ["Anil Jangid", "Aryan Nama", "Chetan Dhakad", "Chitrakshi", "Gauri Dadhich"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "37",
    projectname: "Cloth retrieval system using ESP",
    studentname: ["Aditya Yadav", "Devansh Gupta", "Devraj Kumawat", "Ajay Singh Shekhawat", "Ashley Kumawat"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "38",
    projectname: "EV wireless station charging",
    studentname: ["Raghav Sharma", "Palak", "Shreya Pareek", "Yashasvi Sharma", "Shubham Sharma", "Tanisha Kumawat"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "39",
    projectname: "Air monitoring system",
    studentname: ["Jatin Saxena", "Hinshu Sachdeva", "Mayank Prajapat", "Harshit Agarwal", "Hanish Saini"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "40",
    projectname: "Bidirectional visitor counter",
    studentname: ["Anurag Shukla", "Bhumi Vijayvergiya", "Buliya Rathore", "Divyansh Sharma", "Diksha Vijay"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE training, PCB, IoT kit, hardware and software equipment"
  },
  {
    sno: "41",
    projectname: "Third eye for blind person",
    studentname: ["Rudraksha Garg", "Tanahik Rawat"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE PCB design, IoT connectivity setup and hardware testing bench used in IDEA Lab"
  },
  {
    sno: "42",
    projectname: "Train accident prevention",
    studentname: ["Mumuksha Sharma", "Meghal Singh", "Manah Yadav", "Kashish Lakhuja", "Jhalak Agrawal"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "43",
    projectname: "Web socket RC car",
    studentname: ["Vikash Kumar", "Vishesh Singh", "Vibha Bari", "Vikki Kumar", "Yash Jaiman"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "44",
    projectname: "Soldering health and monitoring system",
    studentname: ["Hardik Jain", "Divya", "Deepak Kumar", "Devang Jain"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "45",
    projectname: "Driver behaviour monitoring system",
    studentname: ["Dhruv Saxena", "Dishant Sharma", "Gaurika Pareek", "Harsh Dhakar", "Dushyant Kaushik"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },

]
,
      "2025": [
  {
    sno: "1",
    projectname: "Smart Walking Stick",
    studentname: ["Kartik Goyal", "Jatin Diduaniya"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "2",
    projectname: "Smart Irrigation System",
    studentname: ["Kuldeep Jain"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "3",
    projectname: "IoT Based Medical Alert System",
    studentname: ["Himanshu Gaud", "Arpita Jain", "Kevaram Modi", "Akshay Pareek"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "4",
    projectname: "Smart Bridge System",
    studentname: ["Navya Jain", "Nikhil Jethani", "Priyanshu Sharma", "Mayank Saraswat"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "5",
    projectname: "AI Based Air Monitoring and Pollution Control",
    studentname: ["Divyanshu Shrotriya", "Garvit Kulhari", "Divyansh Saini", "Harsh Pareek", "Govind Kumawat"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "6",
    projectname: "Gesture Control LED",
    studentname: ["Mahul Vijay", "Meenal Goswami", "Maitri Mehta", "Kunal Kumawat", "Mansi Dhadhich"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "7",
    projectname: "Turbidity Sensor",
    studentname: ["Nitin Kumar Sharma", "Mahipal Singh", "Kuldeep Nagar", "Syed Saif Sikander"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "8",
    projectname: "Line Follower Robot Car",
    studentname: ["Khushal Sharma", "Kapish Nain", "Krati Saini", "Karina Shahi", "Kashish Gera", "Kishan Vaishnav"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "9",
    projectname: "Grass Cutter with Pesticide Sprayer",
    studentname: ["Nirmal Yogi", "Nitin Sharma", "Neha Yadav", "Pooja Dhakad", "Miridul"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "10",
    projectname: "Ultrasonic Radar System",
    studentname: ["Gourav Bohra", "Harshveer Shekhawat", "Divyanshi Lohar", "Devesh Vijay", "Devendra Saini", "Fezan Khan"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "11",
    projectname: "Earthquake Disaster Management",
    studentname: ["Manish Jangid", "Lucky Dokania", "Mohit Kumavat", "Mohmmed Danish", "Manas Bhatt"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench were used in IDEA Lab"
  },
  {
    sno: "12",
    projectname: "Anti Sleep Alarm",
    studentname: ["Mohit Tailor", "Kirtna Vaishnav", "Pinak Dave", "Priyansh Gupta", "Jayansh"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "PCB fabrication, 3D printing, soldering workstation and circuit simulation tools were used to prototype and test the model"
  },
  {
    sno: "13",
    projectname: "Line Follower Robot",
    studentname: ["Abhay Raj Singh Hada", "Abhinav Rao", "Anjali Ramani", "Aarya Vijay", "Ayushman Singh", "Aakriti Gupta"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "14",
    projectname: "Home Automation",
    studentname: ["Shivam Vashistha", "Samyak Jain", "Shiv Singh Rajpurohit", "Shreenath Mehta"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "15",
    projectname: "RFID Door Unlock System",
    studentname: ["Anshul Kumar", "Gaurang Sharma", "Dheeraj Chelam", "Ankita", "Ananya Goyal"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench were used in IDEA Lab"
  },
  {
    sno: "16",
    projectname: "Wi-Fi Signal Strength Monitoring System",
    studentname: ["Labhanshu Jain", "Lokesh Kumar Saini", "Lakshay Agarwal", "Kunal Gupta", "Lajuta Pareek"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "PCB, LASER cutting, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "17",
    projectname: "Noise Detector",
    studentname: ["Bhumi Pareek", "Himanshu Lohar", "Adarsh Kumar", "Jyoti Sharma", "Anil Gadri"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench were used in IDEA Lab"
  },
  {
    sno: "18",
    projectname: "Mini Weather Station",
    studentname: ["Gopal Gadri", "Dhruv Parmar", "Himanshu Sharma", "Chetna Swarnkar", "Chetan Mangal"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "PCB fabrication, 3D printing, soldering workstation and circuit simulation tools were used to prototype and test the model"
  },
  {
    sno: "19",
    projectname: "Portable Weather Station",
    studentname: ["Abhinav Choudhary", "Akshat Jain", "Ankit Singh Tanwar", "Akshay Vijayvergiya", "Adouotiya Devansh", "Akshat Varshney"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB fabrication, 3D printing, soldering workstation and circuit simulation tools were used to prototype and test the model"
  },
  {
    sno: "20",
    projectname: "Renewable Energy Charging Station",
    studentname: ["Ajay Sharma", "Ishant Kumawat", "Aditya Rawat", "Jay Gupta", "Epshita Singhal"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "21",
    projectname: "Smart Ignition Using RFID",
    studentname: ["Himani Nihalani", "Mandhatta Shekhawat", "Nitin Saini", "Hitesh Khanchandani", "Priyansh Sharma", "Pulkit Shrivastava"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "22",
    projectname: "Fire Fighting Robot",
    studentname: ["Lavkush Garg", "Kushal Agarwal"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "IoT kit, cloud dashboard, Blynk and MQTT server facilities were utilized for remote monitoring and automation"
  },
  {
    sno: "23",
    projectname: "Ultrasonic Radar",
    studentname: ["Saksham Agarwal", "Riddhima Agarwal", "Rupal Bothra", "Priyanka Rahisa"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "24",
    projectname: "IR Based Security System",
    studentname: ["Vimridh Sharma", "Rudraksh Sharma", "Sagar Sharma", "Yash Kumawat", "Harsh Pratap"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "25",
    projectname: "Wireless Water Level Indicator",
    studentname: ["Sangram Singh Rathore", "Shubham Sharma", "Rimjhim Rochwani", "Sorav Shekhawat", "Ronak", "Reshpal Singh Bhati"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "26",
    projectname: "AI Automated Home System",
    studentname: ["Aakash Singh", "Dishu Choudhary", "Bhavya Gupta", "Ankit Choudhary", "Ashutosh"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench were used in IDEA Lab"
  },
  {
    sno: "27",
    projectname: "Way Find Robo",
    studentname: ["Umesh Yadav", "Shudhanshu Shandilya", "Umesh Jangid", "Shivang Sharma", "Ritika Jangid", "Sarswat Divya"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "IoT kit, cloud dashboard, Blynk and MQTT server facilities were utilized for remote monitoring and automation"
  },
  {
    sno: "28",
    projectname: "Alcohol Detecting System",
    studentname: ["Diwakar Saxena", "Bhumika Kabra", "Dheeraj Prajapati", "Harshit Verma"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench were used in IDEA Lab"
  },
  {
    sno: "29",
    projectname: "Human Following Robot",
    studentname: ["Siddhika Agarwal", "Shrusti Sharma", "Shaurya Shrivastava"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "30",
    projectname: "Sound Energy to Electrical Energy Converter",
    studentname: ["Piyush Sharma", "Kamal Kumar", "Kapil Kateri", "Krishna Saini", "Kashish Mahlawat", "Harsh Sahu"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "31",
    projectname: "Fully Automatic Grass Cutter with Solar Panel",
    studentname: ["Shivam Rawat", "Ronak Kumar Goyal", "Sarthak Sharma", "Sanchita Prajapat", "Vanshika Pareek"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "PCB fabrication, 3D printing, soldering workstation and circuit simulation tools were used to prototype and test the model"
  },
  {
    sno: "32",
    projectname: "Home Automation System",
    studentname: ["Nishant Soni", "Sanmati Jain", "Ritik Dhakar", "Vinay Saini", "Vikas Saini", "Yashvardhan"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "IoT kit, cloud dashboard, Blynk and MQTT server facilities were utilized for remote monitoring and automation"
  },
  {
    sno: "33",
    projectname: "Smart Water Level Monitoring System",
    studentname: ["Saksham Sharma", "Sujal Talabdar", "Vidit Sharma", "Udbhav Rai", "Sanjana Jeenwal"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "34",
    projectname: "Smart Parking System",
    studentname: ["Rakesh", "Saleena", "Pratham", "Vikash", "Divyansh", "Rahul"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "IoT kit, cloud dashboard, Blynk and MQTT server facilities were utilized for remote monitoring and automation"
  },
  {
    sno: "35",
    projectname: "Earthquake Detector",
    studentname: ["Tanishka Sharma", "Vinay Pratap", "Vivek Singh", "Rishabh", "Rakesh Nath"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench were used in IDEA Lab"
  },
  {
    sno: "36",
    projectname: "Self Balancing Robot",
    studentname: ["Versha Goyal", "Jiya Agnihotri", "Diya Agnihotri"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "37",
    projectname: "Advance Farming",
    studentname: ["Mansi Sharma", "Harsh Choudhary", "Girish Khedia", "Kuldeep Singh", "Harshita Sharma"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "38",
    projectname: "Wireless Home Security System",
    studentname: ["Ayush Sharma", "Chitram", "Aina", "Arpit", "Ayushi"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "PCB fabrication, 3D printing, soldering workstation and circuit simulation tools were used to prototype and test the model"
  },
  {
    sno: "39",
    projectname: "AIR QUALITY INDEX (AQI)",
    studentname: ["Anusha Shandilya", "Lavina Garg", "Pooja Bhadu", "Harshil Gupta", "Bhavna"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "IoT kit, cloud dashboard, Blynk and MQTT server facilities were utilized for remote monitoring and automation"
  },
  {
    sno: "40",
    projectname: "Line Following Rover",
    studentname: ["Ujjwal Dubey", "Yogesh Jangir", "Suhani Bhargava", "Shreya Garg", "Rakhi Gandhi"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  },
  {
    sno: "41",
    projectname: "Voice Controlled Car",
    studentname: ["Nandini Sethiya", "Nandini Runwal", "Prachi Kashyap", "Rahul Saini", "Nirmal Singh Chouhan", "Rajyavardhan Singh"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench were used in IDEA Lab"
  },
  {
    sno: "42",
    projectname: "IoT Based Gas Detection System",
    studentname: ["Bharat Purohit", "Aditya Tolambiya", "Anish Tamoli", "Charanjot Singh", "Ashish Saini", "Chirag Gupta"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "IoT kit, cloud dashboard, Blynk and MQTT server facilities were utilized for remote monitoring and automation"
  },
  {
    sno: "43",
    projectname: "Home Automation Using Voice Google Assistant",
    studentname: ["Ahsan Khan", "Ayush Kumar Singh", "Akshat Pareek", "Ayushman Singh", "Chirag Rathore"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "LASER cutting, IoT kit, PCB and complete hardware and software equipment"
  },
  {
    sno: "44",
    projectname: "Wi-Fi Controlled RC Car",
    studentname: ["Raghav Sharma", "Devesh Saxena", "Govinda Shil", "Gautam Saini", "Vinay Sharma", "Shravan Sharma"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "45",
    projectname: "GPS Speedometer",
    studentname: ["Aashika Singhal", "Ayush Soni", "Anishka Sharma", "Girish"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "PCB, LASER cutting, IoT kit, hardware and software equipment"
  },
  {
    sno: "46",
    projectname: "Temperature Based Fan Speed Controller",
    studentname: ["Gunika Sethi", "Kavya Jangid", "Ishan Khan", "Mohammed Ali", "Archit Agarwal", "Daksh Sharma"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE training, PCB, IoT kit and complete hardware and software equipment"
  },
  {
    sno: "47",
    projectname: "Mechanical Hand Tracking ARM",
    studentname: ["Anuj Sharma", "Aman Sharma", "Dikshant Kumar Sharma", "Ajit Gurjar", "Akansha Agarwal", "Aryan Samota"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "PCB fabrication, 3D printing, soldering workstation and circuit simulation tools were used to prototype and test the model"
  },
  {
    sno: "48",
    projectname: "Air Defence System",
    studentname: ["Vivek Goyal", "Virendra Jangir", "Vishesh Sinha", "Pratham Upadhyay", "Vaibhav Vaishnav"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "EAGLE training, IoT kit, Laser cutting and complete hardware and software support"
  },
  {
    sno: "49",
    projectname: "Temperature and Humidity Sensor",
    studentname: ["Kuldeep Singh", "Koushal Joshi", "Lakshay Nirvan", "Nitesh Choudhary", "Mo. Shahid"],
    facultycoordinator: "Ms. Shanky Chouhan",
    facilityused: "IoT kit, cloud dashboard, Blynk and MQTT server facilities were utilized for remote monitoring and automation"
  },
  {
    sno: "50",
    projectname: "Soil Moisture Detector",
    studentname: ["Palak Agarwal", "Nitin Sahu", "Nivish Soni", "Harender Sain"],
    facultycoordinator: "Mr. Vishnu Prakash Sharma",
    facilityused: "EAGLE PCB design, IoT connectivity setup and complete hardware testing bench were used in IDEA Lab"
  },
  {
    sno: "51",
    projectname: "Radar System",
    studentname: ["Parmeshvari", "Hariom Chaudhary", "Nikhil Pradhan", "Pooja Yadav"],
    facultycoordinator: "Ms. Aniva Sharma",
    facilityused: "All work completed in IDEA Lab with software knowledge, PCB design, PCB board, LASER cutting, circuit equipment etc."
  }
],
      "2026": [],
      "archive": [],
  };
       


   


    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="AICTE IDEA LAB"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "AICTE IDEA LAB",
                        isCurrent: true,
                    },
                ]}
            />

            {/* Enhanced About IDEA Lab Section */}
            <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            About{" "}
                            <span className="text-secondary">IDEA Lab</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                        <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                            Innovation • Development • Entrepreneurship •
                            Advancement
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-lightbulb text-white text-xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-primary">
                                        Our Mission
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The All India Council for Technical
                                    Education (AICTE) has launched the IDEA
                                    (Innovation, Development, Entrepreneurship
                                    and Advancement) Lab to promote innovation
                                    and entrepreneurship among students in
                                    technical education institutions.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-secondary">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-rocket text-white text-xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-secondary">
                                        Our Purpose
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The IDEA Lab is designed to provide a
                                    platform for students to conceptualize and
                                    develop their ideas into sustainable
                                    projects and startups, fostering innovation
                                    and entrepreneurial thinking.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-primary/10 rounded-lg">
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        500+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Students Trained
                                    </div>
                                </div>
                                <div className="text-center p-6 bg-secondary/10 rounded-lg">
                                    <div className="text-3xl font-bold text-secondary mb-2">
                                        75+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Workshops Conducted
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Image Slider */}
                        <div className="relative">
                            <div className="bg-white rounded-xl shadow-xl p-4 border">
                                <SimpleImageSlider
                                    images={images}
                                    altTexts={altTexts}
                                    autoPlayInterval={5000}
                                    aspectRatio="16/9"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                <i className="fas fa-cogs text-white text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <InfoCard
                    title="Objective of Department"
                    iconClass="fas fa-tasks"
                    content={objectiveContent}
                />
                <InfoCard
                    title="Execution"
                    iconClass="fas fa-eye"
                    content={visionContent}
                />
            </div>
            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-6 text-center">
                    Faculties and Staff
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <FacultySwiper profiles={facultyData} />
            </section>
            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    AICTE IDEA Lab Committee
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <LazyImage
                    src={
                        "/images/ideaLab/STUDENT_COMITTEE_IDEALAB.jpg"
                    }
                    alt={"AICTE IDEA Lab Committee"}
                    className="rounded-xl shadow-xl w-full h-auto z-10 relative border border-primary"
                />
            </section>
            
{/* Achievements Table Section */}

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Achievements
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={achievementcolumns } data={achievementdata} />
            </div>

            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            State-of-the-Art Facilities
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Our IDEA Lab is equipped with cutting-edge
                            technology and advanced manufacturing equipment to
                            support innovation and product development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilitiesData.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <LazyImage
                                        src={facility.imageUrl}
                                        alt={facility.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                                        {facility.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                                            Advanced Equipment
                                        </span>
                                        <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform duration-300"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Statistics */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl font-bold text-primary mb-2">
                                23
                            </div>
                            <div className="text-sm text-gray-600">
                                Advanced Machines
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl font-bold text-secondary mb-2">
                                75+
                            </div>
                            <div className="text-sm text-gray-600">
                                Training Programs
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl font-bold text-primary mb-2">
                                65+
                            </div>
                            <div className="text-sm text-gray-600">
                                Published Patents
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl font-bold text-secondary mb-2">
                                40+
                            </div>
                            <div className="text-sm text-gray-600">
                                Student Projects
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Seminar/ Workshop/FDP Organized
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={workshopcolumns } data={workshopdata} />
            </div>
            </section>

           

            {/* Patents Section */}
           <section className="py-16 bg-neutral-100">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Patents & Intellectual Property
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Year-wise patents filed, published, and granted
                    </p>
                </div>

                {/* Year Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-6 py-2 rounded-full border font-semibold transition-all 
                                ${
                                    activeYear === year
                                        ? "bg-primary text-white border-primary shadow-lg"
                                        : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                                }
                            `}
                        >
                            {year === "archive" ? "Archive" : year}
                        </button>
                    ))}
                </div>

                {/* Data Table */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-primary mb-6">
                        Patents – {activeYear === "archive" ? "Archive" : activeYear}
                    </h3>

                    {patentsByYear[activeYear].length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-primary">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            S. No
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            Application No.
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            Applicant
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            Title
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {patentsByYear[activeYear].map((item, index) => (
                                        <tr
                                            key={index}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-gray-50"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="px-4 py-2 text-sm font-medium text-gray-900">
                                                {item.sno}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-500">
                                                {item.appNo}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-900">
                                                {item.applicant}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-900">
                                                {item.title}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center py-10 text-neutral-500 text-lg">
                            No patent records available for this year.
                        </p>
                    )}
                </div>
            </div>
        </section>

         {/* Patents Section */}
           <section className="py-16 bg-neutral-100">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Projects & Innovations by Students
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Year-wise list of projects and innovations developed by our students
                    </p>
                </div>

                {/* Year Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={`px-6 py-2 rounded-full border font-semibold transition-all 
                                ${
                                    activeYear === year
                                        ? "bg-primary text-white border-primary shadow-lg"
                                        : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                                }
                            `}
                        >
                            {year === "archive" ? "Archive" : year}
                        </button>
                    ))}
                </div>

                {/* Data Table */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-primary mb-6">
                        Projects – {activeYear === "archive" ? "Archive" : activeYear}
                    </h3>

                    {projectsByYear[activeYear].length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-primary">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            S. No
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            Project Title
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            Name of Students
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            Faculty Coordinator
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                            Facility Used   
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {projectsByYear[activeYear].map((item, index) => (
                                        <tr
                                            key={index}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-gray-50"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="px-4 py-2 text-sm font-medium text-gray-900">
                                                {item.sno}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-500">
                                                {item.projectname}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-900">
                                                {item.studentname}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-900">
                                                {item.facultycoordinator}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-900">
                                                {item.facilityused}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center py-10 text-neutral-500 text-lg">
                            No project records available for this year.
                        </p>
                    )}
                </div>
            </div>
        </section>


            {/* Student Projects Section */}
             {/*
            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Student Projects
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Innovative projects developed by our students using
                            IDEA Lab facilities
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gradient-to-r from-primary to-secondary">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        S. No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Project Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Student Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Faculty Coordinator
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Facility Used
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    {
                                        sno: "1",
                                        title: "Laser Cut Wall Clock",
                                        student: "Rahul Jain",
                                        coordinator: "Nitin Mukesh Mathur",
                                        facility:
                                            "LASER cutter, various hardware and software support",
                                    },
                                    {
                                        sno: "2",
                                        title: "3D printer lithophane technology",
                                        student: "Rachit Agarwal",
                                        coordinator: "Udit Mamodiya",
                                        facility:
                                            "FDM printer and other hardware and software support",
                                    },
                                    {
                                        sno: "3",
                                        title: "Reverse engineering",
                                        student: "Parv Sharma",
                                        coordinator: "Udit Mamodiya",
                                        facility:
                                            "3D scanning, 3D printer, and other hardware and software support",
                                    },
                                    {
                                        sno: "4",
                                        title: "3D printed mobile stand",
                                        student: "Vaidika Duggar",
                                        coordinator: "Nitin Mukesh Mathur",
                                        facility:
                                            "3D printer and raw material support",
                                    },
                                    {
                                        sno: "5",
                                        title: "Stone paper scissor machine",
                                        student: "Yuvraj Dagur",
                                        coordinator: "Udit Mamodiya",
                                        facility:
                                            "3D printer for printing elements, Laser cutter for sheet parts",
                                    },
                                ].map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.sno}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-primary">
                                            {item.title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {item.student}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {item.coordinator}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {item.facility}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            */}

            {/* Funding Section */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Funding & Grants
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Major funding received for innovation and
                            development activities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                event: "Innovation, Design, and Entrepreneurship (IDE) Bootcamp for Students Innovations and Teachers of Schools",
                                date: "9th - 10th April 2024",
                                agency: "AICTE",
                                amount: "₹12,69,000",
                            },
                            {
                                event: "SMART INDIA HACKATHON (SOFTWARE EDITION) GRAND FINALE -2023",
                                date: "19th - 20th December 2023",
                                agency: "MoE Innovation Cell",
                                amount: "₹11,05,000",
                            },
                            {
                                event: "AU-Small Finance Bank Endowment Fund",
                                date: "Ongoing",
                                agency: "AU-Small Finance Bank",
                                amount: "₹7,00,000",
                            },
                        ].map((fund, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-hand-holding-dollar text-white text-xl"></i>
                                    </div>
                                    <div className="text-2xl font-bold text-secondary">
                                        {fund.amount}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-2">
                                    {fund.event}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    <i className="fas fa-calendar mr-2"></i>
                                    {fund.date}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <i className="fas fa-university mr-2"></i>
                                    Funded by: {fund.agency}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MOUs Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Memorandum of Understanding (MOUs)
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Strategic partnerships with industry leaders and
                            organizations
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gradient-to-r from-secondary to-primary">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        S. No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Company Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Start Year
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        MOU Document
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    {
                                        sno: "1",
                                        company:
                                            "Exeliq Tech Solutions Pvt. Ltd.",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1fUnsn8K1pO5i2rhDfx09E6rcLVT2_BMr/view?usp=sharing",
                                    },
                                    {
                                        sno: "2",
                                        company: "Elektrolites",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1YnD388LO3raAQF9psNLqU26UDOxotHK7/view?usp=sharing",
                                    },
                                    {
                                        sno: "3",
                                        company: "VMK Digitals",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1edH0uky2U1vkvvSknADWVnO2iQUjKkun/view?usp=sharing",
                                    },
                                    {
                                        sno: "4",
                                        company: "Club First Robotics",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1FZ7PXYlNRkcK8KPGs0abWsptOhB06kCh/view?usp=sharing",
                                    },
                                    {
                                        sno: "5",
                                        company: "Johns Automation Systems",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1w1McA5XxMOFdEx20x_33h2H22PzLF1ui/view?usp=sharing",
                                    },
                                    {
                                        sno: "6",
                                        company: "KARYTECK",
                                        year: "2022",
                                        link: "https://drive.google.com/file/d/1wDe15RQgW7H5vQak5vb1rC5Ga3OjcGZ8/view?usp=sharing",
                                    },
                                    {
                                        sno: "7",
                                        company: "ROBOFI",
                                        year: "2022",
                                        link: "https://drive.google.com/file/d/1fe0wNwIzeniCeUsWAFOvQamCI3rJdI1w/view?usp=sharing",
                                    },
                                    {
                                        sno: "8",
                                        company: "SINCGRID LLP",
                                        year: "2022",
                                        link: "https://drive.google.com/file/d/1235SU4bo_WUt2PvM1xDLbJGrwttkWPmM/view?usp=sharing",
                                    },
                                    {
                                        sno: "9",
                                        company: "Hack2Skills",
                                        year: "2022",
                                        link: "https://drive.google.com/file/d/1E4mzGIdaxHyrO9CpM8-1zhN2gOVFDQtS/view?usp=sharing",
                                    },
                                    {
                                        sno: "10",
                                        company:
                                            "MACHIN AUTOMATION Private Limited",
                                        year: "2023",
                                        link: "https://drive.google.com/file/d/1Rs_DdFJhYjctN8s90EMRYzGwmaXbZ0tM/view?usp=sharing",
                                    },
                                    {
                                        sno: "11",
                                        company: "Technos COE",
                                        year: "2024",
                                        link: "https://drive.google.com/file/d/1A1suuwimCqzzTqIh4MuGVZqmgMzyEKpK/view?usp=sharing",
                                    },
                                ].map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.sno}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-primary">
                                            {item.company}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {item.year}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-secondary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-200"
                                            >
                                                <i className="fas fa-download mr-2"></i>
                                                View MOU
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    );
};

export default IdealLab;
