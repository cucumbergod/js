"use strict"
let EmailAdress = "robin_singh@example.com"//строка
let SearchEndParametr = EmailAdress.indexOf('@')//присваем переменной индекс символа, до которого ведется условный отсчет сокращаемых символов
let MaxLength = EmailAdress.slice(0, SearchEndParametr).length//присваеваем переменной значение длины строки до переменной SEP(конечный символ отсчета)
function truncate(str, maxlength) {//создаем функцию, позволяющую скрыть половину строки
    return (str.length > maxlength / 2) ?//возвращаем значение, равное половине строки
      str.slice(0, maxlength / 2) + '…' + EmailAdress.substring(SearchEndParametr, ): str;//возвращаем символы от [0] до уполовиненной длины строки до конечного символа, прибавляем к строке многоточие в качестве сокращения и остаток строки после конечного символа, после присваивая формат строки(насколько я понял)
  }
console.log(truncate(EmailAdress, MaxLength))//вызываем результат необходимой фукнции