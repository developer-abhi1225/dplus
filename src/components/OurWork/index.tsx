import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { works } from "./data";
import { useRouter } from "next/router";

export default function OurWork() {
  const router = useRouter();
  return (
    <>
      <StyledTitle>
        <span style={{ color: "#7E7E7E" }}>Refined</span> Designs,
        <br />
        surpassing clients
        <br /> <span style={{ color: "#7E7E7E" }}>expections</span>.
      </StyledTitle>
      <StyledWrapper>
        {works.map((item) => {
          return (
            <StyledCardWrapper
              onClick={(e) => router.push(`/work/${item?.key}`)}
              key={item?.key}
            >
              <StyledImage src={item?.thumbnail} alt="work" />
              <StyledDescriptionWrapper>
                <StyledCardTitle>{item?.title} | </StyledCardTitle>
                <StyledServiceType>&nbsp; {item?.subTitle}</StyledServiceType>
              </StyledDescriptionWrapper>
            </StyledCardWrapper>
          );
        })}
      </StyledWrapper>
    </>
  );
}

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
  margin: "0 15%",
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
