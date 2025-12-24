import { CommitteeType } from "@/types/governance";

export const boardOfGovernors = {
  type: "bog",
  title: "Board of Governors",

  members: [
    {
    nominatedBy: "Chairman, Board of Governors",
    category: "Management",
    name: "Sh. Shashikant Singhi",
    email: "sksinghi@poornima.org",
  },
  {
    nominatedBy: "Shanti Education Society",
    category: "Management",
    name: "Sh. M.K.M. Shah",
    email: "mkm@poornima.org",
  },
  {
    nominatedBy: "Shanti Education Society",
    category: "Management",
    name: "Mr. Hari Singh Shekhawat",
    email: "director.Infrastructure@poornima.org",
  },
  {
    nominatedBy: "Shanti Education Society",
    category: "Management",
    name: "Ar. Rahul Singhi",
    email: "rahulsinghi@poornima.org",
  },
  {
    nominatedBy: "Shanti Education Society",
    category: "Management",
    name: "Dr. Neeraj Jain",
    email: "neerajj@poornima.org",
  },
  {
    nominatedBy: "Principal based on seniority by rotation",
    category: "Teachers of the College",
    name: "Dr. Anil Kumar",
    email: "anilkumar@poornima.org",
  },
  {
    nominatedBy: "Principal based on seniority by rotation",
    category: "Teachers of the College",
    name: "Dr. Budesh Kanwar",
    email: "budesh.kanwar@poornima.org",
  },
  {
    nominatedBy: "Administrative Officer / Senior administrative staff",
    category: "Administrative Staff of the College",
    name: "Dr. Balwan",
    email: "registrar.piet@poornima.org",
  },
  {
    nominatedBy: "Management",
    category: "Educationist / Industrialist",
    name: "Mr. Anupam Gupta",
    email: "anupam@celebaltech.com",
  },
  {
    nominatedBy: "Rajasthan Technical University, Kota",
    category: "University Nominee",
    name: "Prof. (Dr.) D. K. Palwalia",
    email: "dkpalwalia@rtu.ac.in",
  },
  {
    nominatedBy: "Shanti Education Society",
    category: "Institution Representative",
    name: "Mrs. Dipti Lodha",
    email: "diptilodha@poornima.org",
  },
  {
    nominatedBy: "Shanti Education Society",
    category: "Institution Representative",
    name: "Mr. Ashwini Lata",
    email: "dsw@poornima.org",
  },
  {
    nominatedBy: "Shanti Education Society",
    category: "Institution Representative",
    name: "Mr. Jai Sharma",
    email: "jaisharma@poornima.org",
  },
  {
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Dr. Amit Shrivastava",
    email: "coe.piet@poornima.org",
  },
  {
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Dr. Mukesh Chandra",
    email: "iqac.piet@poornima.org",
  },
  {
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Dr. Sama Jain",
    email: "sama.jain@poornima.org",
  },
  {
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Dr. Payal Bansal",
    email: "payal.bansal@poornima.org",
  },
  {
    nominatedBy: "Principal",
    category: "Institution Representative",
    name: "Mr. Ashok Kumar",
    email: "proctor.piet@poornima.org",
  },
  {
    nominatedBy: "Principal",
    category: "Alumni / Industry Expert of CS/IT",
    name: "Ms. Sonu Bala",
    email: "sonu@w3care.com",
  },
  {
    nominatedBy: "Principal",
    category: "Alumni / Industry Expert of Emerging Technologies",
    name: "Mr. Khushal Gupta",
    email: "Khushal.dec@gmail.com",
  },
  {
    nominatedBy: "Principal",
    category: "Alumni / Industry Expert of ECE/EE",
    name: "Mr. Arun Kumar",
    email: "arun@sincgrid.com",
  },
  {
    nominatedBy: "Principal",
    category: "Alumni / Industry Expert of HR",
    name: "Mr. Manoj Pipersania",
    email: "manoj@softserv.in",
  },
  {
    nominatedBy: "Ex-Officio (Member Secretary)",
    category: "Principal of College",
    name: "Dr. Dinesh Goyal",
    email: "principal.piet@poornima.org",
  },
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