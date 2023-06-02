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
})({"js/rankSwiperData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rankSwiperTshirt = exports.rankSwiperTennis = exports.rankSwiperTarga = exports.rankSwiperRunning = exports.rankSwiperOnline = void 0;
var rankSwiperTshirt = [{
  name: "베이직 리니어 반팔티",
  src: "./img/swiper_img/01.jpg",
  name2: '컴포트핏 인터네셔널 반팔 맨투맨'
}, {
  name: "3D 빅로고 반팔티",
  src: "./img/swiper_img/02.jpg",
  name2: '컴포트핏 조거팬츠'
}, {
  name: "컴포트핏 인터네셔널 로고 반팔티",
  src: "./img/swiper_img/03.jpg",
  name2: '이지팬츠'
}, {
  name: "컴포트핏 인터네셔널 반팔 맨투맨",
  src: "./img/swiper_img/04.jpg",
  name2: '베이직 리니어 반팔티'
}, {
  name: "컴포트핏 조거팬츠",
  src: './img/swiper_img/05.jpg',
  name2: '3D 빅로고 반팔티'
}, {
  name: "이지팬츠",
  src: "./img/swiper_img/06.jpg",
  name2: '컴포트핏 인터네셔널 로고 반팔티'
}];
exports.rankSwiperTshirt = rankSwiperTshirt;
var rankSwiperTarga = [{
  name: "타르가클래식",
  src: "./img/swiper_img/2-01.jpg",
  name2: '타타르가 클럽'
}, {
  name: "타르가 클럽 LT",
  src: "./img/swiper_img/2-02.jpg",
  name2: '타르가 88/22'
}, {
  name: "타르가 OG 1988",
  src: "./img/swiper_img/2-03.jpg",
  name2: '타르가88/22'
}, {
  name: "타타르가 클럽",
  src: "./img/swiper_img/2-04.jpg",
  name2: '타르가클래식'
}, {
  name: "타르가 88/22",
  src: "./img/swiper_img/2-05.jpg",
  name2: '타르가 클럽 LT'
}, {
  name: "타르가88/22",
  src: "./img/swiper_img/2-06.jpg",
  name2: '타르가 OG 1988'
}];
exports.rankSwiperTarga = rankSwiperTarga;
var rankSwiperOnline = [{
  name: "브이 배색 경량자켓",
  src: "./img/swiper_img/3-01.jpg",
  name2: '스포츠라이프 하프팬츠'
}, {
  name: "컬러블로킹 아노락",
  src: "./img/swiper_img/3-02.jpg",
  name2: '세리프 로고 티셔츠'
}, {
  name: "테니스 하프팬츠",
  src: "./img/swiper_img/3-03.jpg",
  name2: '러팅 반팔 티셔츠'
}, {
  name: "스포츠라이프 하프팬츠",
  src: "./img/swiper_img/3-04.jpg",
  name2: '브이 배색 경량자켓'
}, {
  name: "세리프 로고 티셔츠",
  src: "./img/swiper_img/3-05.jpg",
  name2: '컬러블로킹 아노락'
}, {
  name: "러팅 반팔 티셔츠",
  src: "./img/swiper_img/3-06.jpg",
  name2: '테니스 하프팬츠'
}];
exports.rankSwiperOnline = rankSwiperOnline;
var rankSwiperTennis = [{
  name: "헤리티지 집업",
  src: "./img/swiper_img/4-01.jpg",
  name2: '헤리티지 카라티셔츠'
}, {
  name: "테니스 투어백",
  src: "./img/swiper_img/4-02.jpg",
  name2: '엑실러스 T9'
}, {
  name: "뉴 헤리티지 집업",
  src: "./img/swiper_img/4-03.jpg",
  name2: '테니스 파이핑 자켓'
}, {
  name: "헤리티지 카라티셔츠",
  src: "./img/swiper_img/4-04.jpg",
  name2: '헤리티지 집업'
}, {
  name: "엑실러스 T9",
  src: "./img/swiper_img/4-05.jpg",
  name2: '테니스 투어백'
}, {
  name: "테니스 파이핑 자켓",
  src: "./img/swiper_img/4-06.jpg",
  name2: '뉴 헤리티지 집업'
}];
exports.rankSwiperTennis = rankSwiperTennis;
var rankSwiperRunning = [{
  name: "휠라레이서 L7",
  src: "./img/swiper_img/5-01.jpg",
  name2: '플로트 프라임'
}, {
  name: "휠라레이서 L8",
  src: "./img/swiper_img/5-02.jpg",
  name2: '플로트 엘리트'
}, {
  name: "휠라레이서 L9",
  src: "./img/swiper_img/5-03.jpg",
  name2: '플로트 맥시'
}, {
  name: "플로트 프라임",
  src: "./img/swiper_img/5-04.jpg",
  name2: '휠라레이서 L7'
}, {
  name: "플로트 엘리트",
  src: "./img/swiper_img/5-05.jpg",
  name2: '휠라레이서 L8'
}, {
  name: "플로트 맥시",
  src: "./img/swiper_img/5-06.jpg",
  name2: '휠라레이서 L9'
}];
exports.rankSwiperRunning = rankSwiperRunning;
},{}],"js/NewSwiperData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newSwiperTshirt = exports.newSwiperTennis = exports.newSwiperShoes = void 0;
var newSwiperTshirt = [{
  name: "테니스 짐백",
  src: "./img/newarrival/new01.jpg",
  desc: "가방 뒷편에 신발을 넣을 수 있는 포켓이 구성되어있어 수납성이 높은 짐백입니다.",
  desc2: "휠라 시그니처 허리밴드 포인트로 작게 들어간 F박스 로고 포인트가 적용됐습니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리에스테르 87%<br />폴리우레탄 13%<br />주머니감: 폴리에스테르100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>"
}, {
  name: "휠라 테이퍼 샌들 V3",
  src: "./img/newarrival/new02.jpg",
  desc: "휠라의 베스트 샌들 중 하나인 테이퍼 샌들의 2023 버전입니다.",
  desc2: "시그니처 플래그 디자인을 포인트로 사용한 트렌디한 실루엣의 남녀공용 여름 반팔티입니다.",
  detail: "<span>제품소재</span><br />면 100%<br /><span>상품코드 : 1100FS2RSF2110XOWH</span>"
}, {
  name: "컴포트핏<br/>우븐 후드티",
  src: "./img/newarrival/new03.jpg",
  desc: "컴포트 핏으로 트렌디한 실루엣, 편안한 착용감을 주는 우븐 후드 상품입니다.",
  desc2: "앞 포켓에 라켓 1pcs, 뒷 포켓에 추가 라켓 및 작은 소지품 수납이 가능합니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리우레탄 100% <br /> 안감 : 폴리에스터 100%<br /><span>상품코드 : 1100FS3BCF5205XOWH</span>"
}, {
  name: "테니스 반바지",
  src: "./img/newarrival/new04.jpg",
  desc: "테니스 활동 시, 편안한 착장감과 볼주머니로 활용이 가능한 깊은 주머니감이 실용적입니다.",
  desc2: "가방 안쪽이 파티션으로 구분되어 있어 라켓과 옷을 분리하여 수납이 가능합니다.",
  detail: "<span>제품소재</span><br />겉감: 나일론 100% <br /> 안감: 폴리에스터 100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>"
}, {
  name: "컴포트핏 플래그 반팔티",
  src: './img/newarrival/new05.jpg',
  desc: "착용감이 좋은 우수한 퀄리티의 면 100% 소재를 사용했습니다.",
  desc2: "벨크로를 사용하여 발등높이에 맞게 조절이 가능하여 착용자의 발에 맞춰 편안하게 착용 가능합니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리에스터 100%<br />안감: 폴리에스터 93%+폴리우레탄 7% <br />[창재료] 합성고무<br /><span>상품코드 : 11001SM01977F400</span>"
}, {
  name: "라켓 슬링백",
  src: "./img/newarrival/new06.jpg",
  desc: "오버헤드라켓(~114 sp.in) 수납이 가능한 테니스 슬링백입니다.",
  desc2: "빅로고 프린트의 디자인 포인트와 등판의 벤틸레이션 기능으로 봄~여름에도 착용이 가능한 상품입니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리에스터 100%<br /> 주머니감: 폴리에스터 100%<br /> 해리감:폴리에스터 100%<br /><span>상품코드 : 1100FS2JKF2132XLGY</span>"
}];
exports.newSwiperTshirt = newSwiperTshirt;
var newSwiperTennis = [{
  name: "테니스 배색 카라티",
  src: "./img/newarrival/tennis01.jpg",
  desc: "소프트 터치감의 쿨터치 아스킨 원사를 사용한 피케 조직감의 프리미엄 리사이클 폴리 소재입니다.",
  desc2: "소매 배색 포인트와 FILA 시그니처 스트라이프 넥 디자인 포인트의 테니스 카라 티셔츠입니다",
  detail: "<span>제품소재</span><br />겉감: 폴리에스테르 87%<br />폴리우레탄 13%<br />주머니감: 폴리에스테르100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>"
}, {
  name: "테니스 퍼포먼스 카라티",
  src: "./img/newarrival/tennis02.jpg",
  desc: "소매 배색 포인트와 FILA 시그니처 스트라이프 넥 디자인 포인트의 테니스 카라 티셔츠입니다.",
  desc2: "레귤러핏의 클래식한 무드 디자인으로 다양한 연령대가 일상과 스포츠에서 모두 착용 가능한 스타일입니다.",
  detail: "<span>제품소재</span><br />면 100%<br /><span>상품코드 : 1100FS2RSF2110XOWH</span>"
}, {
  name: "테니스 퍼포먼스 반팔티",
  src: "./img/newarrival/tennis03.jpg",
  desc: "자외선 차단 기능이 우수하고, 흡습속건 및 차열효과를 지닌 수입 피케 소재(RAY BLOCK)입니다.",
  desc2: "레귤러핏으로 스트레치 반바지, 우븐 반바지와 세트 착장(FS2TRF2321M / FS2TRF2322M)시 시그니처 테니스 플레이 룩을 완성합니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리우레탄 100% <br /> 안감 : 폴리에스터 100%<br /><span>상품코드 : 1100FS3BCF5205XOWH</span>"
}, {
  name: "테니스 화이트 반팔티",
  src: "./img/newarrival/tennis04.jpg",
  desc: "FILA의 시그니처인 F박스 와펜과 7 스트라이프 요꼬 테이프 디자인의 깔끔한 스타일의 아이템입니다.",
  desc2: "땀이 많이 발생하는 테니스 플레이 시 쾌적하게 착용이 가능합니다.",
  detail: "<span>제품소재</span><br />겉감: 나일론 100% <br /> 안감: 폴리에스터 100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>"
}, {
  name: "테니스 그린 카라티",
  src: './img/newarrival/tennis05.jpg',
  desc: "자외선 차단 기능이 우수하고, 흡습속건 및 차열효과를 지닌 수입 피케 소재(RAY BLOCK)입니다.",
  desc2: "레귤러핏으로 스트레치 반바지, 우븐 반바지와 세트 착장(FS2TRF2321M / FS2TRF2322M)시 시그니처 테니스 플레이 룩을 완성합니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리에스터 100%<br />안감: 폴리에스터 93%+폴리우레탄 7% <br />[창재료] 합성고무<br /><span>상품코드 : 11001SM01977F400</span>"
}, {
  name: "퍼포먼스 블루 카라티",
  src: "./img/newarrival/tennis06.jpg",
  desc: "소매 배색 포인트와 FILA 시그니처 스트라이프 넥 디자인 포인트의 테니스 카라 티셔츠입니다.",
  desc2: "레귤러핏의 클래식한 무드 디자인으로 다양한 연령대가 일상과 스포츠에서 모두 착용 가능한 스타일입니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리에스터 100%<br /> 주머니감: 폴리에스터 100%<br /> 해리감:폴리에스터 100%<br /><span>상품코드 : 1100FS2JKF2132XLGY</span>"
}];
exports.newSwiperTennis = newSwiperTennis;
var newSwiperShoes = [{
  name: "휠라 스캔라인",
  src: "./img/newarrival/shoes01.jpg",
  desc: "휠라 익스플로어 라인 제품입니다.",
  desc2: "휠라 스캔라인 제품을 나일론 소재 어퍼와 터프한 아웃솔로 변형한 아웃도어 컨셉의 뉴버전입니다.",
  detail: "<span>제품소재</span><br />겉감: 면 87%<br />나일론 13%<br /><br /><span>상품코드 : 1100FS3BSF5205XBLK</span>"
}, {
  name: "휠라 레인저",
  src: "./img/newarrival/shoes02.jpg",
  desc: "오버 사이즈 아웃솔 형태를 적용한 클래식 러닝 제품입니다.",
  desc2: "레이어드된 갑피 패턴과 오버 사이즈 아웃솔의 형태가 더해져 빈티지한 느낌이 돋보이는 스니커즈입니다.",
  detail: "<span>제품소재</span><br />면 합성가죽<br /><span>상품코드 : 1100FS2RSF2110XOWH</span>"
}, {
  name: "디스럽터2 1988",
  src: "./img/newarrival/shoes03.jpg",
  desc: "DISRUPTOR 2 1998은 갑피에 40% 이상 지속가능소재를 사용한 제품입니다",
  desc2: "풍성한 볼륨감을 자랑하는 미드솔의 측면에 FILA 리니어 로고가 선명하게 새겨져 있어 특유의 감성을 나타냅니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리우레탄 100% <br /> 안감 : 폴리에스터 100%<br /><span>상품코드 : 1100FS3BCF5205XOWH</span>"
}, {
  name: "휠라 플로트 엘리트",
  src: "./img/newarrival/shoes04.jpg",
  desc: "FILA의 퍼포먼스 러닝의 최상급 등급 러닝화입니다.",
  desc2: "FLOAT 기술 접목으로 쿠셔닝과 에너지리턴이 뛰어나며,갑피 전체 프리미엄 니트 소재로 착화감&경량성을 극대화시켰습니다.",
  detail: "<span>제품소재</span><br />겉감: 나일론 100% <br /> 안감: 폴리에스터 100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>"
}, {
  name: "휠라 레인저22",
  src: './img/newarrival/shoes05.jpg',
  desc: "오버 사이즈 아웃솔 형태를 적용한 클래식 러닝 제품입니다.",
  desc2: "레이어드된 갑피 패턴과 오버 사이즈 아웃솔의 형태가 더해져 빈티지한 느낌이 돋보이는 스니커즈입니다.",
  detail: "<span>제품소재</span><br />겉감: 폴리에스터 100%<br />안감: 폴리에스터 93%+폴리우레탄 7% <br />[창재료] 합성고무<br /><span>상품코드 : 11001SM01977F400</span>"
}, {
  name: "휠라 스피드서브",
  src: "./img/newarrival/shoes06.jpg",
  desc: "FILA 퍼포먼스 테니스라인업의 최상위 9 시리즈 (호주오픈 컨셉)입니다.",
  desc2: "내외측 측면에 Supportive Lacing System을 적용하여 발 모양에 맞게 착화가 가능합니다.",
  detail: "<span>제품소재</span><br />겉감: 합성가죽 100%<br /> 안감: 폴리에스터 100%<br /><br /><span>상품코드 : 1100FS2JKF2132XLGY</span>"
}];
exports.newSwiperShoes = newSwiperShoes;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _rankSwiperData = require("./rankSwiperData.js");
var _NewSwiperData = require("./NewSwiperData.js");
//header lnb mouseover mouseleave event
// window.addEventListener('DOMContentLoaded', () => {
//     const mainLogo = document.querySelector('.logoimg');
//     const lnbA = document.querySelectorAll('.head_lnb li');
//     const head = document.querySelector('header');
//     const aTag = document.querySelectorAll('.head_lnb li a')
//     const gnbI = document.querySelectorAll('.head_gnb li a i')

