import { styleConstants } from "@/constants/style";
import { styled } from "@mui/material/styles";
import AboutUs from "@/components/AboutUs/";
import Collab from "@/components/Collab";

const StyledVideo = styled("video")({
  width: "100%",
  height: `calc(100vh - ${styleConstants.NAV_BAR_HEIGHT}px)`,
  objectFit: "cover",
  // height: "auto",
});

export default function Home() {
  return (
    <>
      <StyledVideo controls autoPlay>
        <source src="/dplus-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>{" "}
      <AboutUs about={false} />
    </>
  );
}
