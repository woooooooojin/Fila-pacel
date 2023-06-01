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
})({"joinpage/js/join.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var userId = document.getElementById('user_id');
  var userPw1 = document.getElementById('user_pw1');
  var userPw2 = document.getElementById('user_pw2');
  var phoneSecond = document.getElementById('phone_second');
  var phoneThird = document.getElementById('phone_third');
  var userYear = document.getElementById('user_year');
  var userMonth = document.getElementById('user_month');
  var userDay = document.getElementById('user_day');
  var loginBtn = document.getElementById('log_in');
  var userName = document.getElementById('user_name');
  var needCheck = document.querySelector('.need');
  userId.addEventListener('change', checkId);
  userPw1.addEventListener('change', checkPw);
  userPw2.addEventListener('change', comparePW);
  phoneSecond.addEventListener('keyup', moveThird);
  userYear.addEventListener('keyup', moveMonth);
  userMonth.addEventListener('keyup', moveDay);
  userDay.addEventListener('keyup', userDayTest);
  phoneThird.addEventListener('keyup', phThirdCheck);
  loginBtn.addEventListener('click', loginBtnCheck);
  function checkId() {
    var idTrue = document.querySelector('.id_true');
    var idFalse = document.querySelector('.id_false');
    var idvalcheck = /^[a-z0-9]+$/;
    //a-z소문자 0-9숫자  사용할수 있다는 뜻, +는 영소문자,숫자가 한번씩 나와야 한다는 뜻
    var idVal = userId.value;
    if (!idvalcheck.test(idVal) || userId.value.length < 6 || userId.value.length > 16) {
      idTrue.style.display = 'none';
      idFalse.style.display = 'block';
      userId.value = '';
      userId.focus();
    } else {
      idTrue.style.display = 'block';
      idFalse.style.display = 'none';
    }
  } //check id ()

  function loginBtnCheck() {
    if (userId.value === '') {
      alert('아이디를 입력하세요');
    } else if (userPw1.value === '') {
      alert('비밀번호를 입력하세요');
    } else if (userPw2.value === '') {
      alert('비밀번호 확인을 입력하세요');
    } else if (userName.value === '') {
      alert('이름을 입력하세요');
    } else if (userYear.value === '') {
      alert('생년을 입력하세요');
    } else if (userMonth.value === '') {
      alert('생월을 입력하세요');
    } else if (userDay.value === '') {
      alert('생일을 입력하세요');
    } else if (phoneSecond.value === '') {
      alert('휴대폰번호를 입력하세요');
    } else if (phoneThird.value === '') {
      alert('휴대폰번호를 입력하세요');
    } else if (needCheck.checked === false) {
      alert('필수항목에 체크해주세요');
    } else {
      alert('가입완료');
    }
  }
  function checkPw() {
    var pw1True = document.querySelector('.pw1_true');
    var pw1False = document.querySelector('.pw1_false');
    var lock01 = document.querySelector('.lock_1');
    var pwvalCheck = /^[a-zA-Z0-9]+$/;
    //a-z소문자 A-Z대문자 0-9숫자 사용할수 있다는 뜻, +는 영 대,소문자,숫자가 한번씩 나와야 한다는 뜻
    var pwVal = userPw1.value;
    if (!pwvalCheck.test(pwVal) || userPw1.value.length < 8) {
      pw1True.style.display = 'none';
      pw1False.style.display = 'block';
      lock01.style.color = 'red';
      userPw1.value = '';
      userPw1.focus();
    } else {
      pw1True.style.display = 'block';
      pw1False.style.display = 'none';
      lock01.style.color = 'blue';
    }
  } //checkpw ()

  function comparePW() {
    var pw2True = document.querySelector('.pw2_true');
    var pw2False = document.querySelector('.pw2_false');
    var lock02 = document.querySelector('.lock_2');
    if (userPw1.value !== userPw2.value) {
      pw2True.style.display = 'none';
      pw2False.style.display = 'block';
      lock02.style.color = 'red';
    } else {
      pw2True.style.display = 'block';
      pw2False.style.display = 'none';
      lock02.style.color = 'blue';
    }
  } //compare pw()

  function moveThird() {
    var phoneSecondCheck = /[0-9]/;
    var phSecondVal = phoneSecond.value;
    if (phoneSecond.value.length >= 4 && phoneSecondCheck.test(phSecondVal)) {
      phoneThird.focus();
    } else if (!phoneSecondCheck.test(phSecondVal)) {
      alert('숫자만 입력하세요.');
      phoneSecond.value = '';
    }
  } //movethird

  function phThirdCheck() {
    var phoneThirdCheck = /[0-9]/;
    var phoneThirdVal = phoneThird.value;
    if (!phoneThirdCheck.test(phoneThirdVal)) {
      alert('숫자만 입력하세요.');
      phoneThird.value = '';
    }
  }
  function moveMonth() {
    var yearCheck = /[0-9]/;
    var userYearVal = userYear.value;
    if (userYear.value.length >= 4 && yearCheck.test(userYearVal)) {
      userMonth.focus();
    } else if (!yearCheck.test(userYearVal)) {
      alert('숫자만 입력하세요.');
      userYear.value = '';
    }
  } //movemonth

  function moveDay() {
    var monthCheck = /[0-9]/;
    var userMonthVal = userMonth.value;
    if (userMonth.value.length >= 2 && monthCheck.test(userMonthVal)) {
      userDay.focus();
    } else if (!monthCheck.test(userMonthVal)) {
      alert('숫자만 입력하세요.');
      userMonth.value = '';
    }
  } //moveday

  function userDayTest() {
    var dayCheck = /[0-9]/;
    var dayCheckVal = userDay.value;
    if (!dayCheck.test(dayCheckVal)) {
      alert('숫자만 입력하세요.');
      userDay.value = '';
    }
  }

  ///////////////////////////////////////

  var totalTerms = document.getElementById('check01');
  var termsEles = document.querySelectorAll('.chk_el');
  var terms02 = document.getElementById('check02');
  var terms03 = document.getElementById('check03');
  var terms04 = document.getElementById('check04');
  var terms05 = document.getElementById('check05');
  var terms06 = document.getElementById('check06');
  totalTerms.addEventListener('click', allCheck);
  terms02.addEventListener('click', eachCheck);
  terms03.addEventListener('click', eachCheck);
  terms04.addEventListener('click', eachCheck);
  terms05.addEventListener('click', eachCheck);
  function allCheck() {
    if (totalTerms.checked === true) {
      termsEles.forEach(function (termsEl) {
        termsEl.checked = true;
        terms06.checked = false;
      });
    } else {
      termsEles.forEach(function (termsEl) {
        termsEl.checked = false;
      });
    }
  }
  function eachCheck() {
    if (terms02.checked && terms03.checked && terms04.checked && terms05.checked) {
      totalTerms.checked = true;
    } else {
      totalTerms.checked = false;
    }
  }

  /////////////////////////////
  var spanClick = document.querySelector('.span02');
  var spanClick02 = document.querySelector('.span03');
  var spanClick03 = document.querySelector('.span04');
  var spanClick04 = document.querySelector('.span05');
  var spanClick05 = document.querySelector('.span06');
  var popUp01 = document.querySelector('.pop01');
  var popUp02 = document.querySelector('.pop02');
  var popUp03 = document.querySelector('.pop03');
  var popUp04 = document.querySelector('.pop04');
  var popUp05 = document.querySelector('.pop05');
  var closePop = document.querySelector('.close01');
  var closePop02 = document.querySelector('.close02');
  var closePop03 = document.querySelector('.close03');
  var closePop04 = document.querySelector('.close04');
  var closePop05 = document.querySelector('.close05');
  spanClick.addEventListener('click', function () {
    popUp01.style.display = 'block';
  });
  closePop.addEventListener('click', function () {
    popUp01.style.display = 'none';
  });
  spanClick02.addEventListener('click', function () {
    popUp02.style.display = 'block';
  });
  closePop02.addEventListener('click', function () {
    popUp02.style.display = 'none';
  });
  spanClick03.addEventListener('click', function () {
    popUp03.style.display = 'block';
  });
  closePop03.addEventListener('click', function () {
    popUp03.style.display = 'none';
  });
  spanClick04.addEventListener('click', function () {
    popUp04.style.display = 'block';
  });
  closePop04.addEventListener('click', function () {
    popUp04.style.display = 'none';
  });
  spanClick05.addEventListener('click', function () {
    popUp05.style.display = 'block';
  });
  closePop05.addEventListener('click', function () {
    popUp05.style.display = 'none';
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53694" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","joinpage/js/join.js"], null)
//# sourceMappingURL=/join.a2cac77b.js.map