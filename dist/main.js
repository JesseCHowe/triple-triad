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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/cards/cards.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/cards/cards.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".card {\\n  width: 300px;\\n  height: 400px; }\\n\\n.card_i {\\n  width: 300px;\\n  height: 400px; }\\n\\n.card-values {\\n  font-size: 70px;\\n  font-family: Impact, Charcoal, sans-serif;\\n  font-weight: 900;\\n  stroke: #fff;\\n  stroke-width: 3px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/gameBoard/cards/cards.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/coinFlip/coinFlip.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/coinFlip/coinFlip.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_coin_moogle_coin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/coin/moogle-coin.png */ \"./src/assets/coin/moogle-coin.png\");\n/* harmony import */ var _assets_coin_chocobo_coin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/coin/chocobo-coin.png */ \"./src/assets/coin/chocobo-coin.png\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_coin_moogle_coin_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_coin_chocobo_coin_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".coinContainer {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background: rgba(0, 0, 0, 0.5);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.coinChoice {\\n  width: 400px;\\n  padding: 0.5rem;\\n  display: flex;\\n  justify-content: space-around;\\n  height: auto; }\\n  .coinChoice > * {\\n    margin: 1rem; }\\n\\n@media (max-width: 500px) {\\n  .coinChoice {\\n    width: 100%;\\n    padding: 0; } }\\n\\n#coin {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  border: 5px solid silver;\\n  box-shadow: inset 0px 0px 10px #000;\\n  background-size: cover;\\n  border-radius: 100%;\\n  height: 150px;\\n  position: relative;\\n  width: 150px;\\n  transition: 0.5s linear;\\n  transform-style: preserve-3d; }\\n\\n#coin:after {\\n  background-color: silver;\\n  bottom: 0;\\n  content: \\\"\\\";\\n  left: 72.5px;\\n  position: absolute;\\n  top: 0;\\n  width: 5px;\\n  z-index: -10;\\n  transform: rotateY(-90deg);\\n  transform-origin: 100% 50%; }\\n\\n#coin:before {\\n  background-color: silver;\\n  box-sizing: border-box;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  box-shadow: inset 0px 0px 10px #000;\\n  background-size: cover;\\n  border-radius: 100%;\\n  content: \\\"\\\";\\n  height: 150px;\\n  left: 0;\\n  position: absolute;\\n  top: 0;\\n  width: 150px;\\n  transform: translateZ(-5px); }\\n\\n.coinChoice div {\\n  width: 150px;\\n  height: 150px;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  border-radius: 50%;\\n  -webkit-box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.3), 0 12px 20px -10px rgba(0, 0, 0, 0.4);\\n  -moz-box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.3), 0 12px 20px -10px rgba(0, 0, 0, 0.4);\\n  box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.3), 0 12px 20px -10px rgba(0, 0, 0, 0.4); }\\n\\n.coinChoice .heads {\\n  background: red;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  box-shadow: inset 0px 0px 10px #000;\\n  border: 5px solid silver; }\\n\\n.coinChoice .tails {\\n  background: black;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: cover;\\n  box-shadow: inset 0px 0px 10px #000;\\n  border: 5px solid silver; }\\n\\n#coin.heads {\\n  -webkit-animation: flipHeads 3s ease-out forwards;\\n  -moz-animation: flipHeads 3s ease-out forwards;\\n  -o-animation: flipHeads 3s ease-out forwards;\\n  animation: flipHeads 3s ease-out forwards; }\\n\\n#coin.tails {\\n  -webkit-animation: flipTails 3s ease-out forwards;\\n  -moz-animation: flipTails 3s ease-out forwards;\\n  -o-animation: flipTails 3s ease-out forwards;\\n  animation: flipTails 3s ease-out forwards; }\\n\\n@keyframes flipHeads {\\n  from {\\n    transform: rotateY(0); }\\n  to {\\n    transform: rotateY(1800deg); } }\\n\\n@-webkit-keyframes flipHeads {\\n  from {\\n    -webkit-transform: rotateY(0);\\n    -moz-transform: rotateY(0);\\n    transform: rotateY(0); }\\n  to {\\n    -webkit-transform: rotateY(1800deg);\\n    -moz-transform: rotateY(1800deg);\\n    transform: rotateY(1800deg); } }\\n\\n@keyframes flipTails {\\n  from {\\n    transform: rotateY(0); }\\n  to {\\n    transform: rotateY(1980deg); } }\\n\\n@-webkit-keyframes flipTails {\\n  from {\\n    -webkit-transform: rotateY(0);\\n    -moz-transform: rotateY(0);\\n    transform: rotateY(0); }\\n  to {\\n    -webkit-transform: rotateY(1980deg);\\n    -moz-transform: rotateY(1980deg);\\n    transform: rotateY(1980deg); } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/gameBoard/coinFlip/coinFlip.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/gamOver/gameOver.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/gamOver/gameOver.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".game-over-container {\\n  background: rgba(0, 0, 0, 0.5);\\n  width: 100%;\\n  height: 100vh;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.game-over {\\n  z-index: 300;\\n  height: auto;\\n  background-color: #333;\\n  background-image: url(\\\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%239ab0c9' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E\\\");\\n  border: 5px solid silver;\\n  box-shadow: inset 0px 0px 10px #000;\\n  padding: 2rem;\\n  top: 0;\\n  left: 0; }\\n  .game-over h1 {\\n    color: #fff;\\n    font-weight: bold; }\\n  .game-over button {\\n    margin: 0 auto;\\n    border: none;\\n    outline: none;\\n    padding: 1rem;\\n    background: #fff;\\n    display: block; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/gameBoard/gamOver/gameOver.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/containers/characterSelection/characterSelection.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/containers/characterSelection/characterSelection.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".select-screen-container {\\n  width: 100%;\\n  height: 100vh;\\n  position: absolute;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.select-screen > * {\\n  margin: 2rem auto; }\\n\\n.chooseTarget {\\n  width: 100%;\\n  max-width: 500px;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: space-around;\\n  color: #fff;\\n  font-weight: bold;\\n  font-size: 2rem;\\n  font-family: \\\"Lato\\\", sans-serif; }\\n\\n.body {\\n  width: fit-content;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  grid-gap: 15px 15px; }\\n\\n.character {\\n  flex: 1;\\n  border: 5px solid silver;\\n  width: 150px;\\n  height: 150px;\\n  background: #000;\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  box-shadow: inset 0 0 5px #000000; }\\n\\n.character-image {\\n  width: 300px;\\n  height: 400px;\\n  stroke: #efefef;\\n  stroke-width: 5; }\\n\\n.startGameBtn {\\n  margin: 0 auto;\\n  border: none;\\n  outline: none;\\n  padding: 1rem;\\n  background: #fff;\\n  display: block; }\\n\\n.character-profile-name {\\n  color: #fff;\\n  font-weight: bold;\\n  display: block;\\n  text-align: center;\\n  text-transform: capitalize;\\n  font-family: \\\"Lato\\\", sans-serif;\\n  margin-top: 0.5rem; }\\n\\n@media (max-width: 700px) {\\n  .select-screen-container {\\n    height: auto;\\n    position: relative;\\n    padding: 1rem 0.5rem;\\n    min-height: 100vh; }\\n    .select-screen-container .body {\\n      display: flex;\\n      flex-wrap: wrap;\\n      justify-content: space-evenly; }\\n      .select-screen-container .body .character-contain {\\n        margin: 1rem; } }\\n\\n@media (max-width: 400px) {\\n  .select-screen-container .body .character-contain {\\n    margin: 0rem; }\\n  .select-screen-container .body .character-profile-name {\\n    margin-bottom: 1rem;\\n    margin-top: 0.25rem; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/containers/characterSelection/characterSelection.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/containers/gameBoard/gameBoard.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/containers/gameBoard/gameBoard.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".game_container {\\n  width: 100%;\\n  height: 100vh;\\n  overflow: hidden;\\n  display: flex;\\n  align-items: center; }\\n\\n@media (max-width: 700px) {\\n  .game_container {\\n    height: auto;\\n    overflow: auto; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/containers/gameBoard/gameBoard.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html,\\nbody {\\n  margin: 0;\\n  padding: 0; }\\n\\npre {\\n  padding: 8px 16px;\\n  background: #2b3a42;\\n  color: #e1e6e9;\\n  font-family: Menlo, Courier, monospace;\\n  font-size: 13px;\\n  line-height: 1.5;\\n  text-shadow: 0 1px 0 rgba(23, 31, 35, 0.5);\\n  border-radius: 3px; }\\n\\n:root {\\n  --player-color: #96a5d8;\\n  --opponent-color: #9f2313;\\n  --main-padding: 15px; }\\n\\n.test {\\n  width: 100%;\\n  height: 70px;\\n  background: pink; }\\n\\n#app {\\n  position: relative;\\n  width: 100%;\\n  height: 100vh;\\n  display: -webkit-box;\\n  display: -webkit-flex;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n  -webkit-align-items: center;\\n  -ms-flex-align: center;\\n  align-items: center;\\n  position: relative;\\n  background-color: #2a2d38;\\n  background-image: url(\\\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%239ab0c9' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E\\\"); }\\n\\n@media (max-width: 700px) {\\n  #app {\\n    height: auto;\\n    min-height: 100vh; } }\\n\\n.main {\\n  display: grid;\\n  grid-template-columns: 33% auto;\\n  height: 100vh; }\\n\\n.desc {\\n  overflow: scroll;\\n  padding: 1rem; }\\n\\nbutton {\\n  border: none;\\n  border-bottom: 1px solid #333;\\n  padding: 0; }\\n\\np {\\n  font-size: 14px;\\n  line-height: 1.65;\\n  font-family: Georgia; }\\n\\nh1 {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-size: 36px;\\n  font-weight: 300;\\n  margin-top: 0; }\\n  h1 .taka {\\n    font-size: 12px;\\n    color: #000; }\\n  h1 .tri {\\n    font-weight: 400; }\\n\\nh2 {\\n  font-weight: 300;\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-size: 26px; }\\n\\n.tile {\\n  width: 300px;\\n  height: 400px;\\n  fill: none;\\n  fill: #2a2d38;\\n  stroke: #fff;\\n  stroke-width: 2px;\\n  stroke-opacity: 0.2; }\\n\\n#game {\\n  margin: 0 auto;\\n  max-width: 750px;\\n  width: 100%; }\\n\\n.game_turn text {\\n  font-family: \\\"Lato\\\", sans-serif; }\\n\\n.score text {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  text-anchor: middle;\\n  font-size: 300px; }\\n\\n@media only screen and (max-width: 1050px) {\\n  .main {\\n    display: block; }\\n  .desc {\\n    display: none; }\\n  .game_container {\\n    display: -webkit-box;\\n    display: -webkit-flex;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-align: center;\\n    -webkit-align-items: center;\\n    -ms-flex-align: center;\\n    align-items: center; }\\n  #game {\\n    width: 100%; } }\\n\\n.play-again {\\n  width: 100%;\\n  height: 100vh;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background: rgba(0, 0, 0, 0.5);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  display: none; }\\n  .play-again .play-again-content {\\n    max-width: 300px;\\n    background: #fff;\\n    padding: 1rem; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/cards sync recursive ^\\.\\/.*\\.jpg$":
/*!*********************************************!*\
  !*** ./src/assets/cards sync ^\.\/.*\.jpg$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./card_1.jpg\": \"./src/assets/cards/card_1.jpg\",\n\t\"./card_10.jpg\": \"./src/assets/cards/card_10.jpg\",\n\t\"./card_11.jpg\": \"./src/assets/cards/card_11.jpg\",\n\t\"./card_12.jpg\": \"./src/assets/cards/card_12.jpg\",\n\t\"./card_13.jpg\": \"./src/assets/cards/card_13.jpg\",\n\t\"./card_14.jpg\": \"./src/assets/cards/card_14.jpg\",\n\t\"./card_15.jpg\": \"./src/assets/cards/card_15.jpg\",\n\t\"./card_16.jpg\": \"./src/assets/cards/card_16.jpg\",\n\t\"./card_17.jpg\": \"./src/assets/cards/card_17.jpg\",\n\t\"./card_18.jpg\": \"./src/assets/cards/card_18.jpg\",\n\t\"./card_19.jpg\": \"./src/assets/cards/card_19.jpg\",\n\t\"./card_2.jpg\": \"./src/assets/cards/card_2.jpg\",\n\t\"./card_20.jpg\": \"./src/assets/cards/card_20.jpg\",\n\t\"./card_21.jpg\": \"./src/assets/cards/card_21.jpg\",\n\t\"./card_22.jpg\": \"./src/assets/cards/card_22.jpg\",\n\t\"./card_23.jpg\": \"./src/assets/cards/card_23.jpg\",\n\t\"./card_24.jpg\": \"./src/assets/cards/card_24.jpg\",\n\t\"./card_25.jpg\": \"./src/assets/cards/card_25.jpg\",\n\t\"./card_26.jpg\": \"./src/assets/cards/card_26.jpg\",\n\t\"./card_27.jpg\": \"./src/assets/cards/card_27.jpg\",\n\t\"./card_28.jpg\": \"./src/assets/cards/card_28.jpg\",\n\t\"./card_29.jpg\": \"./src/assets/cards/card_29.jpg\",\n\t\"./card_3.jpg\": \"./src/assets/cards/card_3.jpg\",\n\t\"./card_30.jpg\": \"./src/assets/cards/card_30.jpg\",\n\t\"./card_31.jpg\": \"./src/assets/cards/card_31.jpg\",\n\t\"./card_32.jpg\": \"./src/assets/cards/card_32.jpg\",\n\t\"./card_33.jpg\": \"./src/assets/cards/card_33.jpg\",\n\t\"./card_34.jpg\": \"./src/assets/cards/card_34.jpg\",\n\t\"./card_35.jpg\": \"./src/assets/cards/card_35.jpg\",\n\t\"./card_36.jpg\": \"./src/assets/cards/card_36.jpg\",\n\t\"./card_37.jpg\": \"./src/assets/cards/card_37.jpg\",\n\t\"./card_38.jpg\": \"./src/assets/cards/card_38.jpg\",\n\t\"./card_39.jpg\": \"./src/assets/cards/card_39.jpg\",\n\t\"./card_4.jpg\": \"./src/assets/cards/card_4.jpg\",\n\t\"./card_40.jpg\": \"./src/assets/cards/card_40.jpg\",\n\t\"./card_5.jpg\": \"./src/assets/cards/card_5.jpg\",\n\t\"./card_6.jpg\": \"./src/assets/cards/card_6.jpg\",\n\t\"./card_7.jpg\": \"./src/assets/cards/card_7.jpg\",\n\t\"./card_8.jpg\": \"./src/assets/cards/card_8.jpg\",\n\t\"./card_9.jpg\": \"./src/assets/cards/card_9.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/cards sync recursive ^\\\\.\\\\/.*\\\\.jpg$\";\n\n//# sourceURL=webpack:///./src/assets/cards_sync_^\\.\\/.*\\.jpg$?");

/***/ }),

