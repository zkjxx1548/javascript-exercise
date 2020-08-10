export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const collection = Object.values(source);
  let sum = 0;
  collection.forEach(number => {
    sum += parseInt(number, 10);
  });
  return sum;
}
