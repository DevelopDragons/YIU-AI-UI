/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import Title from "../../components/Text/Title";
import { yiuAiInfo } from "../../assets/data/yiu_ai_info";
import altImg from "../../assets/images/aihakbu_img1.jpeg";

const GreetingPage = (): React.ReactElement => {
  return (
    <div>
      <Title title="학부장 인사말" />
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          gap: 30,
          marginTop: 50,
        })}
      >
        <div
          css={css({
            fontSize: 30,
            fontWeight: 500,
          })}
        >
          <span css={css({ fontWeight: 800, color: colors.yiu.green })}>
            {`용인대학교 ${yiuAiInfo.name} `}
          </span>
          <span>
            홈페이지에
            <br />
            방문하신 여러분을 진심으로 환영합니다.
          </span>
        </div>
        {/* <img
          src={altImg}
          css={{
            // width: 500,
            objectFit: "contain",
            ":hover": {
              cursor: "pointer",
            },
          }}
        /> */}
        <div
          css={css({
            fontSize: 17,
            color: colors.gray.darkGray,
            lineHeight: 1.5,
          })}
        >
          {yiuAiInfo.greeting}
        </div>
        <div
          css={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
            gap: 10,
            textAlign: "left",
            fontWeight: 500,
            color: colors.gray.darkGray,
            fontSize: 22,
          })}
        >
          <span>AI융합학부 학부장</span>
          <span css={css({ fontWeight: 800, color: colors.yiu.green })}>
            이경재
          </span>
        </div>
      </div>
    </div>
  );
};

export default GreetingPage;
