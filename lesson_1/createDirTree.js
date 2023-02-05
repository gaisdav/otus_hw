import fs from "fs";
import createDirTree from "./dirTree.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = process.argv[2];
const depthValue = Number(process.env.npm_config_depth);

if (!dirPath) {
  const errorText =
    "Укажите путь к директории! Н-р: npm start /Users --depth 4";
  console.error(errorText);
  throw new Error(errorText);
}

if (!depthValue && depthValue !== 0) {
  const errorText = "Укажите глубину! Н-р: npm start /Users --depth 4";
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

const { template, files, directories } = createDirTree(dirPath, depthValue);

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
  __dirname + "/dirTreeResult.txt",
  `${template}

directories: ${directories}
files: ${files}
`,
  errorCallback
);
