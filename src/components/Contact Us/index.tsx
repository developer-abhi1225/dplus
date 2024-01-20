import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { contactUs } from "./data";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactUs() {
  return (
    <>
      <GridContainer container rowSpacing={10}>
        <Grid item xs={12} md={6} lg={6}>
          <Box borderRadius={2} overflow={"hidden"}>
            <Image
              src={contactUs?.bannerImage}
              alt={contactUs?.bannerImageTitle}
              layout="responsive"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          display={"flex"}
          rowGap={5}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography variant="h3">{contactUs?.email}</Typography>
          <Typography variant="h4">Follow us on</Typography>
          <Box display={"flex"}>
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
          </Box>
        </Grid>
      </GridContainer>
    </>
  );
}

const GridContainer = styled(Grid)(({ theme, isActive }: any) => ({
  margin: "0 auto",
  width: "90%",
  marginBottom: "20%",
}));

const IconContainer = styled("div")(({ theme }) => ({
  paddingRight: 5,
  paddingLeft: 5,
}));
