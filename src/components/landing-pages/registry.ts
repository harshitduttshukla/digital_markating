import type { ComponentType } from "react";
import type { CityKey, LandingServiceKey } from "@/data/pages";
import { MumbaiSEOPage } from "./seo/MumbaiSEOPage";
import { BangaloreSEOPage } from "./seo/BangaloreSEOPage";
import { DubaiSEOPage } from "./seo/DubaiSEOPage";
import { MumbaiDigitalMarketingPage } from "./digital-marketing/MumbaiDigitalMarketingPage";
import { BangaloreDigitalMarketingPage } from "./digital-marketing/BangaloreDigitalMarketingPage";
import { DubaiDigitalMarketingPage } from "./digital-marketing/DubaiDigitalMarketingPage";
import { MumbaiSocialMediaPage } from "./social-media/MumbaiSocialMediaPage";
import { BangaloreSocialMediaPage } from "./social-media/BangaloreSocialMediaPage";
import { DubaiSocialMediaPage } from "./social-media/DubaiSocialMediaPage";
import { MumbaiEmailMarketingPage } from "./email-marketing/MumbaiEmailMarketingPage";
import { BangaloreEmailMarketingPage } from "./email-marketing/BangaloreEmailMarketingPage";
import { DubaiEmailMarketingPage } from "./email-marketing/DubaiEmailMarketingPage";

/** Each city × service pair has its own, individually art-directed page composition. */
export const landingComponents: Record<CityKey, Record<LandingServiceKey, ComponentType>> = {
  mumbai: {
    seo: MumbaiSEOPage,
    "digital-marketing-agency": MumbaiDigitalMarketingPage,
    "social-media-marketing": MumbaiSocialMediaPage,
    "email-marketing": MumbaiEmailMarketingPage,
  },
  bangalore: {
    seo: BangaloreSEOPage,
    "digital-marketing-agency": BangaloreDigitalMarketingPage,
    "social-media-marketing": BangaloreSocialMediaPage,
    "email-marketing": BangaloreEmailMarketingPage,
  },
  dubai: {
    seo: DubaiSEOPage,
    "digital-marketing-agency": DubaiDigitalMarketingPage,
    "social-media-marketing": DubaiSocialMediaPage,
    "email-marketing": DubaiEmailMarketingPage,
  },
};
