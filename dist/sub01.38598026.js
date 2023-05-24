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
}];
var _default = subData;
exports.default = _default;
},{}],"js/sub01.js":[function(require,module,exports) {
"use strict";

var _sub_data = _interopRequireDefault(require("./sub_data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function madeDiv() {
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
  for (var i = 0; i < _sub_data.default.length; i++) {
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

    //img
    var subImg = document.createElement('img');
    subImg.setAttribute('src', _sub_data.default[i].src);
    subImgWrap.appendChild(subImg);
    subImg.setAttribute('class', 'subimg');

    //상품설명
    var itemWrap = document.createElement('div');
    subDiv.appendChild(itemWrap);
    itemWrap.setAttribute('class', 'item_wrap');
    var itemDescWrap = document.createElement('div');
    itemWrap.appendChild(itemDescWrap);
    itemDescWrap.setAttribute('class', 'item_desc_wrap');
    var itemCategory = document.createElement('p');
    var itemCategoryTxt = document.createTextNode(_sub_data.default[i].category);
    itemCategory.appendChild(itemCategoryTxt);
    itemDescWrap.appendChild(itemCategory);
    itemCategory.setAttribute('class', 'item_category');
    var itemName = document.createElement('p');
    var itemNameTxt = document.createTextNode(_sub_data.default[i].name);
    itemName.appendChild(itemNameTxt);
    itemDescWrap.appendChild(itemName);
    itemName.setAttribute('class', 'item_name');
    var itemPrice = document.createElement('p');
    var itemPriceTxt = document.createTextNode(_sub_data.default[i].price);
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
madeDiv();

///////////////////////ddd//////////////////////

var selectBox = document.getElementById('select_sort'); //select box
var sublist = document.querySelector('.sublist');
selectBox.addEventListener('change', function () {
  if (selectBox.value === 'expensive') {
    _sub_data.default.sort(function (a, b) {
      return (a.price01 - b.price01) * -1;
    });
    sublist.innerHTML = '';
    madeDiv(); //높은가격순
  } else if (selectBox.value === 'cheap') {
    _sub_data.default.sort(function (a, b) {
      return a.price01 - b.price01;
    });
    sublist.innerHTML = '';
    madeDiv(); //낮은가격순
  } else if (selectBox.value === 'basic') {
    _sub_data.default.sort(function (a, b) {
      return a.id - b.id;
    });
    sublist.innerHTML = '';
    madeDiv(); //기본순
  } else if (selectBox.value === 'pop') {
    _sub_data.default.sort(function (a, b) {
      return a.pop - b.pop;
    });
    sublist.innerHTML = '';
    madeDiv(); //인기순
  } else if (selectBox.value === 'new') {
    _sub_data.default.sort(function (a, b) {
      return new Date(a.day).getTime() - new Date(b.day).getTime();
    }); //신상날짜순
    sublist.innerHTML = '';
    madeDiv(); //신상순
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
blackColor.addEventListener('click', function () {
  for (var i = 0; i < _sub_data.default.length; i++) {
    if (_sub_data.default[i].color === 'black') {
      itemlist[i].style.display = 'block';
    } else {
      itemlist[i].style.display = 'none';
    }
  }
});
whiteColor.addEventListener('click', function () {
  for (var i = 0; i < _sub_data.default.length; i++) {
    if (_sub_data.default[i].color === 'white') {
      itemlist[i].style.display = 'block';
    } else {
      itemlist[i].style.display = 'none';
    }
  }
});
grayColor.addEventListener('click', function () {
  for (var i = 0; i < _sub_data.default.length; i++) {
    if (_sub_data.default[i].color === 'gray') {
      itemlist[i].style.display = 'block';
    } else {
      itemlist[i].style.display = 'none';
    }
  }
});
defaultVal.addEventListener('click', function () {
  sublist.innerHTML = '';
  madeDiv();
});
priceChk01.addEventListener('click', function () {
  for (var i = 0; i < _sub_data.default.length; i++) {
    if (_sub_data.default[i].price01 <= 39000) {
      itemlist[i].style.display = 'block';
    } else {
      itemlist[i].style.display = 'none';
    }
  }
});
priceChk02.addEventListener('click', function () {
  for (var i = 0; i < _sub_data.default.length; i++) {
    if (_sub_data.default[i].price01 >= 39000 && _sub_data.default[i].price01 <= 49000) {
      itemlist[i].style.display = 'block';
    } else {
      itemlist[i].style.display = 'none';
    }
  }
});
priceChk03.addEventListener('click', function () {
  for (var i = 0; i < _sub_data.default.length; i++) {
    if (_sub_data.default[i].price01 >= 49000 && _sub_data.default[i].price01 <= 59000) {
      itemlist[i].style.display = 'block';
    } else {
      itemlist[i].style.display = 'none';
    }
  }
});
priceChk04.addEventListener('click', function () {
  for (var i = 0; i < _sub_data.default.length; i++) {
    if (_sub_data.default[i].price01 >= 59000 && _sub_data.default[i].price01 <= 79000) {
      itemlist[i].style.display = 'block';
    } else {
      itemlist[i].style.display = 'none';
    }
  }
});
priceChk05.addEventListener('click', function () {
  for (var i = 0; i < _sub_data.default.length; i++) {
    if (_sub_data.default[i].price01 >= 79000) {
      itemlist[i].style.display = 'block';
    } else {
      itemlist[i].style.display = 'none';
    }
  }
});
priceChkDefault.addEventListener('click', function () {
  sublist.innerHTML = '';
  madeDiv();
});

// for (let i = 0; i < subData.length; i++) {

//     if (priceChk01.checked) {
//         if (subData[i].price01 <= 39000) {
//             itemlist[i].style.display = 'block'
//         } else {
//             itemlist[i].style.display = 'none'
//         }
//     }

// }

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
  wrapping.classList.add('gridchange02');
  wrapping.classList.remove('gridchange01');
  grid02.style.color = '#ccc';
  grid01.style.color = 'black';
});
grid02.addEventListener('click', function () {
  wrapping.classList.add('gridchange01');
  wrapping.classList.remove('gridchange02');
  grid02.style.color = 'black';
  grid01.style.color = '#ccc';
});

// grid01.addEventListener('click', girdChange01)
// grid02.addEventListener('click', girdChange02)

// function girdChange01() {

//     for (let i = 0; i < subBox.length; i++) {
//         // subBox[i].style.width = 'calc(100% - 75% - 25px)'
//         subBox[i].classList.add('gridchange02')
//         subBox[i].classList.remove('gridchange01')
//     }

//     grid02.style.color = '#ccc'
//     grid01.style.color = 'black'

// }

// function girdChange02() {

//     for (let i = 0; i < subBox.length; i++) {
//         // subBox[i].style.width = 'calc(100% - 80% - 24px)'
//         subBox[i].classList.add('gridchange01')
//         subBox[i].classList.remove('gridchange02')
//     }
//     grid02.style.color = 'black'
//     grid01.style.color = '#ccc'

// }

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49855" + '/');
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