/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #4e3805;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

#content {
  background: rgb(211, 181, 29);
  background: radial-gradient(
    circle,
    rgba(211, 181, 29, 1) 0%,
    rgba(205, 152, 29, 1) 100%
  );
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

/* header  */
header {
  background-color: rgba(182, 127, 33, 0.163);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 30px;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.logo img {
  height: 120px;
  border-radius: 50%;
}
nav {
  display: flex;
  gap: 1rem;
}
li {
  list-style-type: none;
  width: 99px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
}
li:hover {
  border-bottom: solid black;
  transition: 100ms;
}
.list-active {
  border-bottom: solid black;
}
li:hover {
  cursor: pointer;
}

/* footer */
footer {
  background-color: rgba(0, 0, 0, 0.111);
  color: black;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* about tab */
.about-container {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
  text-align: center;
}
.about-container p {
  width: 100%;
  font-size: 1.2rem;
}
#logo-image {
  height: 500px;
  background-color: #cd981d;
  border-radius: 50%;
}
.about-container * {
  margin-bottom: 0.5rem;
}

/* menu tab */
.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 1rem;
}
.menu-container img {
  border-radius: 25px;
  border: solid #6e470014;
  /* width: 400px; */
  width: 40dvh;
}
.option-container:hover {
  cursor: pointer;
}
.option-container {
  position: relative;
}
.option-container img:nth-child(2) {
  position: absolute;
  left: 0;
  transition: opacity 200ms;
}
.option-container img:nth-child(1) {
  opacity: 0;
  transition: opacity 200ms;
}
.option-container:hover img:nth-child(2) {
  opacity: 0;
  transition: opacity 200ms;
}
.option-container:hover img:nth-child(1) {
  opacity: 1;
  transition: opacity 200ms;
}
/* menu tab table */
.table-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table-container table {
  border-bottom: 1px solid #cd981d;
  height: 100%;
  width: 80dvw;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 1px;
  text-align: center;
}
.table-container th {
  border-bottom: 1px solid #cd981d;
  padding: 5px;
}
.table-container td {
  border-bottom: 1px solid #cd981d;
  padding: 5px;
}

/* orders tab */
.orders-container img {
  height: 500px;
  border-radius: 50%;
}
.orders-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-radius: 25px;
  height: 100dvh;
}
.orders-container div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}
.orders-container button {
  cursor: pointer;
  font-size: 1.3rem;
  width: 250px;
  border-radius: 10px;
  padding: 1rem;
  border: none;
  color: #000000;
  background-color: #ffffff;
}

