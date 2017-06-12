import PointSetView from '../views/PointSetView.js';
import { jarvisMarch } from '../algorithms/ConvexHull/ConvexHull.js';

let points = [];
for (let i = 0; i < 10; i++) {
    points.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000
    });
}

let view = new PointSetView(document.getElementById('viz'), points);
view.drawLine(jarvisMarch(points));
