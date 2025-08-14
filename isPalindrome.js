function validatePalindrome(str) {
  const isNormal = str
    .split("")
    .join("")
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "");

  const isReversed = str
    .split("")
    .reverse()
    .join("")
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "");

  return isReversed === isNormal ? true : false;
}

//For the purpose of user debugging.
validatePalindrome("A man, a plan, a canal: Panama");
