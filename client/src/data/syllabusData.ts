export interface SyllabusItem {
  degree: "B. Tech." | "M. Tech.";
  branch: string;
  semester: number;
  subjectName: string;
  description: string;
  schemeLink: string;
  syllabusLink: string;
}
export const syllabusData: SyllabusItem[] = [
  // First year Subjects, Schemes and Syllabi
  {
    degree: "B. Tech.",
    branch: "First Year",
    semester: 1,
    subjectName: "Scheme and Syllabus for First Year (B.Tech) First Semester",
    description: "Scheme and syllabus, common for all the programs (From 2025-26)",
    schemeLink: "https://drive.google.com/file/d/1ZGo5S4w-qM9imhWbjQlityxKBdXQOzfT/view?usp=drive_link",
    syllabusLink: "https://drive.google.com/file/d/1AyxRyab793BULlYrjmpwRQfXFoK83EMO/view?usp=drive_link",
  },
  {
    degree: "B. Tech.",
    branch: "First Year",
    semester: 2,
    subjectName: "Scheme and Syllabus for First Year (B.Tech) Second Semester",
    description: "Scheme and syllabus, common for all the programs (From 2025-26)",
    schemeLink: "https://drive.google.com/file/d/1ZGo5S4w-qM9imhWbjQlityxKBdXQOzfT/view?usp=drive_link",
    syllabusLink: "https://drive.google.com/file/d/1gXiuFIIpo_U4lnI-NJe9X_TBEIIoBknd/view?usp=drive_link"
  },
   
];
