// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/sub_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var subData = [{
  id: 1,
  category: "공용 컴포트핏",
  name: "컴포트핏 우븐 후드티",
  price: "119,000원",
  src: "../img/subimg/sub01.jpg",
  price01: 119000,
  pop: 20,
  day: '2023-05-30',
  color: 'gray'
}, {
  id: 2,
  category: "공용",
  name: "스몰로고 카라 티",
  price: "79,000원",
  src: "../img/subimg/sub02.jpg",
  price01: 79000,
  pop: 5,
  day: '2023-05-29',
  color: 'black'
}, {
  id: 3,
  category: "공용 컴포트핏",
  name: "컴포트핏 플래그 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub03.jpg",
  price01: 39000,
  pop: 3,
  day: '2023-05-28'
}, {
  id: 4,
  category: "공용 컴포트핏",
  name: "컴포트핏 플래그 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub04.jpg",
  price01: 39000,
  pop: 2,
  day: '2023-05-27',
  color: 'black'
}, {
  id: 5,
  category: "공용 컴포트핏",
  name: "컴포트핏 마인드블로어 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub05.jpg",
  price01: 39000,
  pop: 1,
  day: '2023-05-26',
  color: 'blue'
}, {
  id: 6,
  category: "공용",
  name: "테니스 배색 카라티셔츠",
  price: "99,000원",
  src: "../img/subimg/sub06.jpg",
  price01: 99000,
  pop: 19,
  day: '2023-05-25',
  color: 'brown'
}, {
  id: 7,
  category: "공용 오버핏",
  name: "테잎 오버핏 바람막이 자켓",
  price: "99,000원",
  src: "../img/subimg/sub07.jpg",
  price01: 99000,
  pop: 18,
  day: '2023-05-24',
  color: 'gray'
}, {
  id: 8,
  category: "남성",
  name: "퍼포먼스 경량 4.5부 숏팬츠",
  price: "69,000원",
  src: "../img/subimg/sub08.jpg",
  price01: 69000,
  pop: 15,
  day: '2023-05-23',
  color: 'black'
}, {
  id: 9,
  category: "공용 오버핏",
  name: "테잎 오버핏 우븐 반바지",
  price: "79,000원",
  src: "../img/subimg/sub09.jpg",
  price01: 79000,
  pop: 13,
  day: '2023-05-22',
  color: 'white'
}, {
  id: 10,
  category: "공용",
  name: "테니스 퍼포먼스 반팔티",
  price: "49,000원",
  src: "../img/subimg/sub10.jpg",
  price01: 49000,
  pop: 14,
  day: '2023-05-21',
  color: 'white'
}, {
  id: 11,
  category: "공용",
  name: "라이프 레이어드 반팔티",
  price: "45,000원",
  src: "../img/subimg/sub11.jpg",
  price01: 45000,
  pop: 5,
  day: '2023-05-20',
  color: 'white'
}, {
  id: 12,
  category: "남성 컴포트핏 테니스",
  name: "테니스 컴포트핏 니트 카라티",
  price: "45,000원",
  src: "../img/subimg/sub12.jpg",
  price01: 45000,
  pop: 10,
  day: '2023-05-19',
  color: 'green'
}, {
  id: 13,
  category: "공용 컴포트핏 라이프스타일",
  name: "컴포트핏 조거팬츠",
  price: "109,000원",
  src: "../img/subimg/sub13.jpg",
  price01: 109000,
  pop: 9,
  day: '2023-05-18',
  color: 'black'
}, {
  id: 14,
  category: "공용 오버핏 라이프스타일",
  name: "오버핏 이지팬츠",
  price: "99,000원",
  src: "../img/subimg/sub14.jpg",
  price01: 99000,
  pop: 6,
  day: '2023-05-17',
  color: 'gray'
}, {
  id: 15,
  category: "공용 오버핏 라이프스타일",
  name: "오버핏 스트링 와이드 팬츠",
  price: "129,000원",
  src: "../img/subimg/sub15.jpg",
  price01: 129000,
  pop: 21,
  day: '2023-05-16',
  color: 'red'
}, {
  id: 16,
  category: "남성",
  name: "스포츠 쿨링 반바지",
  price: "49,000원",
  src: "../img/subimg/sub16.jpg",
  price01: 49000,
  pop: 23,
  day: '2023-05-15',
  color: 'black'
}, {
  id: 17,
  category: "공용 레귤러핏 라이프스타일",
  name: "스트레치 카고 조거팬츠",
  price: "119,000원",
  src: "../img/subimg/sub17.jpg",
  price01: 119000,
  pop: 22,
  day: '2023-05-14',
  color: 'gray'
}, {
  id: 18,
  category: "공용 라이프스타일",
  name: "클래식킥스 B V3",
  price: "45,000원",
  src: "../img/subimg/sub18.jpg",
  price01: 45000,
  pop: 19,
  day: '2023-05-13',
  color: 'black'
}, {
  id: 19,
  category: "공용 라이프스타일",
  name: "FILA athletics 아노락",
  price: "87,200원",
  src: "../img/subimg/sub19.jpg",
  price01: 87200,
  pop: 14,
  day: '2023-05-12',
  color: 'white'
}, {
  id: 20,
  category: "공용 라이프스타일",
  name: "White Line 라켓백",
  price: "119,000원",
  src: "../img/subimg/sub20.jpg",
  price01: 119000,
  pop: 1,
  day: '2023-05-11',
  color: 'white'
}, {
  id: 21,
  category: "공용 컴포트핏",
  name: "컴포트핏 우븐 후드티",
  price: "119,000원",
  src: "../img/subimg/sub21.jpg",
  price01: 119000,
  pop: 20,
  day: '2023-05-30',
  color: 'black'
}, {
  id: 22,
  category: "공용",
  name: "스몰로고 카라 티",
  price: "79,000원",
  src: "../img/subimg/sub22.jpg",
  price01: 79000,
  pop: 5,
  day: '2023-05-29',
  color: 'white'
}, {
  id: 23,
  category: "공용 컴포트핏",
  name: "컴포트핏 플래그 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub23.jpg",
  price01: 39000,
  pop: 3,
  day: '2023-05-28',
  color: 'green'
}, {
  id: 24,
  category: "공용 컴포트핏",
  name: "컴포트핏 플래그 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub24.jpg",
  price01: 39000,
  pop: 2,
  day: '2023-05-27',
  color: 'black'
}, {
  id: 25,
  category: "공용 컴포트핏",
  name: "컴포트핏 마인드블로어 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub25.jpg",
  price01: 39000,
  pop: 1,
  day: '2023-05-26',
  color: 'white'
}, {
  id: 26,
  category: "공용",
  name: "테니스 배색 카라티셔츠",
  price: "99,000원",
  src: "../img/subimg/sub26.jpg",
  price01: 99000,
  pop: 19,
  day: '2023-05-25',
  color: 'black'
}, {
  id: 27,
  category: "공용 오버핏",
  name: "테잎 오버핏 바람막이 자켓",
  price: "99,000원",
  src: "../img/subimg/sub27.jpg",
  price01: 99000,
  pop: 18,
  day: '2023-05-24',
  color: 'black'
}, {
  id: 28,
  category: "남성",
  name: "퍼포먼스 경량 4.5부 숏팬츠",
  price: "69,000원",
  src: "../img/subimg/sub28.jpg",
  price01: 69000,
  pop: 15,
  day: '2023-05-23',
  color: 'white'
}, {
  id: 29,
  category: "공용 오버핏",
  name: "테잎 오버핏 우븐 반바지",
  price: "79,000원",
  src: "../img/subimg/sub29.jpg",
  price01: 79000,
  pop: 13,
  day: '2023-05-22',
  color: 'black'
}, {
  id: 30,
  category: "공용",
  name: "테니스 퍼포먼스 반팔티",
  price: "49,000원",
  src: "../img/subimg/sub30.jpg",
  price01: 49000,
  pop: 14,
  day: '2023-05-21',
  color: 'gray'
}, {
  id: 31,
  category: "공용",
  name: "라이프 레이어드 반팔티",
  price: "45,000원",
  src: "../img/subimg/sub31.jpg",
  price01: 45000,
  pop: 5,
  day: '2023-05-20',
  color: 'blue'
}, {
  id: 32,
  category: "남성 컴포트핏 테니스",
  name: "테니스 컴포트핏 니트 카라티",
  price: "45,000원",
  src: "../img/subimg/sub32.jpg",
  price01: 45000,
  pop: 10,
  day: '2023-05-19',
  color: 'green'
}, {
  id: 33,
  category: "공용 컴포트핏 라이프스타일",
  name: "컴포트핏 조거팬츠",
  price: "109,000원",
  src: "../img/subimg/sub33.jpg",
  price01: 109000,
  pop: 9,
  day: '2023-05-18',
  color: 'black'
}, {
  id: 34,
  category: "공용 오버핏 라이프스타일",
  name: "오버핏 이지팬츠",
  price: "99,000원",
  src: "../img/subimg/sub34.jpg",
  price01: 99000,
  pop: 6,
  day: '2023-05-17',
  color: 'gray'
}, {
  id: 35,
  category: "공용 오버핏 라이프스타일",
  name: "오버핏 스트링 와이드 팬츠",
  price: "129,000원",
  src: "../img/subimg/sub35.jpg",
  price01: 129000,
  pop: 21,
  day: '2023-05-16',
  color: 'black'
}, {
  id: 36,
  category: "남성",
  name: "스포츠 쿨링 반바지",
  price: "49,000원",
  src: "../img/subimg/sub36.jpg",
  price01: 49000,
  pop: 23,
  day: '2023-05-15',
  color: 'white'
}, {
  id: 37,
  category: "공용 레귤러핏 라이프스타일",
  name: "스트레치 카고 조거팬츠",
  price: "119,000원",
  src: "../img/subimg/sub37.jpg",
  price01: 119000,
  pop: 22,
  day: '2023-05-14',
  color: 'green'
}, {
  id: 38,
  category: "공용 라이프스타일",
  name: "클래식킥스 B V3",
  price: "45,000원",
  src: "../img/subimg/sub38.jpg",
  price01: 45000,
  pop: 19,
  day: '2023-05-13',
  color: 'blue'
}, {
  id: 39,
  category: "공용 라이프스타일",
  name: "FILA athletics 아노락",
  price: "87,200원",
  src: "../img/subimg/sub39.jpg",
  price01: 87200,
  pop: 14,
  day: '2023-05-12',
  color: 'black'
}, {
  id: 40,
  category: "공용 라이프스타일",
  name: "White Line 라켓백",
  price: "119,000원",
  src: "../img/subimg/sub40.jpg",
  price01: 119000,
  pop: 1,
  day: '2023-05-11',
  color: 'white'
}, {
  id: 41,
  category: "공용 컴포트핏",
  name: "컴포트핏 우븐 후드티",
  price: "119,000원",
  src: "../img/subimg/sub41.jpg",
  price01: 119000,
  pop: 20,
  day: '2023-05-30',
  color: 'navy'
}, {
  id: 42,
  category: "공용",
  name: "스몰로고 카라 티",
  price: "79,000원",
  src: "../img/subimg/sub42.jpg",
  price01: 79000,
  pop: 5,
  day: '2023-05-29',
  color: 'orange'
}, {
  id: 43,
  category: "공용 컴포트핏",
  name: "컴포트핏 플래그 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub43.jpg",
  price01: 39000,
  pop: 3,
  day: '2023-05-28',
  color: 'gray'
}, {
  id: 44,
  category: "공용 컴포트핏",
  name: "컴포트핏 플래그 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub44.jpg",
  price01: 39000,
  pop: 2,
  day: '2023-05-27',
  color: 'black'
}, {
  id: 45,
  category: "공용 컴포트핏",
  name: "컴포트핏 마인드블로어 반팔티",
  price: "39,000원",
  src: "../img/subimg/sub45.jpg",
  price01: 39000,
  pop: 1,
  day: '2023-05-26',
  color: 'navy'
}, {
  id: 46,
  category: "공용",
  name: "테니스 배색 카라티셔츠",
  price: "99,000원",
  src: "../img/subimg/sub46.jpg",
  price01: 99000,
  pop: 19,
  day: '2023-05-25',
  color: 'green'
}, {
  id: 47,
  category: "공용 오버핏",
  name: "테잎 오버핏 바람막이 자켓",
  price: "99,000원",
  src: "../img/subimg/sub47.jpg",
  price01: 99000,
  pop: 18,
  day: '2023-05-24',
  color: 'black'
}, {
  id: 48,
  category: "남성",
  name: "퍼포먼스 경량 4.5부 숏팬츠",
  price: "69,000원",
  src: "../img/subimg/sub48.jpg",
  price01: 69000,
  pop: 15,
  day: '2023-05-23',
  color: 'navy'
}, {
  id: 49,
  category: "공용 오버핏",
  name: "테잎 오버핏 우븐 반바지",
  price: "79,000원",
  src: "../img/subimg/sub49.jpg",
  price01: 79000,
  pop: 13,
  day: '2023-05-22',
  color: 'white'
}, {
  id: 50,
  category: "공용",
  name: "테니스 퍼포먼스 반팔티",
  price: "49,000원",
  src: "../img/subimg/sub50.jpg",
  price01: 49000,
  pop: 14,
  day: '2023-05-21',
  color: 'green'
}, {
  id: 51,
  category: "공용",
  name: "라이프 레이어드 반팔티",
  price: "45,000원",
  src: "../img/subimg/sub51.jpg",
  price01: 45000,
  pop: 5,
  day: '2023-05-20',
  color: 'gray'
}, {
  id: 52,
  category: "남성 컴포트핏 테니스",
  name: "테니스 컴포트핏 니트 카라티",
  price: "45,000원",
  src: "../img/subimg/sub52.jpg",
  price01: 45000,
  pop: 10,
  day: '2023-05-19',
  color: 'white'
}, {
  id: 53,
  category: "공용 컴포트핏 라이프스타일",
  name: "컴포트핏 조거팬츠",
  price: "109,000원",
  src: "../img/subimg/sub53.jpg",
  price01: 109000,
  pop: 9,
  day: '2023-05-18',
  color: 'black'
}, {
  id: 54,
  category: "공용 오버핏 라이프스타일",
  name: "오버핏 이지팬츠",
  price: "99,000원",
  src: "../img/subimg/sub54.jpg",
  price01: 99000,
  pop: 6,
  day: '2023-05-17',
  color: 'gray'
}, {
  id: 55,
  category: "공용 오버핏 라이프스타일",
  name: "오버핏 스트링 와이드 팬츠",
  price: "129,000원",
  src: "../img/subimg/sub55.jpg",
  price01: 129000,
  pop: 21,
  day: '2023-05-16',
  color: 'black'
}, {
  id: 56,
  category: "남성",
  name: "스포츠 쿨링 반바지",
  price: "49,000원",
  src: "../img/subimg/sub56.jpg",
  price01: 49000,
  pop: 23,
  day: '2023-05-15',
  color: 'black'
}, {
  id: 57,
  category: "공용 레귤러핏 라이프스타일",
  name: "스트레치 카고 조거팬츠",
  price: "119,000원",
  src: "../img/subimg/sub57.jpg",
  price01: 119000,
  pop: 22,
  day: '2023-05-14',
  color: 'gray'
}, {
  id: 58,
  category: "공용 라이프스타일",
  name: "클래식킥스 B V3",
  price: "45,000원",
  src: "../img/subimg/sub58.jpg",
  price01: 45000,
  pop: 19,
  day: '2023-05-13',
  color: 'black'
}, {
  id: 59,
  category: "공용 라이프스타일",
  name: "FILA athletics 아노락",
  price: "87,200원",
  src: "../img/subimg/sub59.jpg",
  price01: 87200,
  pop: 14,
  day: '2023-05-12',
  color: 'white'
}, {
  id: 60,
  category: "공용 라이프스타일",
  name: "White Line 라켓백",
  price: "119,000원",
  src: "../img/subimg/sub60.jpg",
  price01: 119000,
  pop: 1,
  day: '2023-05-11',
  color: 'black'
}];
var _default = subData;
exports.default = _default;
},{}],"js/sub01.js":[function(require,module,exports) {
"use strict";

var _sub_data = _interopRequireDefault(require("./sub_data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
window.addEventListener('mouseover', function () {
  var mainLogo = document.querySelector('.logoimg');
  var lnbA = document.querySelectorAll('.head_lnb li');
  var head = document.querySelector('header');
  var aTag = document.querySelectorAll('.head_lnb li a');
  var gnbI = document.querySelectorAll('.head_gnb li a i');
  if (window.scrollY === 0) {
    // head.style.backgroundColor = '#fff'

    mainLogo.setAttribute('src', '../img/LOGO/logo01.png');
  }
});
window.addEventListener('scroll', function (e) {
  var mainLnb = document.querySelectorAll('.head_lnb ul li a');
  var mainGnb = document.querySelectorAll('.head_gnb ul li a');
  var mainLogo = document.querySelector('.head_logo .imgwrap img');
  if (window.scrollY > 100) {
    document.querySelector('header').style.backgroundColor = '#fff';
    mainLogo.setAttribute('src', '../img/LOGO/logo01.png');
    for (var i = 0; i < mainLnb.length; i++) {
      mainLnb[i].style.color = 'black';
    }
    for (var _i = 0; _i < mainGnb.length; _i++) {
      mainGnb[_i].style.color = 'black';
    }
  } else if (window.scrollY <= 100) {
    document.querySelector('header').style.backgroundColor = '';
    mainLogo.setAttribute('src', '../img/LOGO/logo03.png');
    for (var _i2 = 0; _i2 < mainLnb.length; _i2++) {
      mainLnb[_i2].style.color = '#fff';
    }
    for (var _i3 = 0; _i3 < mainGnb.length; _i3++) {
      mainGnb[_i3].style.color = '#fff';
    }
  }
});

// header wheel, add remove class event
window.addEventListener('wheel', function (e) {
  var headFix = document.querySelector('header');
  var dropDown = document.querySelector('.dropdown_menu');
  if (e.deltaY > 10) {
    headFix.classList.remove("head_up");
    headFix.classList.add("head_down");
  } else if (e.deltaY == 0) {
    headFix.classList.add("head_down");
  } else if (e.deltaY < -10) {
    headFix.classList.remove("head_down");
    headFix.classList.add("head_up");
  }
});

//gnb search box  click event
document.addEventListener('DOMContentLoaded', function () {
  var searchClose = document.querySelector('.search_close');
  var searchBox = document.querySelector('.search_box');
  searchClose.addEventListener('click', function () {
    searchBox.style.display = 'none';
  });
  var gnbSearch = document.querySelector('.gnb_search');
  gnbSearch.addEventListener('click', function () {
    searchBox.style.display = 'block';
  });
  var searchInput = document.getElementById('searchbox');
  var recentList = document.querySelector('.recent_search ul');
  var recentNo = document.querySelector('.noresearch');

  //검색창 검색어 추가/삭제
  searchInput.addEventListener('change', function () {
    recentNo.style.display = 'none';
    var searchLi = document.createElement('li');
    searchLi.setAttribute('class', 'searchli');
    recentList.appendChild(searchLi);
    searchLi.innerHTML = searchInput.value;
    searchInput.value = '';
    searchInput.focus();
    var liDel = document.createElement('span');
    liDel.setAttribute('class', 'lidel');
    searchLi.appendChild(liDel);
    liDel.innerHTML = 'X';
    liDel.addEventListener('click', function () {
      recentList.removeChild(searchLi);
    });
    var researchAllDel = document.querySelector('.delete_history');
    researchAllDel.addEventListener('click', function () {
      recentList.innerHTML = '';
      recentNo.style.display = 'block';
    });
  });
});

///////////////////////////////////////////////////////////

var subList = document.querySelector('.sublist');
function madeDiv(val) {
  for (var i = 0; i < val.length; i++) {
    var subDiv = document.createElement('div');
    subDiv.setAttribute('class', 'subBox');

    // for (let j = 0; j < subData.length; j++) {
    //     subDiv.setAttribute('id', 'sub_sort')

    // } //아이디값 부여

    var subImgWrap = document.createElement('div');
    subDiv.appendChild(subImgWrap);
    subImgWrap.setAttribute('class', 'subimg_wrap');

    // hover likes and cart
    var hoverBox = document.createElement('div');
    subImgWrap.appendChild(hoverBox);
    hoverBox.setAttribute('class', 'hoverBox');
    var hoverWrap = document.createElement('div');
    hoverBox.appendChild(hoverWrap);
    hoverWrap.setAttribute('class', 'hoverWrap');
    var like = document.createElement('div');
    var likeTxt = document.createElement('i');
    likeTxt.setAttribute('class', 'fas fa-heart');
    like.setAttribute('class', 'like');
    like.appendChild(likeTxt);
    hoverWrap.appendChild(like);
    var cart = document.createElement('div');
    var cartTxt = document.createElement('i');
    cartTxt.setAttribute('class', 'fas fa-shopping-cart');
    cart.appendChild(cartTxt);
    cart.setAttribute('class', 'cart');
    hoverWrap.appendChild(cart);

    //detail link a tag
    var linkA = document.createElement('a');
    linkA.setAttribute('href', '../detailpage/detail.html');
    linkA.setAttribute('class', 'sub_link');
    //img
    var subImg = document.createElement('img');
    subImg.setAttribute('src', val[i].src);
    subImgWrap.appendChild(linkA);
    subImg.setAttribute('class', 'subimg');
    linkA.appendChild(subImg);

    //상품설명
    var itemWrap = document.createElement('div');
    subDiv.appendChild(itemWrap);
    itemWrap.setAttribute('class', 'item_wrap');
    var itemDescWrap = document.createElement('div');
    itemWrap.appendChild(itemDescWrap);
    itemDescWrap.setAttribute('class', 'item_desc_wrap');
    var itemCategory = document.createElement('p');
    var itemCategoryTxt = document.createTextNode(val[i].category);
    itemCategory.appendChild(itemCategoryTxt);
    itemDescWrap.appendChild(itemCategory);
    itemCategory.setAttribute('class', 'item_category');
    var itemName = document.createElement('p');
    var itemNameTxt = document.createTextNode(val[i].name);
    itemName.appendChild(itemNameTxt);
    itemDescWrap.appendChild(itemName);
    itemName.setAttribute('class', 'item_name');
    var itemPrice = document.createElement('p');
    var itemPriceTxt = document.createTextNode(val[i].price);
    itemPrice.appendChild(itemPriceTxt);
    itemDescWrap.appendChild(itemPrice);
    itemPrice.setAttribute('class', 'item_price');

    //구매버튼
    var buyBox = document.createElement('div');
    itemWrap.appendChild(buyBox);
    buyBox.setAttribute('class', 'buy_box');
    var buyBtn = document.createElement('div');
    var buyTxt = document.createTextNode('BUY');
    buyBtn.appendChild(buyTxt);
    buyBox.appendChild(buyBtn);
    buyBtn.setAttribute('class', 'buy_btn');
    subList.appendChild(subDiv);
  }
}
// madeDiv(subData)

////////////////////pagenation/////////////////////////
var nowPage = 0;
var showPerPage = 20; //화면에 보여질 개수

function createPage(val) {
  //const subItems = document.querySelectorAll('.subBox')
  var numOfContent = val.length; // 컨텐츠 개수
  var pageCount = Math.ceil(numOfContent / showPerPage); //페이지 버튼 개수
  var start = nowPage * showPerPage;
  var end = start + showPerPage;
  var newSub = val.slice(start, end);
  madeDiv(newSub);
  var paging = document.querySelector('.paging_ex'); //page 들어갈곳
  for (var i = 1; i <= pageCount; i++) {
    paging.innerHTML += "<li><a href=\"#!\">".concat(i, "</a></li>");
  } // li 생성

  var pageCountBtn = paging.querySelectorAll('a'); //페이지네이션 a

  pageCountBtn.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      var _iterator = _createForOfIteratorHelper(pageCountBtn),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          value.classList.remove('active');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (nowPage !== idx) {
        nowPage = idx;
        paging.innerHTML = '';
        sublist.innerHTML = '';
        createPage(val);
      }
    });
    if (nowPage === idx) {
      pageCountBtn[idx].classList.add('active');
    }

    // //맨앞 맨뒤 페이지 좀더 고민,,,
    var prevBtn = document.querySelector('.prev_btn');
    var nextBtn = document.querySelector('.next_btn');
    prevBtn.addEventListener('click', function () {
      nowPage = 0;
      paging.innerHTML = '';
      sublist.innerHTML = '';
      createPage(val);
    });
    nextBtn.addEventListener('click', function () {
      nowPage = idx;
      paging.innerHTML = '';
      sublist.innerHTML = '';
      createPage(val);
    });
  });
}
createPage(_sub_data.default);

