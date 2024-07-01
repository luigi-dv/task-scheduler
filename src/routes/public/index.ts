import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

export const HOME_ROUTE = "/";
export const TERMS_OF_SERVICE_ROUTE = "/terms-of-service";
export const PRIVACY_POLICY_ROUTE = "/privacy-policy";
export const DOCUMENTATION_ROUTE = "/documentation";
export const ABOUT_ROUTE = "/about";
export const PRICING_ROUTE = "/pricing";

export const CALLS_TO_ACTION = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export const RESOURCES_OBJECT = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Terms Of Services",
    description: "Review our application's terms of service.",
    href: TERMS_OF_SERVICE_ROUTE,
  },
  {
    name: "Privacy Policy",
    description: "Understand how we take your privacy seriously.",
    href: PRIVACY_POLICY_ROUTE,
  },
];
