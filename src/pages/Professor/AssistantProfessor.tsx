/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import Title from "../../components/Text/Title";
import { assistantProfessorGrid } from "./styles";
import { assistantMembers } from "../../assets/data/temp/temp_professor";
import AssistantProfessor from "../../components/Group/AssistantProfessor";

const AssistantProfessorPage = (): React.ReactElement => {
  return (
    <div>
      <Title title="조교 소개" />
      <div css={assistantProfessorGrid}>
        {assistantMembers.map((item, index) => {
          return <AssistantProfessor item={item} />;
        })}
      </div>
    </div>
  );
};

export default AssistantProfessorPage;
