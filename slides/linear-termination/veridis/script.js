class State {

    constructor(focus) {
        this.focus = focus;
        this.scale = 1;
        this.fadein = [];
        this.fadeout = [];
        this.delay = 0;
    }

    set_scale(scale) {
        this.scale = scale;
        return this;
    }

    set_fadein(fadein) {
        this.fadein = fadein;
        return this;
    }

    set_fadeout(fadeout) {
        this.fadeout = fadeout;
        return this;
    }

    set_delay(delay) {
        this.delay = delay;
        return this;
    }

}

var svg = d3.select("#svg");
var bbox = d3.select("#svg").node().getBoundingClientRect();


var invisible = [
    "closed1",
    "closed2",
    "closed3",
    "closed4",
    "closed5",
    "closed6",
    "prog-fade1",
    "prog-fade2",
    "prog-fade3",
    "prog-fade4",
    "f-fade",
    "nonterm-fade",
    "q-fade",
    "event-nonterm-fade",
    "mult-cond-fade-1",
    "mult-cond-fade-2",
    "rim1",
    "history1",
    "history2",
    "history3",
    "history4",
    "history5",
    "history6",
    "growth1",
    "growth2",
    "growth3",
    "ex-matrix",
    "ex-no-matrix",
    "ex-closed",
    "ex-closed-y",
    "ex-closed-poly-exp",
    "ex-closed-cond",
    "ex-final-1",
    "ex-final-2",
    "ex-final-3",
    "recurrences",
    "recurrences-substitute",
    "closed-fade-1",
    "closed-fade-2",
    "closed-fade-3",
    "closed-fade-4",
    "non-linear-1",
    "non-linear-2",
    "non-linear-3",
]

for (var i = 0; i < invisible.length; i++) {
    d3.select("#" + invisible[i]).style("opacity", 0);
}

