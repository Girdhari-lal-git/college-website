export const examinationCommittee = {
  type: "examination",
  title: "Examination Committee",

  members: [
    {
      category: "Chairperson",
      nominee: "Controller of Examinations",
      designation: "Professor",
      name: "Dr. XYZ",
      email: "coe@poornima.org"
    }
  ],

  mom: [
  {
    title: "First Board of Governors Meeting",
    date: "10-08-2024",
    link: "/pdfs/bog/mom-aug-2024.pdf"
  }
],

atr: [
  {
    title: "Approval of Autonomous Examination Regulations",
    date: "22-08-2024",
    link: "/pdfs/exam/atr-exam-regulations.pdf",
  },
  {
    title: "Implementation of Digital Evaluation System",
    date: "22-08-2024",
    link: "/pdfs/exam/atr-digital-evaluation.pdf",
  },
],

} as const;