@media (max-width: 850px) {
  #logo-image {
    height: 250px;
  }
  .orders-container {
    flex-direction: column;
  }
  .orders-container img {
    height: 250px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,cAAc;EACd,wEAAwE;AAC1E;;AAEA;EACE,6BAA6B;EAC7B;;;;GAIC;AACH;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA,YAAY;AACZ;EACE,2CAA2C;EAC3C,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,sCAAsC;EACtC,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,cAAc;AACd;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;;AAEA,aAAa;AACb;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA,mBAAmB;AACnB;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gCAAgC;EAChC,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,gCAAgC;EAChC,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,YAAY;AACd;;AAEA,eAAe;AACf;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,sBAAsB;EACxB;EACA;IACE,aAAa;EACf;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: #4e3805;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n#content {\n  background: rgb(211, 181, 29);\n  background: radial-gradient(\n    circle,\n    rgba(211, 181, 29, 1) 0%,\n    rgba(205, 152, 29, 1) 100%\n  );\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n\n/* header  */\nheader {\n  background-color: rgba(182, 127, 33, 0.163);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  padding-top: 30px;\n}\n.logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.logo img {\n  height: 120px;\n  border-radius: 50%;\n}\nnav {\n  display: flex;\n  gap: 1rem;\n}\nli {\n  list-style-type: none;\n  width: 99px;\n  height: 33px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nli:hover {\n  border-bottom: solid black;\n  transition: 100ms;\n}\n.list-active {\n  border-bottom: solid black;\n}\nli:hover {\n  cursor: pointer;\n}\n\n/* footer */\nfooter {\n  background-color: rgba(0, 0, 0, 0.111);\n  color: black;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* about tab */\n.about-container {\n  height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n  padding: 2rem;\n  text-align: center;\n}\n.about-container p {\n  width: 100%;\n  font-size: 1.2rem;\n}\n#logo-image {\n  height: 500px;\n  background-color: #cd981d;\n  border-radius: 50%;\n}\n.about-container * {\n  margin-bottom: 0.5rem;\n}\n\n/* menu tab */\n.menu-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 3rem;\n  padding: 1rem;\n}\n.menu-container img {\n  border-radius: 25px;\n  border: solid #6e470014;\n  /* width: 400px; */\n  width: 40dvh;\n}\n.option-container:hover {\n  cursor: pointer;\n}\n.option-container {\n  position: relative;\n}\n.option-container img:nth-child(2) {\n  position: absolute;\n  left: 0;\n  transition: opacity 200ms;\n}\n.option-container img:nth-child(1) {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n.option-container:hover img:nth-child(2) {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n.option-container:hover img:nth-child(1) {\n  opacity: 1;\n  transition: opacity 200ms;\n}\n/* menu tab table */\n.table-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.table-container table {\n  border-bottom: 1px solid #cd981d;\n  height: 100%;\n  width: 80dvw;\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 1px;\n  text-align: center;\n}\n.table-container th {\n  border-bottom: 1px solid #cd981d;\n  padding: 5px;\n}\n.table-container td {\n  border-bottom: 1px solid #cd981d;\n  padding: 5px;\n}\n\n/* orders tab */\n.orders-container img {\n  height: 500px;\n  border-radius: 50%;\n}\n.orders-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 1rem;\n  border-radius: 25px;\n  height: 100dvh;\n}\n.orders-container div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1.5rem;\n}\n.orders-container button {\n  cursor: pointer;\n  font-size: 1.3rem;\n  width: 250px;\n  border-radius: 10px;\n  padding: 1rem;\n  border: none;\n  color: #000000;\n  background-color: #ffffff;\n}\n\n@media (max-width: 850px) {\n  #logo-image {\n    height: 250px;\n  }\n  .orders-container {\n    flex-direction: column;\n  }\n  .orders-container img {\n    height: 250px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutComponent)
/* harmony export */ });
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");


function aboutComponent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  const logoImage = new Image();
  const para1 = document.createElement("h1");
  const para2 = document.createElement("h3");
  const para3 = document.createElement("h3");
  const paraContainer = document.createElement("div");
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  para1.textContent = "GS Pães©";
  para2.textContent = "Trazendo sabor para o seu café da manhã";
  para3.textContent =
    "Pães artesanais, feitos sem conservantes, com produtos de qualidade prezando o sabor.";
  logoImage.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  logoImage.id = "logo-image";
  paraContainer.appendChild(para1);
  paraContainer.appendChild(para2);
  // paraContainer.appendChild(para3);
  aboutContainer.appendChild(paraContainer);
  aboutContainer.appendChild(logoImage);
  aboutContainer.appendChild(para3);
  mainContent.appendChild(aboutContainer);
  return mainContent;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuComponent)
/* harmony export */ });
/* harmony import */ var _img_option1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/option1.png */ "./src/img/option1.png");
/* harmony import */ var _img_option1_alt_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/option1-alt.png */ "./src/img/option1-alt.png");
/* harmony import */ var _img_option2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/option2.png */ "./src/img/option2.png");
/* harmony import */ var _img_option2_alt_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/option2-alt.png */ "./src/img/option2-alt.png");
/* harmony import */ var _img_option3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/option3.png */ "./src/img/option3.png");
/* harmony import */ var _img_option3_alt_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/option3-alt.png */ "./src/img/option3-alt.png");
/* harmony import */ var _img_option4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/option4.png */ "./src/img/option4.png");
/* harmony import */ var _img_option4_alt_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/option4-alt.png */ "./src/img/option4-alt.png");
/* harmony import */ var _img_option5_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/option5.png */ "./src/img/option5.png");
/* harmony import */ var _img_option5_alt_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/option5-alt.png */ "./src/img/option5-alt.png");











function menuComponent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  populateMenu(mainContent, 5);
  return mainContent;
}

