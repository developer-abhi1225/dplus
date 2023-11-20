import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Logo } from "../NavBar/logo";
import { logoTypes } from "@/constants/style";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const FooterContent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  width: "inherit",
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  justifyItems: "center",
}));

const StyledLogo = styled(Logo)(({ theme }) => ({
  marginBottom: 20,
}));

const CircleContainer = styled("div")(({ theme }) => ({
  bottom: 0,
  overflow: "hidden",
  width: "100%",
}));

const Circle = styled("div")(({ theme }) => ({
  width: "100%",
  height: "300px",
  borderRadius: "100% 100% 0% 0%",
  background: "black",
  transform: "scaleX(1.1)",
}));

const SocialMedia = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
}));

const IconContainer = styled("div")(({ theme }) => ({
  paddingRight: 5,
  paddingLeft: 5,
}));

const Footer = () => {
  return (
    <CircleContainer>
      <Circle>
        <FooterContent>
          <StyledLogo type={logoTypes.WHITE} />
          <Typography variant="body1">info@thedplus.com</Typography>
          <Typography variant="body1">+91 7058611590</Typography>
          <SocialMedia>
            <Typography variant="body1">Follow us on</Typography>
            {/* <IconContainer>
              <FacebookRoundedIcon />
            </IconContainer> */}
            <Link target="_blank" href={"https://www.instagram.com/thedplus/"}>
              <IconContainer>
                <InstagramIcon />
              </IconContainer>
            </Link>
            <Link href={"https://wa.me/917058611590"}>
              <IconContainer>
                <WhatsAppIcon />
              </IconContainer>
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/dplus-design-studio/"}
            >
              <IconContainer>
                <LinkedInIcon />
              </IconContainer>
            </Link>
            {/* <IconContainer>
              <YouTubeIcon />
            </IconContainer> */}
          </SocialMedia>
        </FooterContent>
      </Circle>
    </CircleContainer>
  );
};

export default Footer;
