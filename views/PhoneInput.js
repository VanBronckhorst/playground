const ELEMENT = Symbol();
import PhoneParser from "../classes/PhoneParser/PhoneParser";

export default class PhoneInput {
    constructor(el) {
        this[ELEMENT] = el;
        el.addEventListener("change", this.onChange.bind(this));
        el.addEventListener("input", this.onChange.bind(this));

    }

    onChange(e) {
        console.log(this);
        let txt = this[ELEMENT].value;
        let parser = new PhoneParser();
        let nums = parser.stripToNums(txt);
        console.log(nums);
        this[ELEMENT].value = parser.transform(nums);
    }
}