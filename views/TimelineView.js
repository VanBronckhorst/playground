import Timeline from "../classes/Timeline/Timeline"
import TimelineEvent from "../classes/Timeline/TimelineEvent"
import YearBox from "./Timeline/YearBox"
import EventRow from "./Timeline/EventRow"
import "../libraries/date";


const TIMELINE_CONTAINER = Symbol();
const TIMELINE_DOM = Symbol();
const TIMELINE = Symbol();
const OPTIONS = Symbol();


export default class TimelineView {
    constructor(domParent, timelineString, options) {
        this[TIMELINE_CONTAINER] = this._containerWithOptions(options);;
        this[TIMELINE_DOM] = document.createElement("div");
        this[TIMELINE] = new Timeline(timelineString, options);
        this[TIMELINE_CONTAINER].appendChild(this[TIMELINE_DOM]);
        const container = this[TIMELINE_DOM];

        // Year Columns
        this.startYear = this[TIMELINE].minYear() - 1;
        let col = 1;

        // Leave some years padding around the events
        for (let y = this.startYear; y <= this[TIMELINE].maxYear() + 5; y++) {
            const box = new YearBox(y, col, options);
            col++;
            container.appendChild(box.dom());
        }

        const totalWidth = options.width;
        const dayWidth = options.columnWidth / 365;
        const startDate = Date.parse("" + this.startYear);

        // Add a placeholder item so that items don't overlap the title.
        const placeholder = document.createElement("div");
        placeholder.style.gridRow = 1;
        placeholder.style.gridColumnStart = 1;
        placeholder.style.gridColumnEnd = -1;
        container.appendChild(placeholder);

        // Add all elements
        let row = 2;
        for (let ev of this[TIMELINE].events()) {
            let timeDiff = ev.start().getTime() - startDate.getTime();
            let dayDiff = timeDiff / 1000 / 3600 / 24; 
            let range = 10;
            if (!ev.isInstant()) {
                range = Math.max(range, ev.dayRange() * dayWidth);
            }
            const er = new EventRow(ev, row, dayDiff * dayWidth, range, options);
            container.appendChild(er.dom());
            row++;
        }

        container.style.display = "grid";
        container.style.gridTemplateColumns = `repeat(${col-1}, ${options.columnWidth}px)`;
        container.style.gridTemplateRows = `40px repeat(${row - 1}, ${options.rowHeight}px) minmax(50vh, 1fr)`;

        while (domParent.firstChild) {
            domParent.removeChild(domParent.firstChild);
        }
        domParent.appendChild(this[TIMELINE_CONTAINER]);
    }


    _installTimeline() {

    }


    _containerWithOptions(options) {
        const container = document.createElement('div');
        
        const w = options.width || 800;
        const h = options.height || 800;

        container.style.width = w + "px";
        container.style.height = h + "px";
        container.style.overflow = "scroll";
        container.style.color = options.textColor;

        return container;
    }
}