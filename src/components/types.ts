export interface Candidate {
  id: string | number;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  position: string;
  JSSkill: boolean | string;
  framework: string[];
  experience: string;
  education: string;
  english: string;
  notes: string;
}
