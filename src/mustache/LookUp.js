/**
 *
 * @param {*} keyName 连续点符号的keyName属性
 * @param {*} data 数据
 * 比如data是
 * var data = {
 *     a:{
 *         b: "hello world"
 *     }
 * }
 * LookUp("a.b", data); 值就为 hello world
 */
const LookUp = (keyName, data) => {
  const keyList = keyName.split("."); //[a,b]
  return keyList.reduce((acc, item) => {
    return acc[item];
  }, data);
};
