/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import Title from "../../components/Text/Title";
import { temp_mou } from "../../assets/data/temp/temp_mou";
import { border1 } from "../../assets/styles/borderLine";
import { useResponsive } from "../../hooks/ResponsiveContext";
import { fullTimeMembers } from "../../assets/data/temp/temp_professor";
import LabCard from "../../components/Group/LabCard";
import { useQuery } from "@tanstack/react-query";
import { Member } from "../../models/member";
import { defaultAPI } from "../../services";

const LabPage = (): React.ReactElement => {
  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  // // 학과 연혁 데이터 가져오기
  // const {
  //   data: history,
  //   isLoading,
  //   error,
  // } = useQuery<Member[]>({
  //   queryKey: ["member"],
  //   queryFn: async () => {
  //     const res = await defaultAPI.get(`/major/history?id=78`);

  //     return res.data;
  //   },
  // });

  return (
    <div>
      <Title title="연구실 소개" />
      <div
        css={css({
          marginTop: 50,
          marginBottom: 100,
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${
            isMobile ? "400px" : "500px"
          }, 1fr))`, // 자동으로 열 수를 조정하고 최소 크기 설정
          gap: 20, // 카드 간격
        })}
      >
        {fullTimeMembers.map(
          (item) => item.labName.length > 0 && <LabCard item={item} />
        )}
      </div>
    </div>
  );
};

export default LabPage;
