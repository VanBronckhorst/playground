import Timeline from '../classes/Timeline/Timeline.js';
import TimelineView from "../views/TimelineView";
import CollapsibleTextView from "../views/CollapsibleTextView";

import * as dat from 'dat.gui';
 
let options = {
    height: 600,
    width: 900,
    columnWidth: 120,
    rowHeight:20,
    sort: true,
    backgroundColor: "#2c3e50",
    eventColor: "#18bc9c",
    textColor: "#FFFFFF",
    dateColor: [255,255,255,74],
    reDraw: reDraw
}
const gui = new dat.GUI();
gui.add(options, "width");
gui.add(options, "height");
gui.add(options, "columnWidth");
gui.add(options, "rowHeight");
gui.add(options, "sort");
const colFolder = gui.addFolder("Colors")
colFolder.addColor(options, "backgroundColor");
colFolder.addColor(options, "eventColor");
colFolder.addColor(options, "textColor");
colFolder.addColor(options, "dateColor");
gui.add(options, "reDraw");

const timeline = `
May 1, 2003:MVP
Jun 6, 2003:Championship!
Apr 11, 2000:Tore the Lateral meniscus 
Oct 31, 1997:Tim Duncans Debut 
Jun 25, 1999:Championship!
Jun 25, 1997:Tim Duncan Drafted 
Apr 23, 1998:Tim Duncan first playoff game
Jun 8, 2007:Tim Duncans fourth Championships 
May 1, 2002:First MVP
Jun 6, 2005:Third Championship 
Apr 30, 1998:Rookie of the year 
Dec 6, 2015:Oldest player to record triple double 
Jun 12, 2014:Tim duncans Fifth championship 
Mar 25, 2000:First career triple-double
Jun 12, 2014:Second player ever to win title in three different decades 
1993-1997: Wake Forest
Jun 25, 1997-2016: San Antonio Spurs
`

const textArea = new CollapsibleTextView(document.getElementById("left"), timeline);


function reDraw() {
    v = new TimelineView(document.getElementById("viz"), textArea.getText(), options);
}

const t = new Timeline(timeline, options)
console.log(t, t.minYear(), t.maxYear());

let v = new TimelineView(document.getElementById("viz"), timeline, options);