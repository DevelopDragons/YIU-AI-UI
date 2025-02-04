/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import PageHeader from "../../components/Text/PageHeader";
import TitleBgImg from "../../assets/images/PageHeader/news.jpg";
import { useResponsive } from "../../hooks/ResponsiveContext";
import Title from "../../components/Text/Title";
import { temp_news } from "../../assets/data/temp/temp_news";
import { SelectedNewsAtom } from "../../recoil/notice";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { border1, border3, border5 } from "../../assets/styles/borderLine";
import dayjs from "dayjs";

const NewsPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  const [selectedNews, setSelectedNews] = useRecoilState(SelectedNewsAtom);

  return (
    <div>
      <PageHeader backgroundImage={TitleBgImg} title={"학부소식"} />
      <div
        css={css({
          // display: "flex", // Flexbox를 사용하여 사이드바와 메인 콘텐츠를 나눔
          padding: "5%",
          maxWidth: 1000,
          margin: "0 auto",
        })}
      >
        {/* <Title title="학부소식" /> */}
        {temp_news.map((item, index) => (
          <div
            css={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              gap: 30,
              padding: 30,
              borderBottom: border1,
              cursor: "pointer",
              ":hover": {
                backgroundColor: colors.gray.lightGray,
                transition: "all 0.2s",
              },
            })}
            onClick={() => {
              setSelectedNews(item);
              navigate(`/news/:${item.id}`);
            }}
          >
            {/* 썸네일 */}
            <img
              src={item.thumbnail}
              // src={boss}
              css={css({
                width: 300,
                objectFit: "contain",
                border: border1,
                alignSelf: "center",
              })}
            />
            {/* 제목 및 정보 */}
            <div
              css={css({
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 15,
                color: colors.text.black,
              })}
            >
              {/* 제목 */}
              <div
                css={css({
                  fontSize: 20,
                  fontWeight: 700,
                  color: colors.yiu.green,
                })}
              >
                {item.title}
              </div>
              {/* 날짜 */}
              <div>{dayjs(item.createdAt).format("YYYY-MM-DD")}</div>
              {/* 단신 */}
              <div css={css({ marginTop: 15 })}>{item.shorts}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
