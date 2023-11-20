import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const interFont = Inter({
  subsets: ["latin"],
  weight: "200",
});

export const LausanneFont = localFont({
  src: "../../public/Fonts/Lausanne-Regular.otf",
  weight: "200",
});