//     head.addEventListener('mouseover', () => {

//         mainLogo.setAttribute('src', 'img/LOGO/01(1).png')
//         head.style.backgroundColor = '#fff'

//         for (let i = 0; i < aTag.length; i++) {
//             aTag[i].style.color = 'black'
//         }
//         for (let i = 0; i < lnbA.length; i++) {
//             lnbA[i].style.color = 'black'
//         }
//         gnbI.forEach((value) => {
//             value.style.color = 'black'
//         })

//     })

//     head.addEventListener('mouseleave', () => {

//         mainLogo.setAttribute('src', 'img/LOGO/01(3).png')
//         head.style.backgroundColor = ''

//         for (let i = 0; i < aTag.length; i++) {
//             aTag[i].style.color = '#fff'
//         }
//         gnbI.forEach((value) => {
//             value.style.color = '#fff'
//         })

//     })

// });

// window.addEventListener('mouseover', () => {

//     const mainLogo = document.querySelector('.logoimg');
//     const lnbA = document.querySelectorAll('.head_lnb li');
//     const head = document.querySelector('header');
//     const aTag = document.querySelectorAll('.head_lnb li a')
//     const gnbI = document.querySelectorAll('.head_gnb li a i')

//     if (window.scrollY === 0) {

//         // head.style.backgroundColor = '#fff'

