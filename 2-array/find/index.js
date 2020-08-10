export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.find(person => person.age <= 20).name;
}
