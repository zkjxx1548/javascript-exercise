export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const collection = Object.values(source);
  let sum;
  collection.map(string => parseInt(string, 10));
  collection.forEach(number => {
    sum += number;
  });
  return sum;
}
