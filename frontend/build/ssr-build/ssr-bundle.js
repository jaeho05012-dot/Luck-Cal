module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "GDc7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l8WD");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var OptionButton = function OptionButton(_ref) {
  var active = _ref.active,
    onClick = _ref.onClick,
    children = _ref.children;
  return h("button", {
    onClick: onClick,
    style: {
      flex: 1,
      padding: "12px 8px",
      borderRadius: 12,
      border: active ? "2px solid #000" : "1px solid #ddd",
      background: active ? "#000" : "#fff",
      color: active ? "#fff" : "#111",
      cursor: "pointer",
      transition: "all 0.2s"
    }
  }, children);
};
function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    file = _useState2[0],
    setFile = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    result = _useState4[0],
    setResult = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])("unknown"),
    _useState8 = _slicedToArray(_useState7, 2),
    gender = _useState8[0],
    setGender = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])("adult"),
    _useState0 = _slicedToArray(_useState9, 2),
    ageGroup = _useState0[0],
    setAgeGroup = _useState0[1];
  var _useState1 = Object(react__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])("maintain"),
    _useState10 = _slicedToArray(_useState1, 2),
    goal = _useState10[0],
    setGoal = _useState10[1];
  var analyze = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      if (!file) return alert("이미지를 선택하세요");
      setLoading(true);
      setResult(null);
      var fd = new FormData();
      fd.append("image", file);
      fd.append("gender", gender);
      fd.append("age_group", ageGroup);
      fd.append("goal", goal);
      try {
        var res = yield fetch("http://127.0.0.1:8000/analyze", {
          method: "POST",
          body: fd
        });
        if (!res.ok) throw new Error("server error");
        var data = yield res.json();
        setResult(data);
      } catch (_unused) {
        setResult({
          food: "양념치킨 + 콜라",
          confidence: 88,
          nutrition: {
            calories: 1100,
            protein: 40,
            carbs: 100,
            fat: 50,
            fiber: 5,
            sugar: 30,
            sodium: 1200
          },
          advice: "현재 연령대에서는 나트륨 섭취에 특히 주의하는 것이 좋습니다. " + "다이어트가 목표라면 음료를 제로 칼로리로 바꾸는 것이 도움이 됩니다. " + "치킨은 단백질 공급원이지만 튀김 조리로 지방이 많습니다. " + "채소와 함께 섭취하고 빈도를 줄이면 더 균형 잡힌 식사가 됩니다."
        });
      } finally {
        setLoading(false);
      }
    });
    return function analyze() {
      return _ref2.apply(this, arguments);
    };
  }();
  return h("div", {
    style: {
      maxWidth: 420,
      margin: "0 auto",
      padding: 20,
      fontFamily: "system-ui, sans-serif",
      background: "#fff"
    }
  }, h("h2", {
    style: {
      textAlign: "center",
      marginBottom: 24
    }
  }, "\uD83D\uDCF8 \uC74C\uC2DD \uBD84\uC11D"), h("div", {
    style: {
      marginBottom: 20
    }
  }, h("div", {
    style: {
      marginBottom: 8,
      fontWeight: 600
    }
  }, "\uC131\uBCC4"), h("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, h(OptionButton, {
    active: gender === "male",
    onClick: function onClick() {
      return setGender("male");
    }
  }, "\uB0A8\uC131"), h(OptionButton, {
    active: gender === "female",
    onClick: function onClick() {
      return setGender("female");
    }
  }, "\uC5EC\uC131"), h(OptionButton, {
    active: gender === "unknown",
    onClick: function onClick() {
      return setGender("unknown");
    }
  }, "\uACF5\uAC1C \uC548 \uD568"))), h("div", {
    style: {
      marginBottom: 20
    }
  }, h("div", {
    style: {
      marginBottom: 8,
      fontWeight: 600
    }
  }, "\uC5F0\uB839\uB300"), h("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, h(OptionButton, {
    active: ageGroup === "infant",
    onClick: function onClick() {
      return setAgeGroup("infant");
    }
  }, "\uC720\uC544"), h(OptionButton, {
    active: ageGroup === "child",
    onClick: function onClick() {
      return setAgeGroup("child");
    }
  }, "\uC544\uB3D9"), h(OptionButton, {
    active: ageGroup === "teen",
    onClick: function onClick() {
      return setAgeGroup("teen");
    }
  }, "\uCCAD\uC18C\uB144"), h(OptionButton, {
    active: ageGroup === "adult",
    onClick: function onClick() {
      return setAgeGroup("adult");
    }
  }, "\uC131\uC778"))), h("div", {
    style: {
      marginBottom: 20
    }
  }, h("div", {
    style: {
      marginBottom: 8,
      fontWeight: 600
    }
  }, "\uBAA9\uD45C"), h("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, h(OptionButton, {
    active: goal === "diet",
    onClick: function onClick() {
      return setGoal("diet");
    }
  }, "\uB2E4\uC774\uC5B4\uD2B8"), h(OptionButton, {
    active: goal === "maintain",
    onClick: function onClick() {
      return setGoal("maintain");
    }
  }, "\uC720\uC9C0"), h(OptionButton, {
    active: goal === "bulk",
    onClick: function onClick() {
      return setGoal("bulk");
    }
  }, "\uBC8C\uD06C\uC5C5"))), h("input", {
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      return setFile(e.target.files[0]);
    }
  }), h("button", {
    onClick: analyze,
    disabled: loading,
    style: {
      width: "100%",
      marginTop: 16,
      padding: 14,
      borderRadius: 14,
      background: "#000",
      color: "#fff",
      border: "none",
      fontSize: 16,
      cursor: "pointer"
    }
  }, loading ? "🔄 분석중..." : "분석하기"), result && h("div", {
    style: {
      marginTop: 24
    }
  }, h("h3", null, result.food), h("div", null, "\uC2E0\uB8B0\uB3C4: ", result.confidence, "%"), h("h4", {
    style: {
      marginTop: 12
    }
  }, "\uC601\uC591 \uC815\uBCF4"), h("ul", null, h("li", null, "\uCE7C\uB85C\uB9AC: ", result.nutrition.calories, " kcal"), h("li", null, "\uB2E8\uBC31\uC9C8: ", result.nutrition.protein, " g"), h("li", null, "\uD0C4\uC218\uD654\uBB3C: ", result.nutrition.carbs, " g"), h("li", null, "\uC9C0\uBC29: ", result.nutrition.fat, " g"), h("li", null, "\uC2DD\uC774\uC12C\uC720: ", result.nutrition.fiber, " g"), h("li", null, "\uB2F9\uB958: ", result.nutrition.sugar, " g"), h("li", null, "\uB098\uD2B8\uB968: ", result.nutrition.sodium, " mg")), h("p", {
    style: {
      marginTop: 12,
      lineHeight: 1.6
    }
  }, "\uD83E\uDD16 AI \uC870\uC5B8", h("br", null), result.advice), h("p", {
    style: {
      fontSize: 12,
      color: "#666",
      marginTop: 12
    }
  }, "\uC774 \uBD84\uC11D\uC740 \uCC38\uACE0\uC6A9\uC73C\uB85C \uC81C\uACF5\uB418\uBA70, \uC77C\uC0C1\uC801\uC778 \uAC74\uAC15 \uAD00\uB9AC\uB97C \uBD80\uB4DC\uB7FD\uAC8C \uB3D5\uAE30 \uC704\uD55C \uC815\uBCF4\uC785\uB2C8\uB2E4 \uD83D\uDE42")));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l8WD");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XCxx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GDc7");
