let {view, move, fade_in, fade_out, invert, change_view, start} = window.preji;

var title = view("title").set_scale(1);
var citations = view("citations");
var loop_acceleration = view("loop-acceleration");
var new_techniques = view("new-techniques-frame");
var sota = view("sota-frame");
var conditional_metering = view("conditional-metering");
var svg = view("svg");
var prog = view("ex-frame");
var accel = view("accel");
var open_problems = view("open-problems-content");
var experiments = view("experiments").set_scale(1.3);
var conclusion = view("conclusion").set_scale(1.3);

var slides = [
    [
        fade_out([
            "citations",
            "prog1",
            "accel",
            "conditional-metering",
            "accel-content",
            "conditional-content",
            "experiments",
            "conclusion",
            "sota",
            "ex-frame",
            "new-techniques-frame",
            "sota-frame",
            "open-problems-content",
            "ex-nondet",
            "ex-mod",
            "ex-multi-path",
            "ex-arr",

            "metering-functions",
            "metering-functions-ex",
            "monotonicity",
            "monotonicity-ex",

            "no-metering-function",
            "non-monotonic",

            "conditional-metering-remark",
            "conditional-metering-ex",

            "no-conditional-metering",

            "accel-ex",
            "ci-ex",
            "si-ex",
            "md-ex",
            "loop-accelerated",

            "loat2",
            "experiments-its",
            "experiments-cpx",

            "loop-acceleration",
            "loop-acceleration-step-1",
            "loop-acceleration-step-2",
            "applications",
            "challenges",
        ], duration=0),
        change_view(title, delay=0, slowdown=0),
    ],

    [change_view(svg)],

    [change_view(citations), fade_out(["introduction"], 3000), fade_in(["citations"], 3000)],
    [change_view(loop_acceleration), fade_in(["loop-acceleration"])],
    [fade_in(["loop-acceleration-step-1"])],
    [fade_in(["loop-acceleration-step-2"])],
    [fade_in(["applications"])],
    [fade_in(["challenges"])],

    [change_view(svg), fade_out(["loop-acceleration"], 5000)],

    [change_view(sota), fade_out(["state-of-the-art"], 3000), fade_in(["sota", "metering-functions"], 3000)],
    [fade_in(["metering-functions-ex"])],
    [fade_in(["monotonicity"]), fade_out(["metering-functions-ex"])],
    [fade_in(["monotonicity-ex"])],

    [change_view(svg), fade_out(["monotonicity-ex"])],

    [change_view(prog), fade_out(["challenging-example"], 3000), fade_in(["prog1"], 3000)],
    [fade_in(["no-metering-function"])],
    [fade_in(["non-monotonic"])],

    [change_view(svg), fade_out(["no-metering-function", "non-monotonic"])],

    [change_view(new_techniques), fade_out(["new-techniques"], 3000), fade_in(["accel", "conditional-metering"], 3000)],

    [change_view(conditional_metering), fade_in(["conditional-content"])],
    [fade_in(["conditional-metering-remark"])],
    [fade_in(["conditional-metering-ex"])],

    [change_view(svg)],

    [change_view(prog)],
    [fade_in(["no-conditional-metering"])],

    [change_view(svg), fade_out(["no-conditional-metering"])],

    [change_view(accel), fade_in(["accel-content"])],
    [fade_in(["accel-ex"])],
    [fade_in(["ci-ex"])],
    [fade_in(["si-ex"])],
    [fade_in(["md-ex"])],
    [fade_in(["loop-accelerated"])],

    [change_view(svg)],

    [change_view(open_problems), fade_out(["open-problems"], 3000), fade_in(["open-problems-content"], 3000)],
    [fade_in(["ex-nondet"])],
    [fade_in(["ex-multi-path"]), fade_out(["ex-nondet"])],
    [fade_in(["ex-mod"]), fade_out(["ex-multi-path"])],
    [fade_in(["ex-arr"])],

    [change_view(svg), fade_out(["ex-mod", "ex-arr"])],

    [change_view(experiments), fade_out(["evaluation"], 3000), fade_in(["experiments"], 3000)],
    [fade_out(["loat"]), fade_in(["loat2"])],
    [fade_in(["experiments-its"])],
    [fade_in(["experiments-cpx"])],

    [change_view(conclusion), fade_in(["conclusion"])],

    [change_view(svg), fade_out(["conclusion"], 3000)],
];

// start the presentation
start(slides);