//         mainLogo.setAttribute('src', 'img/LOGO/logo01.png')

//     }

// })

// window.addEventListener('scroll', (e) => {

//     const mainLnb = document.querySelectorAll('.head_lnb ul li a');
//     const mainGnb = document.querySelectorAll('.head_gnb ul li a');
//     const mainLogo = document.querySelector('.head_logo .imgwrap img');

//     if (window.scrollY > 100) {
//         document.querySelector('header').style.backgroundColor = '#fff'
//         mainLogo.setAttribute('src', 'img/LOGO/logo01.png')
//         for (let i = 0; i < mainLnb.length; i++) {
//             mainLnb[i].style.color = 'black'
//         }
//         for (let i = 0; i < mainGnb.length; i++) {
//             mainGnb[i].style.color = 'black'
//         }

//     } else if (window.scrollY <= 100) {
//         document.querySelector('header').style.backgroundColor = ''
//         mainLogo.setAttribute('src', 'img/LOGO/logo03.png')
//         for (let i = 0; i < mainLnb.length; i++) {
//             mainLnb[i].style.color = '#fff'
//         }
//         for (let i = 0; i < mainGnb.length; i++) {
//             mainGnb[i].style.color = '#fff'
//         }

//     }

// })

// // header wheel, add remove class event
// window.addEventListener('wheel', (e) => {

//     const headFix = document.querySelector('header');
//     const dropDown = document.querySelector('.dropdown_menu');

//     if (e.deltaY > 10) {
//         headFix.classList.remove("head_up");
//         headFix.classList.add("head_down");

//     } else if (e.deltaY == 0) {
//         headFix.classList.add("head_down");

//     } else if (e.deltaY < -10) {
//         headFix.classList.remove("head_down");
//         headFix.classList.add("head_up");
//     }

// })

//header wheel, add remove class event
// window.addEventListener('wheel', (e) => {

//     const headFix = document.querySelector('header');

//     if (e.deltaY > 100 && scrollY > 100) { 
//         headFix.classList.remove("head_up");
//         headFix.classList.add("head_down");

