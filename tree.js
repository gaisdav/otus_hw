/**
 * Шаблон древовидной структуры.
 */
let template = ``;

/**
 * Метод для создания древовидной структуры.
 */
const createTree = (obj, deepLevel = 0) => {
  const lines = Array(deepLevel).fill("__").join("");
  const spaces = Array(deepLevel).fill("  ").join("");
  const firstLine = !deepLevel ? "" : "\n|";

  template += `${firstLine}${spaces}|${lines}${obj.name}`;

  if (Array.isArray(obj.items)) {
    obj.items.forEach((item) => {
      createTree(item, deepLevel + 1);
    });
  }

  return template;
};

export default createTree;
