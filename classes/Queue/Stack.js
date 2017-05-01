const STACK = Symbol();

export default class Stack {
    constructor () {
        this[STACK] = [];
    }

    pop() {
        return this[STACK].pop();
    }

    push(element) {
        this[STACK].push(element);
    }

    peek() {
        const len = this[STACK].length;
        if (len == 0) {
            return null;
        }
        return this[STACK][len - 1];
    }
}