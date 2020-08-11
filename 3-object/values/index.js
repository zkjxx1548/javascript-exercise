export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source).reduce((acc, cur) => {
    return parseInt(acc, 10) + parseInt(cur, 10);
  });
}
