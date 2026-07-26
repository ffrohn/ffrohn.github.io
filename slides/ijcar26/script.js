let {view, move, fade_in, fade_out, toggle_logo, invert, change_view, start, align_vertically, align_horizontally, set_color, resize, focus} = window.preji;

// var title = view("title").set_scale(1.1);
var svg = view("svg");

var title = view("title").set_scale(1.2);
var intro_code = view("intro-code").set_scale(1.5);
var accel = view("accel").set_scale(1.4);
var ccode = view("ccode").set_scale(3);
var code = view("code").set_scale(3);
var update = view("update").set_scale(3);
var closed_1 = view("closed-1").set_scale(3);
var closed_2 = view("closed-2").set_scale(3);
var closed_3 = view("closed-3").set_scale(3);
var lval_def = view("lval-def").set_scale(3);
var lval_thm = view("lval-thm").set_scale(3);
var closed_quantifiers = view("closed-quantifiers").set_scale(1.3);
var notes = view("notes").set_scale(1.5)
var eval = view("eval").set_scale(1.4)
var questions = view("questions").set_scale(1.3)

var slides = [
    [
        fade_out([
            "eval",
            "ccode",
            "code",
            "accel",
            "accel-out",
            "runtime-1",
            "runtime-2",
            "recurrence-1",
            "recurrence-2",
            "intro-code",
            "intro-to-hornklaus",
            "intro-to-hornclauses",
            "intro-to-loat",
            "intro-to-abmc",
            "update",
            "closed-1",
            "closed-2",
            "closed-3",
            "inductive",
            "displacing",
            "lval-def",
            "lval-thm",
            "closed-quantifiers",
            "elim1",
            "elim2",
            "explain-closed-1",
            "explain-closed-2",
            "explain-closed-3",
            "explain-closed-4",
            "closed-final",
            "notes",
            "note1",
            "note2",
            "note3",
            "note4",
            "note5",
            "note6",
            "note7",
            "question1",
            "question2",
            "question3",
            "question4",
            "yes",
            "arr",
            "i1",
            "i2",
            "i3",
            "i4",
            "arr-final",
        ], duration=0),
        resize([
            "ccode",
            "code",
            "update",
            "closed-1",
            "closed-2",
            "closed-3",
            "lval-def",
            "lval-thm"], 0.5, duration=0),
    ],
    [change_view(title, duration=0)],
    [change_view(svg)],
    
    [change_view(intro_code), fade_in("intro-code")],
    [focus("intro-hornklaus"), fade_in("intro-to-hornklaus")],
    [focus("intro-hornclauses"), fade_in("intro-to-hornclauses")],
    [focus("intro-loat"), fade_in("intro-to-loat")],
    [focus("intro-abmc"), fade_in("intro-to-abmc")], 
    [change_view(svg)],

    [change_view(accel), fade_in("accel")],
    [fade_in("accel-out")],
    [set_color("runtime-lit", "red")],
    [fade_in("runtime-1")],
    [fade_in("runtime-2")],
    [set_color("runtime-lit", "black"), set_color("recurrence-lit", "red")],
    [fade_in("recurrence-1")],
    [fade_in("recurrence-2")],
    [change_view(svg)],
    
    [change_view(ccode), resize("arr", 2), resize("ccode", 2), fade_in("ccode")],
    [fade_in(["arr", "i1"])],
    [move("a0", "a1"), move("a1", "a0")],
    [move("i1", "i2")],
    [move("a0", "a2"), move("a2", "a0")],
    [move("i1", "i3")],
    [move("a0", "a3"), move("a3", "a0")],
    [move("i1", "i4"), move("a4", "a0"), move("a0", "a5"), move("a5", "a4")],
    [change_view(code, delay=0), resize("ccode", 0.5), resize("arr", 0.5), resize("code", 2), fade_in("code"), fade_out(["ccode", "arr"], val=0.5)],
    [change_view(update, delay=0), resize("code", 0.5), resize("ccode", 0.25), resize("arr", 0.25), resize("update", 2), fade_in("update"), fade_out("code", val=0.5)],
    [set_color("recurrence-i", "red")],
    [change_view(closed_1, delay=0), resize("update", 0.5), resize("code", 0.25), resize("closed-1", 2), fade_in("closed-1"), fade_out("update", val=0.5)],
    [set_color("recurrence-a-i", "red")],
    [fade_in("inductive")],
    [change_view(closed_2, delay=0), resize(["closed-1", "inductive"], 0.5), resize("update", 0.25), resize("closed-2", 2), fade_in("closed-2"), fade_out(["closed-1", "inductive"], val=0.5)],
    [set_color("recurrence-a-i-1", "red")],
    [fade_in("displacing")],
    [change_view(closed_3, delay=0), resize(["closed-2", "displacing"], 0.5), resize(["closed-1", "inductive"], 0.25), resize("closed-3", 2), fade_in("closed-3"), fade_out(["closed-2", "displacing"], val=0.5)],
    [change_view(lval_def, delay=0), resize("closed-3", 0.5), resize(["closed-2", "displacing"], 0.25), resize("lval-def", 2), fade_in("lval-def"), fade_out("closed-3", val=0.5)],
    [change_view(lval_thm, delay=0), resize("lval-def", 0.5), resize("closed-3", 0.25), resize("lval-thm", 2), fade_in("lval-thm"), fade_out("lval-def", val=0.5)],
    [change_view(svg)],

    [change_view(closed_quantifiers), fade_in("closed-quantifiers")],
    [fade_in("explain-closed-1")],
    [fade_in("explain-closed-2")],
    [fade_in("explain-closed-3")],
    [fade_in("explain-closed-4")],
    [fade_in("elim1")],
    [fade_in("elim2")],
    [fade_in("closed-final"), set_color("closed-final", "blue")],
    [fade_in("arr-final")],
    [set_color(["arr-final-case-1", "closed-case-1"], "red")],
    [set_color("arr-final-case-1", "black"), set_color("closed-case-1", "blue"), set_color(["arr-final-case-2", "closed-case-2"], "red")],
    [set_color("arr-final-case-2", "black"), set_color("closed-case-2", "blue"), set_color(["arr-final-case-3", "closed-case-3"], "red")],
    [change_view(svg)],

    [change_view(notes), fade_in("notes")],
    [fade_in("note1")],
    [fade_in("note2")],
    [fade_in("note3")],
    [fade_in("note4")],
    [fade_in("note5")],
    [fade_in("note6")],
    [fade_in("note7")],
    [change_view(svg)],

    [change_view(eval), fade_in("eval")],
    [change_view(svg)],
    
    [change_view(questions), fade_in("question1")],
    [fade_in("question2"), resize("question1", 0.5), fade_out("question1", 0.5)],
    [fade_in("question3"), resize(["question1", "question2"], 0.5), fade_out("question2", 0.5), fade_out("question1", 0.25)],
    [fade_in("question4"), resize(["question1", "question2", "question3"], 0.5), fade_out("question3", 0.5), fade_out("question2", 0.25), fade_out("question1", 0.125)],
    [fade_in("yes"), resize(["question1", "question2", "question3", "question4"], 0.5), fade_out("question4", 0.25), fade_out("question3", 0.125), fade_out("question2", 0.0625), fade_out("question1", 0.03125)],
    [change_view(svg)],
];

// start the presentation
start(slides);
