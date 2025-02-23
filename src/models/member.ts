// Member 역할 구분 (교수 / 조교)
export enum MemberRole {
  PROFESSOR = "PROFESSOR",
  ASSISTANT = "ASSISTANT",
}

// 교수 유형 구분 (전임 / 겸임 / 초빙 / 객원 / 퇴직)
export enum ProfessorType {
  FULLTIME = "전임교수",
  ADJUNCT = "겸임교수",
  INVITED = "초빙교수",
  VISITING = "객원교수",
  RETIRED = "명예교수",
}
// export enum ProfessorType {
//   FULLTIME = "FULLTIME",
//   ADJUNCT = "ADJUNCT",
//   INVITED = "INVITED",
//   VISITING = "VISITING",
//   RETIRED = "RETIRED",
// }

export interface Member {
  id: number;
  name: string;
  image: string;
  mail: string;
  tel: string;
  labName: string;
  labImage: string;
  labLink: string;
  labCategory: string;
  role: MemberRole; // 역할
  type: ProfessorType | null; // 교수일 경우 type이 필요
  description: string;
}
