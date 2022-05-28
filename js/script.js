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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return burger; });
function burger(selButton, selMenu) {
  const menu = document.querySelector(selMenu);
  const btn = document.querySelector(selButton);
  btn.addEventListener('click', () => {
    if (!menu.parentElement.classList.contains("active")) {
      document.body.style.overflowY = "hidden";
      menu.parentElement.classList.add("active");
    } else {
      menu.parentElement.classList.remove("active");
      document.body.style.overflowY = "";
    }
  });
}

/***/ }),

/***/ "./src/js/modules/generateButtons.js":
/*!*******************************************!*\
  !*** ./src/js/modules/generateButtons.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateButtons; });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");

async function generateButtons(data) {
  const conteiner = document.querySelector("main .limit");
  let listCode = {
    "frames": [],
    "links": []
  };

  function generate(dataGen, mod) {
    conteiner.innerHTML = "";
    dataGen.forEach(item => {
      conteiner.innerHTML += `
            <div class="buttonLesson" data-lesson="${item.id}">
                <i class="${mod ? 'far fa-file' : 'fas fa-file-download'}"></i>
                <div class="link">
                    <a href="${mod ? '#' : item.link}">${item.name}</a>
                </div>
            </div>
            `;
      listCode.frames.push(item.code);
      listCode.links.push(item.link);
    });
  }

  function tehnicalFun(mod) {
    if (document.URL.includes('theory')) {
      generate(data.theory, mod);
    } else if (document.URL.includes('practice')) {
      generate(data.practice, mod);
    }
  }

  if (document.URL.includes('video')) {
    data.video.forEach(item => {
      conteiner.innerHTML += `
                <div class="buttonLesson" data-code="${item.code}">
                    <p>${item.name}</p>
                </div>
            `;
      listCode.frames.push(item.code);
    });
  }

  window.getComputedStyle(document.querySelector(".burger")).display == "flex" ? tehnicalFun(0) : tehnicalFun(1);
  let i = 0;
  window.addEventListener('resize', () => {
    if (window.getComputedStyle(document.querySelector(".burger")).display == "flex" && i === 0) {
      tehnicalFun(0);
      i++;
    } else if (window.getComputedStyle(document.querySelector(".burger")).display == "none" && i === 1) {
      tehnicalFun(1);
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(listCode);
      i--;
    }
  });
  Object(_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(listCode);
}

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
function modal(listCode) {
  const buttons = document.querySelectorAll(document.URL.includes('video') ? '.buttonLesson' : '.buttonLesson a'),
        buttonSearch = document.querySelector(".search form"),
        modalBlock = document.querySelector('.modalLesson');

  if (document.URL.includes('video')) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  buttonSearch.addEventListener('submit', event => {
    event.preventDefault();

    if (buttonSearch.firstElementChild.value != "") {
      if (window.getComputedStyle(document.querySelector(".burger")).display == "none") {
        modalBlock.style.display = "block";
        document.body.style.overflow = "hidden";

        if (document.URL.includes('theory') || document.URL.includes('practice')) {
          modalBlock.querySelector('.content').innerHTML = listCode.frames[buttonSearch.firstElementChild.value - 1] || `<p class="error">Лекції з таким номером не знайдено</p>`;
          modalBlock.querySelector('.header .download a').href = listCode.links[buttonSearch.firstElementChild.value - 1];
        }
      } else {
        if (!document.URL.includes('video')) {
          document.documentElement.querySelector(`.buttonLesson:nth-child(${buttonSearch.firstElementChild.value})`).querySelector("a").click();
        }
      }

      if (document.URL.includes('video')) {
        modalBlock.style.display = "block";
        document.body.style.overflow = "hidden";
        let player = new YT.Player('frame', {
          videoId: listCode.frames[buttonSearch.firstElementChild.value - 1]
        });
      }
    }
  });
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      if (window.getComputedStyle(document.querySelector(".burger")).display == "none") {
        modalBlock.style.display = "block";
        document.body.style.overflow = "hidden";

        if (document.URL.includes('theory') || document.URL.includes('practice')) {
          modalBlock.querySelector('.content').innerHTML = listCode.frames[button.closest('.buttonLesson').getAttribute("data-lesson") - 1] || `<p class="error">Лекції з таким номером не знайдено</p>`;
          modalBlock.querySelector('.header .download a').href = listCode.links[button.closest('.buttonLesson').getAttribute("data-lesson") - 1];
        }
      }

      if (document.URL.includes('video')) {
        modalBlock.style.display = "block";
        document.body.style.overflow = "hidden";
        let player = new YT.Player('frame', {
          videoId: event.target.getAttribute("data-code")
        });
      }
    });
  });
  modalBlock.addEventListener('click', event => {
    if (event.target.classList.contains('content') || event.target.parentElement.classList.contains('close') || event.target.classList.contains('close')) {
      modalBlock.style.display = "none";
      document.body.style.overflow = "";

      if (document.URL.includes('video')) {
        modalBlock.querySelector('.content').innerHTML = '<div id="frame"></div>';
      }
    }
  });
}

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scroll; });
function scroll() {
  let links = document.querySelectorAll('[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let heightTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top;
      requestAnimationFrame(step);
      let px = 0;

      function step() {
        px += 40;
        let r;

        if (toBlock < 0) {
          r = heightTop - Math.min(px, Math.abs(toBlock));
          document.documentElement.scrollTo(0, r);
        } else {
          r = heightTop + Math.min(px, toBlock);
          document.documentElement.scrollTo(0, r);
        }

        if (r != heightTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return search; });
function search() {
  const input = document.querySelector(".search input");
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9]/, "");
  });
}

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");
/* harmony import */ var _modules_generateButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/generateButtons */ "./src/js/modules/generateButtons.js");