//////////////////select 필터////////////////////////////

var selectBox = document.getElementById('select_sort'); //select box
var sublist = document.querySelector('.sublist');
var paging = document.querySelector('.paging_ex');
selectBox.addEventListener('change', function () {
  if (selectBox.value === 'expensive') {
    var exp = _sub_data.default.sort(function (a, b) {
      return (a.price01 - b.price01) * -1;
    });
    sublist.innerHTML = '';
    paging.innerHTML = '';
    nowPage = 0;
    createPage(exp);
  } else if (selectBox.value === 'cheap') {
    var cheap = _sub_data.default.sort(function (a, b) {
      return a.price01 - b.price01;
    });
    sublist.innerHTML = '';
    paging.innerHTML = '';
    nowPage = 0;
    createPage(cheap);
    //낮은가격순
  } else if (selectBox.value === 'basic') {
    var basic = _sub_data.default.sort(function (a, b) {
      return a.id - b.id;
    });
    sublist.innerHTML = '';
    paging.innerHTML = '';
    nowPage = 0;
    createPage(basic);
    // 기본
  } else if (selectBox.value === 'pop') {
    var pop = _sub_data.default.sort(function (a, b) {
      return a.pop - b.pop;
    });
    sublist.innerHTML = '';
    paging.innerHTML = '';
    nowPage = 0;
    createPage(pop); //인기순
  } else if (selectBox.value === 'new') {
    var newarrival = _sub_data.default.sort(function (a, b) {
      return new Date(a.day).getTime() - new Date(b.day).getTime();
    }); //신상날짜순
    sublist.innerHTML = '';
    paging.innerHTML = '';
    nowPage = 0;
    createPage(newarrival); //신상순
  }
});