/***/ "./src/assets/cards/card_1.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_1.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4dd304f57bc380f8f56c507cf25cf0cc.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_1.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_10.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_10.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5300123c8e80ce962a2c0193b5e9432a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_10.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_11.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_11.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a6044c1109b5f5261ddaa8ead242798b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_11.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_12.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_12.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"710cefb9d008b884274907889937ea81.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_12.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_13.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_13.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1593be7ba6b67cc64811cbac1538c47d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_13.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_14.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_14.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d4d120a60fcc55e7f8fd47e4b92cd475.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_14.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_15.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_15.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d8a110f7230ba07c47bb175ac1638347.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_15.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_16.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_16.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b984bbc88ff7a871c754e54667abcccc.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_16.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_17.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_17.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c95633ccc6b3371b83562009ff7f06f0.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_17.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_18.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_18.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d2a1509933015fa201607aec87321049.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_18.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_19.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_19.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"daa56761f99134db314dbc385140cb4b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_19.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_2.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_2.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1350fd5e2e5c39317f65e74bff775094.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_2.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_20.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_20.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f916c8ada0c294b1fe32d465529d193b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_20.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_21.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_21.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4527944ecc5f6f2d095ee926ede15a73.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_21.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_22.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_22.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6aab86d35690e0f267a2262cb3c7f2e7.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_22.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_23.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_23.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3838ea01fbf905e4f89050732501026a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_23.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_24.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_24.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9d35e956edeaea3508c5da82ac3ebbf4.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_24.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_25.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_25.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f64c0386ac9538aa43185fd3c69b9c61.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_25.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_26.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_26.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1306821d5b538f5752a5b8a621182eae.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_26.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_27.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_27.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1267f3b5804f4d1904b5c1dd627c75ca.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_27.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_28.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_28.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3ec73fac2d19c27f7f1554ceac81609a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_28.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_29.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_29.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cdc036af4711aa59f3b8817f45c6fe53.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_29.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_3.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_3.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4da65e0e8cd3acc7542f99d4fbe287d0.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_3.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_30.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_30.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8bcd8b944f60a751ce27b1aaa8d3f925.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_30.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_31.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_31.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cb9623b16b2ad13d6f8239355f9693d8.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_31.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_32.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_32.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"64da0b6adf60b504ac71bf1ea10d8510.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_32.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_33.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_33.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"087237def65fa7d28b4a2dab5ec9bc4a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_33.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_34.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_34.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"216603f40c5ad5abd8ee4e384567898d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_34.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_35.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_35.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b6c1b694ef5a4de2b10203d84f9f4e7c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_35.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_36.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_36.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1ed367448949a5d1ab27e3d4c2a50a81.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_36.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_37.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_37.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"30f5859ef477adeecf6f91e1b9c83c61.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_37.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_38.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_38.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3f3d469cf67af210b83405dc181e3e9c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_38.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_39.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_39.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0dfeab13de1846190619d1827ee9f52d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_39.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_4.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_4.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2d529ddb59e634c928a191b46685a29a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_4.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_40.jpg":
/*!**************************************!*\
  !*** ./src/assets/cards/card_40.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4aaebb70982d82299956ddb79c59bf79.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_40.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_5.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_5.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"60e5e000dc98a936dfab6c22e9871493.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_5.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_6.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_6.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"55d42e86f49305a212b06e1f56a381c2.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_6.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_7.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_7.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"524a1f23e10bb5abcd5b1cf625418c2c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_7.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_8.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_8.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f3daa9511a3fdb340d3d5272a763492d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_8.jpg?");

/***/ }),

/***/ "./src/assets/cards/card_9.jpg":
/*!*************************************!*\
  !*** ./src/assets/cards/card_9.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"436a80e928b2044da93b4d49f2b7d7f2.jpg\");\n\n//# sourceURL=webpack:///./src/assets/cards/card_9.jpg?");

/***/ }),

/***/ "./src/assets/characters sync recursive ^\\.\\/.*\\-profile\\.png$":
/*!***********************************************************!*\
  !*** ./src/assets/characters sync ^\.\/.*\-profile\.png$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./cloud-profile.png\": \"./src/assets/characters/cloud-profile.png\",\n\t\"./kefka-profile.png\": \"./src/assets/characters/kefka-profile.png\",\n\t\"./kuja-profile.png\": \"./src/assets/characters/kuja-profile.png\",\n\t\"./sephiroth-profile.png\": \"./src/assets/characters/sephiroth-profile.png\",\n\t\"./squall-profile.png\": \"./src/assets/characters/squall-profile.png\",\n\t\"./terra-profile.png\": \"./src/assets/characters/terra-profile.png\",\n\t\"./ultimecia-profile.png\": \"./src/assets/characters/ultimecia-profile.png\",\n\t\"./zidane-profile.png\": \"./src/assets/characters/zidane-profile.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/characters sync recursive ^\\\\.\\\\/.*\\\\-profile\\\\.png$\";\n\n//# sourceURL=webpack:///./src/assets/characters_sync_^\\.\\/.*\\-profile\\.png$?");

/***/ }),

/***/ "./src/assets/characters/cloud-profile.png":
/*!*************************************************!*\
  !*** ./src/assets/characters/cloud-profile.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1876ddbc66156c86a5400fa7729d2076.png\");\n\n//# sourceURL=webpack:///./src/assets/characters/cloud-profile.png?");

/***/ }),

/***/ "./src/assets/characters/kefka-profile.png":
/*!*************************************************!*\
  !*** ./src/assets/characters/kefka-profile.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a6c7a9f958736df2007cd69065ed5f38.png\");\n\n//# sourceURL=webpack:///./src/assets/characters/kefka-profile.png?");

/***/ }),

/***/ "./src/assets/characters/kuja-profile.png":
/*!************************************************!*\
  !*** ./src/assets/characters/kuja-profile.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"883376723bba01e99d8a4ace3d7cab4a.png\");\n\n//# sourceURL=webpack:///./src/assets/characters/kuja-profile.png?");

/***/ }),

/***/ "./src/assets/characters/sephiroth-profile.png":
/*!*****************************************************!*\
  !*** ./src/assets/characters/sephiroth-profile.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ba47d1cc25f7c5ee9ca335b9597f68b3.png\");\n\n//# sourceURL=webpack:///./src/assets/characters/sephiroth-profile.png?");

/***/ }),

/***/ "./src/assets/characters/squall-profile.png":
/*!**************************************************!*\
  !*** ./src/assets/characters/squall-profile.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e21c9e9de9a56be5e78459e06e7eb378.png\");\n\n//# sourceURL=webpack:///./src/assets/characters/squall-profile.png?");

/***/ }),

