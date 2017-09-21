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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas() {
        var _this = this;

        _classCallCheck(this, Canvas);

        // Get canvas
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext('2d');

        // Canvas buttons
        this.loadBtn = document.getElementById('load');
        this.deleteBtn = document.getElementById('delete');

        // Size ranges
        this.lineWidth = document.getElementById('line-width');
        this.lineHeight = document.getElementById('line-height');

        // Get src for image
        this.src = document.getElementById('image-url');

        // Local storage buttons
        this.loadToLocalStorageBtn = document.getElementById('load-in-ls');
        this.loadFromLocalStorageBtn = document.getElementById('load-from-ls');
        this.clearLocalStorageBtn = document.getElementById('clear-ls');

        // Colors controller
        this.red = document.getElementById('red');
        this.green = document.getElementById('green');
        this.blue = document.getElementById('blue');
        this.alpha = document.getElementById('alpha');

        // Digital colors controllers
        this.redDig = document.getElementById('digital-red');
        this.greenDig = document.getElementById('digital-green');
        this.blueDig = document.getElementById('digital-blue');
        this.alphaDig = document.getElementById('digital-alpha');

        this.ranges = document.querySelectorAll('.range');

        // Clear canvas
        this.deleteBtn.addEventListener('click', function () {
            _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
        });

        // Local Storage Listeners
        this.loadToLocalStorageBtn.addEventListener('click', function () {
            if (!_this.src.value) {
                alert('Input is empty, paste url, after try to save it');
            }
            localStorage.setItem('img-src', _this.src.value);
        });

        this.loadFromLocalStorageBtn.addEventListener('click', function () {
            var srcFromLs = localStorage.getItem('img-src');
            if (!srcFromLs) {
                alert('Local storage is empty');
            }
            _this.createImage(srcFromLs, _this.lineWidth.value, _this.lineHeight.value);
        });

        this.clearLocalStorageBtn.addEventListener('click', function () {
            localStorage.clear();
            alert('Local storage has been cleared');
        });

        // Load image
        this.loadBtn.addEventListener('click', function () {
            _this.createImage(_this.src.value, _this.lineWidth.value, _this.lineHeight.value);
        });

        // Size listeners
        this.lineHeight.addEventListener('change', function () {
            _this.createPicture(_this.lineWidth.value, _this.lineHeight.value);
        });
        this.lineWidth.addEventListener('change', function () {
            _this.createPicture(_this.lineWidth.value, _this.lineHeight.value);
        });

        // Add listeners, rewrite picture if you change size
        this.ranges.forEach(function (input) {
            input.addEventListener('change', function () {
                _this.createPicture(_this.lineWidth.value, _this.lineHeight.value);
            });
        });

        // Range listeners
        this.red.addEventListener('change', function () {
            _this.redDig.value = _this.red.value;
        });
        this.green.addEventListener('change', function () {
            _this.greenDig.value = _this.green.value;
        });
        this.blue.addEventListener('change', function () {
            _this.blueDig.value = _this.blue.value;
        });
        this.alpha.addEventListener('change', function () {
            _this.alphaDig.value = _this.alpha.value;
        });

        // Digital controller listeners
        this.redDig.addEventListener('change', function () {
            _this.red.value = _this.redDig.value;
        });
        this.greenDig.addEventListener('change', function () {
            _this.green.value = _this.greenDig.value;
        });
        this.blueDig.addEventListener('change', function () {
            _this.blue.value = _this.blueDig.value;
        });
        this.alphaDig.addEventListener('change', function () {
            _this.alpha.value = _this.alphaDig.value;
        });
    }

    // Create image


    _createClass(Canvas, [{
        key: 'createImage',
        value: function createImage(src, width, height) {
            var _this2 = this;

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var img = new Image();
            img.addEventListener("load", function () {
                _this2.ctx.drawImage(img, 0, 0, width, height);
            }, false);
            img.src = src;
        }

        // Create picture

    }, {
        key: 'createPicture',
        value: function createPicture(w, h) {
            if (!!w && !!h) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.fillStyle = 'rgba( ' + this.red.value + ', ' + this.green.value + ', ' + this.blue.value + ', ' + this.alpha.value + ')';
                this.ctx.fillRect(0, 0, w, h);
            } else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.fillStyle = 'rgba( ' + this.red.value + ', ' + this.green.value + ', ' + this.blue.value + ', ' + this.alpha.value + ')';
                this.ctx.fillRect(0, 0, 500, 500);
            }
        }
    }]);

    return Canvas;
}();

var picture = new Canvas();
picture.createPicture();

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map