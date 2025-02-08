/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Title from "../../components/Text/Title";
import CurriculumListItem from "../../components/Group/CurriculumListItem";
import { temp_curriculum } from "../../assets/data/temp/temp_curriculum";
import { colors } from "../../assets/styles/colors";
import { border1 } from "../../assets/styles/borderLine";
import { useResponsive } from "../../hooks/ResponsiveContext";

const CurriculumPage = (): React.ReactElement => {
  // 반응형 화면
  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  return (
    <div>
      <Title title="교육과정" />
      <TableContainer
        component={Paper}
        elevation={0}
        square
        css={css({ marginTop: 50, marginBottom: 100, border: "none" })}
      >
        <Table
          // stickyHeader
          css={css({
            borderCollapse: "collapse",
          })}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" rowSpan={2} css={headerCellStyle}>
                이수구분
              </TableCell>
              <TableCell align="center" rowSpan={2} css={headerCellStyle}>
                학년
              </TableCell>
              <TableCell align="center" rowSpan={2} css={headerCellStyle}>
                학기
              </TableCell>
              {isDesktopOrLaptop ||
                (isTablet && (
                  <TableCell align="center" rowSpan={2} css={headerCellStyle}>
                    학수번호
                  </TableCell>
                ))}
              <TableCell align="center" rowSpan={2} css={headerCellStyle}>
                교과목명
              </TableCell>

              {isDesktopOrLaptop && (
                <>
                  <TableCell align="center" rowSpan={2} css={headerCellStyle}>
                    학점
                  </TableCell>
                  <TableCell align="center" colSpan={2} css={headerCellStyle}>
                    주간수업시수
                  </TableCell>
                </>
              )}
            </TableRow>
            {isDesktopOrLaptop && (
              <>
                <TableRow>
                  <TableCell align="center" css={headerCellStyle}>
                    이론
                  </TableCell>
                  <TableCell align="center" css={headerCellStyle}>
                    실습
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableHead>
          <TableBody
            css={css({
              border: border1,
              // border: "none",
              // boxShadow: "none",
            })}
          >
            {temp_curriculum.map((row) => (
              <CurriculumListItem key={row.id} item={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const headerCellStyle = css({
  border: border1,
  fontWeight: 800,
  fontSize: 16,
  backgroundColor: colors.gray.brightLightGray,
});

export default CurriculumPage;
