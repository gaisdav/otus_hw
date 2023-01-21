import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import createObjTree from "./objTree.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
const template = createObjTree(obj);

/**
 * Выводим результат в консоль.
 */
console.log(template);

/**
 * Сохраняем результат в файл result.txt
 */
fs.writeFile(__dirname +"/objTreeResult.txt", template, errorCallback);
