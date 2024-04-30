import { cookies } from "next/headers";

/**
 * Get a cookie from the browser.
 * @param name
 * @constructor
 */
export const getCookie = async (name: string) => {
  const cookieStore = cookies();
  return cookieStore.get(name);
};
