// import { useMediaQuery } from "react-responsive";
// import "./App.css";
// import { useLocation } from "react-router-dom";
// import Header from './components/Common/Header/Header';
// import Footer from './components/Common/Footer/Footer';

// interface LayoutProps {
//   className?: string;
//   children: React.ReactNode;
// }

// const Layout = (props: LayoutProps): React.ReactElement => {
//   const { className, children } = props;

//   // 반응형 화면
//   const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const isNotMobile = useMediaQuery({ minWidth: 768 });

//   const location = useLocation(); // 현재 경로 감지
//   const showHeader =
//     location.pathname !== "/management" && location.pathname != "/user";

//   return (
//     <div>
//       {/* 헤더 */}
//       <Header/>

//       {/* 바디 */}
//       <div
//         style={{
//           paddingTop: showHeader ? (isMobile ? 100 : 150) : 0,
//           minHeight: 1000,
//           whiteSpace: "pre-line",
//         }}
//       >
//         {children}
//       </div>
//       {/* 푸터 */}
//       <Footer/>
//     </div>
//   );
// };

// export default Layout;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import Divider from "@mui/material/Divider";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import { Typography } from '@mui/material';
// import MainContent from './pages/Main/MainContent';
// import Footer from './components/Common/Footer/Footer';
// import Header from './components/Common/Header/Header';

// const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

// const Layout: React.FC = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       <CssBaseline />
//       <Header handleDrawerToggle={handleDrawerToggle} />
//       <nav>
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <MainContent />
//       <Footer />
//     </Box>
//   );
// };

// export default Layout;

import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import React from "react";
import Footer from "./components/Common/Footer/Footer";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const location = useLocation();
  const showHeader =
    location.pathname !== "/management" && location.pathname !== "/user";

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;
  const navItems = ["Home", "About", "Contact"];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={className}>
      <Drawer
        // container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      {/* Header */}
      <Header handleDrawerToggle={handleDrawerToggle} />
      {/* Body */}
      <div
        style={{
          // paddingTop: showHeader ? (isMobile ? 100 : 150) : 0,
          minHeight: 1000,
          whiteSpace: "pre-line",
        }}
      >
        {children}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
