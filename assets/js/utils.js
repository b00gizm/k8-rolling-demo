export const format = (obj) => {
  return Object.keys(obj).map(key => `${key}: ${obj[key]}`).join(', ');
};
