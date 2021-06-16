const translate = (string) => {
  let pigString = "";
  let conString = "";
  let ayString = "ay";
  if (string === "") {
    return "please insert text to be translated";
  }
  let endString = string.slice(1);
  let consCounter = 1;
  if (/\d/.test(string) === true) {
    return string;
  }
  if (string === string.toUpperCase()) {
    ayString = "AY";
  }
  if (
    string[0] === "a" ||
    string[0] === "e" ||
    string[0] === "i" ||
    string[0] === "o" ||
    string[0] === "u" ||
    string[0] === "A" ||
    string[0] === "E" ||
    string[0] === "I" ||
    string[0] === "O" ||
    string[0] === "U"
  ) {
    pigString = string += "way";
  } else {
    for (let i = 0; i < consCounter; i++) {
      if (
        string[i] !== "a" &&
        string[i] !== "e" &&
        string[i] !== "i" &&
        string[i] !== "o" &&
        string[i] !== "u" &&
        string[i] !== "A" &&
        string[i] !== "E" &&
        string[i] !== "I" &&
        string[i] !== "O" &&
        string[i] !== "U"
      ) {
        consCounter++;
        conString += string[i];
      } else {
        consCounter--;
        endString = string.slice(consCounter);
        pigString = endString += conString += ayString;
        return pigString;
      }
    }
  }
  return pigString;
};

module.exports = { translate };
