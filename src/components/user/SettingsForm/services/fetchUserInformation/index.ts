import { API_GET_CURRENT_USER_ROUTE } from "@/routes";

export const fetchUserInformation = async () => {
  const response = await fetch(API_GET_CURRENT_USER_ROUTE);
  return await response.json();
};
