import fs from "fs";
import createTree from "./tree.js";

/**
 * Исходный объект.
 */
const obj = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },
    {
      name: 5,
      items: [{ name: 6 }],
    },
  ],
};

/**
 * Обработчик ошибок при создании файла с результатами.
 */
function errorCallback(err) {
  if (err) {
    return console.log(err);
  }
}

/**
 * Создаем шаблон.
 */
const template = createTree(obj);

/**
 * Выводим результат в консоль.
 */
console.log(template);

/**
 * Сохраняем результат в файл result.txt.
 */
fs.writeFile("./result.txt", template, errorCallback);
