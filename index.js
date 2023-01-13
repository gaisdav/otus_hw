import fs from "fs";
import createTree from "./dirTree.js";

const dirPath = process.argv[2];
const deepValue = Number(process.argv[3]);

if (!dirPath) {
  const errorText = "Укажите путь к директории! Н-р: npm start /Users 3";
  console.error(errorText);
  throw new Error(errorText);
}

if (!deepValue && deepValue !== 0) {
  const errorText = "Укажите глубину! Н-р: npm start /Users 3";
  console.error(errorText);
  throw new Error(errorText);
}

/**
 * Обработчик ошибок при создании файла с результатами.
 */
function errorCallback(err) {
  if (err) {
    return console.log(err);
  }
}

const { template, files, directories } = createTree(dirPath, deepValue);

/**
 * Выводим результат в консоль.
 */
console.log(template);
console.log("directories", directories);
console.log("files", files);

/**
 * Сохраняем результат в файл result.txt
 */
fs.writeFile(
  "./result.txt",
  `${template}

directories: ${directories}
files: ${files}
`,
  errorCallback
);
