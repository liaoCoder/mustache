import Scanner from "./Scanner";
import NextTokens from "./NextTokens";

const ParseTemplateToTokens = (templateStr) => {
  const scanner = new Scanner(templateStr);
  let tokens = [],
    words = "";
  while (!scanner.eos()) {
    words = scanner.scanUntil("{{");
    if (words) tokens.push(["text", words]);
    scanner.scan("{{");
    words = scanner.scanUntil("}}");
    //如果是#或者/开头的话，需要把name改成#或者/
    if (words.startsWith("#")) {
      tokens.push(["#", words.substr(1)]);
    } else if (words.startsWith("/")) {
      tokens.push(["/", words.substr(1)]);
    } else {
      tokens.push(["name", words]);
    }
    scanner.scan("}}");
  }
  return NextTokens(tokens);
};

export default ParseTemplateToTokens;
