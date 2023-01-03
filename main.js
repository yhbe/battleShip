/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  padding: 0px;\\n  margin: 0px;\\n  box-sizing: border-box;\\n  font-family: 'Anybody', cursive;\\n}\\n\\nbody{\\n  background-color: black\\n}\\n\\n\\n.boardcontainer{\\n  display: flex;\\n  gap: 50px;\\n  justify-content: center;\\n}\\n\\n.computergrid,\\n.playergrid{\\n  display: grid;\\n  background-color: rgb(0, 110, 255);\\n  grid-template-columns: repeat(10, 60px);\\n}\\n\\n.squareDiv{\\n  height: 50px;\\n  background-color: orange;\\n  font-size: 2rem;\\n  border: 1px solid black;\\n  box-shadow: 2px 2px 12px black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.squareDiv:hover{\\n  cursor: pointer;\\n}\\n\\n.battleshipmessage{\\n  color: rgb(39, 77, 245);\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 75px;\\n  margin-bottom: 50px;\\n  font-size: 3rem;\\n}\\n\\n.placemessage{\\n  color: green;\\n  margin-top: 50px;\\n  display: flex;\\n  justify-content: center;\\n  font-size: 2rem;\\n}\\n\\n.active,\\n.activeship{\\n  background-color: rgb(255, 30, 0);\\n}\\n\\n.hidden{\\n  display: none;\\n}\\n\\n\\n.attacked{\\n  background-color: black;\\n  color: black;\\n}\\n\\n.hitship{\\n  background-color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Components/gameboard.js":
/*!*************************************!*\
  !*** ./src/Components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/Components/ship.js\");\n\n\nfunction Gameboard() {\n  return {\n    board: createBoard(),\n    place,\n    receiveAttack,\n    activeShips: [],\n    shipsLeft,\n    playedMoves: [],\n    computerMoves: new Set(),\n    computerAttack,\n    randomPlace,\n  };\n\n  function createBoard(length, coordinate) {\n    let alphabet = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\"];\n    let map = new Map();\n    for (let elem of alphabet) {\n      for (let i = 1; i < 11; i++) {\n        map.set(`${elem}${i}`, []);\n      }\n    }\n    return map;\n  }\n\n  function place(length, coordinate, axis) {\n    let [shipLetter, shipNumber] = coordinate;\n    let createNewShip = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n    this.activeShips.push(createNewShip);\n    let results = [];\n\n    if (axis === \"axisX\") {\n      for (let i = shipNumber; i < Number(shipNumber) + Number(length); i++) {\n        let getValue = this.board.get(`${shipLetter}${i}`);\n        if (getValue === undefined) {\n          this.activeShips.pop();\n          return null;\n        }\n        if (getValue.length === 0) {\n          results.push(`${shipLetter}${i}`);\n          getValue.push(\"Ship Is Here\");\n        } else {\n          this.activeShips.pop();\n          return null;\n        }\n      }\n    } else if (axis === \"axisY\") {\n      let alphabet = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\"];\n      let arrIndex = alphabet.findIndex((letter) => letter === shipLetter);\n      alphabet = alphabet.slice(arrIndex, Number(length) + Number(arrIndex));\n      if (alphabet.length < length) {\n        this.activeShips.pop();\n        return null;\n      }\n      for (let letter of alphabet) {\n        let getValue = this.board.get(`${letter}${shipNumber}`);\n        if (getValue === undefined) {\n          this.activeShips.pop();\n          return;\n        }\n        if (getValue.length === 0) {\n          results.push(`${letter}${shipNumber}`);\n          getValue.push(\"Ship Is Here\");\n        } else {\n          this.activeShips.pop();\n          return null;\n        }\n      }\n    }\n\n    createNewShip.coordinates = results;\n    return createNewShip.coordinates;\n  }\n\n  function receiveAttack(coordinate) {\n    let [shipLetter, shipNumber, shipExtra] = coordinate;\n    if (coordinate.length === 3) {\n      shipNumber = shipNumber += shipExtra;\n    }\n    let getValue = this.board.get(`${shipLetter}${shipNumber}`);\n    if (getValue.length === 0) {\n      this.playedMoves.push(`${shipLetter}${shipNumber}`);\n      getValue.push(\"Miss\");\n      return \"Miss!\";\n    }\n\n    if (getValue[0] === \"Miss\" || getValue[0] === \"Played\") {\n      return \"You played here already\";\n    }\n\n    if (getValue[0] === \"Ship Is Here\") {\n      let activeShipArr = this.activeShips;\n      for (let category of activeShipArr) {\n        let shipsLocations = category.coordinates;\n        for (let location of shipsLocations) {\n          if (location === `${shipLetter}${shipNumber}`) {\n            category.hits++;\n            shipsLocations.splice(shipsLocations.indexOf(location), 1);\n            if (shipsLocations.length === 0) {\n              category.sunk = true;\n            }\n            this.playedMoves.push(`${shipLetter}${shipNumber}`);\n            getValue.shift();\n            getValue.push(\"Played\");\n            return \"Hit!\";\n          }\n        }\n      }\n    }\n  }\n\n  function shipsLeft() {\n    let activeShipsArr = this.activeShips;\n    activeShipsArr = activeShipsArr.filter(\n      (category) => category.coordinates.length !== 0\n    );\n    return activeShipsArr.length;\n  }\n\n  function computerAttack() {\n    let alphabet = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\"];\n    let possibleMoves = [];\n\n    for (let elem of alphabet) {\n      for (let i = 1; i < 11; i++) {\n        possibleMoves.push([`${elem}`, `${i}`]);\n      }\n    }\n\n    possibleMoves = possibleMoves.filter((move) => {\n      move = String(move);\n      return !this.computerMoves.has(move);\n    });\n\n    if (possibleMoves.length === 0) return \"You win!\";\n\n    let randomNumber = Math.floor(Math.random() * possibleMoves.length);\n    let move = possibleMoves.at(randomNumber);\n    this.computerMoves.add(String(move));\n\n    const attack = () => {\n      this.receiveAttack(move);\n    };\n    attack();\n\n    return `${move}`;\n  }\n\n  function randomPlace() {\n    let alphabet = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\"];\n    let xOrY = [\"axisX\", \"axisY\"];\n\n    for (let i = 1; i < 6; i++) {\n      let randomNumber = Math.round(Math.random() * 8);\n      let randomAxis = Math.round(Math.random() * 1);\n      let a = this.place(\n        String(i),\n        [String(`${alphabet[randomNumber]}`), String(`${randomNumber}`)],\n        `${xOrY[randomAxis]}`\n      );\n      if (a == null) {\n        i--;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Components/gameboard.js?");

/***/ }),

