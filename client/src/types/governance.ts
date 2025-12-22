export type CommitteeType =
  | "bog"
  | "academic-council"
  | "bos"
  | "bos-group"
  | "finance"
  | "examination";

export interface BoGMember {
  position: string;
  nominatedBy: string;
  category: string;
  name: string;
  email: string;
}

export interface AcademicCouncilMember {
  category: string;
  nominatedBy: string;
  name: string;
  designation: string;
}

export interface BoSMember {
  category: string;
  nominatedBy: string;
  name: string;
  address: string;
}

export interface FinanceCommitteeMember {
  position: string;
  department: string;
  designation: string;
  name: string;
  email: string;
}

export interface ExaminationCommitteeMember {
  category: string;
  nominee: string;
  designation: string;
  name: string;
  email: string;
}

export interface MoMItem {
  title: string;
  date: string;
  link: string;
}

export interface ATRItem {
  title: string;
  date: string;
  link: string;
}

export type CommitteeData =
  | {
      type: "bog";
      title: string;
      members: readonly BoGMember[];
      mom: readonly MoMItem[];
      atr: readonly ATRItem[];
    }
  | {
      type: "academic-council";
      title: string;
      members: readonly AcademicCouncilMember[];
      mom: readonly MoMItem[];
      atr: readonly ATRItem[];
    }
  | {
      type: "finance";
      title: string;
      members: readonly FinanceCommitteeMember[];
      mom: readonly MoMItem[];
      atr: readonly ATRItem[];
    }
  | {
      type: "examination";
      title: string;
      members: readonly ExaminationCommitteeMember[];
      mom: readonly MoMItem[];
      atr: readonly ATRItem[];
    }
  | {
      type: "bos-group";
      title: string;
      departments: Record<
        string,
        {
          type: "bos";
          members: readonly BoSMember[];
          mom: readonly MoMItem[];
          atr: readonly ATRItem[];
        }
      >;
    };
