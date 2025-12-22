export const financeCommittee = {
  type: "finance",
  title: "Finance Committee",

  members: [
    {
      position: "Chairman",
      department: "Management",
      designation: "Chairperson",
      name: "Shri N. K. Jain",
      email: "finance@poornima.org",
    },
  ],

  mom: [
    {
      title: "First Finance Committee Meeting",
      date: "10-08-2024",
      link: "/pdfs/finance/mom-aug-2024.pdf",
    },
  ],

  atr: [
  {
    title: "Approval of Annual Budget (Autonomous)",
    date: "15-08-2024",
    link: "/pdfs/finance/atr-annual-budget.pdf",
  },
  {
    title: "Approval of Procurement Policy",
    date: "15-08-2024",
    link: "/pdfs/finance/atr-procurement-policy.pdf",
  },
],

} as const;
