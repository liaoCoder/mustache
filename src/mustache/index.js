import ParseTemplateToTokens from "./ParseTemplateToTokens";
import RenderTemplate from "./RenderTemplate";
const SSG_TemplateEngine = {
  render(templateStr, data) {
    const tokens = ParseTemplateToTokens(templateStr);
    console.log(tokens);
    console.log("--------渲染完的tokens---------");
    const domStr = RenderTemplate(tokens, data);
    console.log(domStr );
  },
};

export default SSG_TemplateEngine;