/***/ "./src/assets/characters/terra-profile.png":
/*!*************************************************!*\
  !*** ./src/assets/characters/terra-profile.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5678fd1d99e78f784e2a7573e1fcc551.png\");\n\n//# sourceURL=webpack:///./src/assets/characters/terra-profile.png?");

/***/ }),

/***/ "./src/assets/characters/ultimecia-profile.png":
/*!*****************************************************!*\
  !*** ./src/assets/characters/ultimecia-profile.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"caddca3e5181e9138b59869f65e5789e.png\");\n\n//# sourceURL=webpack:///./src/assets/characters/ultimecia-profile.png?");

/***/ }),

/***/ "./src/assets/characters/zidane-profile.png":
/*!**************************************************!*\
  !*** ./src/assets/characters/zidane-profile.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9c648f26c5e96309c05b9377efc96881.png\");\n\n//# sourceURL=webpack:///./src/assets/characters/zidane-profile.png?");

/***/ }),

/***/ "./src/assets/coin/chocobo-coin.png":
/*!******************************************!*\
  !*** ./src/assets/coin/chocobo-coin.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"faede37be14f9e73ed2d47aa493e4e9e.png\");\n\n//# sourceURL=webpack:///./src/assets/coin/chocobo-coin.png?");

/***/ }),

/***/ "./src/assets/coin/moogle-coin.png":
/*!*****************************************!*\
  !*** ./src/assets/coin/moogle-coin.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"67ec511789038089c353785e638b57a4.png\");\n\n//# sourceURL=webpack:///./src/assets/coin/moogle-coin.png?");

/***/ }),

/***/ "./src/components/gameBoard/cards/cards.js":
/*!*************************************************!*\
  !*** ./src/components/gameBoard/cards/cards.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.scss */ \"./src/components/gameBoard/cards/cards.scss\");\n/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cards_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logic_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../logic/methods */ \"./src/logic/methods.js\");\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/master */ \"./src/store/master.js\");\n\n\n\nvar card_text = [{\n  position: \"top\",\n  x: 35,\n  y: 65\n}, {\n  position: \"left\",\n  x: 5,\n  y: 125\n}, {\n  position: \"right\",\n  x: 60,\n  y: 125\n}, {\n  position: \"bottom\",\n  x: 35,\n  y: 180\n}];\n\nvar renderCards = function renderCards(o, body, position) {\n  var cards = body.append(\"g\").attr(\"data-player\", o.name).selectAll(\"g\").data(o.cards).enter().append(\"g\").attr(\"class\", \"card card_container\").attr(\"data-card\", function (d) {\n    return d.id;\n  }).attr(\"transform\", function (d, i) {\n    return \"translate(\".concat(position, \", \").concat(500 + 200 * (i - 1), \")\");\n  });\n  cards.append(\"rect\").attr(\"class\", \"card\").style(\"fill\", \"#fff\").style(\"stroke\", \"#000\").style(\"stroke-width\", 1);\n  cards.append(\"svg:image\").attr(\"class\", \"card\").attr(\"xlink:href\", function (d) {\n    var img = __webpack_require__(\"./src/assets/cards sync recursive ^\\\\.\\\\/.*\\\\.jpg$\")(\"./\".concat(d.creature, \".jpg\"));\n\n    return img[\"default\"];\n  });\n  cards.append(\"rect\").attr(\"class\", \"card\").style(\"fill\", \"none\").style(\"stroke\", \"#000\").style(\"stroke-width\", 2);\n  card_text.map(function (txt) {\n    cards.append(\"text\").attr(\"x\", txt.x).attr(\"y\", txt.y).attr(\"class\", \"card-values\").text(function (d) {\n      return d.values[txt.position] === 10 ? \"A\" : d.values[txt.position];\n    }).style(\"fill\", function (d) {\n      if (o.human) {\n        return d.captured ? \"var(--opponent-color)\" : \"var(--player-color)\";\n      } else {\n        return d.captured ? \"var(--player-color)\" : \"var(--opponent-color)\";\n      }\n    });\n  });\n\n  if (o.human) {\n    cards.on(\"mouseover\", function (d, i) {\n      var w = window.innerWidth;\n\n      if (w > 700) {\n        d3.select(this).transition().duration(\"250\").attr(\"transform\", \"translate(150, \".concat(500 + 200 * (i - 1), \")\"));\n      }\n    }).on(\"mouseout\", function (d, i) {\n      var w = window.innerWidth;\n\n      if (w > 700) {\n        d3.select(this).transition().duration(\"250\").attr(\"transform\", \"translate(100, \".concat(500 + 200 * (i - 1), \")\"));\n      }\n    }).on(\"click\", function (d) {\n      var yourTurn = _store_master__WEBPACK_IMPORTED_MODULE_2__[\"master\"].state.game.currentPlayer === \"light\";\n      var selectionMade = _store_master__WEBPACK_IMPORTED_MODULE_2__[\"master\"].state.game.card && _store_master__WEBPACK_IMPORTED_MODULE_2__[\"master\"].state.game.tile;\n      if (yourTurn && !selectionMade) _logic_methods__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectCard(d);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderCards);\n\n//# sourceURL=webpack:///./src/components/gameBoard/cards/cards.js?");

/***/ }),

/***/ "./src/components/gameBoard/cards/cards.scss":
/*!***************************************************!*\
  !*** ./src/components/gameBoard/cards/cards.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./cards.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/cards/cards.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/gameBoard/cards/cards.scss?");

/***/ }),

/***/ "./src/components/gameBoard/coinFlip/coinFlip.js":
/*!*******************************************************!*\
  !*** ./src/components/gameBoard/coinFlip/coinFlip.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coinFlip_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coinFlip.scss */ \"./src/components/gameBoard/coinFlip/coinFlip.scss\");\n/* harmony import */ var _coinFlip_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coinFlip_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logic_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../logic/methods */ \"./src/logic/methods.js\");\n/* harmony import */ var _store_actions_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/game */ \"./src/store/actions/game.js\");\n\n\n\n\nvar coinFlip = function coinFlip() {\n  var decision = null;\n  var coinContainer = d3.select(\"#app\").append(\"div\").attr(\"class\", \"coinContainer\");\n  var coinFlip = coinContainer.append(\"div\").attr(\"class\", \"coinFlip\");\n  var coinChoice = coinContainer.append(\"div\").attr(\"class\", \"coinChoice\");\n  coinChoice.append(\"div\").attr(\"class\", \"heads\").on(\"click\", function () {\n    return flip(\"heads\");\n  });\n  coinChoice.append(\"div\").attr(\"class\", \"tails\").on(\"click\", function () {\n    return flip(\"tails\");\n  });\n  var coin = coinFlip.append(\"div\").attr(\"id\", \"coin\").style(\"display\", \"none\");\n  coin.append(\"div\").attr(\"class\", \"side-a\");\n  coin.append(\"div\").attr(\"class\", \"side-b\");\n\n  function flip(choice) {\n    coinChoice.style(\"display\", \"none\");\n    coin.style(\"display\", \"block\");\n    decision = choice;\n    var flipResult = Math.random();\n    coin.attr(\"class\", null);\n\n    if (flipResult <= 0.5) {\n      coin.classed(\"heads\", true);\n    } else {\n      coin.classed(\"tails\", true);\n    }\n\n    setTimeout(function () {\n      var result = flipResult <= 0.5 ? \"heads\" : \"tails\";\n      choice === result ? Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_2__[\"setCurrentPlayer\"])(\"light\") : Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_2__[\"setCurrentPlayer\"])(\"dark\");\n      Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_2__[\"incrementTurn\"])();\n      coinContainer.remove();\n      _logic_methods__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n    }, 4000);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (coinFlip);\n\n//# sourceURL=webpack:///./src/components/gameBoard/coinFlip/coinFlip.js?");

/***/ }),

/***/ "./src/components/gameBoard/coinFlip/coinFlip.scss":
/*!*********************************************************!*\
  !*** ./src/components/gameBoard/coinFlip/coinFlip.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./coinFlip.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/coinFlip/coinFlip.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/gameBoard/coinFlip/coinFlip.scss?");

/***/ }),

/***/ "./src/components/gameBoard/gamOver/gameOver.js":
/*!******************************************************!*\
  !*** ./src/components/gameBoard/gamOver/gameOver.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameOver_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameOver.scss */ \"./src/components/gameBoard/gamOver/gameOver.scss\");\n/* harmony import */ var _gameOver_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameOver_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/master */ \"./src/store/master.js\");\n/* harmony import */ var _store_reducers_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/reducers/mode */ \"./src/store/reducers/mode.js\");\n\n\n\n\nvar renderGameOver = function renderGameOver() {\n  var app = d3.select(\"#app\");\n  var overScreenContainer = app.append(\"div\").attr(\"class\", \"game-over-container\");\n  var overScreen = overScreenContainer.append(\"div\").attr(\"class\", \"game-over\");\n  overScreen.append(\"h1\").text(function () {\n    if (_store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.game.score.light > _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.game.score.dark) return \"YOU WIN!\";\n    if (_store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.game.score.dark > _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.game.score.light) return \"YOU LOST...\";\n    if (_store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.game.score.light === _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.game.score.dark) return \"IT'S A TIE\";\n  });\n  overScreen.append(\"button\").text(\"NEW GAME\").on(\"click\", function () {\n    Object(_store_master__WEBPACK_IMPORTED_MODULE_1__[\"reset\"])();\n    Object(_store_reducers_mode__WEBPACK_IMPORTED_MODULE_2__[\"setMode\"])(\"characterSelection\");\n    overScreenContainer.remove();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderGameOver);\n\n//# sourceURL=webpack:///./src/components/gameBoard/gamOver/gameOver.js?");

/***/ }),

/***/ "./src/components/gameBoard/gamOver/gameOver.scss":
/*!********************************************************!*\
  !*** ./src/components/gameBoard/gamOver/gameOver.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./gameOver.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/gameBoard/gamOver/gameOver.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/components/gameBoard/gamOver/gameOver.scss?");

/***/ }),

/***/ "./src/components/gameBoard/score/score.js":
/*!*************************************************!*\
  !*** ./src/components/gameBoard/score/score.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/master */ \"./src/store/master.js\");\n\n\nvar renderScore = function renderScore(body) {\n  var lightScore = _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.score.light,\n      darkScore = _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.score.dark;\n  var player_score = body.append(\"g\").attr(\"class\", \"player score score player_score\");\n  player_score.append(\"text\").attr(\"x\", 250).attr(\"y\", 1650).attr(\"dy\", \".35em\").attr(\"fill\", \"var(--player-color)\").text(lightScore);\n  var ai_score = body.append(\"g\").attr(\"class\", \"enemy score ai_score\");\n  ai_score.append(\"text\").attr(\"x\", 1650).attr(\"y\", 1650).attr(\"dy\", \".35em\").attr(\"fill\", \"var(--opponent-color)\").text(darkScore);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderScore);\n\n//# sourceURL=webpack:///./src/components/gameBoard/score/score.js?");

