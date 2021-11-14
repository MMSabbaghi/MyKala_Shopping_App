export default function toPersianNumber(number) {
  number = "" + number;
  var persianNums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.replace(/[0-9]/g, (digit) => persianNums[+digit]);
}
