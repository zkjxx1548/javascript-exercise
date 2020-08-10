const { default: Person } = require('./person');

// TODO 20: 在这里写实现代码
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass) {
      return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
    }
    return `${super.introduce()} I am a Teacher. I teach No Class.`;
  }
}
export default Teacher;
