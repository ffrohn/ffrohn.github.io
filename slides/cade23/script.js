let {view, move, fade_in, fade_out, toggle_logo, invert, change_view, start, align_vertically, align_horizontally, set_color} = window.preji;

var title = view("title").set_scale(1.3);
var svg = view("svg");
var accel = view("accel").set_scale(1.1);
var shines = view("shines").set_scale(1.1);
var adcl = view("adcl");
var eval = view("eval").set_scale(1.3);

var slides = [
    [
        fade_out([
            "title-short",

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
            "a",
            "b",
            "learned1",
            "learned2",
            "proof",
            "accel-proof",

            "adcl",
            "adcl-title-term",
            "clauses",
            "clauses-nt",
            "adcl-learned-err",
            "state11",
            "calc-simple",
            "nt",
            "g-trans",
            "adcl-learned1",
            "adcl-learned2",
            "adcl-proof",
            "proof2",
            "proof3",
            "proof8",
            "proof9",
            "proof10",
            "proof11",
            "proof12",
            "proof13",
            "proof14",
            "proof15",

            "eval",
            "sum1",
            "sum2",
            "sum3",
            "url",
        ], duration=0),
    ],
    [change_view(title, delay=0, slowdown=0)],
    [fade_out(["title-long"]), fade_in(["title-short"], 500, 250)],
    [change_view(svg)],

    [change_view(accel), fade_in(["accel"])],
    [fade_in(["accel1", "accel-ex"])],
    [fade_in(["accel2"])],
    [fade_in(["accel-arrow", "accel-accelerated"])],
    [fade_in(["accel3", "accel4", "accel5", "accel6", "accel7", "accel8"])],
    [change_view(svg)],

    [change_view(shines), fade_in(["shines"])],
    [fade_in(["a", "b",])],
    [fade_in(["proof"])],
    [set_color(["trans1", "step1"], "red", 500)],
    [set_color(["trans2", "cond-a", "steps2a"], "red", 500), set_color(["trans1", "step1"], "black", 500)],
    [set_color(["cond-b", "steps2b"], "red", 500), set_color(["cond-a", "steps2a"], "black", 500)],
    [set_color(["trans3", "step3"], "red", 500), set_color(["trans2", "cond-b", "steps2b"], "black", 500)],
    [set_color(["trans2", "cond-a"], "red", 500), set_color(["trans3", "step3"], "black", 500), fade_in(["learned1"])],
    [set_color(["cond-a"], "black", 500), set_color(["cond-b"], "red", 500), fade_in(["learned2"])],
    [set_color(["trans2", "cond-b"], "black", 500), fade_in(["accel-proof"])],
    [set_color(["trans1", "step1-accel"], "red", 500)],
    [set_color(["trans4", "step4-accel"], "red", 500), set_color(["trans1", "step1-accel"], "black", 500)],
    [set_color(["trans5", "step5-accel"], "red", 500), set_color(["trans4", "step4-accel"], "black", 500)],
    [set_color(["trans3", "step3-accel"], "red", 500), set_color(["trans5", "step5-accel"], "black", 500)],
    [change_view(svg)],

    [change_view(adcl), fade_in(["adcl"])],
    [fade_out(["calc"], 0.0), fade_in(["calc-simple"], 500, 250)],
    [fade_out(["accelerate-simp", "covered-simp", "backtrack-simp"], 0.2)],
    [fade_out(["step-simp"], 0.2), fade_in(["accelerate-simp"])],
    [fade_out(["accelerate-simp"], 0.2), fade_in(["covered-simp", "backtrack-simp"])],
    [fade_in(["clauses"]), fade_out(["adcl-learned1", "adcl-learned2"], 0.2), fade_in(["step-simp", "accelerate-simp"])],
    [fade_in(["adcl-proof"])],
    [fade_in(["proof2"]), fade_out(["accelerate-simp", "covered-simp", "backtrack-simp"], 0.2), set_color(["adcl-trans1"], "red", 500)],
    [fade_in(["proof3"]), set_color(["adcl-trans2", "adcl-cond-2a"], "red", 500), set_color(["adcl-trans1"], "black", 500)],
    [fade_in(["proof8", "accelerate-simp", "adcl-learned1"]), fade_out(["step-simp"], 0.2), set_color(["adcl-trans4"], "red", 500), set_color(["adcl-trans2", "adcl-cond-2a"], "black", 500)],
    [fade_in(["proof9", "step-simp"]), fade_out(["accelerate-simp"], 0.2), set_color(["adcl-trans2", "adcl-cond-2b"], "red", 500), set_color(["adcl-trans4"], "black", 500)],
    [fade_in(["proof10", "accelerate-simp", "adcl-learned2"]), fade_out(["step-simp"], 0.2), set_color(["adcl-trans5"], "red", 500), set_color(["adcl-trans2", "adcl-cond-2b"], "black", 500)],
    [fade_in(["proof11", "step-simp"]), fade_out(["accelerate-simp"], 0.2), set_color(["err-trans", "g-trans"], "red", 500), set_color(["adcl-trans5"], "black", 500)],
    [fade_out(["err-trans"]), fade_in(["g-trans", "state11"], 500, 250)],
    [fade_in(["clauses-nt"]), set_color(["g-trans"], "black", 500)],
    [fade_out(["step-simp"], 0.2), fade_out(["adcl-title-safety"]), fade_in(["nt", "adcl-title-term"])],
    [fade_in(["proof12", "step-simp"]), fade_out(["nt"], 0.2), set_color(["adcl-trans6"], "red", 500)],
    [fade_in(["proof13"]), set_color(["adcl-trans7", "adcl-cond-7a"], "red", 500), set_color(["adcl-trans6"], "black", 500)],
    [fade_in(["proof14"]), set_color(["adcl-cond-7b"], "red", 500), set_color(["adcl-cond-7a"], "black", 500)],
    [fade_in(["nt"]), fade_out(["step-simp"], 0.2), set_color(["adcl-trans7", "adcl-cond-7b"], "black", 500)],
    [fade_in(["adcl-learned-err"]), set_color(["adcl-trans8"], "red", 500)],
    [fade_in(["proof15", "step-simp"]), fade_out(["nt"], 0.2)],
    [change_view(svg)],

    [change_view(eval), fade_in(["eval"])],
    [fade_in(["sum1"])],
    [fade_in(["sum2"])],
    [fade_in(["sum3"])],
    [fade_in(["url"])],
    [change_view(svg)],

];

// start the presentation
start(slides);
