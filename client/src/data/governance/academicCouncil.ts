import { CommitteeData } from "@/components/governance/CommitteeLayout";

export const academicCouncil: CommitteeData = {
  title: "Academic Council",
  description:
    "The Academic Council supervises and regulates all academic matters of the Autonomous Institute.",

  members: [
    {
      name: "Dr. Payal Bansal",
      designation: "Chairperson",
      affiliation: "Principal"
    },
    {
      name: "Dr. Ritam Dutta",
      designation: "External Academic Expert",
      affiliation: "Industry / University"
    },
    {
      name: "Dr. Aisha Rafi",
      designation: "Member",
      affiliation: "Applied Sciences"
    }
  ],

  mom: [
    {
      date: "05-09-2024",
      title: "Approval of Autonomous Curriculum Framework",
      link: "/pdfs/ac/mom-sep-2024.pdf"
    }
  ],

  atr: [
    {
      action: "Approval of First Year Syllabus",
      status: "Implemented"
    },
    {
      action: "Introduction of Minor & Honors Degrees",
      status: "Approved"
    }
  ]
};
