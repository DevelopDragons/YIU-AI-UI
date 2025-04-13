import { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import MainSectionHeader from "../../components/Group/MainSectionHeader";
import { temp_news } from "../../assets/data/temp/temp_news";
import { border1 } from "../../assets/styles/borderLine";
import dayjs from "dayjs";

const CARD_MIN_WIDTH = 280;
const CARD_GAP = 20;

const MainNews = (): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCardCount, setVisibleCardCount] = useState(1);

  useEffect(() => {
    const updateCardCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth - 200;
        const count = Math.floor(
          (containerWidth + CARD_GAP) / (CARD_MIN_WIDTH + CARD_GAP)
        );
        setVisibleCardCount(Math.max(1, count));
      }
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        gap: 30,
      })}
    >
      <MainSectionHeader
        title={"학부 소식"}
        desc={"AI융합학부의 다양한 소식을 만나보세요."}
        buttonText="VIEW MORE"
        link="/news"
      />
      <div
        ref={containerRef}
        css={css({
          width: "100%",
          display: "grid",
          gridTemplateColumns: `repeat(${visibleCardCount}, 1fr)`,
          gap: CARD_GAP,
        })}
      >
        {temp_news.slice(0, visibleCardCount).map((item, index) => (
          <div
            key={index}
            css={css({
              minWidth: CARD_MIN_WIDTH,
              border: border1,
              borderRadius: 10,
              padding: 25,
              height: 250,
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            })}
          >
            <div css={css({ fontWeight: 650, color: colors.yiu.green })}>
              공지사항
            </div>
            <div css={css({ fontSize: 20, fontWeight: 700 })}>{item.title}</div>
            <div
              css={css({
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                fontSize: 16,
                fontWeight: 500,
                color: colors.gray.mediumGray,
              })}
            >
              {item.contents}
            </div>
            <div
              css={css({
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "auto",
                color: colors.gray.mediumGray,
                fontWeight: 600,
              })}
            >
              {dayjs(item.createdAt).format("YYYY-MM-DD")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
