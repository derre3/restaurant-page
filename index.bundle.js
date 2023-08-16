"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

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
  /* gap: 1rem; */
}
li {
  position: relative;
  list-style-type: none;
  width: 99px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: translate 100ms;
}
li::after {
  content: "";
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0;

  background-color: #000000;
  scale: 0 1;
  transition: scale 500ms;
}
li:hover {
  translate: 0 -3px;
  transition: translate 250ms;
}
.list-active::after {
  content: "";
  scale: 1 1;
  transition: scale 250ms;
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
  gap: 0.5rem;
}

footer img {
  width: 1.5rem;
  height: 1.5rem;
  transition: filter 200ms;
}

footer img:hover {
  cursor: pointer;
  filter: invert(33%);
  transition: filter 200ms;
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
  max-width: 1200px;
}
.menu-container img {
  border-radius: 25px;
  border: solid #6e470014;
  max-width: 350px;
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
  height: 100%;
  width: 80dvw;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 1px;
  text-align: center;
}
.table-container th {
  background-color: #cd981d;
  border-bottom: 3px solid #cd981d;
  padding: 5px;
}
.table-container td {
  border-bottom: 3px solid #cd981d;
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
  gap: 1rem;
}
.orders-container button {
  cursor: pointer;
  font-size: 1.3rem;
  width: 250px;
  border-radius: 10px;
  padding: 1rem;
  border: none;
  color: #4e3805;
  background-color: #f5deb3;
  border: solid #4e38051d;
}
.orders-container p {
  background: linear-gradient(90deg, #4e380520 60%, #00000000 100%);
  border-radius: 10px;
  padding: 5px;
  font-weight: 600;
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
  .menu-container img {
    border-radius: 25px;
    border: solid #6e470014;
    max-width: 300px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,cAAc;EACd,wEAAwE;AAC1E;;AAEA;EACE,6BAA6B;EAC7B;;;;GAIC;AACH;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA,YAAY;AACZ;EACE,2CAA2C;EAC3C,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,yBAAyB;EACzB,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,sCAAsC;EACtC,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,cAAc;EACd,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA,cAAc;AACd;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;;AAEA,aAAa;AACb;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA,mBAAmB;AACnB;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,gCAAgC;EAChC,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,YAAY;AACd;;AAEA,eAAe;AACf;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,uBAAuB;AACzB;AACA;EACE,iEAAiE;EACjE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,sBAAsB;EACxB;EACA;IACE,aAAa;EACf;EACA;IACE,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;EAClB;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: #4e3805;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n#content {\n  background: rgb(211, 181, 29);\n  background: radial-gradient(\n    circle,\n    rgba(211, 181, 29, 1) 0%,\n    rgba(205, 152, 29, 1) 100%\n  );\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n\n/* header  */\nheader {\n  background-color: rgba(182, 127, 33, 0.163);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  padding-top: 30px;\n}\n.logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.logo img {\n  height: 120px;\n  border-radius: 50%;\n}\nnav {\n  display: flex;\n  /* gap: 1rem; */\n}\nli {\n  position: relative;\n  list-style-type: none;\n  width: 99px;\n  height: 33px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: translate 100ms;\n}\nli::after {\n  content: \"\";\n  height: 3px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n\n  background-color: #000000;\n  scale: 0 1;\n  transition: scale 500ms;\n}\nli:hover {\n  translate: 0 -3px;\n  transition: translate 250ms;\n}\n.list-active::after {\n  content: \"\";\n  scale: 1 1;\n  transition: scale 250ms;\n}\nli:hover {\n  cursor: pointer;\n}\n\n/* footer */\nfooter {\n  background-color: rgba(0, 0, 0, 0.111);\n  color: black;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nfooter img {\n  width: 1.5rem;\n  height: 1.5rem;\n  transition: filter 200ms;\n}\n\nfooter img:hover {\n  cursor: pointer;\n  filter: invert(33%);\n  transition: filter 200ms;\n}\n\n/* about tab */\n.about-container {\n  height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n  padding: 2rem;\n  text-align: center;\n}\n.about-container p {\n  width: 100%;\n  font-size: 1.2rem;\n}\n#logo-image {\n  height: 500px;\n  background-color: #cd981d;\n  border-radius: 50%;\n}\n.about-container * {\n  margin-bottom: 0.5rem;\n}\n\n/* menu tab */\n.menu-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 3rem;\n  padding: 1rem;\n  max-width: 1200px;\n}\n.menu-container img {\n  border-radius: 25px;\n  border: solid #6e470014;\n  max-width: 350px;\n}\n.option-container:hover {\n  cursor: pointer;\n}\n.option-container {\n  position: relative;\n}\n.option-container img:nth-child(2) {\n  position: absolute;\n  left: 0;\n  transition: opacity 200ms;\n}\n.option-container img:nth-child(1) {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n.option-container:hover img:nth-child(2) {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n.option-container:hover img:nth-child(1) {\n  opacity: 1;\n  transition: opacity 200ms;\n}\n/* menu tab table */\n.table-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.table-container table {\n  height: 100%;\n  width: 80dvw;\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 1px;\n  text-align: center;\n}\n.table-container th {\n  background-color: #cd981d;\n  border-bottom: 3px solid #cd981d;\n  padding: 5px;\n}\n.table-container td {\n  border-bottom: 3px solid #cd981d;\n  padding: 5px;\n}\n\n/* orders tab */\n.orders-container img {\n  height: 500px;\n  border-radius: 50%;\n}\n.orders-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 1rem;\n  border-radius: 25px;\n  height: 100dvh;\n}\n.orders-container div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n}\n.orders-container button {\n  cursor: pointer;\n  font-size: 1.3rem;\n  width: 250px;\n  border-radius: 10px;\n  padding: 1rem;\n  border: none;\n  color: #4e3805;\n  background-color: #f5deb3;\n  border: solid #4e38051d;\n}\n.orders-container p {\n  background: linear-gradient(90deg, #4e380520 60%, #00000000 100%);\n  border-radius: 10px;\n  padding: 5px;\n  font-weight: 600;\n}\n\n@media (max-width: 850px) {\n  #logo-image {\n    height: 250px;\n  }\n  .orders-container {\n    flex-direction: column;\n  }\n  .orders-container img {\n    height: 250px;\n  }\n  .menu-container img {\n    border-radius: 25px;\n    border: solid #6e470014;\n    max-width: 300px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_github_mark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/github-mark.svg */ "./src/img/github-mark.svg");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders */ "./src/orders.js");







const pageLoad = (() => {
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  // append header to content
  content.appendChild(headerComponent());
  // append about to content
  content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])());
  // append footer to content
  content.appendChild(footerComponent());
  changeContent();
})();

