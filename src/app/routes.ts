import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LandingBeta } from "./components/LandingBeta";
import { Pricing } from "./components/Pricing";
import { FoundingClubs } from "./components/FoundingClubs";
import { Contact } from "./components/Contact";
import { Privacy } from "./components/Privacy";
import { Terms } from "./components/Terms";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingBeta },
      { path: "pricing", Component: Pricing },
      { path: "clubs", Component: FoundingClubs },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "*", Component: NotFound },
    ],
  },
]);