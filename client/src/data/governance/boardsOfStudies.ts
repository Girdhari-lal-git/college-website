import { CommitteeData } from "@/components/governance/CommitteeLayout";

export const boardsOfStudies: Record<string, CommitteeData> = {
  "BoS – Computer Science & Engineering": {
    title: "Board of Studies – CSE",
    description:
      "Responsible for curriculum design, review, and academic standards for CSE programs.",

    members: [
      {
        name: "Dr. Sanjay Sinha",
        designation: "Chairperson",
        affiliation: "CSE Department"
      },
      {
        name: "Industry Expert",
        designation: "External Member",
        affiliation: "IT Industry"
      }
    ],

    mom: [
      {
        date: "18-09-2024",
        title: "Revision of CSE Curriculum",
        link: "/pdfs/bos/cse-mom.pdf"
      }
    ],

    atr: [
      {
        action: "Curriculum updated as per NEP-2020",
        status: "Implemented"
      }
    ]
  }
};
