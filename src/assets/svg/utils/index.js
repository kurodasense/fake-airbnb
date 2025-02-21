/**
 * @param {string} styleStr
 */
export function styleStrToObject(styleStr) {
  // 创建一个空对象来存储样式键值对
  const styleObj = {};

  // 将输入的样式字符串根据分号分割成样式对
  const stylePairs = styleStr.split(";").filter(Boolean);

  // 遍历每个样式对
  stylePairs.forEach((pair) => {
    // 通过冒号分割属性名和属性值
    const [key, value] = pair.split(":").map((item) => item.trim());

    // 将属性名转换为 camelCase 格式并添加到对象中
    if (key && value) {
      const camelCaseKey = key.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      );
      styleObj[camelCaseKey] = value;
    }
  });

  return styleObj;
}
