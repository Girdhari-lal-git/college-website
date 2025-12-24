export interface SyllabusFile {
  degree: "Regular" | "Minor" | "Honors";
  program: string;
  session: string;
  semester: number;
  title: string;
  link: string;
}

export const syllabusData: SyllabusFile[] = [
  {
    degree: "Regular",
    program: "Applied Sciences",
    session: "2024-25",
    semester: 1,
    title: "Applied Sciences – Semester 1 Syllabus",
    link: "/pdfs/syllabus/as-sem1-2024.pdf",
  },
  {
    degree: "Regular",
    program: "CSE",
    session: "2024-25",
    semester: 3,
    title: "CSE – Semester 3 Syllabus",
    link: "/pdfs/syllabus/cse-sem3-2024.pdf",
  },
  {
    degree: "Minor",
    program: "AI & DS",
    session: "2024-25",
    semester: 5,
    title: "Minor in AI & DS – Semester 5",
    link: "/pdfs/syllabus/minor-ai-sem5.pdf",
  },
  {
    degree: "Honors",
    program: "CS (AI)",
    session: "2024-25",
    semester: 7,
    title: "Honors in CS (AI) – Semester 7",
    link: "/pdfs/syllabus/honors-csai-sem7.pdf",
  },
];
