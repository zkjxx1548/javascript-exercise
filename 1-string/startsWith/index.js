export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(lisence => lisence.charAt(0) === '粤').length;
}
