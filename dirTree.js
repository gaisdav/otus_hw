import fs from "fs";

/**
 * Шаблон древовидной структуры.
 */
let template = ``;
let directories = 0;
let files = 0;

/**
 * Проверяем есть ли доступ к директории
 * @param path
 * @returns {boolean}
 */
const checkPermission = (path) => {
  try {
    fs.accessSync(path, fs.constants.R_OK);
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * Метод для создания древовидной структуры.
 *
 * @param dirPath - путь к директории
 * @param deep - глубина парсинга
 * @param deepLevel - текущая глубина при парсинге (не указывается при первом вызове)
 */
const createTree = (dirPath, deep = 2, deepLevel = 0) => {
  const dirNameArr = dirPath.split("/");
  const dirName = dirNameArr[dirNameArr.length - 1];
  const lines = Array(deepLevel).fill("__").join("");
  const spaces = Array(deepLevel).fill("  ").join("");
  const firstLine = !deepLevel ? "" : "\n|";
  const isDirectory = fs.lstatSync(dirPath).isDirectory();

  if (checkPermission(dirPath) && isDirectory) {
    const items = fs.readdirSync(dirPath);

    template += `${firstLine}${spaces}|${lines}${dirName}`;

    if (items.length && deepLevel < deep) {
      items.forEach((item) => {
        const localPath = dirPath + "/" + item;
        createTree(localPath, deep, deepLevel + 1);
        ++directories;
      });
    }
  } else {
    template += `${firstLine}${spaces}|${lines}${dirName}`;
    ++files;
  }

  return { template, directories, files };
};

export default createTree;
