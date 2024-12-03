function checkStringLength (str, maxLength) {
  return str.length <= maxLength;
}
checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function isPalindrome (str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}
isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

let extractDigits = function(input) {
  let str = input.toString();

  let result = '';

  for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (!Number.isNaN(parseInt(char))) {
          result += char;
      }
  }

  return result === '' ? NaN : parseInt(result);
};

extractDigits('2023 год');
extractDigits('ECMAScript 2022');
extractDigits('1 кефир, 0.5 батона');
extractDigits('агент 007');
extractDigits('а я томат');

extractDigits(2023);
extractDigits(-1);
extractDigits(1.5);
