let {view, move, fade_in, fade_out, toggle_logo, invert, change_view, start, align_vertically, align_horizontally, set_color} = window.preji;

var title = view("title").set_scale(1.2);
var svg = view("svg");
var accel = view("accel").set_scale(1.3);
var shines = view("shines").set_scale(1.3);
var adcl = view("adcl");
var eval = view("eval").set_scale(1.3);;
var summary = view("summary").set_scale(1.3);;

 
var slides = [
    [
        fade_out([
            "accel",
            "accel1",
            "accel2",
            "accel3",
            "accel4",
            "accel5",
            "accel6",
            "accel7",
            "accel8",
            "accel-ex",
            "accel-arrow",
            "accel-accelerated",

            "shines",
            "a1",
            "b1",
            "learned1",
            "learned2",
            "proof",
            "accel-proof",
            
            "adcl",
            "clauses",
            "adcl-learned1",
            "adcl-learned2",
            "adcl-proof",
            "proof2",
            "proof3",
            "proof4",
            "proof5",
            "proof6",
            "proof7",
            "proof8",
            "proof9",
            "proof10",
            "proof11",
            "proof12",
            "implicants",
            "sip2",
            "sip3",
            "sip4",
            "sip-ex",
            "sip-ex1",
            "sip-ex2",
            "sip-ex3",
            "redundancy",
            "red2",
            "red-ex",
            "red-ex1",
            "red-ex2",
            "red-ex3",
            "sat",
            
            "eval",
            "eval2",
            
            "summary",
            "sum1",
            "sum2",
            "sum3",
            "sum4",
            "sum41",
            "sum5",
            "sum6",
            "sum61",
            "sum62",
            "sum63",
            "sum64",
            "sum7",
            "sum71",
        ], duration=0),
    ],
    [change_view(title, delay=0, slowdown=0)],
    [change_view(svg)],

    [change_view(accel), fade_in(["accel"])],
    [fade_in(["accel1"])],
    [fade_in(["accel-ex"])],
    [fade_in(["accel2"])],
    [fade_in(["accel-arrow", "accel-accelerated"])],
    [fade_in(["accel3", "accel4", "accel5", "accel6", "accel7", "accel8"])],
    [change_view(svg)],

    [change_view(shines), fade_in(["shines"])],
    [fade_in(["a1", "b1",])],
    [fade_in(["proof"])],
    [fade_in(["learned1"])],
    [fade_in(["learned2"])],
    [fade_in(["accel-proof"])],
    [change_view(svg)],

    [change_view(adcl), fade_in(["adcl"]), toggle_logo()],
    [fade_in(["clauses"]), fade_out(["adcl-learned1", "adcl-learned2"], 0.2)],
    [fade_in(["adcl-proof"])],
    [fade_in(["proof2"]), fade_out(["accelerate", "covered", "backtrack"], 0.2)],
    [fade_in(["proof3"])],
    [fade_in(["implicants"])],
    [fade_in(["sip-ex", "sip-ex1"])],
    [fade_in(["sip2"])],
    [fade_in(["sip-ex2"])],
    [fade_in(["sip3"])],
    [fade_in(["sip-ex3"])],
    [fade_in(["sip4"])],
    [fade_out(["sip-ex"])],
    [fade_in(["proof4"])],
    [fade_in(["proof5", "accelerate", "adcl-learned1"]), fade_out(["step"], 0.2)],
    [fade_in(["proof6", "covered"]), fade_out(["accelerate"], 0.2)],
    [fade_in(["redundancy"])],
    [fade_in(["red-ex", "red-ex1"])],
    [fade_in(["red-ex2"])],
    [fade_in(["red-ex3"])],
    [fade_in(["red2"])],
    [fade_out(["red-ex"])],
    [fade_in(["proof7"])],
    [fade_in(["proof8", "step"]), fade_out(["covered"], 0.2)],
    [fade_in(["proof9"])],
    [fade_in(["proof10", "accelerate", "adcl-learned2"]), fade_out(["step"], 0.2)],
    [fade_in(["proof11", "step"]), fade_out(["accelerate"], 0.2)],
    [fade_out(["proof11", "orig3"])],
    [fade_in(["proof12", "backtrack"]), fade_out(["step"], 0.2)],
    [fade_in(["sat", "accelerate", "covered", "step"])],
    [change_view(svg), toggle_logo()],

    [change_view(eval), fade_in(["eval"])],
    [fade_in(["eval2"])],
    [change_view(svg)],

    [change_view(summary), fade_in(["summary"])],
    [fade_in(["sum1"])],
    [fade_in(["sum2"])],
    [fade_in(["sum3"])],
    [fade_in(["sum4"])],
    [fade_in(["sum41"])],
    [fade_in(["sum5"])],
    [fade_in(["sum6"])],
    [fade_in(["sum61"])],
    [fade_in(["sum62"])],
    [fade_in(["sum63"])],
    [fade_in(["sum64"])],
    [fade_in(["sum7"])],
    [fade_in(["sum71"])],
    [change_view(svg)],
];

// start the presentation
start(slides);
