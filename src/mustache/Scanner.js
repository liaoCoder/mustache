/**
 * 扫描器
 */
class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr;
    this.pos = 0; //表示指针
    this.tail = templateStr; //尾巴，指的是当前指针后一位到模版字符串最后，默认一开始为模版字符串
  }
  //功能：跳过{{和}}两个符号
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      this.pos += tag.length;
      this.tail = this.templateStr.substr(this.pos);
    }
  }
  //功能：扫描字符串模版，遇到{{和}}暂停，并将扫描的内容返回
  scanUntil(stopPos) {
    const startPos = this.pos;
    //循环直到当前pos的位置不是stopPos的话，就一直要循环
    //当前的tail要随着pos后移不断减少
    while (this.tail.indexOf(stopPos) != 0 && !this.eos()) {
      this.pos++;
      this.tail = this.templateStr.substr(this.pos);
    }
    return this.templateStr.substring(startPos, this.pos);
  }
  //判断指针有没有到头
  eos() {
    return this.pos === this.templateStr.length;
  }
}

export default Scanner;
