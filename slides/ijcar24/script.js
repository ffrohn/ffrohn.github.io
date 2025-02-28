let {view, move, fade_in, fade_out, toggle_logo, invert, change_view, start, align_vertically, align_horizontally, set_color} = window.preji;

var title = view("title").set_scale(1.1);
var svg = view("svg");
var beginning = view("beginning").set_scale(1.4);
var followed = view("followed").set_scale(1.2);
var floc = view("floc").set_scale(1.4);
var cvc = view("cvc").set_scale(1.2);
var eia = view("eia").set_scale(1.4);
var pre = view("pre").set_scale(1.1);
var alg = view("alg").set_scale(1.1);
var sym = view("symmetry").set_scale(1.1);
var starting = view("start").set_scale(1.1);
var mon = view("mon").set_scale(1.1);
var bound = view("bound").set_scale(1);
var swine = view("swine").set_scale(1.2);
var interpol = view("interpol").set_scale(1);
var eval = view("eval").set_scale(1.2);
var conclusion = view("conclusion").set_scale(1.2);

var slides = [
    [
        move("text3", "text1", "text1" , 0),
        move("text4", "text2", "text2" , 0),
        move("mon5", "mon4", "mon4" , 0),
        move("mon6", "mon4", "mon4" , 0),
        move("mon7", "mon4", "mon4" , 0),
        fade_out([
            "bubble1",
            "bubble2",
            "text1",
            "text2",
            "text3",
            "text4",
            "followed2",
            "followed3",
            "bubble3",
            "bubble4",
            "cvc2",
            "cvc3",
            "smtguys",
            "eia1",
            "eia2",
            "eia3",
            "eia35",
            "eia4",
            "eia5",
            "eia6",
            "eia-def2",
            "pre1",
            "pre2",
            "pre3",
            "pre-box",
            "pre-ex",
            "pre-ex-ul",
            "symmetry1",
            "symmetry2",
            "symmetry3",
            "mon2",
            "mon3",
            "mon4",
            "mon5",
            "mon6",
            "mon7",
            "mon-box",
            "bound2",
            "bound3",
            "bounds",
            "swine1",
            "interpol",
            "interpol1",
            "interpol2",
            "interpol3",
            "interpol4",
            "interpol5",
            "interpol6",
            "interpol7",
            "interpol8",
            "interpol9",
            "interpol10",
            "interpol11",
            "diag1",
            "diag2",
            "conclusion1",
            "conclusion2",
            "conclusion3",
            "conclusion5",
            "conclusion6",
            "conclusion7",
            "conclusion8",
            "conclusion9",
            "conclusion10",
            "alg0",
            "alg1",
            "alg2",
            "alg3",
            "alg4",
            "alg5",
            "alg6",
        ], duration=0),
    ],
    [change_view(title, delay=0, slowdown=0)],
    [change_view(svg)],

    [change_view(beginning)],
    [fade_in(["bubble1", "text1"])],
    [fade_in(["bubble2", "text2"])],
    [fade_out(["text1"]), fade_in(["text3"])],
    [fade_out(["text2"]), fade_in(["text4"])],

    [change_view(svg)],
    [change_view(followed)],
    [fade_in(["followed2"])],
    [fade_in(["followed3"])],

    [change_view(svg)],
    [change_view(floc)],
    [fade_in(["bubble3"])],
    [fade_in(["bubble4"])],

    [change_view(svg)],
    [change_view(cvc)],
    [fade_in(["cvc2"])],
    [fade_in(["cvc3"])],
    [fade_in(["smtguys"])],

    [change_view(svg)],
    [change_view(eia)],
    [fade_in(["eia1"])],
    [fade_in(["eia2"])],
    [fade_in(["eia3"])],
    [fade_in(["eia35"])],
    [fade_in(["eia4"])],
    [fade_in(["eia-def2"]), fade_out(["eia-def"])],
    [fade_in(["eia5"])],
    [fade_in(["eia6"])],

    [change_view(svg)],
    [change_view(pre)],
    [fade_in(["pre1", "pre-box"])],
    [fade_in(["pre2"])],
    [fade_in(["pre-ex-ul"])],
    [fade_in(["pre-ex"])],
    [fade_in(["pre3"])],

    [change_view(svg)],
    [change_view(alg)],
    [fade_in(["alg0"])],
    [fade_in(["alg1"])],
    [fade_in(["alg2"]), fade_out(["alg0"])],
    
    [change_view(svg), fade_out(["alg1", "alg2"], 0, 500, 1000)],
    [change_view(sym)],
    [fade_in(["symmetry1"])],
    [fade_in(["symmetry2"])],
    [fade_in(["symmetry3"])],

    [change_view(svg)],
    [change_view(alg)],
    [fade_in(["alg3"])],
    [fade_in(["alg4"])],

    [change_view(svg), fade_out(["alg3", "alg4"], 0, 500, 1000)],
    [change_view(mon)],
    [fade_in(["mon2"])],
    [fade_in(["mon3", "mon-box"])],
    [fade_in(["mon4"])],
    [fade_in(["mon5"]), fade_out(["mon4"])],
    [fade_in(["mon6"]), fade_out(["mon5"])],
    [fade_in(["mon7"]), fade_out(["mon6"])],

    [change_view(svg)],
    [change_view(alg)],
    [fade_in(["alg5"])],
    [fade_in(["alg6"])],
    
    [change_view(svg), fade_out(["alg5", "alg6"], 0, 500, 1000)],
    [change_view(bound)],
    [fade_in(["bound2"])],
    [fade_in(["bound3"])],
    [fade_in(["bounds"])],

    [change_view(svg)],
    [change_view(swine)],
    [fade_in(["swine1"])],

    [change_view(svg)],
    [change_view(interpol)],
    [fade_in(["interpol1"])],
    [fade_in(["interpol2"])],
    [fade_in(["interpol3"])],
    [fade_in(["diag1"])],
    [fade_in(["interpol4"])],
    [fade_in(["interpol5"])],
    [fade_out(["diag1"]), fade_in(["diag2"])],
    [fade_in(["interpol6"])],
    [fade_in(["interpol7"])],
    [fade_in(["interpol8"])],
    [fade_in(["interpol9"])],
    [fade_in(["interpol10"])],
    [fade_in(["interpol11"])],

    [change_view(svg)],
    [change_view(eval)],

    [change_view(svg)],
    [change_view(conclusion)],
    [fade_in(["conclusion1"])],
    [fade_in(["conclusion2"])],
    [fade_in(["conclusion3"])],
    [fade_in(["conclusion5"])],
    [fade_in(["conclusion6"])],
    [fade_in(["conclusion7"])],
    [fade_in(["conclusion8"])],
    [fade_in(["conclusion9"])],
    [fade_in(["conclusion10"])],
    [change_view(svg)],
];

// start the presentation
start(slides);
