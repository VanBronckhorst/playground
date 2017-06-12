
// Uses https://en.wikipedia.org/wiki/Gift_wrapping_algorithm to create a convex hull
// Around a set of points
export function jarvisMarch(points) {
    let res = [];
    if (!points || (points.length === undefined) || points.length === 0) {
        return res;
    }

    // find leftmost point
    let min = points[0];
    for (let i = 0; i < points.length; i++) {
        if (points[i].x < min.x) {
            min = points[i];
        }
    }

    let lastPoint = min;
    let nextPoint = min;
    do {
        res.push(lastPoint);
        nextPoint = points[0];

        for (let i = 0; i < points.length; i++) {
            if (nextPoint === lastPoint || orientation(lastPoint, points[i], nextPoint) === 2) {
                nextPoint = points[i];
            }
        }

        lastPoint = nextPoint;
    } while (nextPoint != res[0])

    res.push(res[0]);
    return res;
}


// To find orientation of ordered triplet (p, q, r).
// The function returns following values
// 0 --> p, q and r are colinear
// 1 --> Clockwise
// 2 --> Counterclockwise
function orientation(p, q, r)
{
    let val = (q.y - p.y) * (r.x - q.x) -
              (q.x - p.x) * (r.y - q.y);
 
    if (val == 0) return 0;  // colinear
    return (val > 0)? 1: 2; // clock or counterclock wise
}