//     } else if (e.deltaY == 0) { 
//         headFix.classList.add("head_down");

//     } else if (e.deltaY < -50) {
//         headFix.classList.remove("head_down");
//         headFix.classList.add("head_up");
//     }

// })

//popup close btn event
document.addEventListener('DOMContentLoaded', function () {
  var closeBtn = document.querySelector('.close_btn');
  var popupCount = document.querySelector('.countdown');
  closeBtn.addEventListener('click', function () {
    popupCount.style.display = 'none';
  });
});

//신제품 상품정보 event
document.addEventListener('DOMContentLoaded', function () {
  var newInfoBtn = document.querySelector('.new_info');
  var newInfoDesc = document.querySelector('.new_info_desc');
  var newInfoClose = document.querySelector('.new_box_close');
  newInfoBtn.addEventListener('click', function () {
    newInfoDesc.style.display = 'block';
  });
  newInfoClose.addEventListener('click', function () {
    newInfoDesc.style.display = 'none';
  });
});

//추천상품 circle click event
// document.addEventListener('DOMContentLoaded', () => {

//     const circle = document.querySelector('.rec_circle');
//     const textBox = document.querySelector('.rectext_01');
//     const lineSpan = document.querySelector('.spanline2');

//     let state = false;

//     circle.addEventListener('click', () => {

//         if (!state) {
//             textBox.style.display = 'block'
//             lineSpan.style.transform = 'rotate(0deg)'
//             state = true
//         } else if (state) {
//             textBox.style.display = 'none'
//             lineSpan.style.transform = 'rotate(90deg)'
//             state = false
//         }
//     })

//     const circle2 = document.querySelector('.circle_2')
//     const lineSpan2 = document.querySelector('.spanline3')
//     const textBox2 = document.querySelector('.rectext_02')

//     let state2 = false;

//     circle2.addEventListener('click',()=>{

//         if(!state2){
//             textBox2.style.display = 'block'
//             lineSpan2.style.transform = 'rotate(0deg)'
//             state2 = true
//         }else if(state2){
//             textBox2.style.display = 'none'
//             lineSpan2.style.transform = 'rotate(90deg)'
//             state2 = false
//         }
//     })

// })

//gnb search box  click event
// document.addEventListener('DOMContentLoaded', () => {
//     const searchClose = document.querySelector('.search_close')
//     const searchBox = document.querySelector('.search_box')

//     searchClose.addEventListener('click', () => {
//         searchBox.style.display = 'none';
//     })

//     const gnbSearch = document.querySelector('.gnb_search')

//     gnbSearch.addEventListener('click', () => {
//         searchBox.style.display = 'block'
//     })

//     const searchInput = document.getElementById('searchbox')
//     const recentList = document.querySelector('.recent_search ul')
//     const recentNo = document.querySelector('.noresearch')

//     //검색창 검색어 추가/삭제
//     searchInput.addEventListener('change', function () {
//         recentNo.style.display = 'none'

//         const searchLi = document.createElement('li')
//         searchLi.setAttribute('class', 'searchli')
//         recentList.appendChild(searchLi)
//         searchLi.innerHTML = searchInput.value
//         searchInput.value = ''
//         searchInput.focus()

//         const liDel = document.createElement('span')
//         liDel.setAttribute('class', 'lidel')
//         searchLi.appendChild(liDel)
//         liDel.innerHTML = 'X'

//         liDel.addEventListener('click', function () {
//             recentList.removeChild(searchLi)
//         })

//         const researchAllDel = document.querySelector('.delete_history')
//         researchAllDel.addEventListener('click', function () {

//             recentList.innerHTML = ''
//             recentNo.style.display = 'block'

//         })

//     })

// })

///////////////////랭킹스와이퍼 카테고리 클릭이벤트//////////////////////////

var tshirt = document.getElementById('tshirt');
var online = document.getElementById('online');
var targa = document.getElementById('targa');
var tennis = document.getElementById('tennis');
var running = document.getElementById('running');
var slides = document.querySelectorAll('.rank_slide img');
var rankTit = document.querySelector('.rank_text h4');
var rankList = document.querySelectorAll('.ranklist li');
var hoverTxt = document.querySelectorAll('.hovertit');
tshirt.addEventListener('click', function () {
  rankTit.innerHTML = '#티셔츠 & 팬츠';
  _rankSwiperData.rankSwiperTshirt.forEach(function (value, index) {
    for (var i = 0; i < _rankSwiperData.rankSwiperTshirt.length; i++) {
      slides[index].setAttribute('src', value.src);
      rankList[index].innerHTML = value.name2;
      hoverTxt[index].innerHTML = value.name;
    }
  });
}); //tshirt 클릭이벤트

targa.addEventListener('click', function () {
  rankTit.innerHTML = '#타르가';
  _rankSwiperData.rankSwiperTarga.forEach(function (value, index) {
    for (var i = 0; i < _rankSwiperData.rankSwiperTarga.length; i++) {
      slides[index].setAttribute('src', value.src);
      rankList[index].innerHTML = value.name2;
      hoverTxt[index].innerHTML = value.name;
    }
  });
}); //targa 클릭이벤트

online.addEventListener('click', function () {
  rankTit.innerHTML = '#온라인단독';
  _rankSwiperData.rankSwiperOnline.forEach(function (value, index) {
    for (var i = 0; i < _rankSwiperData.rankSwiperOnline.length; i++) {
      slides[index].setAttribute('src', value.src);
      rankList[index].innerHTML = value.name2;
      hoverTxt[index].innerHTML = value.name;
    }
  });
}); //online 클릭이벤트

tennis.addEventListener('click', function () {
  rankTit.innerHTML = '#테니스';
  _rankSwiperData.rankSwiperTennis.forEach(function (value, index) {
    for (var i = 0; i < _rankSwiperData.rankSwiperTennis.length; i++) {
      slides[index].setAttribute('src', value.src);
      rankList[index].innerHTML = value.name2;
      hoverTxt[index].innerHTML = value.name;
    }
  });
}); //tennis 클릭이벤트

running.addEventListener('click', function () {
  rankTit.innerHTML = '#러닝';
  _rankSwiperData.rankSwiperRunning.forEach(function (value, index) {
    for (var i = 0; i < _rankSwiperData.rankSwiperRunning.length; i++) {
      slides[index].setAttribute('src', value.src);
      rankList[index].innerHTML = value.name2;
      hoverTxt[index].innerHTML = value.name;
    }
  });
}); //tennis 클릭이벤트

