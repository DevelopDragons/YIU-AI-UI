/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import Title from "../../components/Text/Title";
import {
  fullTimeMembers,
  notFullTimeMembers,
  retiredMembers,
} from "../../assets/data/temp_professor";
import Professor from "../../components/Group/Professor";
import { professorGrid } from "./styles";

const ProfessorPage = (): React.ReactElement => {
  return (
    <div>
      <Title title="전임교수" />
      <div css={professorGrid}>
        {fullTimeMembers.map((item, index) => {
          return <Professor item={item} />;
        })}
      </div>

      <Title title="겸임/초빙/객원교수" />
      <div css={professorGrid}>
        {notFullTimeMembers.map((item, index) => {
          return <Professor item={item} />;
        })}
      </div>

      <Title title="명예(퇴임)교수" />
      <div css={professorGrid}>
        {retiredMembers.map((item, index) => {
          return <Professor item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProfessorPage;
