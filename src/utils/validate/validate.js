import { REGEX } from "utils/regex/regex";

export const validate = (text, type) => {
  if (text) {
    return REGEX[type].test(text);
  }
  return false;
};
