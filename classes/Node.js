const KEY = Symbol();

class Node {
    constructor(key) {
        this.data = {};
        this.data[KEY] = key;
    }

    get key() {
        return this.data[KEY];
    }

    set key(val) {
        this.data[KEY] = val;
    }

    get content() {
        return this.key;
    }
}

export default Node;
