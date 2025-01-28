/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import main_background_img from "../../assets/images/main_background_img.jpeg";
import yiuInfo from "../../assets/data/yiu_info";
import yiuAiInfo from "../../assets/data/yiu_ai_info";
import { useMediaQuery } from "react-responsive";

const MainPage = (): React.ReactElement => {
  // 반응형 화면
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      <div
        css={css({
          position: "relative", // 자식 div의 위치를 절대적으로 설정할 수 있게
          height: 500,
          width: "100%",
          backgroundImage: `url(${main_background_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        })}
      >
        <div
          css={css({
            position: "absolute", // 부모 div와 동일한 위치에 텍스트 div를 배치
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", // 텍스트를 아래로 정렬
            gap: 10,
            color: colors.gray.white,
            paddingLeft: isMobile ? "5%" : "15%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            paddingBottom: 75,
          })}
        >
          <div
            css={css({
              fontSize: 60,
              fontFamily: "Arvo Bold",
            })}
          >
            {yiuInfo.name_en}
          </div>
          <div
            css={css({
              fontSize: 40,
              fontWeight: 700,
            })}
          >
            {yiuAiInfo.name_en}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
