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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/RegistrationCanvasComponent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/RegistrationCanvasComponent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicComponents_FancyButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BasicComponents/FancyButton.vue */ \"./src/components/BasicComponents/FancyButton.vue\");\n/* harmony import */ var _BasicComponents_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BasicComponents/FooterComponent.vue */ \"./src/components/BasicComponents/FooterComponent.vue\");\n/* harmony import */ var _BasicComponents_InputField_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasicComponents/InputField.vue */ \"./src/components/BasicComponents/InputField.vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\nconst __default__ = {\n  components: {\n    InputField: _BasicComponents_InputField_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    FancyButton: _BasicComponents_FancyButton_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    FooterComponent: _BasicComponents_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  name: 'CanvasComponent',\n  props: ['width'],\n\n  data() {\n    var errs = document.getElementsByClassName(\"error\")[0];\n\n    if (errs !== undefined) {\n      errs = errs.textContent;\n    }\n\n    return {\n      csrf: \"\",\n      // csrf: document.cookie.split('; ')\n      //             .find(row => row.startsWith('csrftoken'))\n      //             .split('=')[1],\n      errors: errs,\n      password: '',\n      password_again: ''\n    };\n  },\n\n  methods: {\n    validate: function () {\n      console.log(\"is it the same?\");\n      console.log(this.$data.password === this.$data.password_again);\n    }\n  }\n};\n\n\nconst __injectCSSVars__ = () => {\n  (0,vue__WEBPACK_IMPORTED_MODULE_3__.useCssVars)(_ctx => ({\n    \"55517f1b-width\": _ctx.width\n  }));\n};\n\nconst __setup__ = __default__.setup;\n__default__.setup = __setup__ ? (props, ctx) => {\n  __injectCSSVars__();\n\n  return __setup__(props, ctx);\n} : __injectCSSVars__;\n/* harmony default export */ __webpack_exports__[\"default\"] = (__default__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudHMvUmVnaXN0cmF0aW9uQ2FudmFzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQWlDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXZCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYWluLXB1enpsZXMvLi9zcmMvY29tcG9uZW50cy9DYW52YXNDb21wb25lbnRzL1JlZ2lzdHJhdGlvbkNhbnZhc0NvbXBvbmVudC52dWU/N2UxMyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiY2FudmFzIGNlbGxcIj5cclxuICAgICAgPGltZyBhbHQ9XCJCcmFpblB1enpsZXMgbG9nb1wiIGNsYXNzID0gXCJsb2dvUGljdHVyZVwiICBzcmM9XCJzdGF0aWMvcmVzL2xvZ28ucG5nXCI+XHJcblxyXG4gICAgICA8cCBjbGFzcz1cImVycm9yQ2xhc3NcIj57e2Vycm9yc319PC9wPlxyXG4gICAgICA8Zm9ybSBpZCA9IFwiZm9ybVJlZ2lzdGVyXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjc3JmbWlkZGxld2FyZXRva2VuXCIgdi1iaW5kOnZhbHVlPVwiY3NyZlwiPlxyXG5cclxuICAgICAgPElucHV0RmllbGQgdGV4dCA9IFwiVXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyXCIvPlxyXG4gICAgICA8SW5wdXRGaWVsZCB0ZXh0ID0gXCJFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiLz5cclxuICAgICAgPElucHV0RmllbGQgdGV4dCA9IFwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc1wiLz5cclxuICAgICAgPElucHV0RmllbGQgdGV4dCA9IFwiUGFzc3dvcmQgYWdhaW5cIiB0eXBlPVwicGFzc3dvcmRcIiB2LW9uOmlucHV0PVwidmFsaWRhdGVcIiB2LW1vZGVsPVwicGFzc3dvcmRfYWdhaW5cIiBuYW1lPVwicGFzc19hZ2FpblwiLz5cclxuICAgICAgPHAgIGNsYXNzPVwicmVnaXN0ZXJNZXNzYWdlXCIgc3R5bGU9XCJvcGFjaXR5OjAuN1wiPlN2YSBwb2xqYSBtb3JhanUgYml0aSBwb3B1bmplbmEhPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInJlZ2lzdGVyTWVzc2FnZVwiPkltYXRlIG5hbG9nPyBcclxuICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJyZWdpc3RlckxpbmtcIiB0bz1cIi9cIj5VbG9ndWp0ZSBzZTwvcm91dGVyLWxpbms+XHJcbiAgICAgIG92ZGUhPC9wPlxyXG4gICAgICBcclxuICAgICAgPEZhbmN5QnV0dG9uIHRleHQ9XCJSZWdpc3RlclwiICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJibHVyIGNlbGxcIj48L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbiAgICA8Zm9vdGVyPjxGb290ZXJDb21wb25lbnQvPjwvZm9vdGVyPlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRmFuY3lCdXR0b24gZnJvbSAnLi4vQmFzaWNDb21wb25lbnRzL0ZhbmN5QnV0dG9uLnZ1ZSdcclxuaW1wb3J0IEZvb3RlckNvbXBvbmVudCBmcm9tICcuLi9CYXNpY0NvbXBvbmVudHMvRm9vdGVyQ29tcG9uZW50LnZ1ZSdcclxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi4vQmFzaWNDb21wb25lbnRzL0lucHV0RmllbGQudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHsgSW5wdXRGaWVsZCwgRmFuY3lCdXR0b24sIEZvb3RlckNvbXBvbmVudCB9LFxyXG4gIG5hbWU6ICdDYW52YXNDb21wb25lbnQnLFxyXG4gIHByb3BzOiBbXHJcbiAgICAnd2lkdGgnXHJcbiAgXSxcclxuICBkYXRhKCkge1xyXG5cclxuICAgIHZhciBlcnJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVycm9yXCIpWzBdXHJcbiAgICBpZihlcnJzICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICBlcnJzID0gZXJycy50ZXh0Q29udGVudFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNzcmY6XCJcIixcclxuICAgICAgLy8gY3NyZjogZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpXHJcbiAgICAgIC8vICAgICAgICAgICAgIC5maW5kKHJvdyA9PiByb3cuc3RhcnRzV2l0aCgnY3NyZnRva2VuJykpXHJcbiAgICAgIC8vICAgICAgICAgICAgIC5zcGxpdCgnPScpWzFdLFxyXG4gICAgICBlcnJvcnM6IGVycnMsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgcGFzc3dvcmRfYWdhaW46ICcnLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXMgaXQgdGhlIHNhbWU/XCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kZGF0YS5wYXNzd29yZCA9PT0gdGhpcy4kZGF0YS5wYXNzd29yZF9hZ2FpbilcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY2FudmFzIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiB2LWJpbmQod2lkdGgpO1xyXG4gIC8qIGhlaWdodDogdi1iaW5kKGhlaWdodCk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuLmJsdXIge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgLyogdG9wOjclOyAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8qIHdpZHRoOiB2LWJpbmQod2lkdGgpO1xyXG4gIGhlaWdodDogdi1iaW5kKGhlaWdodCk7ICovXHJcbiAgd2lkdGg6IGNhbGModi1iaW5kKHdpZHRoKSAqIDEuMDUpO1xyXG4gIC8qIGhlaWdodDogY2FsYyh2LWJpbmQoaGVpZ2h0KSAqIDEuMDUpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMTc4QjY7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNGVtKTtcclxuICAtbW96LWZpbHRlcjogYmx1cig0ZW0pO1xyXG4gIC1vLWZpbHRlcjogYmx1cig0ZW0pO1xyXG4gIC1tcy1maWx0ZXI6IGJsdXIoNGVtKTtcclxuICBmaWx0ZXI6IGJsdXIoNGVtKTtcclxuICBcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxufVxyXG4uY2VsbCB7IFxyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OjE7XHJcbn1cclxuLmxvZ29QaWN0dXJle1xyXG4gIHdpZHRoOjd2aDtcclxuICBoZWlnaHQ6YXV0bztcclxufVxyXG4ucmVnaXN0ZXJNZXNzYWdlLCAuZXJyb3JDbGFzc3sgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAwLjV2dztcclxuXHJcbn1cclxuXHJcbi5yZWdpc3Rlckxpbmsge1xyXG4gIG1hcmdpbi10b3A6MTAlO1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IzVENUZFRjtcclxufVxyXG4ucmVnaXN0ZXJMaW5rOmhvdmVyIHtcclxuICBjb2xvcjojRjE3OEI2O1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5ndWVzdEJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDoxMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgLyogZm9udC1zaXplOjAuOHZ3OyAqL1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcblxyXG5cclxufVxyXG5cclxuZm9vdGVyIHtcclxuXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm90dG9tOiAxMHZoO1xyXG5sZWZ0OjA7XHJcbnJpZ2h0OjA7XHJcblxyXG5cclxufVxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/RegistrationCanvasComponent.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/RegistrationCanvasComponent.vue?vue&type=template&id=55517f1b&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/RegistrationCanvasComponent.vue?vue&type=template&id=55517f1b&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-55517f1b\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\n\nconst _hoisted_1 = {\n  class: \"container\"\n};\nconst _hoisted_2 = {\n  class: \"canvas cell\"\n};\n\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n  alt: \"BrainPuzzles logo\",\n  class: \"logoPicture\",\n  src: \"static/res/logo.png\"\n}, null, -1\n/* HOISTED */\n));\n\nconst _hoisted_4 = {\n  class: \"errorClass\"\n};\nconst _hoisted_5 = {\n  id: \"formRegister\",\n  method: \"post\"\n};\nconst _hoisted_6 = [\"value\"];\n\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", {\n  class: \"registerMessage\",\n  style: {\n    \"opacity\": \"0.7\"\n  }\n}, \"Sva polja moraju biti popunjena!\", -1\n/* HOISTED */\n));\n\nconst _hoisted_8 = {\n  class: \"registerMessage\"\n};\n\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Imate nalog? \");\n\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Ulogujte se\");\n\nconst _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" ovde!\");\n\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"blur cell\"\n}, null, -1\n/* HOISTED */\n));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_InputField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"InputField\");\n\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n\n  const _component_FancyButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"FancyButton\");\n\n  const _component_FooterComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"FooterComponent\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errors), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"hidden\",\n    name: \"csrfmiddlewaretoken\",\n    value: $data.csrf\n  }, null, 8\n  /* PROPS */\n  , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputField, {\n    text: \"Username\",\n    type: \"text\",\n    name: \"user\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputField, {\n    text: \"Email\",\n    type: \"email\",\n    name: \"email\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputField, {\n    text: \"Password\",\n    type: \"password\",\n    modelValue: $data.password,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.password = $event),\n    name: \"pass\"\n  }, null, 8\n  /* PROPS */\n  , [\"modelValue\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputField, {\n    text: \"Password again\",\n    type: \"password\",\n    onInput: $options.validate,\n    modelValue: $data.password_again,\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.password_again = $event),\n    name: \"pass_again\"\n  }, null, 8\n  /* PROPS */\n  , [\"onInput\", \"modelValue\"]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    class: \"registerLink\",\n    to: \"/\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_10]),\n    _: 1\n    /* STABLE */\n\n  }), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FancyButton, {\n    text: \"Register\"\n  })])]), _hoisted_12]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"footer\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FooterComponent)])], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9DYW52YXNDb21wb25lbnRzL1JlZ2lzdHJhdGlvbkNhbnZhc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU1MTdmMWImc2NvcGVkPXRydWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7O0FBRUE7OztBQUNBO0FBQUE7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTs7O0FBQUE7O0FBQ0E7O0FBQUE7O0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUF2QkE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTs7OztBQUFBO0FBR0E7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYWluLXB1enpsZXMvLi9zcmMvY29tcG9uZW50cy9DYW52YXNDb21wb25lbnRzL1JlZ2lzdHJhdGlvbkNhbnZhc0NvbXBvbmVudC52dWU/N2UxMyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiY2FudmFzIGNlbGxcIj5cclxuICAgICAgPGltZyBhbHQ9XCJCcmFpblB1enpsZXMgbG9nb1wiIGNsYXNzID0gXCJsb2dvUGljdHVyZVwiICBzcmM9XCJzdGF0aWMvcmVzL2xvZ28ucG5nXCI+XHJcblxyXG4gICAgICA8cCBjbGFzcz1cImVycm9yQ2xhc3NcIj57e2Vycm9yc319PC9wPlxyXG4gICAgICA8Zm9ybSBpZCA9IFwiZm9ybVJlZ2lzdGVyXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjc3JmbWlkZGxld2FyZXRva2VuXCIgdi1iaW5kOnZhbHVlPVwiY3NyZlwiPlxyXG5cclxuICAgICAgPElucHV0RmllbGQgdGV4dCA9IFwiVXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyXCIvPlxyXG4gICAgICA8SW5wdXRGaWVsZCB0ZXh0ID0gXCJFbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiLz5cclxuICAgICAgPElucHV0RmllbGQgdGV4dCA9IFwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc1wiLz5cclxuICAgICAgPElucHV0RmllbGQgdGV4dCA9IFwiUGFzc3dvcmQgYWdhaW5cIiB0eXBlPVwicGFzc3dvcmRcIiB2LW9uOmlucHV0PVwidmFsaWRhdGVcIiB2LW1vZGVsPVwicGFzc3dvcmRfYWdhaW5cIiBuYW1lPVwicGFzc19hZ2FpblwiLz5cclxuICAgICAgPHAgIGNsYXNzPVwicmVnaXN0ZXJNZXNzYWdlXCIgc3R5bGU9XCJvcGFjaXR5OjAuN1wiPlN2YSBwb2xqYSBtb3JhanUgYml0aSBwb3B1bmplbmEhPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInJlZ2lzdGVyTWVzc2FnZVwiPkltYXRlIG5hbG9nPyBcclxuICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJyZWdpc3RlckxpbmtcIiB0bz1cIi9cIj5VbG9ndWp0ZSBzZTwvcm91dGVyLWxpbms+XHJcbiAgICAgIG92ZGUhPC9wPlxyXG4gICAgICBcclxuICAgICAgPEZhbmN5QnV0dG9uIHRleHQ9XCJSZWdpc3RlclwiICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJibHVyIGNlbGxcIj48L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbiAgICA8Zm9vdGVyPjxGb290ZXJDb21wb25lbnQvPjwvZm9vdGVyPlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRmFuY3lCdXR0b24gZnJvbSAnLi4vQmFzaWNDb21wb25lbnRzL0ZhbmN5QnV0dG9uLnZ1ZSdcclxuaW1wb3J0IEZvb3RlckNvbXBvbmVudCBmcm9tICcuLi9CYXNpY0NvbXBvbmVudHMvRm9vdGVyQ29tcG9uZW50LnZ1ZSdcclxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi4vQmFzaWNDb21wb25lbnRzL0lucHV0RmllbGQudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHsgSW5wdXRGaWVsZCwgRmFuY3lCdXR0b24sIEZvb3RlckNvbXBvbmVudCB9LFxyXG4gIG5hbWU6ICdDYW52YXNDb21wb25lbnQnLFxyXG4gIHByb3BzOiBbXHJcbiAgICAnd2lkdGgnXHJcbiAgXSxcclxuICBkYXRhKCkge1xyXG5cclxuICAgIHZhciBlcnJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVycm9yXCIpWzBdXHJcbiAgICBpZihlcnJzICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICBlcnJzID0gZXJycy50ZXh0Q29udGVudFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNzcmY6XCJcIixcclxuICAgICAgLy8gY3NyZjogZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpXHJcbiAgICAgIC8vICAgICAgICAgICAgIC5maW5kKHJvdyA9PiByb3cuc3RhcnRzV2l0aCgnY3NyZnRva2VuJykpXHJcbiAgICAgIC8vICAgICAgICAgICAgIC5zcGxpdCgnPScpWzFdLFxyXG4gICAgICBlcnJvcnM6IGVycnMsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgcGFzc3dvcmRfYWdhaW46ICcnLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXMgaXQgdGhlIHNhbWU/XCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kZGF0YS5wYXNzd29yZCA9PT0gdGhpcy4kZGF0YS5wYXNzd29yZF9hZ2FpbilcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY2FudmFzIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiB2LWJpbmQod2lkdGgpO1xyXG4gIC8qIGhlaWdodDogdi1iaW5kKGhlaWdodCk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuLmJsdXIge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgLyogdG9wOjclOyAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8qIHdpZHRoOiB2LWJpbmQod2lkdGgpO1xyXG4gIGhlaWdodDogdi1iaW5kKGhlaWdodCk7ICovXHJcbiAgd2lkdGg6IGNhbGModi1iaW5kKHdpZHRoKSAqIDEuMDUpO1xyXG4gIC8qIGhlaWdodDogY2FsYyh2LWJpbmQoaGVpZ2h0KSAqIDEuMDUpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMTc4QjY7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNGVtKTtcclxuICAtbW96LWZpbHRlcjogYmx1cig0ZW0pO1xyXG4gIC1vLWZpbHRlcjogYmx1cig0ZW0pO1xyXG4gIC1tcy1maWx0ZXI6IGJsdXIoNGVtKTtcclxuICBmaWx0ZXI6IGJsdXIoNGVtKTtcclxuICBcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxufVxyXG4uY2VsbCB7IFxyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OjE7XHJcbn1cclxuLmxvZ29QaWN0dXJle1xyXG4gIHdpZHRoOjd2aDtcclxuICBoZWlnaHQ6YXV0bztcclxufVxyXG4ucmVnaXN0ZXJNZXNzYWdlLCAuZXJyb3JDbGFzc3sgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAwLjV2dztcclxuXHJcbn1cclxuXHJcbi5yZWdpc3Rlckxpbmsge1xyXG4gIG1hcmdpbi10b3A6MTAlO1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IzVENUZFRjtcclxufVxyXG4ucmVnaXN0ZXJMaW5rOmhvdmVyIHtcclxuICBjb2xvcjojRjE3OEI2O1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5ndWVzdEJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDoxMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgLyogZm9udC1zaXplOjAuOHZ3OyAqL1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcblxyXG5cclxufVxyXG5cclxuZm9vdGVyIHtcclxuXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm90dG9tOiAxMHZoO1xyXG5sZWZ0OjA7XHJcbnJpZ2h0OjA7XHJcblxyXG5cclxufVxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/RegistrationCanvasComponent.vue?vue&type=template&id=55517f1b&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "dd79dd4344c0e891"; }
/******/ }();
/******/ 
/******/ }
);