window.addEventListener('DOMContentLoaded', () => {
  const data = {
    "theory": [{
      "id": 1,
      "name": "Тема №1: Поняття про інформаційні системи. Класифікація інформаційних систем",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTOgS6Op22kJOZZBQffBtM-xFfKOMyc41fPqs7fJ3tAnucQm_4eezjCSPRdlZwwQA/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1GxnPq7Ch-PlpQQJFq9swSRfMtcrlKjUl'
    }, {
      "id": 2,
      "name": "Тема №2: Бази даних та моделі даних. Користувачі бази даних",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSNkGMOb9t0q6Kv9ielOHo7s92Nj5a8K7jo2bIzJFwPVyAMwgh4YAZwMEaolqnt8A/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=12LleQqZ9JvVBAyHDXVCB0dI9zGISgmpD'
    }, {
      "id": 3,
      "name": "Тема №3: Класифікація систем керування базами даних",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTv-7L7pOT-iLGJVU-gjtffQQblYw8bXGx5Tpf5yPLa0FtH_0vc0OFmzbozP0Wi5w/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1RY5vrODL5_aUl4Fnl8VTgaFWeV3uFBc0'
    }, {
      "id": 4,
      "name": "Тема №4: Основні поняття мови SQL. Типи команд SQL",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vSLF8AQfOdZ_do-qmbP0Mm-cJ_7X3E0AgIgqbM1tKnA_Ai3RlRvIVV6Bwit11_UEA/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1-iYbSaYM9rVgrWFG3OPUlA_QVxrluDsW'
    }, {
      "id": 5,
      "name": "Тема №5: Типи даних в SQL",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTiwyPsJbziGkd7nW8RguyVsaPIqaHoX536BY3ZM0pszE5UqYvyEnypsSGmdhIXoA/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1yi_bR3iLE0B9Pir-RG4k46FpI86DHyzY'
    }, {
      "id": 6,
      "name": "Тема №6: Установка програми PgAdmin 4",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTrYR6btuayC_-jnyzZTC-LRkXTPaBko1reNiIGEsj4I39pcRk5vUI5on2xqjqpCQ/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=13A44LMYt4JbTavHIdV3wcoo-VsvfZ7NF'
    }, {
      "id": 7,
      "name": "Тема №7: Команди для створення бази даних та таблиць",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTmT-EFWNcWCOq4qWy6vGOVhWhgQDnjVEme3WnR1iG_gke0MlfMUYBvbbSRyYUsxg/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1gHaVO5NAd5-L3QKVfm_cGqHSSEwNntDy'
    }, {
      "id": 8,
      "name": "Тема №8: Основні команди для роботи з таблицями в PgAdmin 4",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRrbi_TSo-S_1-AkqNdMJ_o1mOxTprz-gn8iQBLI0V2LiKGTy2EYBTgWfn3ag3RKA/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1i9Jxx9sERU-vysz3nuAjzRssg3xsFL14'
    }, {
      "id": 9,
      "name": "Тема №9: Вибірка даних зі створених відношень",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vT2AVBaoZeKKU570ol_p_Chfth1ITSqt6vn0wfcHNliXD-6USWyYerOXhK7i58cpg/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1TKXhVmHf2HuWZnX9Wem-X5Qjv2A0Rcuq'
    }, {
      "id": 10,
      "name": "Тема №10: Сортування вибраних даних",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vQNW2Ove9OYrl7ZdtcYWVhiNxxOhrz0lIFpVC_TxAHimrD6_pw7hkqkehe7D5a5hg/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1bhQpxxmEf3YMQjyqS2PoF5UiDT3GlaVi'
    }, {
      "id": 11,
      "name": "Тема №11: Створення об'єднання таблиць",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRmi5s0At1Ap1It00zSXIMqmEgAmAJ1BYJa44JfCTfemwByfuzh5ZV9oafo8PgeOQ/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1AnAAYjw4AcqnQu-WNI8DZQbCf_GAdqdM'
    }],
    "practice": [{
      "id": 1,
      "name": "Лабораторно-практична робота №1: Створення бази даних та таблиць.",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vRanFfz8Sft2meGbUoKeZ_ghcCU04uUasLECqYNqSSmzf-pHhz3ucUb8t9UwBlstg/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1rmeVyDvnPQ2Ly3y7UnPK5CxWkiOcXFRh'
    }, {
      "id": 2,
      "name": "Лабораторно-практична робота №2: Внесення змін у базу даних та таблиць",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTI4cshx5B6unAI4M7WLvwq0NsOgcjMzArq2fOi0taIUHLxXeHIlHeIqTF6dWfEWA/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=1W7rttMeIaz6FfmCmRrg5ALZU8uhPphhu'
    }, {
      "id": 3,
      "name": "Лабораторно-практична робота №3: Вибірка даних зі створених відношень",
      "code": '<iframe src="https://docs.google.com/document/d/e/2PACX-1vS2zTXhsLE6OfWHbo61jFRmfRv_QSfCPabdi-Ch71Q1GkK_SD0niym1Sbsj8LEvAQ/pub?embedded=true"></iframe>',
      "link": 'https://drive.google.com/uc?export=download&id=183gaEoKryL8hbeeIPV2r-dY3yxUcFHw7'
    }],
    "video": [{
      "id": 1,
      "name": '#1 Введение в PostgreSQL',
      "code": 'HVQNxdI6fqY'
    }, {
      "id": 2,
      "name": '#2 Базовые SELECT запросы',
      "code": 'QlTKtC0_Wgk'
    }, {
      "id": 3,
      "name": '#3 Соединения (JOIN)',
      "code": 'oKVbDq84GzY'
    }, {
      "id": 4,
      "name": '#4 Подзапросы в SQL',
      "code": '_3rTKVFXz10'
    }, {
      "id": 5,
      "name": '#5 DDL: создание БД, таблиц и их модификация',
      "code": '4NVHu34abo0'
    }, {
      "id": 6,
      "name": '#6 Проектирование и нормализация Базы Данных (БД)',
      "code": 'AdWi1L5Q13o'
    }, {
      "id": 7,
      "name": '#7 Представления в SQL',
      "code": 'Q7aR6J7kSSo'
    }, {
      "id": 8,
      "name": '#8 Логика с CASE и COALESCE в SQL',
      "code": 'vABhrFQJ9hk'
    }, {
      "id": 9,
      "name": '#9 Функции SQL',
      "code": 'c4nadBeCHSQ'
    }, {
      "id": 10,
      "name": '#10 Функции pl/pgSQL',
      "code": 'akmegPNS6Zs'
    }, {
      "id": 11,
      "name": '#11 Ошибки их обработка в SQL (исключения)',
      "code": 'Vp2fxh1A3Fg'
    }]
  };

  if (document.URL.includes('theory') || document.URL.includes('practice') || document.URL.includes('video')) {
    Object(_modules_generateButtons__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
    Object(_modules_search__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } else {
    Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }

  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])(".burger .btn", ".link");
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
