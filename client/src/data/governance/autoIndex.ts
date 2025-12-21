import { boardOfGovernors } from "./boardOfGovernors";
import { academicCouncil } from "./academicCouncil";
import { boardsOfStudies } from "./boardsOfStudies";
import { financeCommittee } from "./financeCommittee";
import { examinationCommittee } from "./examinationCommittee";

export const governanceData = {
  "Board of Governors": boardOfGovernors,
  "Academic Council": academicCouncil,
  ...boardsOfStudies,
  "Finance Committee": financeCommittee,
  "Examination Committee": examinationCommittee
};
