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

  function generate(dataGen) {
    dataGen.forEach(item => {
      conteiner.innerHTML += `
            <div class="buttonLesson" data-lesson="${item.id}">
                <i class="far fa-file"></i>
                <p>${item.name}</p>
            </div>
            `;
      listCode.frames.push(item.code);
      listCode.links.push(item.link);
    });
  }

  if (document.URL.includes('theory')) {
    generate(data.theory);
  } else if (document.URL.includes('practice')) {
    generate(data.practice);
  } else if (document.URL.includes('video')) {
    data.video.forEach(item => {
      conteiner.innerHTML += `
                <div class="buttonLesson" data-code="${item.code}">
                    <p>${item.name}</p>
                </div>
            `;
      listCode.frames.push(item.code);
    });
  }

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
  const buttons = document.querySelectorAll('.buttonLesson'),
        buttonSearch = document.querySelector(".search button i"),
        modalBlock = document.querySelector('.modalLesson');

  if (document.URL.includes('video')) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  buttonSearch.addEventListener('click', () => {
    if (buttonSearch.parentElement.previousElementSibling.value != "") {
      modalBlock.style.display = "block";
      document.body.style.overflow = "hidden";

      if (document.URL.includes('theory') || document.URL.includes('practice')) {
        modalBlock.querySelector('.content').innerHTML = listCode.frames[buttonSearch.parentElement.previousElementSibling.value - 1] || `<p class="error">Лекції з таким номером не знайдено</p>`;
        modalBlock.querySelector('.header .download a').href = listCode.links[buttonSearch.parentElement.previousElementSibling.value - 1];
      } else if (document.URL.includes('video')) {
        let player = new YT.Player('frame', {
          videoId: listCode.frames[buttonSearch.parentElement.previousElementSibling.value - 1]
        });
      }
    }
  });
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      modalBlock.style.display = "block";
      document.body.style.overflow = "hidden";

      if (document.URL.includes('theory') || document.URL.includes('practice')) {
        modalBlock.querySelector('.content').innerHTML = listCode.frames[button.getAttribute("data-lesson") - 1] || `<p class="error">Лекції з таким номером не знайдено</p>`;
        modalBlock.querySelector('.header .download a').href = listCode.links[button.getAttribute("data-lesson") - 1];
      } else if (document.URL.includes('video')) {
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
          r = heightTop - Math.min(px, heightTop);
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
    input.value = input.value.replace(/\D/, "");
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
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");
/* harmony import */ var _modules_generateButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/generateButtons */ "./src/js/modules/generateButtons.js");





