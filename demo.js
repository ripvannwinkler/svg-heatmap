
// simulate some data

var values = []
for (var state in states) {
    values.push([state, Math.floor(Math.random()*5000)]);
}

// sort in descending order

values.sort(function (a, b) {
    return b[1] - a[1];
});

window.onload = function () {

    var map = Raphael("container", 940, 600),
        color = Raphael.rgb2hsb(0,102,255)
        attr = {
            "fill": "#d3d3d3",
            "stroke": "#fff",
            "stroke-opacity": "1",
            "stroke-linejoin": "round",
            "stroke-miterlimit": "4",
            "stroke-width": "0.75",
            "stroke-dasharray": "none"
        };

    var zoom = .75;
    map.setSize(map.width * zoom, map.height * zoom);
    map.setViewBox(0, 0, map.width / zoom, map.height / zoom);
    map.canvas.setAttribute('preserveAspectRatio', 'none');

    for (var i=0; i<values.length; i++) {
        var a = values.length - i,
            b = 255.0 / values.length,
            c = JSON.parse(JSON.stringify(attr)),
            d = a/values.length;

        c.fill = Raphael.hsb(color.h, d, color.b);
        map.path(states[values[i][0]]).attr(c);
    }
  };



