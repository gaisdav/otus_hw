import fs from "fs";

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
 * Шаблон древовидной структуры.
 */
let template = ``;

/**
 * Обработчик ошибок при создании файла с результатами.
 */
function errorCallback(err) {
    if (err) {
        return console.log(err);
    }
}

/**
 * Метод для создания древовидной структуры.
 */
const showTree = (obj, deepLevel = 0) => {
    const lines = Array(deepLevel).fill("__").join("");
    const spaces = Array(deepLevel).fill("  ").join("");
    const firstLine = !deepLevel ? "" : "\n|";

    template += `${firstLine}${spaces}|${lines}${obj.name}`;

    if (Array.isArray(obj.items)) {
        obj.items.forEach((item) => {
            showTree(item, deepLevel + 1);
        });
    }
};

showTree(obj);

/**
 * Выводим результат в консоль.
 */
console.log(template);
/**
 * Сохраняем результат в файл result.txt.
 */
fs.writeFile("./result.txt", template, errorCallback);

export default showTree;
