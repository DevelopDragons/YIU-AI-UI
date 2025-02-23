/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import Title from "../../components/Text/Title";
import { temp_mou } from "../../assets/data/temp/temp_mou";
import { useResponsive } from "../../hooks/ResponsiveContext";
import MouCard from "../../components/Group/MouCard";

const MOUPage = (): React.ReactElement => {
  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  return (
    <div>
      <Title title="MOU 기관" />
      <div
        css={css({
          marginTop: 50,
          marginBottom: 100,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // 자동으로 열 수를 조정하고 최소 크기 설정
          gap: 20, // 카드 간격
        })}
      >
        {temp_mou.map((item) => (
          <MouCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default MOUPage;
