import { CommitteeData } from "@/components/governance/CommitteeLayout";

export const boardOfGovernors: CommitteeData = {
  title: "Board of Governors",
  description:
    "The Board of Governors is the highest decision-making authority of the Autonomous Institute.",

  members: [
    {
      name: "Shri N. K. Jain",
      designation: "Chairman",
      affiliation: "Poornima Group"
    },
    {
      name: "Dr. R. P. Singh",
      designation: "Director",
      affiliation: "Poornima Institute"
    },
    {
      name: "Dr. S. K. Sharma",
      designation: "Academic Expert",
      affiliation: "University Nominee"
    }
  ],

  mom: [
    {
      date: "10-08-2024",
      title: "First BoG Meeting (Autonomy Implementation)",
      link: "/pdfs/bog/mom-aug-2024.pdf"
    }
  ],

  // ATR not published → dummy placeholder
  atr: [
    {
      action: "Approval of Academic Regulations",
      status: "Implemented (Provisional)"
    },
    {
      action: "Formation of Statutory Bodies",
      status: "Completed"
    }
  ]
};
