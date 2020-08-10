export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let count = 0;
  collection.forEach(element => {
    if (element.charAt(0) === '粤') {
      count += 1;
    }
  });
  return count;
}
