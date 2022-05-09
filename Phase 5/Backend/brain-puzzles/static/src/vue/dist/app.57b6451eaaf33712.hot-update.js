"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatebrain_puzzles"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _components_LogInComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LogInComponent */ \"./src/components/LogInComponent.vue\");\n/* harmony import */ var _components_RegistrationComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/RegistrationComponent.vue */ \"./src/components/RegistrationComponent.vue\");\n// import { createApp, VueElement } from 'vue'\n\n\n\n\n // const Home = { template: '<div>Veljko</div>' }\n\nconst routes = [{\n  path: '/',\n  component: _components_LogInComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/registration',\n  component: _components_RegistrationComponent_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}]; // Vue.use(Router)\n\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createRouter)({\n  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createWebHistory)(),\n  routes // short for `routes: routes`\n\n});\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use(router);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7QUFTQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmFpbi1wdXp6bGVzLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjcmVhdGVBcHAsIFZ1ZUVsZW1lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5cbmltcG9ydCB7Y3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5fSBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IExvZ0luQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Mb2dJbkNvbXBvbmVudCdcbmltcG9ydCBSZWdpc3RyYXRpb25Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbkNvbXBvbmVudC52dWUnXG4vLyBjb25zdCBIb21lID0geyB0ZW1wbGF0ZTogJzxkaXY+VmVsamtvPC9kaXY+JyB9XG5cbmNvbnN0IHJvdXRlcyA9ICBbXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IExvZ0luQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJy9yZWdpc3RyYXRpb24nLCBjb21wb25lbnQ6IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9LFxuXG5dXG4vLyBWdWUudXNlKFJvdXRlcilcbmNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gIC8vIDQuIFByb3ZpZGUgdGhlIGhpc3RvcnkgaW1wbGVtZW50YXRpb24gdG8gdXNlLiBXZSBhcmUgdXNpbmcgdGhlIGhhc2ggaGlzdG9yeSBmb3Igc2ltcGxpY2l0eSBoZXJlLlxuICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksXG4gIHJvdXRlcywgLy8gc2hvcnQgZm9yIGByb3V0ZXM6IHJvdXRlc2Bcbn0pXG5cblxuXG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApXG5hcHAudXNlKHJvdXRlcilcbmFwcC5tb3VudCgnI2FwcCcpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "84ecb3db65f7564b"; }
/******/ }();
/******/ 
/******/ }
);