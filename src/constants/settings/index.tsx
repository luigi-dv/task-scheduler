import {
  BanknotesIcon,
  BellIcon,
  CogIcon,
  KeyIcon,
  PhotoIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import {
  SETTINGS_ACCOUNT_ROUTE,
  SETTINGS_INTEGRATION_ROUTE,
  SETTINGS_NOTIFICATIONS_ROUTE,
} from "@/routes";

export const settingsNavigation = [
  {
    name: "Account",
    description: "Manage personal info, email addresses, and profile settings.",
    href: SETTINGS_ACCOUNT_ROUTE,
    icon: CogIcon,
    current: true,
  },
  {
    name: "Notifications",
    description: "Set your notification preferences and choose alert methods.",
    href: SETTINGS_NOTIFICATIONS_ROUTE,
    icon: BellIcon,
    current: false,
  },
  {
    name: "Security",
    description: "Update password, enable two-factor auth, and review logins.",
    href: "#",
    icon: KeyIcon,
    current: false,
  },
  {
    name: "Appearance",
    description: "Customize themes, fonts, and display settings.",
    href: "#",
    icon: PhotoIcon,
    current: false,
  },
  {
    name: "Billing",
    description: "Manage billing info, payment methods, and subscriptions.",
    href: "#",
    icon: BanknotesIcon,
    current: false,
  },
  {
    name: "Integrations",
    description: "Connect and manage third-party integrations.",
    href: SETTINGS_INTEGRATION_ROUTE,
    icon: RectangleGroupIcon,
    current: false,
  },
];
