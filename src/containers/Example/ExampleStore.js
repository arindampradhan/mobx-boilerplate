import { observable, computed, action, decorate } from "mobx";

class Counter {
  counter = 0;

  get counterText() {
    return `count: ${this.counter}`;
  }

  increment() {
    this.counter = this.counter++;
  }

  decrement() {
    this.counter = this.counter--;
  }
}
export default decorate(Counter, {
  counter: observable,
  counterText: computed,
  setAge: action
});