/***/ "./src/Components/ship.js":
/*!********************************!*\
  !*** ./src/Components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(length) {\n  return {\n    coordinates: null,\n    length: length,\n    hits: 0,\n    sunk: false,\n    hit,\n  };\n\n  function hit() {\n    if (this.hits === length - 1) {\n      return (this.sunk = true);\n    }\n    return this.hits++;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Components/ship.js?");

/***/ }),

/***/ "./src/Dom/gameLoop.js":
/*!*****************************!*\
  !*** ./src/Dom/gameLoop.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameLoop\": () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _Components_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/gameboard */ \"./src/Components/gameboard.js\");\n\n\nfunction gameLoop() {\n  let playerBoard = new _Components_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n  let computerBoard = new _Components_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n  setUpBoard(\".playergrid\");\n  callShip(5);\n\n  function setUpBoard(board) {\n    //add handle computerdiv function toggle!\n    const div = document.querySelector(`${board}`);\n    for (let elem of playerBoard.board) {\n      let squareDiv = document.createElement(\"div\");\n      squareDiv.className = `${elem.slice(0, -1)} squareDiv`;\n      squareDiv.innerHTML = `${elem.slice(0, -1)}`;\n      div.append(squareDiv);\n    }\n  }\n\n  function randomizeComputerGrid() {\n    let computergrid = document.querySelector(\".computergrid\");\n    computerBoard.randomPlace();\n    computergrid.addEventListener(\"click\", (event) => {\n      let attack = computerBoard.receiveAttack(event.target.innerHTML);\n      if (attack === \"You played here already\") {\n        event.target.classList.add(\"attacked\");\n      } else if (attack === \"Miss!\") {\n        event.target.classList.add(\"attacked\");\n        attackPlayer();\n      } else {\n        event.target.classList.add(\"hitship\");\n        if (computerBoard.shipsLeft() === 0) {\n          return alert(\"Player Wins\");\n        }\n        attackPlayer();\n      }\n    });\n  }\n\n  function attackPlayer(queue = []) {\n    let a = playerBoard.computerAttack();\n    a = a.split(\",\");\n    a = a.join(\"\");\n    let b = document.querySelector(`.playergrid > .${a}`);\n    b.style.backgroundColor = \"Black\";\n    b.style.color = \"black\";\n    if (playerBoard.shipsLeft() === 0) {\n      return alert(\"Computer Wins\");\n    }\n  }\n\n  function callShip(length) {\n    if (length === 0) return;\n    let squareDiv = document.querySelectorAll(\".squareDiv\");\n    toggleComputerBoard();\n\n    function mouseEnter(event) {\n      let [first, second, third] = event.target.innerHTML;\n      if (third === undefined) {\n        third = 0;\n      }\n      let word = [];\n      word.push(first, Number(second) + third);\n      //\n      let fakeBoard = new _Components_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n      let highLight = fakeBoard.place(length, word, \"axisX\");\n      if (!highLight) {\n        return;\n      }\n\n      highLight.forEach((light) => {\n        let a = document.getElementsByClassName(light);\n        a[0].classList.add(\"active\");\n      });\n    }\n\n    function mouseOut() {\n      // squareDiv.forEach((div) =?)\n      let allActive = document.querySelectorAll(\".active\");\n      allActive.forEach((div) => div.classList.remove(\"active\"));\n    }\n\n    function onClick(event) {\n      if (event.target.classList.contains(\"active\")) {\n        let [first, second, third] = event.target.classList[0];\n        if (third === undefined) {\n          third = 0;\n        }\n        let word = [];\n        word.push(first, Number(second) + third);\n\n        let a = playerBoard.place(length, word, \"axisX\");\n\n        a.forEach((shipPart) => {\n          let allShipLocations = document.getElementsByClassName(shipPart);\n          allShipLocations[0].classList.add(\"activeship\");\n        });\n        length = length - 1;\n      }\n      if (length === 0) {\n        let lowerText = document.querySelector(\".placemessage\");\n        lowerText.style.color = \"Black\";\n        removeListener();\n        toggleComputerBoard();\n        setUpBoard(\".computergrid\");\n        randomizeComputerGrid();\n      }\n    }\n\n    squareDiv.forEach((div) => {\n      div.addEventListener(\"mouseenter\", mouseEnter);\n\n      div.addEventListener(\"mouseout\", mouseOut);\n\n      div.addEventListener(\"click\", onClick);\n    });\n\n    function removeListener() {\n      let squareDiv = document.querySelectorAll(\".squareDiv\");\n\n      squareDiv.forEach((div) =>\n        div.removeEventListener(\"mouseenter\", mouseEnter)\n      );\n\n      squareDiv.forEach((div) => div.removeEventListener(\"mouseout\", mouseOut));\n\n      squareDiv.forEach((div) => div.removeEventListener(\"click\", onClick));\n    }\n\n    function toggleComputerBoard() {\n      const computerDiv = document.querySelector(\".computergrid\");\n      computerDiv.classList.toggle(\"hidden\");\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Dom/gameLoop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dom_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom/gameLoop */ \"./src/Dom/gameLoop.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_Dom_gameLoop__WEBPACK_IMPORTED_MODULE_0__.gameLoop)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;