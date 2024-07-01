"use server";

let prod = process.env.NODE_ENV == "production";
/**
 * Get Content Security Policy
 * @param nonce - nonce
 * @returns - Content Security Policy
 */
const getCsp = (nonce: string) => {
  let csp = ``;
  csp += `base-uri 'self';`;
  csp += `form-action 'self';`;
  csp += `default-src 'self';`;
  csp += `script-src 'self' ${prod ? "" : "'unsafe-eval'"};`; // NextJS requires 'unsafe-eval' in dev (faster source maps)
  csp += `style-src 'self' https://fonts.googleapis.com 'nonce-${nonce}' data:;`; // NextJS requires 'unsafe-inline'
  csp += `img-src 'self' https://*.githubusercontent.com https://paqmind.imfast.io data: blob:;`;
  csp += `font-src 'self' https://fonts.gstatic.com;`; // TODO
  csp += `frame-src *;`; // TODO
  csp += `media-src *;`; // TODO
  return csp;
};
