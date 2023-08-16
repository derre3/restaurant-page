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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDUTtBQUNSO0FBQ1E7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7O0FBRXJDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBVztBQUNmLElBQUksNkNBQVc7QUFDZixJQUFJLDZDQUFXO0FBQ2YsSUFBSSw2Q0FBVztBQUNmLElBQUksNkNBQVc7QUFDZjtBQUNBO0FBQ0EsSUFBSSxpREFBZTtBQUNuQixJQUFJLGlEQUFlO0FBQ25CLElBQUksaURBQWU7QUFDbkIsSUFBSSxpREFBZTtBQUNuQixJQUFJLGlEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsZUFBZTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudU9wdGlvbjEgZnJvbSBcIi4vaW1nL29wdGlvbjEucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjFfYWx0IGZyb20gXCIuL2ltZy9vcHRpb24xLWFsdC5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uMiBmcm9tIFwiLi9pbWcvb3B0aW9uMi5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uMl9hbHQgZnJvbSBcIi4vaW1nL29wdGlvbjItYWx0LnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb24zIGZyb20gXCIuL2ltZy9vcHRpb24zLnBuZ1wiO1xuaW1wb3J0IE1lbnVPcHRpb24zX2FsdCBmcm9tIFwiLi9pbWcvb3B0aW9uMy1hbHQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjQgZnJvbSBcIi4vaW1nL29wdGlvbjQucG5nXCI7XG5pbXBvcnQgTWVudU9wdGlvbjRfYWx0IGZyb20gXCIuL2ltZy9vcHRpb240LWFsdC5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uNSBmcm9tIFwiLi9pbWcvb3B0aW9uNS5wbmdcIjtcbmltcG9ydCBNZW51T3B0aW9uNV9hbHQgZnJvbSBcIi4vaW1nL29wdGlvbjUtYWx0LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q29tcG9uZW50KCkge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIHBvcHVsYXRlTWVudShtYWluQ29udGVudCwgNSk7XG4gIHJldHVybiBtYWluQ29udGVudDtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVNZW51KG1haW5Db250ZW50LCBpdGVtQW1vdW50KSB7XG4gIC8vIGVhY2ggbWVudSBlbnRyeSBoYXMgMiBwaWN0dXJlc1xuICAvLyBvcHRpb24gYW5kIG9wdGlvbkFsdCBjb250YWlucyB0aGUgaW1hZ2UgaHRtbCBlbGVtZW50XG4gIC8vIG9wdGlvblNyYyBhbmQgb3B0aW9uU3JjQWx0IGFyZSB1c2VkIHRvIHN0b3JlIHRoZSBpbWFnZXMgZnJvbSB0aGUgc291cmNlXG4gIC8vIHRoaXMgaXMgZG9uZSBzbyBib3RoIHRoZSBpbWFnZSBhbmQgdGhlIHNvdXJjZSBoYXZlIHRoZSBzYW1lIGFycmF5IHBvc2l0aW9uXG4gIGNvbnN0IG9wdGlvbiA9IFtdO1xuICBjb25zdCBvcHRpb25BbHQgPSBbXTtcbiAgY29uc3Qgb3B0aW9uU3JjID0gW1xuICAgIE1lbnVPcHRpb24xLFxuICAgIE1lbnVPcHRpb24yLFxuICAgIE1lbnVPcHRpb24zLFxuICAgIE1lbnVPcHRpb240LFxuICAgIE1lbnVPcHRpb241LFxuICBdO1xuICBjb25zdCBvcHRpb25TcmNBbHQgPSBbXG4gICAgTWVudU9wdGlvbjFfYWx0LFxuICAgIE1lbnVPcHRpb24yX2FsdCxcbiAgICBNZW51T3B0aW9uM19hbHQsXG4gICAgTWVudU9wdGlvbjRfYWx0LFxuICAgIE1lbnVPcHRpb241X2FsdCxcbiAgXTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZS1jb250YWluZXJcIik7XG4gIHRhYmxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhYmxlKDcpKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZUNvbnRhaW5lcik7XG5cbiAgLy8gY3JlYXRlcyBhIG1lbnUgZW50cnkgdXNpbmcgdGhlIGFycmF5cyBkZXNjcmliZWQgYWJvdmVcbiAgLy8gdGhlIGluZGV4IGFjY2VzcyBib3RoIGFycmF5cyBhbmQgc2V0cyB0aGUgc291cmNlIHRvIHRoZSBpbWFnZSBlbGVtZW50XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbUFtb3VudDsgaSsrKSB7XG4gICAgb3B0aW9uW2ldID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uQWx0W2ldID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uW2ldLnNyYyA9IG9wdGlvblNyY1tpXTtcbiAgICBvcHRpb25BbHRbaV0uc3JjID0gb3B0aW9uU3JjQWx0W2ldO1xuICAgIGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25baV0pO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25BbHRbaV0pO1xuICAgIG9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWNvbnRhaW5lclwiKTtcbiAgICBvcHRpb25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9nc3BhZXMvXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKHJvd0Ftb3VudCA9IDUpIHtcbiAgY29uc3QgY3JlYXRlUm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICByZXR1cm4gcm93O1xuICB9O1xuXG4gIC8vIGNyZWF0ZXMgdGQgZWxlbWVudCBieSBkZWZhdWx0IGlmIG5vdCBzcGVjaWZpZWRcbiAgY29uc3QgY3JlYXRlRGF0YSA9IChhbW91bnQsIHR5cGUgPSBcInRkXCIpID0+IHtcbiAgICBjb25zdCByb3cgPSBjcmVhdGVSb3coKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdztcbiAgfTtcblxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XG4gIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuXG4gIGNvbnN0IHJvd0hlYWRlciA9IGNyZWF0ZURhdGEoMywgXCJ0aFwiKTtcbiAgdGhlYWQuYXBwZW5kQ2hpbGQocm93SGVhZGVyKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93QW1vdW50OyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBjcmVhdGVEYXRhKDMpO1xuICAgIHRib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cblxuICB0YWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XG5cbiAgLy8gUExBQ0VIT0xERVIsIE5FRUQgVE8gTU9WRSBUSElTIFNPTUVXSEVSRSBFTFNFXG4gIGNvbnN0IGhlYWRlciA9IHRoZWFkLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuICBoZWFkZXJbMF0udGV4dENvbnRlbnQgPSBcIlDDo29cIjtcbiAgaGVhZGVyWzFdLnRleHRDb250ZW50ID0gXCJNaW5pXCI7XG4gIGhlYWRlclsyXS50ZXh0Q29udGVudCA9IFwiR3JhbmRlXCI7XG5cbiAgY29uc3QgZGF0YSA9IHRib2R5LmNoaWxkcmVuO1xuICBkYXRhWzBdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJBcnRlc2FuYWxcIjtcbiAgZGF0YVswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNCwwMFwiO1xuICBkYXRhWzBdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAyNSwwMFwiO1xuXG4gIGRhdGFbMV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkNhbGFicmVzYVwiO1xuICBkYXRhWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbMV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG5cbiAgZGF0YVsyXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiUGl6emFcIjtcbiAgZGF0YVsyXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzJdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbM10uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlF1ZWlqb1wiO1xuICBkYXRhWzNdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbM10uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG5cbiAgZGF0YVs0XS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiRnJhbmdvIENyZW1vc29cIjtcbiAgZGF0YVs0XS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiUiQgNiwwMFwiO1xuICBkYXRhWzRdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gXCJSJCAzMCwwMFwiO1xuXG4gIGRhdGFbNV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZVwiO1xuICBkYXRhWzVdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCJSJCA2LDAwXCI7XG4gIGRhdGFbNV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIlIkIDMwLDAwXCI7XG5cbiAgZGF0YVs2XS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiRnJ1dGFzXCI7XG4gIGRhdGFbNl0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIlIkIDYsMDBcIjtcbiAgZGF0YVs2XS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiUiQgMzAsMDBcIjtcbiAgLy8gRU5EIE9GIFBMQUNFSE9MREVSXG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9