var preji = new function() {

    class View {

        constructor(id) {
            this.id = id;
            this.scale = 1.1;
        }

        set_scale(scale) {
            this.scale = scale;
            return this;
        }

    }

    let {translate, fromObject, identity, compose, toSVG} = window.TransformationMatrix;

    class Move {

        constructor(elem, target_x, target_y) {
            this.elem = elem;
            this.target_x = target_x;
            this.target_y = target_y;
            var elem_pos = this.get_pos(elem);
            var target_x_pos = this.get_pos(target_x);
            var target_y_pos = this.get_pos(target_y);
            var dx = target_x_pos.x - elem_pos.x;
            var dy = target_y_pos.y - elem_pos.y;
            this.matrix = translate(dx, dy);
        }

        get_pos(id) {
            var node = util.get_node(id).node();
            var bbox = node.getBBox()
            var matrix = identity();
            for (const item of node.transform.baseVal) {
                matrix = compose(matrix, fromObject(item.matrix));
            }
            var pos = {x: (bbox.x + matrix.e) / matrix.a, y: (bbox.y + matrix.f) / matrix.d};
            return pos
        }

        exec() {
            if (this.back) {
                matrix = this.back;
            } else {
                var node = util.get_node(this.elem).node();
                var matrix = identity();
                for (const item of node.transform.baseVal) {
                    matrix = compose(matrix, fromObject(item.matrix));
                }
                this.back = matrix;
            }
            util.get_node(this.elem).transition().attr("transform", toSVG(compose(matrix, this.matrix))).duration(1000);
        }

        undo() {
            util.get_node(this.elem).transition().attr("transform", toSVG(this.back)).duration(1000);
        }

    }

    class ChangeView {

        constructor(view, delay, slowdown) {
            this.view = view;
            this.delay=delay;
            this.slowdown=slowdown;
        }

        exec() {
            global.svg.call(util.zoom(this.delay, this.slowdown), global.pos, this.pos);
            global.pos = this.pos;
        }

        undo() {
            global.svg.call(util.zoom(this.delay, this.slowdown), global.pos, this.old_pos);
            global.pos = this.old_pos;
        }

        compute_pos() {
            var bounding_rect = util.get_bounding_rect(this.view.id);
            var scale_factor = Math.min(
                global.svg_rect.width / (bounding_rect.width * this.view.scale),
                global.svg_rect.height / (bounding_rect.height * this.view.scale)
            );
            this.pos = [util.center_x(bounding_rect), util.center_y(bounding_rect), global.svg_rect.width / scale_factor];
        }

    }

    class Fade {

        constructor(ids, val, duration) {
            this.ids = ids;
            this.val = val;
            this.duration = duration;
        }

        exec() {
            if (!this.old_vals) {
                this.old_vals = {};
                for (const id of this.ids) {
                    var node = util.get_node(id);
                    var old_val = node.style("opacity");
                    this.old_vals[id] = old_val ? old_val : 1;
                }
            }
            for (const id of this.ids) {
                util.get_node(id).transition().duration(this.duration).style("opacity", this.val);
            }
        }

        undo() {
            for (const id of this.ids) {
                util.get_node(id).transition().duration(this.duration).style("opacity", this.old_vals[id]);
            }
        }

    }

    class Invert {

        constructor(action) {
            this.action = action;
        }

        exec() {
            this.action.undo();
        }

        undo() {
            this.action.exec();
        }

    }

    this.view = function(id) {
        return new View(id);
    }

    this.change_view = function(view, delay=250, slowdown=2) {
        return new ChangeView(view, delay, slowdown);
    }

    this.fade_in = function(ids, duration=500) {
        return new Fade(ids, val=1, duration=duration);
    }

    this.fade_out = function(ids, duration=500) {
        return new Fade(ids, val=0, duration=duration);
    }

    this.move = function(id, target) {
        return new Move(id, target, target);
    }

    this.align_vertically = function(id, ...others) {
        var res = [];
        for (const t of others) {
            res.push(new Move(t, t, id));
        }
        return res;
    }

    this.align_horizontally = function(id, ...others) {
        var res = [];
        for (const t of others) {
            res.push(new Move(t, id, t));
        }
        return res;
    }

    this.invert = function(action) {
        return new Invert(action);
    }

    var util = {

        get_node: function(id) {
            return d3.select("#" + id);
        },

        get_bounding_rect: function(id) {
            return util.get_node(id).node().getBoundingClientRect();
        },

        get_bbox: function(id) {
            return util.get_node(id).node().getBBox();
        },

        get_parent: function(node) {
            return node.select(function() {return this.parentNode});
        },

        center_x: function (bounding_rect) {
            return bounding_rect.x + (bounding_rect.width / 2);
        },

        center_y: function(bounding_rect) {
            return (bounding_rect.y) + (bounding_rect.height / 2);
        },

        zoom: function(delay, slowdown) {
            return function(svg, start, end) {
                var center = [global.svg_rect.width / 2, global.svg_rect.height / 2],
                    i = d3.interpolateZoom(start, end);

                svg
                    .attr("transform", transform(start))
                    .transition()
                    .delay(delay)
                    .duration(i.duration * slowdown)
                    .attrTween("transform", function() { return function(t) { return transform(i(t)); }; });

                function transform(p) {
                    var k = global.svg_rect.width / p[2];
                    return "translate(" + ((center[0] - p[0]) * k) + "," + ((center[1] - p[1]) * k) + ")" + "scale(" + k + ")";
                }
            }
        },

    }

    var global = {
        svg: util.get_node("svg"),
        svg_rect: util.get_bounding_rect("svg"),
        idx: -1,
    }
    global.pos = [util.center_x(global.svg_rect), util.center_y(global.svg_rect), global.svg_rect.width]

    this.start = function(slides) {

        function next() {
            if (global.idx < slides.length - 1) {
                global.idx++;
                for (const action of slides[global.idx]) {
                    action.exec();
                }
            }
        }

        function prev() {
            if (global.idx > 0) {
                for (var i = slides[global.idx].length - 1; i >= 0; i--) {
                    slides[global.idx][i].undo();
                }
                global.idx--;
            }
        }

        // compute position for change-view actions
        var old_pos = global.pos;
        for (const slide of slides) {
            for (const action of slide) {
                if (action instanceof ChangeView) {
                    action.compute_pos();
                    action.old_pos = old_pos;
                    old_pos = action.pos;
                }
            }
        }

        // go to initial slide
        next();

        // register event listener
        const Key_Left = 37;
        const Key_Up = 38;
        const Key_Right = 39;
        const Key_Down = 40;
        const Space = 32;
        const Return = 13;

        window.onclick = function(e) {
           if (e.button == 0) {
               next();
           }
        }

        window.onkeyup = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if (key == Key_Left || key == Key_Down) {
                prev();
            } else if (key == Key_Right || key == Key_Up || key == Space) {
                next();
            } else if (key == Return) {
                var event = new CustomEvent('toggle-logo', { })
                window.parent.document.dispatchEvent(event)
            }
        }

    }

};
