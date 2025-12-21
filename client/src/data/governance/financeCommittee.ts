import { CommitteeData } from "@/components/governance/CommitteeLayout";

export const financeCommittee: CommitteeData = {
  title: "Finance Committee",
  description:
    "The Finance Committee oversees financial planning, budgeting, and expenditure of the institute.",

  members: [
    {
      name: "Shri N. K. Jain",
      designation: "Chairman",
      affiliation: "Management"
    },
    {
      name: "Accounts Officer",
      designation: "Member",
      affiliation: "Finance Department"
    }
  ],

  mom: [
    {
      date: "12-07-2024",
      title: "Budget Approval Meeting 2024–25",
      link: "/pdfs/finance/finance-mom-2024.pdf"
    }
  ],

  atr: [
    {
      action: "Approval of Annual Budget",
      status: "Implemented"
    }
  ]
};
