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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/LogInCanvasComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/LogInCanvasComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicComponents_FancyButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BasicComponents/FancyButton.vue */ \"./src/components/BasicComponents/FancyButton.vue\");\n/* harmony import */ var _BasicComponents_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BasicComponents/FooterComponent.vue */ \"./src/components/BasicComponents/FooterComponent.vue\");\n/* harmony import */ var _BasicComponents_InputField_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasicComponents/InputField.vue */ \"./src/components/BasicComponents/InputField.vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\nconst __default__ = {\n  components: {\n    InputField: _BasicComponents_InputField_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    FancyButton: _BasicComponents_FancyButton_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    FooterComponent: _BasicComponents_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  name: 'LogInCanvasComponent',\n  props: ['width'],\n\n  data() {\n    var errs = document.getElementsByClassName(\"error\")[0];\n\n    if (errs !== undefined) {\n      errs = errs.textContent;\n    }\n\n    return {\n      csrf: \"\",\n      // csrf: document.cookie.split('; ')\n      //             .find(row => row.startsWith('csrftoken'))\n      //             .split('=')[1],\n      errors: errs\n    };\n  },\n\n  methods: {\n    clickedRegister() {\n      this.$data.errors = undefined;\n    }\n\n  }\n};\n\n\nconst __injectCSSVars__ = () => {\n  (0,vue__WEBPACK_IMPORTED_MODULE_3__.useCssVars)(_ctx => ({\n    \"52539e3d-width\": _ctx.width\n  }));\n};\n\nconst __setup__ = __default__.setup;\n__default__.setup = __setup__ ? (props, ctx) => {\n  __injectCSSVars__();\n\n  return __setup__(props, ctx);\n} : __injectCSSVars__;\n/* harmony default export */ __webpack_exports__[\"default\"] = (__default__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudHMvTG9nSW5DYW52YXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTtBQXBCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYWluLXB1enpsZXMvLi9zcmMvY29tcG9uZW50cy9DYW52YXNDb21wb25lbnRzL0xvZ0luQ2FudmFzQ29tcG9uZW50LnZ1ZT8zNGVmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJjYW52YXMgY2VsbFwiPlxyXG4gICAgICA8aW1nIGFsdD1cIkJyYWluUHV6emxlcyBsb2dvXCIgY2xhc3MgPSBcImxvZ29QaWN0dXJlXCIgIHNyYz1cInN0YXRpYy9yZXMvbG9nby5wbmdcIj5cclxuICAgICAgPHAgY2xhc3M9XCJlcnJvckNsYXNzXCI+e3tlcnJvcnN9fTwvcD5cclxuXHJcbiAgICAgIDxmb3JtIGlkID0gXCJmb3JtTG9nSW5cIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNzcmZtaWRkbGV3YXJldG9rZW5cIiB2LWJpbmQ6dmFsdWU9XCJjc3JmXCI+XHJcbiAgICAgIDxJbnB1dEZpZWxkIHRleHQgPSBcIlVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlclwiLz5cclxuICAgICAgPElucHV0RmllbGQgdGV4dCA9IFwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc1wiLz5cclxuICAgICAgPEZhbmN5QnV0dG9uIHRleHQ9XCJMb2cgSW5cIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8cCBjbGFzcz1cInJlZ2lzdGVyTWVzc2FnZVwiID5OaXN0ZSDEjWxhbj8gXHJcbiAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cInJlZ2lzdGVyTGlua1wiIEBjbGljaz1cImNsaWNrZWRSZWdpc3RlclwiIHRvPVwiL3JlZ2lzdGVyXCI+UmVnaXN0cnVqdGUgc2U8L3JvdXRlci1saW5rPiE8L3A+XHJcbiAgICAgIDxGYW5jeUJ1dHRvbiBjbGFzcz1cImd1ZXN0QnV0dG9uXCIgdGV4dD1cIlNpZ24gaW4gYXMgR3Vlc3RcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJibHVyIGNlbGxcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIDxmb290ZXI+PEZvb3RlckNvbXBvbmVudC8+PC9mb290ZXI+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbiBpbXBvcnQgRmFuY3lCdXR0b24gZnJvbSAnLi4vQmFzaWNDb21wb25lbnRzL0ZhbmN5QnV0dG9uLnZ1ZSdcclxuIGltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSAnLi4vQmFzaWNDb21wb25lbnRzL0Zvb3RlckNvbXBvbmVudC52dWUnXHJcbiBpbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuLi9CYXNpY0NvbXBvbmVudHMvSW5wdXRGaWVsZC52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgIGNvbXBvbmVudHM6IHsgSW5wdXRGaWVsZCwgRmFuY3lCdXR0b24sIEZvb3RlckNvbXBvbmVudCB9LFxyXG4gIG5hbWU6ICdMb2dJbkNhbnZhc0NvbXBvbmVudCcsXHJcbiAgcHJvcHM6IFtcclxuICAgICd3aWR0aCdcclxuICBdLFxyXG4gIGRhdGEoKSB7XHJcbiAgICB2YXIgZXJycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlcnJvclwiKVswXVxyXG4gICAgaWYoZXJycyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgZXJycyA9IGVycnMudGV4dENvbnRlbnRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjc3JmOiBcIlwiLFxyXG4gICAgICAvLyBjc3JmOiBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJylcclxuICAgICAgLy8gICAgICAgICAgICAgLmZpbmQocm93ID0+IHJvdy5zdGFydHNXaXRoKCdjc3JmdG9rZW4nKSlcclxuICAgICAgLy8gICAgICAgICAgICAgLnNwbGl0KCc9JylbMV0sXHJcbiAgICAgIGVycm9yczogZXJycyxcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsaWNrZWRSZWdpc3RlcigpIHtcclxuICAgICAgdGhpcy4kZGF0YS5lcnJvcnMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmNhbnZhcyB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogdi1iaW5kKHdpZHRoKTtcclxuICAvKiBoZWlnaHQ6IHYtYmluZChoZWlnaHQpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcbi5ibHVyIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIC8qIHRvcDo3JTsgKi9cclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvKiB3aWR0aDogdi1iaW5kKHdpZHRoKTtcclxuICBoZWlnaHQ6IHYtYmluZChoZWlnaHQpOyAqL1xyXG4gIHdpZHRoOiBjYWxjKHYtYmluZCh3aWR0aCkgKiAxLjA1KTtcclxuICAvKiBoZWlnaHQ6IGNhbGModi1iaW5kKGhlaWdodCkgKiAxLjA1KTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE3OEI2O1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDRlbSk7XHJcbiAgLW1vei1maWx0ZXI6IGJsdXIoNGVtKTtcclxuICAtby1maWx0ZXI6IGJsdXIoNGVtKTtcclxuICAtbXMtZmlsdGVyOiBibHVyKDRlbSk7XHJcbiAgZmlsdGVyOiBibHVyKDRlbSk7XHJcbiAgXHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbn1cclxuLmNlbGwgeyBcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1zdGFydDoxO1xyXG59XHJcbi5sb2dvUGljdHVyZXtcclxuICB3aWR0aDo3dmg7XHJcbiAgaGVpZ2h0OmF1dG87XHJcbn1cclxuLnJlZ2lzdGVyTWVzc2FnZSwgLmVycm9yQ2xhc3N7IFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC41dnc7XHJcblxyXG59XHJcblxyXG4ucmVnaXN0ZXJMaW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IzVENUZFRjtcclxufVxyXG4ucmVnaXN0ZXJMaW5rOmhvdmVyIHtcclxuICBjb2xvcjojRjE3OEI2O1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5ndWVzdEJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDoxMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgLyogZm9udC1zaXplOjAuOHZ3OyAqL1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcblxyXG5cclxufVxyXG5cclxuZm9vdGVyIHtcclxuXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm90dG9tOiAxMHZoO1xyXG5sZWZ0OjA7XHJcbnJpZ2h0OjA7XHJcblxyXG5cclxufVxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/LogInCanvasComponent.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/LogInCanvasComponent.vue?vue&type=template&id=52539e3d&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/LogInCanvasComponent.vue?vue&type=template&id=52539e3d&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-52539e3d\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\n\nconst _hoisted_1 = {\n  class: \"container\"\n};\nconst _hoisted_2 = {\n  class: \"canvas cell\"\n};\n\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n  alt: \"BrainPuzzles logo\",\n  class: \"logoPicture\",\n  src: \"static/res/logo.png\"\n}, null, -1\n/* HOISTED */\n));\n\nconst _hoisted_4 = {\n  class: \"errorClass\"\n};\nconst _hoisted_5 = {\n  id: \"formLogIn\",\n  method: \"post\"\n};\nconst _hoisted_6 = [\"value\"];\nconst _hoisted_7 = {\n  class: \"registerMessage\"\n};\n\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Niste član? \");\n\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Registrujte se\");\n\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"!\");\n\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"blur cell\"\n}, null, -1\n/* HOISTED */\n));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_InputField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"InputField\");\n\n  const _component_FancyButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"FancyButton\");\n\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n\n  const _component_FooterComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"FooterComponent\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.errors), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"hidden\",\n    name: \"csrfmiddlewaretoken\",\n    value: $data.csrf\n  }, null, 8\n  /* PROPS */\n  , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputField, {\n    text: \"Username\",\n    type: \"text\",\n    name: \"user\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputField, {\n    text: \"Password\",\n    type: \"password\",\n    name: \"pass\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FancyButton, {\n    text: \"Log In\"\n  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    class: \"registerLink\",\n    onClick: $options.clickedRegister,\n    to: \"/register\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_9]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"onClick\"]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FancyButton, {\n    class: \"guestButton\",\n    text: \"Sign in as Guest\"\n  })]), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"footer\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FooterComponent)])], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9DYW52YXNDb21wb25lbnRzL0xvZ0luQ2FudmFzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MjUzOWUzZCZzY29wZWQ9dHJ1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7OztBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOzs7QUFDQTs7O0FBRUE7QUFBQTs7OztBQU9BOzs7QUFBQTs7QUFDQTs7QUFBQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQWpCQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUFBOztBQUFBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhaW4tcHV6emxlcy8uL3NyYy9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudHMvTG9nSW5DYW52YXNDb21wb25lbnQudnVlPzM0ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3MgPSBcImNhbnZhcyBjZWxsXCI+XHJcbiAgICAgIDxpbWcgYWx0PVwiQnJhaW5QdXp6bGVzIGxvZ29cIiBjbGFzcyA9IFwibG9nb1BpY3R1cmVcIiAgc3JjPVwic3RhdGljL3Jlcy9sb2dvLnBuZ1wiPlxyXG4gICAgICA8cCBjbGFzcz1cImVycm9yQ2xhc3NcIj57e2Vycm9yc319PC9wPlxyXG5cclxuICAgICAgPGZvcm0gaWQgPSBcImZvcm1Mb2dJblwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY3NyZm1pZGRsZXdhcmV0b2tlblwiIHYtYmluZDp2YWx1ZT1cImNzcmZcIj5cclxuICAgICAgPElucHV0RmllbGQgdGV4dCA9IFwiVXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyXCIvPlxyXG4gICAgICA8SW5wdXRGaWVsZCB0ZXh0ID0gXCJQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzXCIvPlxyXG4gICAgICA8RmFuY3lCdXR0b24gdGV4dD1cIkxvZyBJblwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxwIGNsYXNzPVwicmVnaXN0ZXJNZXNzYWdlXCIgPk5pc3RlIMSNbGFuPyBcclxuICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwicmVnaXN0ZXJMaW5rXCIgQGNsaWNrPVwiY2xpY2tlZFJlZ2lzdGVyXCIgdG89XCIvcmVnaXN0ZXJcIj5SZWdpc3RydWp0ZSBzZTwvcm91dGVyLWxpbms+ITwvcD5cclxuICAgICAgPEZhbmN5QnV0dG9uIGNsYXNzPVwiZ3Vlc3RCdXR0b25cIiB0ZXh0PVwiU2lnbiBpbiBhcyBHdWVzdFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImJsdXIgY2VsbFwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgPGZvb3Rlcj48Rm9vdGVyQ29tcG9uZW50Lz48L2Zvb3Rlcj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuIGltcG9ydCBGYW5jeUJ1dHRvbiBmcm9tICcuLi9CYXNpY0NvbXBvbmVudHMvRmFuY3lCdXR0b24udnVlJ1xyXG4gaW1wb3J0IEZvb3RlckNvbXBvbmVudCBmcm9tICcuLi9CYXNpY0NvbXBvbmVudHMvRm9vdGVyQ29tcG9uZW50LnZ1ZSdcclxuIGltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL0Jhc2ljQ29tcG9uZW50cy9JbnB1dEZpZWxkLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgY29tcG9uZW50czogeyBJbnB1dEZpZWxkLCBGYW5jeUJ1dHRvbiwgRm9vdGVyQ29tcG9uZW50IH0sXHJcbiAgbmFtZTogJ0xvZ0luQ2FudmFzQ29tcG9uZW50JyxcclxuICBwcm9wczogW1xyXG4gICAgJ3dpZHRoJ1xyXG4gIF0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHZhciBlcnJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVycm9yXCIpWzBdXHJcbiAgICBpZihlcnJzICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICBlcnJzID0gZXJycy50ZXh0Q29udGVudFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNzcmY6IFwiXCIsXHJcbiAgICAgIC8vIGNzcmY6IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKVxyXG4gICAgICAvLyAgICAgICAgICAgICAuZmluZChyb3cgPT4gcm93LnN0YXJ0c1dpdGgoJ2NzcmZ0b2tlbicpKVxyXG4gICAgICAvLyAgICAgICAgICAgICAuc3BsaXQoJz0nKVsxXSxcclxuICAgICAgZXJyb3JzOiBlcnJzLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xpY2tlZFJlZ2lzdGVyKCkge1xyXG4gICAgICB0aGlzLiRkYXRhLmVycm9ycyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY2FudmFzIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiB2LWJpbmQod2lkdGgpO1xyXG4gIC8qIGhlaWdodDogdi1iaW5kKGhlaWdodCk7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuLmJsdXIge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgLyogdG9wOjclOyAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8qIHdpZHRoOiB2LWJpbmQod2lkdGgpO1xyXG4gIGhlaWdodDogdi1iaW5kKGhlaWdodCk7ICovXHJcbiAgd2lkdGg6IGNhbGModi1iaW5kKHdpZHRoKSAqIDEuMDUpO1xyXG4gIC8qIGhlaWdodDogY2FsYyh2LWJpbmQoaGVpZ2h0KSAqIDEuMDUpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMTc4QjY7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNGVtKTtcclxuICAtbW96LWZpbHRlcjogYmx1cig0ZW0pO1xyXG4gIC1vLWZpbHRlcjogYmx1cig0ZW0pO1xyXG4gIC1tcy1maWx0ZXI6IGJsdXIoNGVtKTtcclxuICBmaWx0ZXI6IGJsdXIoNGVtKTtcclxuICBcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OmdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxufVxyXG4uY2VsbCB7IFxyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OjE7XHJcbn1cclxuLmxvZ29QaWN0dXJle1xyXG4gIHdpZHRoOjd2aDtcclxuICBoZWlnaHQ6YXV0bztcclxufVxyXG4ucmVnaXN0ZXJNZXNzYWdlLCAuZXJyb3JDbGFzc3sgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAwLjV2dztcclxuXHJcbn1cclxuXHJcbi5yZWdpc3Rlckxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjojNUQ1RkVGO1xyXG59XHJcbi5yZWdpc3Rlckxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiNGMTc4QjY7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmd1ZXN0QnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOjEwJTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAvKiBmb250LXNpemU6MC44dnc7ICovXHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuXHJcblxyXG59XHJcblxyXG5mb290ZXIge1xyXG5cclxucG9zaXRpb246IGFic29sdXRlO1xyXG5ib3R0b206IDEwdmg7XHJcbmxlZnQ6MDtcclxucmlnaHQ6MDtcclxuXHJcblxyXG59XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CanvasComponents/LogInCanvasComponent.vue?vue&type=template&id=52539e3d&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b8c8c6640c2aef07"; }
/******/ }();
/******/ 
/******/ }
);