//将解析好的tokens和data结合生成dom字符串
let domStr = "";
const RenderTemplate = (tokens, data) => {
  tokens.forEach((res) => {
    const [label, value, child] = res;
    switch (label) {
      case "text":
        domStr += value;
        break;
      case "name":
        if (value === ".") {
          domStr += data;
        } else {
          domStr += data[value];
        }
        break;
      case "#":
        data[value].forEach((res) => {
          RenderTemplate(child, res);
        });
        break;
    }
  });
  return domStr;
};

export default RenderTemplate;
