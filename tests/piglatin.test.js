const { translate } = require("../src/piglatin");

describe("translate function", () => {
  test("if string starts with 'a', '-way' added to end", () => {
    let result = translate("ank");
    expect(result).toBe("ankway");
  });
  test("if string starts with 'u', '-way' added to end", () => {
    let result = translate("unk");
    expect(result).toBe("unkway");
  });
  test("if string starts with 'O', '-way' added to end", () => {
    let result = translate("Onk");
    expect(result).toBe("Onkway");
  });
  test("if string starts with 'E', '-way' added to end", () => {
    let result = translate("Enk");
    expect(result).toBe("Enkway");
  });
  test("if string starts with 'k', 'kay' added to the end", () => {
    let result = translate("kale");
    expect(result).toBe("alekay");
  });
  test("if string starts with 'Z', 'Zay' added to the end", () => {
    let result = translate("Zale");
    expect(result).toBe("aleZay");
  });
  test("if string starts with 'st', 'stay' added to the end", () => {
    let result = translate("stowaway");
    expect(result).toBe("owawaystay");
  });
  test("if string starts with 'thr', 'thray' added to the end", () => {
    let result = translate("ThrowAway");
    expect(result).toBe("owAwayThray");
  });
  test("if string is in uppercase, returns PL uppercase", () => {
    let result = translate("JOHNPRINE");
    expect(result).toBe("OHNPRINEJAY");
  });
  test("punctuation allowed in the input string", () => {
    let result = translate("John!Prine");
    expect(result).toBe("ohn!PrineJay");
  });
  test("if string includes number, return string as-is", () => {
    let result = translate("123hello");
    expect(result).toBe("123hello");
  });
  test("if string is empty, tell user to insert text", () => {
    let result = translate("");
    expect(result).toBe("please insert text to be translated");
  });
});
