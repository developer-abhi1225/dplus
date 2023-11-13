import ourWork from "../../../public/our-work.png";
import sahrudaya_brand from "../../../public/sahrudaya_brand.jpeg";
import sahrudaya_cards from "../../../public/sahrudaya_cards.jpeg";
import sahrudaya_packaging from "../../../public/sahrudaya_packaging.jpeg";
import sahrudaya_package_ladoo_1 from "../../../public/sahrudaya_package_ladoo_1.jpeg";
import sahrudaya_package_ladoo_2 from "../../../public/sahrudaya_package_ladoo_2.jpeg";
import sahrudaya_package_ladoo_3 from "../../../public/sahrudaya_package_ladoo_3.jpeg";
import { StaticImageData } from "next/image";

export interface IWork {
  key: string;
  thumbnail: any;
  title: string;
  subTitle: string;
  banner: any;
  brandLine: string;
  brandLogo: any;
  work: IWorkDetails[];
}

interface IWorkDetails {
  title: string;
  description: string;
  image: any;
  key: string;
}

export const works: IWork[] = [
  {
    key: "sahrudaya",
    thumbnail: sahrudaya_brand,
    title: "Sahrudaya",
    subTitle: "Branding & Package Designing",
    banner: sahrudaya_brand,
    brandLine:
      "Sahrudaya, a food brand deeply rooted in the rural heritage of India, embarked on branding project with the aim of establishing itself as a trusted provider of organic & preservative free foods. This case study delves into the strategies employed by Sahrudaya to create an effective brand identity & package designing that resonates with its target audience.",
    brandLogo: "",
    work: [
      {
        key: "brandIdentityDesign",
        title: "Brand Identity Design",
        description:
          "Recognizing the original name might be challenging to pronounce, Sahrudaya underwent a though-full rebranding process to ensure easy recognition and recall. The decision was made to break down the word into two segments: 'Sah' (with) & Rudaya (heart). The simplified pronounciation assist customers in correctly vocalizing the brand's name, fostering familarity & ease of communication.",
        image: sahrudaya_cards,
      },
      {
        key: "packageDesign",
        title: "Packaging Design",
        description:
          "The packaging design for Saharudaya's products plays a pivotal role in evoking a sense of nostalgia and emotional connection to traditional cooking methods. Each product features an intricate illustration portraying rural women sitting down and passionately crafting the recipes by hand. This imagery aims to transport the consumer to the heart of a traditional kitchen, where mothers lovingly prepare food for their families. By incorporating these illustrations, Saharudaya aims to instill a feeling of warmth and authenticity in its consumers.",
        image: [
          sahrudaya_package_ladoo_1,
          sahrudaya_package_ladoo_2,
          sahrudaya_package_ladoo_3,
        ],
      },
    ],
  },
  {
    key: "chotusFlavor",
    thumbnail: ourWork,
    title: "Chotu's Flavor",
    subTitle: "Branding & Package Designing",
    banner: ourWork,
    brandLine:
      "Sahrudaya, a food brand deeply rooted in the rural heritage of India, embarked on branding project with the aim of establishing itself as a trusted provider of organic & preservative free foods. This case study delves into the strategies employed by Sahrudaya to create an effective brand identity & package designing that resonates with its target audience.",
    brandLogo: ourWork,
    work: [
      {
        key: "brandIdentityDesign",
        title: "Brand Identity Design",
        description:
          "Recognizing the original name might be challenging to pronounce, Sahrudaya underwent a though-full rebranding process to ensure easy recognition and recall. The decision was made to break down the word into two segments: 'Sah' (with) & Rudaya (heart). The simplified pronounciation assist customers in correctly vocalizing the brand's name, fostering familarity & ease of communication.",
        image: ourWork,
      },
    ],
  },
];
