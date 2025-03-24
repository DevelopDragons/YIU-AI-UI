import { MicroDegreeCategory, RequiredCategory } from "./enum";
import { SubjectProps } from "./subject";

export interface MD {
  [x: string]: any;
  title: string;
  name: string;
  description: string;
  //   required: RequiredCategory;
  category: MicroDegreeCategory;
  subjects: SubjectProps[];
  createdAt: string;
  updatedAt: string;
}
