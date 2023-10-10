import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ourWork from "../../../public/our-work.png";
import Image from "next/image";

export default function OurWork() {
  const StyledImage = styled(Image)(({ theme }) => ({
    width: "440px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  const StyledWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    margin: "0 5%",
    paddingBottom: "5%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row", // Set a fixed width for larger screens
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column", // Set a fixed width for larger screens
    },
  }));

  const StyledTitle = styled(Typography)(({ theme }) => ({
    color: "#000000",
    fontSize: "60px",
    fontWeight: 600,
    lineHeight: "65px",
    margin: "5% 5% 0 5%",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      lineHeight: "45px",
    },
  }));

  const StyledDescriptionWrapper = styled(Box)({
    display: "flex",
    alignContent: "center",
  });

  const StyledCardTitle = styled(Typography)({
    fontSize: "20px",
    fontWeight: 700,
  });

  const StyledServiceType = styled(Typography)({
    fontSize: "16px",
  });

  const StyledCardWrapper = styled(Box)(({ theme }) => ({
    marginTop: "5%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  return (
    <>
      <StyledTitle>
        <span style={{ color: "#7E7E7E" }}>Refined</span> Designs,
        <br />
        surpassing clients
        <br /> <span style={{ color: "#7E7E7E" }}>expections</span>.
      </StyledTitle>
      <StyledWrapper>
        <StyledCardWrapper>
          <StyledImage src={ourWork} alt="work" />
          <StyledDescriptionWrapper>
            <StyledCardTitle>Yadra Quilt | </StyledCardTitle>
            <StyledServiceType>&nbsp; Beochure Design</StyledServiceType>
          </StyledDescriptionWrapper>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <StyledImage src={ourWork} alt="work" />
          <StyledDescriptionWrapper>
            <StyledCardTitle>Yadra Quilt | </StyledCardTitle>
            <StyledServiceType>&nbsp; Beochure Design</StyledServiceType>
          </StyledDescriptionWrapper>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <StyledImage src={ourWork} alt="work" />
          <StyledDescriptionWrapper>
            <StyledCardTitle>Yadra Quilt | </StyledCardTitle>
            <StyledServiceType>&nbsp; Beochure Design</StyledServiceType>
          </StyledDescriptionWrapper>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <StyledImage src={ourWork} alt="work" />
          <StyledDescriptionWrapper>
            <StyledCardTitle>Yadra Quilt | </StyledCardTitle>
            <StyledServiceType>&nbsp; Beochure Design</StyledServiceType>
          </StyledDescriptionWrapper>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <StyledImage src={ourWork} alt="work" />
          <StyledDescriptionWrapper>
            <StyledCardTitle>Yadra Quilt | </StyledCardTitle>
            <StyledServiceType>&nbsp; Beochure Design</StyledServiceType>
          </StyledDescriptionWrapper>
        </StyledCardWrapper>
        <StyledCardWrapper>
          <StyledImage src={ourWork} alt="work" />
          <StyledDescriptionWrapper>
            <StyledCardTitle>Yadra Quilt | </StyledCardTitle>
            <StyledServiceType>&nbsp; Beochure Design</StyledServiceType>
          </StyledDescriptionWrapper>
        </StyledCardWrapper>
      </StyledWrapper>
    </>
  );
}
