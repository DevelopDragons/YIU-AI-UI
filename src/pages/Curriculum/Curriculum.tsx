/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Title from "../../components/Text/Title";
import { temp_curriculum } from "../../assets/data/temp/temp_curriculum";
import { useResponsive } from "../../hooks/ResponsiveContext";
import CurriculumTable from "../../components/Group/CurriculumTable";

const CurriculumPage = (): React.ReactElement => {
  // 반응형 화면
  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  return (
    <div>
      <Title title="교육과정" />
      <div css={css({ marginTop: 50, marginBottom: 100, border: "none" })}>
        <CurriculumTable data={temp_curriculum} />
      </div>
    </div>
  );
};

export default CurriculumPage;
