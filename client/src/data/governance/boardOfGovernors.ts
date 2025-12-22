import { CommitteeType } from "@/types/governance";

export const boardOfGovernors = {
  type: "bog",
  title: "Board of Governors",

  members: [
    {
      position: "Chairperson",
      nominatedBy: "Management",
      category: "Chairman",
      name: "Shri N. K. Jain",
      email: "nk.jain@poornima.org"
    }
  ],

  mom: [
    {
      title: "First BoG Meeting",
      date: "10-08-2024",
      link: "/pdfs/bog/mom-aug-2024.pdf"
    }
  ],

  atr: [
  {
    title: "Approval of Academic Regulations",
    date: "15-08-2024",
    link: "/pdfs/bog/atr-academic-regulations.pdf",
  },
  {
    title: "Approval of New UG & PG Programs",
    date: "15-08-2024",
    link: "/pdfs/bog/atr-new-programs.pdf",
  },
],
}as const;