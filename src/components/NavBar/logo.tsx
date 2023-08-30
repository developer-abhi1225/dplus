import { styled } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import whiteLogo from "../../../public/logo-white.png";
import blackLogo from "../../../public/logo-black.png";
import { logoTypes } from "@/constants/style";

interface IProps {
  type: logoTypes;
}

const LogoComponent = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "100%",
  width: "auto",
  height: "auto",
}));

const StyledImage = styled(Image)({
  width: "100px", // Set your logo width
  height: "auto", // Auto height to maintain aspect ratio
});

export const Logo = (props: IProps) => {
  const router = useRouter();
  const logo = props?.type === logoTypes.WHITE ? whiteLogo : blackLogo;
  return (
    <LogoComponent {...props} onClick={() => router.push("/")}>
      <StyledImage src={logo} alt="dplus" width={100} height={50} />
    </LogoComponent>
  );
};
