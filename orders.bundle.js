"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["orders"],{

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

/***/ "./src/img/logo-info.png":
/*!*******************************!*\
  !*** ./src/img/logo-info.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b928352e2527d707bf84.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/orders.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1Qzs7QUFFeEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsK0NBQUk7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9vcmRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSBcIi4vaW1nL2xvZ28taW5mby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRDb21wb25lbnQoKSB7XG4gIGNvbnN0IHBhcmEgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbiAgfTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBjdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHBhcmFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBvcmRlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG9yZGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3JkZXJzLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuICBjdGFIZWFkZXIudGV4dENvbnRlbnQgPSBcIkZhw6dhIG8gc2V1IHBlZGlkbyBwZWxvIG5vc3NvIGluc3RhZ3JhbSFcIjtcblxuICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSBcIkV1IHF1ZXJvIHDDo296aW5obyFcIjtcbiAgbG9nb0ltYWdlLnNyYyA9IExvZ287XG5cbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdGFIZWFkZXIpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEoXCLwn5ONIFNhbnRvIEFtYXJvIC0gU1BcIikpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEoXCLwn42eIFDDo2VzIGFydGVzYW5haXMgcHJvZHV6aWRvcyBjb20gY2FyaW5ob1wiKSk7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYShcIvCfk6YgUGVkaWRvcyBzb2IgZW5jb21lbmRhXCIpKTtcbiAgcGFyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKFwi8J+VkCBBdGVuZGltZW50bzogMTBoIMOgcyAxOWhcIikpO1xuICBwYXJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEoXCLwn5OeICgxMSkgOTY5NTMtMjgxMiAvICgxMSkgOTQ3NTEtNzg5OVwiKSk7XG4gIHBhcmFDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uKTtcbiAgb3JkZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XG4gIG9yZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhQ29udGFpbmVyKTtcbiAgb3JkZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG9yZGVyc0NvbnRhaW5lcik7XG5cbiAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2dzcGFlcy9cIiwgXCJfYmxhbmtcIik7XG4gIH0pO1xuXG4gIHJldHVybiBtYWluQ29udGVudDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==