/***/ }),

/***/ "./src/components/gameBoard/tiles/tiles.js":
/*!*************************************************!*\
  !*** ./src/components/gameBoard/tiles/tiles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_tiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/tiles */ \"./src/data/tiles.js\");\n/* harmony import */ var _logic_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../logic/methods */ \"./src/logic/methods.js\");\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/master */ \"./src/store/master.js\");\n\n\n\n\nvar renderTiles = function renderTiles(o) {\n  var tiles = o.append(\"g\").attr(\"class\", \"tiles\");\n  tiles.selectAll(\"g\").data(_data_tiles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).enter().append(\"rect\").attr(\"class\", \"tile\").attr(\"data-tile\", function (d) {\n    return d.id;\n  }).attr(\"x\", function (d) {\n    return 500 + 300 * d.col;\n  }).attr(\"y\", function (d) {\n    return 300 + 400 * d.row;\n  }).on(\"click\", function (d) {\n    var yourTurn = _store_master__WEBPACK_IMPORTED_MODULE_2__[\"master\"].state.game.currentPlayer === \"light\";\n    var selectionMade = _store_master__WEBPACK_IMPORTED_MODULE_2__[\"master\"].state.game.card && _store_master__WEBPACK_IMPORTED_MODULE_2__[\"master\"].state.game.tile;\n    yourTurn && !selectionMade ? _logic_methods__WEBPACK_IMPORTED_MODULE_1__[\"default\"].selectTile(d.id) : console.log(\"not your turn\");\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderTiles);\n\n//# sourceURL=webpack:///./src/components/gameBoard/tiles/tiles.js?");

/***/ }),

/***/ "./src/components/gameBoard/turn/turn.js":
/*!***********************************************!*\
  !*** ./src/components/gameBoard/turn/turn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/master */ \"./src/store/master.js\");\n\n\nvar renderTurn = function renderTurn(body) {\n  var game_turn = body.append(\"g\").attr(\"class\", \"game_turn\");\n  game_turn.append(\"text\").attr(\"x\", 950).attr(\"y\", 150).style(\"text-anchor\", \"middle\").attr(\"dy\", \".35em\").attr(\"font-size\", \"3rem\").style(\"fill\", \"#fff\").text(null);\n  var player_turn = body.append(\"g\").attr(\"class\", \"player_turn\");\n  player_turn.append(\"text\").attr(\"x\", 950).attr(\"y\", 50).style(\"text-anchor\", \"middle\").attr(\"dy\", \".35em\").attr(\"font-size\", \"3rem\").style(\"fill\", \"#fff\").text(null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderTurn);\n\n//# sourceURL=webpack:///./src/components/gameBoard/turn/turn.js?");

/***/ }),

/***/ "./src/containers/characterSelection/characterSelection.js":
/*!*****************************************************************!*\
  !*** ./src/containers/characterSelection/characterSelection.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _characterSelection_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterSelection.scss */ \"./src/containers/characterSelection/characterSelection.scss\");\n/* harmony import */ var _characterSelection_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_characterSelection_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_reducers_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/reducers/mode */ \"./src/store/reducers/mode.js\");\n/* harmony import */ var _store_actions_players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/players */ \"./src/store/actions/players.js\");\n/* harmony import */ var _assets_characters_kuja_profile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/characters/kuja-profile.png */ \"./src/assets/characters/kuja-profile.png\");\n\n\n\n\nvar characters = [\"terra\", \"cloud\", \"squall\", \"zidane\", \"kefka\", \"sephiroth\", \"ultimecia\", \"kuja\"];\n\nvar characterSelection = function characterSelection() {\n  var state = {\n    current: \"light\",\n    light: null,\n    dark: null\n  };\n  var body = d3.select(\"#app\").append(\"div\").attr(\"class\", \"select-screen-container\").append(\"div\").attr(\"class\", \"select-screen\");\n  var chooseTarget = body.append(\"div\").attr(\"class\", \"chooseTarget\");\n  var player = chooseTarget.append(\"div\").text(\"Player\").style(\"color\", state.current === \"light\" ? \"var(--player-color)\" : \"#fff\").on(\"click\", function () {\n    return changeCurrent(\"light\");\n  });\n  var opponent = chooseTarget.append(\"div\").text(\"Computer\").style(\"color\", state.current === \"dark\" ? \"var(--opponent-color)\" : \"#fff\").on(\"click\", function () {\n    return changeCurrent(\"dark\");\n  });\n  var charBody = body.append(\"div\").attr(\"class\", \"body\");\n  var charCards = charBody.selectAll(\"div\").data(characters).enter().append(\"div\");\n  var charCardBody = charCards.attr(\"class\", \"character-contain\");\n  var charCardImage = charCardBody.append(\"div\").attr(\"class\", \"character\").style(\"background-image\", function (d) {\n    var image = __webpack_require__(\"./src/assets/characters sync recursive ^\\\\.\\\\/.*\\\\-profile\\\\.png$\")(\"./\".concat(d, \"-profile.png\"));\n\n    return \"url(\".concat(image[\"default\"], \")\");\n  }).style(\"background-color\", function (d) {\n    if (d === state.light) return \"var(--player-color)\";\n    if (d === state.dark) return \"var(--opponent-color)\";\n    return \"white\";\n  }).on(\"click\", function (d) {\n    if (d !== state.light && d !== state.dark) selectCharacter(d);\n  });\n  charCardBody.append(\"span\").attr(\"class\", \"character-profile-name\").text(function (d) {\n    return d;\n  });\n  var startBtn = body.append(\"button\").attr(\"class\", \"startGameBtn\").text(\"START\").attr(\"disabled\", true).on(\"click\", function () {\n    Object(_store_actions_players__WEBPACK_IMPORTED_MODULE_2__[\"setHand\"])(\"light\", state.light);\n    Object(_store_actions_players__WEBPACK_IMPORTED_MODULE_2__[\"setHand\"])(\"dark\", state.dark);\n    Object(_store_reducers_mode__WEBPACK_IMPORTED_MODULE_1__[\"setMode\"])(\"gameBoard\");\n  });\n\n  function selectCharacter(character) {\n    state[state.current] = character;\n    charCardImage.style(\"background-color\", function (d) {\n      if (d === state.light) return \"var(--player-color)\";\n      if (d === state.dark) return \"var(--opponent-color)\";\n      return \"white\";\n    });\n    if (state.light && state.dark) startBtn.attr(\"disabled\", null);\n  }\n\n  function changeCurrent(option) {\n    state.current = option;\n    player.style(\"color\", state.current === \"light\" ? \"var(--player-color)\" : \"#fff\");\n    opponent.style(\"color\", state.current === \"dark\" ? \"var(--opponent-color)\" : \"#fff\");\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (characterSelection);\n\n//# sourceURL=webpack:///./src/containers/characterSelection/characterSelection.js?");

/***/ }),

/***/ "./src/containers/characterSelection/characterSelection.scss":
/*!*******************************************************************!*\
  !*** ./src/containers/characterSelection/characterSelection.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./characterSelection.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/containers/characterSelection/characterSelection.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/containers/characterSelection/characterSelection.scss?");

/***/ }),

/***/ "./src/containers/gameBoard/gameBoard.js":
/*!***********************************************!*\
  !*** ./src/containers/gameBoard/gameBoard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.scss */ \"./src/containers/gameBoard/gameBoard.scss\");\n/* harmony import */ var _gameBoard_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameBoard_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_gameBoard_tiles_tiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/gameBoard/tiles/tiles */ \"./src/components/gameBoard/tiles/tiles.js\");\n/* harmony import */ var _components_gameBoard_cards_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/gameBoard/cards/cards */ \"./src/components/gameBoard/cards/cards.js\");\n/* harmony import */ var _components_gameBoard_score_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/gameBoard/score/score */ \"./src/components/gameBoard/score/score.js\");\n/* harmony import */ var _components_gameBoard_turn_turn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/gameBoard/turn/turn */ \"./src/components/gameBoard/turn/turn.js\");\n/* harmony import */ var _components_gameBoard_coinFlip_coinFlip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/gameBoard/coinFlip/coinFlip */ \"./src/components/gameBoard/coinFlip/coinFlip.js\");\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/master */ \"./src/store/master.js\");\n\n\n\n\n\n\n\n\nvar gameBoard = function gameBoard() {\n  var light = _store_master__WEBPACK_IMPORTED_MODULE_6__[\"master\"].state.light;\n  var dark = _store_master__WEBPACK_IMPORTED_MODULE_6__[\"master\"].state.dark;\n  var turn = _store_master__WEBPACK_IMPORTED_MODULE_6__[\"master\"].state.game.turn;\n  var game_container = d3.select(\"#app\").append(\"div\").attr(\"class\", \"game_container\").append(\"div\").attr(\"id\", \"game\");\n  var game_body = game_container.append(\"svg\").attr(\"viewBox\", \"0 0 1900 1760\").attr(\"preserveAspectRatio\", \"xMinYMin slice\").attr(\"width\", \"100%\").attr(\"height\", \"100%\").attr(\"overflow\", \"hidden\").append(\"svg\").attr(\"width\", 1900).attr(\"height\", 1760);\n\n  var lightProfileImg = __webpack_require__(\"./src/assets/characters sync recursive ^\\\\.\\\\/.*\\\\-profile\\\\.png$\")(\"./\".concat(light.name.toLowerCase(), \"-profile.png\"));\n\n  game_body.append(\"rect\").attr(\"class\", \"lightProfile\").attr(\"x\", 325).attr(\"y\", 10).attr(\"width\", 250).attr(\"height\", 250).style(\"fill\", \"#fff\");\n  game_body.append(\"svg:image\").attr(\"x\", 325).attr(\"y\", 10).attr(\"width\", 250).attr(\"height\", 250).attr(\"xlink:href\", lightProfileImg[\"default\"]).style(\"fill\", \"#fff\");\n  game_body.append(\"rect\").attr(\"x\", 325).attr(\"y\", 10).attr(\"width\", 250).attr(\"height\", 250).style(\"fill\", \"none\").style(\"stroke\", \"silver\").style(\"stroke-width\", 5);\n\n  var darkProfileImg = __webpack_require__(\"./src/assets/characters sync recursive ^\\\\.\\\\/.*\\\\-profile\\\\.png$\")(\"./\".concat(dark.name.toLowerCase(), \"-profile.png\"));\n\n  game_body.append(\"rect\").attr(\"class\", \"darkProfile\").attr(\"x\", 1325).attr(\"y\", 10).attr(\"width\", 250).attr(\"height\", 250).style(\"fill\", \"#fff\");\n  game_body.append(\"svg:image\").attr(\"x\", 1325).attr(\"y\", 10).attr(\"width\", 250).attr(\"height\", 250).attr(\"xlink:href\", darkProfileImg[\"default\"]).style(\"fill\", \"#fff\");\n  game_body.append(\"rect\").attr(\"x\", 1325).attr(\"y\", 10).attr(\"width\", 250).attr(\"height\", 250).style(\"fill\", \"none\").style(\"stroke\", \"silver\").style(\"stroke-width\", 5);\n  Object(_components_gameBoard_tiles_tiles__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(game_body);\n  Object(_components_gameBoard_cards_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(light, game_body, 100);\n  Object(_components_gameBoard_cards_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dark, game_body, 1500);\n  Object(_components_gameBoard_score_score__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(game_body);\n  Object(_components_gameBoard_turn_turn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(game_body);\n  if (turn === 0) Object(_components_gameBoard_coinFlip_coinFlip__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\n\n//# sourceURL=webpack:///./src/containers/gameBoard/gameBoard.js?");

