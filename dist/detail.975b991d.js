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
})({"js/detail.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
    for (var _i = 0; _i < mainLnb.length; _i++) {
      mainLnb[_i].style.color = 'black';
    }
    for (var _i2 = 0; _i2 < mainGnb.length; _i2++) {
      mainGnb[_i2].style.color = 'black';
    }
  } else if (window.scrollY <= 100) {
    document.querySelector('header').style.backgroundColor = '';
    mainLogo.setAttribute('src', '../img/LOGO/logo03.png');
    for (var _i3 = 0; _i3 < mainLnb.length; _i3++) {
      mainLnb[_i3].style.color = '#fff';
    }
    for (var _i4 = 0; _i4 < mainGnb.length; _i4++) {
      mainGnb[_i4].style.color = '#fff';
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
document.addEventListener('DOMContentLoaded', function () {
  var pdcInfoLi = document.querySelectorAll('.pdc_info_tit li');
  var infoBox01 = document.querySelector('.infobox_01');
  var infoBox02 = document.querySelector('.infobox_02');
  var infoBox03 = document.querySelector('.infobox_03');
  pdcInfoLi[0].addEventListener('click', function () {
    pdcInfoLi[2].classList.remove("on");
    pdcInfoLi[1].classList.remove("on");
    pdcInfoLi[0].classList.add("on");
    infoBox01.style.display = 'block';
    infoBox02.style.display = 'none';
    infoBox03.style.display = 'none';
  });
  pdcInfoLi[1].addEventListener('click', function () {
    pdcInfoLi[2].classList.remove("on");
    pdcInfoLi[0].classList.remove("on");
    pdcInfoLi[1].classList.add("on");
    infoBox01.style.display = 'none';
    infoBox02.style.display = 'block';
    infoBox03.style.display = 'none';
  });
  pdcInfoLi[2].addEventListener('click', function () {
    pdcInfoLi[0].classList.remove("on");
    pdcInfoLi[1].classList.remove("on");
    pdcInfoLi[2].classList.add("on");
    infoBox01.style.display = 'none';
    infoBox02.style.display = 'none';
    infoBox03.style.display = 'block';
  });
  var sizeInfo = document.querySelector('.size_info');
  var sizeClose = document.querySelector('.size_close');
  var realSize = document.querySelector('.real_size');
  sizeInfo.addEventListener('click', function () {
    realSize.style.display = 'block';
  });
  sizeClose.addEventListener('click', function () {
    realSize.style.display = 'none';
  });
  var reviewTab = document.querySelectorAll('.review_tab ul li');
  var reviewBox = document.querySelector('.review_box01');
  var noticeBox = document.querySelector('.notice_box01');
  reviewTab[0].addEventListener('click', function () {
    reviewTab[1].classList.remove('on1');
    reviewTab[0].classList.add('on1');
    reviewBox.style.display = 'block';
    noticeBox.style.display = 'none';
  });
  reviewTab[1].addEventListener('click', function () {
    reviewTab[0].classList.remove('on1');
    reviewTab[1].classList.add('on1');
    reviewBox.style.display = 'none';
    noticeBox.style.display = 'block';
  });

  //리뷰 등록

  var reviewBtn = document.getElementById('review_btn'); //리뷰버튼
  var reviewName = document.getElementById('rename'); //리뷰아이디
  var reviewTxt = document.getElementById('retxt'); //리뷰본문
  var R_List = document.querySelector('.R_list');
  reviewBtn.addEventListener('click', function () {
    var Li = document.createElement('li');
    Li.setAttribute('class', 'review_inner');
    var numberBox = document.createElement('div');
    numberBox.setAttribute('class', 'inner_number');
    Li.appendChild(numberBox);
    var numberSpan = document.createElement('span');
    numberSpan.setAttribute('class', 'review_txt');
    numberBox.appendChild(numberSpan);
    var Rcnt = 1;
    var Lis = document.querySelectorAll('.review_inner');
    function plusCnt() {
      for (i = 0; i < Lis.length; i++) {
        Rcnt++;
      }
      numberSpan.innerHTML = Rcnt;
    }
    plusCnt();
    var Rstars = document.querySelector('.review_star'); //사용자가 누르는 별
    var starBox = document.createElement('div');
    starBox.setAttribute('class', 'inner_stars'); //리뷰에 나오는별
    Li.appendChild(starBox);
    starBox.innerHTML = Rstars.innerHTML; //별점 생성 

    // 별
    // const star1 = document.createElement('i')
    // star1.setAttribute('class', 'far fa-star rstar')
    // starBox.appendChild(star1)

    // const star2 = document.createElement('i')
    // star2.setAttribute('class', 'far fa-star rstar')
    // starBox.appendChild(star2)
    // const star3 = document.createElement('i')
    // star3.setAttribute('class', 'far fa-star rstar')
    // starBox.appendChild(star3)
    // const star4 = document.createElement('i')
    // star4.setAttribute('class', 'far fa-star rstar')
    // starBox.appendChild(star4)
    // const star5 = document.createElement('i')
    // star5.setAttribute('class', 'far fa-star rstar')
    // starBox.appendChild(star5)

    var txtBox = document.createElement('div');
    txtBox.setAttribute('class', 'inner_txt');
    Li.appendChild(txtBox);
    var txtspan = document.createElement('span');
    txtspan.setAttribute('class', 'txt_span');
    txtBox.appendChild(txtspan);
    txtspan.innerHTML = reviewTxt.value;
    reviewTxt.value = '';
    var idBox = document.createElement('div');
    idBox.setAttribute('class', 'inner_id');
    Li.appendChild(idBox);
    var idSpan = document.createElement('span');
    idSpan.setAttribute('class', 'id_span');
    idBox.appendChild(idSpan);
    idSpan.innerHTML = reviewName.value;
    reviewName.value = '';
    var dateBox = document.createElement('div');
    dateBox.setAttribute('class', 'inner_date');
    Li.appendChild(dateBox);
    var dateSpan = document.createElement('span');
    dateSpan.setAttribute('class', 'date_span');
    dateBox.appendChild(dateSpan);

    //날짜 넣기
    var nowDate = new Date().toLocaleDateString();
    dateSpan.innerHTML = nowDate;
    var closeBox = document.createElement('div');
    closeBox.setAttribute('class', 'inner_close');
    Li.appendChild(closeBox);
    var closeX = document.createElement('i');
    closeX.setAttribute('class', 'fas fa-times');
    closeBox.appendChild(closeX);
    R_List.appendChild(Li);
    closeX.addEventListener('click', function () {
      R_List.removeChild(Li);
    });
  });

  ////별점 추가 리뷰
  var innerStar = document.querySelectorAll('.inner_stars');
  var reviewStar = document.querySelector('.review_star');
  var ratingStars = _toConsumableArray(document.getElementsByClassName("star1"));
  var ratingResult = document.querySelector(".rating_result");
  var rStar = document.querySelectorAll('.rstar'); //dom 별

  printRatingResult(ratingResult);
  function executeRating(stars, result) {
    var starClassActive = "star1 fas fa-star";
    var starClassUnactive = "star1 far fa-star";
    var starsLength = stars.length;
    var i;
    stars.map(function (star) {
      star.onclick = function () {
        i = stars.indexOf(star);
        if (star.className.indexOf(starClassUnactive) !== -1) {
          printRatingResult(result, i + 1);
          for (i; i >= 0; i--) stars[i].className = starClassActive;
        } else {
          printRatingResult(result, i);
          for (i; i < starsLength; i++) stars[i].className = starClassUnactive;
        }
      };
    });
  }
  function printRatingResult(result) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    result.textContent = "".concat(num, "/5");
  }
  executeRating(ratingStars, ratingResult);

  ///////////////////////////////////////////////////

  //주문수량, 가격 event

  var minusBox = document.querySelector('.minus_box');
  var plusBox = document.querySelector('.plus_box');
  var cntBox = document.getElementById('cnt_box');
  var totalPrice = document.querySelector('.total_price span');
  minusBox.addEventListener('click', function () {
    cntBox.value--;
    if (cntBox.value <= 0) {
      cntBox.value = 1;
    }
    var result = cntBox.value * 119000;
    totalPrice.innerHTML = result.toLocaleString('ko-KR');
    // totalPrice.innerHTML = cntBox.value * 119000
  });

  plusBox.addEventListener('click', function () {
    cntBox.value++;
    if (cntBox.value > 20) {
      alert('수량은 최대 20개 가능합니다.');
      cntBox.value = '20';
    }
    var result = cntBox.value * 119000;
    totalPrice.innerHTML = result.toLocaleString('ko-KR');
    // totalPrice.innerHTML = cntBox.value * 119000
  });

  cntBox.addEventListener('change', function () {
    var result = cntBox.value * 119000;
    totalPrice.innerHTML = result.toLocaleString('ko-KR');
    if (cntBox.value <= 0) {
      cntBox.value = '1';
      alert('수량은 1개이상 가능합니다.');
      totalPrice.innerHTML = '119,000';
    } else if (cntBox.value <= 21) {
      cntBox.value = '20';
      alert('수량은 최대 20개까지 가능합니다.');
    }
  });

  //상품문의 등록
  var noticeName = document.getElementById('notice_name');
  var noticeTxt = document.getElementById('notice_txt');
  var noticeBtn = document.getElementById('notice_btn');
  var noticeList = document.querySelector('.N_list');
  noticeBtn.addEventListener('click', function () {
    var noticeLi = document.createElement('li');
    noticeLi.setAttribute('class', 'notice_inner');
    var noticeNum = document.createElement('div');
    noticeNum.setAttribute('class', 'notice_num');
    noticeLi.appendChild(noticeNum);
    var noticeNumSpan = document.createElement('span');
    noticeNumSpan.setAttribute('class', 'notice_num_span');
    noticeNum.appendChild(noticeNumSpan);
    var Rcnt = 1;
    var noLis = document.querySelectorAll('.notice_inner');
    function plusCnt() {
      for (i = 0; i < noLis.length; i++) {
        Rcnt++;
      }
      noticeNumSpan.innerHTML = Rcnt;
    }
    plusCnt();
    var noticeText = document.createElement('div');
    noticeText.setAttribute('class', 'notice_txt');
    noticeLi.appendChild(noticeText);
    var textSpan = document.createElement('span');
    textSpan.setAttribute('class', 'notice_text_span');
    noticeText.appendChild(textSpan);
    textSpan.innerHTML = noticeTxt.value;
    noticeTxt.value = '';
    var noticeReBtn = document.createElement('div');
    noticeReBtn.setAttribute('class', 'notice_rebtn');
    noticeLi.appendChild(noticeReBtn);
    var noticeBtnSpan = document.createElement('span');
    noticeReBtn.appendChild(noticeBtnSpan);
    noticeBtnSpan.innerHTML = '답글달기';
    var noticeId = document.createElement('div');
    noticeId.setAttribute('class', 'notice_id');
    noticeLi.appendChild(noticeId);
    var noticeIdSpan = document.createElement('span');
    noticeIdSpan.setAttribute('class', 'notice_id_span');
    noticeId.appendChild(noticeIdSpan);
    noticeIdSpan.innerHTML = noticeName.value;
    noticeName.value = '';
    var noticeDate = document.createElement('div');
    noticeDate.setAttribute('class', 'notice_date');
    noticeLi.appendChild(noticeDate);
    var noticeDateSpan = document.createElement('span');
    noticeDateSpan.setAttribute('class', 'notice_date_span');
    noticeDate.appendChild(noticeDateSpan);
    var nowNoticeDate = new Date().toLocaleDateString();
    noticeDateSpan.innerHTML = nowNoticeDate;
    var noticeClose = document.createElement('div');
    noticeClose.setAttribute('class', 'notice_close');
    noticeLi.appendChild(noticeClose);
    var noticeI = document.createElement('i');
    noticeI.setAttribute('class', 'fas fa-times');
    noticeClose.appendChild(noticeI);

    ////re
    var noticeRe = document.createElement('ul');
    noticeRe.setAttribute('class', 'Re_list');
    noticeLi.appendChild(noticeRe);
    noticeList.appendChild(noticeLi);
    noticeClose.addEventListener('click', function () {
      noticeList.removeChild(noticeLi);
    });
    var replyPop = document.querySelector('.re_pop');
    noticeReBtn.addEventListener('click', function () {
      replyPop.style.display = 'block';
    });
  });

  //답글 추가

  var reTxt = document.getElementById('replyTxt');
  var n_List = document.querySelector('.notice_list');
  var reClose = document.getElementById('re_close');
  var rePop = document.querySelector('.re_pop');
  var registBtn = document.getElementById('re_btn');
  registBtn.addEventListener('click', function () {
    var noticeLi = document.querySelector('.Re_list');
    var reply = document.createElement('li');
    reply.setAttribute('class', 'reply_box');
    var replySpan = document.createElement('span');
    replySpan.setAttribute('class', 'reply_span');
    reply.appendChild(replySpan);
    replySpan.innerHTML = 'ㄴ> 답글 :';
    var replyTxt = document.createElement('span');
    replyTxt.setAttribute('class', 'reply_txt');
    reply.appendChild(replyTxt);
    replyTxt.innerHTML = reTxt.value;
    var replyDel = document.createElement('span');
    replyDel.setAttribute('class', 'reply_del');
    reply.appendChild(replyDel);
    replyDel.innerHTML = 'X';
    noticeLi.appendChild(reply);
    replyDel.addEventListener('click', function () {
      noticeLi.removeChild(reply);
    }); ///자식제거
  });

  registBtn.addEventListener('click', function () {
    reTxt.value = '';
  });
  reClose.addEventListener('click', function () {
    rePop.style.display = 'none';
  });

  //장바구니 카트 클릭이벤트
  var cart2 = document.querySelectorAll('.cart_box');
  var cartCount = document.querySelector('.count');
  var cnt = 0;
  cart2.forEach(function (value) {
    value.addEventListener('click', function () {
      cnt++;
      cartCount.innerHTML = cnt;
    });
  });
  var heart = document.querySelectorAll('.like_box');
  var heartCnt = document.querySelector('.heart_cnt');
  var cntheart = 0;
  heart.forEach(function (value) {
    value.addEventListener('click', function () {
      cntheart++;
      heartCnt.innerHTML = cntheart;
    });
  });
});

// const ratingStars = [...document.getElementsByClassName("star1")];
// const ratingResult = document.querySelector(".rating__result");

// printRatingResult(ratingResult);

// function executeRating(stars, result) {
//    const starClassActive = "star1 fas fa-star";
//    const starClassUnactive = "star1 far fa-star";
//    const starsLength = stars.length;
//    let i;
//    stars.map((star) => {
//       star.onclick = () => {
//          i = stars.indexOf(star);

//          if (star.className.indexOf(starClassUnactive) !== -1) {
//             printRatingResult(result, i + 1);
//             for (i; i >= 0; --i) stars[i].className = starClassActive;
//          } else {
//             printRatingResult(result, i);
//             for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
//          }
//       };
//    });
// }

// function printRatingResult(result, num = 0) {
//    result.textContent = `${num}/5`;
// }

// executeRating(ratingStars, ratingResult);

///photo review

var inputFile = document.getElementById('input_file');
// let imgsrc = document.querySelector('.img_wrap img')
var imgBtn = document.querySelector('.upload'); //버튼
var labelName = document.getElementById('label_name'); //라벨
// const photoLi = document.querySelector('.photolist li')

var photoList = document.querySelector('.photolist');
imgBtn.addEventListener('click', function () {
  // imgsrc.src = URL.createObjectURL(inputFile.files[0])

  var lis = document.createElement('li');
  var imgWrap = document.createElement('div');
  imgWrap.setAttribute('class', 'img_wrap');
  lis.appendChild(imgWrap);
  var photoImg = document.createElement('img');
  imgWrap.appendChild(photoImg);
  photoImg.src = URL.createObjectURL(inputFile.files[0]);
  var delPhoto = document.createElement('div');
  delPhoto.setAttribute('class', 'photo_del');
  delPhoto.innerHTML = 'X';
  lis.appendChild(delPhoto);
  photoList.appendChild(lis);
  labelName.textContent = '사진 업로드 click !';
  delPhoto.addEventListener('click', function () {
    photoList.removeChild(lis);
  });
});
inputFile.addEventListener('change', function () {
  // if (inputFile.files[0]) {
  labelName.textContent = inputFile.files[0].name;
  // }
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51625" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail.js"], null)
//# sourceMappingURL=/detail.975b991d.js.map