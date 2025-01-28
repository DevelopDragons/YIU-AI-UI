export interface NavItem {
  label: string; // 상위 메뉴 이름
  subMenu: SubMenuItem[]; // 모든 항목은 객체 형태로 link 포함
}

export interface SubMenuItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  {
    label: "학부소개",
    subMenu: [
      { label: "학부장 인사말", link: "/faculty/greetings" },
      { label: "교수소개", link: "/faculty/professor" },
      { label: "조교소개", link: "/faculty/assistant-professor" },
      { label: "학생회소개", link: "/faculty/student-council" },
      { label: "연락처 및 오시는 길", link: "/faculty/contact" },
    ],
  },
  {
    label: "학부과정",
    subMenu: [
      { label: "전공 소개", link: "/course/intro" },
      { label: "교과 안내", link: "/course/curriculum" },
      { label: "융합전공/MD", link: "/course/convergence-major" },
      { label: "졸업기준", link: "/course/graduation" },
    ],
  },
  {
    label: "교육/연구",
    subMenu: [
      { label: "대학원 과정", link: "/research/graduate-school" },
      { label: "연구실 소개", link: "/research/lab" },
      { label: "MOU 기관", link: "/research/mou" },
    ],
  },
  {
    label: "학부소식",
    subMenu: [{ label: "학부소식", link: "/news" }],
  },
  {
    label: "입학정보",
    subMenu: [
      { label: "대학", link: "https://ipsi.yongin.ac.kr/index.do" },
      { label: "대학원", link: "https://graduate.yongin.ac.kr/" },
    ],
  },
];

export default navItems;
