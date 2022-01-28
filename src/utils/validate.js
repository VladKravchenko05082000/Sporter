import { REGEX } from "./regex/regex";

export const validate = (text, type) => {
  if (text) {
    return REGEX[type].test(text);
  }
  return false;
};
