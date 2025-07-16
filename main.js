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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  font-family: \"Share Tech Mono\", Tahoma, Geneva, Verdana, sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 40px 20px;\r\n  background: linear-gradient(to bottom right, #dceefb, #c8e1f0);\r\n  min-height: 100vh;\r\n  margin: 0;\r\n}\r\n\r\n#mainBody {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 40px;\r\n  max-width: 100%;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nh3 {\r\n  margin: 0px;\r\n}\r\n\r\n#player,\r\n#computer {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 30px);\r\n  grid-template-rows: repeat(10, 30px);\r\n  gap: 2px;\r\n  width: max-content;\r\n  margin: 20px 0;\r\n  padding: 10px;\r\n  background-color: #f0f8ff;\r\n  border: 2px solid #0077cc;\r\n  border-radius: 10px;\r\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);\r\n}\r\n\r\n.cell {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #cce5ff;\r\n  border: 1px solid #007bff;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  transition: background-color 0.3s ease, transform 0.1s ease;\r\n}\r\n\r\n.cell:hover {\r\n  transform: scale(1.05);\r\n  background-color: #b3d7ff;\r\n}\r\n\r\n.player.cell.ship {\r\n  background-color: #004d80;\r\n}\r\n\r\n.player.cell.ship.hit,\r\n.cell.hit {\r\n  background-color: #ff4d4d;\r\n}\r\n\r\n.cell.miss {\r\n  background-color: #ffffff;\r\n}\r\n\r\n.board-label {\r\n  text-align: center;\r\n  margin-bottom: 12px;\r\n  font-weight: 600;\r\n  font-size: 1.4em;\r\n  color: #003366;\r\n}\r\n\r\n#winscreen,\r\n#losescreen {\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: 10;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  font-size: 4em;\r\n  font-weight: bold;\r\n  text-align: center;\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  pointer-events: none;\r\n  transition: opacity 0.4s ease, visibility 0.4s ease;\r\n}\r\n\r\n#winscreen.show,\r\n#losescreen.show {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  pointer-events: auto;\r\n}\r\n.boardContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\nbutton {\r\n  background-color: #007bff;\r\n  color: white;\r\n  padding: 10px 18px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 1em;\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #0069d9;\r\n}\r\n\r\nbutton:active {\r\n  background-color: #005cbf;\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: #aacbee;\r\n  cursor: not-allowed;\r\n  opacity: 0.6;\r\n}\r\nh1 {\r\n  text-decoration: underline;\r\n}\r\n.cell.preview {\r\n  background-color: rgba(0, 255, 0, 0.4);\r\n}\r\n.gitLogo {\r\n  width: 10vh;\r\n  user-select: none;\r\n  caret-color: transparent;\r\n  margin-top: 100px;\r\n  flex-shrink: 0;\r\n  height: 10vh;\r\n  margin-right: 5px;\r\n  padding: 2px;\r\n  align-self: flex-end;\r\n}\r\n\r\n.gitLogo:hover {\r\n  transform: scale(1.05);\r\n  transition: transform 0.5s ease-in-out;\r\n}\r\n\r\nimg {\r\n  border: 5px solid #2b2b2b;\r\n  border-radius: 50%;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerMove: () => (/* binding */ computerMove),\n/* harmony export */   playerMove: () => (/* binding */ playerMove)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\r\nconst winScreen = document.getElementById(\"winscreen\");\r\nconst loseScreen = document.getElementById(\"losescreen\");\r\nconst turnDisplay = document.getElementById(\"turns\");\r\nlet PlayerTurn = true;\r\n\r\nfunction computerMove() {\r\n  const playerCells = Array.from(document.querySelectorAll(\".cell.player\"));\r\n  let x, y, cell, alreadyAttacked;\r\n\r\n  do {\r\n    x = Math.floor(Math.random() * 10);\r\n    y = Math.floor(Math.random() * 10);\r\n\r\n    alreadyAttacked =\r\n      _setup__WEBPACK_IMPORTED_MODULE_0__.player.board.hits.some(([hx, hy]) => hx === x && hy === y) ||\r\n      _setup__WEBPACK_IMPORTED_MODULE_0__.player.board.missedAttacks.some(([mx, my]) => mx === x && my === y);\r\n  } while (alreadyAttacked);\r\n\r\n  cell = playerCells.find(\r\n    (cell) => Number(cell.dataset.x) === x && Number(cell.dataset.y) === y\r\n  );\r\n\r\n  const hit = _setup__WEBPACK_IMPORTED_MODULE_0__.player.board.receiveAttack(x, y);\r\n  cell.classList.add(hit ? \"hit\" : \"miss\");\r\n\r\n  if (_setup__WEBPACK_IMPORTED_MODULE_0__.player.board.allSunk()) {\r\n    loseScreen.style.display = \"flex\";\r\n    loseScreen.classList.add(\"show\");\r\n  }\r\n\r\n  PlayerTurn = true;\r\n  turnDisplay.firstChild.innerHTML = \"YOUR TURN\";\r\n}\r\n\r\nfunction playerMove() {\r\n  const computerCells = Array.from(document.querySelectorAll(\".cell.computer\"));\r\n\r\n  computerCells.forEach((cell) => {\r\n    cell.addEventListener(\"click\", () => {\r\n      if (!PlayerTurn) return;\r\n\r\n      const x = Number(cell.dataset.x);\r\n      const y = Number(cell.dataset.y);\r\n\r\n      const alreadyAttacked =\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.computer.board.hits.some(([hx, hy]) => hx === x && hy === y) ||\r\n        _setup__WEBPACK_IMPORTED_MODULE_0__.computer.board.missedAttacks.some(([mx, my]) => mx === x && my === y);\r\n\r\n      if (alreadyAttacked) return;\r\n\r\n      const hit = _setup__WEBPACK_IMPORTED_MODULE_0__.computer.board.receiveAttack(x, y);\r\n      cell.classList.add(hit ? \"hit\" : \"miss\");\r\n\r\n      if (_setup__WEBPACK_IMPORTED_MODULE_0__.computer.board.allSunk()) {\r\n        winScreen.style.display = \"flex\";\r\n        winScreen.classList.add(\"show\");\r\n      }\r\n\r\n      PlayerTurn = false;\r\n      turnDisplay.firstChild.innerHTML = \"COMPUTERS TURN\";\r\n      setTimeout(computerMove, 500);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://battleships/./src/gameController.js?\n}");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameBoard: () => (/* binding */ createGameBoard)\n/* harmony export */ });\nfunction createGameBoard() {\r\n  const ships = [];\r\n  const misses = [];\r\n  const hits = [];\r\n  const board = Array(10)\r\n    .fill(null)\r\n    .map(() => Array(10).fill(null));\r\n\r\n  function placeShip(ship, startX, startY, isHorizontal = true) {\r\n    for (let i = 0; i < ship.size; i++) {\r\n      const x = isHorizontal ? startX + i : startX;\r\n      const y = isHorizontal ? startY : startY + i;\r\n\r\n      if (x < 0 || x >= 10 || y < 0 || y >= 10) return false;\r\n      if (board[y][x] !== null) return false;\r\n    }\r\n    for (let i = 0; i < ship.size; i++) {\r\n      const x = isHorizontal ? startX + i : startX;\r\n      const y = isHorizontal ? startY : startY + i;\r\n      board[y][x] = ship;\r\n    }\r\n    ships.push(ship);\r\n    return true;\r\n  }\r\n\r\n  function receiveAttack(x, y) {\r\n    const target = board[y][x];\r\n    if (target !== null) {\r\n      target.hit();\r\n      hits.push([x, y]);\r\n      return true;\r\n    } else {\r\n      misses.push([x, y]);\r\n      return false;\r\n    }\r\n  }\r\n  function allSunk() {\r\n    for (let i = 0; i < ships.length; i++) {\r\n      if (ships[i].isSunk()) {\r\n        continue;\r\n      } else {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n\r\n  return {\r\n    placeShip,\r\n    receiveAttack,\r\n    allSunk,\r\n    get missedAttacks() {\r\n      return misses;\r\n    },\r\n    get board() {\r\n      return board;\r\n    },\r\n    get ships() {\r\n      return ships;\r\n    },\r\n    get hits() {\r\n      return hits;\r\n    },\r\n    size: board.length,\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://battleships/./src/gameboard.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameController */ \"./src/gameController.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst startGameBttn = document.getElementById(\"startGameBtn\");\r\nconst rotationBttn = document.getElementById(\"rotateBtn\");\r\nconst turnDisplay = document.getElementById(\"turns\");\r\nstartGameBttn.addEventListener(\"click\", (e) => {\r\n  (0,_gameController__WEBPACK_IMPORTED_MODULE_3__.playerMove)();\r\n  startGameBttn.style.display = \"None\";\r\n  rotationBttn.style.display = \"None\";\r\n  turnDisplay.style.display = \"Block\";\r\n});\r\n\r\n(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup__WEBPACK_IMPORTED_MODULE_2__.player, \"player\");\r\n(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(_setup__WEBPACK_IMPORTED_MODULE_2__.computer, \"computer\");\r\n\r\n//playerMove();\r\n\n\n//# sourceURL=webpack://battleships/./src/index.js?\n}");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPlayer: () => (/* binding */ createPlayer)\n/* harmony export */ });\nfunction createPlayer(name, isHuman = true, board) {\r\n  function attack(enemyBoard, x, y) {\r\n    enemyBoard.receiveAttack(x, y);\r\n  }\r\n\r\n  return {\r\n    isHuman,\r\n    board,\r\n    attack,\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://battleships/./src/player.js?\n}");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard),\n/* harmony export */   renderBoards: () => (/* binding */ renderBoards)\n/* harmony export */ });\nfunction renderBoard(player, containerId) {\r\n  const container = document.getElementById(containerId);\r\n  container.innerHTML = \"\";\r\n\r\n  player.board.board.forEach((row, y) => {\r\n    row.forEach((cell, x) => {\r\n      const cellDiv = document.createElement(\"div\");\r\n      cellDiv.classList.add(\"cell\", player.isHuman ? \"player\" : \"computer\");\r\n\r\n      if (cell) {\r\n        cellDiv.classList.add(\"ship\");\r\n      }\r\n\r\n      cellDiv.dataset.x = x;\r\n      cellDiv.dataset.y = y;\r\n\r\n      container.appendChild(cellDiv);\r\n    });\r\n  });\r\n}\r\n\r\nfunction renderBoards(player, computer) {\r\n  renderBoard(player, \"player\");\r\n  renderBoard(computer, \"computer\");\r\n}\r\n\n\n//# sourceURL=webpack://battleships/./src/render.js?\n}");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   player: () => (/* binding */ player),\n/* harmony export */   setupBoards: () => (/* binding */ setupBoards)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameController */ \"./src/gameController.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst SHIP_TYPES = [\r\n  { name: \"Carrier\", size: 5 },\r\n  { name: \"Battleship\", size: 4 },\r\n  { name: \"Patrol Boat\", size: 2 },\r\n  { name: \"Submarine\", size: 3 },\r\n  { name: \"Destroyer\", size: 3 },\r\n];\r\n\r\nconst startGameBttn = document.getElementById(\"startGameBtn\");\r\nconst placeHeading = document.getElementById(\"placeHeading\");\r\nconst playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.createGameBoard)();\r\nconst computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.createGameBoard)();\r\n\r\nconst player = (0,_player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(\"Player\", true, playerBoard);\r\nconst computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(\"Computer\", false, computerBoard);\r\n\r\nfunction setupBoards() {\r\n  let currentShipIndex = 0;\r\n  let rotation = true;\r\n  const playerBoardContainer = document.querySelector(\"#player\");\r\n  playerBoardContainer.addEventListener(\"mouseover\", (e) => {\r\n    const cell = e.target;\r\n    if (!cell.classList.contains(\"cell\")) return;\r\n    if (currentShipIndex >= SHIP_TYPES.length) return;\r\n\r\n    const x = Number(cell.dataset.x);\r\n    const y = Number(cell.dataset.y);\r\n    const shipType = SHIP_TYPES[currentShipIndex];\r\n    const length = shipType.size;\r\n\r\n    for (let i = 0; i < length; i++) {\r\n      const cellX = rotation ? x + i : x;\r\n      const cellY = rotation ? y : y + i;\r\n\r\n      const previewCell = document.querySelector(\r\n        `.cell[data-x=\"${cellX}\"][data-y=\"${cellY}\"]`\r\n      );\r\n      if (previewCell) previewCell.classList.add(\"preview\");\r\n    }\r\n  });\r\n\r\n  playerBoardContainer.addEventListener(\"mouseout\", (e) => {\r\n    document.querySelectorAll(\".cell.preview\").forEach((cell) => {\r\n      cell.classList.remove(\"preview\");\r\n    });\r\n  });\r\n  const rotationBttn = document.getElementById(\"rotateBtn\");\r\n  rotationBttn.addEventListener(\"click\", () => {\r\n    rotation = !rotation;\r\n    console.log(rotation);\r\n  });\r\n  playerBoardContainer.addEventListener(\"click\", (e) => {\r\n    if (currentShipIndex >= SHIP_TYPES.length) return;\r\n\r\n    const cell = e.target;\r\n    if (!cell.classList.contains(\"cell\")) return;\r\n\r\n    const x = Number(cell.dataset.x);\r\n    const y = Number(cell.dataset.y);\r\n    const shipType = SHIP_TYPES[currentShipIndex];\r\n    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.createBattleship)(shipType.size);\r\n\r\n    const placed = player.board.placeShip(ship, x, y, rotation);\r\n\r\n    if (placed) {\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_4__.renderBoard)(player, \"player\");\r\n      currentShipIndex++;\r\n\r\n      if (currentShipIndex >= SHIP_TYPES.length) {\r\n        startGameBttn.disabled = false;\r\n        placeHeading.style.display = \"None\";\r\n\r\n        playerBoardContainer.style.pointerEvents = \"none\";\r\n      }\r\n    } else {\r\n    }\r\n  });\r\n\r\n  SHIP_TYPES.forEach((type) => {\r\n    let placed = false;\r\n    while (!placed) {\r\n      const x = Math.floor(Math.random() * computer.board.size);\r\n      const y = Math.floor(Math.random() * computer.board.size);\r\n      const horizontal = Math.random() < 0.5;\r\n\r\n      placed = computer.board.placeShip(\r\n        (0,_ship__WEBPACK_IMPORTED_MODULE_2__.createBattleship)(type.size),\r\n        x,\r\n        y,\r\n        horizontal\r\n      );\r\n    }\r\n  });\r\n}\r\n\r\nsetupBoards();\r\n\n\n//# sourceURL=webpack://battleships/./src/setup.js?\n}");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBattleship: () => (/* binding */ createBattleship)\n/* harmony export */ });\nfunction createBattleship(size) {\r\n  return {\r\n    size,\r\n    hits: 0,\r\n    hit() {\r\n      this.hits++;\r\n    },\r\n    isSunk() {\r\n      return this.hits >= this.size;\r\n    },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://battleships/./src/ship.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/styles.css?\n}");

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