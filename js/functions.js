function checkStringLength (str, maxLength) {
  return str.length <= maxLength;
}
console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

function isPalindrome (str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));

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

console.log(extractDigits('2023 год'));
console.log(extractDigits('ECMAScript 2022'));
console.log(extractDigits('1 кефир, 0.5 батона'));
console.log(extractDigits('агент 007'));
console.log(extractDigits('а я томат'));

console.log(extractDigits(2023));
console.log(extractDigits(-1));
console.log(extractDigits(1.5));