function populateMenu(mainContent, itemAmount) {
  const option = [];
  const optionAlt = [];
  const optionSrc = [
    _img_option1_png__WEBPACK_IMPORTED_MODULE_0__,
    _img_option2_png__WEBPACK_IMPORTED_MODULE_2__,
    _img_option3_png__WEBPACK_IMPORTED_MODULE_4__,
    _img_option4_png__WEBPACK_IMPORTED_MODULE_6__,
    _img_option5_png__WEBPACK_IMPORTED_MODULE_8__,
  ];
  const optionSrcAlt = [
    _img_option1_alt_png__WEBPACK_IMPORTED_MODULE_1__,
    _img_option2_alt_png__WEBPACK_IMPORTED_MODULE_3__,
    _img_option3_alt_png__WEBPACK_IMPORTED_MODULE_5__,
    _img_option4_alt_png__WEBPACK_IMPORTED_MODULE_7__,
    _img_option5_alt_png__WEBPACK_IMPORTED_MODULE_9__,
  ];
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  mainContent.appendChild(menuContainer);

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-container");
  tableContainer.appendChild(createTable(7));
  menuContainer.appendChild(tableContainer);

  for (let i = 0; i < itemAmount; i++) {
    option[i] = new Image();
    optionAlt[i] = new Image();
    option[i].src = optionSrc[i];
    optionAlt[i].src = optionSrcAlt[i];
    const optionContainer = document.createElement("div");
    menuContainer.appendChild(optionContainer);
    optionContainer.appendChild(option[i]);
    optionContainer.appendChild(optionAlt[i]);
    optionContainer.classList.add("option-container");
    optionContainer.addEventListener("click", () => {
      window.open("https://www.instagram.com/gspaes/", "_blank");
    });
  }
}

function createTable(rowAmount = 5) {
  const createRow = () => {
    const row = document.createElement("tr");
    return row;
  };

  const createData = (amount, type = "td") => {
    const row = createRow();
    for (let i = 0; i < amount; i++) {
      const data = document.createElement(type);
      row.appendChild(data);
    }
    return row;
  };

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const rowHeader = createData(3, "th");
  thead.appendChild(rowHeader);
  table.appendChild(thead);

  for (let i = 0; i < rowAmount; i++) {
    const row = createData(3);
    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  // PLACEHOLDER, NEED TO MOVE THIS SOMEWHERE ELSE
  const header = thead.children[0].children;
  header[0].textContent = "Pão";
  header[1].textContent = "Mini";
  header[2].textContent = "Grande";

  const data = tbody.children;
  data[0].children[0].textContent = "Artesanal";
  data[0].children[1].textContent = "R$ 4,00";
  data[0].children[2].textContent = "R$ 25,00";

  data[1].children[0].textContent = "Calabresa";
  data[1].children[1].textContent = "R$ 6,00";
  data[1].children[2].textContent = "R$ 30,00";

  data[2].children[0].textContent = "Pizza";
  data[2].children[1].textContent = "R$ 6,00";
  data[2].children[2].textContent = "R$ 30,00";

  data[3].children[0].textContent = "Queijo";
  data[3].children[1].textContent = "R$ 6,00";
  data[3].children[2].textContent = "R$ 30,00";

  data[4].children[0].textContent = "Frango Cremoso";
  data[4].children[1].textContent = "R$ 6,00";
  data[4].children[2].textContent = "R$ 30,00";

  data[5].children[0].textContent = "Chocolate";
  data[5].children[1].textContent = "R$ 6,00";
  data[5].children[2].textContent = "R$ 30,00";

  data[6].children[0].textContent = "Frutas";
  data[6].children[1].textContent = "R$ 6,00";
  data[6].children[2].textContent = "R$ 30,00";
  // END OF PLACEHOLDER

  return table;
}


/***/ }),

/***/ "./src/orders.js":
/*!***********************!*\
  !*** ./src/orders.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutComponent)
/* harmony export */ });
/* harmony import */ var _img_logo_info_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo-info.png */ "./src/img/logo-info.png");


