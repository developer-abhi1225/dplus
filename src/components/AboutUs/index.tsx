import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import aboutUsImg from "../../../public/about-us.png";
import Image from "next/image";
import { LausanneFont, montserratFont } from "@/constants/fonts";
import { teamsData } from "./data";

export default function AboutUs(props: any) {
  return (
    <Grid container spacing={10} rowSpacing={15} marginTop={1} marginBottom={8}>
      <Grid item xs={12} sm={12}>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            display={"flex"}
            alignItems={"center"}
          >
            <StyledTitle>
              We are
              <br />
              the bridge
              <br />
              between
              <br />
              <span>Imagination</span>
              <br />
              <span>and reality</span>
            </StyledTitle>
          </Grid>
          <Grid
            item
            sm={6}
            md={6}
            lg={6}
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <DescriptionContainer>
              <Description>
                We are a full-service design and development studio dedicated to
                providing comprehensive solutions tailored to meet your unique
                needs.
              </Description>
              <br />
              <Description>
                We are your one-stop destination for all your creative and
                technological requirements.
              </Description>
            </DescriptionContainer>
          </Grid>
        </Grid>
      </Grid>
      {props?.about && (
        <>
          <Grid
            item
            xs={12}
            sm={12}
            display={"flex"}
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box border={1} padding={2} borderRadius={8}>
              <Heading> Our Team </Heading>
            </Box>
          </Grid>
          <Grid item sm={12}>
            <Grid
              container
              spacing={5}
              columns={15}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {teamsData?.map((item) => {
                return (
                  <Grid item lg={3} md={5} sm={12}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Image
                        src={item?.image}
                        alt={item?.name}
                        key={item?.key}
                        layout="responsive"
                      />
                      <Typography display={"flex"}>
                        <Typography fontWeight={600}>
                          {item?.name} &nbsp;{" "}
                        </Typography>{" "}
                        | {item?.designation}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}

const DescriptionContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontFamily: montserratFont.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  lineHeight: 1.2,
  fontFamily: montserratFont.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: LausanneFont.style.fontFamily,
  fontWeight: 500,
  fontSize: 30,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 70,
  fontWeight: 400,
  lineHeight: 1,
  fontFamily: LausanneFont.style.fontFamily,
  "& > span": {
    color: theme.palette.secondary.contrastText,
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: 50,
    lineHeight: "45px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 40,
    lineHeight: "45px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "5%",
  },
}));
