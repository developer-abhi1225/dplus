import { useRouter } from "next/router";
import { IWork, works } from "./data";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { styleConstants } from "@/constants/style";

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
          return (
            <WorkContainer key={item?.key}>
              <div>{item?.title}</div>
              <div>{item?.description}</div>
              <Image src={item?.image} alt="" />
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
  width: "100%",
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