function aboutComponent() {
  const para = (text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  };

  const mainContent = document.createElement("div");
  const logoImage = new Image();
  const ctaHeader = document.createElement("h2");
  const paraContainer = document.createElement("div");
  const ordersContainer = document.createElement("div");
  const actionButton = document.createElement("button");
  const buttonContainer = document.createElement("div");

  ordersContainer.classList.add("orders-container");
  mainContent.classList.add("main-content");

  ctaHeader.textContent = "Pedidos podem ser feitos pelo nosso instagram!";

  actionButton.textContent = "Faça já o seu pedido!";
  logoImage.src = _img_logo_info_png__WEBPACK_IMPORTED_MODULE_0__;

  paraContainer.appendChild(ctaHeader);
  paraContainer.appendChild(para("📍 Santo Amaro - SP"));
  paraContainer.appendChild(para("🍞 Pães artesanais produzidos com carinho"));
  paraContainer.appendChild(para("📦 Pedidos sob encomenda"));
  paraContainer.appendChild(para("🕐 Atendimento: 10h às 19h"));
  paraContainer.appendChild(para("📞 (11) 96953-2812 / (11) 94751-7899"));
  paraContainer.appendChild(actionButton);
  ordersContainer.appendChild(logoImage);
  ordersContainer.appendChild(paraContainer);
  ordersContainer.appendChild(buttonContainer);
  mainContent.appendChild(ordersContainer);

  actionButton.addEventListener("click", () => {
    window.open("https://www.instagram.com/gspaes/", "_blank");
  });

  return mainContent;
}


/***/ }),

/***/ "./src/img/logo-info.png":
/*!*******************************!*\
  !*** ./src/img/logo-info.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b928352e2527d707bf84.png";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20517479d7b0a55e7c13.png";

/***/ }),

/***/ "./src/img/option1-alt.png":
/*!*********************************!*\
  !*** ./src/img/option1-alt.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03a712b1d3837d4982fa.png";

/***/ }),

/***/ "./src/img/option1.png":
/*!*****************************!*\
  !*** ./src/img/option1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d3a88baaf751b1aad24.png";

/***/ }),

/***/ "./src/img/option2-alt.png":
/*!*********************************!*\
  !*** ./src/img/option2-alt.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "594b10a73ddd2b1f77ab.png";

/***/ }),

/***/ "./src/img/option2.png":
/*!*****************************!*\
  !*** ./src/img/option2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0d3ebc74d33d8a4a469.png";

/***/ }),

/***/ "./src/img/option3-alt.png":
/*!*********************************!*\
  !*** ./src/img/option3-alt.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75c48dc4aceb8322d20a.png";

/***/ }),

/***/ "./src/img/option3.png":
/*!*****************************!*\
  !*** ./src/img/option3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b29d11f01fbf4c4c791a.png";

/***/ }),

/***/ "./src/img/option4-alt.png":
/*!*********************************!*\
  !*** ./src/img/option4-alt.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d8a9137a393f0b9157b.png";

/***/ }),

/***/ "./src/img/option4.png":
/*!*****************************!*\
  !*** ./src/img/option4.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "581af6953d313435ea10.png";

/***/ }),

/***/ "./src/img/option5-alt.png":
/*!*********************************!*\
  !*** ./src/img/option5-alt.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0871dbf3bf5f33c74385.png";

/***/ }),

/***/ "./src/img/option5.png":
/*!*****************************!*\
  !*** ./src/img/option5.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd2f2bd31dbf9f808f3e.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders */ "./src/orders.js");






const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);
// append header to content
content.appendChild(headerComponent());
// append about to content
content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
// append footer to content
content.appendChild(footerComponent());

changeContent();

function changeContent() {
  const footer = document.querySelector("footer");
  const about = document.querySelector(".about");
  const menu = document.querySelector(".menu");
  const orders = document.querySelector(".orders");

  about.addEventListener("click", () => {
    let mainContent = document.querySelector(".main-content");
    mainContent.remove();
    content.insertBefore((0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])(), footer);
    mainContent = document.querySelector(".main-content");
    mainContent.scrollIntoView({ behavior: "smooth" });
  });

  menu.addEventListener("click", () => {
    let mainContent = document.querySelector(".main-content");
    mainContent.remove();
    content.insertBefore((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])(), footer);
    mainContent = document.querySelector(".main-content");
    mainContent.scrollIntoView({ behavior: "smooth" });
  });

  orders.addEventListener("click", () => {
    let mainContent = document.querySelector(".main-content");
    mainContent.remove();
    content.insertBefore((0,_orders__WEBPACK_IMPORTED_MODULE_4__["default"])(), footer);
    mainContent = document.querySelector(".main-content");
    mainContent.scrollIntoView({ behavior: "smooth" });
  });
}

