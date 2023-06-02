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
})({"loginpage/js/login.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var numBox = document.querySelector('#hp5');
  var randomNum = Math.floor(Math.random() * 10001);
  var randomTxt = document.createTextNode(randomNum);
  var hpBtn = document.querySelector('.hp_btn');
  hpBtn.addEventListener('click', function () {
    numBox.appendChild(randomTxt);
  });
  var hp4Btn = document.getElementById('hp4_btn');
  var hp4Value = document.getElementById('hp4');
  var numPop = document.querySelector('.num_chk');
  var numPop2 = document.querySelector('.num_chk02');
  hp4Btn.addEventListener('click', function () {
    if (hp4Value.value == randomNum) {
      numPop.style.display = 'block';
      numPop2.style.display = 'none';
    } else {
      numPop.style.display = 'none';
      numPop2.style.display = 'block';
    }
  });

  // const myId = 'woojin'
  // const myPw = 'woojin123'

  var userId = document.getElementById('name');
  var userPw = document.getElementById('passwd');
  var loginBtn = document.getElementById('login_btn');
  var joinBtn = document.getElementById('join_btn');
  var loginPopup = document.querySelector('.login_popup');
  var loginPopup01 = document.querySelector('.login_popup01');
  var loginPopup2 = document.querySelector('.login_popup2');
  var loginPopup3 = document.querySelector('.login_popup3');
  var errcnt = 0;
  loginBtn.addEventListener('click', function () {
    if (userId.value === 'woojin') {
      if (userPw.value === 'woojin123') {
        loginPopup.style.display = 'block';
      } else {
        loginPopup01.style.display = 'block';
        errcnt++;
      }
    } else {
      loginPopup2.style.display = 'block';
    }
    if (errcnt >= 5) {
      loginPopup3.style.display = 'block';
    }
  });

  //id pw 알려주는 팝업

  var idInfo = document.querySelector('.id_pw_info');
  var idInfoClose = document.getElementById('id_info_btn');
  idInfoClose.addEventListener('click', function () {
    idInfo.style.display = 'none';
  });
  var hp2 = document.getElementById('hp2');
  var hp3 = document.getElementById('hp3');
  hp2.addEventListener('keyup', moveHp3);
  function moveHp3() {
    if (hp2.value.length >= 4) {
      hp3.focus();
    }
  }

  //비회원 체크박스 
  var allCheck = document.getElementById('text_chk');
  var checkEls = document.querySelectorAll('.itemchk');
  var check2 = document.getElementById('text_chk2');
  var check3 = document.getElementById('text_chk3');
  var check4 = document.getElementById('text_chk4');
  var check5 = document.getElementById('text_chk5');
  var check6 = document.getElementById('text_chk6');
  allCheck.addEventListener('click', checkAll);
  check2.addEventListener('click', eachCheck);
  check3.addEventListener('click', eachCheck);
  check4.addEventListener('click', eachCheck);
  check5.addEventListener('click', eachCheck);
  function checkAll() {
    if (allCheck.checked === true) {
      checkEls.forEach(function (els) {
        els.checked = true;
      });
    } else if (allCheck.checked === false) {
      checkEls.forEach(function (els) {
        els.checked = false;
      });
    }
  }
  function eachCheck() {
    if (check2.checked && check3.checked && check4.checked && check5.checked) {
      allCheck.checked = true;
    } else {
      allCheck.checked = false;
    }
  }

  //비밀번호 보이게 안보이게하기

  var showPw = document.querySelector('.show_pw');
  var hidePw = document.querySelector('.hide_pw');
  var loginPw = document.querySelector('.loinpw');
  // const pwInput = document.getElementById('passwd')

  showPw.addEventListener('click', function () {
    loginPw.type = 'text';
    hidePw.style.display = 'block';
    showPw.style.display = 'none';
  });
  hidePw.addEventListener('click', function () {
    loginPw.type = 'password';
    hidePw.style.display = 'none';
    showPw.style.display = 'block';
  });

  // const findInputName = document.getElementById('findid')
  // const findInputId = document.getElementById('findpw')
  // const myId = document.querySelector('.idbox')
  // const myPw = document.querySelector('.pwbox')
  // const idBtn = document.getElementById('idbtn')
  // const pwBtn = document.getElementById('pwbtn')

  // idBtn.addEventListener('click', findMyId)
  // pwBtn.addEventListener('click',findMyPw)

  // function findMyId() {
  //     if (findInputName.value === '우진') {

  //         myId.innerHTML = '아이디는 woojin 입니다.'
  //     }else{
  //         myId.innerHTML = '일치하는 아이디가 없습니다.'
  //     }

  // }
  // function findMyPw() {
  //     if (findInputId.value === 'woojin') {

  //         myPw.innerHTML = '비밀번호는 woojin123 입니다.'
  //     }else{
  //         myPw.innerHTML = '일치하는 비밀번호가 없습니다.'
  //     }

  // }
});

$(function () {
  $('.find_id_open').click(function () {
    $('.find_01').css('display', 'block');
  });
  $('.fpw_open').click(function () {
    $('.find_02').css('display', 'block');
  });
  $('.findidclose').click(function () {
    $('.find_01').css('display', 'none');
  });
  $('.findpwclose').click(function () {
    $('.find_02').css('display', 'none');
  });
});
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
$(function () {
  $('.chk_item a').click(function () {
    $('.popup_modal').css('display', 'block');
  });
  $('.close_btn').click(function () {
    $('.popup_modal').css('display', 'none');
  });
  $('.cbtn').click(function () {
    $('.pop').css('display', 'none');
  });
  $('.lnb_women').click(function () {
    $('.drop_women').slideToggle(300);
    $('.drop_men').css('display', 'none');
    $('.drop_kids').css('display', 'none');
    $('.drop_brand').css('display', 'none');
    // $('header').css('backgroundColor','#fff')
    // $('.head_lnb ul li a').css('color','black')
    // $('.head_logo .imgwrap img').attr('src','./img/LOGO/01(1).png')
  });

  $('.lnb_men').click(function () {
    $('.drop_men').slideToggle(300);
    $('.drop_women').css('display', 'none');
    $('.drop_kids').css('display', 'none');
    $('.drop_brand').css('display', 'none');
    // $('header').css('backgroundColor','#fff')
    // $('.head_lnb ul li a').css('color','black')
  });

  $('.lnb_kids').click(function () {
    $('.drop_kids').slideToggle(300);
    $('.drop_women').css('display', 'none');
    $('.drop_men').css('display', 'none');
    $('.drop_brand').css('display', 'none');
    // $('header').css('backgroundColor','#fff')
    // $('.head_lnb ul li a').css('color','black')
  });

  $('.lnb_brand').click(function () {
    $('.drop_brand').slideToggle(300);
    $('.drop_women').css('display', 'none');
    $('.drop_men').css('display', 'none');
    $('.drop_kids').css('display', 'none');
    // $('header').css('backgroundColor','#fff')
    // $('.head_lnb ul li a').css('color','black')
  });

  $('.new_info').click(function () {
    $('.new_info_desc').css('display', 'block');
  });
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52638" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","loginpage/js/login.js"], null)
//# sourceMappingURL=/login.a61632a3.js.map