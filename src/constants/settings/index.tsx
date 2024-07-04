import {
  ShieldExclamationIcon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  UserIcon,
  PaintBrushIcon,
  SignalIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

import {
  SETTINGS_ACCOUNT_ROUTE,
  SETTINGS_API_KEY_ROUTE,
  SETTINGS_NOTIFICATIONS_ROUTE,
  SETTINGS_PROFILE_ROUTE,
} from "@/routes";

export const mainSettingsNavigation = [
  {
    name: "Public profile",
    href: SETTINGS_PROFILE_ROUTE,
    icon: UserIcon,
  },
  {
    name: "Account",
    href: SETTINGS_ACCOUNT_ROUTE,
    icon: CogIcon,
  },
  {
    name: "Appearance",
    href: "#",
    icon: PaintBrushIcon,
  },
  {
    name: "Notifications",
    href: SETTINGS_NOTIFICATIONS_ROUTE,
    icon: BellIcon,
  },
];

export const accessSettingsNavigation = [
  {
    name: "Billing and plans",
    href: SETTINGS_ACCOUNT_ROUTE,
    icon: CreditCardIcon,
  },
  {
    name: "Password and security",
    href: SETTINGS_ACCOUNT_ROUTE,
    icon: ShieldExclamationIcon,
  },
  {
    name: "Sessions",
    href: "#",
    icon: SignalIcon,
  },
];

export const integrationSettingsNavigation = [
  {
    name: "API Keys",
    href: SETTINGS_API_KEY_ROUTE,
    icon: KeyIcon,
  },
];
