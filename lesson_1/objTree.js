/**
 * Шаблон древовидной структуры.
 */
let template = ``;

/**
 * Метод для создания древовидной структуры.
 */
const createObjTree = (obj, deepLevel = 0) => {
  const lines = Array(deepLevel).fill("__").join("");
  const spaces = Array(deepLevel).fill("  ").join("");
  const firstLine = !deepLevel ? "" : "\n|";

  template += `${firstLine}${spaces}|${lines}${obj.name}`;

  if (Array.isArray(obj.items)) {
    obj.items.forEach((item) => {
      createObjTree(item, deepLevel + 1);
    });
  }

  return template;
};

export default createObjTree;