// index.js




// Node 환경에서 실행될 때 document가 없어서 생기는 오류 방지
if (typeof window !== "undefined") {
  // 브라우저에서만 렌더링
  var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].createRoot(document.getElementById("root"));
  root.render(h(_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "XCxx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createRoot */
/* unused harmony export hydrateRoot */
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l8WD");

function createRoot(container) {
  return {
    // eslint-disable-next-line
    render: function render(children) {
      Object(preact_compat__WEBPACK_IMPORTED_MODULE_0__[/* render */ "b"])(children, container);
    },
    // eslint-disable-next-line
    unmount: function unmount() {
      Object(preact_compat__WEBPACK_IMPORTED_MODULE_0__[/* unmountComponentAtNode */ "c"])(container);
    }
  };
}
function hydrateRoot(container, children) {
  Object(preact_compat__WEBPACK_IMPORTED_MODULE_0__[/* hydrate */ "a"])(children, container);
  return createRoot(container);
}
/* harmony default export */ __webpack_exports__["a"] = ({
  createRoot: createRoot,
  hydrateRoot: hydrateRoot
});

/***/ }),

/***/ "l8WD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ d; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ tn; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ nn; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ bn; });

// UNUSED EXPORTS: Component, Fragment, createContext, createElement, createRef, useCallback, useContext, useDebugValue, useEffect, useErrorBoundary, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, Children, PureComponent, StrictMode, Suspense, SuspenseList, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cloneElement, createFactory, createPortal, default, findDOMNode, flushSync, forwardRef, isElement, isFragment, isMemo, isValidElement, lazy, memo, startTransition, unstable_batchedUpdates, useDeferredValue, useInsertionEffect, useSyncExternalStore, useTransition, version

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js

