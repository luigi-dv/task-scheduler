import crypto from "crypto";

/**
 * Generates a secure random API key.
 *
 * @param {number} length - The length of the API key.
 * @returns {string} The generated API key.
 */
export const generateApiKey = (length: number = 32): string => {
  return crypto.randomBytes(length).toString("hex");
};