function changeContent() {
  const footer = document.querySelector("footer");
  const navList = document.querySelectorAll("li");
  const content = document.querySelector("#content");

  navList.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      let mainContent = document.querySelector(".main-content");
      // purge mainContent elements on click
      mainContent.remove();
      // gets ID from clicked element and execute function based on it
      if (e.target.id === "about") {
        content.insertBefore((0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])(), footer);
      } else if (e.target.id === "menu") {
        content.insertBefore((0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])(), footer);
      } else content.insertBefore((0,_orders__WEBPACK_IMPORTED_MODULE_5__["default"])(), footer);
      // assign the new value to mainContent so scroll function can target it
      mainContent = document.querySelector(".main-content");
      mainContent.scrollIntoView({ behavior: "smooth" });

      // loops array to remove any active class
      navList.forEach((nav) => {
        nav.classList.remove("list-active");
      });
      // then adds active class to clicked element
      e.target.classList = "list-active";
    });
  });
  // defaults to menu component on function call
  navList[1].click();
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
  about.id = "about";
  menu.id = "menu";
  orders.id = "orders";
  about.textContent = "Sobre nós";
  menu.textContent = "Cardápio";
  orders.textContent = "Pedidos";
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(orders);
  header.appendChild(nav);

  return header;
}

function footerComponent() {
  const footer = document.createElement("footer");
  const text = document.createElement("span");
  const gitHubLogo = new Image();
  text.textContent = "Copyright © derre3";
  gitHubLogo.src = _img_github_mark_svg__WEBPACK_IMPORTED_MODULE_2__;
  footer.appendChild(text);
  footer.appendChild(gitHubLogo);

  gitHubLogo.addEventListener("click", () => {
    window.open("https://github.com/derre3");
  });
  return footer;
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
  // each menu entry has 2 pictures
  // option and optionAlt contains the image html element
  // optionSrc and optionSrcAlt are used to store the images from the source
  // this is done so both the image and the source have the same array position
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

  // creates a menu entry using the arrays described above
  // the index access both arrays and sets the source to the image element
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
    optionContainer.addEventListener("dblclick", () => {
      window.open("https://www.instagram.com/gspaes/", "_blank");
    });
  }
}

