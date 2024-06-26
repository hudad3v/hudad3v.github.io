/*!
 * mgGlitch : little jquery helper to glitch everything
 * (c) 2016 Hadrien Mongouachon
 * MIT Licensed.
 *
 * Author URI: http://hmongouachon.com
 * Plugin URI: http://hmongouachon.com
 * Date : 06/2016
 * Version: 1.0.0
 */
 !(function (t, e, s, i) {
    "use strict";
    function n(e, s) {
        (this.element = e), (this.settings = t.extend({}, a, s)), (this._defaults = a), (this._name = r), this.init();
    }
    var r = "mgGlitch",
        a = { destroy: !1, glitch: !0, scale: !0, blend: !0, blendModeType: "hue", glitch1TimeMin: 600, glitch1TimeMax: 900, glitch2TimeMin: 10, glitch2TimeMax: 115, zIndexStart: 5 };
    t.extend(n.prototype, {
        init: function () {
            this.glitch();
        },
        glitch: function () {
            function e(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t;
            }
            function s() {
                var i = e(10, 1900),
                    n = 9999,
                    a = e(10, 1300),
                    o = 0,
                    h = e(0, 16),
                    f = e(0, 16),
                    d = e(c, l);
                t(r).css({ clip: "rect(" + i + "px, " + n + "px, " + a + "px," + o + "px)", right: f, left: h }), setTimeout(s, d);
            }
            function i() {
                var s = e(10, 1900),
                    n = 9999,
                    c = e(10, 1300),
                    l = 0,
                    f = e(0, 40),
                    d = e(0, 40),
                    m = e(o, h);
                if (a === !0) var x = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
                else if (a === !1) var x = 1;
                t(r)
                    .next()
                    .css({ clip: "rect(" + s + "px, " + n + "px, " + c + "px," + l + "px)", left: f, right: d, "-webkit-transform": "scale(" + x + ")", "-ms-transform": "scale(" + x + ")", transform: "scale(" + x + ")" }),
                    setTimeout(i, m);
            }
            function n() {
                var s = e(10, 1900),
                    i = 9999,
                    c = e(10, 1300),
                    l = 0,
                    f = e(0, 40),
                    d = e(0, 40),
                    m = e(o, h);
                if (a === !0) var x = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
                else if (a === !1) var x = 1;
                t(r)
                    .next()
                    .next()
                    .css({ clip: "rect(" + s + "px, " + i + "px, " + c + "px," + l + "px)", left: f, right: d, "-webkit-transform": "scale(" + x + ")", "-ms-transform": "scale(" + x + ")", transform: "scale(" + x + ")" }),
                    setTimeout(n, m);
            }
            var r = this.element,
                a = this.settings.scale,
                c = this.settings.glitch1TimeMin,
                l = this.settings.glitch1TimeMax,
                o = this.settings.glitch2TimeMin,
                h = this.settings.glitch2TimeMax,
                f = this.settings.zIndexStart;
            if (this.settings.destroy === !0) (t(r).hasClass("el-front-1") || t(r).hasClass("front-3") || t(r).hasClass("front-2")) && t(".front-1, .front-2, .front-3").remove(), t(".back").removeClass("back");
            else if (this.settings.destroy === !1) {
                var d = t(r).clone();
                if ((d.insertBefore(r).addClass("back").css({ "z-index": f }), this.settings.blend === !0)) {
                    var d = t(r).clone();
                    d
                        .insertAfter(r)
                        .addClass("front-3")
                        .css({ "z-index": f + 3, "mix-blend-mode": this.settings.blendModeType }),
                        n();
                }
                if (this.settings.glitch === !0) {
                    var d = t(r).clone();
                    d
                        .insertAfter(r)
                        .addClass("front-2")
                        .css({ "z-index": f + 2 }),
                        t(".back")
                            .next()
                            .addClass("front-1")
                            .css({ "z-index": f + 1 }),
                        s(),
                        i();
                }
            }
        },
    }),
        (t.fn[r] = function (t) {
            return this.each(function () {
                new n(this, t);
            });
        });
})(jQuery, window, document);