//밑에 배열함수와 더러운코드들을 위에 모듈데이터로 생성후 export import 시켜서 foreach 사용하여 처리함.

// tshirt.addEventListener('click', function () {

//     slides[0].setAttribute('src', './img/swiper_img/01.jpg')
//     slides[1].setAttribute('src', './img/swiper_img/02.jpg')
//     slides[2].setAttribute('src', './img/swiper_img/03.jpg')
//     slides[3].setAttribute('src', './img/swiper_img/04.jpg')
//     slides[4].setAttribute('src', './img/swiper_img/05.jpg')
//     slides[5].setAttribute('src', './img/swiper_img/06.jpg')

//     rankTit.innerHTML = '#티셔츠 & 팬츠'

//     const tArr = ['컴포트핏 인터네셔널 반팔 맨투맨', '컴포트핏 조거팬츠', '이지팬츠', '베이직 리니어 반팔티', '3D 빅로고 반팔티', '컴포트핏 인터네셔널 로고 반팔티']
//     for (let i in tArr) {
//         for (let i = 0; i < rankList.length; i++) {
//             rankList[i].innerHTML = tArr[i]

//         }
//     }

//     const hoverArr = ['베이직 리니어 반팔티', '3D 빅로고 반팔티', '컴포트핏 인터네셔널 로고 반팔티', '컴포트핏 인터네셔널 반팔 맨투맨', '컴포트핏 조거팬츠', '이지팬츠']
//     for (let i = 0; i < hoverTxt.length; i++) {
//         hoverTxt[i].innerHTML = hoverArr[i]
//     }

// })

// targa.addEventListener('click', function () {

//     slides[0].setAttribute('src', './img/swiper_img/2-01.jpg')
//     slides[1].setAttribute('src', './img/swiper_img/2-02.jpg')
//     slides[2].setAttribute('src', './img/swiper_img/2-03.jpg')
//     slides[3].setAttribute('src', './img/swiper_img/2-04.jpg')
//     slides[4].setAttribute('src', './img/swiper_img/2-05.jpg')
//     slides[5].setAttribute('src', './img/swiper_img/2-06.jpg')
//     rankTit.innerHTML = '#타르가'

//     const tarArr = ['타르가 클럽', '타르가 88/22', '타르가88/22', '타르가클래식', '타르가 클럽 LT', '타르가 OG 1988']
//     for (let i in tarArr) {
//         for (let i = 0; i < rankList.length; i++) {
//             rankList[i].innerHTML = tarArr[i]
//         }
//     }

//     const hoverArr = ['타르가클래식', '타르가 클럽 LT', '타르가 OG 1988', '타르가 클럽', '타르가 88/22', '타르가88/22']
//     for (let i = 0; i < hoverTxt.length; i++) {
//         hoverTxt[i].innerHTML = hoverArr[i]
//     }

// })

// online.addEventListener('click', function () {

//     slides[0].setAttribute('src', './img/swiper_img/3-04.jpg')
//     slides[1].setAttribute('src', './img/swiper_img/3-05.jpg')
//     slides[2].setAttribute('src', './img/swiper_img/3-06.jpg')
//     slides[3].setAttribute('src', './img/swiper_img/3-01.jpg')
//     slides[4].setAttribute('src', './img/swiper_img/3-02.jpg')
//     slides[5].setAttribute('src', './img/swiper_img/3-03.jpg')
//     rankTit.innerHTML = '#온라인단독'

//     const tarArr = ['브이 배색 경량자켓', '컬러블로킹 아노락', '테니스 하프팬츠', '스포츠라이프 하프팬츠', '세리프 로고 티셔츠', '러팅 반팔 티셔츠']
//     for (let i in tarArr) {
//         for (let i = 0; i < rankList.length; i++) {
//             rankList[i].innerHTML = tarArr[i]
//         }
//     }

//     const hoverArr = ['스포츠라이프 하프팬츠', '세리프 로고 티셔츠', '러팅 반팔 티셔츠', '브이 배색 경량자켓', '컬러블로킹 아노락', '테니스 하프팬츠']
//     for (let i = 0; i < hoverTxt.length; i++) {
//         hoverTxt[i].innerHTML = hoverArr[i]
//     }
// })

// tennis.addEventListener('click', function () {
//     slides[0].setAttribute('src', './img/swiper_img/4-04.jpg')
//     slides[1].setAttribute('src', './img/swiper_img/4-05.jpg')
//     slides[2].setAttribute('src', './img/swiper_img/4-06.jpg')
//     slides[3].setAttribute('src', './img/swiper_img/4-01.jpg')
//     slides[4].setAttribute('src', './img/swiper_img/4-02.jpg')
//     slides[5].setAttribute('src', './img/swiper_img/4-03.jpg')
//     rankTit.innerHTML = '#테니스'

//     const tarArr = ['헤리티지 집업', '테니스 투어백', '뉴 헤리티지 집업', '헤리티지 카라티셔츠', '엑실러스 T9', '테니스 파이핑 자켓']
//     for (let i in tarArr) {
//         for (let i = 0; i < rankList.length; i++) {
//             rankList[i].innerHTML = tarArr[i]
//         }
//     }

//     const hoverArr = ['헤리티지 카라티셔츠', '엑실러스 T9', '테니스 파이핑 자켓', '헤리티지 집업', '테니스 투어백', '뉴 헤리티지 집업']
//     for (let i = 0; i < hoverTxt.length; i++) {
//         hoverTxt[i].innerHTML = hoverArr[i]
//     }

// })

// running.addEventListener('click', function () {
//     slides[0].setAttribute('src', './img/swiper_img/5-04.jpg')
//     slides[1].setAttribute('src', './img/swiper_img/5-05.jpg')
//     slides[2].setAttribute('src', './img/swiper_img/5-06.jpg')
//     slides[3].setAttribute('src', './img/swiper_img/5-01.jpg')
//     slides[4].setAttribute('src', './img/swiper_img/5-02.jpg')
//     slides[5].setAttribute('src', './img/swiper_img/5-03.jpg')
//     rankTit.innerHTML = '#런닝화'

//     const tarArr = ['휠라레이서 L7', '휠라레이서 L8', '휠라레이서 L9', '플로트 프라임', '플로트 엘리트', '플로트 맥시']
//     for (let i in tarArr) {
//         for (let i = 0; i < rankList.length; i++) {
//             rankList[i].innerHTML = tarArr[i]
//         }
//     }