/***/ }),

/***/ "./src/containers/gameBoard/gameBoard.scss":
/*!*************************************************!*\
  !*** ./src/containers/gameBoard/gameBoard.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./gameBoard.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/containers/gameBoard/gameBoard.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/containers/gameBoard/gameBoard.scss?");

/***/ }),

/***/ "./src/data/characters.js":
/*!********************************!*\
  !*** ./src/data/characters.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _characters_cloud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/cloud */ \"./src/data/characters/cloud.js\");\n/* harmony import */ var _characters_sephiroth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters/sephiroth */ \"./src/data/characters/sephiroth.js\");\n/* harmony import */ var _characters_terra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/terra */ \"./src/data/characters/terra.js\");\n/* harmony import */ var _characters_kefka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/kefka */ \"./src/data/characters/kefka.js\");\n/* harmony import */ var _characters_squall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/squall */ \"./src/data/characters/squall.js\");\n/* harmony import */ var _characters_ultimecia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/ultimecia */ \"./src/data/characters/ultimecia.js\");\n/* harmony import */ var _characters_zidane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/zidane */ \"./src/data/characters/zidane.js\");\n/* harmony import */ var _characters_kuja__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/kuja */ \"./src/data/characters/kuja.js\");\n\n\n\n\n\n\n\n\nvar characters = {\n  cloud: _characters_cloud__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  sephiroth: _characters_sephiroth__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  terra: _characters_terra__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  kefka: _characters_kefka__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  squall: _characters_squall__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  ultimecia: _characters_ultimecia__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  zidane: _characters_zidane__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  kuja: _characters_kuja__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (characters);\n\n//# sourceURL=webpack:///./src/data/characters.js?");

/***/ }),

/***/ "./src/data/characters/cloud.js":
/*!**************************************!*\
  !*** ./src/data/characters/cloud.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cloud = {\n  name: \"Cloud\",\n  cards: [{\n    values: {\n      top: 8,\n      right: 3,\n      bottom: 5,\n      left: 8\n    },\n    creature: \"card_5\"\n  }, {\n    values: {\n      top: 6,\n      right: 5,\n      bottom: 5,\n      left: 6\n    },\n    creature: \"card_1\"\n  }, {\n    values: {\n      top: 5,\n      right: 3,\n      bottom: 2,\n      left: 5\n    },\n    creature: \"card_2\"\n  }, {\n    values: {\n      top: 6,\n      right: 6,\n      bottom: 2,\n      left: 7\n    },\n    creature: \"card_3\"\n  }, {\n    values: {\n      top: 9,\n      right: 6,\n      bottom: 2,\n      left: 8\n    },\n    creature: \"card_4\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (cloud);\n\n//# sourceURL=webpack:///./src/data/characters/cloud.js?");

/***/ }),

/***/ "./src/data/characters/kefka.js":
/*!**************************************!*\
  !*** ./src/data/characters/kefka.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar kefka = {\n  name: \"Kefka\",\n  cards: [{\n    values: {\n      top: 7,\n      right: 5,\n      bottom: 8,\n      left: 1\n    },\n    creature: \"card_6\"\n  }, {\n    values: {\n      top: 9,\n      right: 4,\n      bottom: 8,\n      left: 9\n    },\n    creature: \"card_7\"\n  }, {\n    values: {\n      top: 7,\n      right: 5,\n      bottom: 4,\n      left: 3\n    },\n    creature: \"card_8\"\n  }, {\n    values: {\n      top: 7,\n      right: 2,\n      bottom: 7,\n      left: 10\n    },\n    creature: \"card_9\"\n  }, {\n    values: {\n      top: 8,\n      right: 8,\n      bottom: 4,\n      left: 4\n    },\n    creature: \"card_10\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (kefka);\n\n//# sourceURL=webpack:///./src/data/characters/kefka.js?");

/***/ }),

/***/ "./src/data/characters/kuja.js":
/*!*************************************!*\
  !*** ./src/data/characters/kuja.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar kuja = {\n  name: \"Kuja\",\n  cards: [{\n    values: {\n      top: 4,\n      right: 8,\n      bottom: 5,\n      left: 6\n    },\n    creature: \"card_11\"\n  }, {\n    values: {\n      top: 10,\n      right: 1,\n      bottom: 7,\n      left: 7\n    },\n    creature: \"card_12\"\n  }, {\n    values: {\n      top: 3,\n      right: 10,\n      bottom: 1,\n      left: 2\n    },\n    creature: \"card_13\"\n  }, {\n    values: {\n      top: 6,\n      right: 9,\n      bottom: 10,\n      left: 4\n    },\n    creature: \"card_14\"\n  }, {\n    values: {\n      top: 1,\n      right: 8,\n      bottom: 8,\n      left: 3\n    },\n    creature: \"card_15\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (kuja);\n\n//# sourceURL=webpack:///./src/data/characters/kuja.js?");

/***/ }),

/***/ "./src/data/characters/sephiroth.js":
/*!******************************************!*\
  !*** ./src/data/characters/sephiroth.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sephiroth = {\n  name: \"Sephiroth\",\n  cards: [{\n    values: {\n      top: 9,\n      right: 6,\n      bottom: 2,\n      left: 8\n    },\n    creature: \"card_16\"\n  }, {\n    values: {\n      top: 4,\n      right: 4,\n      bottom: 8,\n      left: 9\n    },\n    creature: \"card_17\"\n  }, {\n    values: {\n      top: 3,\n      right: 1,\n      bottom: 10,\n      left: 10\n    },\n    creature: \"card_18\"\n  }, {\n    values: {\n      top: 6,\n      right: 7,\n      bottom: 6,\n      left: 10\n    },\n    creature: \"card_19\"\n  }, {\n    values: {\n      top: 1,\n      right: 8,\n      bottom: 8,\n      left: 3\n    },\n    creature: \"card_20\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (sephiroth);\n\n//# sourceURL=webpack:///./src/data/characters/sephiroth.js?");

/***/ }),

/***/ "./src/data/characters/squall.js":
/*!***************************************!*\
  !*** ./src/data/characters/squall.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar squall = {\n  name: \"Squall\",\n  cards: [{\n    values: {\n      top: 3,\n      right: 7,\n      bottom: 9,\n      left: 6\n    },\n    creature: \"card_21\"\n  }, {\n    values: {\n      top: 3,\n      right: 2,\n      bottom: 1,\n      left: 7\n    },\n    creature: \"card_22\"\n  }, {\n    values: {\n      top: 10,\n      right: 7,\n      bottom: 2,\n      left: 8\n    },\n    creature: \"card_23\"\n  }, {\n    values: {\n      top: 6,\n      right: 2,\n      bottom: 6,\n      left: 7\n    },\n    creature: \"card_24\"\n  }, {\n    values: {\n      top: 1,\n      right: 8,\n      bottom: 4,\n      left: 8\n    },\n    creature: \"card_25\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (squall);\n\n//# sourceURL=webpack:///./src/data/characters/squall.js?");

/***/ }),

/***/ "./src/data/characters/terra.js":
/*!**************************************!*\
  !*** ./src/data/characters/terra.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar terra = {\n  name: \"Terra\",\n  cards: [{\n    values: {\n      top: 3,\n      right: 6,\n      bottom: 4,\n      left: 4\n    },\n    creature: \"card_26\"\n  }, {\n    values: {\n      top: 10,\n      right: 1,\n      bottom: 7,\n      left: 7\n    },\n    creature: \"card_27\"\n  }, {\n    values: {\n      top: 8,\n      right: 3,\n      bottom: 5,\n      left: 8\n    },\n    creature: \"card_28\"\n  }, {\n    values: {\n      top: 6,\n      right: 2,\n      bottom: 7,\n      left: 3\n    },\n    creature: \"card_29\"\n  }, {\n    values: {\n      top: 1,\n      right: 8,\n      bottom: 7,\n      left: 7\n    },\n    creature: \"card_30\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (terra);\n\n//# sourceURL=webpack:///./src/data/characters/terra.js?");

/***/ }),

/***/ "./src/data/characters/ultimecia.js":
/*!******************************************!*\
  !*** ./src/data/characters/ultimecia.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ultimecia = {\n  name: \"Ultimecia\",\n  cards: [{\n    values: {\n      top: 4,\n      right: 8,\n      bottom: 5,\n      left: 6\n    },\n    creature: \"card_31\"\n  }, {\n    values: {\n      top: 5,\n      right: 3,\n      bottom: 7,\n      left: 6\n    },\n    creature: \"card_32\"\n  }, {\n    values: {\n      top: 7,\n      right: 5,\n      bottom: 8,\n      left: 1\n    },\n    creature: \"card_33\"\n  }, {\n    values: {\n      top: 1,\n      right: 8,\n      bottom: 8,\n      left: 3\n    },\n    creature: \"card_34\"\n  }, {\n    values: {\n      top: 1,\n      right: 8,\n      bottom: 8,\n      left: 3\n    },\n    creature: \"card_35\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ultimecia);\n\n//# sourceURL=webpack:///./src/data/characters/ultimecia.js?");

/***/ }),

/***/ "./src/data/characters/zidane.js":
/*!***************************************!*\
  !*** ./src/data/characters/zidane.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar zidane = {\n  name: \"Zidane\",\n  cards: [{\n    values: {\n      top: 10,\n      right: 8,\n      bottom: 6,\n      left: 4\n    },\n    creature: \"card_36\"\n  }, {\n    values: {\n      top: 7,\n      right: 10,\n      bottom: 1,\n      left: 7\n    },\n    creature: \"card_37\"\n  }, {\n    values: {\n      top: 3,\n      right: 2,\n      bottom: 1,\n      left: 7\n    },\n    creature: \"card_38\"\n  }, {\n    values: {\n      top: 3,\n      right: 5,\n      bottom: 2,\n      left: 1\n    },\n    creature: \"card_39\"\n  }, {\n    values: {\n      top: 2,\n      right: 1,\n      bottom: 6,\n      left: 1\n    },\n    creature: \"card_40\"\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (zidane);\n\n//# sourceURL=webpack:///./src/data/characters/zidane.js?");

/***/ }),

