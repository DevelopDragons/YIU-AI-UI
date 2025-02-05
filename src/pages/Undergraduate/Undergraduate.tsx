/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import TitleBgImg from "../../assets/images/PageHeader/student.jpg";
import PageHeader from "../../components/Text/PageHeader";
import { Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import { useResponsive } from "../../hooks/ResponsiveContext";
import SideMenu from "../../components/Menu/SideMenu";
import { navItems } from "../../models/menu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const UndergraduatePage = (): React.ReactElement => {
  const { isNotMobile } = useResponsive();
  const navigate = useNavigate();
  const location = useLocation();
  const subMenu = navItems[1].subMenu; // 학부 하위 메뉴 가져오기

  // 현재 URL에 맞게 초기 상태 설정
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue); // 페이지 이동
  };

  return (
    <div>
      <PageHeader backgroundImage={TitleBgImg} title={"교육/연구"} />
      <div
        css={css({
          display: "flex",
          padding: "5%",
          maxWidth: 1200,
          margin: "0 auto",
        })}
      >
        {/* 사이드바 */}
        {isNotMobile && <SideMenu menuItem={navItems[1]} />}

        {/* 메인 콘텐츠 */}
        <div css={css({ flex: 1 })}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit" // 기본 색상 무시
            indicatorColor="secondary" // 기본 옵션 (무시됨)
            aria-label="학부 탭"
            sx={{
              fontSize: 25,
              "& .MuiTabs-indicator": {
                backgroundColor: colors.yiu.green, // 원하는 색상 적용 (예: 주황색)
              },
              "& .MuiTab-root": {
                color: colors.text.black,
                fontWeight: 600,
                fontSize: 18,
              }, // 기본 상태
              "& .Mui-selected": { color: colors.yiu.green, fontWeight: 800 }, // 선택된 탭 색상
            }}
          >
            {subMenu.map((item) => (
              <Tab key={item.link} value={item.link} label={item.label} />
            ))}
          </Tabs>
          <Outlet /> {/* 하위 페이지 렌더링 */}
        </div>
      </div>
    </div>
  );
};

export default UndergraduatePage;
