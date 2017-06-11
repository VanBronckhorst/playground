const HEAP = Symbol();
const COMPARE = Symbol();

// Simple Priority Queue implemented with a array-stored heap
export default class PriorityQueue {
    constructor(array, comparer) {
        array = array || [];
        this[COMPARE] = comparer || ((a, b) => a < b ? -1 : (a > b ? 1 : 0)); 
        
        this[HEAP] = [];


        for (let i = 0; i < array.length; i++) {
            this.push(array[i]);
        }
    }

    push(item) {
        this[HEAP].push(item);
        this._climbUp(this[HEAP].length - 1);
    }

    peek() {
        return this[HEAP][0];
    }

    pop() {
        let item = this.peek();

        if (this[HEAP].length !== 0) {
            this._removeRoot();
        }

        return item;
    }

    _removeRoot() {
        let d = this[HEAP];
        let last = this[HEAP].pop();
        this[HEAP][0] = last;
        let compare = this[COMPARE];

        let pos = firstChild(0);

        while (pos < d.length) {
            let bestChild = pos;

            if (pos + 1 < d.length && compare(d[pos + 1], d[pos]) < 0) {
                bestChild = pos + 1;
            }

            if (compare(d[bestChild], last) < 0) {
                d[parent(bestChild)] = d[bestChild];
                d[bestChild] = last;
                pos = firstChild(bestChild);
            } else {
                break;
            }
        }

    }

    _climbUp(idx) {
        let d = this[HEAP];
        let item = d[idx];
        let compare = this[COMPARE];

        while(idx > 0) {
            let par = parent(idx);
            
            if (compare(item, d[par]) < 0){
                // need to swap
                d[idx] = d[par];
                idx = par;
            }else {
                break;
            }
        }

        this[HEAP][idx] = item;
    }
}

function parent(i) {
    return (i - 1) >> 1;
}

function firstChild(i) {
    return (i << 1) + 1;
}