var states = [];
states.push(new State("titleslide"));
states.push(new State("svg"));
states.push(new State("prog").set_scale(1.1));
states.push(new State("prog").set_scale(1.1).set_fadein(["prog-fade2"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["prog-fade3"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["prog-fade4"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["prog-fade1"]));
states.push(new State("ex").set_fadein(["ex-no-matrix"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["ex-matrix"]).set_scale(1.1));
states.push(new State("svg").set_fadeout(["ex"]).set_delay(5000));
states.push(new State("history").set_scale(1.1));
states.push(new State("history").set_fadein(["history1"]).set_scale(1.1));
states.push(new State("history").set_fadein(["history2"]).set_scale(1.1));
states.push(new State("history").set_fadein(["history3"]).set_scale(1.1));
states.push(new State("history").set_fadein(["history4"]).set_scale(1.1));
states.push(new State("history").set_fadein(["history6"]).set_scale(1.1));
states.push(new State("history").set_fadein(["history5"]).set_scale(1.1));
states.push(new State("svg"));
states.push(new State("prog").set_scale(1.1));
states.push(new State("prog").set_scale(1.1).set_fadein(["f-fade"]).set_fadeout(["prog-fade1", "prog-fade2", "prog-fade3", "prog-fade4"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["nonterm-fade"]));
states.push(new State("ex").set_fadein(["ex"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["recurrences"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["ex-closed"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["recurrences-substitute"]).set_fadeout(["recurrences-orig"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["ex-closed-y"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["non-linear-1"]).set_scale(1.1));
states.push(new State("svg").set_fadeout(["ex", "non-linear-1"]).set_delay(5000));
states.push(new State("closed-form").set_scale(1.2));
states.push(new State("closed-form").set_fadein(["closed1"]).set_scale(1.2));
states.push(new State("closed-form").set_fadein(["closed2"]).set_scale(1.2));
states.push(new State("closed-form").set_fadein(["closed3"]).set_scale(1.2));
states.push(new State("closed-form").set_fadein(["closed4"]).set_scale(1.2));
states.push(new State("closed-form").set_fadein(["closed5"]).set_scale(1.2));
states.push(new State("closed-form").set_fadein(["closed6"]).set_scale(1.2));
states.push(new State("closed-form").set_fadein(["non-linear-2"]).set_scale(1.2));
states.push(new State("svg").set_fadeout(["non-linear-2"]));
states.push(new State("prog").set_scale(1.1));
states.push(new State("prog").set_scale(1.1).set_fadein(["q-fade"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["closed-fade-1"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["closed-fade-2"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["closed-fade-3"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["closed-fade-4"]));
states.push(new State("ex").set_fadein(["ex"]).set_scale(1.1));
states.push(new State("ex").set_fadeout(["recurrences"]).set_fadein(["ex-closed-poly-exp"]).set_scale(1.1));
states.push(new State("prog").set_scale(1.1).set_fadeout(["ex"]).set_delay(3000));
states.push(new State("prog").set_scale(1.1).set_fadein(["event-nonterm-fade"]));
states.push(new State("svg"));
states.push(new State("growth").set_scale(1.1));
states.push(new State("growth").set_fadein(["growth1"]).set_scale(1.1));
states.push(new State("growth").set_fadein(["growth2"]).set_scale(1.1));
states.push(new State("growth").set_fadein(["growth3"]).set_scale(1.1));
states.push(new State("growth").set_fadein(["non-linear-3"]).set_scale(1.1));
states.push(new State("svg").set_fadeout(["non-linear-3"]));
states.push(new State("ex").set_fadein(["ex"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["ex-closed-cond"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["ex-final-1"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["ex-final-2"]).set_scale(1.1));
states.push(new State("ex").set_fadein(["ex-final-3"]).set_scale(1.1));
states.push(new State("prog").set_scale(1.1).set_fadeout(["ex"]).set_delay(3000));
states.push(new State("prog").set_scale(1.1).set_fadeout(["program"]).set_fadein(["mult-cond-fade-1"]));
states.push(new State("prog").set_scale(1.1).set_fadein(["mult-cond-fade-2"]));
states.push(new State("svg").set_fadein(["program"]).set_fadeout(["mult-cond-fade-1", "mult-cond-fade-2"]).set_delay(1000));

for (var i = 0; i < states.length; i++) {
    states[i].pos = compute_pos(states[i].focus, states[i].scale);
}

var idx = -1;
var pos = [center_x(bbox), center_y(bbox), bbox.width];
next();

function next() {
    if (idx < states.length - 1) {
        idx++;
        var curIdx = idx;
        focus(states[curIdx].pos);
        var fade = function() {
            for (var i = 0; i < states[curIdx].fadein.length; i++ ) {
                d3.select("#" + states[curIdx].fadein[i]).transition().duration(500).style("opacity", 1);
            }
            for (var i = 0; i < states[curIdx].fadeout.length; i++ ) {
                d3.select("#" + states[curIdx].fadeout[i]).transition().duration(500).style("opacity", 0);
            }
        };
        setTimeout(fade, states[curIdx].delay);
    }
}

function prev() {
    if (idx > 0) {
        focus(states[idx-1].pos);
        for (var i = 0; i < states[idx].fadein.length; i++ ) {
            d3.select("#" + states[idx].fadein[i]).transition().style("opacity", 0);
        }
        for (var i = 0; i < states[idx].fadeout.length; i++ ) {
            d3.select("#" + states[idx].fadeout[i]).transition().style("opacity", 1);
        }
        idx--;
    }
}

var Key_Left = 37;
var Key_Up = 38;
var Key_Right = 39;
var Key_Down = 40;
var Space = 32;
var Return = 13;

window.onclick = function(e) {
    if (e.button == 0) {
        next();
    }
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (key == Key_Left || key == Key_Down) {
        prev();
    } else if (key == Key_Right || key == Key_Up || key == Space || key == Return) {
        next();
    }
}

function compute_pos(id, scale) {
    var node = d3.select("#" + id).node().getBoundingClientRect();
    var scale_factor = Math.min(bbox.width / (node.width * scale), bbox.height / (node.height * scale));
    return [center_x(node), center_y(node), bbox.width / scale_factor];
}

function focus(p) {
    svg.call(zoom, pos, p);
    pos = p;
}

function zoom(svg, start, end) {
    var center = [bbox.width / 2, bbox.height / 2],
        i = d3.interpolateZoom(start, end);

    svg
        .attr("transform", transform(start))
        .transition()
        .delay(250)
        .duration(i.duration * 2)
        .attrTween("transform", function() { return function(t) { return transform(i(t)); }; });

    function transform(p) {
        var k = bbox.width / p[2];
        return "translate(" + ((center[0] - p[0]) * k) + "," + ((center[1] - p[1]) * k) + ")" + "scale(" + k + ")";
    }
}

function center_x(bbox) {
    return bbox.x + (bbox.width / 2);
}

function center_y(bbox) {
    return (bbox.y) + (bbox.height / 2);
}
