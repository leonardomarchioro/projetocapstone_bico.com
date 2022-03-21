export const dateFormated = (date) =>
  date.slice(0, 10).split("-").reverse().join("/");
