import sahrudaya_brand from "../../../public/sahrudaya_brand.jpeg";
import sahrudaya_cards from "../../../public/sahrudaya_cards.jpeg";
import sahrudaya_packaging from "../../../public/sahrudaya_packaging.jpeg";
import sahrudaya_package_ladoo_1 from "../../../public/sahrudaya_package_ladoo_1.jpeg";
import sahrudaya_package_ladoo_2 from "../../../public/sahrudaya_package_ladoo_2.jpeg";
import sahrudaya_package_ladoo_3 from "../../../public/sahrudaya_package_ladoo_3.jpeg";
import sahrudaya_thumbnail from "../../../public/sahrudaya_thumbnail.png";
import india_millets_co_thumbnail from "../../../public/India_millets_co_thumbnail.jpeg";
import sahrudaya_package_diwali from "../../../public/sahrudaya_package_diwali.jpeg";
import chotu_pizza_box_mockup from "../../../public/chotu_pizza_box_mockup.png";
import yadra_quilt_thumbnail from "../../../public/yadra_quilt_thumbnail.png";
import cygnustics_thumbnail from "../../../public/cygnustics_thumbnail.png";
import dr_amit_thumbnail from "../../../public/dr_amit_thumbnail.png";
import day_care_thumbnail from "../../../public/day_care_thumbnail.jpeg";

// const sahrudaya_thumbnail = "/sahrudaya_thumbnail.png";
// const india_millets_co_thumbnail = "/India_millets_co_thumbnail.jpeg";
// const sahrudaya_package_diwali = "/sahrudaya_package_diwali.jpeg";
// const chotu_pizza_box_mockup = "/chotu_pizza_box_mockup.png";
// const yadra_quilt_thumbnail = "/yadra_quilt_thumbnail.png";
// const cygnustics_thumbnail = "/cygnustics_thumbnail.png";
// const dr_amit_thumbnail = "/dr_amit_thumbnail.png";
// const day_care_thumbnail = "/day_care_thumbnail.jpeg";

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
    thumbnail: sahrudaya_package_diwali,
    title: "Sahrudaya",
    subTitle: "Diwali Package Designing",
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
    key: "indiaMillets",
    thumbnail: india_millets_co_thumbnail,
    title: "India Millets Co",
    subTitle: "Diwali Package Designing",
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
    key: "sahrudaya",
    thumbnail: sahrudaya_thumbnail,
    title: "Sahrudaya",
    subTitle: "Re-Branding & Package Designing",
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
    key: "chotusFlavour",
    thumbnail: chotu_pizza_box_mockup,
    title: "Chotu's Flavor",
    subTitle: "Package & Sticker Designing",
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
    key: "cygnustics",
    thumbnail: cygnustics_thumbnail,
    title: "Cygnustics",
    subTitle: "Branding & Web Application Design",
    banner: "",
    brandLine:
      "Sahrudaya, a food brand deeply rooted in the rural heritage of India, embarked on branding project with the aim of establishing itself as a trusted provider of organic & preservative free foods. This case study delves into the strategies employed by Sahrudaya to create an effective brand identity & package designing that resonates with its target audience.",
    brandLogo: "",
    work: [
      {
        key: "brandIdentityDesign",
        title: "Brand Identity Design",
        description:
          "Recognizing the original name might be challenging to pronounce, Sahrudaya underwent a though-full rebranding process to ensure easy recognition and recall. The decision was made to break down the word into two segments: 'Sah' (with) & Rudaya (heart). The simplified pronounciation assist customers in correctly vocalizing the brand's name, fostering familarity & ease of communication.",
        image: "",
      },
    ],
  },

  {
    key: "drAmit",
    thumbnail: dr_amit_thumbnail,
    title: "Dr Amit Langote",
    subTitle: "Branding",
    banner: "",
    brandLine:
      "Sahrudaya, a food brand deeply rooted in the rural heritage of India, embarked on branding project with the aim of establishing itself as a trusted provider of organic & preservative free foods. This case study delves into the strategies employed by Sahrudaya to create an effective brand identity & package designing that resonates with its target audience.",
    brandLogo: "",
    work: [
      {
        key: "brandIdentityDesign",
        title: "Brand Identity Design",
        description:
          "Recognizing the original name might be challenging to pronounce, Sahrudaya underwent a though-full rebranding process to ensure easy recognition and recall. The decision was made to break down the word into two segments: 'Sah' (with) & Rudaya (heart). The simplified pronounciation assist customers in correctly vocalizing the brand's name, fostering familarity & ease of communication.",
        image: "",
      },
    ],
  },

  {
    key: "yadraQuilt",
    thumbnail: yadra_quilt_thumbnail,
    title: "Yadra Quilt",
    subTitle: "Brochure Design",
    banner: "",
    brandLine:
      "Sahrudaya, a food brand deeply rooted in the rural heritage of India, embarked on branding project with the aim of establishing itself as a trusted provider of organic & preservative free foods. This case study delves into the strategies employed by Sahrudaya to create an effective brand identity & package designing that resonates with its target audience.",
    brandLogo: "",
    work: [
      {
        key: "brandIdentityDesign",
        title: "Brand Identity Design",
        description:
          "Recognizing the original name might be challenging to pronounce, Sahrudaya underwent a though-full rebranding process to ensure easy recognition and recall. The decision was made to break down the word into two segments: 'Sah' (with) & Rudaya (heart). The simplified pronounciation assist customers in correctly vocalizing the brand's name, fostering familarity & ease of communication.",
        image: "",
      },
    ],
  },

  {
    key: "dayCare",
    thumbnail: day_care_thumbnail,
    title: "Day Care",
    subTitle: "Package Designing",
    banner: "",
    brandLine:
      "Sahrudaya, a food brand deeply rooted in the rural heritage of India, embarked on branding project with the aim of establishing itself as a trusted provider of organic & preservative free foods. This case study delves into the strategies employed by Sahrudaya to create an effective brand identity & package designing that resonates with its target audience.",
    brandLogo: "",
    work: [
      {
        key: "brandIdentityDesign",
        title: "Brand Identity Design",
        description:
          "Recognizing the original name might be challenging to pronounce, Sahrudaya underwent a though-full rebranding process to ensure easy recognition and recall. The decision was made to break down the word into two segments: 'Sah' (with) & Rudaya (heart). The simplified pronounciation assist customers in correctly vocalizing the brand's name, fostering familarity & ease of communication.",
        image: "",
      },
    ],
  },
];
