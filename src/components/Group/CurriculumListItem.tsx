/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { TableRow, TableCell, Collapse } from "@mui/material";
import { SubjectProps } from "../../models/subject";
import { colors } from "../../assets/styles/colors";
import { border1 } from "../../assets/styles/borderLine";
import { useResponsive } from "../../hooks/ResponsiveContext";

interface CurriculumListItemProps {
  item: SubjectProps;
  full?: boolean;
}

const CurriculumListItem = ({
  item,
  full = true,
}: CurriculumListItemProps): React.ReactElement => {
  // 반응형 화면
  const { isMobile, isNotMobile, isTablet, isDesktopOrLaptop } =
    useResponsive();

  const [open, setOpen] = useState(false);

  if (!full)
    return (
      <>
        <TableRow css={rowStyle} onClick={() => setOpen(!open)}>
          {!isMobile && (
            <TableCell align="center" css={cellStyle}>
              {item.code}
            </TableCell>
          )}
          <TableCell align="center" css={cellStyle}>
            {item.subject}
          </TableCell>
          <TableCell align="center" css={cellStyle}>
            {item.classification}
          </TableCell>
          {!isMobile && (
            <TableCell align="center" css={cellStyle}>
              {item.credit}
            </TableCell>
          )}
        </TableRow>
        {/* {item.contents} */}
        <TableRow css={css({ border: "none" })}>
          <TableCell colSpan={8} css={css({ padding: 0, border: "none" })}>
            <Collapse in={open} timeout="auto">
              <div css={cellContentsStyle}>{item.contents}</div>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );

  return (
    <>
      <TableRow css={rowStyle} onClick={() => setOpen(!open)}>
        <TableCell align="center" css={cellStyle}>
          {item.classification}
        </TableCell>
        <TableCell align="center" css={cellStyle}>
          {item.grade}
        </TableCell>
        <TableCell align="center" css={cellStyle}>
          {item.semester}
        </TableCell>
        {isDesktopOrLaptop ||
          (isTablet && (
            <TableCell align="center" css={cellStyle}>
              {item.code}
            </TableCell>
          ))}
        <TableCell align="center" css={cellStyle}>
          {item.subject}
        </TableCell>

        {isDesktopOrLaptop && (
          <>
            <TableCell align="center" css={cellStyle}>
              {item.credit}
            </TableCell>
            <TableCell align="center" css={cellStyle}>
              {item.theory}
            </TableCell>
            <TableCell align="center" css={cellStyle}>
              {item.practice}
            </TableCell>
          </>
        )}
      </TableRow>
      {/* {item.contents} */}
      <TableRow css={css({ border: "none" })}>
        <TableCell colSpan={8} css={css({ padding: 0, border: "none" })}>
          <Collapse in={open} timeout="auto">
            <div css={cellContentsStyle}>{item.contents}</div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const rowStyle = css({
  color: colors.gray.black,
  borderBottom: `0.5px solid ${colors.gray.brightGray}`,
  cursor: "pointer",
  ":hover": {
    backgroundColor: colors.gray.lightGray,
    transition: "all 0.2s",
  },
});

const cellStyle = css({
  fontWeight: 600,
  fontSize: 14,
});

const cellContentsStyle = css({
  padding: 20,
  fontWeight: 500,
  fontSize: 14,
  color: colors.text.black,
  backgroundColor: colors.gray.brightLightGray,
});

export default CurriculumListItem;
