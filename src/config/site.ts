import { ILayout } from "@/interfaces/ILayout";
import { enTexts } from "@/i18n/en";

export type SiteConfig = typeof siteConfig;

export const siteConfig: ILayout = {
  name: enTexts.site.name,
  description: enTexts.site.description,
  navItems: enTexts.nav,
  navMenuItems: [],
  links: {
    github: "/",
    twitter: "/",
    docs: "/",
    discord: "/",
    sponsor: "/",
  },
};
