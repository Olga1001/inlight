"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e18) { throw _e18; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e19) { didErr = true; err = _e19; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).St = {});
}(void 0, function (t) {
  "use strict";

  var e = /*#__PURE__*/function () {
    function e(t, _e) {
      _classCallCheck(this, e);

      this.state = {
        angle: 0,
        area: [],
        position: {
          x: 0,
          y: 0
        },
        hardAngle: 0,
        hardDrawingAngle: 0
      }, this.createdDensity = _e, this.nowDrawingDensity = this.createdDensity, this.render = t;
    }

    _createClass(e, [{
      key: "setDensity",
      value: function setDensity(t) {
        this.createdDensity = t, this.nowDrawingDensity = t;
      }
    }, {
      key: "setDrawingDensity",
      value: function setDrawingDensity(t) {
        this.nowDrawingDensity = t;
      }
    }, {
      key: "setPosition",
      value: function setPosition(t) {
        this.state.position = t;
      }
    }, {
      key: "setAngle",
      value: function setAngle(t) {
        this.state.angle = t;
      }
    }, {
      key: "setArea",
      value: function setArea(t) {
        this.state.area = t;
      }
    }, {
      key: "setHardDrawingAngle",
      value: function setHardDrawingAngle(t) {
        this.state.hardDrawingAngle = t;
      }
    }, {
      key: "setHardAngle",
      value: function setHardAngle(t) {
        this.state.hardAngle = t, this.state.hardDrawingAngle = t;
      }
    }, {
      key: "setOrientation",
      value: function setOrientation(t) {
        this.orientation = t;
      }
    }, {
      key: "getDrawingDensity",
      value: function getDrawingDensity() {
        return this.nowDrawingDensity;
      }
    }, {
      key: "getDensity",
      value: function getDensity() {
        return this.createdDensity;
      }
    }, {
      key: "getHardAngle",
      value: function getHardAngle() {
        return this.state.hardAngle;
      }
    }]);

    return e;
  }();

  var i = /*#__PURE__*/function (_e2) {
    _inherits(i, _e2);

    var _super = _createSuper(i);

    function i(t, e, _i) {
      var _this;

      _classCallCheck(this, i);

      _this = _super.call(this, t, _i), _this.image = null, _this.isLoad = !1, _this.loadingAngle = 0, _this.image = new Image(), _this.image.src = e;
      return _this;
    }

    _createClass(i, [{
      key: "draw",
      value: function draw(t) {
        var e = this.render.getContext(),
            i = this.render.convertToGlobal(this.state.position),
            s = this.render.getRect().pageWidth,
            n = this.render.getRect().height;
        e.save(), e.translate(i.x, i.y), e.beginPath();

        var _iterator = _createForOfIteratorHelper(this.state.area),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _t = _step.value;
            null !== _t && (_t = this.render.convertToGlobal(_t), e.lineTo(_t.x - i.x, _t.y - i.y));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        e.rotate(this.state.angle), e.clip(), this.isLoad ? e.drawImage(this.image, 0, 0, s, n) : this.drawLoader(e, {
          x: 0,
          y: 0
        }, s, n), e.restore();
      }
    }, {
      key: "simpleDraw",
      value: function simpleDraw(t) {
        var e = this.render.getRect(),
            i = this.render.getContext(),
            s = e.pageWidth,
            n = e.height,
            h = 1 === t ? e.left + e.pageWidth : e.left,
            o = e.top;
        this.isLoad ? i.drawImage(this.image, h, o, s, n) : this.drawLoader(i, {
          x: h,
          y: o
        }, s, n);
      }
    }, {
      key: "drawLoader",
      value: function drawLoader(t, e, i, s) {
        t.beginPath(), t.strokeStyle = "rgb(200, 200, 200)", t.fillStyle = "rgb(255, 255, 255)", t.lineWidth = 1, t.rect(e.x + 1, e.y + 1, i - 1, s - 1), t.stroke(), t.fill();
        var n = {
          x: e.x + i / 2,
          y: e.y + s / 2
        };
        t.beginPath(), t.lineWidth = 10, t.arc(n.x, n.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), t.stroke(), t.closePath(), this.loadingAngle += .07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
      }
    }, {
      key: "load",
      value: function load() {
        var _this2 = this;

        this.isLoad || (this.image.onload = function () {
          _this2.isLoad = !0;
        });
      }
    }, {
      key: "newTemporaryCopy",
      value: function newTemporaryCopy() {
        return this;
      }
    }, {
      key: "getTemporaryCopy",
      value: function getTemporaryCopy() {
        return this;
      }
    }, {
      key: "hideTemporaryCopy",
      value: function hideTemporaryCopy() {}
    }]);

    return i;
  }(e);

  var s = /*#__PURE__*/function () {
    function s(t, e) {
      _classCallCheck(this, s);

      this.pages = [], this.currentPageIndex = 0, this.currentSpreadIndex = 0, this.landscapeSpread = [], this.portraitSpread = [], this.render = e, this.app = t, this.currentPageIndex = 0, this.isShowCover = this.app.getSettings().showCover;
    }

    _createClass(s, [{
      key: "destroy",
      value: function destroy() {
        this.pages = [];
      }
    }, {
      key: "createSpread",
      value: function createSpread() {
        this.landscapeSpread = [], this.portraitSpread = [];

        for (var _t2 = 0; _t2 < this.pages.length; _t2++) {
          this.portraitSpread.push([_t2]);
        }

        var t = 0;
        this.isShowCover && (this.pages[0].setDensity("hard"), this.landscapeSpread.push([t]), t++);

        for (var _e3 = t; _e3 < this.pages.length; _e3 += 2) {
          _e3 < this.pages.length - 1 ? this.landscapeSpread.push([_e3, _e3 + 1]) : (this.landscapeSpread.push([_e3]), this.pages[_e3].setDensity("hard"));
        }
      }
    }, {
      key: "getSpread",
      value: function getSpread() {
        return "landscape" === this.render.getOrientation() ? this.landscapeSpread : this.portraitSpread;
      }
    }, {
      key: "getSpreadIndexByPage",
      value: function getSpreadIndexByPage(t) {
        var e = this.getSpread();

        for (var _i2 = 0; _i2 < e.length; _i2++) {
          if (t === e[_i2][0] || t === e[_i2][1]) return _i2;
        }

        return null;
      }
    }, {
      key: "getPageCount",
      value: function getPageCount() {
        return this.pages.length;
      }
    }, {
      key: "getPages",
      value: function getPages() {
        return this.pages;
      }
    }, {
      key: "getPage",
      value: function getPage(t) {
        if (t >= 0 && t < this.pages.length) return this.pages[t];
        throw new Error("Invalid page number");
      }
    }, {
      key: "nextBy",
      value: function nextBy(t) {
        var e = this.pages.indexOf(t);
        return e < this.pages.length - 1 ? this.pages[e + 1] : null;
      }
    }, {
      key: "prevBy",
      value: function prevBy(t) {
        var e = this.pages.indexOf(t);
        return e > 0 ? this.pages[e - 1] : null;
      }
    }, {
      key: "getFlippingPage",
      value: function getFlippingPage(t) {
        var e = this.currentSpreadIndex;
        if ("portrait" === this.render.getOrientation()) return 0 === t ? this.pages[e].newTemporaryCopy() : this.pages[e - 1];
        {
          var _i3 = 0 === t ? this.getSpread()[e + 1] : this.getSpread()[e - 1];

          return 1 === _i3.length || 0 === t ? this.pages[_i3[0]] : this.pages[_i3[1]];
        }
      }
    }, {
      key: "getBottomPage",
      value: function getBottomPage(t) {
        var e = this.currentSpreadIndex;
        if ("portrait" === this.render.getOrientation()) return 0 === t ? this.pages[e + 1] : this.pages[e - 1];
        {
          var _i4 = 0 === t ? this.getSpread()[e + 1] : this.getSpread()[e - 1];

          return 1 === _i4.length ? this.pages[_i4[0]] : 0 === t ? this.pages[_i4[1]] : this.pages[_i4[0]];
        }
      }
    }, {
      key: "showNext",
      value: function showNext() {
        this.currentSpreadIndex < this.getSpread().length && (this.currentSpreadIndex++, this.showSpread());
      }
    }, {
      key: "showPrev",
      value: function showPrev() {
        this.currentSpreadIndex > 0 && (this.currentSpreadIndex--, this.showSpread());
      }
    }, {
      key: "getCurrentPageIndex",
      value: function getCurrentPageIndex() {
        return this.currentPageIndex;
      }
    }, {
      key: "show",
      value: function show() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (null === t && (t = this.currentPageIndex), t < 0 || t >= this.pages.length) return;
        var e = this.getSpreadIndexByPage(t);
        null !== e && (this.currentSpreadIndex = e, this.showSpread());
      }
    }, {
      key: "getCurrentSpreadIndex",
      value: function getCurrentSpreadIndex() {
        return this.currentSpreadIndex;
      }
    }, {
      key: "setCurrentSpreadIndex",
      value: function setCurrentSpreadIndex(t) {
        if (!(t >= 0 && t < this.getSpread().length)) throw new Error("Invalid page");
        this.currentSpreadIndex = t;
      }
    }, {
      key: "showSpread",
      value: function showSpread() {
        var t = this.getSpread()[this.currentSpreadIndex];
        2 === t.length ? (this.render.setLeftPage(this.pages[t[0]]), this.render.setRightPage(this.pages[t[1]])) : "landscape" === this.render.getOrientation() && t[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[t[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[t[0]])), this.currentPageIndex = t[0], this.app.updatePageIndex(this.currentPageIndex);
      }
    }]);

    return s;
  }();

  var n = /*#__PURE__*/function (_s) {
    _inherits(n, _s);

    var _super2 = _createSuper(n);

    function n(t, e, i) {
      var _this3;

      _classCallCheck(this, n);

      _this3 = _super2.call(this, t, e), _this3.imagesHref = i;
      return _this3;
    }

    _createClass(n, [{
      key: "load",
      value: function load() {
        var _iterator2 = _createForOfIteratorHelper(this.imagesHref),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t3 = _step2.value;

            var _e4 = new i(this.render, _t3, "soft");

            _e4.load(), this.pages.push(_e4);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.createSpread();
      }
    }]);

    return n;
  }(s);

  var h = /*#__PURE__*/function () {
    function h() {
      _classCallCheck(this, h);
    }

    _createClass(h, null, [{
      key: "GetDistanceBetweenTwoPoint",
      value: function GetDistanceBetweenTwoPoint(t, e) {
        return null === t || null === e ? 1 / 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
    }, {
      key: "GetSegmentLength",
      value: function GetSegmentLength(t) {
        return h.GetDistanceBetweenTwoPoint(t[0], t[1]);
      }
    }, {
      key: "GetAngleBetweenTwoLine",
      value: function GetAngleBetweenTwoLine(t, e) {
        var i = t[0].y - t[1].y,
            s = e[0].y - e[1].y,
            n = t[1].x - t[0].x,
            h = e[1].x - e[0].x;
        return Math.acos((i * s + n * h) / (Math.sqrt(i * i + n * n) * Math.sqrt(s * s + h * h)));
      }
    }, {
      key: "PointInRect",
      value: function PointInRect(t, e) {
        return null === e ? null : e.x >= t.left && e.x <= t.width + t.left && e.y >= t.top && e.y <= t.top + t.height ? e : null;
      }
    }, {
      key: "GetRotatedPoint",
      value: function GetRotatedPoint(t, e, i) {
        return {
          x: t.x * Math.cos(i) + t.y * Math.sin(i) + e.x,
          y: t.y * Math.cos(i) - t.x * Math.sin(i) + e.y
        };
      }
    }, {
      key: "LimitPointToCircle",
      value: function LimitPointToCircle(t, e, i) {
        if (h.GetDistanceBetweenTwoPoint(t, i) <= e) return i;
        var s = t.x,
            n = t.y,
            o = i.x,
            a = i.y;
        var r = Math.sqrt(Math.pow(e, 2) * Math.pow(s - o, 2) / (Math.pow(s - o, 2) + Math.pow(n - a, 2))) + s;
        i.x < 0 && (r *= -1);
        var g = (r - s) * (n - a) / (s - o) + n;
        return s - o + n === 0 && (g = e), {
          x: r,
          y: g
        };
      }
    }, {
      key: "GetIntersectBetweenTwoSegment",
      value: function GetIntersectBetweenTwoSegment(t, e, i) {
        return h.PointInRect(t, h.GetIntersectBeetwenTwoLine(e, i));
      }
    }, {
      key: "GetIntersectBeetwenTwoLine",
      value: function GetIntersectBeetwenTwoLine(t, e) {
        var i = t[0].y - t[1].y,
            s = e[0].y - e[1].y,
            n = t[1].x - t[0].x,
            h = e[1].x - e[0].x,
            o = t[0].x * t[1].y - t[1].x * t[0].y,
            a = e[0].x * e[1].y - e[1].x * e[0].y,
            r = i * a - s * o,
            g = n * a - h * o,
            l = -(o * h - a * n) / (i * h - s * n),
            d = -(i * a - s * o) / (i * h - s * n);
        if (isFinite(l) && isFinite(d)) return {
          x: l,
          y: d
        };
        if (Math.abs(r - g) < .1) throw new Error("Segment included");
        return null;
      }
    }, {
      key: "GetCordsFromTwoPoint",
      value: function GetCordsFromTwoPoint(t, e) {
        var i = Math.abs(t.x - e.x),
            s = Math.abs(t.y - e.y),
            n = Math.max(i, s),
            h = [t];

        function o(t, e, i, s, n) {
          return e > t ? t + n * (i / s) : e < t ? t - n * (i / s) : t;
        }

        for (var _a = 1; _a <= n; _a += 1) {
          h.push({
            x: o(t.x, e.x, i, n, _a),
            y: o(t.y, e.y, s, n, _a)
          });
        }

        return h;
      }
    }]);

    return h;
  }();

  var o = /*#__PURE__*/function (_e5) {
    _inherits(o, _e5);

    var _super3 = _createSuper(o);

    function o(t, e, i) {
      var _this4;

      _classCallCheck(this, o);

      _this4 = _super3.call(this, t, i), _this4.copiedElement = null, _this4.temporaryCopy = null, _this4.isLoad = !1, _this4.element = e, _this4.element.classList.add("stf__item"), _this4.element.classList.add("--" + i);
      return _this4;
    }

    _createClass(o, [{
      key: "newTemporaryCopy",
      value: function newTemporaryCopy() {
        return "hard" === this.nowDrawingDensity ? this : (null === this.temporaryCopy && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new o(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
      }
    }, {
      key: "getTemporaryCopy",
      value: function getTemporaryCopy() {
        return this.temporaryCopy;
      }
    }, {
      key: "hideTemporaryCopy",
      value: function hideTemporaryCopy() {
        null !== this.temporaryCopy && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
      }
    }, {
      key: "draw",
      value: function draw(t) {
        var e = t || this.nowDrawingDensity,
            i = this.render.convertToGlobal(this.state.position),
            s = this.render.getRect().pageWidth,
            n = this.render.getRect().height;
        this.element.classList.remove("--simple");
        var h = "\n            display: block;\n            z-index: ".concat(this.element.style.zIndex, ";\n            left: 0;\n            top: 0;\n            width: ").concat(s, "px;\n            height: ").concat(n, "px;\n        ");
        "hard" === e ? this.drawHard(h) : this.drawSoft(i, h);
      }
    }, {
      key: "drawHard",
      value: function drawHard() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var e = this.render.getRect().left + this.render.getRect().width / 2,
            i = this.state.hardDrawingAngle,
            s = t + "\n                backface-visibility: hidden;\n                -webkit-backface-visibility: hidden;\n                clip-path: none;\n                -webkit-clip-path: none;\n            " + (0 === this.orientation ? "transform-origin: ".concat(this.render.getRect().pageWidth, "px 0; \n                   transform: translate3d(0, 0, 0) rotateY(").concat(i, "deg);") : "transform-origin: 0 0; \n                   transform: translate3d(".concat(e, "px, 0, 0) rotateY(").concat(i, "deg);"));
        this.element.style.cssText = s;
      }
    }, {
      key: "drawSoft",
      value: function drawSoft(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = "polygon( ";

        var _iterator3 = _createForOfIteratorHelper(this.state.area),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t4 = _step3.value;

            if (null !== _t4) {
              var _e6 = 1 === this.render.getDirection() ? {
                x: -_t4.x + this.state.position.x,
                y: _t4.y - this.state.position.y
              } : {
                x: _t4.x - this.state.position.x,
                y: _t4.y - this.state.position.y
              };

              _e6 = h.GetRotatedPoint(_e6, {
                x: 0,
                y: 0
              }, this.state.angle), i += _e6.x + "px " + _e6.y + "px, ";
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        i = i.slice(0, -2), i += ")";
        var s = e + "transform-origin: 0 0; clip-path: ".concat(i, "; -webkit-clip-path: ").concat(i, ";") + (this.render.isSafari() && 0 === this.state.angle ? "transform: translate(".concat(t.x, "px, ").concat(t.y, "px);") : "transform: translate3d(".concat(t.x, "px, ").concat(t.y, "px, 0) rotate(").concat(this.state.angle, "rad);"));
        this.element.style.cssText = s;
      }
    }, {
      key: "simpleDraw",
      value: function simpleDraw(t) {
        var e = this.render.getRect(),
            i = e.pageWidth,
            s = e.height,
            n = 1 === t ? e.left + e.pageWidth : e.left,
            h = e.top;
        this.element.classList.add("--simple"), this.element.style.cssText = "\n            position: absolute; \n            display: block; \n            height: ".concat(s, "px; \n            left: ").concat(n, "px; \n            top: ").concat(h, "px; \n            width: ").concat(i, "px; \n            z-index: ").concat(this.render.getSettings().startZIndex + 1, ";");
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this.element;
      }
    }, {
      key: "load",
      value: function load() {
        this.isLoad = !0;
      }
    }, {
      key: "setOrientation",
      value: function setOrientation(t) {
        _get(_getPrototypeOf(o.prototype), "setOrientation", this).call(this, t), this.element.classList.remove("--left", "--right"), this.element.classList.add(1 === t ? "--right" : "--left");
      }
    }, {
      key: "setDrawingDensity",
      value: function setDrawingDensity(t) {
        this.element.classList.remove("--soft", "--hard"), this.element.classList.add("--" + t), _get(_getPrototypeOf(o.prototype), "setDrawingDensity", this).call(this, t);
      }
    }]);

    return o;
  }(e);

  var a = /*#__PURE__*/function (_s2) {
    _inherits(a, _s2);

    var _super4 = _createSuper(a);

    function a(t, e, i, s) {
      var _this5;

      _classCallCheck(this, a);

      _this5 = _super4.call(this, t, e), _this5.element = i, _this5.pagesElement = s;
      return _this5;
    }

    _createClass(a, [{
      key: "load",
      value: function load() {
        var _iterator4 = _createForOfIteratorHelper(this.pagesElement),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t5 = _step4.value;

            var _e7 = new o(this.render, _t5, "hard" === _t5.dataset.density ? "hard" : "soft");

            _e7.load(), this.pages.push(_e7);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        this.createSpread();
      }
    }]);

    return a;
  }(s);

  var r = /*#__PURE__*/function () {
    function r(t, e, i, s) {
      _classCallCheck(this, r);

      this.direction = t, this.corner = e, this.topIntersectPoint = null, this.sideIntersectPoint = null, this.bottomIntersectPoint = null, this.pageWidth = parseInt(i, 10), this.pageHeight = parseInt(s, 10);
    }

    _createClass(r, [{
      key: "calc",
      value: function calc(t) {
        try {
          return this.position = this.calcAngleAndPosition(t), this.calculateIntersectPoint(this.position), !0;
        } catch (t) {
          return !1;
        }
      }
    }, {
      key: "getFlippingClipArea",
      value: function getFlippingClipArea() {
        var t = [];
        var e = !1;
        return t.push(this.rect.topLeft), t.push(this.topIntersectPoint), null === this.sideIntersectPoint ? e = !0 : (t.push(this.sideIntersectPoint), null === this.bottomIntersectPoint && (e = !1)), t.push(this.bottomIntersectPoint), (e || "bottom" === this.corner) && t.push(this.rect.bottomLeft), t;
      }
    }, {
      key: "getBottomClipArea",
      value: function getBottomClipArea() {
        var t = [];
        return t.push(this.topIntersectPoint), "top" === this.corner ? t.push({
          x: this.pageWidth,
          y: 0
        }) : (null !== this.topIntersectPoint && t.push({
          x: this.pageWidth,
          y: 0
        }), t.push({
          x: this.pageWidth,
          y: this.pageHeight
        })), null !== this.sideIntersectPoint ? h.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && t.push(this.sideIntersectPoint) : "top" === this.corner && t.push({
          x: this.pageWidth,
          y: this.pageHeight
        }), t.push(this.bottomIntersectPoint), t.push(this.topIntersectPoint), t;
      }
    }, {
      key: "getAngle",
      value: function getAngle() {
        return 0 === this.direction ? -this.angle : this.angle;
      }
    }, {
      key: "getRect",
      value: function getRect() {
        return this.rect;
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.position;
      }
    }, {
      key: "getActiveCorner",
      value: function getActiveCorner() {
        return 0 === this.direction ? this.rect.topLeft : this.rect.topRight;
      }
    }, {
      key: "getDirection",
      value: function getDirection() {
        return this.direction;
      }
    }, {
      key: "getFlippingProgress",
      value: function getFlippingProgress() {
        return Math.abs((this.position.x - this.pageWidth) / (2 * this.pageWidth) * 100);
      }
    }, {
      key: "getCorner",
      value: function getCorner() {
        return this.corner;
      }
    }, {
      key: "getBottomPagePosition",
      value: function getBottomPagePosition() {
        return 1 === this.direction ? {
          x: this.pageWidth,
          y: 0
        } : {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "getShadowStartPoint",
      value: function getShadowStartPoint() {
        return "top" === this.corner ? this.topIntersectPoint : null !== this.sideIntersectPoint ? this.sideIntersectPoint : this.topIntersectPoint;
      }
    }, {
      key: "getShadowAngle",
      value: function getShadowAngle() {
        var t = h.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [{
          x: 0,
          y: 0
        }, {
          x: this.pageWidth,
          y: 0
        }]);
        return 0 === this.direction ? t : Math.PI - t;
      }
    }, {
      key: "calcAngleAndPosition",
      value: function calcAngleAndPosition(t) {
        var e = t;
        if (this.updateAngleAndGeometry(e), e = "top" === this.corner ? this.checkPositionAtCenterLine(e, {
          x: 0,
          y: 0
        }, {
          x: 0,
          y: this.pageHeight
        }) : this.checkPositionAtCenterLine(e, {
          x: 0,
          y: this.pageHeight
        }, {
          x: 0,
          y: 0
        }), Math.abs(e.x - this.pageWidth) < 1 && Math.abs(e.y) < 1) throw new Error("Point is too small");
        return e;
      }
    }, {
      key: "updateAngleAndGeometry",
      value: function updateAngleAndGeometry(t) {
        this.angle = this.calculateAngle(t), this.rect = this.getPageRect(t);
      }
    }, {
      key: "calculateAngle",
      value: function calculateAngle(t) {
        var e = this.pageWidth - t.x + 1,
            i = "bottom" === this.corner ? this.pageHeight - t.y : t.y;
        var s = 2 * Math.acos(e / Math.sqrt(i * i + e * e));
        i < 0 && (s = -s);
        var n = Math.PI - s;
        if (!isFinite(s) || n >= 0 && n < .003) throw new Error("The G point is too small");
        return "bottom" === this.corner && (s = -s), s;
      }
    }, {
      key: "getPageRect",
      value: function getPageRect(t) {
        return "top" === this.corner ? this.getRectFromBasePoint([{
          x: 0,
          y: 0
        }, {
          x: this.pageWidth,
          y: 0
        }, {
          x: 0,
          y: this.pageHeight
        }, {
          x: this.pageWidth,
          y: this.pageHeight
        }], t) : this.getRectFromBasePoint([{
          x: 0,
          y: -this.pageHeight
        }, {
          x: this.pageWidth,
          y: -this.pageHeight
        }, {
          x: 0,
          y: 0
        }, {
          x: this.pageWidth,
          y: 0
        }], t);
      }
    }, {
      key: "getRectFromBasePoint",
      value: function getRectFromBasePoint(t, e) {
        return {
          topLeft: this.getRotatedPoint(t[0], e),
          topRight: this.getRotatedPoint(t[1], e),
          bottomLeft: this.getRotatedPoint(t[2], e),
          bottomRight: this.getRotatedPoint(t[3], e)
        };
      }
    }, {
      key: "getRotatedPoint",
      value: function getRotatedPoint(t, e) {
        return {
          x: t.x * Math.cos(this.angle) + t.y * Math.sin(this.angle) + e.x,
          y: t.y * Math.cos(this.angle) - t.x * Math.sin(this.angle) + e.y
        };
      }
    }, {
      key: "calculateIntersectPoint",
      value: function calculateIntersectPoint(t) {
        var e = {
          left: -1,
          top: -1,
          width: this.pageWidth + 2,
          height: this.pageHeight + 2
        };
        "top" === this.corner ? (this.topIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [t, this.rect.topRight], [{
          x: 0,
          y: 0
        }, {
          x: this.pageWidth,
          y: 0
        }]), this.sideIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [t, this.rect.bottomLeft], [{
          x: this.pageWidth,
          y: 0
        }, {
          x: this.pageWidth,
          y: this.pageHeight
        }]), this.bottomIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [this.rect.bottomLeft, this.rect.bottomRight], [{
          x: 0,
          y: this.pageHeight
        }, {
          x: this.pageWidth,
          y: this.pageHeight
        }])) : (this.topIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [this.rect.topLeft, this.rect.topRight], [{
          x: 0,
          y: 0
        }, {
          x: this.pageWidth,
          y: 0
        }]), this.sideIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [t, this.rect.topLeft], [{
          x: this.pageWidth,
          y: 0
        }, {
          x: this.pageWidth,
          y: this.pageHeight
        }]), this.bottomIntersectPoint = h.GetIntersectBetweenTwoSegment(e, [this.rect.bottomLeft, this.rect.bottomRight], [{
          x: 0,
          y: this.pageHeight
        }, {
          x: this.pageWidth,
          y: this.pageHeight
        }]));
      }
    }, {
      key: "checkPositionAtCenterLine",
      value: function checkPositionAtCenterLine(t, e, i) {
        var s = t;
        var n = h.LimitPointToCircle(e, this.pageWidth, s);
        s !== n && (s = n, this.updateAngleAndGeometry(s));
        var o = Math.sqrt(Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2));
        var a = this.rect.bottomRight,
            r = this.rect.topLeft;

        if ("bottom" === this.corner && (a = this.rect.topRight, r = this.rect.bottomLeft), a.x <= 0) {
          var _t6 = h.LimitPointToCircle(i, o, r);

          _t6 !== s && (s = _t6, this.updateAngleAndGeometry(s));
        }

        return s;
      }
    }, {
      key: "getSegmentToShadowLine",
      value: function getSegmentToShadowLine() {
        var t = this.getShadowStartPoint();
        return [t, t !== this.sideIntersectPoint && null !== this.sideIntersectPoint ? this.sideIntersectPoint : this.bottomIntersectPoint];
      }
    }]);

    return r;
  }();

  var g = /*#__PURE__*/function () {
    function g(t, e) {
      _classCallCheck(this, g);

      this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = "read", this.render = t, this.app = e;
    }

    _createClass(g, [{
      key: "fold",
      value: function fold(t) {
        this.setState("user_fold"), null === this.calc && this.start(t), this["do"](this.render.convertToPage(t));
      }
    }, {
      key: "flip",
      value: function flip(t) {
        if (null !== this.calc && this.render.finishAnimation(), !this.start(t)) return;
        var e = this.getBoundsRect();
        this.setState("flipping");
        var i = e.height / 10,
            s = "bottom" === this.calc.getCorner() ? e.height - i : i,
            n = "bottom" === this.calc.getCorner() ? e.height : 0;
        this.calc.calc({
          x: e.pageWidth - i,
          y: s
        }), this.animateFlippingTo({
          x: e.pageWidth - i,
          y: s
        }, {
          x: -e.pageWidth,
          y: n
        }, !0);
      }
    }, {
      key: "start",
      value: function start(t) {
        this.reset();
        var e = this.render.convertToBook(t),
            i = this.getBoundsRect(),
            s = this.getDirectionByPoint(e),
            n = e.y >= i.height / 2 ? "bottom" : "top";
        if (!this.checkDirection(s)) return !1;

        try {
          if (this.flippingPage = this.app.getPageCollection().getFlippingPage(s), this.bottomPage = this.app.getPageCollection().getBottomPage(s), "landscape" === this.render.getOrientation()) if (1 === s) {
            var _t7 = this.app.getPageCollection().nextBy(this.flippingPage);

            null !== _t7 && this.flippingPage.getDensity() !== _t7.getDensity() && (this.flippingPage.setDrawingDensity("hard"), _t7.setDrawingDensity("hard"));
          } else {
            var _t8 = this.app.getPageCollection().prevBy(this.flippingPage);

            null !== _t8 && this.flippingPage.getDensity() !== _t8.getDensity() && (this.flippingPage.setDrawingDensity("hard"), _t8.setDrawingDensity("hard"));
          }
          return this.render.setDirection(s), this.calc = new r(s, n, i.pageWidth.toString(10), i.height.toString(10)), !0;
        } catch (t) {
          return !1;
        }
      }
    }, {
      key: "do",
      value: function _do(t) {
        if (null !== this.calc && this.calc.calc(t)) {
          var _t9 = this.calc.getFlippingProgress();

          this.bottomPage.setArea(this.calc.getBottomClipArea()), this.bottomPage.setPosition(this.calc.getBottomPagePosition()), this.bottomPage.setAngle(0), this.bottomPage.setHardAngle(0), this.flippingPage.setArea(this.calc.getFlippingClipArea()), this.flippingPage.setPosition(this.calc.getActiveCorner()), this.flippingPage.setAngle(this.calc.getAngle()), 0 === this.calc.getDirection() ? this.flippingPage.setHardAngle(90 * (200 - 2 * _t9) / 100) : this.flippingPage.setHardAngle(-90 * (200 - 2 * _t9) / 100), this.render.setPageRect(this.calc.getRect()), this.render.setBottomPage(this.bottomPage), this.render.setFlippingPage(this.flippingPage), this.render.setShadowData(this.calc.getShadowStartPoint(), this.calc.getShadowAngle(), _t9, this.calc.getDirection());
        }
      }
    }, {
      key: "flipToPage",
      value: function flipToPage(t, e) {
        var i = this.app.getPageCollection().getCurrentSpreadIndex(),
            s = this.app.getPageCollection().getSpreadIndexByPage(t);

        try {
          s > i && (this.app.getPageCollection().setCurrentSpreadIndex(s - 1), this.flipNext(e)), s < i && (this.app.getPageCollection().setCurrentSpreadIndex(s + 1), this.flipPrev(e));
        } catch (t) {}
      }
    }, {
      key: "flipNext",
      value: function flipNext(t) {
        this.flip({
          x: this.render.getRect().left + 2 * this.render.getRect().pageWidth,
          y: "top" === t ? 1 : this.render.getRect().height - 2
        });
      }
    }, {
      key: "flipPrev",
      value: function flipPrev(t) {
        this.flip({
          x: 10,
          y: "top" === t ? 1 : this.render.getRect().height - 2
        });
      }
    }, {
      key: "stopMove",
      value: function stopMove() {
        if (null === this.calc) return;
        var t = this.calc.getPosition(),
            e = this.getBoundsRect(),
            i = "bottom" === this.calc.getCorner() ? e.height : 0;
        t.x <= 0 ? this.animateFlippingTo(t, {
          x: -e.pageWidth,
          y: i
        }, !0) : this.animateFlippingTo(t, {
          x: e.pageWidth,
          y: i
        }, !1);
      }
    }, {
      key: "showCorner",
      value: function showCorner(t) {
        if (!this.checkState("read", "fold_corner")) return;
        var e = this.getBoundsRect(),
            i = e.pageWidth,
            s = Math.sqrt(Math.pow(i, 2) + Math.pow(e.height, 2)) / 5,
            n = this.render.convertToBook(t);
        if (n.x > 0 && n.y > 0 && n.x < e.width && n.y < e.height && (n.x < s || n.x > e.width - s) && (n.y < s || n.y > e.height - s)) {
          if (null === this.calc) {
            if (!this.start(t)) return;
            this.setState("fold_corner"), this.calc.calc({
              x: i - 1,
              y: 1
            });

            var _s3 = 50,
                _n = "bottom" === this.calc.getCorner() ? e.height - 1 : 1,
                _h = "bottom" === this.calc.getCorner() ? e.height - _s3 : _s3;

            this.animateFlippingTo({
              x: i - 1,
              y: _n
            }, {
              x: i - _s3,
              y: _h
            }, !1, !1);
          } else this["do"](this.render.convertToPage(t));
        } else this.setState("read"), this.render.finishAnimation(), this.stopMove();
      }
    }, {
      key: "animateFlippingTo",
      value: function animateFlippingTo(t, e, i) {
        var _this6 = this;

        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var n = h.GetCordsFromTwoPoint(t, e),
            o = [];

        var _iterator5 = _createForOfIteratorHelper(n),
            _step5;

        try {
          var _loop = function _loop() {
            var t = _step5.value;
            o.push(function () {
              return _this6["do"](t);
            });
          };

          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        var a = this.getAnimationDuration(n.length);
        this.render.startAnimation(o, a, function () {
          _this6.calc && (i && (1 === _this6.calc.getDirection() ? _this6.app.turnToPrevPage() : _this6.app.turnToNextPage()), s && (_this6.render.setBottomPage(null), _this6.render.setFlippingPage(null), _this6.render.clearShadow(), _this6.setState("read"), _this6.reset()));
        });
      }
    }, {
      key: "getCalculation",
      value: function getCalculation() {
        return this.calc;
      }
    }, {
      key: "getState",
      value: function getState() {
        return this.state;
      }
    }, {
      key: "setState",
      value: function setState(t) {
        this.state !== t && (this.app.updateState(t), this.state = t);
      }
    }, {
      key: "getDirectionByPoint",
      value: function getDirectionByPoint(t) {
        var e = this.getBoundsRect();

        if ("portrait" === this.render.getOrientation()) {
          if (t.x - e.pageWidth <= e.width / 5) return 1;
        } else if (t.x < e.width / 2) return 1;

        return 0;
      }
    }, {
      key: "getAnimationDuration",
      value: function getAnimationDuration(t) {
        var e = this.app.getSettings().flippingTime;
        return t >= 1e3 ? e : t / 1e3 * e;
      }
    }, {
      key: "checkDirection",
      value: function checkDirection(t) {
        return 0 === t ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1 : this.app.getCurrentPageIndex() >= 1;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.calc = null, this.flippingPage = null, this.bottomPage = null;
      }
    }, {
      key: "getBoundsRect",
      value: function getBoundsRect() {
        return this.render.getRect();
      }
    }, {
      key: "checkState",
      value: function checkState() {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        for (var _i5 = 0, _t10 = t; _i5 < _t10.length; _i5++) {
          var _e8 = _t10[_i5];
          if (this.state === _e8) return !0;
        }

        return !1;
      }
    }]);

    return g;
  }();

  var l = /*#__PURE__*/function () {
    function l(t, e) {
      _classCallCheck(this, l);

      this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = !1, this.setting = e, this.app = t;
      var i = new RegExp("Version\\/[\\d\\.]+.*Safari/");
      this.safari = null !== i.exec(window.navigator.userAgent);
    }

    _createClass(l, [{
      key: "render",
      value: function render(t) {
        if (null !== this.animation) {
          var _e9 = Math.round((t - this.animation.startedAt) / this.animation.durationFrame);

          _e9 < this.animation.frames.length ? this.animation.frames[_e9]() : (this.animation.onAnimateEnd(), this.animation = null);
        }

        this.timer = t, this.drawFrame();
      }
    }, {
      key: "start",
      value: function start() {
        var _this7 = this;

        this.update();

        var t = function t(e) {
          _this7.render(e), requestAnimationFrame(t);
        };

        requestAnimationFrame(t);
      }
    }, {
      key: "startAnimation",
      value: function startAnimation(t, e, i) {
        this.finishAnimation(), this.animation = {
          frames: t,
          duration: e,
          durationFrame: e / t.length,
          onAnimateEnd: i,
          startedAt: this.timer
        };
      }
    }, {
      key: "finishAnimation",
      value: function finishAnimation() {
        null !== this.animation && (this.animation.frames[this.animation.frames.length - 1](), null !== this.animation.onAnimateEnd && this.animation.onAnimateEnd()), this.animation = null;
      }
    }, {
      key: "update",
      value: function update() {
        this.boundsRect = null;
        var t = this.calculateBoundsRect();
        this.orientation !== t && (this.orientation = t, this.app.updateOrientation(t));
      }
    }, {
      key: "calculateBoundsRect",
      value: function calculateBoundsRect() {
        var t = "landscape";
        var e = this.getBlockWidth(),
            i = e / 2,
            s = this.getBlockHeight() / 2,
            n = this.setting.width / this.setting.height;
        var h = this.setting.width,
            o = this.setting.height,
            a = i - h;
        return "stretch" === this.setting.size ? (e < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (t = "portrait"), h = "portrait" === t ? this.getBlockWidth() : this.getBlockWidth() / 2, h > this.setting.maxWidth && (h = this.setting.maxWidth), o = h / n, o > this.getBlockHeight() && (o = this.getBlockHeight(), h = o * n), a = "portrait" === t ? i - h / 2 - h : i - h) : e < 2 * h && this.app.getSettings().usePortrait && (t = "portrait", a = i - h / 2 - h), this.boundsRect = {
          left: a,
          top: s - o / 2,
          width: 2 * h,
          height: o,
          pageWidth: h
        }, t;
      }
    }, {
      key: "setShadowData",
      value: function setShadowData(t, e, i, s) {
        if (!this.app.getSettings().drawShadow) return;
        var n = 100 * this.getSettings().maxShadowOpacity;
        this.shadow = {
          pos: t,
          angle: e,
          width: 3 * this.getRect().pageWidth / 4 * i / 100,
          opacity: (100 - i) * n / 100 / 100,
          direction: s,
          progress: 2 * i
        };
      }
    }, {
      key: "clearShadow",
      value: function clearShadow() {
        this.shadow = null;
      }
    }, {
      key: "getBlockWidth",
      value: function getBlockWidth() {
        return this.app.getUI().getDistElement().offsetWidth;
      }
    }, {
      key: "getBlockHeight",
      value: function getBlockHeight() {
        return this.app.getUI().getDistElement().offsetHeight;
      }
    }, {
      key: "getDirection",
      value: function getDirection() {
        return this.direction;
      }
    }, {
      key: "getRect",
      value: function getRect() {
        return null === this.boundsRect && this.calculateBoundsRect(), this.boundsRect;
      }
    }, {
      key: "getSettings",
      value: function getSettings() {
        return this.app.getSettings();
      }
    }, {
      key: "getOrientation",
      value: function getOrientation() {
        return this.orientation;
      }
    }, {
      key: "setPageRect",
      value: function setPageRect(t) {
        this.pageRect = t;
      }
    }, {
      key: "setDirection",
      value: function setDirection(t) {
        this.direction = t;
      }
    }, {
      key: "setRightPage",
      value: function setRightPage(t) {
        null !== t && t.setOrientation(1), this.rightPage = t;
      }
    }, {
      key: "setLeftPage",
      value: function setLeftPage(t) {
        null !== t && t.setOrientation(0), this.leftPage = t;
      }
    }, {
      key: "setBottomPage",
      value: function setBottomPage(t) {
        null !== t && t.setOrientation(1 === this.direction ? 0 : 1), this.bottomPage = t;
      }
    }, {
      key: "setFlippingPage",
      value: function setFlippingPage(t) {
        null !== t && t.setOrientation(0 === this.direction && "portrait" !== this.orientation ? 0 : 1), this.flippingPage = t;
      }
    }, {
      key: "convertToBook",
      value: function convertToBook(t) {
        var e = this.getRect();
        return {
          x: t.x - e.left,
          y: t.y - e.top
        };
      }
    }, {
      key: "isSafari",
      value: function isSafari() {
        return this.safari;
      }
    }, {
      key: "convertToPage",
      value: function convertToPage(t, e) {
        e || (e = this.direction);
        var i = this.getRect();
        return {
          x: 0 === e ? t.x - i.left - i.width / 2 : i.width / 2 - t.x + i.left,
          y: t.y - i.top
        };
      }
    }, {
      key: "convertToGlobal",
      value: function convertToGlobal(t, e) {
        if (e || (e = this.direction), null == t) return null;
        var i = this.getRect();
        return {
          x: 0 === e ? t.x + i.left + i.width / 2 : i.width / 2 - t.x + i.left,
          y: t.y + i.top
        };
      }
    }, {
      key: "convertRectToGlobal",
      value: function convertRectToGlobal(t, e) {
        return e || (e = this.direction), {
          topLeft: this.convertToGlobal(t.topLeft, e),
          topRight: this.convertToGlobal(t.topRight, e),
          bottomLeft: this.convertToGlobal(t.bottomLeft, e),
          bottomRight: this.convertToGlobal(t.bottomRight, e)
        };
      }
    }]);

    return l;
  }();

  var d = /*#__PURE__*/function (_l) {
    _inherits(d, _l);

    var _super5 = _createSuper(d);

    function d(t, e, i) {
      var _this8;

      _classCallCheck(this, d);

      _this8 = _super5.call(this, t, e), _this8.canvas = i, _this8.ctx = i.getContext("2d");
      return _this8;
    }

    _createClass(d, [{
      key: "getContext",
      value: function getContext() {
        return this.ctx;
      }
    }, {
      key: "drawFrame",
      value: function drawFrame() {
        this.clear(), "portrait" !== this.orientation && null != this.leftPage && this.leftPage.simpleDraw(0), null != this.rightPage && this.rightPage.simpleDraw(1), null != this.bottomPage && this.bottomPage.draw(), this.drawBookShadow(), null != this.flippingPage && this.flippingPage.draw(), null != this.shadow && (this.drawOuterShadow(), this.drawInnerShadow());
        var t = this.getRect();
        "portrait" === this.orientation && (this.ctx.beginPath(), this.ctx.rect(t.left + t.pageWidth, t.top, t.width, t.height), this.ctx.clip());
      }
    }, {
      key: "drawBookShadow",
      value: function drawBookShadow() {
        var t = this.getRect();
        this.ctx.save(), this.ctx.beginPath();
        var e = t.width / 20;
        this.ctx.rect(t.left, t.top, t.width, t.height);
        var i = {
          x: t.left + t.width / 2 - e / 2,
          y: 0
        };
        this.ctx.translate(i.x, i.y);
        var s = this.ctx.createLinearGradient(0, 0, e, 0);
        s.addColorStop(0, "rgba(0, 0, 0, 0)"), s.addColorStop(.4, "rgba(0, 0, 0, 0.2)"), s.addColorStop(.49, "rgba(0, 0, 0, 0.1)"), s.addColorStop(.5, "rgba(0, 0, 0, 0.5)"), s.addColorStop(.51, "rgba(0, 0, 0, 0.4)"), s.addColorStop(1, "rgba(0, 0, 0, 0)"), this.ctx.clip(), this.ctx.fillStyle = s, this.ctx.fillRect(0, 0, e, 2 * t.height), this.ctx.restore();
      }
    }, {
      key: "drawOuterShadow",
      value: function drawOuterShadow() {
        var t = this.getRect();
        this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(t.left, t.top, t.width, t.height);
        var e = this.convertToGlobal({
          x: this.shadow.pos.x,
          y: this.shadow.pos.y
        });
        this.ctx.translate(e.x, e.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
        var i = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
        0 === this.shadow.direction ? (this.ctx.translate(0, -100), i.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), i.addColorStop(1, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(-this.shadow.width, -100), i.addColorStop(0, "rgba(0, 0, 0, 0)"), i.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")")), this.ctx.clip(), this.ctx.fillStyle = i, this.ctx.fillRect(0, 0, this.shadow.width, 2 * t.height), this.ctx.restore();
      }
    }, {
      key: "drawInnerShadow",
      value: function drawInnerShadow() {
        var t = this.getRect();
        this.ctx.save(), this.ctx.beginPath();
        var e = this.convertToGlobal({
          x: this.shadow.pos.x,
          y: this.shadow.pos.y
        }),
            i = this.convertRectToGlobal(this.pageRect);
        this.ctx.moveTo(i.topLeft.x, i.topLeft.y), this.ctx.lineTo(i.topRight.x, i.topRight.y), this.ctx.lineTo(i.bottomRight.x, i.bottomRight.y), this.ctx.lineTo(i.bottomLeft.x, i.bottomLeft.y), this.ctx.translate(e.x, e.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
        var s = 3 * this.shadow.width / 4,
            n = this.ctx.createLinearGradient(0, 0, s, 0);
        0 === this.shadow.direction ? (this.ctx.translate(-s, -100), n.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(.9, "rgba(0, 0, 0, 0.05)"), n.addColorStop(.7, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(0, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(0, -100), n.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(.1, "rgba(0, 0, 0, 0.05)"), n.addColorStop(.3, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n.addColorStop(1, "rgba(0, 0, 0, 0)")), this.ctx.clip(), this.ctx.fillStyle = n, this.ctx.fillRect(0, 0, s, 2 * t.height), this.ctx.restore();
      }
    }, {
      key: "clear",
      value: function clear() {
        this.ctx.fillStyle = "white", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }]);

    return d;
  }(l);

  var p = /*#__PURE__*/function () {
    function p(t, e, i) {
      var _this9 = this;

      _classCallCheck(this, p);

      this.touchPoint = null, this.swipeTimeout = 250, this.onResize = function () {
        _this9.update();
      }, this.onMouseDown = function (t) {
        if (_this9.checkTarget(t.target)) {
          var _e10 = _this9.getMousePos(t.clientX, t.clientY);

          _this9.app.startUserTouch(_e10), t.preventDefault();
        }
      }, this.onTouchStart = function (t) {
        if (_this9.checkTarget(t.target) && t.changedTouches.length > 0) {
          var _e11 = t.changedTouches[0],
              _i6 = _this9.getMousePos(_e11.clientX, _e11.clientY);

          _this9.touchPoint = {
            point: _i6,
            time: Date.now()
          }, setTimeout(function () {
            null !== _this9.touchPoint && _this9.app.startUserTouch(_i6);
          }, _this9.swipeTimeout), _this9.app.getSettings().mobileScrollSupport || t.preventDefault();
        }
      }, this.onMouseUp = function (t) {
        var e = _this9.getMousePos(t.clientX, t.clientY);

        _this9.app.userStop(e);
      }, this.onMouseMove = function (t) {
        var e = _this9.getMousePos(t.clientX, t.clientY);

        _this9.app.userMove(e, !1);
      }, this.onTouchMove = function (t) {
        if (t.changedTouches.length > 0) {
          var _e12 = t.changedTouches[0],
              _i7 = _this9.getMousePos(_e12.clientX, _e12.clientY);

          _this9.app.getSettings().mobileScrollSupport ? (null !== _this9.touchPoint && (Math.abs(_this9.touchPoint.point.x - _i7.x) > 10 || "read" !== _this9.app.getState()) && t.cancelable && _this9.app.userMove(_i7, !0), "read" !== _this9.app.getState() && t.preventDefault()) : _this9.app.userMove(_i7, !0);
        }
      }, this.onTouchEnd = function (t) {
        if (t.changedTouches.length > 0) {
          var _e13 = t.changedTouches[0],
              _i8 = _this9.getMousePos(_e13.clientX, _e13.clientY);

          var _s4 = !1;

          if (null !== _this9.touchPoint) {
            var _t11 = _i8.x - _this9.touchPoint.point.x,
                _e14 = Math.abs(_i8.y - _this9.touchPoint.point.y);

            Math.abs(_t11) > _this9.swipeDistance && _e14 < 2 * _this9.swipeDistance && Date.now() - _this9.touchPoint.time < _this9.swipeTimeout && (_t11 > 0 ? _this9.app.flipPrev(_this9.touchPoint.point.y < _this9.app.getRender().getRect().height / 2 ? "top" : "bottom") : _this9.app.flipNext(_this9.touchPoint.point.y < _this9.app.getRender().getRect().height / 2 ? "top" : "bottom"), _s4 = !0), _this9.touchPoint = null;
          }

          _this9.app.userStop(_i8, _s4);
        }
      }, t.classList.add("stf__parent"), t.insertAdjacentHTML("afterbegin", '<div class="stf__wrapper"></div>'), this.wrapper = t.querySelector(".stf__wrapper"), this.app = e;
      var s = this.app.getSettings().usePortrait ? 1 : 2;
      t.style.minWidth = i.minWidth * s + "px", t.style.minHeight = i.minHeight + "px", "fixed" === i.size && (t.style.minWidth = i.width * s + "px", t.style.minHeight = i.height + "px"), i.autoSize && (t.style.width = "100%", t.style.maxWidth = 2 * i.maxWidth + "px"), t.style.display = "block", window.addEventListener("resize", this.onResize, !1), this.swipeDistance = i.swipeDistance;
    }

    _createClass(p, [{
      key: "destroy",
      value: function destroy() {
        this.app.getSettings().useMouseEvents && this.removeHandlers(), this.distElement.remove(), this.wrapper.remove();
      }
    }, {
      key: "getDistElement",
      value: function getDistElement() {
        return this.distElement;
      }
    }, {
      key: "getWrapper",
      value: function getWrapper() {
        return this.wrapper;
      }
    }, {
      key: "setOrientationStyle",
      value: function setOrientationStyle(t) {
        this.wrapper.classList.remove("--portrait", "--landscape"), "portrait" === t ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / this.app.getSettings().width * 100 + "%"), this.wrapper.classList.add("--portrait")) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / (2 * this.app.getSettings().width) * 100 + "%"), this.wrapper.classList.add("--landscape")), this.update();
      }
    }, {
      key: "removeHandlers",
      value: function removeHandlers() {
        window.removeEventListener("resize", this.onResize), this.distElement.removeEventListener("mousedown", this.onMouseDown), this.distElement.removeEventListener("touchstart", this.onTouchStart), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("touchend", this.onTouchEnd);
      }
    }, {
      key: "setHandlers",
      value: function setHandlers() {
        this.app.getSettings().useMouseEvents && (this.distElement.addEventListener("mousedown", this.onMouseDown), this.distElement.addEventListener("touchstart", this.onTouchStart), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, {
          passive: !this.app.getSettings().mobileScrollSupport
        }), window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("touchend", this.onTouchEnd));
      }
    }, {
      key: "getMousePos",
      value: function getMousePos(t, e) {
        var i = this.distElement.getBoundingClientRect();
        return {
          x: t - i.left,
          y: e - i.top
        };
      }
    }, {
      key: "checkTarget",
      value: function checkTarget(t) {
        return !this.app.getSettings().clickEventForward || !["a", "button"].includes(t.tagName.toLowerCase());
      }
    }]);

    return p;
  }();

  var c = /*#__PURE__*/function (_p) {
    _inherits(c, _p);

    var _super6 = _createSuper(c);

    function c(t, e, i, s) {
      var _this10;

      _classCallCheck(this, c);

      _this10 = _super6.call(this, t, e, i), _this10.wrapper.insertAdjacentHTML("afterbegin", '<div class="stf__block"></div>'), _this10.distElement = t.querySelector(".stf__block");

      var _iterator6 = _createForOfIteratorHelper(s),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t12 = _step6.value;

          _this10.distElement.appendChild(_t12);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      _this10.setHandlers();

      return _this10;
    }

    _createClass(c, [{
      key: "updateItems",
      value: function updateItems(t) {
        this.removeHandlers(), this.distElement.innerHTML = "";

        var _iterator7 = _createForOfIteratorHelper(t),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _e15 = _step7.value;
            this.distElement.appendChild(_e15);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        this.setHandlers();
      }
    }, {
      key: "update",
      value: function update() {
        this.app.getRender().update();
      }
    }]);

    return c;
  }(p);

  var u = /*#__PURE__*/function (_p2) {
    _inherits(u, _p2);

    var _super7 = _createSuper(u);

    function u(t, e, i) {
      var _this11;

      _classCallCheck(this, u);

      _this11 = _super7.call(this, t, e, i), _this11.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', _this11.canvas = t.querySelectorAll("canvas")[0], _this11.distElement = _this11.canvas, _this11.resizeCanvas(), _this11.setHandlers();
      return _this11;
    }

    _createClass(u, [{
      key: "resizeCanvas",
      value: function resizeCanvas() {
        var t = getComputedStyle(this.canvas),
            e = parseInt(t.getPropertyValue("width"), 10),
            i = parseInt(t.getPropertyValue("height"), 10);
        this.canvas.width = e, this.canvas.height = i;
      }
    }, {
      key: "getCanvas",
      value: function getCanvas() {
        return this.canvas;
      }
    }, {
      key: "update",
      value: function update() {
        this.resizeCanvas(), this.app.getRender().update();
      }
    }]);

    return u;
  }(p);

  var w = /*#__PURE__*/function (_l2) {
    _inherits(w, _l2);

    var _super8 = _createSuper(w);

    function w(t, e, i) {
      var _this12;

      _classCallCheck(this, w);

      _this12 = _super8.call(this, t, e), _this12.outerShadow = null, _this12.innerShadow = null, _this12.hardShadow = null, _this12.hardInnerShadow = null, _this12.element = i, _this12.createShadows();
      return _this12;
    }

    _createClass(w, [{
      key: "createShadows",
      value: function createShadows() {
        this.element.insertAdjacentHTML("beforeend", '<div class="stf__outerShadow"></div>\n             <div class="stf__innerShadow"></div>\n             <div class="stf__hardShadow"></div>\n             <div class="stf__hardInnerShadow"></div>'), this.outerShadow = this.element.querySelector(".stf__outerShadow"), this.innerShadow = this.element.querySelector(".stf__innerShadow"), this.hardShadow = this.element.querySelector(".stf__hardShadow"), this.hardInnerShadow = this.element.querySelector(".stf__hardInnerShadow");
      }
    }, {
      key: "clearShadow",
      value: function clearShadow() {
        _get(_getPrototypeOf(w.prototype), "clearShadow", this).call(this), this.outerShadow.style.cssText = "display: none", this.innerShadow.style.cssText = "display: none", this.hardShadow.style.cssText = "display: none", this.hardInnerShadow.style.cssText = "display: none";
      }
    }, {
      key: "drawHardInnerShadow",
      value: function drawHardInnerShadow() {
        var t = this.getRect(),
            e = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
        var i = (100 - e) * (2.5 * t.pageWidth) / 100 + 20;
        i > t.pageWidth && (i = t.pageWidth);
        var s = "\n            display: block;\n            z-index: ".concat((this.getSettings().startZIndex + 5).toString(10), ";\n            width: ").concat(i, "px;\n            height: ").concat(t.height, "px;\n            background: linear-gradient(to right,\n                rgba(0, 0, 0, ").concat(this.shadow.opacity * e / 100, ") 5%,\n                rgba(0, 0, 0, 0) 100%);\n            left: ").concat(t.left + t.width / 2, "px;\n            transform-origin: 0 0;\n        ");
        s += 0 === this.getDirection() && this.shadow.progress > 100 || 1 === this.getDirection() && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0);" : "transform: translate3d(0, 0, 0) rotateY(180deg);", this.hardInnerShadow.style.cssText = s;
      }
    }, {
      key: "drawHardOuterShadow",
      value: function drawHardOuterShadow() {
        var t = this.getRect();
        var e = (100 - (this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress)) * (2.5 * t.pageWidth) / 100 + 20;
        e > t.pageWidth && (e = t.pageWidth);
        var i = "\n            display: block;\n            z-index: ".concat((this.getSettings().startZIndex + 4).toString(10), ";\n            width: ").concat(e, "px;\n            height: ").concat(t.height, "px;\n            background: linear-gradient(to left, rgba(0, 0, 0, ").concat(this.shadow.opacity, ") 5%, rgba(0, 0, 0, 0) 100%);\n            left: ").concat(t.left + t.width / 2, "px;\n            transform-origin: 0 0;\n        ");
        i += 0 === this.getDirection() && this.shadow.progress > 100 || 1 === this.getDirection() && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0) rotateY(180deg);" : "transform: translate3d(0, 0, 0);", this.hardShadow.style.cssText = i;
      }
    }, {
      key: "drawInnerShadow",
      value: function drawInnerShadow() {
        var t = this.getRect(),
            e = 3 * this.shadow.width / 4,
            i = 0 === this.getDirection() ? e : 0,
            s = 0 === this.getDirection() ? "to left" : "to right",
            n = this.convertToGlobal(this.shadow.pos),
            o = this.shadow.angle + 3 * Math.PI / 2,
            a = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
        var r = "polygon( ";

        for (var _i9 = 0, _a2 = a; _i9 < _a2.length; _i9++) {
          var _t13 = _a2[_i9];

          var _e16 = 1 === this.getDirection() ? {
            x: -_t13.x + this.shadow.pos.x,
            y: _t13.y - this.shadow.pos.y
          } : {
            x: _t13.x - this.shadow.pos.x,
            y: _t13.y - this.shadow.pos.y
          };

          _e16 = h.GetRotatedPoint(_e16, {
            x: i,
            y: 100
          }, o), r += _e16.x + "px " + _e16.y + "px, ";
        }

        r = r.slice(0, -2), r += ")";
        var g = "\n            display: block;\n            z-index: ".concat((this.getSettings().startZIndex + 10).toString(10), ";\n            width: ").concat(e, "px;\n            height: ").concat(2 * t.height, "px;\n            background: linear-gradient(").concat(s, ",\n                rgba(0, 0, 0, ").concat(this.shadow.opacity, ") 5%,\n                rgba(0, 0, 0, 0.05) 15%,\n                rgba(0, 0, 0, ").concat(this.shadow.opacity, ") 35%,\n                rgba(0, 0, 0, 0) 100%);\n            transform-origin: ").concat(i, "px 100px;\n            transform: translate3d(").concat(n.x - i, "px, ").concat(n.y - 100, "px, 0) rotate(").concat(o, "rad);\n            clip-path: ").concat(r, ";\n            -webkit-clip-path: ").concat(r, ";\n        ");
        this.innerShadow.style.cssText = g;
      }
    }, {
      key: "drawOuterShadow",
      value: function drawOuterShadow() {
        var t = this.getRect(),
            e = this.convertToGlobal({
          x: this.shadow.pos.x,
          y: this.shadow.pos.y
        }),
            i = this.shadow.angle + 3 * Math.PI / 2,
            s = 1 === this.getDirection() ? this.shadow.width : 0,
            n = 0 === this.getDirection() ? "to right" : "to left",
            o = [{
          x: 0,
          y: 0
        }, {
          x: t.pageWidth,
          y: 0
        }, {
          x: t.pageWidth,
          y: t.height
        }, {
          x: 0,
          y: t.height
        }];
        var a = "polygon( ";

        for (var _i10 = 0, _o = o; _i10 < _o.length; _i10++) {
          var _t14 = _o[_i10];

          if (null !== _t14) {
            var _e17 = 1 === this.getDirection() ? {
              x: -_t14.x + this.shadow.pos.x,
              y: _t14.y - this.shadow.pos.y
            } : {
              x: _t14.x - this.shadow.pos.x,
              y: _t14.y - this.shadow.pos.y
            };

            _e17 = h.GetRotatedPoint(_e17, {
              x: s,
              y: 100
            }, i), a += _e17.x + "px " + _e17.y + "px, ";
          }
        }

        a = a.slice(0, -2), a += ")";
        var r = "\n            display: block;\n            z-index: ".concat((this.getSettings().startZIndex + 10).toString(10), ";\n            width: ").concat(this.shadow.width, "px;\n            height: ").concat(2 * t.height, "px;\n            background: linear-gradient(").concat(n, ", rgba(0, 0, 0, ").concat(this.shadow.opacity, "), rgba(0, 0, 0, 0));\n            transform-origin: ").concat(s, "px 100px;\n            transform: translate3d(").concat(e.x - s, "px, ").concat(e.y - 100, "px, 0) rotate(").concat(i, "rad);\n            clip-path: ").concat(a, ";\n            -webkit-clip-path: ").concat(a, ";\n        ");
        this.outerShadow.style.cssText = r;
      }
    }, {
      key: "drawLeftPage",
      value: function drawLeftPage() {
        "portrait" !== this.orientation && null !== this.leftPage && (1 === this.direction && null !== this.flippingPage && "hard" === this.flippingPage.getDrawingDensity() ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
      }
    }, {
      key: "drawRightPage",
      value: function drawRightPage() {
        null !== this.rightPage && (0 === this.direction && null !== this.flippingPage && "hard" === this.flippingPage.getDrawingDensity() ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
      }
    }, {
      key: "drawBottomPage",
      value: function drawBottomPage() {
        if (null === this.bottomPage) return;
        var t = null != this.flippingPage ? this.flippingPage.getDrawingDensity() : null;
        "portrait" === this.orientation && 1 === this.direction || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(t));
      }
    }, {
      key: "drawFrame",
      value: function drawFrame() {
        this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), null != this.flippingPage && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), null != this.shadow && null !== this.flippingPage && ("soft" === this.flippingPage.getDrawingDensity() ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
      }
    }, {
      key: "clear",
      value: function clear() {
        var _iterator8 = _createForOfIteratorHelper(this.app.getPageCollection().getPages()),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t15 = _step8.value;
            _t15 !== this.leftPage && _t15 !== this.rightPage && _t15 !== this.flippingPage && _t15 !== this.bottomPage && (_t15.getElement().style.cssText = "display: none"), _t15.getTemporaryCopy() !== this.flippingPage && _t15.hideTemporaryCopy();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    }, {
      key: "update",
      value: function update() {
        _get(_getPrototypeOf(w.prototype), "update", this).call(this), null !== this.rightPage && this.rightPage.setOrientation(1), null !== this.leftPage && this.leftPage.setOrientation(0);
      }
    }]);

    return w;
  }(l);

  var x = /*#__PURE__*/function () {
    function x() {
      _classCallCheck(this, x);

      this._default = {
        startPage: 0,
        size: "fixed",
        width: 0,
        height: 0,
        minWidth: 0,
        maxWidth: 0,
        minHeight: 0,
        maxHeight: 0,
        drawShadow: !0,
        flippingTime: 1e3,
        usePortrait: !0,
        startZIndex: 0,
        autoSize: !0,
        maxShadowOpacity: 1,
        showCover: !1,
        mobileScrollSupport: !0,
        swipeDistance: 30,
        clickEventForward: !0,
        useMouseEvents: !0
      };
    }

    _createClass(x, [{
      key: "getSettings",
      value: function getSettings(t) {
        var e = this._default;
        if (Object.assign(e, t), "stretch" !== e.size && "fixed" !== e.size) throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
        if (e.width <= 0 || e.height <= 0) throw new Error("Invalid width or height");
        if (e.flippingTime <= 0) throw new Error("Invalid flipping time");
        return "stretch" === e.size ? (e.minWidth <= 0 && (e.minWidth = 100), e.maxWidth < e.minWidth && (e.maxWidth = 2e3), e.minHeight <= 0 && (e.minHeight = 100), e.maxHeight < e.minHeight && (e.maxHeight = 2e3)) : (e.minWidth = e.width, e.maxWidth = e.width, e.minHeight = e.height, e.maxHeight = e.height), e;
      }
    }]);

    return x;
  }();

  !function (t, e) {
    void 0 === e && (e = {});
    var i = e.insertAt;

    if (t && "undefined" != typeof document) {
      var s = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
      n.type = "text/css", "top" === i && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
    }
  }(".stf__parent {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  transform: translateZ(0);\n\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.sft__wrapper {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.stf__parent canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.stf__block {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  perspective: 2000px;\n}\n\n.stf__item {\n  display: none;\n  position: absolute;\n  transform-style: preserve-3d;\n}\n\n.stf__outerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__innerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardInnerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}");
  t.PageFlip = /*#__PURE__*/function (_ref) {
    _inherits(_class, _ref);

    var _super9 = _createSuper(_class);

    function _class(t, e) {
      var _this13;

      _classCallCheck(this, _class);

      _this13 = _super9.call(this), _this13.isUserTouch = !1, _this13.isUserMove = !1, _this13.setting = null, _this13.pages = null, _this13.setting = new x().getSettings(e), _this13.block = t;
      return _this13;
    }

    _createClass(_class, [{
      key: "destroy",
      value: function destroy() {
        this.ui.destroy(), this.block.remove();
      }
    }, {
      key: "update",
      value: function update() {
        this.render.update(), this.pages.show();
      }
    }, {
      key: "loadFromImages",
      value: function loadFromImages(t) {
        var _this14 = this;

        this.ui = new u(this.block, this, this.setting);
        var e = this.ui.getCanvas();
        this.render = new d(this, this.setting, e), this.flipController = new g(this.render, this), this.pages = new n(this, this.render, t), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(function () {
          _this14.ui.update(), _this14.trigger("init", _this14, {
            page: _this14.setting.startPage,
            mode: _this14.render.getOrientation()
          });
        }, 1);
      }
    }, {
      key: "loadFromHTML",
      value: function loadFromHTML(t) {
        var _this15 = this;

        this.ui = new c(this.block, this, this.setting, t), this.render = new w(this, this.setting, this.ui.getDistElement()), this.flipController = new g(this.render, this), this.pages = new a(this, this.render, this.ui.getDistElement(), t), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(function () {
          _this15.ui.update(), _this15.trigger("init", _this15, {
            page: _this15.setting.startPage,
            mode: _this15.render.getOrientation()
          });
        }, 1);
      }
    }, {
      key: "updateFromImages",
      value: function updateFromImages(t) {
        var e = this.pages.getCurrentPageIndex();
        this.pages.destroy(), this.pages = new n(this, this.render, t), this.pages.load(), this.pages.show(e), this.trigger("update", this, {
          page: e,
          mode: this.render.getOrientation()
        });
      }
    }, {
      key: "updateFromHtml",
      value: function updateFromHtml(t) {
        var e = this.pages.getCurrentPageIndex();
        this.pages.destroy(), this.pages = new a(this, this.render, this.ui.getDistElement(), t), this.pages.load(), this.ui.updateItems(t), this.pages.show(e), this.trigger("update", this, {
          page: e,
          mode: this.render.getOrientation()
        });
      }
    }, {
      key: "turnToPrevPage",
      value: function turnToPrevPage() {
        this.pages.showPrev();
      }
    }, {
      key: "turnToNextPage",
      value: function turnToNextPage() {
        this.pages.showNext();
      }
    }, {
      key: "turnToPage",
      value: function turnToPage(t) {
        this.pages.show(t);
      }
    }, {
      key: "flipNext",
      value: function flipNext() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "top";
        this.flipController.flipNext(t);
      }
    }, {
      key: "flipPrev",
      value: function flipPrev() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "top";
        this.flipController.flipPrev(t);
      }
    }, {
      key: "flip",
      value: function flip(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "top";
        this.flipController.flipToPage(t, e);
      }
    }, {
      key: "updateState",
      value: function updateState(t) {
        this.trigger("changeState", this, t);
      }
    }, {
      key: "updatePageIndex",
      value: function updatePageIndex(t) {
        this.trigger("flip", this, t);
      }
    }, {
      key: "updateOrientation",
      value: function updateOrientation(t) {
        this.ui.setOrientationStyle(t), this.update(), this.trigger("changeOrientation", this, t);
      }
    }, {
      key: "getPageCount",
      value: function getPageCount() {
        return this.pages.getPageCount();
      }
    }, {
      key: "getCurrentPageIndex",
      value: function getCurrentPageIndex() {
        return this.pages.getCurrentPageIndex();
      }
    }, {
      key: "getPage",
      value: function getPage(t) {
        return this.pages.getPage(t);
      }
    }, {
      key: "getRender",
      value: function getRender() {
        return this.render;
      }
    }, {
      key: "getFlipController",
      value: function getFlipController() {
        return this.flipController;
      }
    }, {
      key: "getOrientation",
      value: function getOrientation() {
        return this.render.getOrientation();
      }
    }, {
      key: "getBoundsRect",
      value: function getBoundsRect() {
        return this.render.getRect();
      }
    }, {
      key: "getSettings",
      value: function getSettings() {
        return this.setting;
      }
    }, {
      key: "getUI",
      value: function getUI() {
        return this.ui;
      }
    }, {
      key: "getState",
      value: function getState() {
        return this.flipController.getState();
      }
    }, {
      key: "getPageCollection",
      value: function getPageCollection() {
        return this.pages;
      }
    }, {
      key: "startUserTouch",
      value: function startUserTouch(t) {
        this.mousePosition = t, this.isUserTouch = !0, this.isUserMove = !1;
      }
    }, {
      key: "userMove",
      value: function userMove(t, e) {
        this.isUserTouch || e ? this.isUserTouch && h.GetDistanceBetweenTwoPoint(this.mousePosition, t) > 5 && (this.isUserMove = !0, this.flipController.fold(t)) : this.flipController.showCorner(t);
      }
    }, {
      key: "userStop",
      value: function userStop(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        this.isUserTouch && (this.isUserTouch = !1, e || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(t)));
      }
    }]);

    return _class;
  }( /*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);

      this.events = new Map();
    }

    _createClass(_class2, [{
      key: "on",
      value: function on(t, e) {
        return this.events.has(t) ? this.events.get(t).push(e) : this.events.set(t, [e]), this;
      }
    }, {
      key: "off",
      value: function off(t) {
        this.events["delete"](t);
      }
    }, {
      key: "trigger",
      value: function trigger(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (this.events.has(t)) {
          var _iterator9 = _createForOfIteratorHelper(this.events.get(t)),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _s5 = _step9.value;

              _s5({
                data: i,
                object: e
              });
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      }
    }]);

    return _class2;
  }()), Object.defineProperty(t, "__esModule", {
    value: !0
  });
});