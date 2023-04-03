"use strict"
//код работает, только если в необходимой строке все слова начинаются с заглавной буквы (не включая первое) и идут по порядку
let words = "JavaStript Exersize"//переменная с необходимой строкой
let firstWord//переменная для первого слова в названии переменной
words = words.split(' ').join('')//удаление пробелов из строки
let wordsMassive = words.split(/(?=[A-Z])/)//разделение строки на массив по регистру символов
firstWord = wordsMassive.splice(0, [1])//извлечение символов с начала по второй(не по индексу, а по порядку) элемент не включительно
firstWord = firstWord.toString()//конвертация из массива в строку
firstWord = firstWord.toLowerCase()//изменение регистра строки
wordsMassive = wordsMassive.toString()//изменения оставшихся элементов массива в строку
console.log(firstWord + wordsMassive.split(',').join(''))//вывод переменных, удаление запятых
