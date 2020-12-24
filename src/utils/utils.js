export const extractLink = (title) => {
  let links = title.split(" ");
  let str = "";
  links.forEach((el) => {
    str += `${el.charAt(0)} -`;
  });
  return str;
};