/***/ "./src/data/tiles.js":
/*!***************************!*\
  !*** ./src/data/tiles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tiles_data = [{\n  id: \"A1\",\n  row: 0,\n  col: 0\n}, {\n  id: \"A2\",\n  row: 0,\n  col: 1\n}, {\n  id: \"A3\",\n  row: 0,\n  col: 2\n}, {\n  id: \"B1\",\n  row: 1,\n  col: 0\n}, {\n  id: \"B2\",\n  row: 1,\n  col: 1\n}, {\n  id: \"B3\",\n  row: 1,\n  col: 2\n}, {\n  id: \"C1\",\n  row: 2,\n  col: 0\n}, {\n  id: \"C2\",\n  row: 2,\n  col: 1\n}, {\n  id: \"C3\",\n  row: 2,\n  col: 2\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (tiles_data);\n\n//# sourceURL=webpack:///./src/data/tiles.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_reducers_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducers/mode */ \"./src/store/reducers/mode.js\");\n/* harmony import */ var _containers_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/gameBoard/gameBoard */ \"./src/containers/gameBoard/gameBoard.js\");\n/* harmony import */ var _containers_characterSelection_characterSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/characterSelection/characterSelection */ \"./src/containers/characterSelection/characterSelection.js\");\n\n\n\n\n\nvar render = function render() {\n  d3.select(\"#app > *\").remove();\n  if (_store_reducers_mode__WEBPACK_IMPORTED_MODULE_1__[\"mode\"].state.mode === \"characterSelection\") Object(_containers_characterSelection_characterSelection__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  if (_store_reducers_mode__WEBPACK_IMPORTED_MODULE_1__[\"mode\"].state.mode === \"gameBoard\") return Object(_containers_gameBoard_gameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\nrender();\nwindow.addEventListener(\"modeUpdated\", render);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic/ai.js":
/*!*************************!*\
  !*** ./src/logic/ai.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ai_defensiveCorner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai/defensiveCorner */ \"./src/logic/ai/defensiveCorner.js\");\n/* harmony import */ var _ai_defensiveSide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai/defensiveSide */ \"./src/logic/ai/defensiveSide.js\");\n/* harmony import */ var _ai_lowestCostPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ai/lowestCostPlay */ \"./src/logic/ai/lowestCostPlay.js\");\n/* harmony import */ var _ai_placeCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai/placeCenter */ \"./src/logic/ai/placeCenter.js\");\n/* harmony import */ var _ai_averageTurn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ai/averageTurn */ \"./src/logic/ai/averageTurn.js\");\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/master */ \"./src/store/master.js\");\n/* harmony import */ var _store_actions_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/game */ \"./src/store/actions/game.js\");\n\n\n\n\n\n\n\nvar ai = {\n  logic: function logic() {\n    var dark = _store_master__WEBPACK_IMPORTED_MODULE_5__[\"master\"].state.dark,\n        turn = _store_master__WEBPACK_IMPORTED_MODULE_5__[\"master\"].state.game.turn;\n    var hand = dark.cards.filter(function (card) {\n      return card.inHand;\n    });\n    var play;\n\n    if (turn === 1) {\n      play = Object(_ai_lowestCostPlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_ai_defensiveCorner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hand));\n    } else {\n      play = Object(_ai_averageTurn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(hand) || Object(_ai_lowestCostPlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_ai_defensiveCorner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hand)) || Object(_ai_lowestCostPlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_ai_defensiveSide__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(hand)) || Object(_ai_placeCenter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(hand);\n    }\n\n    Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_6__[\"setCard\"])(play.card);\n    Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_6__[\"setTile\"])(play.tile);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ai);\n\n//# sourceURL=webpack:///./src/logic/ai.js?");

/***/ }),

/***/ "./src/logic/ai/averageTurn.js":
/*!*************************************!*\
  !*** ./src/logic/ai/averageTurn.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_checkSurroundingTiles_comparisonChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/checkSurroundingTiles/comparisonChart */ \"./src/logic/game/checkSurroundingTiles/comparisonChart.js\");\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/master */ \"./src/store/master.js\");\n\n\n\nvar averageTurn = function averageTurn(hand) {\n  var decision;\n  var tiles = _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.tiles;\n  var playerTiles = tiles.filter(function (tile) {\n    if (!tile.card) return;\n    var owner = tile.card.owner;\n    var isCaptured = _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state[owner].cards.filter(function (card) {\n      return card.id === tile.card.id;\n    })[0].captured;\n    var capturedAllyCard = owner === \"dark\" && isCaptured;\n    var uncapturedEnemyCard = owner === \"light\" && !isCaptured;\n\n    if (capturedAllyCard || uncapturedEnemyCard) {\n      return tile;\n    }\n  });\n  playerTiles.map(function (tile) {\n    _game_checkSurroundingTiles_comparisonChart__WEBPACK_IMPORTED_MODULE_0__[\"comparisonChart\"][tile.id].map(function (o) {\n      var oTile = tiles.filter(function (tile) {\n        return tile.id === o.opposingTile;\n      })[0];\n\n      if (!oTile.card) {\n        hand.map(function (card) {\n          var canWin = card.values[o.opposingSides[1]] > _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state[tile.card.owner].cards.filter(function (card) {\n            return card.id === tile.card.id;\n          })[0].values[o.opposingSides[0]];\n          var lowerCost = !decision || decision.value > card.values[o.opposingSides[1]];\n\n          if (canWin && lowerCost) {\n            decision = {\n              card: card,\n              tile: o.opposingTile,\n              value: card.values[o.opposingSides[0]]\n            };\n          }\n        });\n      }\n    });\n  });\n  return decision;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (averageTurn);\n\n//# sourceURL=webpack:///./src/logic/ai/averageTurn.js?");

/***/ }),

/***/ "./src/logic/ai/defensiveCorner.js":
/*!*****************************************!*\
  !*** ./src/logic/ai/defensiveCorner.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/master */ \"./src/store/master.js\");\n\n\nvar defensivCorner = function defensivCorner(hand) {\n  var tiles = _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.tiles;\n  var openCorner = !tiles[0].card || !tiles[2].card || !tiles[6].card || !tiles[8].card;\n  if (!openCorner) return null;\n  var bestCards = {\n    topRight: {\n      tile: \"A3\",\n      value: 0,\n      card: null\n    },\n    topLeft: {\n      tile: \"A1\",\n      value: 0,\n      card: null\n    },\n    bottomRight: {\n      tile: \"C3\",\n      value: 0,\n      card: null\n    },\n    bottomLeft: {\n      tile: \"C1\",\n      value: 0,\n      card: null\n    }\n  };\n  hand.map(function (card) {\n    var A3 = card.values.top + card.values.right;\n    var A1 = card.values.top + card.values.left;\n    var C3 = card.values.bottom + card.values.right;\n    var C1 = card.values.bottom + card.values.left;\n\n    if (C1 > bestCards.topRight.value) {\n      bestCards.topRight.value = C1;\n      bestCards.topRight.card = card;\n    }\n\n    if (C3 > bestCards.topLeft.value) {\n      bestCards.topLeft.value = C3;\n      bestCards.topLeft.card = card;\n    }\n\n    if (A1 > bestCards.bottomRight.value) {\n      bestCards.bottomRight.value = A1;\n      bestCards.bottomRight.card = card;\n    }\n\n    if (A3 > bestCards.bottomLeft.value) {\n      bestCards.bottomLeft.value = A3;\n      bestCards.bottomLeft.card = card;\n    }\n  });\n  return bestCards;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (defensivCorner);\n\n//# sourceURL=webpack:///./src/logic/ai/defensiveCorner.js?");

/***/ }),

/***/ "./src/logic/ai/defensiveSide.js":
/*!***************************************!*\
  !*** ./src/logic/ai/defensiveSide.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/master */ \"./src/store/master.js\");\n\n\nvar defensiveSide = function defensiveSide(hand) {\n  var tiles = _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.tiles;\n  var openSides = !tiles[1].card || !tiles[3].card || !tiles[5].card || !tiles[7].card;\n  if (!openSides) return null;\n  var bestCards = {\n    top: {\n      tile: \"A2\",\n      value: 0,\n      card: null\n    },\n    left: {\n      tile: \"B1\",\n      value: 0,\n      card: null\n    },\n    right: {\n      tile: \"B3\",\n      value: 0,\n      card: null\n    },\n    bottom: {\n      tile: \"C2\",\n      value: 0,\n      card: null\n    }\n  };\n  hand.map(function (card) {\n    var top = card.values.top;\n    var left = card.values.left;\n    var right = card.values.right;\n    var bottom = card.values.bottom;\n\n    if (bottom > bestCards.top.value) {\n      bestCards.top.value = bottom;\n      bestCards.top.card = card;\n    }\n\n    if (right > bestCards.left.value) {\n      bestCards.left.value = right;\n      bestCards.left.card = card;\n    }\n\n    if (left > bestCards.right.value) {\n      bestCards.right.value = left;\n      bestCards.right.card = card;\n    }\n\n    if (top > bestCards.bottom.value) {\n      bestCards.bottom.value = top;\n      bestCards.bottom.card = card;\n    }\n  });\n  return bestCards;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (defensiveSide);\n\n//# sourceURL=webpack:///./src/logic/ai/defensiveSide.js?");

/***/ }),

/***/ "./src/logic/ai/lowestCostPlay.js":
/*!****************************************!*\
  !*** ./src/logic/ai/lowestCostPlay.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/master */ \"./src/store/master.js\");\n\n\nvar lowestCostPlay = function lowestCostPlay(bestCards) {\n  var tiles = _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.tiles;\n  var decision;\n  if (!bestCards) return null;\n  Object.keys(bestCards).map(function (option) {\n    var currentTile = tiles.filter(function (tile) {\n      return tile.id === bestCards[option].tile;\n    })[0];\n\n    if (!currentTile.card) {\n      if (!decision) decision = bestCards[option];\n      if (bestCards[option].value < decision.value) decision = bestCards[option];\n    }\n  });\n  return {\n    tile: decision.tile,\n    card: decision.card\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lowestCostPlay);\n\n//# sourceURL=webpack:///./src/logic/ai/lowestCostPlay.js?");

/***/ }),

/***/ "./src/logic/ai/placeCenter.js":
/*!*************************************!*\
  !*** ./src/logic/ai/placeCenter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar placeCenter = function placeCenter(hand) {\n  var decision;\n  hand.map(function (card) {\n    if (!decision) decision = card;\n    var total = card.values.top + card.values.right + card.values.bottom + card.values.left;\n    var currentTotal = decision.values.top + decision.values.right + decision.values.bottom + decision.values.left;\n    if (total > currentTotal) decision = card;\n  });\n  return {\n    tile: \"B2\",\n    card: decision\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (placeCenter);\n\n//# sourceURL=webpack:///./src/logic/ai/placeCenter.js?");

/***/ }),

