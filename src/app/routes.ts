import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LandingV1 } from "./components/LandingV1";
import { LandingV2 } from "./components/LandingV2";
import { Pricing } from "./components/Pricing";
import { PricingWithClubTiers } from "./components/PricingWithClubTiers";
import { FoundingClubs } from "./components/FoundingClubs";
import { LandingBeta } from "./components/LandingBeta";
import { NotFound } from "./components/NotFound";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingV1 },
      { path: "v2", Component: LandingV2 },
      { path: "home-beta", Component: LandingBeta },
      { path: "pricing", Component: Pricing },
      { path: "pricing-wclub", Component: PricingWithClubTiers },
      { path: "clubs", Component: FoundingClubs },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);