//검은색 필터 기능

var blackColor = document.getElementById('color_chk02');
var whiteColor = document.getElementById('color_chk12');
var grayColor = document.getElementById('color_chk06');
var defaultVal = document.getElementById('color_chk14');
var itemlist = document.querySelectorAll('.subBox');
var priceChk01 = document.getElementById('price_chk01');
var priceChk02 = document.getElementById('price_chk02');
var priceChk03 = document.getElementById('price_chk03');
var priceChk04 = document.getElementById('price_chk04');
var priceChk05 = document.getElementById('price_chk05');
var priceChkDefault = document.getElementById('price_chk06');
var bk = _sub_data.default.filter(function (a) {
  return a.color === 'black';
});
var gr = _sub_data.default.filter(function (a) {
  return a.color === 'gray';
});
var wht = _sub_data.default.filter(function (a) {
  return a.color === 'white';
});
var price01 = _sub_data.default.filter(function (a) {
  return a.price01 <= 39000;
});
var price02 = _sub_data.default.filter(function (a) {
  return a.price01 >= 39000 && a.price01 <= 49000;
});
var price03 = _sub_data.default.filter(function (a) {
  return a.price01 >= 49000 && a.price01 <= 59000;
});
var price04 = _sub_data.default.filter(function (a) {
  return a.price01 >= 59000 && a.price01 <= 79000;
});
var price05 = _sub_data.default.filter(function (a) {
  return a.price01 >= 79000;
});
blackColor.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(bk);
});
whiteColor.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(wht);
});
grayColor.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(gr);
});
defaultVal.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(_sub_data.default);
});
priceChk01.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(price01);
});
priceChk02.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(price02);
});
priceChk03.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(price03);
});
priceChk04.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(price04);
});
priceChk05.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(price05);
});
priceChkDefault.addEventListener('click', function () {
  sublist.innerHTML = '';
  paging.innerHTML = '';
  nowPage = 0;
  createPage(_sub_data.default);
});
var filterOpen = document.querySelector('.filter_open');
var filterClose = document.querySelector('.filter_close');
var filterList = document.querySelector('.filter_box_list');

