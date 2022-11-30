

export default class PhoneParser {
    constructor() {

    }

    transform(input) {
        if (!/^\d*$/.test(input)) {
            throw new Error(
                `Error parsing '${input}': non digits found.`
              );
        }

        if (input.length > 10) {
            input = input.substring(0,10);
        }

        if (input.length < 3) {
            return input;
        }

        var res = "(";
        res += input.substring(0,3);
        res+= ")";

        if (input.length <= 6) {
            return res + input.substring(3);
        }

        res += input.substring(3,6);
        res += "-";

        return res + input.substring(6);
    }

    stripToNums(input) {
        return input.replace(/\D/g,'');
    }
}