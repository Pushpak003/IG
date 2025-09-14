export const validateUrl = (url) => {
  const regex = /^https?:\/\/(www\.)?instagram\.com\/reel\/[a-zA-Z0-9-_]+/;
  return regex.test(url);
};
