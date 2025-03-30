/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";
import Title from "../../components/Text/Title";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PDFViewer from "../../components/PDF/PdfViewer";
import pdf from "../../assets/graduation_ai.pdf";
import { temp_graduation } from "../../assets/data/temp/temp_graduation";
import GraduationRequirementGroup from "../../components/Group/GraduationRequirementGroup";

const GraduationPage = (): React.ReactElement => {
  return (
    <div>
      <Title title="졸업기준" />
      <div css={css({ marginTop: 50 })}>
        {temp_graduation.map((data, index) => (
          <GraduationRequirementGroup item={data} first={index == 0} />
        ))}
      </div>
    </div>
  );
};

export default GraduationPage;
