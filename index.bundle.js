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
  .menu-container img {
    border-radius: 25px;
    border: solid #6e470014;
    max-width: 300px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,cAAc;EACd,wEAAwE;AAC1E;;AAEA;EACE,6BAA6B;EAC7B;;;;GAIC;AACH;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA,YAAY;AACZ;EACE,2CAA2C;EAC3C,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,yBAAyB;EACzB,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,UAAU;EACV,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,sCAAsC;EACtC,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,cAAc;EACd,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA,cAAc;AACd;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;;AAEA,aAAa;AACb;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA,mBAAmB;AACnB;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,gCAAgC;EAChC,YAAY;AACd;AACA;EACE,gCAAgC;EAChC,YAAY;AACd;;AAEA,eAAe;AACf;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,sBAAsB;EACxB;EACA;IACE,aAAa;EACf;EACA;IACE,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;EAClB;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: #4e3805;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n#content {\n  background: rgb(211, 181, 29);\n  background: radial-gradient(\n    circle,\n    rgba(211, 181, 29, 1) 0%,\n    rgba(205, 152, 29, 1) 100%\n  );\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n\n/* header  */\nheader {\n  background-color: rgba(182, 127, 33, 0.163);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  padding-top: 30px;\n}\n.logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.logo img {\n  height: 120px;\n  border-radius: 50%;\n}\nnav {\n  display: flex;\n  /* gap: 1rem; */\n}\nli {\n  position: relative;\n  list-style-type: none;\n  width: 99px;\n  height: 33px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: translate 100ms;\n}\nli::after {\n  content: \"\";\n  height: 3px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n\n  background-color: #000000;\n  scale: 0 1;\n  transition: scale 500ms;\n}\nli:hover {\n  translate: 0 -3px;\n  transition: translate 250ms;\n}\n.list-active::after {\n  content: \"\";\n  scale: 1 1;\n  transition: scale 250ms;\n}\nli:hover {\n  cursor: pointer;\n}\n\n/* footer */\nfooter {\n  background-color: rgba(0, 0, 0, 0.111);\n  color: black;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nfooter img {\n  width: 1.5rem;\n  height: 1.5rem;\n  transition: filter 200ms;\n}\n\nfooter img:hover {\n  cursor: pointer;\n  filter: invert(33%);\n  transition: filter 200ms;\n}\n\n/* about tab */\n.about-container {\n  height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n  padding: 2rem;\n  text-align: center;\n}\n.about-container p {\n  width: 100%;\n  font-size: 1.2rem;\n}\n#logo-image {\n  height: 500px;\n  background-color: #cd981d;\n  border-radius: 50%;\n}\n.about-container * {\n  margin-bottom: 0.5rem;\n}\n\n/* menu tab */\n.menu-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 3rem;\n  padding: 1rem;\n  max-width: 1200px;\n}\n.menu-container img {\n  border-radius: 25px;\n  border: solid #6e470014;\n  max-width: 350px;\n}\n.option-container:hover {\n  cursor: pointer;\n}\n.option-container {\n  position: relative;\n}\n.option-container img:nth-child(2) {\n  position: absolute;\n  left: 0;\n  transition: opacity 200ms;\n}\n.option-container img:nth-child(1) {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n.option-container:hover img:nth-child(2) {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n.option-container:hover img:nth-child(1) {\n  opacity: 1;\n  transition: opacity 200ms;\n}\n/* menu tab table */\n.table-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.table-container table {\n  height: 100%;\n  width: 80dvw;\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 1px;\n  text-align: center;\n}\n.table-container th {\n  background-color: #cd981d;\n  border-bottom: 3px solid #cd981d;\n  padding: 5px;\n}\n.table-container td {\n  border-bottom: 3px solid #cd981d;\n  padding: 5px;\n}\n\n/* orders tab */\n.orders-container img {\n  height: 500px;\n  border-radius: 50%;\n}\n.orders-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding: 1rem;\n  border-radius: 25px;\n  height: 100dvh;\n}\n.orders-container div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1.5rem;\n}\n.orders-container button {\n  cursor: pointer;\n  font-size: 1.3rem;\n  width: 250px;\n  border-radius: 10px;\n  padding: 1rem;\n  border: none;\n  color: #000000;\n  background-color: #ffffff;\n}\n\n@media (max-width: 850px) {\n  #logo-image {\n    height: 250px;\n  }\n  .orders-container {\n    flex-direction: column;\n  }\n  .orders-container img {\n    height: 250px;\n  }\n  .menu-container img {\n    border-radius: 25px;\n    border: solid #6e470014;\n    max-width: 300px;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVB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SSxpREFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEl1Qzs7QUFFeEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsK0NBQUk7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9vcmRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjNGUzODA1O1xuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4jY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYigyMTEsIDE4MSwgMjkpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgY2lyY2xlLFxuICAgIHJnYmEoMjExLCAxODEsIDI5LCAxKSAwJSxcbiAgICByZ2JhKDIwNSwgMTUyLCAyOSwgMSkgMTAwJVxuICApO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi8qIGhlYWRlciAgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAxMjcsIDMzLCAwLjE2Myk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogZ2FwOiAxcmVtOyAqL1xufVxubGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgd2lkdGg6IDk5cHg7XG4gIGhlaWdodDogMzNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zbGF0ZSAxMDBtcztcbn1cbmxpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgc2NhbGU6IDAgMTtcbiAgdHJhbnNpdGlvbjogc2NhbGUgNTAwbXM7XG59XG5saTpob3ZlciB7XG4gIHRyYW5zbGF0ZTogMCAtM3B4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2xhdGUgMjUwbXM7XG59XG4ubGlzdC1hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgc2NhbGU6IDEgMTtcbiAgdHJhbnNpdGlvbjogc2NhbGUgMjUwbXM7XG59XG5saTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogZm9vdGVyICovXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTExKTtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuZm9vdGVyIGltZyB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMjAwbXM7XG59XG5cbmZvb3RlciBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbHRlcjogaW52ZXJ0KDMzJSk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAyMDBtcztcbn1cblxuLyogYWJvdXQgdGFiICovXG4uYWJvdXQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDBkdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC1jb250YWluZXIgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiNsb2dvLWltYWdlIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkOTgxZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmFib3V0LWNvbnRhaW5lciAqIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4vKiBtZW51IHRhYiAqL1xuLm1lbnUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cbi5tZW51LWNvbnRhaW5lciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IHNvbGlkICM2ZTQ3MDAxNDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cbi5vcHRpb24tY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9wdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3B0aW9uLWNvbnRhaW5lciBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xufVxuLm9wdGlvbi1jb250YWluZXIgaW1nOm50aC1jaGlsZCgxKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG59XG4ub3B0aW9uLWNvbnRhaW5lcjpob3ZlciBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cbi5vcHRpb24tY29udGFpbmVyOmhvdmVyIGltZzpudGgtY2hpbGQoMSkge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xufVxuLyogbWVudSB0YWIgdGFibGUgKi9cbi50YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFibGUtY29udGFpbmVyIHRhYmxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODBkdnc7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YWJsZS1jb250YWluZXIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q5ODFkO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NkOTgxZDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjY2Q5ODFkO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qIG9yZGVycyB0YWIgKi9cbi5vcmRlcnMtY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5vcmRlcnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAxMDBkdmg7XG59XG4ub3JkZXJzLWNvbnRhaW5lciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG59XG4ub3JkZXJzLWNvbnRhaW5lciBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAjbG9nby1pbWFnZSB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuICAub3JkZXJzLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAub3JkZXJzLWNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgLm1lbnUtY29udGFpbmVyIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IHNvbGlkICM2ZTQ3MDAxNDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCOzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7O0VBRVQseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLFdBQVc7QUFDWDtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0EsbUJBQW1CO0FBQ25CO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzRlMzgwNTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVxcXCIsIFxcXCJBcmlhbCBOYXJyb3dcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogcmdiKDIxMSwgMTgxLCAyOSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNpcmNsZSxcXG4gICAgcmdiYSgyMTEsIDE4MSwgMjksIDEpIDAlLFxcbiAgICByZ2JhKDIwNSwgMTUyLCAyOSwgMSkgMTAwJVxcbiAgKTtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi8qIGhlYWRlciAgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODIsIDEyNywgMzMsIDAuMTYzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ubG9nbyBpbWcge1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBnYXA6IDFyZW07ICovXFxufVxcbmxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHdpZHRoOiA5OXB4O1xcbiAgaGVpZ2h0OiAzM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zbGF0ZSAxMDBtcztcXG59XFxubGk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBzY2FsZTogMCAxO1xcbiAgdHJhbnNpdGlvbjogc2NhbGUgNTAwbXM7XFxufVxcbmxpOmhvdmVyIHtcXG4gIHRyYW5zbGF0ZTogMCAtM3B4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNsYXRlIDI1MG1zO1xcbn1cXG4ubGlzdC1hY3RpdmU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgc2NhbGU6IDEgMTtcXG4gIHRyYW5zaXRpb246IHNjYWxlIDI1MG1zO1xcbn1cXG5saTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTExKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMjAwbXM7XFxufVxcblxcbmZvb3RlciBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoMzMlKTtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAyMDBtcztcXG59XFxuXFxuLyogYWJvdXQgdGFiICovXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMGR2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFib3V0LWNvbnRhaW5lciBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbiNsb2dvLWltYWdlIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q5ODFkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uYWJvdXQtY29udGFpbmVyICoge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4vKiBtZW51IHRhYiAqL1xcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAzcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG4ubWVudS1jb250YWluZXIgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBib3JkZXI6IHNvbGlkICM2ZTQ3MDAxNDtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxufVxcbi5vcHRpb24tY29udGFpbmVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm9wdGlvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ub3B0aW9uLWNvbnRhaW5lciBpbWc6bnRoLWNoaWxkKDIpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xcbn1cXG4ub3B0aW9uLWNvbnRhaW5lciBpbWc6bnRoLWNoaWxkKDEpIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xcbn1cXG4ub3B0aW9uLWNvbnRhaW5lcjpob3ZlciBpbWc6bnRoLWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xcbn1cXG4ub3B0aW9uLWNvbnRhaW5lcjpob3ZlciBpbWc6bnRoLWNoaWxkKDEpIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xcbn1cXG4vKiBtZW51IHRhYiB0YWJsZSAqL1xcbi50YWJsZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFibGUtY29udGFpbmVyIHRhYmxlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA4MGR2dztcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRhYmxlLWNvbnRhaW5lciB0aCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Q5ODFkO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNjZDk4MWQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi50YWJsZS1jb250YWluZXIgdGQge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNjZDk4MWQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi8qIG9yZGVycyB0YWIgKi9cXG4ub3JkZXJzLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm9yZGVycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgaGVpZ2h0OiAxMDBkdmg7XFxufVxcbi5vcmRlcnMtY29udGFpbmVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbi5vcmRlcnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcXG4gICNsb2dvLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG4gIC5vcmRlcnMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5vcmRlcnMtY29udGFpbmVyIGltZyB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICB9XFxuICAubWVudS1jb250YWluZXIgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjNmU0NzAwMTQ7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTG9nbyBmcm9tIFwiLi9pbWcvbG9nby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRDb21wb25lbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgY29uc3QgbG9nb0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgcGFyYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHBhcmFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250YWluZXJcIik7XG4gIHBhcmExLnRleHRDb250ZW50ID0gXCJHUyBQw6Nlc8KpXCI7XG4gIHBhcmEyLnRleHRDb250ZW50ID0gXCJUcmF6ZW5kbyBzYWJvciBwYXJhIG8gc2V1IGNhZsOpIGRhIG1hbmjDo1wiO1xuICBwYXJhMy50ZXh0Q29udGVudCA9XG4gICAgXCJQw6NlcyBhcnRlc2FuYWlzLCBmZWl0b3Mgc2VtIGNvbnNlcnZhbnRlcywgY29tIHByb2R1dG9zIGRlIHF1YWxpZGFkZSBwcmV6YW5kbyBvIHNhYm9yLlwiO1xuICBsb2dvSW1hZ2Uuc3JjID0gTG9nbztcbiAgbG9nb0ltYWdlLmlkID0gXCJsb2dvLWltYWdlXCI7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTEpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEyKTtcbiAgLy8gcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMyk7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFDb250YWluZXIpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcbiAgcmV0dXJuIG1haW5Db250ZW50O1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2ltZy9sb2dvLnBuZ1wiO1xuaW1wb3J0IEdpdExvZ28gZnJvbSBcIi4vaW1nL2dpdGh1Yi1tYXJrLnN2Z1wiO1xuaW1wb3J0IGFib3V0Q29tcG9uZW50IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgb3JkZXJzQ29tcG9uZW50IGZyb20gXCIuL29yZGVyc1wiO1xuXG5jb25zdCBwYWdlTG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIC8vIGFwcGVuZCBoZWFkZXIgdG8gY29udGVudFxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbXBvbmVudCgpKTtcbiAgLy8gYXBwZW5kIGFib3V0IHRvIGNvbnRlbnRcbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbXBvbmVudCgpKTtcbiAgLy8gYXBwZW5kIGZvb3RlciB0byBjb250ZW50XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyQ29tcG9uZW50KCkpO1xuICBjaGFuZ2VDb250ZW50KCk7XG59KSgpO1xuXG5mdW5jdGlvbiBjaGFuZ2VDb250ZW50KCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIG5hdkxpc3QuZm9yRWFjaCgobmF2KSA9PiB7XG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG4gICAgICAvLyBwdXJnZSBtYWluQ29udGVudCBlbGVtZW50cyBvbiBjbGlja1xuICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlKCk7XG4gICAgICAvLyBnZXRzIElEIGZyb20gY2xpY2tlZCBlbGVtZW50IGFuZCBleGVjdXRlIGZ1bmN0aW9uIGJhc2VkIG9uIGl0XG4gICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiYWJvdXRcIikge1xuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShhYm91dENvbXBvbmVudCgpLCBmb290ZXIpO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJtZW51XCIpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobWVudUNvbXBvbmVudCgpLCBmb290ZXIpO1xuICAgICAgfSBlbHNlIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG9yZGVyc0NvbXBvbmVudCgpLCBmb290ZXIpO1xuICAgICAgLy8gYXNzaWduIHRoZSBuZXcgdmFsdWUgdG8gbWFpbkNvbnRlbnQgc28gc2Nyb2xsIGZ1bmN0aW9uIGNhbiB0YXJnZXQgaXRcbiAgICAgIG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG4gICAgICBtYWluQ29udGVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuXG4gICAgICAvLyBsb29wcyBhcnJheSB0byByZW1vdmUgYW55IGFjdGl2ZSBjbGFzc1xuICAgICAgbmF2TGlzdC5mb3JFYWNoKChuYXYpID0+IHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0LWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgICAgLy8gdGhlbiBhZGRzIGFjdGl2ZSBjbGFzcyB0byBjbGlja2VkIGVsZW1lbnRcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdCA9IFwibGlzdC1hY3RpdmVcIjtcbiAgICB9KTtcbiAgfSk7XG4gIC8vIGRlZmF1bHRzIHRvIG1lbnUgY29tcG9uZW50IG9uIGZ1bmN0aW9uIGNhbGxcbiAgbmF2TGlzdFsxXS5jbGljaygpO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJDb21wb25lbnQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgbG9nb0ltYWdlLnNyYyA9IExvZ287XG4gIGxvZ29JbWFnZS5hbHQgPSBcIkdTIFDDo2VzIExvZ29cIjtcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG9yZGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgYWJvdXQuaWQgPSBcImFib3V0XCI7XG4gIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgb3JkZXJzLmlkID0gXCJvcmRlcnNcIjtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIlNvYnJlIG7Ds3NcIjtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiQ2FyZMOhcGlvXCI7XG4gIG9yZGVycy50ZXh0Q29udGVudCA9IFwiUGVkaWRvc1wiO1xuICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XG4gIG5hdi5hcHBlbmRDaGlsZChvcmRlcnMpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBmb290ZXJDb21wb25lbnQoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgZ2l0SHViTG9nbyA9IG5ldyBJbWFnZSgpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgZGVycmUzXCI7XG4gIGdpdEh1YkxvZ28uc3JjID0gR2l0TG9nbztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViTG9nbyk7XG5cbiAgZ2l0SHViTG9nby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL2RlcnJlM1wiKTtcbiAgfSk7XG4gIHJldHVybiBmb290ZXI7XG59XG4iLCJpbXBvcnQgTWVudU9wdGlvbjEgZnJvbSBcIi4vaW1nL29wdGlvbjEucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjFfYWx0IGZyb20gXCIuL2ltZy9vcHRpb24xLWFsdC5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uMiBmcm9tIFwiLi9pbWcvb3B0aW9uMi5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uMl9hbHQgZnJvbSBcIi4vaW1nL29wdGlvbjItYWx0LnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb24zIGZyb20gXCIuL2ltZy9vcHRpb24zLnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb24zX2FsdCBmcm9tIFwiLi9pbWcvb3B0aW9uMy1hbHQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjQgZnJvbSBcIi4vaW1nL29wdGlvbjQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjRfYWx0IGZyb20gXCIuL2ltZy9vcHRpb240LWFsdC5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uNSBmcm9tIFwiLi9pbWcvb3B0aW9uNS5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uNV9hbHQgZnJvbSBcIi4vaW1nL29wdGlvbjUtYWx0LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q29tcG9uZW50KCkge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIHBvcHVsYXRlTWVudShtYWluQ29udGVudCwgNSk7XG4gIHJldHVybiBtYWluQ29udGVudDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVNZW51KG1haW5Db250ZW50LCBpdGVtQW1vdW50KSB7XG4gIC8vIGVhY2ggbWVudSBlbnRyeSBoYXMgMiBwaWN0dXJlc1xuICAvLyBvcHRpb24gYW5kIG9wdGlvbkFsdCBjb250YWlucyB0aGUgaW1hZ2UgaHRtbCBlbGVtZW50XG4gIC8vIG9wdGlvblNyYyBhbmQgb3B0aW9uU3JjQWx0IGFyZSB1c2VkIHRvIHN0b3JlIHRoZSBpbWFnZXMgZnJvbSB0aGUgc291cmNlXG4gIC8vIHRoaXMgaXMgZG9uZSBzbyBib3RoIHRoZSBpbWFnZSBhbmQgdGhlIHNvdXJjZSBoYXZlIHRoZSBzYW1lIGFycmF5IHBvc2l0aW9uXG4gIGNvbnN0IG9wdGlvbiA9IFtdO1xuICBjb25zdCBvcHRpb25BbHQgPSBbXTtcbiAgY29uc3Qgb3B0aW9uU3JjID0gW1xuICAgIE1lbnVPcHRpb24xLFxuICAgIE1lbnVPcHRpb24yLFxuICAgIE1lbnVPcHRpb24zLFxuICAgIE1lbnVPcHRpb240LFxuICAgIE1lbnVPcHRpb241LFxuICBdO1xuICBjb25zdCBvcHRpb25TcmNBbHQgPSBbXG4gICAgTWVudU9wdGlvbjFfYWx0LFxuICAgIE1lbnVPcHRpb24yX2FsdCxcbiAgICBNZW51T3B0aW9uM19hbHQsXG4gICAgTWVudU9wdGlvbjRfYWx0LFxuICAgIE1lbnVPcHRpb241X2FsdCxcbiAgXTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZS1jb250YWluZXJcIik7XG4gIHRhYmxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhYmxlKDcpKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZUNvbnRhaW5lcik7XG5cbiAgLy8gY3JlYXRlcyBhIG1lbnUgZW50cnkgdXNpbmcgdGhlIGFycmF5cyBkZXNjcmliZWQgYWJvdmVcbiAgLy8gdGhlIGluZGV4IGFjY2VzcyBib3RoIGFycmF5cyBhbmQgc2V0cyB0aGUgc291cmNlIHRvIHRoZSBpbWFnZSBlbGVtZW50XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbUFtb3VudDsgaSsrKSB7XG4gICAgb3B0aW9uW2ldID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uQWx0W2ldID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uW2ldLnNyYyA9IG9wdGlvblNyY1tpXTtcbiAgICBvcHRpb25BbHRbaV0uc3JjID0gb3B0aW9uU3JjQWx0W2ldO1xuICAgIGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25baV0pO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25BbHRbaV0pO1xuICAgIG9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWNvbnRhaW5lclwiKTtcbiAgICBvcHRpb25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9nc3BhZXMvXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHJvd0Ftb3VudCA9IDUpIHtcbiAgY29uc3QgY3JlYXRlUm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICByZXR1cm4gcm93O1xuICB9O1xuXG4gIC8vIGNyZWF0ZXMgdGQgZWxlbWVudCBieSBkZWZhdWx0IGlmIG5vdCBzcGVjaWZpZWRcbiAgY29uc3QgY3JlYXRlRGF0YSA9IChhbW91bnQsIHR5cGUgPSBcInRkXCIpID0+IHtcbiAgICBjb25zdCByb3cgPSBjcmVhdGVSb3coKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdztcbiAgfTtcblxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuXG4gIGNvbnN0IHJvd0hlYWRlciA9IGNyZWF0ZURhdGEoMywgXCJ0aFwiKTtcbiAgdGhlYWQuYXBwZW5kQ2hpbGQocm93SGVhZGVyKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93QW1vdW50OyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBjcmVhdGVEYXRhKDMpO1xuICAgIHRib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cblxuICB0YWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XG5cbiAgLy8gUExBQ0VIT0xERVIsIE5FRUQgVE8gTU9WRSBUSElTIFNPTUVXSEVSRSBFTFNFXG4gIGNvbnN0IGhlYWRlciA9IHRoZWFkLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuICBoZWFkZXJbMF0udGV4dENvbnRlbnQgPSBcIlDDo29cIjtcbiAgaGVhZGVyWzFdLnRleHRDb250ZW50ID0gXCJNaW5pXCI7XG4gIGhlYWRlclsyXS50ZXh0Q29udGVudCA9IFwiR3JhbmRlXCI7XG5cbiAgY29uc3QgZGF0YSA9IHRib2R5LmNoaWxkcmVuO1xuICBkYXRhWzBdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJBcnRlc2FuYWxcIjtcbiAgZGF0YVswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNCwwMFwiO1xuICBkYXRhWzBdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAyNSwwMFwiO1xuXG4gIGRhdGFbMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkNhbGFicmVzYVwiO1xuICBkYXRhWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbMV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG5cbiAgZGF0YVsyXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiUGl6emFcIjtcbiAgZGF0YVsyXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzJdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbM10uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlF1ZWlqb1wiO1xuICBkYXRhWzNdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbM10uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG5cbiAgZGF0YVs0XS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiRnJhbmdvIENyZW1vc29cIjtcbiAgZGF0YVs0XS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzRdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbNV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZVwiO1xuICBkYXRhWzVdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbNV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG5cbiAgZGF0YVs2XS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiRnJ1dGFzXCI7XG4gIGRhdGFbNl0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDYsMDBcIjtcbiAgZGF0YVs2XS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMzAsMDBcIjtcbiAgLy8gRU5EIE9GIFBMQUNFSE9MREVSXG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuIiwiaW1wb3J0IExvZ28gZnJvbSBcIi4vaW1nL2xvZ28taW5mby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRDb21wb25lbnQoKSB7XG4gIGNvbnN0IHBhcmEgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbiAgfTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBjdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHBhcmFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBvcmRlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG9yZGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3JkZXJzLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuICBjdGFIZWFkZXIudGV4dENvbnRlbnQgPSBcIkZhw6dhIG8gc2V1IHBlZGlkbyBwZWxvIG5vc3NvIGluc3RhZ3JhbSFcIjtcblxuICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSBcIkV1IHF1ZXJvIHDDo296aW5obyFcIjtcbiAgbG9nb0ltYWdlLnNyYyA9IExvZ287XG5cbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdGFIZWFkZXIpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEoXCLwn5ONIFNhbnRvIEFtYXJvIC0gU1BcIikpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEoXCLwn42eIFDDo2VzIGFydGVzYW5haXMgcHJvZHV6aWRvcyBjb20gY2FyaW5ob1wiKSk7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYShcIvCfk6YgUGVkaWRvcyBzb2IgZW5jb21lbmRhXCIpKTtcbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKFwi8J+VkCBBdGVuZGltZW50bzogMTBoIMOgcyAxOWhcIikpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEoXCLwn5OeICgxMSkgOTY5NTMtMjgxMiAvICgxMSkgOTQ3NTEtNzg5OVwiKSk7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uKTtcbiAgb3JkZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XG4gIG9yZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhQ29udGFpbmVyKTtcbiAgb3JkZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG9yZGVyc0NvbnRhaW5lcik7XG5cbiAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2dzcGFlcy9cIiwgXCJfYmxhbmtcIik7XG4gIH0pO1xuXG4gIHJldHVybiBtYWluQ29udGVudDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==