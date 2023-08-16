"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDUTtBQUNSO0FBQ1E7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7O0FBRXJDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkNBQVc7QUFDZixJQUFJLDZDQUFXO0FBQ2YsSUFBSSw2Q0FBVztBQUNmLElBQUksNkNBQVc7QUFDZixJQUFJLDZDQUFXO0FBQ2Y7QUFDQTtBQUNBLElBQUksaURBQWU7QUFDbkIsSUFBSSxpREFBZTtBQUNuQixJQUFJLGlEQUFlO0FBQ25CLElBQUksaURBQWU7QUFDbkIsSUFBSSxpREFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnVPcHRpb24xIGZyb20gXCIuL2ltZy9vcHRpb24xLnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb24xX2FsdCBmcm9tIFwiLi9pbWcvb3B0aW9uMS1hbHQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjIgZnJvbSBcIi4vaW1nL29wdGlvbjIucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjJfYWx0IGZyb20gXCIuL2ltZy9vcHRpb24yLWFsdC5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uMyBmcm9tIFwiLi9pbWcvb3B0aW9uMy5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uM19hbHQgZnJvbSBcIi4vaW1nL29wdGlvbjMtYWx0LnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb240IGZyb20gXCIuL2ltZy9vcHRpb240LnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb240X2FsdCBmcm9tIFwiLi9pbWcvb3B0aW9uNC1hbHQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjUgZnJvbSBcIi4vaW1nL29wdGlvbjUucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjVfYWx0IGZyb20gXCIuL2ltZy9vcHRpb241LWFsdC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuICBwb3B1bGF0ZU1lbnUobWFpbkNvbnRlbnQsIDUpO1xuICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWVudShtYWluQ29udGVudCwgaXRlbUFtb3VudCkge1xuICBjb25zdCBvcHRpb24gPSBbXTtcbiAgY29uc3Qgb3B0aW9uQWx0ID0gW107XG4gIGNvbnN0IG9wdGlvblNyYyA9IFtcbiAgICBNZW51T3B0aW9uMSxcbiAgICBNZW51T3B0aW9uMixcbiAgICBNZW51T3B0aW9uMyxcbiAgICBNZW51T3B0aW9uNCxcbiAgICBNZW51T3B0aW9uNSxcbiAgXTtcbiAgY29uc3Qgb3B0aW9uU3JjQWx0ID0gW1xuICAgIE1lbnVPcHRpb24xX2FsdCxcbiAgICBNZW51T3B0aW9uMl9hbHQsXG4gICAgTWVudU9wdGlvbjNfYWx0LFxuICAgIE1lbnVPcHRpb240X2FsdCxcbiAgICBNZW51T3B0aW9uNV9hbHQsXG4gIF07XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFibGUtY29udGFpbmVyXCIpO1xuICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYWJsZSg3KSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVDb250YWluZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbUFtb3VudDsgaSsrKSB7XG4gICAgb3B0aW9uW2ldID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uQWx0W2ldID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uW2ldLnNyYyA9IG9wdGlvblNyY1tpXTtcbiAgICBvcHRpb25BbHRbaV0uc3JjID0gb3B0aW9uU3JjQWx0W2ldO1xuICAgIGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25baV0pO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25BbHRbaV0pO1xuICAgIG9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWNvbnRhaW5lclwiKTtcbiAgICBvcHRpb25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9nc3BhZXMvXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHJvd0Ftb3VudCA9IDUpIHtcbiAgY29uc3QgY3JlYXRlUm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICByZXR1cm4gcm93O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZURhdGEgPSAoYW1vdW50LCB0eXBlID0gXCJ0ZFwiKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gY3JlYXRlUm93KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG4gIH07XG5cbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcblxuICBjb25zdCByb3dIZWFkZXIgPSBjcmVhdGVEYXRhKDMsIFwidGhcIik7XG4gIHRoZWFkLmFwcGVuZENoaWxkKHJvd0hlYWRlcik7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0Ftb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gY3JlYXRlRGF0YSgzKTtcbiAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG5cbiAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuXG4gIC8vIFBMQUNFSE9MREVSLCBORUVEIFRPIE1PVkUgVEhJUyBTT01FV0hFUkUgRUxTRVxuICBjb25zdCBoZWFkZXIgPSB0aGVhZC5jaGlsZHJlblswXS5jaGlsZHJlbjtcbiAgaGVhZGVyWzBdLnRleHRDb250ZW50ID0gXCJQw6NvXCI7XG4gIGhlYWRlclsxXS50ZXh0Q29udGVudCA9IFwiTWluaVwiO1xuICBoZWFkZXJbMl0udGV4dENvbnRlbnQgPSBcIkdyYW5kZVwiO1xuXG4gIGNvbnN0IGRhdGEgPSB0Ym9keS5jaGlsZHJlbjtcbiAgZGF0YVswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiQXJ0ZXNhbmFsXCI7XG4gIGRhdGFbMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDQsMDBcIjtcbiAgZGF0YVswXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMjUsMDBcIjtcblxuICBkYXRhWzFdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJDYWxhYnJlc2FcIjtcbiAgZGF0YVsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzFdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbMl0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlBpenphXCI7XG4gIGRhdGFbMl0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDYsMDBcIjtcbiAgZGF0YVsyXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMzAsMDBcIjtcblxuICBkYXRhWzNdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJRdWVpam9cIjtcbiAgZGF0YVszXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzNdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbNF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkZyYW5nbyBDcmVtb3NvXCI7XG4gIGRhdGFbNF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDYsMDBcIjtcbiAgZGF0YVs0XS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMzAsMDBcIjtcblxuICBkYXRhWzVdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJDaG9jb2xhdGVcIjtcbiAgZGF0YVs1XS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzVdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbNl0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkZydXRhc1wiO1xuICBkYXRhWzZdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbNl0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG4gIC8vIEVORCBPRiBQTEFDRUhPTERFUlxuXG4gIHJldHVybiB0YWJsZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==