/***/ "./src/logic/animations.js":
/*!*********************************!*\
  !*** ./src/logic/animations.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/master */ \"./src/store/master.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar animations = _defineProperty({\n  cb: null,\n  animateTurn: function animateTurn() {\n    var selectedTile = d3.select(\"rect[data-tile~=\".concat(_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.tile, \"]\")),\n        tileX = selectedTile.attr(\"x\"),\n        tileY = selectedTile.attr(\"y\"),\n        selectedCard = document.querySelector(\"g[data-card~=\".concat(_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.card.id, \"]\"));\n    _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.currentPlayer === \"light\" ? this.moveCard(selectedCard, tileX, tileY) : this.shiftCard(selectedCard, tileX, tileY);\n  },\n  shiftCard: function shiftCard() {\n    TweenLite.to(cardSelection2, 1, {\n      x: \"-=50px\",\n      onComplete: this.moveCard\n    });\n  },\n  moveCard: function moveCard(card, tileX, tileY) {\n    TweenLite.to(card, 1, {\n      x: tileX,\n      y: tileY,\n      onComplete: this.capture.bind(this)\n    });\n  },\n  updateScore: function updateScore() {\n    var player_score = d3.select(\".player_score\");\n    var ai_score = d3.select(\".ai_score\");\n    player_score.select(\"text\").text(_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.score.light);\n    ai_score.select(\"text\").text(_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.score.dark);\n    this.cb();\n  },\n  turn: function turn(cb) {\n    var t = d3.transition().duration(650);\n    var lightProfile = d3.select(\".lightProfile\");\n    var darkProfile = d3.select(\".darkProfile\");\n    lightProfile.style(\"fill\", _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.currentPlayer === \"light\" ? \"var(--player-color)\" : \"#fff\");\n    darkProfile.style(\"fill\", _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.currentPlayer === \"dark\" ? \"var(--opponent-color)\" : \"#fff\");\n    var player_turn = d3.select(\".player_turn\"),\n        game_turn = d3.select(\".game_turn\");\n    player_turn.select(\"text\").text(_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.turn === 10 ? null : \"\".concat(_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state[_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.currentPlayer].name, \"'s Turn\"));\n    game_turn.select(\"text\").transition(t).text(_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.turn === 10 ? \"Game Over\" : \"ROUND: \".concat(_store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.turn)).end(cb());\n  },\n  capture: function capture() {\n    var t = d3.transition().duration(650);\n    d3.selectAll(\".card\").selectAll(\"text\").transition(t).style(\"fill\", function (d) {\n      if (d.owner === \"light\") {\n        var currentCard = _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.light.cards.filter(function (card) {\n          return card.id === d.id;\n        })[0];\n        return currentCard.captured ? \"var(--opponent-color)\" : \"var(--player-color)\";\n      }\n\n      if (d.owner === \"dark\") {\n        var _currentCard = _store_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.dark.cards.filter(function (card) {\n          return card.id === d.id;\n        })[0];\n        return _currentCard.captured ? \"var(--player-color)\" : \"var(--opponent-color)\";\n      }\n    }).end(this.updateScore());\n  }\n}, \"shiftCard\", function shiftCard(card, tileX, tileY) {\n  var _this = this;\n\n  TweenLite.to(card, 1, {\n    x: \"-=50px\",\n    onComplete: function onComplete() {\n      return _this.moveCard(card, tileX, tileY);\n    }\n  });\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animations);\n\n//# sourceURL=webpack:///./src/logic/animations.js?");

/***/ }),

/***/ "./src/logic/game/checkSurroundingTiles/checkSurroundingTiles.js":
/*!***********************************************************************!*\
  !*** ./src/logic/game/checkSurroundingTiles/checkSurroundingTiles.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comparisonChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparisonChart */ \"./src/logic/game/checkSurroundingTiles/comparisonChart.js\");\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/master */ \"./src/store/master.js\");\n/* harmony import */ var _store_actions_players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/players */ \"./src/store/actions/players.js\");\n\n\n\n\nvar checkSurroungTiles = function checkSurroungTiles(tile, card) {\n  var tiles = _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.tiles;\n  _comparisonChart__WEBPACK_IMPORTED_MODULE_0__[\"comparisonChart\"][tile].map(function (opposingTile) {\n    var oTile = tiles.filter(function (tile) {\n      return tile.id === opposingTile.opposingTile;\n    })[0];\n    if (!oTile.card) return;\n    var owner = oTile.card.owner;\n    var currentPlayer = _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state.game.currentPlayer;\n    var isCaptured = _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state[owner].cards.filter(function (card) {\n      return card.id === oTile.card.id;\n    })[0].captured;\n    var uncapturedEnemyCard = owner !== currentPlayer && !isCaptured;\n    var capturedPlayerCard = owner === currentPlayer && isCaptured;\n    if (!uncapturedEnemyCard && !capturedPlayerCard) return;\n    var test = card.values[opposingTile.opposingSides[0]];\n    var test2 = _store_master__WEBPACK_IMPORTED_MODULE_1__[\"master\"].state[owner].cards.filter(function (card) {\n      return card.id === oTile.card.id;\n    })[0].values[opposingTile.opposingSides[1]];\n    if (test > test2) Object(_store_actions_players__WEBPACK_IMPORTED_MODULE_2__[\"captureCard\"])(oTile.card);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkSurroungTiles);\n\n//# sourceURL=webpack:///./src/logic/game/checkSurroundingTiles/checkSurroundingTiles.js?");

/***/ }),

/***/ "./src/logic/game/checkSurroundingTiles/comparisonChart.js":
/*!*****************************************************************!*\
  !*** ./src/logic/game/checkSurroundingTiles/comparisonChart.js ***!
  \*****************************************************************/
/*! exports provided: comparisonChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"comparisonChart\", function() { return comparisonChart; });\nvar comparisonChart = {\n  A1: [{\n    opposingTile: \"A2\",\n    opposingSides: [\"right\", \"left\"]\n  }, {\n    opposingTile: \"B1\",\n    opposingSides: [\"bottom\", \"top\"]\n  }],\n  A2: [{\n    opposingTile: \"A1\",\n    opposingSides: [\"left\", \"right\"]\n  }, {\n    opposingTile: \"A3\",\n    opposingSides: [\"right\", \"left\"]\n  }, {\n    opposingTile: \"B2\",\n    opposingSides: [\"bottom\", \"top\"]\n  }],\n  A3: [{\n    opposingTile: \"A2\",\n    opposingSides: [\"left\", \"right\"]\n  }, {\n    opposingTile: \"B3\",\n    opposingSides: [\"bottom\", \"top\"]\n  }],\n  B1: [{\n    opposingTile: \"A1\",\n    opposingSides: [\"top\", \"bottom\"]\n  }, {\n    opposingTile: \"B2\",\n    opposingSides: [\"right\", \"left\"]\n  }, {\n    opposingTile: \"C1\",\n    opposingSides: [\"bottom\", \"top\"]\n  }],\n  B2: [{\n    opposingTile: \"A2\",\n    opposingSides: [\"top\", \"bottom\"]\n  }, {\n    opposingTile: \"B1\",\n    opposingSides: [\"left\", \"right\"]\n  }, {\n    opposingTile: \"B3\",\n    opposingSides: [\"right\", \"left\"]\n  }, {\n    opposingTile: \"C2\",\n    opposingSides: [\"bottom\", \"top\"]\n  }],\n  B3: [{\n    opposingTile: \"A3\",\n    opposingSides: [\"top\", \"bottom\"]\n  }, {\n    opposingTile: \"B2\",\n    opposingSides: [\"left\", \"right\"]\n  }, {\n    opposingTile: \"C3\",\n    opposingSides: [\"bottom\", \"top\"]\n  }],\n  C1: [{\n    opposingTile: \"B1\",\n    opposingSides: [\"top\", \"bottom\"]\n  }, {\n    opposingTile: \"C2\",\n    opposingSides: [\"right\", \"left\"]\n  }],\n  C2: [{\n    opposingTile: \"B2\",\n    opposingSides: [\"top\", \"bottom\"]\n  }, {\n    opposingTile: \"C1\",\n    opposingSides: [\"left\", \"right\"]\n  }, {\n    opposingTile: \"C3\",\n    opposingSides: [\"right\", \"left\"]\n  }],\n  C3: [{\n    opposingTile: \"B3\",\n    opposingSides: [\"top\", \"bottom\"]\n  }, {\n    opposingTile: \"C2\",\n    opposingSides: [\"left\", \"right\"]\n  }]\n};\n\n//# sourceURL=webpack:///./src/logic/game/checkSurroundingTiles/comparisonChart.js?");

/***/ }),

/***/ "./src/logic/methods.js":
/*!******************************!*\
  !*** ./src/logic/methods.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ \"./src/logic/ai.js\");\n/* harmony import */ var _game_checkSurroundingTiles_checkSurroundingTiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/checkSurroundingTiles/checkSurroundingTiles */ \"./src/logic/game/checkSurroundingTiles/checkSurroundingTiles.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ \"./src/logic/animations.js\");\n/* harmony import */ var _store_master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/master */ \"./src/store/master.js\");\n/* harmony import */ var _store_actions_tiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/tiles */ \"./src/store/actions/tiles.js\");\n/* harmony import */ var _store_actions_players__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/players */ \"./src/store/actions/players.js\");\n/* harmony import */ var _store_actions_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/game */ \"./src/store/actions/game.js\");\n/* harmony import */ var _components_gameBoard_gamOver_gameOver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/gameBoard/gamOver/gameOver */ \"./src/components/gameBoard/gamOver/gameOver.js\");\n\n\n\n\n\n\n\n\nvar methods = {\n  init: function init() {\n    var _this = this;\n\n    _animations__WEBPACK_IMPORTED_MODULE_2__[\"default\"].turn(function () {\n      switch (true) {\n        case _store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.turn === 10:\n          _this.gameOver();\n\n          break;\n\n        case _store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.currentPlayer === \"light\":\n          break;\n\n        case _store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.currentPlayer === \"dark\":\n          _ai__WEBPACK_IMPORTED_MODULE_0__[\"default\"].logic();\n\n          _this.validate();\n\n          break;\n      }\n    });\n  },\n  selectCard: function selectCard(card) {\n    Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_6__[\"setCard\"])(card);\n    this.validate();\n  },\n  selectTile: function selectTile(tile) {\n    Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_6__[\"setTile\"])(tile);\n    this.validate();\n  },\n  validate: function validate() {\n    var _this2 = this;\n\n    if (_store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.card && _store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.tile) {\n      Object(_store_actions_tiles__WEBPACK_IMPORTED_MODULE_4__[\"populateTile\"])({\n        tile: _store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.tile,\n        card: _store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.card\n      });\n      Object(_store_actions_players__WEBPACK_IMPORTED_MODULE_5__[\"removeFromHand\"])(_store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.card.id);\n      Object(_game_checkSurroundingTiles_checkSurroundingTiles__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.tile, _store_master__WEBPACK_IMPORTED_MODULE_3__[\"master\"].state.game.card);\n      Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_6__[\"updateScore\"])();\n\n      _animations__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cb = function () {\n        Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_6__[\"clearTurn\"])();\n        Object(_store_actions_game__WEBPACK_IMPORTED_MODULE_6__[\"incrementTurn\"])();\n\n        _this2.init();\n      };\n\n      _animations__WEBPACK_IMPORTED_MODULE_2__[\"default\"].animateTurn();\n    }\n  },\n  gameOver: function gameOver() {\n    Object(_components_gameBoard_gamOver_gameOver__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  },\n  playAgain: function playAgain() {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (methods);\n\n//# sourceURL=webpack:///./src/logic/methods.js?");

