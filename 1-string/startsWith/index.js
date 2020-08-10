export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let count = 0;
  collection.forEach(element => {
    if (element.slice(0, 2) === '粤A') {
      count++;
    }
  });
  return count;
}
