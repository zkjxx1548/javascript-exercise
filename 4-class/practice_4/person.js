// TODO 15: 在这里写实现代码
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return this.basic_introduce();
  }

  basic_introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}
export default Person;
