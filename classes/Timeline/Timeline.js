import TimelineEvent from "./TimelineEvent.js";

const EVENTS = Symbol();

export default class Timeline {
    constructor(timelineString, options) {
        this[EVENTS] = this._parseTimelineString(timelineString);
        if (options.sort) {
            this[EVENTS].sort((a, b) => a.start() - b.start());
        }
    }

    events() {
        return this[EVENTS];
    }

    minYear() {
        let min = Infinity;
        for (let ev of this[EVENTS]) {
            min = Math.min(min, ev.start().getFullYear());
        }
        return min;
    }

    maxYear() {
        let max = -Infinity;
        for (let ev of this[EVENTS]) {
            max = Math.max(max, ev.end() ? ev.end().getFullYear() : ev.start().getFullYear());
        }
        return max;
    }

    _parseTimelineString(timelineString) {
        let lines = timelineString.split("\n");
        lines = lines.filter((line) => {
            const trimmedLine = line.trim();
            if (trimmedLine.length === 0) {
                return false;
            }

            if (trimmedLine.startsWith("//") || trimmedLine.startsWith("#")) {
                return false;
            }

            return true;
        });

        return lines.map(l => new TimelineEvent(l));
    }
}