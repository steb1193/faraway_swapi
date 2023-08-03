export const getIdFromUrlString = (url?: string) => {
  if (!url || !url.includes('/')) return '';
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 2];
};
