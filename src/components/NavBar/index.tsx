import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";
import whiteLogo from "../../../public/logo-white.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "./menuDrawer";
import { logoTypes, styleConstants } from "@/constants/style";
import { Logo } from "./logo";
import { useRouter } from "next/router";
import { IMenu, menu } from "./data";

const NavToolbar = styled(Toolbar)({
  width: "inherit",
});

const Navbar = styled(AppBar)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#000", // Set your desired background color
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 20px", // Adjust padding as needed
  zIndex: theme.zIndex.drawer + 1,
  position: "fixed",
  height: styleConstants.NAV_BAR_HEIGHT,
  maxHeight: styleConstants.NAV_BAR_HEIGHT,
}));

const Menu = styled("div")({
  display: "flex",
  alignItems: "center",
});

const MenuItem = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    width: "150px", // Set a fixed width for larger screens
  },
  width: "300px",
  marginLeft: "5%", // Space between menu items
  cursor: "pointer",
}));

const FillSpace = styled("div")({
  flex: 1, // Fill the remaining space
});

const MyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("md")
  );
  const router = useRouter();
  const redirect = (route: string) => {
    router.push(route);
  };

  return (
    <>
      <Navbar position="static">
        <NavToolbar>
          <Logo type={logoTypes.WHITE} />
          <FillSpace />
          {!isSmallScreen && (
            <Menu>
              {menu.map((menuItem: IMenu) => {
                return (
                  <MenuItem
                    onClick={(e) => redirect(menuItem?.route)}
                    key={menuItem?.key}
                    variant="body1"
                  >
                    {menuItem?.label}
                  </MenuItem>
                );
              })}
            </Menu>
          )}
          {isSmallScreen && (
            <div onClick={(e) => toggleMenu()}>
              <MenuIcon />
            </div>
          )}
        </NavToolbar>
      </Navbar>
      <MenuDrawer visible={showMenu} hide={toggleMenu} />
    </>
  );
};

export default MyNavbar;
