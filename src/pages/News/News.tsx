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
import NewsListItem from "../../components/Group/NewsListItem";

const NewsPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  const [selectedNews, setSelectedNews] = useRecoilState(SelectedNewsAtom);

  return (
    <div>
      <PageHeader backgroundImage={TitleBgImg} title={"소식"} />
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
          <NewsListItem
            item={item}
            onClick={() => {
              setSelectedNews(item);
              navigate(`/news/:${item.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
