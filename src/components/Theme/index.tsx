import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { interFont } from "../../constants/fonts";

const customTheme = createTheme({
  typography: {
    fontFamily: interFont.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#cccccc",
    },
  },
});

export default function Theme(props: any) {
  return <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>;
}
