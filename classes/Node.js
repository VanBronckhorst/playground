const KEY = Symbol();

class Node {
    constructor(key) {
        this[KEY] = key;
    }

    get key() {
        return this[KEY];
    }
}

export default Node;
