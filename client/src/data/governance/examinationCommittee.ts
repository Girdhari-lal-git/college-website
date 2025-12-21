import { CommitteeData } from "@/components/governance/CommitteeLayout";

export const examinationCommittee: CommitteeData = {
  title: "Examination Committee",
  description:
    "The Examination Committee is responsible for planning, conduct, evaluation, and declaration of results.",

  members: [
    {
      name: "Controller of Examinations",
      designation: "Chairperson",
      affiliation: "Autonomous Examination Cell"
    },
    {
      name: "Faculty Representative",
      designation: "Member",
      affiliation: "Academic Departments"
    }
  ],

  mom: [
    {
      date: "22-08-2024",
      title: "Autonomous Examination System Planning",
      link: "/pdfs/exam/exam-mom.pdf"
    }
  ],

  atr: [
    {
      action: "Implementation of Continuous Internal Evaluation",
      status: "In Progress"
    }
  ]
};