function createTable(rowAmount = 5) {
  const createRow = () => {
    const row = document.createElement("tr");
    return row;
  };

  // creates td element by default if not specified
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

  ctaHeader.textContent = "Faça o seu pedido pelo nosso instagram!";

  actionButton.textContent = "Eu quero pãozinho!";
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

/***/ "./src/img/github-mark.svg":
/*!*********************************!*\
  !*** ./src/img/github-mark.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fa18895f6e6c7772cab.svg";

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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVB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ZixJQUFJLDZDQUFXO0FBQ2YsSUFBSSw2Q0FBVztBQUNmO0FBQ0E7QUFDQSxJQUFJLGlEQUFlO0FBQ25CLElBQUksaURBQWU7QUFDbkIsSUFBSSxpREFBZTtBQUNuQixJQUFJLGlEQUFlO0FBQ25CLElBQUksaURBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJdUM7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLCtDQUFJOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvb3JkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzRlMzgwNTtcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAxODEsIDI5KTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGNpcmNsZSxcbiAgICByZ2JhKDIxMSwgMTgxLCAyOSwgMSkgMCUsXG4gICAgcmdiYSgyMDUsIDE1MiwgMjksIDEpIDEwMCVcbiAgKTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4vKiBoZWFkZXIgICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MiwgMTI3LCAzMywgMC4xNjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5sb2dvIGltZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGdhcDogMXJlbTsgKi9cbn1cbmxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdpZHRoOiA5OXB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2xhdGUgMTAwbXM7XG59XG5saTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIHNjYWxlOiAwIDE7XG4gIHRyYW5zaXRpb246IHNjYWxlIDUwMG1zO1xufVxubGk6aG92ZXIge1xuICB0cmFuc2xhdGU6IDAgLTNweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNsYXRlIDI1MG1zO1xufVxuLmxpc3QtYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHNjYWxlOiAxIDE7XG4gIHRyYW5zaXRpb246IHNjYWxlIDI1MG1zO1xufVxubGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGZvb3RlciAqL1xuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjExMSk7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbmZvb3RlciBpbWcge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDIwMG1zO1xufVxuXG5mb290ZXIgaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWx0ZXI6IGludmVydCgzMyUpO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMjAwbXM7XG59XG5cbi8qIGFib3V0IHRhYiAqL1xuLmFib3V0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwZHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQtY29udGFpbmVyIHAge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4jbG9nby1pbWFnZSB7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDk4MWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hYm91dC1jb250YWluZXIgKiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLyogbWVudSB0YWIgKi9cbi5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG4ubWVudS1jb250YWluZXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiBzb2xpZCAjNmU0NzAwMTQ7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG4ub3B0aW9uLWNvbnRhaW5lcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vcHRpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm9wdGlvbi1jb250YWluZXIgaW1nOm50aC1jaGlsZCgyKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cbi5vcHRpb24tY29udGFpbmVyIGltZzpudGgtY2hpbGQoMSkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xufVxuLm9wdGlvbi1jb250YWluZXI6aG92ZXIgaW1nOm50aC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG59XG4ub3B0aW9uLWNvbnRhaW5lcjpob3ZlciBpbWc6bnRoLWNoaWxkKDEpIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cbi8qIG1lbnUgdGFiIHRhYmxlICovXG4udGFibGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhYmxlLWNvbnRhaW5lciB0YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDgwZHZ3O1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFibGUtY29udGFpbmVyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkOTgxZDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNjZDk4MWQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi50YWJsZS1jb250YWluZXIgdGQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NkOTgxZDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4vKiBvcmRlcnMgdGFiICovXG4ub3JkZXJzLWNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ub3JkZXJzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogMTAwZHZoO1xufVxuLm9yZGVycy1jb250YWluZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cbi5vcmRlcnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzRlMzgwNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZGViMztcbiAgYm9yZGVyOiBzb2xpZCAjNGUzODA1MWQ7XG59XG4ub3JkZXJzLWNvbnRhaW5lciBwIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNGUzODA1MjAgNjAlLCAjMDAwMDAwMDAgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICNsb2dvLWltYWdlIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIC5vcmRlcnMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5vcmRlcnMtY29udGFpbmVyIGltZyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuICAubWVudS1jb250YWluZXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogc29saWQgIzZlNDcwMDE0O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0I7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7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IixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjNGUzODA1O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXFxcIiwgXFxcIkFyaWFsIE5hcnJvd1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAxODEsIDI5KTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlLFxcbiAgICByZ2JhKDIxMSwgMTgxLCAyOSwgMSkgMCUsXFxuICAgIHJnYmEoMjA1LCAxNTIsIDI5LCAxKSAxMDAlXFxuICApO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLyogaGVhZGVyICAqL1xcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MiwgMTI3LCAzMywgMC4xNjMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5sb2dvIGltZyB7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGdhcDogMXJlbTsgKi9cXG59XFxubGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2lkdGg6IDk5cHg7XFxuICBoZWlnaHQ6IDMzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNsYXRlIDEwMG1zO1xcbn1cXG5saTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIHNjYWxlOiAwIDE7XFxuICB0cmFuc2l0aW9uOiBzY2FsZSA1MDBtcztcXG59XFxubGk6aG92ZXIge1xcbiAgdHJhbnNsYXRlOiAwIC0zcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2xhdGUgMjUwbXM7XFxufVxcbi5saXN0LWFjdGl2ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBzY2FsZTogMSAxO1xcbiAgdHJhbnNpdGlvbjogc2NhbGUgMjUwbXM7XFxufVxcbmxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMTEpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAyMDBtcztcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCgzMyUpO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDIwMG1zO1xcbn1cXG5cXG4vKiBhYm91dCB0YWIgKi9cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwZHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWJvdXQtY29udGFpbmVyIHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuI2xvZ28taW1hZ2Uge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDk4MWQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5hYm91dC1jb250YWluZXIgKiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIG1lbnUgdGFiICovXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDNyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcbi5tZW51LWNvbnRhaW5lciBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJvcmRlcjogc29saWQgIzZlNDcwMDE0O1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG59XFxuLm9wdGlvbi1jb250YWluZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ub3B0aW9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5vcHRpb24tY29udGFpbmVyIGltZzpudGgtY2hpbGQoMikge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcbi5vcHRpb24tY29udGFpbmVyIGltZzpudGgtY2hpbGQoMSkge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcbi5vcHRpb24tY29udGFpbmVyOmhvdmVyIGltZzpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcbi5vcHRpb24tY29udGFpbmVyOmhvdmVyIGltZzpudGgtY2hpbGQoMSkge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XFxufVxcbi8qIG1lbnUgdGFiIHRhYmxlICovXFxuLnRhYmxlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YWJsZS1jb250YWluZXIgdGFibGUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDgwZHZ3O1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGFibGUtY29udGFpbmVyIHRoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDk4MWQ7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NkOTgxZDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnRhYmxlLWNvbnRhaW5lciB0ZCB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NkOTgxZDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLyogb3JkZXJzIHRhYiAqL1xcbi5vcmRlcnMtY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ub3JkZXJzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBoZWlnaHQ6IDEwMGR2aDtcXG59XFxuLm9yZGVycy1jb250YWluZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbi5vcmRlcnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICM0ZTM4MDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVkZWIzO1xcbiAgYm9yZGVyOiBzb2xpZCAjNGUzODA1MWQ7XFxufVxcbi5vcmRlcnMtY29udGFpbmVyIHAge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNGUzODA1MjAgNjAlLCAjMDAwMDAwMDAgMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAjbG9nby1pbWFnZSB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICB9XFxuICAub3JkZXJzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAub3JkZXJzLWNvbnRhaW5lciBpbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgfVxcbiAgLm1lbnUtY29udGFpbmVyIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogc29saWQgIzZlNDcwMDE0O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExvZ28gZnJvbSBcIi4vaW1nL2xvZ28ucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIGNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHBhcmEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBwYXJhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtY29udGFpbmVyXCIpO1xuICBwYXJhMS50ZXh0Q29udGVudCA9IFwiR1MgUMOjZXPCqVwiO1xuICBwYXJhMi50ZXh0Q29udGVudCA9IFwiVHJhemVuZG8gc2Fib3IgcGFyYSBvIHNldSBjYWbDqSBkYSBtYW5ow6NcIjtcbiAgcGFyYTMudGV4dENvbnRlbnQgPVxuICAgIFwiUMOjZXMgYXJ0ZXNhbmFpcywgZmVpdG9zIHNlbSBjb25zZXJ2YW50ZXMsIGNvbSBwcm9kdXRvcyBkZSBxdWFsaWRhZGUgcHJlemFuZG8gbyBzYWJvci5cIjtcbiAgbG9nb0ltYWdlLnNyYyA9IExvZ287XG4gIGxvZ29JbWFnZS5pZCA9IFwibG9nby1pbWFnZVwiO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmExKTtcbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMik7XG4gIC8vIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTMpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhQ29udGFpbmVyKTtcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTMpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gIHJldHVybiBtYWluQ29udGVudDtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9pbWcvbG9nby5wbmdcIjtcbmltcG9ydCBHaXRMb2dvIGZyb20gXCIuL2ltZy9naXRodWItbWFyay5zdmdcIjtcbmltcG9ydCBhYm91dENvbXBvbmVudCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IG9yZGVyc0NvbXBvbmVudCBmcm9tIFwiLi9vcmRlcnNcIjtcblxuY29uc3QgcGFnZUxvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAvLyBhcHBlbmQgaGVhZGVyIHRvIGNvbnRlbnRcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb21wb25lbnQoKSk7XG4gIC8vIGFwcGVuZCBhYm91dCB0byBjb250ZW50XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb21wb25lbnQoKSk7XG4gIC8vIGFwcGVuZCBmb290ZXIgdG8gY29udGVudFxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbXBvbmVudCgpKTtcbiAgY2hhbmdlQ29udGVudCgpO1xufSkoKTtcblxuZnVuY3Rpb24gY2hhbmdlQ29udGVudCgpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBuYXZMaXN0LmZvckVhY2goKG5hdikgPT4ge1xuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuICAgICAgLy8gcHVyZ2UgbWFpbkNvbnRlbnQgZWxlbWVudHMgb24gY2xpY2tcbiAgICAgIG1haW5Db250ZW50LnJlbW92ZSgpO1xuICAgICAgLy8gZ2V0cyBJRCBmcm9tIGNsaWNrZWQgZWxlbWVudCBhbmQgZXhlY3V0ZSBmdW5jdGlvbiBiYXNlZCBvbiBpdFxuICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImFib3V0XCIpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoYWJvdXRDb21wb25lbnQoKSwgZm9vdGVyKTtcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwibWVudVwiKSB7XG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1lbnVDb21wb25lbnQoKSwgZm9vdGVyKTtcbiAgICAgIH0gZWxzZSBjb250ZW50Lmluc2VydEJlZm9yZShvcmRlcnNDb21wb25lbnQoKSwgZm9vdGVyKTtcbiAgICAgIC8vIGFzc2lnbiB0aGUgbmV3IHZhbHVlIHRvIG1haW5Db250ZW50IHNvIHNjcm9sbCBmdW5jdGlvbiBjYW4gdGFyZ2V0IGl0XG4gICAgICBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuICAgICAgbWFpbkNvbnRlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcblxuICAgICAgLy8gbG9vcHMgYXJyYXkgdG8gcmVtb3ZlIGFueSBhY3RpdmUgY2xhc3NcbiAgICAgIG5hdkxpc3QuZm9yRWFjaCgobmF2KSA9PiB7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdC1hY3RpdmVcIik7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoZW4gYWRkcyBhY3RpdmUgY2xhc3MgdG8gY2xpY2tlZCBlbGVtZW50XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QgPSBcImxpc3QtYWN0aXZlXCI7XG4gICAgfSk7XG4gIH0pO1xuICAvLyBkZWZhdWx0cyB0byBtZW51IGNvbXBvbmVudCBvbiBmdW5jdGlvbiBjYWxsXG4gIG5hdkxpc3RbMV0uY2xpY2soKTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyQ29tcG9uZW50KCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbG9nb0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGxvZ29EaXYuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gIGxvZ29JbWFnZS5zcmMgPSBMb2dvO1xuICBsb2dvSW1hZ2UuYWx0ID0gXCJHUyBQw6NlcyBMb2dvXCI7XG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29EaXYpO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBvcmRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGFib3V0LmlkID0gXCJhYm91dFwiO1xuICBtZW51LmlkID0gXCJtZW51XCI7XG4gIG9yZGVycy5pZCA9IFwib3JkZXJzXCI7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJTb2JyZSBuw7NzXCI7XG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIkNhcmTDoXBpb1wiO1xuICBvcmRlcnMudGV4dENvbnRlbnQgPSBcIlBlZGlkb3NcIjtcbiAgbmF2LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXYuYXBwZW5kQ2hpbGQob3JkZXJzKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gZm9vdGVyQ29tcG9uZW50KCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGdpdEh1YkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIGRlcnJlM1wiO1xuICBnaXRIdWJMb2dvLnNyYyA9IEdpdExvZ287XG4gIGZvb3Rlci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xuXG4gIGdpdEh1YkxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS9kZXJyZTNcIik7XG4gIH0pO1xuICByZXR1cm4gZm9vdGVyO1xufVxuIiwiaW1wb3J0IE1lbnVPcHRpb24xIGZyb20gXCIuL2ltZy9vcHRpb24xLnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb24xX2FsdCBmcm9tIFwiLi9pbWcvb3B0aW9uMS1hbHQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjIgZnJvbSBcIi4vaW1nL29wdGlvbjIucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjJfYWx0IGZyb20gXCIuL2ltZy9vcHRpb24yLWFsdC5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uMyBmcm9tIFwiLi9pbWcvb3B0aW9uMy5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uM19hbHQgZnJvbSBcIi4vaW1nL29wdGlvbjMtYWx0LnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb240IGZyb20gXCIuL2ltZy9vcHRpb240LnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb240X2FsdCBmcm9tIFwiLi9pbWcvb3B0aW9uNC1hbHQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjUgZnJvbSBcIi4vaW1nL29wdGlvbjUucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjVfYWx0IGZyb20gXCIuL2ltZy9vcHRpb241LWFsdC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuICBwb3B1bGF0ZU1lbnUobWFpbkNvbnRlbnQsIDUpO1xuICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWVudShtYWluQ29udGVudCwgaXRlbUFtb3VudCkge1xuICAvLyBlYWNoIG1lbnUgZW50cnkgaGFzIDIgcGljdHVyZXNcbiAgLy8gb3B0aW9uIGFuZCBvcHRpb25BbHQgY29udGFpbnMgdGhlIGltYWdlIGh0bWwgZWxlbWVudFxuICAvLyBvcHRpb25TcmMgYW5kIG9wdGlvblNyY0FsdCBhcmUgdXNlZCB0byBzdG9yZSB0aGUgaW1hZ2VzIGZyb20gdGhlIHNvdXJjZVxuICAvLyB0aGlzIGlzIGRvbmUgc28gYm90aCB0aGUgaW1hZ2UgYW5kIHRoZSBzb3VyY2UgaGF2ZSB0aGUgc2FtZSBhcnJheSBwb3NpdGlvblxuICBjb25zdCBvcHRpb24gPSBbXTtcbiAgY29uc3Qgb3B0aW9uQWx0ID0gW107XG4gIGNvbnN0IG9wdGlvblNyYyA9IFtcbiAgICBNZW51T3B0aW9uMSxcbiAgICBNZW51T3B0aW9uMixcbiAgICBNZW51T3B0aW9uMyxcbiAgICBNZW51T3B0aW9uNCxcbiAgICBNZW51T3B0aW9uNSxcbiAgXTtcbiAgY29uc3Qgb3B0aW9uU3JjQWx0ID0gW1xuICAgIE1lbnVPcHRpb24xX2FsdCxcbiAgICBNZW51T3B0aW9uMl9hbHQsXG4gICAgTWVudU9wdGlvbjNfYWx0LFxuICAgIE1lbnVPcHRpb240X2FsdCxcbiAgICBNZW51T3B0aW9uNV9hbHQsXG4gIF07XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFibGUtY29udGFpbmVyXCIpO1xuICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYWJsZSg3KSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVDb250YWluZXIpO1xuXG4gIC8vIGNyZWF0ZXMgYSBtZW51IGVudHJ5IHVzaW5nIHRoZSBhcnJheXMgZGVzY3JpYmVkIGFib3ZlXG4gIC8vIHRoZSBpbmRleCBhY2Nlc3MgYm90aCBhcnJheXMgYW5kIHNldHMgdGhlIHNvdXJjZSB0byB0aGUgaW1hZ2UgZWxlbWVudFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1BbW91bnQ7IGkrKykge1xuICAgIG9wdGlvbltpXSA9IG5ldyBJbWFnZSgpO1xuICAgIG9wdGlvbkFsdFtpXSA9IG5ldyBJbWFnZSgpO1xuICAgIG9wdGlvbltpXS5zcmMgPSBvcHRpb25TcmNbaV07XG4gICAgb3B0aW9uQWx0W2ldLnNyYyA9IG9wdGlvblNyY0FsdFtpXTtcbiAgICBjb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uQ29udGFpbmVyKTtcbiAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uW2ldKTtcbiAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uQWx0W2ldKTtcbiAgICBvcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1jb250YWluZXJcIik7XG4gICAgb3B0aW9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZ3NwYWVzL1wiLCBcIl9ibGFua1wiKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZShyb3dBbW91bnQgPSA1KSB7XG4gIGNvbnN0IGNyZWF0ZVJvdyA9ICgpID0+IHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgcmV0dXJuIHJvdztcbiAgfTtcblxuICAvLyBjcmVhdGVzIHRkIGVsZW1lbnQgYnkgZGVmYXVsdCBpZiBub3Qgc3BlY2lmaWVkXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoYW1vdW50LCB0eXBlID0gXCJ0ZFwiKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gY3JlYXRlUm93KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG4gIH07XG5cbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcblxuICBjb25zdCByb3dIZWFkZXIgPSBjcmVhdGVEYXRhKDMsIFwidGhcIik7XG4gIHRoZWFkLmFwcGVuZENoaWxkKHJvd0hlYWRlcik7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0Ftb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gY3JlYXRlRGF0YSgzKTtcbiAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG5cbiAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuXG4gIC8vIFBMQUNFSE9MREVSLCBORUVEIFRPIE1PVkUgVEhJUyBTT01FV0hFUkUgRUxTRVxuICBjb25zdCBoZWFkZXIgPSB0aGVhZC5jaGlsZHJlblswXS5jaGlsZHJlbjtcbiAgaGVhZGVyWzBdLnRleHRDb250ZW50ID0gXCJQw6NvXCI7XG4gIGhlYWRlclsxXS50ZXh0Q29udGVudCA9IFwiTWluaVwiO1xuICBoZWFkZXJbMl0udGV4dENvbnRlbnQgPSBcIkdyYW5kZVwiO1xuXG4gIGNvbnN0IGRhdGEgPSB0Ym9keS5jaGlsZHJlbjtcbiAgZGF0YVswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiQXJ0ZXNhbmFsXCI7XG4gIGRhdGFbMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDQsMDBcIjtcbiAgZGF0YVswXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMjUsMDBcIjtcblxuICBkYXRhWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJDYWxhYnJlc2FcIjtcbiAgZGF0YVsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzFdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbMl0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlBpenphXCI7XG4gIGRhdGFbMl0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDYsMDBcIjtcbiAgZGF0YVsyXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMzAsMDBcIjtcblxuICBkYXRhWzNdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJRdWVpam9cIjtcbiAgZGF0YVszXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzNdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbNF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkZyYW5nbyBDcmVtb3NvXCI7XG4gIGRhdGFbNF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDYsMDBcIjtcbiAgZGF0YVs0XS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMzAsMDBcIjtcblxuICBkYXRhWzVdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJDaG9jb2xhdGVcIjtcbiAgZGF0YVs1XS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzVdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbNl0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkZydXRhc1wiO1xuICBkYXRhWzZdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbNl0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG4gIC8vIEVORCBPRiBQTEFDRUhPTERFUlxuXG4gIHJldHVybiB0YWJsZTtcbn1cbiIsImltcG9ydCBMb2dvIGZyb20gXCIuL2ltZy9sb2dvLWluZm8ucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xuICBjb25zdCBwYXJhID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBwYXJhZ3JhcGg7XG4gIH07XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY3RhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwYXJhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb3JkZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBvcmRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9yZGVycy1jb250YWluZXJcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgY3RhSGVhZGVyLnRleHRDb250ZW50ID0gXCJGYcOnYSBvIHNldSBwZWRpZG8gcGVsbyBub3NzbyBpbnN0YWdyYW0hXCI7XG5cbiAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJFdSBxdWVybyBww6NvemluaG8hXCI7XG4gIGxvZ29JbWFnZS5zcmMgPSBMb2dvO1xuXG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3RhSGVhZGVyKTtcbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKFwi8J+TjSBTYW50byBBbWFybyAtIFNQXCIpKTtcbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKFwi8J+NniBQw6NlcyBhcnRlc2FuYWlzIHByb2R1emlkb3MgY29tIGNhcmluaG9cIikpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEoXCLwn5OmIFBlZGlkb3Mgc29iIGVuY29tZW5kYVwiKSk7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYShcIvCflZAgQXRlbmRpbWVudG86IDEwaCDDoHMgMTloXCIpKTtcbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKFwi8J+TniAoMTEpIDk2OTUzLTI4MTIgLyAoMTEpIDk0NzUxLTc4OTlcIikpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbik7XG4gIG9yZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICBvcmRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYUNvbnRhaW5lcik7XG4gIG9yZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvcmRlcnNDb250YWluZXIpO1xuXG4gIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9nc3BhZXMvXCIsIFwiX2JsYW5rXCIpO1xuICB9KTtcblxuICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=