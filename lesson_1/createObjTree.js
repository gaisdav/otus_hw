import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import createObjTree from './objTree.js';

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

export const createObjTreeFile = (targetObj) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  /**
   * Обработчик ошибок при создании файла с результатами.
   */
  function errorCallback(err) {
    if (err) {
      console.error(err);
    }
  }

  /**
   * Создаем шаблон.
   */
  const template = createObjTree(targetObj);

  /**
   * Выводим результат в консоль.
   */
  console.log(template);

  /**
   * Сохраняем результат в файл result.txt
   */
  fs.writeFile(__dirname + '/objTreeResult.txt', template, errorCallback);
};

createObjTreeFile(obj);

export default createObjTreeFile;
