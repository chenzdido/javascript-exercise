// TODO 17: 在这里写实现代码
import Person from './person';

export default class Work extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    return `${super.basic_introduce()} I am a Worker. I have a job.`;
  }
}
