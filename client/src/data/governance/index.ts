import { boardOfGovernors } from "./boardOfGovernors";
import { academicCouncil } from "./academicCouncil";
import { boardsOfStudies } from "./boardsOfStudies";
import { financeCommittee } from "./financeCommittee";
import { examinationCommittee } from "./examinationCommittee";
import { grievanceRedresalData } from "./grievancesRedressal";

import { CommitteeData } from "@/types/governance";

export const governanceData: Record<string, CommitteeData> = {
  "Board of Governors": boardOfGovernors,
  "Academic Council": academicCouncil,
  "Board of Studies": boardsOfStudies,
  "Finance Committee": financeCommittee,
  "Examination Committee": examinationCommittee,
  "Grievance Redressal": grievanceRedresalData,
  
};


