import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Collab() {
  const StyledWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: "10%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column", // Set a fixed width for larger screens
    },
  }));

  const StyledInfo = styled(Box)(({ theme }) => ({
    color: "#000000",
    fontSize: "20px",
    lineHeight: "25px",
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
  }));

  const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: "90px",
    fontWeight: "bold",
    lineHeight: "90px",
    marginRight: "10%",
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
    },
  }));

  return (
    <>
      {
        <StyledWrapper>
          <StyledTitle>
            Let's <br />
            Collab
          </StyledTitle>
          <Box>
            <StyledInfo>
              <TextField
                sx={{
                  width: { lg: "100vh", sm: "400px", xs: "350px", md: "100vh" },
                  border: "none",
                }}
                placeholder="Enter your Name"
                label="Name"
                type="text"
              />
              <TextField
                sx={{
                  width: { lg: "100vh", sm: "400px", xs: "350px", md: "100vh" },
                  border: "none",
                  marginTop: "25px",
                }}
                placeholder="Enter your Email"
                label="Email"
                type="email"
              />
              <TextField
                sx={{
                  width: { lg: "100vh", sm: "400px", xs: "350px", md: "100vh" },
                  border: "none",
                  marginTop: "25px",
                }}
                placeholder="Enter your Project Details"
                label="Project Details"
                type="text"
                multiline
                rows={4}
              />
            </StyledInfo>
          </Box>
        </StyledWrapper>
      }
    </>
  );
}