//     const hoverArr = ['플로트 프라임', '플로트 엘리트', '플로트 맥시', '휠라레이서 L7', '휠라레이서 L8', '휠라레이서 L9']
//     for (let i = 0; i < hoverTxt.length; i++) {
//         hoverTxt[i].innerHTML = hoverArr[i]
//     }
// })

////////////신제품 스와이퍼 리팩토링////////////////
var newTshirt = document.getElementById('newTshirt');
var newTennis = document.getElementById('newTennis');
var newShoes = document.getElementById('newShoes');
var newSlide = document.querySelectorAll('.newslide img');
var newTit = document.querySelectorAll('.new_text h4');
var newFirstP = document.querySelectorAll('.new_text .first_p');
var newSecondP = document.querySelectorAll('.new_text .second_p');
var newDetail = document.querySelectorAll('.new_text .new_detail');
newTshirt.addEventListener('click', function () {
  newShoes.classList.remove('new_on');
  newTennis.classList.remove('new_on');
  newTshirt.classList.add('new_on');
  _NewSwiperData.newSwiperTshirt.forEach(function (value, index) {
    for (var i = 0; i < _NewSwiperData.newSwiperTshirt.length; i++) {
      newSlide[index].setAttribute('src', value.src);
      newTit[index].innerHTML = value.name;
      newFirstP[index].innerHTML = value.desc;
      newSecondP[index].innerHTML = value.desc2;
      newDetail[index].innerHTML = value.detail;
    }
  });
});
newTennis.addEventListener('click', function () {
  newTennis.classList.remove('new_on');
  newTshirt.classList.remove('new_on');
  newTennis.classList.add('new_on');
  _NewSwiperData.newSwiperTennis.forEach(function (value, index) {
    for (var i = 0; i < _NewSwiperData.newSwiperTennis.length; i++) {
      newSlide[index].setAttribute('src', value.src);
      newTit[index].innerHTML = value.name;
      newFirstP[index].innerHTML = value.desc;
      newSecondP[index].innerHTML = value.desc2;
      newDetail[index].innerHTML = value.detail;
    }
  });
});
newShoes.addEventListener('click', function () {
  newTennis.classList.remove('new_on');
  newTshirt.classList.remove('new_on');
  newShoes.classList.add('new_on');
  _NewSwiperData.newSwiperShoes.forEach(function (value, index) {
    for (var i = 0; i < _NewSwiperData.newSwiperShoes.length; i++) {
      newSlide[index].setAttribute('src', value.src);
      newTit[index].innerHTML = value.name;
      newFirstP[index].innerHTML = value.desc;
      newSecondP[index].innerHTML = value.desc2;
      newDetail[index].innerHTML = value.detail;
    }
  });
});

//////////////신제품 카테고리 클릭 이벤트//////////////////

// const newTshirt = document.getElementById('newTshirt')
// const newTennis = document.getElementById('newTennis')
// const newShoes = document.getElementById('newShoes')
// const newSlide = document.querySelectorAll('.newslide img')

// const newTit = document.querySelectorAll('.new_text h4')
// const newFirstP = document.querySelectorAll('.new_text .first_p')
// const newSecondP = document.querySelectorAll('.new_text .second_p')
// const newDetail = document.querySelectorAll('.new_text .new_detail')

// newTshirt.addEventListener('click', function () {

//     newShoes.classList.remove('new_on')
//     newTennis.classList.remove('new_on')
//     newTshirt.classList.add('new_on')

//     newSlide[0].setAttribute('src', './img/newarrival/new01.jpg')
//     newSlide[1].setAttribute('src', './img/newarrival/new02.jpg')
//     newSlide[2].setAttribute('src', './img/newarrival/new03.jpg')
//     newSlide[3].setAttribute('src', './img/newarrival/new04.jpg')
//     newSlide[4].setAttribute('src', './img/newarrival/new05.jpg')
//     newSlide[5].setAttribute('src', './img/newarrival/new06.jpg')

//     const newTitArr = ['테니스 짐백', '휠라 테이퍼 샌들 V3', '컴포트핏<br/>우븐 후드티', '테니스 반바지', '컴포트핏 플래그 반팔티', '라켓 슬링백']
//     for (let i in newTitArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newTit[i].innerHTML = newTitArr[i]
//         }
//     }

//     const newFirstArr = [
//         '테니스 활동 시, 편안한 착장감과 볼주머니로 활용이 가능한 깊은 주머니감이 실용적입니다.',
//         '착용감이 좋은 우수한 퀄리티의 면 100% 소재를 사용했습니다.',
//         '오버헤드라켓(~114 sp.in) 수납이 가능한 테니스 슬링백입니다.',
//         '가방 뒷편에 신발을 넣을 수 있는 포켓이 구성되어있어 수납성이 높은 짐백입니다.',
//         '휠라의 베스트 샌들 중 하나인 테이퍼 샌들의 2023 버전입니다.',
//         '컴포트 핏으로 트렌디한 실루엣, 편안한 착용감을 주는 우븐 후드 상품입니다.',

//     ]

//     for (let i in newFirstArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newFirstP[i].innerHTML = newFirstArr[i]
//         }
//     }

//     const newSecondArr = [
//         '휠라 시그니처 허리밴드 포인트로 작게 들어간 F박스 로고 포인트가 적용됐습니다.',
//         '시그니처 플래그 디자인을 포인트로 사용한 트렌디한 실루엣의 남녀공용 여름 반팔티입니다.',
//         '앞 포켓에 라켓 1pcs, 뒷 포켓에 추가 라켓 및 작은 소지품 수납이 가능합니다.',
//         '가방 안쪽이 파티션으로 구분되어 있어 라켓과 옷을 분리하여 수납이 가능합니다.',
//         '벨크로를 사용하여 발등높이에 맞게 조절이 가능하여 착용자의 발에 맞춰 편안하게 착용 가능합니다.',
//         '빅로고 프린트의 디자인 포인트와 등판의 벤틸레이션 기능으로 봄~여름에도 착용이 가능한 상품입니다.',

//     ]

//     for (let i in newSecondArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newSecondP[i].innerHTML = newSecondArr[i]
//         }
//     }

