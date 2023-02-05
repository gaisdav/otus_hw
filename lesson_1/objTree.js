/**
 * Метод для создания древовидной структуры.
 */
const createObjTree = (obj, deepLevel = 0) => {
  const lines = Array(deepLevel).fill('__').join('');
  const spaces = Array(deepLevel).fill('  ').join('');
  const firstLine = !deepLevel ? '' : '\n|';
  let template = `${firstLine}${spaces}|${lines}${obj.name}`;

  if (Array.isArray(obj.items)) {
    obj.items.forEach((item) => {
      template += createObjTree(item, deepLevel + 1);
    });
  }

  return template;
};

export default createObjTree;
