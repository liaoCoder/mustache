//将模版字符串里的#和/之间的内容抽离成二维数组
const NextTokens = (tokens) => {
  let nextedTokens = [];
  //生成一个临时的栈
  let sections = [];
  //收集器，指向的是nextedTokens结果数组
  //它的指向会变化，当遇到#的时候，收集器会指向这个token下标为2的用于存放子元素的数组
  let collector = nextedTokens;
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    switch (token[0]) {
      //如果是有#号就入栈，然后在当前有#的元素的下标为2的地方生成一个空数组放置子元素
      case "#":
        //入栈
        sections.push(token);
        //收集器中放token
        collector.push(token);
        collector = token[2] = [];
        break;
      //如果是有/号的话就出栈
      case "/":
        //出栈
        sections.pop();
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nextedTokens;
        break;
      default:
        collector.push(token);
    }
  }
  return nextedTokens;
  //   for (let i = 0; i < tokens.length; i++) {
  //     let token = tokens[i];
  //     switch (token[0]) {
  //       //如果是有#号就入栈
  //       case "#":
  //         //这里2表示当前遍历对象下标为2的地方设置为一个空数组，用于存放子元素
  //         token[2] = [];
  //         sections.push(token);
  //         break;
  //       //如果是有/号的话就出栈
  //       case "/":
  //         //因为栈是先进后出，如果碰到/的话就要把最新的出栈\
  //         let section = sections.pop();
  //         nextedTokens.push(section);
  //         break;
  //       default:
  //         //如果当前栈是空的话就直接push进nextedTokens
  //         if (sections.length === 0) {
  //           nextedTokens.push(token);
  //           //如果当前有栈的话就将当前元素推入当前栈
  //         } else {
  //           sections[sections.length - 1][2] = token;
  //         }
  //     }
  //   }
};

export default NextTokens;
