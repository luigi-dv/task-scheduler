import { PRIVACY_POLICY_ROUTE, TERMS_OF_SERVICE_ROUTE } from "@/routes";

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
