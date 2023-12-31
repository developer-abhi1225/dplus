import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { works } from "./data";
import { LausanneFont, montserratFont } from "@/constants/fonts";
import Image from "next/image";
import { useRouter } from "next/router";

export default function OurWork() {
  const router = useRouter();

  return (
    <GridContainer container rowSpacing={10}>
      <Grid item xs={12}>
        <StyledTitle>
          Refined Designs
          <br />
          Surpassing
          <br />
          <span>Client&apos;s Expectations</span>
        </StyledTitle>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={10}
          rowSpacing={10}
          justifyContent="center"
          alignItems="center"
        >
          {works?.map((work) => {
            return (
              <Grid
                // onClick={(e) => router.push(`/work/${work?.key}`)}
                key={work?.key}
                item
                xs={12}
                md={6}
                lg={6}
              >
                <Box borderRadius={2} overflow={"hidden"}>
                  <Image
                    src={work?.thumbnail}
                    alt={work?.title}
                    layout="responsive"
                  />
                </Box>
                <Box display={"flex"}>
                  <Typography fontWeight={600}>
                    {work?.title} &nbsp;{" "}
                  </Typography>
                  <Typography>| {work?.subTitle}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </GridContainer>
  );
}
const ServiceDescription = styled(Typography)(({ theme }: any) => ({
  fontWeight: 300,
  fontSize: 20,
  [theme.breakpoints.down("lg")]: {
    fontSize: 12,
  },
}));

const ServicesDescContainer = styled(Grid)(({ theme, isActive }: any) => ({
  background: theme?.palette?.primary.main,
  color: theme?.palette?.primary.contrastText,
  padding: 30,
}));

const GridContainer = styled(Grid)(({ theme, isActive }: any) => ({
  margin: "0 auto",
  width: "90%",
  marginBottom: "20%",
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

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  lineHeight: 1.2,
  fontFamily: montserratFont.style.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
}));
