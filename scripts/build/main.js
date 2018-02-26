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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var initAddMyItem_1 = __webpack_require__(1);
var initWeather_1 = __webpack_require__(2);
var initPlace_1 = __webpack_require__(3);
var saveList_1 = __webpack_require__(4);
function main() {
    initAddMyItem_1.default();
    initWeather_1.default();
    initPlace_1.default();
    saveList_1.default();
}
main();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function initAddMyItem() {
    var button = document.getElementById("b2");
    button.addEventListener("click", addListItem);
    function addListItem(event) {
        var items = document.getElementById("items");
        var inText = document.getElementById("in1");
        if (event == undefined) {
            return;
        }
        var target = event.target;
        if (target.name == undefined) {
            return;
        }
        if (inText.value != '') {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(inText.value));
            items.appendChild(li);
            inText.value = '';
        }
    }
}
exports.default = initAddMyItem;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function initWeather() {
    var button = document.getElementById("b1");
    var items = document.getElementById("items");
    var w1 = document.getElementById("su");
    var w2 = document.getElementById("rain");
    var w3 = document.getElementById("snow");
    var w4 = document.getElementById("wind");
    button.addEventListener("click", calculateItems);
    function calculateItems(event) {
        if (event == undefined) {
            return;
        }
        var target = event.target;
        if (target.name == undefined) {
            return;
        }
        if (items) {
            while (items.firstChild) {
                items.removeChild(items.firstChild);
            }
            if (w1.checked) {
                var t1 = [
                    "солнцезащитные очки",
                    "крем SPF 50",
                    "головной убор"
                ];
                t1.forEach(function (item) {
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                });
                w1.checked = false;
            }
            if (w2.checked) {
                var t2 = ["зонт", "непромокаемая обувь", "тент", "дождевик"];
                t2.forEach(function (item) {
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                });
                w2.checked = false;
            }
            if (w3.checked) {
                var t3 = ["термобелье", "горнолыжный костюм", "теплая обувь", "термос", "шапка", "перчатки"];
                t3.forEach(function (item) {
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                });
                w3.checked = false;
            }
            if (w4.checked) {
                var t4 = [
                    "непродуваемая куртка",
                    "шарф"
                ];
                t4.forEach(function (item) {
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                });
                w4.checked = false;
            }
        }
    }
}
exports.default = initWeather;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function initPlace() {
    var button = document.getElementById("b1");
    var items = document.getElementById("items");
    var w1 = document.getElementById("lake");
    var w2 = document.getElementById("forest");
    var w3 = document.getElementById("mountains");
    var w4 = document.getElementById("beach");
    button.addEventListener("click", onExtern);
    function onExtern(event) {
        if (event == undefined) {
            return;
        }
        var target = event.target;
        if (target.name == undefined) {
            return;
        }
        if (items) {
            if (w1.checked) {
                var t1 = [
                    "удочка",
                    "лодка",
                    "спасательный жилет"
                ];
                t1.forEach(function (item) {
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                });
                w1.checked = false;
            }
            if (w2.checked) {
                var t2 = [
                    "средство от насекомых",
                    "корзина для ягод/грибов",
                    "компас"
                ];
                t2.forEach(function (item) {
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                });
                w2.checked = false;
            }
            if (w3.checked) {
                var t3 = [
                    "веревка и карабины"
                ];
                t3.forEach(function (item) {
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                });
                w3.checked = false;
            }
            if (w4.checked) {
                var t4 = [
                    "купальник",
                    "шлепанцы"
                ];
                t4.forEach(function (item) {
                    var li = document.createElement('li');
                    li.appendChild(document.createTextNode(item));
                    items.appendChild(li);
                });
                w4.checked = false;
            }
        }
    }
}
exports.default = initPlace;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function save() {
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", saveText);
    var ul = document.getElementById('items');
    function saveText(event) {
        if (event == undefined) {
            return;
        }
        var target = event.target;
        if (target.name == undefined) {
            return;
        }
        var lis = ul.getElementsByTagName('li');
        var lisContent = Array.prototype.slice.call(lis).map(function (item) {
            return item.textContent;
        });
        console.log(lisContent);
        console.log(JSON.stringify(lisContent));
        fetch('http://localhost:3000/save', {
            method: "POST",
            body: JSON.stringify(lisContent),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
}
exports.default = save;


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map