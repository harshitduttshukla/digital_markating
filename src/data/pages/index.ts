import { mumbaiSeo, mumbaiDigital, mumbaiSocial, mumbaiEmail } from "./mumbai";
import { bangaloreSeo, bangaloreDigital, bangaloreSocial, bangaloreEmail } from "./bangalore";
import { dubaiSeo, dubaiDigital, dubaiSocial, dubaiEmail } from "./dubai";
import { cities, landingServices, landingPath, type CityKey, type LandingBase, type LandingServiceKey } from "./types";

export * from "./types";

export const landingPages: Record<CityKey, Record<LandingServiceKey, LandingBase>> = {
  mumbai: {
    seo: mumbaiSeo,
    "digital-marketing-agency": mumbaiDigital,
    "social-media-marketing": mumbaiSocial,
    "email-marketing": mumbaiEmail,
  },
  bangalore: {
    seo: bangaloreSeo,
    "digital-marketing-agency": bangaloreDigital,
    "social-media-marketing": bangaloreSocial,
    "email-marketing": bangaloreEmail,
  },
  dubai: {
    seo: dubaiSeo,
    "digital-marketing-agency": dubaiDigital,
    "social-media-marketing": dubaiSocial,
    "email-marketing": dubaiEmail,
  },
};

export const isCity = (v: string): v is CityKey => (cities as readonly string[]).includes(v);
export const isLandingService = (v: string): v is LandingServiceKey => (landingServices as readonly string[]).includes(v);

export const allLandingRoutes = () =>
  cities.flatMap((city) => landingServices.map((service) => ({ city, service, path: landingPath(city, service) })));
