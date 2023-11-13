import ourWork from "../../../public/our-work.png";

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
    thumbnail: ourWork,
    title: "Sahrudaya",
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
  {
    key: "sahrudaya2",
    thumbnail: ourWork,
    title: "Sahrudaya",
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