//제이쿼리로 slide up down구현함
// filterOpen.addEventListener('click', () => {

//     filterList.style.display = 'block'

// })
// filterClose.addEventListener('click', () => {
//     filterList.style.display = 'none'
// })

var grid01 = document.querySelector('.grid_01');
var grid02 = document.querySelector('.grid_02');
var subBox = document.querySelectorAll('.subBox');
var wrapping = document.querySelector('.sublist_wrap');
grid01.addEventListener('click', function () {
  wrapping.classList.add('gridchange01');
  wrapping.classList.remove('gridchange02');
  grid02.style.color = '#ccc';
  grid01.style.color = 'black';
});
grid02.addEventListener('click', function () {
  wrapping.classList.add('gridchange02');
  wrapping.classList.remove('gridchange01');
  grid02.style.color = 'black';
  grid01.style.color = '#ccc';
});
var popclose = document.querySelector('.popclose');
var pop01 = document.querySelector('.pop01');
popclose.addEventListener('click', function () {
  pop01.style.display = 'none';
});

//장바구니 카트 클릭이벤트
var cart2 = document.querySelectorAll('.fa-shopping-cart');
var cartCount = document.querySelector('.count');
var cnt = 0;
cart2.forEach(function (value) {
  value.addEventListener('click', function () {
    cnt++;
    cartCount.innerHTML = cnt;
  });
});
var heart = document.querySelectorAll('.fa-heart');
var heartCnt = document.querySelector('.heart_cnt');
var cntheart = 0;
heart.forEach(function (value) {
  value.addEventListener('click', function () {
    cntheart++;
    heartCnt.innerHTML = cntheart;
  });
});

