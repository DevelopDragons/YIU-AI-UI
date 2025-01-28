/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import TitleBgImg from "../../assets/images/page_title_bg_img.jpg";
import { useResponsive } from "../../hooks/ResponsiveContext";
import { Member, ProfessorType } from "../../assets/data/temp_professor";
import altUser from "../../assets/images/user.webp";

// Member 인터페이스를 props로 받아오도록 설정
interface ProfessorProps {
  item: Member; // props로 item을 받음
}

const AssistantProfessor = ({ item }: ProfessorProps): React.ReactElement => {
  // 반응형 화면
  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      })}
    >
      <img
        src={item.image.length == 0 ? altUser : item.image}
        // src={boss}
        css={css({
          width: 180,
          height: 230,
          border: `1px solid ${colors.gray.lightGray}`,
        })}
      />
      <div
        css={css({
          fontsize: 17,
          color: colors.gray.darkGray,
          fontWeight: 700,
        })}
      >
        {item.name} <span css={css({ fontWeight: 500 })}>조교</span>
      </div>
    </div>
  );
};

export default AssistantProfessor;