//     const newDetailArr = [
//         '<span>제품소재</span><br />겉감: 폴리에스테르 87%<br />폴리우레탄 13%<br />주머니감: 폴리에스테르100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>',
//         '<span>제품소재</span><br />면 100%<br /><span>상품코드 : 1100FS2RSF2110XOWH</span>',
//         '<span>제품소재</span><br />겉감: 폴리우레탄 100% <br /> 안감 : 폴리에스터 100%<br /><span>상품코드 : 1100FS3BCF5205XOWH</span>',
//         '<span>제품소재</span><br />겉감: 나일론 100% <br /> 안감: 폴리에스터 100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>',
//         '<span>제품소재</span><br />겉감: 폴리에스터 100%<br />안감: 폴리에스터 93%+폴리우레탄 7% <br />[창재료] 합성고무<br /><span>상품코드 : 11001SM01977F400</span>',
//         '<span>제품소재</span><br />겉감: 폴리에스터 100%<br /> 주머니감: 폴리에스터 100%<br /> 해리감:폴리에스터 100%<br /><span>상품코드 : 1100FS2JKF2132XLGY</span>',

//     ]
//     for (let i in newDetailArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newDetail[i].innerHTML = newDetailArr[i]
//         }
//     }

// })

// newTennis.addEventListener('click', function () {
//     newTennis.classList.remove('new_on')
//     newTshirt.classList.remove('new_on')
//     newTennis.classList.add('new_on')

//     newSlide[0].setAttribute('src', './img/newarrival/tennis01.jpg')
//     newSlide[1].setAttribute('src', './img/newarrival/tennis02.jpg')
//     newSlide[2].setAttribute('src', './img/newarrival/tennis03.jpg')
//     newSlide[3].setAttribute('src', './img/newarrival/tennis04.jpg')
//     newSlide[4].setAttribute('src', './img/newarrival/tennis05.jpg')
//     newSlide[5].setAttribute('src', './img/newarrival/tennis06.jpg')

//     const newTitArr = ['테니스 배색 카라티', '테니스 퍼포먼스 카라티', '테니스 퍼포먼스 반팔티', '테니스 화이트 반팔티', '테니스 그린 카라티', '퍼포먼스 블루 카라티']
//     for (let i in newTitArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newTit[i].innerHTML = newTitArr[i]
//         }
//     }

//     const newFirstArr = [
//         '소프트 터치감의 쿨터치 아스킨 원사를 사용한 피케 조직감의 프리미엄 리사이클 폴리 소재입니다.',
//         '소매 배색 포인트와 FILA 시그니처 스트라이프 넥 디자인 포인트의 테니스 카라 티셔츠입니다.',
//         '자외선 차단 기능이 우수하고, 흡습속건 및 차열효과를 지닌 수입 피케 소재(RAY BLOCK)입니다.',
//         'FILA의 시그니처인 F박스 와펜과 7 스트라이프 요꼬 테이프 디자인의 깔끔한 스타일의 아이템입니다.',
//         '자외선 차단 기능이 우수하고, 흡습속건 및 차열효과를 지닌 수입 피케 소재(RAY BLOCK)입니다.',
//         '소매 배색 포인트와 FILA 시그니처 스트라이프 넥 디자인 포인트의 테니스 카라 티셔츠입니다',

//     ]

//     for (let i in newFirstArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newFirstP[i].innerHTML = newFirstArr[i]
//         }
//     }

//     const newSecondArr = [
//         '소매 배색 포인트와 FILA 시그니처 스트라이프 넥 디자인 포인트의 테니스 카라 티셔츠입니다',
//         '레귤러핏의 클래식한 무드 디자인으로 다양한 연령대가 일상과 스포츠에서 모두 착용 가능한 스타일입니다.',
//         '레귤러핏으로 스트레치 반바지, 우븐 반바지와 세트 착장(FS2TRF2321M / FS2TRF2322M)시 시그니처 테니스 플레이 룩을 완성합니다.',
//         '땀이 많이 발생하는 테니스 플레이 시 쾌적하게 착용이 가능합니다.',
//         '레귤러핏으로 스트레치 반바지, 우븐 반바지와 세트 착장(FS2TRF2321M / FS2TRF2322M)시 시그니처 테니스 플레이 룩을 완성합니다.',
//         '레귤러핏의 클래식한 무드 디자인으로 다양한 연령대가 일상과 스포츠에서 모두 착용 가능한 스타일입니다.',

//     ]

//     for (let i in newSecondArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newSecondP[i].innerHTML = newSecondArr[i]
//         }
//     }

//     const newDetailArr = [
//         '<span>제품소재</span><br />겉감: 폴리에스테르 87%<br />폴리우레탄 13%<br />주머니감: 폴리에스테르100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>',
//         '<span>제품소재</span><br />면 100%<br /><span>상품코드 : 1100FS2RSF2110XOWH</span>',
//         '<span>제품소재</span><br />겉감: 폴리우레탄 100% <br /> 안감 : 폴리에스터 100%<br /><span>상품코드 : 1100FS3BCF5205XOWH</span>',
//         '<span>제품소재</span><br />겉감: 나일론 100% <br /> 안감: 폴리에스터 100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>',
//         '<span>제품소재</span><br />겉감: 폴리에스터 100%<br />안감: 폴리에스터 93%+폴리우레탄 7% <br />[창재료] 합성고무<br /><span>상품코드 : 11001SM01977F400</span>',
//         '<span>제품소재</span><br />겉감: 폴리에스터 100%<br /> 주머니감: 폴리에스터 100%<br /> 해리감:폴리에스터 100%<br /><span>상품코드 : 1100FS2JKF2132XLGY</span>',

//     ]
//     for (let i in newDetailArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newDetail[i].innerHTML = newDetailArr[i]
//         }
//     }

// })

// newShoes.addEventListener('click', function () {
//     newTennis.classList.remove('new_on')
//     newTshirt.classList.remove('new_on')
//     newShoes.classList.add('new_on')

//     newSlide[0].setAttribute('src', './img/newarrival/shoes01.jpg')
//     newSlide[1].setAttribute('src', './img/newarrival/shoes02.jpg')
//     newSlide[2].setAttribute('src', './img/newarrival/shoes03.jpg')
//     newSlide[3].setAttribute('src', './img/newarrival/shoes04.jpg')
//     newSlide[4].setAttribute('src', './img/newarrival/shoes05.jpg')
//     newSlide[5].setAttribute('src', './img/newarrival/shoes06.jpg')

//     const newTitArr = ['휠라 스캔라인', '휠라 레인저', '디스럽터2 1988', '휠라 플로트 엘리트', '휠라 레인저22', '휠라 스피드서브']
//     for (let i in newTitArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newTit[i].innerHTML = newTitArr[i]
//         }
//     }

