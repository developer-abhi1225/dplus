import { useRouter } from "next/router";
import { useEffect } from "react";

export interface IMenu {
  route: string;
  label: string;
  key: string;
}
export const menu: IMenu[] = [
  {
    route: "/work",
    label: "Work",
    key: "workMenu",
  },
  {
    route: "/services",
    label: "Services",
    key: "serviceMenu",
  },
  {
    route: "/about-us",
    label: "About Us",
    key: "aboutUsMenu",
  },
  {
    route: "/contact-us",
    label: "Contact Us",
    key: "contactUsMenu",
  },
];
