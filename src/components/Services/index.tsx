import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const DESIGN_SERVICES_DATA = [
  {
    title: "Branding and Identity",
    description:
      "We understand the importance of creating a strong brand presence. Our team of skilled designers and strategists work closely with you to develop a compelling brand identity that resonates with your target audience. We can help you with logo design, re-branding, brand guidelines, typography, color schemes, and more.",
  },
  {
    title: "Graphic Design",
    description:
      "Our graphic designers create eye-catching visuals that communicate your message effectively. Whether it's designing brochures, flyers, or social media graphics, we make sure your brand looks exceptional across all platforms.",
  },
  {
    title: "Packaging Design",
    description:
      "We create eye-catching and effective packaging designs that not only protect your products but also make them stand out on the shelves, leaving a lasting impression on your customers.",
  },
  {
    title: "Web Design and Development",
    description:
      "Our skilled team crafts visually stunning and user-friendly websites that not only capture attention but also drive conversions. We prioritize seamless functionality and responsive design for optimal user experience.",
  },
  {
    title: "Digital Marketing",
    description:
      "We formulate comprehensive digital marketing strategies tailored to your business objectives. From search engine optimization (SEO) to social media management, we maximize your online visibility and generate quality leads.",
  },
  {
    title: "Content Creation",
    description:
      "Our skilled copywriters have a way with words. From crafting persuasive ad copies to writing engaging website content, blog posts, and social media captions, we know how to captivate your audience and leave a lasting impression. We understand the importance of compelling storytelling and employ the right tone and style to convey your brand's message effectively.",
  },
  {
    title: "Advertising Campaigns",
    description:
      "We design and execute targeted advertising campaigns to reach your desired audience. Through careful planning and optimization, we maximize your return on investment (ROI) and drive customer engagement.",
  },
  {
    title: "Social Media Management",
    description:
      "We understand the power of social media in building brand awareness and driving engagement. Our social media experts will curate engaging content, develop comprehensive strategies, and manage your social media channels to help you reach and connect with your target audience effectively.",
  },
];

const IT_SERVICES_DATA = [
  {
    title: "Web Development",
    description:
      "We specialize in creating stunning, responsive websites that captivate your audience and provide an exceptional user experience. Our team leverages the latest web technologies to develop custom websites that are both visually appealing and functionally robust. From e-commerce platforms to content management systems, we deliver scalable solutions that meet your specific requirements.",
  },
  {
    title: "Mobile App Development",
    description:
      "User experience is at the core of our design philosophy. Our skilled UI/UX designers create visually appealing interfaces that are intuitive, easy to navigate, and optimized for conversions. By blending aesthetics with usability, we ensure that your digital products provide an engaging and delightful experience to your target audience.",
  },
  {
    title: "UI/UX Design",
    description:
      "User experience is at the core of our design philosophy. Our skilled UI/UX designers create visually appealing interfaces that are intuitive, easy to navigate, and optimized for conversions. By blending aesthetics with usability, we ensure that your digital products provide an engaging and delightful experience to your target audience.",
  },
];
export default function Services() {
  const [isSelectedButton, setIsSelectedButton] =
    React.useState("designServices");

  const StyledHeaderWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5% 5% 0 5%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "start",
    },
  }));

  const StyledTitle = styled(Typography)(({ theme }) => ({
    color: "#000000",
    fontSize: "90px",
    fontWeight: 600,
    lineHeight: "90px",
    marginRight: "10%",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      lineHeight: "45px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5%",
    },
  }));

  const StyledDescription = styled(Typography)(({ theme }) => ({
    color: "#000000",
    fontSize: "20px",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  }));

  const StyledButtonWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5%",
  }));

  const StyledDesignServicedButton = styled(Button)(({ theme }) => ({
    background: isSelectedButton === "designServices" ? "white" : "#000000",
    color: isSelectedButton === "designServices" ? "#000000" : "white",
    width: "50%",
    borderRadius: "0",
    textTransform: "initial",
    fontWeight: 600,
    "&:hover": {
      background: "#000000",
      color: "white",
    },
  }));

  const StyledItServicesButton = styled(Button)(({ theme }) => ({
    background: isSelectedButton === "itServices" ? "white" : "#000000",
    color: isSelectedButton === "itServices" ? "#000000" : "white",
    width: "50%",
    borderRadius: "0",
    textTransform: "initial",
    fontWeight: 600,

    "&:hover": {
      background: "#000000",
      color: "white",
    },
  }));

  const StyledServicesDescriptionWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "5% 5% 5% 5%",
  }));

  const StyledServicesTitle = styled(Typography)(({ theme }) => ({
    color: "#000000",
    fontSize: "45px",
    fontWeight: 600,
    textTransform: "initial",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  }));

  const StyledServiceDescription = styled(Typography)(({ theme }) => ({
    color: "#000000",
    fontSize: "20px",
    fontWeight: 500,
    textTransform: "initial",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  }));

  return (
    <>
      <StyledHeaderWrapper>
        <StyledTitle>
          Customer
          <br /> Satisfaction <br /> is our
          <br /> <span style={{ color: "#7E7E7E" }}>Primary Goal</span>
        </StyledTitle>
        <StyledDescription>
          DPlus Design Studio, where we bring your visions to life! We are an
          innovative ad agency specializing in creating captivating content and
          delivering effective solutions for businesses of all sizes. With our
          expertise and creative flair, we help our clients achieve their
          marketing goals and enhance their online presence. Here's what we
          offer:
        </StyledDescription>
      </StyledHeaderWrapper>
      <StyledButtonWrapper>
        <StyledDesignServicedButton
          onClick={() => setIsSelectedButton("designServices")}>
          Design Services
        </StyledDesignServicedButton>
        <StyledItServicesButton
          onClick={() => setIsSelectedButton("itServices")}>
          IT Services
        </StyledItServicesButton>
      </StyledButtonWrapper>

      <StyledServicesDescriptionWrapper>
        {isSelectedButton === "designServices" && (
          <>
            {DESIGN_SERVICES_DATA.map((item, index) => (
              <Box key={index}>
                <StyledServicesTitle>{item.title}</StyledServicesTitle>
                <StyledServiceDescription>
                  {item.description}
                </StyledServiceDescription>
              </Box>
            ))}
          </>
        )}
        {isSelectedButton === "itServices" && (
          <>
            {IT_SERVICES_DATA.map((item, index) => (
              <Box key={index}>
                <StyledServicesTitle>{item.title}</StyledServicesTitle>
                <StyledServiceDescription>
                  {item.description}
                </StyledServiceDescription>
              </Box>
            ))}
          </>
        )}
      </StyledServicesDescriptionWrapper>
    </>
  );
}