//     const newFirstArr = [
//         '휠라 익스플로어 라인 제품입니다.',
//         '오버 사이즈 아웃솔 형태를 적용한 클래식 러닝 제품입니다.',
//         'DISRUPTOR 2 1998은 갑피에 40% 이상 지속가능소재를 사용한 제품입니다',
//         'FILA의 퍼포먼스 러닝의 최상급 등급 러닝화입니다.',
//         '오버 사이즈 아웃솔 형태를 적용한 클래식 러닝 제품입니다.',
//         'FILA 퍼포먼스 테니스라인업의 최상위 9 시리즈 (호주오픈 컨셉)입니다.',

//     ]

//     for (let i in newFirstArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newFirstP[i].innerHTML = newFirstArr[i]
//         }
//     }

//     const newSecondArr = [
//         '휠라 스캔라인 제품을 나일론 소재 어퍼와 터프한 아웃솔로 변형한 아웃도어 컨셉의 뉴버전입니다.',
//         '레이어드된 갑피 패턴과 오버 사이즈 아웃솔의 형태가 더해져 빈티지한 느낌이 돋보이는 스니커즈입니다.',
//         '풍성한 볼륨감을 자랑하는 미드솔의 측면에 FILA 리니어 로고가 선명하게 새겨져 있어 특유의 감성을 나타냅니다.',
//         'FLOAT 기술 접목으로 쿠셔닝과 에너지리턴이 뛰어나며,갑피 전체 프리미엄 니트 소재로 착화감&경량성을 극대화시켰습니다.',
//         '레이어드된 갑피 패턴과 오버 사이즈 아웃솔의 형태가 더해져 빈티지한 느낌이 돋보이는 스니커즈입니다.',
//         '내외측 측면에 Supportive Lacing System을 적용하여 발 모양에 맞게 착화가 가능합니다.',

//     ]

//     for (let i in newSecondArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newSecondP[i].innerHTML = newSecondArr[i]
//         }
//     }

//     const newDetailArr = [
//         '<span>제품소재</span><br />겉감: 면 87%<br />나일론 13%<br /><br /><span>상품코드 : 1100FS3BSF5205XBLK</span>',
//         '<span>제품소재</span><br />면 합성가죽<br /><span>상품코드 : 1100FS2RSF2110XOWH</span>',
//         '<span>제품소재</span><br />겉감: 폴리우레탄 100% <br /> 안감 : 폴리에스터 100%<br /><span>상품코드 : 1100FS3BCF5205XOWH</span>',
//         '<span>제품소재</span><br />겉감: 나일론 100% <br /> 안감: 폴리에스터 100%<br /><span>상품코드 : 1100FS3BSF5205XBLK</span>',
//         '<span>제품소재</span><br />겉감: 폴리에스터 100%<br />안감: 폴리에스터 93%+폴리우레탄 7% <br />[창재료] 합성고무<br /><span>상품코드 : 11001SM01977F400</span>',
//         '<span>제품소재</span><br />겉감: 합성가죽 100%<br /> 안감: 폴리에스터 100%<br /><br /><span>상품코드 : 1100FS2JKF2132XLGY</span>',

//     ]
//     for (let i in newDetailArr) {
//         for (let i = 0; i < newSlide.length; i++) {
//             newDetail[i].innerHTML = newDetailArr[i]
//         }
//     }

// })

// //장바구니 카트 클릭이벤트
// const cart2 = document.querySelectorAll('.fa-shopping-cart')
// const cartCount = document.querySelector('.count')
// let cnt = 0

// cart2.forEach((value) => {
//     value.addEventListener('click', function () {
//         cnt++
//         cartCount.innerHTML = cnt
//     })
// })

// const heart = document.querySelectorAll('.fa-heart')
// const heartCnt = document.querySelector('.heart_cnt')
// let cntheart = 0

// heart.forEach((value) => {
//     value.addEventListener('click', function () {
//         cntheart++
//         heartCnt.innerHTML = cntheart
//     })
// })

var snsEls = document.querySelectorAll('.sns_box');
// const mgzEls = document.querySelectorAll('.magazine_wrap')

window.addEventListener('scroll', function () {
  if (window.scrollY > 5300) {
    // snsEls.forEach((value, index) => {

    //     gsap.to(value, 0.3 * index, {
    //         translateY: 0,
    //         opacity: 1
    //     })

    // })

    gsap.to(snsEls[0], 0.3, {
      translateY: 0,
      opacity: 1
    });
    gsap.to(snsEls[1], 0.6, {
      translateY: 0,
      opacity: 1
    });
    gsap.to(snsEls[2], 0.9, {
      translateY: 0,
      opacity: 1
    });
    gsap.to(snsEls[3], 1.2, {
      translateY: 0,
      opacity: 1
    });
    gsap.to(snsEls[4], 0.3, {
      translateY: 0,
      opacity: 1
    });
    gsap.to(snsEls[5], 0.6, {
      translateY: 0,
      opacity: 1
    });
    gsap.to(snsEls[6], 0.9, {
      translateY: 0,
      opacity: 1
    });
    gsap.to(snsEls[7], 1.2, {
      translateY: 0,
      opacity: 1
    });
  }
});
var mgz01 = document.querySelectorAll('.mgz_box');
var mgzSection = document.querySelector('.magazine_section');
window.addEventListener('scroll', function () {
  if (window.scrollY > 3600) {
    // gsap.to(mgz01[0], 0.3, {
    //     translateX: 0,
    // })
    // gsap.to(mgz01[1], 0.6, {
    //     translateX: 0,

    // })
    // gsap.to(mgz01[2], 0.9, {
    //     translateX: 0,

    // })
    // gsap.to(mgz01[3], 1.2, {
    //     translateX: 0,

    // })

    mgz01.forEach(function (value, index) {
      gsap.to(value, 0.3 * index, {
        translateX: 0
      });
    });
  }
});

//popinfo close
var closePopInfo = document.querySelector('.close_pop_info');
var popInfo = document.querySelector('.pop_info');
closePopInfo.addEventListener('click', function () {
  popInfo.style.display = 'none';
});

////////family site location////////
// const family = document.getElementById('family_site')
// family.addEventListener('change', (event) => {

//     let options = event.currentTarget.options
//     let index = options.selectedIndex

//     location.href = options[index].value

// })

// window.onload = function () {
//     const family = document.getElementById('family_site')
//     family.addEventListener('change', (event) => {

//         let options = event.currentTarget.options
//         let index = options.selectedIndex

//         location.href = options[index].value

//     })
// }
},{"./rankSwiperData.js":"js/rankSwiperData.js","./NewSwiperData.js":"js/NewSwiperData.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54447" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map