export const formatShortText = (text: string | undefined, limit: number) => {
  if (!text) return "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};
