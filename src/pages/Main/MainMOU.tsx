/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import { useResponsive } from "../../hooks/ResponsiveContext";
import { temp_mou } from "../../assets/data/temp/temp_mou";
import MouCard from "../../components/Group/MouCard";
import MainSectionHeader from "../../components/Group/MainSectionHeader";

const MainMOU = (): React.ReactElement => {
  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  // 무한 루프를 위해 데이터 2배 복제
  const duplicatedMou = [...temp_mou, ...temp_mou];

  return (
    <div>
      <MainSectionHeader title={"MOU"} />
      <div css={carouselStyle(isMobile)}>
        <div css={carouselContent}>
          {duplicatedMou.map((mou, index) => (
            <div key={`${mou.id}-${index}`} css={css({ marginRight: 20 })}>
              <MouCard
                item={mou}
                size={150}
                visibleText={false}
                borderless={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMOU;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const carouselStyle = (isMobile: boolean) => css`
  overflow-x: hidden;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 150px;
  }

  &::after {
    right: 0;
    transform: rotateZ(180deg);
  }
`;

const carouselContent = css`
  display: flex;
  height: 100%;
  animation: ${scroll} 20s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;
