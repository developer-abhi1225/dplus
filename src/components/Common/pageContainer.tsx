import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageContainer = (props: any) => {
  return (
    <AppContainer>
      <ComponentContainer>{props?.children}</ComponentContainer>
    </AppContainer>
  );
};

const ComponentContainer = styled(Box)(({ theme, fullWidth }: any) => ({
  margin: "0 auto",
  width: "80%",
  ...(fullWidth && { margin: "0 0", width: "100%" }),
}));

export const AppContainer = styled(Box)(({ theme, fullWidth }: any) => ({
  width: "100%",
}));
