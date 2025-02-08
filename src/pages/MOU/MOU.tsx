/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import Title from "../../components/Text/Title";
import { temp_mou } from "../../assets/data/temp/temp_mou";
import { border1 } from "../../assets/styles/borderLine";
import { useResponsive } from "../../hooks/ResponsiveContext";

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
          <div
            css={css({
              border: border1,
              width: 250,
              height: 250, // 고정된 높이
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            })}
          >
            <div
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                height: 200, // 이미지 영역의 높이
              }}
            >
              <img
                src={item.image}
                css={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              css={css({
                height: 50,
                backgroundColor: colors.gray.brightLightGray,
                fontSize: 15,
                fontWeight: 600,
                textAlign: "center",
                display: "flex",
                alignItems: "center", // 세로 가운데 정렬
                justifyContent: "center", // 가로 가운데 정렬
                padding: 15,
              })}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MOUPage;
