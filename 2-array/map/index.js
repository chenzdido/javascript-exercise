export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const model = ['a', 'b', 'c', 'd', 'e'];
  return collection.map(num => {
    return model[num - 1];
  });
}
