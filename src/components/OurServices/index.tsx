import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// import Image from "next/image";
import { data } from "./data";
import { useRouter } from "next/router";

export default function OurServices() {
  const StyledImage = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    borderRadius: "15px",
  }));

  const StyledWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    margin: "10% 0 5% 0",
    paddingBottom: "5%",
    background: "black",
    height: "500px",

    [theme.breakpoints.down("md")]: {
      flexDirection: "row", // Set a fixed width for larger screens
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column", // Set a fixed width for larger screens
    },
  }));

  const StyledCard = styled(Box)(({ theme }) => ({
    height: "400px",
    width: "30%",
    borderRadius: "15px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    marginTop: "-15%",
    "&:hover": {
      cursor: "pointer",
      transition: "all .5s",
      transform: "translateY(-10px)",
    },
    "&:nth-child(even)": {
      marginTop: "-5%",
    },
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    background: "transparent",
    color: "white",
    borderRadius: "40px",
    width: "200px",
    textTransform: "initial",
    border: "1px solid white",
    marginTop: "5%",
  }));

  const router = useRouter();
  return (
    <>
      <StyledWrapper>
        <Box
          sx={{
            display: "flex",
            color: "white",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0 5%",
          }}
        >
          {data.map((item, index) => (
            <>
              <StyledCard>
                <StyledImage src={item.image} alt="ourServices" />

                <Typography
                  sx={{
                    fontWeight: 600,
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                >
                  {item.title}
                </Typography>
              </StyledCard>
            </>
          ))}
        </Box>
        <StyledButton onClick={(e) => router.push("/work")}>
          Explore
        </StyledButton>
      </StyledWrapper>
    </>
  );
}
