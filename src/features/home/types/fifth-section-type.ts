export interface SectionLink {
  text: string;
  link: string;
}

export interface SectionButtonLink {
  text: string;
  link: string;
}

export interface SectionItem {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  links: SectionLink[];
  buttonLink: SectionButtonLink;
}

export type SectionData = SectionItem[];
