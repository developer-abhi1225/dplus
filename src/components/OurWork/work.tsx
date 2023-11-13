import { useRouter } from "next/router";
import { IWork, works } from "./data";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { styleConstants } from "@/constants/style";
import { Carousel } from "react-responsive-carousel";

export default function Work() {
  const router = useRouter();
  const work = router?.query?.work;
  const _w = works.find((item) => item?.key === work);
  const otherProjects = works.filter((item) => item?.key !== work);
  if (!work && !_w) {
    return <></>;
  }

  return (
    <>
      <BannerImage src={_w?.banner} alt="" />
      <Container>
        <div>{_w?.brandLine}</div>
        <BrandImage src={_w?.brandLogo} alt="" />
        {_w?.work?.map((item) => {
          const _s = typeof item?.image === typeof "string";
          return (
            <WorkContainer key={item?.key}>
              <Typography variant="h3">{item?.title}</Typography>
              <Box display={"flex"} flexDirection={"row"}>
                <div>{item?.description}</div>
                {_s && (
                  <Image src={item?.image} width={400} height={500} alt="" />
                )}
                {!_s && (
                  <Carousel
                    autoPlay={true}
                    showStatus={false}
                    showArrows={false}
                  >
                    <Image
                      src={item?.image[0]}
                      width={800}
                      height={500}
                      alt=""
                    />
                    <Image
                      src={item?.image[1]}
                      width={800}
                      height={500}
                      alt=""
                    />
                  </Carousel>
                )}
              </Box>
            </WorkContainer>
          );
        })}
      </Container>
      asd
      <ProjectsContainer>
        {otherProjects?.map((item: IWork) => (
          <StyledImage key={item?.key} src={item?.thumbnail} alt="" />
        ))}
      </ProjectsContainer>
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

const ProjectsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    margin: "0%",
  },

  "& > *": {
    margin: "2% 0%",
    width: "100%",
  },
}));

const BrandImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: `auto`,
}));

const BannerImage = styled(Image)(({ theme }) => ({
  width: "auto",
  height: `calc(100vh - ${styleConstants.NAV_BAR_HEIGHT}px)`,
}));

const WorkContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    margin: "0%",
  },

  "& > *": {
    margin: "2% 0%",
    width: "100%",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  margin: "0% 15%",
  [theme.breakpoints.down("sm")]: {
    margin: "0%",
  },

  "& > *": {
    margin: "4% 0%",
  },
}));