// //paging
// const showPerPage = 20; //화면에 보여질 개수
// const subItems = document.querySelectorAll('.subBox')
// const numOfContent = subItems.length; // 컨텐츠 개수
// const pageCount = Math.ceil(numOfContent / showPerPage); //페이지 버튼 개수

// let paging = document.querySelector('.paging_ex') //page 들어갈곳
// for (let i = 1; i <= pageCount; i++) {
//     paging.innerHTML += `<li><a href="#!">${i}</a></li>`

// } // li 생성

// const pageCountBtn = paging.querySelectorAll('a') //페이지네이션 a

// pageCountBtn.forEach((item, idx) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault()

//         //출력
//         displayItem(idx);
//     })

// })

// function displayItem(idx) {
//     let start = idx * showPerPage // 20개 기준 idx = 0 * 20 = 0, idx=1 * 20 =20 ,,, 
//     let end = start + showPerPage // 20개 기준 start = 20, 40 , 60
//     let subArr = [...subItems] //새로운 배열로 만듬 console에 찍히는 nodelist는 slice 못씀

//     for (let val of subArr) {
//         val.style.display = 'none'
//     }

//     let newSub = subArr.slice(start, end) //새로운 배열로 만듬, start ~ end 구간 slice

//     for (let val of newSub) {
//         val.style.display = ''
//     }
//     for (let value of pageCountBtn) {
//         value.classList.remove('active')

//     }
//     pageCountBtn[idx].classList.add('active')

// }
// displayItem(0)
},{"./sub_data.js":"js/sub_data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53897" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub01.js"], null)
//# sourceMappingURL=/sub01.38598026.js.map