import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { LausanneFont, montserratFont } from "@/constants/fonts";
import Image from "next/image";
import { servicesData } from "./data";

export default function Services() {
  return (
    <GridContainer container rowSpacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} lg={6}>
            <StyledTitle>
              Customer
              <br />
              Satisfaction
              <br />
              is our
              <br />
              <span>Primary Goal</span>
            </StyledTitle>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <StyledDescription>
              DPlus Design Studio, where we bring your visions to life!
              <br />
              <br />
            </StyledDescription>
            <StyledDescription>
              We are an innovative ad agency specializing in creating
              captivating content and delivering effective solutions for
              businesses of all sizes.
              <br />
              <br />
            </StyledDescription>
            <StyledDescription>
              With our expertise and creative flair, we help our clients achieve
              their marketing goals and enhance their online presence.
            </StyledDescription>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={10}
          rowSpacing={10}
          justifyContent="center"
          alignItems="center"
        >
          {servicesData.map((item) => {
            return (
              <Grid
                key={item?.key}
                display={"flex"}
                justifyContent={"center"}
                item
                xs={12}
                md={6}
                lg={6}
              >
                <Box maxWidth={600}>
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    layout="responsive"
                  />
                  <ServicesDescContainer>
                    <Grid container>
                      {item?.services?.map((service, index) => {
                        return (
                          <Grid
                            key={`${item?.key}_${index}`}
                            item
                            xs={6}
                            display={"flex"}
                          >
                            <ServiceDescription>{service}</ServiceDescription>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </ServicesDescContainer>
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
