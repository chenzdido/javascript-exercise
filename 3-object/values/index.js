export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let num = Object.values(source);
  let sum = 0;
  num.forEach(item => {
    sum += parseInt(item);
  });
  return sum;
}