var hooks_module_t,
  hooks_module_r,
  hooks_module_u,
  hooks_module_i,
  hooks_module_o = 0,
  f = [],
  hooks_module_c = external_preact_["options"],
  hooks_module_e = hooks_module_c.__b,
  a = hooks_module_c.__r,
  v = hooks_module_c.diffed,
  hooks_module_l = hooks_module_c.__c,
  m = hooks_module_c.unmount,
  s = hooks_module_c.__;
function p(n, t) {
  hooks_module_c.__h && hooks_module_c.__h(hooks_module_r, n, hooks_module_o || t), hooks_module_o = 0;
  var u = hooks_module_r.__H || (hooks_module_r.__H = {
    __: [],
    __h: []
  });
  return n >= u.__.length && u.__.push({}), u.__[n];
}
function d(n) {
  return hooks_module_o = 1, h(D, n);
}
function h(n, u, i) {
  var o = p(hooks_module_t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = hooks_module_r, !hooks_module_r.__f)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return !!n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = o.__c.props !== n;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), c && c.call(this, n, t, r) || i;
    };
    hooks_module_r.__f = !0;
    var c = hooks_module_r.shouldComponentUpdate,
      e = hooks_module_r.componentWillUpdate;
    hooks_module_r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, hooks_module_r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function y(n, u) {
  var i = p(hooks_module_t++, 3);
  !hooks_module_c.__s && C(i.__H, u) && (i.__ = n, i.u = u, hooks_module_r.__H.__h.push(i));
}
function _(n, u) {
  var i = p(hooks_module_t++, 4);
  !hooks_module_c.__s && C(i.__H, u) && (i.__ = n, i.u = u, hooks_module_r.__h.push(i));
}
function A(n) {
  return hooks_module_o = 5, T(function () {
    return {
      current: n
    };
  }, []);
}
function F(n, t, r) {
  hooks_module_o = 6, _(function () {
    if ("function" == typeof n) {
      var r = n(t());
      return function () {
        n(null), r && "function" == typeof r && r();
      };
    }
    if (n) return n.current = t(), function () {
      return n.current = null;
    };
  }, null == r ? r : r.concat(n));
}
function T(n, r) {
  var u = p(hooks_module_t++, 7);
  return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q(n, t) {
  return hooks_module_o = 8, T(function () {
    return n;
  }, t);
}
function x(n) {
  var u = hooks_module_r.context[n.__c],
    i = p(hooks_module_t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(hooks_module_r)), u.props.value) : n.__;
}
function P(n, t) {
  hooks_module_c.useDebugValue && hooks_module_c.useDebugValue(t ? t(n) : n);
}
function b(n) {
  var u = p(hooks_module_t++, 10),
    i = d();
  return u.__ = n, hooks_module_r.componentDidCatch || (hooks_module_r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function g() {
  var n = p(hooks_module_t++, 11);
  if (!n.__) {
    for (var u = hooks_module_r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function j() {
  for (var n; n = f.shift();) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], hooks_module_c.__e(t, n.__v);
  }
}
hooks_module_c.__b = function (n) {
  hooks_module_r = null, hooks_module_e && hooks_module_e(n);
}, hooks_module_c.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, hooks_module_c.__r = function (n) {
  a && a(n), hooks_module_t = 0;
  var i = (hooks_module_r = n.__c).__H;
  i && (hooks_module_u === hooks_module_r ? (i.__h = [], hooks_module_r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], hooks_module_t = 0)), hooks_module_u = hooks_module_r;
}, hooks_module_c.diffed = function (n) {
  v && v(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && hooks_module_i === hooks_module_c.requestAnimationFrame || ((hooks_module_i = hooks_module_c.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function (n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), hooks_module_u = hooks_module_r = null;
}, hooks_module_c.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.forEach(z), n.__h = n.__h.filter(function (n) {
        return !n.__ || B(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], hooks_module_c.__e(r, n.__v);
    }
  }), hooks_module_l && hooks_module_l(n, t);
}, hooks_module_c.unmount = function (n) {
  m && m(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      z(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && hooks_module_c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function r() {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 35);
  k && (t = requestAnimationFrame(r));
}
function z(n) {
  var t = hooks_module_r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), hooks_module_r = t;
}
function B(n) {
  var t = hooks_module_r;
  n.__c = n.__(), hooks_module_r = t;
}
function C(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function D(n, t) {
  return "function" == typeof t ? t(n) : t;
}

// CONCATENATED MODULE: ../node_modules/preact/compat/dist/compat.module.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




function compat_module_g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function E(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function compat_module_C(n, t) {
  var e = t(),
    r = d({
      t: {
        __: e,
        u: t
      }
    }),
    u = r[0].t,
    o = r[1];
  return _(function () {
    u.__ = e, u.u = t, compat_module_x(u) && o({
      t: u
    });
  }, [n, e, t]), y(function () {
    return compat_module_x(u) && o({
      t: u
    }), n(function () {
      compat_module_x(u) && o({
        t: u
      });
    });
  }, [n]), e;
}
function compat_module_x(n) {
  var t,
    e,
    r = n.u,
    u = n.__;
  try {
    var o = r();
    return !((t = u) === (e = o) && (0 !== t || 1 / t == 1 / e) || t != t && e != e);
  } catch (n) {
    return !0;
  }
}
function R(n) {
  n();
}
function compat_module_w(n) {
  return n;
}
function compat_module_k() {
  return [!1, R];
}
var I = _;
function N(n, t) {
  this.props = n, this.context = t;
}
function M(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : E(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, Object(external_preact_["createElement"])(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u.type = n, u;
}
(N.prototype = new external_preact_["Component"]()).isPureReactComponent = !0, N.prototype.shouldComponentUpdate = function (n, t) {
  return E(this.props, n) || E(this.state, t);
};
var compat_module_T = external_preact_["options"].__b;
external_preact_["options"].__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), compat_module_T && compat_module_T(n);
};
var compat_module_A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function compat_module_D(n) {
  function t(t) {
    var e = compat_module_g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = compat_module_A, t.render = n, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var compat_module_L = function L(n, t) {
    return null == n ? null : Object(external_preact_["toChildArray"])(Object(external_preact_["toChildArray"])(n).map(t));
  },
  O = {
    map: compat_module_L,
    forEach: compat_module_L,
    count: function count(n) {
      return n ? Object(external_preact_["toChildArray"])(n).length : 0;
    },
    only: function only(n) {
      var t = Object(external_preact_["toChildArray"])(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: external_preact_["toChildArray"]
  },
  compat_module_F = external_preact_["options"].__e;
external_preact_["options"].__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  compat_module_F(n, t, e, r);
};
var U = external_preact_["options"].unmount;
function V(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = compat_module_g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c.__e = !0, n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return V(n, t, e);
  })), n;
}
function W(n, t, e) {
  return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return W(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
}
function compat_module_P() {
  this.__u = 0, this.o = null, this.__b = null;
}
function compat_module_j(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function compat_module_z(n) {
  var e,
    r,
    u,
    o = null;
  function i(i) {
    if (e || (e = n()).then(function (n) {
      n && (o = n.default || n), u = !0;
    }, function (n) {
      r = n, u = !0;
    }), r) throw r;
    if (!u) throw e;
    return o ? Object(external_preact_["createElement"])(o, i) : null;
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function compat_module_B() {
  this.i = null, this.l = null;
}
external_preact_["options"].unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), U && U(n);
}, (compat_module_P.prototype = new external_preact_["Component"]()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.o && (r.o = []), r.o.push(e);
  var u = compat_module_j(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
    if (! --r.__u) {
      if (r.state.__a) {
        var n = r.state.__a;
        r.__v.__k[0] = W(n, n.__c.__P, n.__c.__O);
      }
      var t;
      for (r.setState({
        __a: r.__b = null
      }); t = r.o.pop();) t.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, compat_module_P.prototype.componentWillUnmount = function () {
  this.o = [];
}, compat_module_P.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = V(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Object(external_preact_["createElement"])(external_preact_["Fragment"], null, n.fallback);
  return i && (i.__u &= -33), [Object(external_preact_["createElement"])(external_preact_["Fragment"], null, e.__a ? null : n.children), i];
};
var H = function H(n, t, e) {
  if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.i = e = e[2];
  }
};
function Z(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function Y(n) {
  var e = this,
    r = n.h;
  if (e.componentWillUnmount = function () {
    Object(external_preact_["render"])(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== r && e.componentWillUnmount(), !e.v) {
    for (var u = e.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    e.h = r, e.v = {
      nodeType: 1,
      parentNode: r,
      childNodes: [],
      __k: {
        __m: u.__m
      },
      contains: function contains() {
        return !0;
      },
      insertBefore: function insertBefore(n, t) {
        this.childNodes.push(n), e.h.insertBefore(n, t);
      },
      removeChild: function removeChild(n) {
        this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.h.removeChild(n);
      }
    };
  }
  Object(external_preact_["render"])(Object(external_preact_["createElement"])(Z, {
    context: e.context
  }, n.__v), e.v);
}
function $(n, e) {
  var r = Object(external_preact_["createElement"])(Y, {
    __v: n,
    h: e
  });
  return r.containerInfo = e, r;
}
(compat_module_B.prototype = new external_preact_["Component"]()).__a = function (n) {
  var t = this,
    e = compat_module_j(t.__v),
    r = t.l.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), H(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, compat_module_B.prototype.render = function (n) {
  this.i = null, this.l = new Map();
  var t = Object(external_preact_["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.l.set(t[e], this.i = [1, 0, this.i]);
  return n.children;
}, compat_module_B.prototype.componentDidUpdate = compat_module_B.prototype.componentDidMount = function () {
  var n = this;
  this.l.forEach(function (t, e) {
    H(n, e, t);
  });
};
var compat_module_q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  K = /[A-Z0-9]/g,
  Q = "undefined" != typeof document,
  X = function X(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
function nn(n, t, e) {
  return null == t.__k && (t.textContent = ""), Object(external_preact_["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function tn(n, t, e) {
  return Object(external_preact_["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
external_preact_["Component"].prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(external_preact_["Component"].prototype, t, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var en = external_preact_["options"].event;
function rn() {}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
external_preact_["options"].event = function (n) {
  return en && (n = en(n)), n.persist = rn, n.isPropagationStopped = un, n.isDefaultPrevented = on, n.nativeEvent = n;
};
var ln,
  cn = {
    enumerable: !1,
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
  fn = external_preact_["options"].vnode;
external_preact_["options"].vnode = function (n) {
  "string" == typeof n.type && function (n) {
    var t = n.props,
      e = n.type,
      u = {},
      o = -1 === e.indexOf("-");
    for (var i in t) {
      var l = t[i];
      if (!("value" === i && "defaultValue" in t && null == l || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
        var c = i.toLowerCase();
        "defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && !0 === l ? l = "" : "translate" === c && "no" === l ? l = !1 : "o" === c[0] && "n" === c[1] ? "ondoubleclick" === c ? i = "ondblclick" : "onchange" !== c || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === c ? i = "onfocusin" : "onblur" === c ? i = "onfocusout" : J.test(i) && (i = c) : c = i = "oninput" : o && G.test(i) ? i = i.replace(K, "-$&").toLowerCase() : null === l && (l = void 0), "oninput" === c && u[i = c] && (i = "oninputCapture"), u[i] = l;
      }
    }
    "select" == e && u.multiple && Array.isArray(u.value) && (u.value = Object(external_preact_["toChildArray"])(t.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == e && null != u.defaultValue && (u.value = Object(external_preact_["toChildArray"])(t.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", cn)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
  }(n), n.$$typeof = compat_module_q, fn && fn(n);
};
var an = external_preact_["options"].__r;
external_preact_["options"].__r = function (n) {
  an && an(n), ln = n.__c;
};
var sn = external_preact_["options"].diffed;
external_preact_["options"].diffed = function (n) {
  sn && sn(n);
  var t = n.props,
    e = n.__e;
  null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), ln = null;
};
var hn = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return ln.__n[n.__c].props.value;
        },
        useCallback: q,
        useContext: x,
        useDebugValue: P,
        useDeferredValue: compat_module_w,
        useEffect: y,
        useId: g,
        useImperativeHandle: F,
        useInsertionEffect: I,
        useLayoutEffect: _,
        useMemo: T,
        useReducer: h,
        useRef: A,
        useState: d,
        useSyncExternalStore: compat_module_C,
        useTransition: compat_module_k
      }
    }
  },
  vn = "18.3.1";
function dn(n) {
  return external_preact_["createElement"].bind(null, n);
}
function mn(n) {
  return !!n && n.$$typeof === compat_module_q;
}
function pn(n) {
  return mn(n) && n.type === external_preact_["Fragment"];
}
function yn(n) {
  return !!n && !!n.displayName && ("string" == typeof n.displayName || n.displayName instanceof String) && n.displayName.startsWith("Memo(");
}
function _n(n) {
  return mn(n) ? external_preact_["cloneElement"].apply(null, arguments) : n;
}
function bn(n) {
  return !!n.__k && (Object(external_preact_["render"])(null, n), !0);
}
function Sn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var gn = function gn(n, t) {
    return n(t);
  },
  En = function En(n, t) {
    return n(t);
  },
  Cn = external_preact_["Fragment"],
  xn = mn,
  Rn = {
    useState: d,
    useId: g,
    useReducer: h,
    useEffect: y,
    useLayoutEffect: _,
    useInsertionEffect: I,
    useTransition: compat_module_k,
    useDeferredValue: compat_module_w,
    useSyncExternalStore: compat_module_C,
    startTransition: R,
    useRef: A,
    useImperativeHandle: F,
    useMemo: T,
    useCallback: q,
    useContext: x,
    useDebugValue: P,
    version: "18.3.1",
    Children: O,
    render: nn,
    hydrate: tn,
    unmountComponentAtNode: bn,
    createPortal: $,
    createElement: external_preact_["createElement"],
    createContext: external_preact_["createContext"],
    createFactory: dn,
    cloneElement: _n,
    createRef: external_preact_["createRef"],
    Fragment: external_preact_["Fragment"],
    isValidElement: mn,
    isElement: xn,
    isFragment: pn,
    isMemo: yn,
    findDOMNode: Sn,
    Component: external_preact_["Component"],
    PureComponent: N,
    memo: M,
    forwardRef: compat_module_D,
    flushSync: En,
    unstable_batchedUpdates: gn,
    StrictMode: Cn,
    Suspense: compat_module_P,
    SuspenseList: compat_module_B,
    lazy: compat_module_z,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn
  };


/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map