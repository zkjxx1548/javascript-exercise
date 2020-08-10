// TODO 13: 在这里写实现代码
const { default: Person } = require('./person');

class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.class = klass;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.klass}`;
  }
}
export default Student;
