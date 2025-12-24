export const examinationCommittee = {
  type: "examination",
  title: "Examination Committee",

  members: [
   {
    category: "Chairperson",
    nominee: "Principal / Director of Institute",
    designation: "Principal & Director",
    name: "Dr. Dinesh Goyal",
    email: "principal.piet@poornima.org"
  },
  {
    category: "Member-1",
    nominee: "Institute",
    designation: "Registrar",
    name: "Dr. Balwan",
    email: "registrar.piet@poornima.org"
  },
  {
    category: "Member-2",
    nominee: "Institute",
    designation: "Dy. Registrar (Exam & Secrecy)",
    name: "Mr. Narendra Yadav",
    email: "nyadav@poornima.org"
  },
  {
    category: "Member-3",
    nominee: "Institute",
    designation: "Professor (Convener, IQAC)",
    name: "Dr. Mukesh Chandra",
    email: "iqac.piet@poornima.org"
  },
  {
    category: "Member-4",
    nominee: "Institute",
    designation: "HoD, CSE Department",
    name: "Dr. Anil Kumar",
    email: "anil.kumar@poornima.org"
  },
  {
    category: "Member-5",
    nominee: "Institute",
    designation: "HoD, AI & DS Department",
    name: "Dr. Budesh Kanwar",
    email: "budesh.kanwar@poornima.org"
  },
  {
    category: "Member-6",
    nominee: "Institute",
    designation: "HoD, Applied Sciences Department",
    name: "Dr. Sama Jain",
    email: "sama.jain@poornima.org"
  },
  {
    category: "Member-7",
    nominee: "Institute",
    designation: "HoD, IoT Department",
    name: "Dr. Payal Bansal",
    email: "payal.bansal@poornima.org"
  },
  {
    category: "Member-Secretary",
    nominee: "CoE",
    designation: "Controller of Examinations",
    name: "Dr. Amit Shrivastava",
    email: "amit.shrivastava@poornima.org"
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
