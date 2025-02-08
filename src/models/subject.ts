export interface SubjectProps {
  id: number;
  subject: string;
  classification: string;
  grade: number;
  semester: number;
  code: number;
  credit: number;
  theory: number;
  practice: number;
  hidden: number;
  required: number;
  contents: string;
  createdAt?: string;
  updatedAt?: string;
}
