export const boardsOfStudies = {
  type: "bos-group",
  title: "Board of Studies",

  departments: {
    "BoS – CSE": {
      type: "bos",
      members: [
        {
          category: "Chairperson",
          nominatedBy: "Academic Council",
          name: "Dr. Sanjay Sinha",
          address: "PIET Jaipur"
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
    title: "Revision of CSE Curriculum as per NEP 2020",
    date: "12-09-2024",
    link: "/pdfs/bos/cse/atr-nep-curriculum.pdf",
  },
],


    },

    "BoS – AI & DS": {
      type: "bos",
      members: {
          category: "Chairperson",
          nominatedBy: "Academic Council",
          name: "Dr. Sanjay Sinha",
          address: "PIET Jaipur"
        },

     mom: [
  {
    title: "First Board of Governors Meeting",
    date: "10-08-2024",
    link: "/pdfs/bog/mom-aug-2024.pdf"
  }
],

atr: [
  {
    title: "Introduction of AI & DS Electives",
    date: "14-09-2024",
    link: "/pdfs/bos/aids/atr-new-electives.pdf",
  },
],


    },
  }
} as const;