function headerComponent() {
  const header = document.createElement("header");
  const logoDiv = document.createElement("div");
  const logoImage = new Image();
  logoDiv.classList.add("logo");
  logoImage.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  logoImage.alt = "GS Pães Logo";
  logoDiv.appendChild(logoImage);
  header.appendChild(logoDiv);

  const nav = document.createElement("nav");
  const about = document.createElement("li");
  const menu = document.createElement("li");
  const orders = document.createElement("li");
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(orders);
  about.classList.add("about");
  about.textContent = "Sobre nós";
  menu.textContent = "Cardápio";
  menu.classList.add("menu");
  orders.textContent = "Pedidos";
  orders.classList.add("orders");
  header.appendChild(nav);

  return header;
}

function footerComponent() {
  const footer = document.createElement("footer");
  footer.textContent = "Footer";

  return footer;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1B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QXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNhO0FBQ0c7QUFDRjtBQUNJOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQWE7QUFDakM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBYztBQUN2QztBQUNBLGlDQUFpQyxvQkFBb0I7QUFDckQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQWE7QUFDdEM7QUFDQSxpQ0FBaUMsb0JBQW9CO0FBQ3JELEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFlO0FBQ3hDO0FBQ0EsaUNBQWlDLG9CQUFvQjtBQUNyRCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQ0FBSTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvb3JkZXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjNGUzODA1O1xuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4jY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYigyMTEsIDE4MSwgMjkpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgY2lyY2xlLFxuICAgIHJnYmEoMjExLCAxODEsIDI5LCAxKSAwJSxcbiAgICByZ2JhKDIwNSwgMTUyLCAyOSwgMSkgMTAwJVxuICApO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi8qIGhlYWRlciAgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAxMjcsIDMzLCAwLjE2Myk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xufVxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdpZHRoOiA5OXB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjaztcbiAgdHJhbnNpdGlvbjogMTAwbXM7XG59XG4ubGlzdC1hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjaztcbn1cbmxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBmb290ZXIgKi9cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMTEpO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIGFib3V0IHRhYiAqL1xuLmFib3V0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwZHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQtY29udGFpbmVyIHAge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4jbG9nby1pbWFnZSB7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDk4MWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hYm91dC1jb250YWluZXIgKiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLyogbWVudSB0YWIgKi9cbi5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5tZW51LWNvbnRhaW5lciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IHNvbGlkICM2ZTQ3MDAxNDtcbiAgLyogd2lkdGg6IDQwMHB4OyAqL1xuICB3aWR0aDogNDBkdmg7XG59XG4ub3B0aW9uLWNvbnRhaW5lcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcHRpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm9wdGlvbi1jb250YWluZXIgaW1nOm50aC1jaGlsZCgyKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cbi5vcHRpb24tY29udGFpbmVyIGltZzpudGgtY2hpbGQoMSkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xufVxuLm9wdGlvbi1jb250YWluZXI6aG92ZXIgaW1nOm50aC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG59XG4ub3B0aW9uLWNvbnRhaW5lcjpob3ZlciBpbWc6bnRoLWNoaWxkKDEpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cbi8qIG1lbnUgdGFiIHRhYmxlICovXG4udGFibGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2Q5ODFkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4MGR2dztcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhYmxlLWNvbnRhaW5lciB0aCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2Q5ODFkO1xuICBwYWRkaW5nOiA1cHg7XG59XG4udGFibGUtY29udGFpbmVyIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZDk4MWQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLyogb3JkZXJzIHRhYiAqL1xuLm9yZGVycy1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm9yZGVycy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBoZWlnaHQ6IDEwMGR2aDtcbn1cbi5vcmRlcnMtY29udGFpbmVyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEuNXJlbTtcbn1cbi5vcmRlcnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICNsb2dvLWltYWdlIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIC5vcmRlcnMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5vcmRlcnMtY29udGFpbmVyIGltZyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qjs7OztHQUlDO0FBQ0g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBLFlBQVk7QUFDWjtFQUNFLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGFBQWE7QUFDYjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQSxtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM0ZTM4MDU7XFxuICBmb250LWZhbWlseTogXFxcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cXFwiLCBcXFwiQXJpYWwgTmFycm93XFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMTEsIDE4MSwgMjkpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUsXFxuICAgIHJnYmEoMjExLCAxODEsIDI5LCAxKSAwJSxcXG4gICAgcmdiYSgyMDUsIDE1MiwgMjksIDEpIDEwMCVcXG4gICk7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4vKiBoZWFkZXIgICovXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAxMjcsIDMzLCAwLjE2Myk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmxvZ28gaW1nIHtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogOTlweDtcXG4gIGhlaWdodDogMzNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxufVxcbi5saXN0LWFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjaztcXG59XFxubGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjExMSk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBhYm91dCB0YWIgKi9cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwZHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWJvdXQtY29udGFpbmVyIHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuI2xvZ28taW1hZ2Uge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDk4MWQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5hYm91dC1jb250YWluZXIgKiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIG1lbnUgdGFiICovXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDNyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ubWVudS1jb250YWluZXIgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXI6IHNvbGlkICM2ZTQ3MDAxNDtcXG4gIC8qIHdpZHRoOiA0MDBweDsgKi9cXG4gIHdpZHRoOiA0MGR2aDtcXG59XFxuLm9wdGlvbi1jb250YWluZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ub3B0aW9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5vcHRpb24tY29udGFpbmVyIGltZzpudGgtY2hpbGQoMikge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcbi5vcHRpb24tY29udGFpbmVyIGltZzpudGgtY2hpbGQoMSkge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcbi5vcHRpb24tY29udGFpbmVyOmhvdmVyIGltZzpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcbi5vcHRpb24tY29udGFpbmVyOmhvdmVyIGltZzpudGgtY2hpbGQoMSkge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcbi8qIG1lbnUgdGFiIHRhYmxlICovXFxuLnRhYmxlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YWJsZS1jb250YWluZXIgdGFibGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZDk4MWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogODBkdnc7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAxcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50YWJsZS1jb250YWluZXIgdGgge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZDk4MWQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi50YWJsZS1jb250YWluZXIgdGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZDk4MWQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi8qIG9yZGVycyB0YWIgKi9cXG4ub3JkZXJzLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm9yZGVycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgaGVpZ2h0OiAxMDBkdmg7XFxufVxcbi5vcmRlcnMtY29udGFpbmVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbi5vcmRlcnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcXG4gICNsb2dvLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG4gIC5vcmRlcnMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5vcmRlcnMtY29udGFpbmVyIGltZyB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTG9nbyBmcm9tIFwiLi9pbWcvbG9nby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRDb21wb25lbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgY29uc3QgbG9nb0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgcGFyYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHBhcmFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250YWluZXJcIik7XG4gIHBhcmExLnRleHRDb250ZW50ID0gXCJHUyBQw6Nlc8KpXCI7XG4gIHBhcmEyLnRleHRDb250ZW50ID0gXCJUcmF6ZW5kbyBzYWJvciBwYXJhIG8gc2V1IGNhZsOpIGRhIG1hbmjDo1wiO1xuICBwYXJhMy50ZXh0Q29udGVudCA9XG4gICAgXCJQw6NlcyBhcnRlc2FuYWlzLCBmZWl0b3Mgc2VtIGNvbnNlcnZhbnRlcywgY29tIHByb2R1dG9zIGRlIHF1YWxpZGFkZSBwcmV6YW5kbyBvIHNhYm9yLlwiO1xuICBsb2dvSW1hZ2Uuc3JjID0gTG9nbztcbiAgbG9nb0ltYWdlLmlkID0gXCJsb2dvLWltYWdlXCI7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTEpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEyKTtcbiAgLy8gcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMyk7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFDb250YWluZXIpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcbiAgcmV0dXJuIG1haW5Db250ZW50O1xufVxuIiwiaW1wb3J0IE1lbnVPcHRpb24xIGZyb20gXCIuL2ltZy9vcHRpb24xLnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb24xX2FsdCBmcm9tIFwiLi9pbWcvb3B0aW9uMS1hbHQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjIgZnJvbSBcIi4vaW1nL29wdGlvbjIucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjJfYWx0IGZyb20gXCIuL2ltZy9vcHRpb24yLWFsdC5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uMyBmcm9tIFwiLi9pbWcvb3B0aW9uMy5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uM19hbHQgZnJvbSBcIi4vaW1nL29wdGlvbjMtYWx0LnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb240IGZyb20gXCIuL2ltZy9vcHRpb240LnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb240X2FsdCBmcm9tIFwiLi9pbWcvb3B0aW9uNC1hbHQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjUgZnJvbSBcIi4vaW1nL29wdGlvbjUucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjVfYWx0IGZyb20gXCIuL2ltZy9vcHRpb241LWFsdC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuICBwb3B1bGF0ZU1lbnUobWFpbkNvbnRlbnQsIDUpO1xuICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWVudShtYWluQ29udGVudCwgaXRlbUFtb3VudCkge1xuICBjb25zdCBvcHRpb24gPSBbXTtcbiAgY29uc3Qgb3B0aW9uQWx0ID0gW107XG4gIGNvbnN0IG9wdGlvblNyYyA9IFtcbiAgICBNZW51T3B0aW9uMSxcbiAgICBNZW51T3B0aW9uMixcbiAgICBNZW51T3B0aW9uMyxcbiAgICBNZW51T3B0aW9uNCxcbiAgICBNZW51T3B0aW9uNSxcbiAgXTtcbiAgY29uc3Qgb3B0aW9uU3JjQWx0ID0gW1xuICAgIE1lbnVPcHRpb24xX2FsdCxcbiAgICBNZW51T3B0aW9uMl9hbHQsXG4gICAgTWVudU9wdGlvbjNfYWx0LFxuICAgIE1lbnVPcHRpb240X2FsdCxcbiAgICBNZW51T3B0aW9uNV9hbHQsXG4gIF07XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFibGUtY29udGFpbmVyXCIpO1xuICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYWJsZSg3KSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVDb250YWluZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbUFtb3VudDsgaSsrKSB7XG4gICAgb3B0aW9uW2ldID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uQWx0W2ldID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uW2ldLnNyYyA9IG9wdGlvblNyY1tpXTtcbiAgICBvcHRpb25BbHRbaV0uc3JjID0gb3B0aW9uU3JjQWx0W2ldO1xuICAgIGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25baV0pO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25BbHRbaV0pO1xuICAgIG9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWNvbnRhaW5lclwiKTtcbiAgICBvcHRpb25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9nc3BhZXMvXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHJvd0Ftb3VudCA9IDUpIHtcbiAgY29uc3QgY3JlYXRlUm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICByZXR1cm4gcm93O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoYW1vdW50LCB0eXBlID0gXCJ0ZFwiKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gY3JlYXRlUm93KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG4gIH07XG5cbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcblxuICBjb25zdCByb3dIZWFkZXIgPSBjcmVhdGVEYXRhKDMsIFwidGhcIik7XG4gIHRoZWFkLmFwcGVuZENoaWxkKHJvd0hlYWRlcik7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0Ftb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gY3JlYXRlRGF0YSgzKTtcbiAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG5cbiAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuXG4gIC8vIFBMQUNFSE9MREVSLCBORUVEIFRPIE1PVkUgVEhJUyBTT01FV0hFUkUgRUxTRVxuICBjb25zdCBoZWFkZXIgPSB0aGVhZC5jaGlsZHJlblswXS5jaGlsZHJlbjtcbiAgaGVhZGVyWzBdLnRleHRDb250ZW50ID0gXCJQw6NvXCI7XG4gIGhlYWRlclsxXS50ZXh0Q29udGVudCA9IFwiTWluaVwiO1xuICBoZWFkZXJbMl0udGV4dENvbnRlbnQgPSBcIkdyYW5kZVwiO1xuXG4gIGNvbnN0IGRhdGEgPSB0Ym9keS5jaGlsZHJlbjtcbiAgZGF0YVswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiQXJ0ZXNhbmFsXCI7XG4gIGRhdGFbMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDQsMDBcIjtcbiAgZGF0YVswXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMjUsMDBcIjtcblxuICBkYXRhWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJDYWxhYnJlc2FcIjtcbiAgZGF0YVsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzFdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbMl0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlBpenphXCI7XG4gIGRhdGFbMl0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDYsMDBcIjtcbiAgZGF0YVsyXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMzAsMDBcIjtcblxuICBkYXRhWzNdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJRdWVpam9cIjtcbiAgZGF0YVszXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzNdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbNF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkZyYW5nbyBDcmVtb3NvXCI7XG4gIGRhdGFbNF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDYsMDBcIjtcbiAgZGF0YVs0XS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMzAsMDBcIjtcblxuICBkYXRhWzVdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJDaG9jb2xhdGVcIjtcbiAgZGF0YVs1XS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzVdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbNl0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkZydXRhc1wiO1xuICBkYXRhWzZdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbNl0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG4gIC8vIEVORCBPRiBQTEFDRUhPTERFUlxuXG4gIHJldHVybiB0YWJsZTtcbn1cbiIsImltcG9ydCBMb2dvIGZyb20gXCIuL2ltZy9sb2dvLWluZm8ucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xuICBjb25zdCBwYXJhID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBwYXJhZ3JhcGg7XG4gIH07XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY3RhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwYXJhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb3JkZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBvcmRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9yZGVycy1jb250YWluZXJcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgY3RhSGVhZGVyLnRleHRDb250ZW50ID0gXCJQZWRpZG9zIHBvZGVtIHNlciBmZWl0b3MgcGVsbyBub3NzbyBpbnN0YWdyYW0hXCI7XG5cbiAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJGYcOnYSBqw6EgbyBzZXUgcGVkaWRvIVwiO1xuICBsb2dvSW1hZ2Uuc3JjID0gTG9nbztcblxuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKGN0YUhlYWRlcik7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYShcIvCfk40gU2FudG8gQW1hcm8gLSBTUFwiKSk7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYShcIvCfjZ4gUMOjZXMgYXJ0ZXNhbmFpcyBwcm9kdXppZG9zIGNvbSBjYXJpbmhvXCIpKTtcbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKFwi8J+TpiBQZWRpZG9zIHNvYiBlbmNvbWVuZGFcIikpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEoXCLwn5WQIEF0ZW5kaW1lbnRvOiAxMGggw6BzIDE5aFwiKSk7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYShcIvCfk54gKDExKSA5Njk1My0yODEyIC8gKDExKSA5NDc1MS03ODk5XCIpKTtcbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b24pO1xuICBvcmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcbiAgb3JkZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFDb250YWluZXIpO1xuICBvcmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXJzQ29udGFpbmVyKTtcblxuICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ3NwYWVzL1wiLCBcIl9ibGFua1wiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1haW5Db250ZW50O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vaW1nL2xvZ28ucG5nXCI7XG5pbXBvcnQgYWJvdXRDb21wb25lbnQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBvcmRlcnNDb21wb25lbnQgZnJvbSBcIi4vb3JkZXJzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbi8vIGFwcGVuZCBoZWFkZXIgdG8gY29udGVudFxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb21wb25lbnQoKSk7XG4vLyBhcHBlbmQgYWJvdXQgdG8gY29udGVudFxuY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29tcG9uZW50KCkpO1xuLy8gYXBwZW5kIGZvb3RlciB0byBjb250ZW50XG5jb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbXBvbmVudCgpKTtcblxuY2hhbmdlQ29udGVudCgpO1xuXG5mdW5jdGlvbiBjaGFuZ2VDb250ZW50KCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gIGNvbnN0IG9yZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JkZXJzXCIpO1xuXG4gIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlKCk7XG4gICAgY29udGVudC5pbnNlcnRCZWZvcmUoYWJvdXRDb21wb25lbnQoKSwgZm9vdGVyKTtcbiAgICBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuICAgIG1haW5Db250ZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xuXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcbiAgICBtYWluQ29udGVudC5yZW1vdmUoKTtcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShtZW51Q29tcG9uZW50KCksIGZvb3Rlcik7XG4gICAgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcbiAgICBtYWluQ29udGVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9KTtcblxuICBvcmRlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcbiAgICBtYWluQ29udGVudC5yZW1vdmUoKTtcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShvcmRlcnNDb21wb25lbnQoKSwgZm9vdGVyKTtcbiAgICBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuICAgIG1haW5Db250ZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJDb21wb25lbnQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgbG9nb0ltYWdlLnNyYyA9IExvZ287XG4gIGxvZ29JbWFnZS5hbHQgPSBcIkdTIFDDo2VzIExvZ29cIjtcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG9yZGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXYuYXBwZW5kQ2hpbGQob3JkZXJzKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9IFwiU29icmUgbsOzc1wiO1xuICBtZW51LnRleHRDb250ZW50ID0gXCJDYXJkw6FwaW9cIjtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgb3JkZXJzLnRleHRDb250ZW50ID0gXCJQZWRpZG9zXCI7XG4gIG9yZGVycy5jbGFzc0xpc3QuYWRkKFwib3JkZXJzXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBmb290ZXJDb21wb25lbnQoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiRm9vdGVyXCI7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==