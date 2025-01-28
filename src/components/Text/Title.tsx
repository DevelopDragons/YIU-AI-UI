/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import TitleBgImg from "../../assets/images/page_title_bg_img.jpg";
import { useResponsive } from "../../hooks/ResponsiveContext";

interface TitleProps {
  title: string; // 제목
}

const Title = ({ title }: TitleProps): React.ReactElement => {
  // 반응형 화면
  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  const border = `5px solid ${colors.gray.brightGray}`;

  return (
    <div>
      <div
        css={css({
          fontSize: 40,
          fontWeight: 700,
          color: colors.yiu.green,
          paddingTop: 10,
          paddingBottom: 10,
          borderTop: border,
          borderBottom: border,
        })}
      >
        {title}
      </div>
    </div>
  );
};

export default Title;
