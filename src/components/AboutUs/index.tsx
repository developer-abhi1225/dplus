import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import aboutUsImg from "../../../public/about-us.png";
import Image from "next/image";

const ABOUTUS_TEXT =
  "We are a full-service design and development studio dedicated to providing comprehensive solutions tailored to meet your unique needs. we are your one-stop destination for all your creative and technological requirements.";

export default function AboutUs(props: any) {
  const { pageName = "aboutUs" } = props;

  const StyledImage = styled(Image)(({ theme }) => ({
    width: "400px", // Set your logo width
    height: "auto", // Auto height to maintain aspect ratio
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  }));

  const StyledWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: "10%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column", // Set a fixed width for larger screens
    },
  }));

  const StyledInfo = styled(Box)(({ theme }) => ({
    color: "#000000",
    fontSize: "20px",
    lineHeight: "25px",
    fontWeight: 600,
  }));

  const StyledImgWrapper = styled(Box)(({ theme }) => ({
    marginRight: "50px",
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
    },
  }));

  return (
    <>
      {
        <StyledWrapper>
          <StyledImgWrapper>
            <StyledImage src={aboutUsImg} alt="dplus" />
          </StyledImgWrapper>
          <Box>
            <StyledInfo>{ABOUTUS_TEXT}</StyledInfo>
          </Box>
        </StyledWrapper>
      }
    </>
  );
}
