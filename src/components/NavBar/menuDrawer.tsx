import { styled } from "@mui/material/styles";
import { Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styleConstants } from "@/constants/style";
import { useRouter } from "next/router";
import { menu, IMenu } from "./data";
interface IProps {
  visible: boolean;
  hide: Function;
}

const StyledBox = styled(Box)({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignContent: "center",
  alignItems: "center",
  marginTop: styleConstants.NAV_BAR_HEIGHT,
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "100%", // Set to auto for full-width appearance
  },
}));

const MenuDrawer = (props: IProps) => {
  const router = useRouter();
  const redirect = (route: string) => {
    router.push(route);
  };
  return (
    <StyledDrawer
      anchor="right"
      open={props?.visible}
      onClose={(e) => props?.hide()}
    >
      <StyledBox>
        {menu.map((menuItem: IMenu) => {
          return (
            <Typography
              onClick={(e) => redirect(menuItem?.route)}
              key={menuItem?.key}
              variant="h2"
            >
              {menuItem?.label}
            </Typography>
          );
        })}
      </StyledBox>
    </StyledDrawer>
  );
};

export default MenuDrawer;
