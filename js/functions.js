function checkStringLenght (str, maxlength) {
  return str.lenght <= maxlength;
}
checkStringLenght('проверяемая строка', 20);
checkStringLenght('проверяемая строка', 18);
checkStringLenght('проверяемая строка', 10);

function isPalindrome (str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.lenght - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}
isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');
