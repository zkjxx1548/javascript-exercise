import Person from './person';

// TODO 17: 在这里写实现代码
class Worker extends Person {
  // eslint-disable-next-line class-methods-use-this
  introduce() {
    return `${super.introduce()} I am a Worker. I have a job.`;
  }
}
export default Worker;