/***/ }),

/***/ "./src/stateManager.js":
/*!*****************************!*\
  !*** ./src/stateManager.js ***!
  \*****************************/
/*! exports provided: StateManager, createState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateManager\", function() { return StateManager; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createState\", function() { return createState; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction StateManager(initialState, stateUpdated) {\n  var _this = this;\n\n  this.state = initialState;\n\n  var setStateInternal = function setStateInternal(newState) {\n    _this.state = newState;\n  };\n\n  this.setState = new Proxy(setStateInternal, {\n    apply: function apply(target, thisArgs, argumentList) {\n      target.apply(void 0, _toConsumableArray(argumentList));\n\n      if (stateUpdated) {\n        var eventFired = dispatchEvent(stateUpdated);\n      }\n    }\n  });\n}\nfunction createState(initialState, stateUpdated) {\n  var tempState = new StateManager(initialState, stateUpdated);\n  return tempState;\n}\n\n//# sourceURL=webpack:///./src/stateManager.js?");

/***/ }),

/***/ "./src/store/actions/game.js":
/*!***********************************!*\
  !*** ./src/store/actions/game.js ***!
  \***********************************/
/*! exports provided: setCurrentPlayer, incrementTurn, setCard, setTile, updateScore, clearTurn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentPlayer\", function() { return setCurrentPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementTurn\", function() { return incrementTurn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCard\", function() { return setCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTile\", function() { return setTile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateScore\", function() { return updateScore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearTurn\", function() { return clearTurn; });\n/* harmony import */ var _master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../master */ \"./src/store/master.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction setCurrentPlayer(target) {\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, {\n    game: _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game), {}, {\n      currentPlayer: target\n    })\n  }));\n}\n\nfunction clearTurn() {\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, {\n    game: _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game), {}, {\n      currentPlayer: _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.currentPlayer === \"light\" ? \"dark\" : \"light\",\n      card: null,\n      tile: null\n    })\n  }));\n}\n\nfunction incrementTurn() {\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, {\n    game: _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game), {}, {\n      turn: ++_master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.turn\n    })\n  }));\n}\n\nfunction setCard(target) {\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, {\n    game: _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game), {}, {\n      card: target\n    })\n  }));\n}\n\nfunction setTile(target) {\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, {\n    game: _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game), {}, {\n      tile: target\n    })\n  }));\n}\n\nfunction updateScore() {\n  var unCaptured = function unCaptured(total, o) {\n    return o.captured ? total - 1 : total;\n  };\n\n  var captured = function captured(total, o) {\n    return o.captured ? total : total - 1;\n  };\n\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, {\n    game: _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game), {}, {\n      score: {\n        light: _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.light.cards.reduce(unCaptured, 5) + _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.dark.cards.reduce(captured, 5),\n        dark: _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.dark.cards.reduce(unCaptured, 5) + _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.light.cards.reduce(captured, 5)\n      }\n    })\n  }));\n}\n\n\n\n//# sourceURL=webpack:///./src/store/actions/game.js?");

/***/ }),

/***/ "./src/store/actions/players.js":
/*!**************************************!*\
  !*** ./src/store/actions/players.js ***!
  \**************************************/
/*! exports provided: setHand, captureCard, removeFromHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setHand\", function() { return setHand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"captureCard\", function() { return captureCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromHand\", function() { return removeFromHand; });\n/* harmony import */ var _master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../master */ \"./src/store/master.js\");\n/* harmony import */ var _data_characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/characters */ \"./src/data/characters.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction setHand(player, deck) {\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, _defineProperty({}, player, _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state[player]), {}, {\n    name: _data_characters__WEBPACK_IMPORTED_MODULE_1__[\"default\"][deck].name,\n    cards: _data_characters__WEBPACK_IMPORTED_MODULE_1__[\"default\"][deck].cards.map(function (card, idx) {\n      return _objectSpread(_objectSpread({}, card), {}, {\n        id: card.creature,\n        captured: false,\n        owner: player,\n        inHand: true\n      });\n    })\n  }))));\n}\n\nfunction captureCard(target) {\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, _defineProperty({}, target.owner, _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state[target.owner]), {}, {\n    cards: _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state[target.owner].cards.map(function (card) {\n      if (card.id === target.id) {\n        return _objectSpread(_objectSpread({}, card), {}, {\n          captured: !card.captured\n        });\n      } else {\n        return card;\n      }\n    })\n  }))));\n}\n\nfunction removeFromHand(target) {\n  var currentPlayer = _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.game.currentPlayer;\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, _defineProperty({}, currentPlayer, _objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state[currentPlayer]), {}, {\n    cards: _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state[currentPlayer].cards.map(function (card) {\n      if (card.id == target) {\n        return _objectSpread(_objectSpread({}, card), {}, {\n          inHand: !card.inHand\n        });\n      } else {\n        return card;\n      }\n    })\n  }))));\n}\n\n\n\n//# sourceURL=webpack:///./src/store/actions/players.js?");

/***/ }),

/***/ "./src/store/actions/tiles.js":
/*!************************************!*\
  !*** ./src/store/actions/tiles.js ***!
  \************************************/
/*! exports provided: populateTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateTile\", function() { return populateTile; });\n/* harmony import */ var _master__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../master */ \"./src/store/master.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction populateTile(target) {\n  _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].setState(_objectSpread(_objectSpread({}, _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state), {}, {\n    tiles: _master__WEBPACK_IMPORTED_MODULE_0__[\"master\"].state.tiles.map(function (tile) {\n      if (tile.id === target.tile) {\n        return _objectSpread(_objectSpread({}, tile), {}, {\n          card: {\n            id: target.card.id,\n            owner: target.card.owner\n          }\n        });\n      } else {\n        return tile;\n      }\n    })\n  }));\n}\n\n\n\n//# sourceURL=webpack:///./src/store/actions/tiles.js?");

/***/ }),

/***/ "./src/store/master.js":
/*!*****************************!*\
  !*** ./src/store/master.js ***!
  \*****************************/
/*! exports provided: master, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"master\", function() { return master; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony import */ var _stateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stateManager */ \"./src/stateManager.js\");\n/* harmony import */ var _reducers_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/game */ \"./src/store/reducers/game.js\");\n/* harmony import */ var _reducers_tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/tiles */ \"./src/store/reducers/tiles.js\");\n/* harmony import */ var _reducers_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/light */ \"./src/store/reducers/light.js\");\n/* harmony import */ var _reducers_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/dark */ \"./src/store/reducers/dark.js\");\n\n\n\n\n\nvar initialState = {\n  game: _reducers_game__WEBPACK_IMPORTED_MODULE_1__[\"game\"],\n  tiles: _reducers_tiles__WEBPACK_IMPORTED_MODULE_2__[\"tiles\"],\n  light: _reducers_light__WEBPACK_IMPORTED_MODULE_3__[\"light\"],\n  dark: _reducers_dark__WEBPACK_IMPORTED_MODULE_4__[\"dark\"],\n  target: {\n    reset: reset\n  },\n  events: {}\n};\nvar master = Object(_stateManager__WEBPACK_IMPORTED_MODULE_0__[\"createState\"])(initialState);\n\nfunction reset() {\n  master.setState(initialState);\n}\n\n\n\n//# sourceURL=webpack:///./src/store/master.js?");

/***/ }),

/***/ "./src/store/reducers/dark.js":
/*!************************************!*\
  !*** ./src/store/reducers/dark.js ***!
  \************************************/
/*! exports provided: dark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dark\", function() { return dark; });\nvar dark = {\n  name: null,\n  cards: null,\n  human: false\n};\n\n\n//# sourceURL=webpack:///./src/store/reducers/dark.js?");

/***/ }),

/***/ "./src/store/reducers/game.js":
/*!************************************!*\
  !*** ./src/store/reducers/game.js ***!
  \************************************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"game\", function() { return game; });\nvar game = {\n  currentPlayer: null,\n  turn: 0,\n  card: null,\n  tile: null,\n  score: {\n    light: 5,\n    dark: 5\n  }\n};\n\n\n//# sourceURL=webpack:///./src/store/reducers/game.js?");

/***/ }),

/***/ "./src/store/reducers/light.js":
/*!*************************************!*\
  !*** ./src/store/reducers/light.js ***!
  \*************************************/
/*! exports provided: light */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"light\", function() { return light; });\nvar light = {\n  name: null,\n  cards: null,\n  human: true\n};\n\n\n//# sourceURL=webpack:///./src/store/reducers/light.js?");

/***/ }),

/***/ "./src/store/reducers/mode.js":
/*!************************************!*\
  !*** ./src/store/reducers/mode.js ***!
  \************************************/
/*! exports provided: mode, setMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mode\", function() { return mode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMode\", function() { return setMode; });\n/* harmony import */ var _stateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stateManager */ \"./src/stateManager.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar modeUpdated = new Event(\"modeUpdated\");\nvar initialState = {\n  mode: \"characterSelection\",\n  events: {\n    setMode: \"setMode\"\n  },\n  target: {}\n};\nvar mode = Object(_stateManager__WEBPACK_IMPORTED_MODULE_0__[\"createState\"])(initialState, modeUpdated);\n\nfunction setMode(target) {\n  mode.setState(_objectSpread(_objectSpread({}, mode.state), {}, {\n    mode: target\n  }));\n}\n\n\n\n//# sourceURL=webpack:///./src/store/reducers/mode.js?");

/***/ }),

/***/ "./src/store/reducers/tiles.js":
/*!*************************************!*\
  !*** ./src/store/reducers/tiles.js ***!
  \*************************************/
/*! exports provided: tiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tiles\", function() { return tiles; });\nvar tiles = [{\n  id: \"A1\",\n  card: null\n}, {\n  id: \"A2\",\n  card: null\n}, {\n  id: \"A3\",\n  card: null\n}, {\n  id: \"B1\",\n  card: null\n}, {\n  id: \"B2\",\n  card: null\n}, {\n  id: \"B3\",\n  card: null\n}, {\n  id: \"C1\",\n  card: null\n}, {\n  id: \"C2\",\n  card: null\n}, {\n  id: \"C3\",\n  card: null\n}];\n\n\n//# sourceURL=webpack:///./src/store/reducers/tiles.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });