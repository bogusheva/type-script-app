export interface Candidate {
  id: number;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  position: string;
  JSSkill: boolean;
  framework: string[];
  experience: string;
  education: string;
  english: string;
  notes: string;
}

export type CandidateData = Omit<Candidate, "id">;
