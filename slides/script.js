let {view, move, fade_in, fade_out, toggle_logo, invert, change_view, start, align_vertically, align_horizontally, set_color} = window.preji;

var title = view("title").set_scale(1.2);
var svg = view("svg");
var intro = view("intro");
var intro_accel = view("intro-approximation-view").set_scale(1.4);
var accel = view("accel").set_scale(1.2);
var accel_ex = view("accel-ex");
var cores = view("cores");
var evaluation = view("evaluation").set_scale(1.4);
var conclusion = view("conclusion").set_scale(1.4);
 
var slides = [
    [
        fade_out([
            "intro",
            "accel",
            "cores",
            "evaluation",
            "conclusion",
            "cores-t1-1",
            "cores-t1-2",
            "cores-t1-3",
            "cores-t2-1",
            "cores-t2-2",
            "cores-t2-3",
            "cores-t3-1",
            "cores-t3-2",
            "cores-t3-3",
            "cores-imp1",
            "cores-imp2",
            "cores-imp3",
            "cores-imp4",
            "cores-imp5",
            "cores-imp6",
            "cores-imp7",
            "cores-imp8",
            "cores-imp9",
            "cores-imp10",
            "cores-derivation-1",
            "cores-derivation-2",
            "cores-derivation-3",
            "cores-derivation-4",
            "cores-derivation-5",
            "intro-approximation",
        ], duration=0),
        move("cores-t1", "cores-t0"),
        move("cores-t2", "cores-t0"),
        move("cores-t3", "cores-t0"),
        move("cores-imp1", "cores-t0"),
        move("cores-imp2", "cores-t0"),
        move("cores-imp3", "cores-t0"),
        move("cores-imp4", "cores-t0"),
        move("cores-imp5", "cores-t0"),
        move("cores-imp6", "cores-t0"),
        move("cores-imp7", "cores-t0"),
        move("cores-imp8", "cores-t0"),
        move("cores-imp9", "cores-t0"),
        move("cores-imp10", "cores-t0"),
        move("intro-accelerated-closed", "intro-accelerated"),
        move("cores-derivation", "cores-leadsto"),
    ],
    [change_view(title, delay=0, slowdown=0)],
    [set_color(["title-gray"], "#D3D3D3")],
    [change_view(svg)],

    [change_view(intro), fade_out(["intro-loat", "intro-b1", "intro-b2", "intro-b4", "intro-its", "intro-arrow", "intro-accelerated", "intro-accelerated-closed", "intro-final", "intro-final-cond"], duration=0), fade_in(["intro"])],
    [fade_in(["intro-loat"])],
    [fade_in(["intro-b1"])],
    [fade_in(["intro-its"])],
    [fade_in(["intro-b2"])],
    [fade_in(["intro-b4"])],
    [change_view(intro_accel)],
    [fade_in(["intro-arrow", "intro-accelerated-closed"])],
    [fade_out(["intro-accelerated-closed"]), fade_in(["intro-accelerated"])],
    [move("intro-accelerated", "intro-loop"), fade_out(["intro-loop", "intro-arrow"])],
    [fade_out(["intro-loop-2"]), fade_in(["intro-final", "intro-final-cond"])],
    [fade_in(["intro-approximation"])],
    [change_view(svg)],

    [change_view(accel), fade_out(["accel-b7", "accel-b8", "accel-its", "accel-deriv1", "accel-deriv2", "accel-deriv3", "accel-deriv4", "accel-arrow", "accel-accelerated", "accel-terminology1", "accel-terminology2", "accel-terminology3", "accel-loop-cond1-fade", "accel-loop-cond2-fade"], duration=0), fade_in(["accel"])],
    [fade_in(["accel-terminology1"])],
    [fade_in(["accel-terminology2"])],
    [fade_in(["accel-terminology3"])],
    [change_view(accel_ex), fade_in(["accel-its"])],
    [fade_in(["accel-deriv1"])],
    [fade_in(["accel-deriv2"])],
    [fade_in(["accel-loop-cond2-fade"])],
    [fade_in(["accel-deriv3"])],
    [fade_out(["accel-loop-cond2-fade"]), fade_in(["accel-loop-cond1-fade"])],
    [fade_in(["accel-deriv4"])],
    [fade_out(["accel-loop-cond1-fade"])],
    [fade_in(["accel-arrow", "accel-accelerated"])],
    [move("accel-accelerated", "accel-loop"), fade_out(["accel-arrow", "accel-loop"])],
    [change_view(accel)],
    [fade_in(["accel-b7"])],
    [fade_in(["accel-b8"])],
    [toggle_logo(1000), change_view(svg)],

    [change_view(cores), fade_out(["cores-accel-1", "cores-phi-done", "cores-phi", "cores-phi-done-1", "cores-phi-done-2", "cores-phi-done-3", "cores-phi-done-4", "cores-accel-box", "cores-placeholder-1", "cores-placeholder-2", "cores-placeholder-3", "cores-placeholder-4", "cores-t0-1", "cores-t0-2", "cores-t0-3", "cores-leadsto-1", "cores-leadsto-2", "cores-leadsto-3", "cores-leadsto-4"], duration=0), fade_in(["cores"])],
    [fade_in(["cores-accel-1", "cores-accel-box"])],
    [fade_in(["cores-phi", "cores-phi-done", "cores-derivation-1"])],
    // animation -- part 1
    [set_color(["cores-phi-1"], "red"), fade_in(["cores-imp1"])],
    [set_color(["cores-phi-1"], "black"), fade_out(["cores-imp1"]), fade_in(["cores-imp2"]), set_color(["cores-phi-2"], "red")],
    [set_color(["cores-phi-2"], "black"), fade_out(["cores-imp2"]), fade_in(["cores-imp3"]), set_color(["cores-phi-3"], "red")],
    [set_color(["cores-phi-3"], "black"), fade_out(["cores-imp3"]), fade_in(["cores-imp4"]), set_color(["cores-phi-4"], "red")],
    [set_color(["cores-phi-4"], "black"), fade_out(["cores-imp4"]), move("cores-phi-4", "cores-phi-done-4"), fade_in(["cores-derivation-2"])],
    // animation -- part 3
    [set_color(["cores-phi-1"], "red"), fade_in(["cores-imp5"])],
    [set_color(["cores-phi-1"], "black"), fade_out(["cores-imp5"]), fade_in(["cores-imp6"]), set_color(["cores-phi-2"], "red")],
    [set_color(["cores-phi-2"], "black"), fade_out(["cores-imp6"]), fade_in(["cores-imp7"]), set_color(["cores-phi-3"], "red")],
    [set_color(["cores-phi-3"], "black"), fade_out(["cores-imp7"]), move("cores-phi-3", "cores-phi-done-3"), fade_in(["cores-derivation-3"])],
    // animation -- part 4
    [set_color(["cores-phi-1"], "red"), fade_in(["cores-imp8"])],
    [set_color(["cores-phi-1"], "black"), fade_out(["cores-imp8"]), fade_in(["cores-imp9"]), set_color(["cores-phi-2"], "red")],
    [set_color(["cores-phi-2"], "black"), fade_out(["cores-imp9"]), move("cores-phi-2", "cores-phi-done-2"), fade_in(["cores-derivation-4"])],
    // animation -- part 5
    [set_color(["cores-phi-1"], "red"), fade_in(["cores-imp10"])],
    [set_color(["cores-phi-1"], "black"), fade_out(["cores-imp10"]), move("cores-phi-1", "cores-phi-done-1"), fade_in(["cores-derivation-5"])],
    // animation end
    // animation 2
    // t0
    [move("cores-phi-1", "cores-placeholder-1"), move("cores-phi-2", "cores-placeholder-2"), move("cores-phi-3", "cores-placeholder-3"), move("cores-phi-4", "cores-placeholder-4"), fade_out(["cores-derivation"])],
    [move("cores-phi-2", "cores-phi-done-2"), move("cores-phi-3", "cores-phi-done-3"), move("cores-phi-4", "cores-phi-done-4"), set_color(["cores-phi-1"], "red")],
    [fade_in(["cores-t0-1"])],
    [fade_in(["cores-t0-2"])],
    [fade_in(["cores-t0-3"])],
    [fade_in(["cores-leadsto-1"])],
    // t1
    [move("cores-phi-2", "cores-placeholder-2"), move("cores-phi-3", "cores-placeholder-3"), move("cores-phi-4", "cores-placeholder-4"), fade_out(["cores-t0"]), set_color(["cores-phi-1"], "black")],
    [move("cores-phi-1", "cores-phi-done-1"), move("cores-phi-3", "cores-phi-done-3"), move("cores-phi-4", "cores-phi-done-4"), set_color(["cores-phi-2"], "red")],
    [fade_in(["cores-t1-1"])],
    [fade_in(["cores-t1-2"])],
    [fade_in(["cores-t1-3"])],
    [fade_in(["cores-leadsto-2"])],
    // t2
    [move("cores-phi-1", "cores-placeholder-1"), move("cores-phi-3", "cores-placeholder-3"), move("cores-phi-4", "cores-placeholder-4"), fade_out(["cores-t1"]), set_color(["cores-phi-2"], "black")],
    [move("cores-phi-1", "cores-phi-done-1"), move("cores-phi-2", "cores-phi-done-2"), move("cores-phi-4", "cores-phi-done-4"), set_color(["cores-phi-3"], "red")],
    [fade_in(["cores-t2-1"])],
    [fade_in(["cores-t2-2"])],
    [fade_in(["cores-t2-3"])],
    [fade_in(["cores-leadsto-3"])],
    // t3
    [move("cores-phi-1", "cores-placeholder-1"), move("cores-phi-2", "cores-placeholder-2"), move("cores-phi-4", "cores-placeholder-4"), fade_out(["cores-t2"]), set_color(["cores-phi-3"], "black")],
    [move("cores-phi-1", "cores-phi-done-1"), move("cores-phi-2", "cores-phi-done-2"), move("cores-phi-3", "cores-phi-done-3"), set_color(["cores-phi-4"], "red")],
    [fade_in(["cores-t3-1"])],
    [fade_in(["cores-t3-2"])],
    [fade_in(["cores-t3-3"])],
    [fade_in(["cores-leadsto-4"])],
    // animation 2 end
    [change_view(svg), move("cores-phi-1", "cores-placeholder-1"), move("cores-phi-2", "cores-placeholder-2"), move("cores-phi-3", "cores-placeholder-3"), fade_out(["cores-t3"]), set_color(["cores-phi-4"], "black")],

    [change_view(evaluation), fade_in(["evaluation"])],
    [change_view(svg)],

    [change_view(conclusion), fade_out(["conclusion-b1", "conclusion-b2", "conclusion-b4", "conclusion-b5"], duration=0), fade_in(["conclusion"])],
    [fade_in(["conclusion-b1"])],
    [fade_in(["conclusion-b2"])],
    [fade_in(["conclusion-b4"])],
    [fade_in(["conclusion-b5"])],
    [change_view(svg)],
];

// start the presentation
start(slides);
