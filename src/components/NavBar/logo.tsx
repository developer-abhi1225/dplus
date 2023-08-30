import { styled } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import whiteLogo from "../../../public/logo-white.png";

const LogoComponent = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "100%",
  width: "auto",
  height: "auto",
}));

const Logo = (props: any) => {
  const router = useRouter();
  return (
    <LogoComponent {...props} onClick={() => router.push("/")}>
      <Image
        width={200}
        height={70}
        src={whiteLogo}
        alt={"Dplus"}
        layout="intrinsic"
      />
    </LogoComponent>
  );
};

export default Logo;
