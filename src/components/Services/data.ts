import brandingService from "../../../public/Services/branding.webp";
import packageDesign from "../../../public/Services/package_design.webp";
import socialmediaManagement from "../../../public/Services/social_media_management.webp";
import websiteDesignDevelopment from "../../../public/Services/website_design_development.webp";

export const servicesData = [
  {
    key: "Branding Service",
    title: "Branding",
    image: brandingService,
    services: [
      "Branding",
      "Re-Branding",
      "Logo Design",
      "Brand Guidelines",
      "Typography",
      "Print Media",
    ],
  },
  {
    key: "Package Design Service",
    title: "Package Design",
    image: packageDesign,
    services: ["Packaging Concept", "Packaging design", "Label Design"],
  },
  {
    key: "Social Media Management Service",
    title: "Social Media Management",
    image: socialmediaManagement,
    services: [
      "Social Media Post Design",
      "Social Media Handling",
      "Social Media Marketing",
    ],
  },
  {
    key: "Website Design & Development Service",
    title: "Website Design & Development",
    image: websiteDesignDevelopment,
    services: [
      "UI/UX Design",
      "Icon Design",
      "Website Development",
      "Web App Development",
    ],
  },
];
