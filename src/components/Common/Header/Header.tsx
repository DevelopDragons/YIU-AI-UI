/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import yiuAiInfo from "../../../assets/data/yiu_ai_info";
import YIU_logo from "../../../assets/images/YIU_logo.png";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../assets/styles/colors";
import yiuInfo from "../../../assets/data/yiu_info";

type HeaderProps = {
  handleDrawerToggle: () => void;
};

const navItems = ["Home", "About", "Contact"];

const Header: React.FC<HeaderProps> = ({ handleDrawerToggle }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const navigate = useNavigate();

  return (
    <div css={css({})}>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: colors.gray.white,
          padding: 1.5,
        }}
      >
        <Toolbar>
          {/* 모바일 메뉴 버튼 */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: colors.gray.black }}
          >
            <MenuIcon />
          </IconButton>
          {/* 로고 및 네임 */}
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            {yiuAiInfo.name_ko}
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <img
              src={YIU_logo}
              css={{
                width: 50,
                objectFit: "contain",
                ":hover": {
                  cursor: "pointer",
                },
              }}
              // onClick={() =>
              //   window.open(
              //     "http://yongin.ac.kr",
              //     "_blank",
              //     "noopener, noreferrer"
              //   )
              // }
            />
            <div
              css={css({
                fontWeight: 600,
                fontSize: 25,
                color: colors.gray.black,
              })}
            >
              {`${yiuInfo.name_ko} ${yiuAiInfo.name_ko}`}
            </div>
          </Box>
          {/* 메뉴 */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: colors.text.black, fontWeight: 600 }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
