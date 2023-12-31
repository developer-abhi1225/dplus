import { styleConstants } from "@/constants/style";
import { styled } from "@mui/material/styles";

const StyledVideo = styled("video")({
  width: "100%",
  // height: `calc(100vh - ${styleConstants.NAV_BAR_HEIGHT}px)`,
  height: "auto",
});

export default function Home() {
  return (
    <>
      <StyledVideo controls loop={true}>
        <source src="/Testimonial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>{" "}
    </>
  );
}