window.addEventListener('DOMContentLoaded', () => {
  const data = {
    "theory": [{
      "id": 1,
      "name": "Тема №1: Поняття про інформаційні системи. Класифікація інформаційних систем",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vRbcfUEeq4VX0SjnynxPxQzghTB9rK5Adj7OsU07_C7IcbBl_k1FPWeNEgOf3kNyigYVPhVdm-lbbOE/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1L4eXYeesh1UzMObkGKJ2g4FeGvW22qmu'
    }, {
      "id": 2,
      "name": "Тема №2: Бази даних та моделі даних. Користувачі бази даних",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vSO1iKBi0Y0JAFZwiEEYgSG5pUMaOh93q4hntZD9dKMMJfiNPi4wx7phGTevppXdm3IH2hmpl5VIMfR/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1Ae6C_ueWQwKmudmmXoIRPOJcr06DPe6w'
    }, {
      "id": 3,
      "name": "Тема №3: Класифікація систем керування базами даних",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vTAyMnda1WXu5Mr96excn5V_ylqtURS1XnMXwI-7j3BibDX2W-wQsuVq54S7oNV85mAxfzPzwfxFsKO/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1QWZxR_5MaYJc36xm39c5HCVQ-ImZ4g4v'
    }, {
      "id": 4,
      "name": "Тема №4: Основні поняття мови SQL. Типи команд SQL",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vQoiSZ0nPiQFV8EfvRt0TTAjY5tUcCMbINEvcdhxQQDOzi-0vL9PvLugGyGtxwU21FWbTiLcXjCZMhT/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1bEeszEpyvF0o1InV6UCV8yyOvhzzoSj2'
    }, {
      "id": 5,
      "name": "Тема №5: Типи даних в SQL",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vTiVkXB01zZIfulWAfRjq5G-5CTOJ5gFXg8IGFHD8NMMo209vCSDj1dxoRDPc34WEJwKXJWDwyJzhxU/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1aZkWBpjyF7mWKGtWVfk7dHD021q08EmU'
    }, {
      "id": 6,
      "name": "Тема №6: Установка програми PgAdmin 4",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vQLaJlPnPloa6S7Qn_XeU7WRt8EDx5uwtWSImV-WxwNpi3p3NknxI_iNW1uKnP2duYUNJKk08XDH6Ra/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1xZfsXe4qe6OEEKftm7OS47jDwz7Vu5_g'
    }, {
      "id": 7,
      "name": "Тема №7: Команди для створення бази даних та таблиць",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vQ4EroSJ4yRF_kNxmW6dE-374ebywrcgsdudCdhzVgzOyTG0Y7j4aoOhag0TrWkyqzqKjHSwxrxQna-/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1i_K4rF5u8Fic3Q_3DZR67WK3fhB1TzBb'
    }, {
      "id": 8,
      "name": "Тема №8: Основні команди для роботи з таблицями в PgAdmin 4",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vTVyNKH8Luzu5rLFq4E21nRcIAX4Mm1Zfk9znqF8miYmv1KC_pm3CQ-TdrMb3LpKoCENsKJsvDDUmFE/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1RA72g4aHHMUgIKx8uVHWIj4JZnK9yP_J'
    }, {
      "id": 9,
      "name": "Тема №9: Вибірка даних зі створених відношень",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vQ_JBNblmBLZHdZJX_d1xk7ajeticzB1VSJHgGrto7HtiBxS93Ye1rrbcP4FstlW1Dz2rPrTEkOURSa/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1ztIzuXO4myNoWB8XAEL_M8Uim6myasvu'
    }, {
      "id": 10,
      "name": "Тема №10: Сортування вибраних даних",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vSyTCdnAV9B1F8yfqeCBxyUWGBXVm9Xz2fAO6mKO3KXv68Urv0TK6f8feZvqmaNfJv5PwD5Dve0MOWz/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1cL3r2fdBYr_lBQBgawwKZpBmrkB8fAvy'
    }, {
      "id": 11,
      "name": "Тема №11: Створення об'єднання таблиць",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vRipl-AiQoXBk-xksMfTVdVZXUSwbgVSe8u8R5rh0nFUvmb9eb1-0DopkjMQboqhrRTFbC2ZisFlojz/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1VfrhXQanyJAKwBzQUxnoDrvTKSm4nUuD'
    }],
    "practice": [{
      "id": 1,
      "name": "Лабораторно-практична робота №1: Створення бази даних та таблиць.",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vRRiS4XzML9OIQpHvnqbCINloBQUd-fgdENEnfCpWDzsbRwdDcSDRVjMK_mqCPprQ/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1fcdlgkA3zQs09UXLWyX3SoS16sb5bHGC'
    }, {
      "id": 2,
      "name": "Лабораторно-практична робота №2: Внесення змін у базу даних та таблиць",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vScUy9HmhNCrtoFtpBTKa5PEhyCSPTPU9BDgFIoQ91ERWgjZe47_WbfI80z7IXEGQ/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1PYs60ZzJuXHsJMGvxHlUOHkLIga9099m'
    }, {
      "id": 3,
      "name": "Лабораторно-практична робота №3: Вибірка даних зі створених відношень",
      "code": "<iframe src='https://docs.google.com/document/d/e/2PACX-1vTjn1BcLZTLrg0DdY9bOqT69A39OlaKkf3HD0aVlSW8_J0qCyrXIbXSVTtSCTiQJA/pub?embedded=true'></iframe>",
      "link": 'https://drive.google.com/uc?export=download&id=1KqE8rexj6a1Ksm2hlbwPCeD9-7K5fFDX'
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
    Object(_modules_generateButtons__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    Object(_modules_search__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else {
    Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map