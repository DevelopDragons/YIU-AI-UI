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

export const fullTimeMembers: Member[] = [
  {
    id: 1,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR, // 교수 역할
    type: ProfessorType.FULLTIME, // 전임 교수
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
  {
    id: 2,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.FULLTIME,
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
  {
    id: 3,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.FULLTIME,
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
  {
    id: 4,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR, // 교수 역할
    type: ProfessorType.FULLTIME, // 전임 교수
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
  {
    id: 5,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.FULLTIME,
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
  {
    id: 6,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.FULLTIME,
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
];

export const notFullTimeMembers: Member[] = [
  {
    id: 1,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.ADJUNCT,
    description: "한국전자통신연구원",
  },
  {
    id: 2,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.INVITED,
    description: "한국전자통신연구원",
  },
  {
    id: 3,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.VISITING,
    description: "한국전자통신연구원",
  },
];

export const retiredMembers: Member[] = [
  {
    id: 1,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.RETIRED,
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
  {
    id: 2,
    name: "이경재",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.PROFESSOR,
    type: ProfessorType.RETIRED,
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
];

export const assistantMembers: Member[] = [
  {
    id: 1,
    name: "강주현",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.ASSISTANT,
    type: ProfessorType.FULLTIME,
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
  {
    id: 2,
    name: "변미현",
    image: "",
    mail: "kjlee@yongin.ac.kr",
    tel: "031-8020-3696",
    labName: "컴퓨터비전 연구실",
    labImage: "https://via.placeholder.com/150",
    labLink: "https://milab.yongin.ac.kr/",
    labCategory: "AI & Machine Learning",
    role: MemberRole.ASSISTANT,
    type: ProfessorType.FULLTIME,
    description:
      "이경재 is a leading expert in AI and machine learning, with over 20 years of experience in the field.",
  },
];
