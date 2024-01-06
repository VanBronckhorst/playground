import "../../libraries/date";

const ORIGINAL_DATESTRING = Symbol();
const FROM = Symbol();
const TO = Symbol();
const TEXT = Symbol();

export default class TimelineEvent {
    constructor(eventString) {
        const colonIndex = eventString.indexOf(":");
        if (colonIndex === -1) {
          throw new Error(
            `Error parsing '${eventString}': missing separating colon (:)`
          );
        }
        const dateString = eventString.substring(0, colonIndex).trim();        
        this[ORIGINAL_DATESTRING] = dateString;
        this[TEXT] = eventString.substring(colonIndex + 1).trim();
        this._parseDateString(dateString);
    }

    start() {
        return this[FROM];
    }

    end() {
        return this[TO];
    }

    isInstant() {
        return (this[TO] === undefined);
    }

    dayRange() {
        if (this.isInstant()) {
            return 1;
        }

        const timeDiff = this.end().getTime() - this.start().getTime();
        const dayDiff = timeDiff / 1000 / 3600 / 24; 
        return dayDiff;
    }

    dateString() {
        return this[ORIGINAL_DATESTRING];
    }

    text() {
        return this[TEXT];
    }

    _parseDateString(dateString) {
        const [unparsedFrom, unparsedTo] = dateString.split("-");
        this[FROM] = this._parseDate(unparsedFrom);
        if (unparsedTo) {
            this[TO] = this._parseDate(unparsedTo);
        }
    }

    _parseDate(date) {
        let res = Date.parse(date);
        if (!isNaN(res)) {
            return res;
        }

        // Allow MM/YYYY format
        res = Date.parseExact(date, "MM/YYYY");
        if (!isNaN(res)) {
            return res;
        }

        if (date === "now"||date == "Now") {
            return Date.today();
        }

        throw new Error(`Failed to parse date ${date}`);
    }
}