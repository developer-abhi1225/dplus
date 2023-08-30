import { styled } from "@mui/material/styles";
import { Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styleConstants } from "@/constants/style";
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
  return (
    <StyledDrawer
      anchor="right"
      open={props?.visible}
      onClose={(e) => props?.hide()}
    >
      <StyledBox>
        <Typography variant="h2">Work</Typography>
        <Typography variant="h2">Services</Typography>
        <Typography variant="h2">About Us</Typography>
        <Typography variant="h2">Contact Us</Typography>
      </StyledBox>
    </StyledDrawer>
  );
};

export default MenuDrawer;
