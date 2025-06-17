/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./common/components/modal/animations/ModalManager.animations.ts":
/*!***********************************************************************!*\
  !*** ./common/components/modal/animations/ModalManager.animations.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgAnimation\": () => (/* binding */ bgAnimation),\n/* harmony export */   \"modalAnimation\": () => (/* binding */ modalAnimation)\n/* harmony export */ });\n/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/constants/easings */ \"./common/constants/easings.ts\");\n\nconst transition = {\n    ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EASE\n};\nconst bgAnimation = {\n    closed: {\n        opacity: 0,\n        transition\n    },\n    opened: {\n        opacity: 1,\n        transition\n    }\n};\nconst modalAnimation = {\n    closed: {\n        y: -100,\n        transition\n    },\n    opened: {\n        y: 0,\n        transition\n    },\n    exited: {\n        y: 100,\n        transition\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9tb2RhbC9hbmltYXRpb25zL01vZGFsTWFuYWdlci5hbmltYXRpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDtBQUV6RCxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDO0lBQUNDLElBQUksRUFBRUYsbUVBQVk7QUFBQyxDQUFDO0FBRWxDLEtBQUssQ0FBQ0csV0FBVyxHQUFHLENBQUM7SUFDMUJDLE1BQU0sRUFBRSxDQUFDO1FBQUNDLE9BQU8sRUFBRSxDQUFDO1FBQUVKLFVBQVU7SUFBQyxDQUFDO0lBQ2xDSyxNQUFNLEVBQUUsQ0FBQztRQUFDRCxPQUFPLEVBQUUsQ0FBQztRQUFFSixVQUFVO0lBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRU0sS0FBSyxDQUFDTSxjQUFjLEdBQUcsQ0FBQztJQUM3QkgsTUFBTSxFQUFFLENBQUM7UUFBQ0ksQ0FBQyxHQUFHLEdBQUc7UUFBRVAsVUFBVTtJQUFDLENBQUM7SUFDL0JLLE1BQU0sRUFBRSxDQUFDO1FBQUNFLENBQUMsRUFBRSxDQUFDO1FBQUVQLFVBQVU7SUFBQyxDQUFDO0lBQzVCUSxNQUFNLEVBQUUsQ0FBQztRQUFDRCxDQUFDLEVBQUUsR0FBRztRQUFFUCxVQUFVO0lBQUMsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2hpdGVib2FyZC8uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMudHM/NzZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERUZBVUxUX0VBU0UgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3NcIjtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7IGVhc2U6IERFRkFVTFRfRUFTRSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJnQW5pbWF0aW9uID0ge1xyXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB0cmFuc2l0aW9uIH0sXHJcbiAgb3BlbmVkOiB7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb24gfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbEFuaW1hdGlvbiA9IHtcclxuICBjbG9zZWQ6IHsgeTogLTEwMCwgdHJhbnNpdGlvbiB9LFxyXG4gIG9wZW5lZDogeyB5OiAwLCB0cmFuc2l0aW9uIH0sXHJcbiAgZXhpdGVkOiB7IHk6IDEwMCwgdHJhbnNpdGlvbiB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiREVGQVVMVF9FQVNFIiwidHJhbnNpdGlvbiIsImVhc2UiLCJiZ0FuaW1hdGlvbiIsImNsb3NlZCIsIm9wYWNpdHkiLCJvcGVuZWQiLCJtb2RhbEFuaW1hdGlvbiIsInkiLCJleGl0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/components/modal/animations/ModalManager.animations.ts\n");

/***/ }),

/***/ "./common/components/modal/components/ModalManager.tsx":
/*!*************************************************************!*\
  !*** ./common/components/modal/components/ModalManager.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/recoil/modal */ \"./common/recoil/modal/index.ts\");\n/* harmony import */ var _portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/components/Portal */ \"./common/components/portal/components/Portal.ts\");\n/* harmony import */ var _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/ModalManager.animations */ \"./common/components/modal/animations/ModalManager.animations.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst ModalManager = ()=>{\n    const [{ opened , modal  }, setModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const { 0: portalNode , 1: setPortalNode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!portalNode) {\n            const node = document.getElementById(\"portal\");\n            if (node) setPortalNode(node);\n            return;\n        }\n        if (opened) {\n            portalNode.style.pointerEvents = \"all\";\n        } else {\n            portalNode.style.pointerEvents = \"none\";\n        }\n    }, [\n        opened,\n        portalNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"absolute z-40 flex min-h-full w-full items-center justify-center bg-black/80\",\n            onClick: ()=>setModal({\n                    modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    opened: false\n                })\n            ,\n            variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.bgAnimation,\n            initial: \"closed\",\n            animate: opened ? \"opened\" : \"closed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: opened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.modalAnimation,\n                    initial: \"closed\",\n                    animate: \"opened\",\n                    exit: \"exited\",\n                    onClick: (e)=>e.stopPropagation()\n                    ,\n                    className: \"p-6\",\n                    children: modal\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalManager);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL01vZGFsTWFuYWdlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBRVk7QUFDaEI7QUFFTTtBQUVNO0FBSUw7QUFFOUMsS0FBSyxDQUFDUyxZQUFZLE9BQVMsQ0FBQztJQUMxQixLQUFLLEVBQUUsQ0FBQyxDQUFDQyxNQUFNLEdBQUVDLEtBQUssRUFBQyxDQUFDLEVBQUVDLFFBQVEsSUFBSVIsc0RBQWMsQ0FBQ0MsNERBQVM7SUFFOUQsS0FBSyxNQUFFUSxVQUFVLE1BQUVDLGFBQWEsTUFBSWIsK0NBQVE7SUFFNUNELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsR0FBR2EsVUFBVSxFQUFFLENBQUM7WUFDaEIsS0FBSyxDQUFDRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQVE7WUFDN0MsRUFBRSxFQUFFRixJQUFJLEVBQUVELGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7WUFDOUIsTUFBTTtRQUNSLENBQUM7UUFFRCxFQUFFLEVBQUVMLE1BQU0sRUFBRSxDQUFDO1lBQ1hHLFVBQVUsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBSyxLQUFDO1FBQ3pDLENBQUMsTUFBTSxDQUFDO1lBQ05OLFVBQVUsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBTSxNQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ1Q7UUFBQUEsTUFBTTtRQUFFRyxVQUFVO0lBQUEsQ0FBQyxDQUFDLENBQUM7SUFFekIsTUFBTSw2RUFDSFAsaUVBQU07OEZBQ0pILHFEQUFVO1lBQ1RrQixTQUFTLEVBQUMsQ0FBOEU7WUFDeEZDLE9BQU8sTUFBUVYsUUFBUSxDQUFDLENBQUM7b0JBQUNELEtBQUs7b0JBQVNELE1BQU0sRUFBRSxLQUFLO2dCQUFDLENBQUM7O1lBQ3ZEYSxRQUFRLEVBQUVoQiw0RUFBVztZQUNyQmlCLE9BQU8sRUFBQyxDQUFRO1lBQ2hCQyxPQUFPLEVBQUVmLE1BQU0sR0FBRyxDQUFRLFVBQUcsQ0FBUTtrR0FFcENSLDBEQUFlOzBCQUNiUSxNQUFNLGdGQUNKUCxxREFBVTtvQkFDVG9CLFFBQVEsRUFBRWYsK0VBQWM7b0JBQ3hCZ0IsT0FBTyxFQUFDLENBQVE7b0JBQ2hCQyxPQUFPLEVBQUMsQ0FBUTtvQkFDaEJDLElBQUksRUFBQyxDQUFRO29CQUNiSixPQUFPLEdBQUdLLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxlQUFlOztvQkFDakNQLFNBQVMsRUFBQyxDQUFLOzhCQUVkVixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEIsQ0FBQztBQUVELGlFQUFlRixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XaGl0ZWJvYXJkLy4vY29tbW9uL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9Nb2RhbE1hbmFnZXIudHN4PzE5ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmltcG9ydCBtb2RhbEF0b20gZnJvbSBcIkAvY29tbW9uL3JlY29pbC9tb2RhbFwiO1xyXG5cclxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vLi4vcG9ydGFsL2NvbXBvbmVudHMvUG9ydGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgYmdBbmltYXRpb24sXHJcbiAgbW9kYWxBbmltYXRpb24sXHJcbn0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnNcIjtcclxuXHJcbmNvbnN0IE1vZGFsTWFuYWdlciA9ICgpID0+IHtcclxuICBjb25zdCBbeyBvcGVuZWQsIG1vZGFsIH0sIHNldE1vZGFsXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsQXRvbSk7XHJcblxyXG4gIGNvbnN0IFtwb3J0YWxOb2RlLCBzZXRQb3J0YWxOb2RlXSA9IHVzZVN0YXRlPEhUTUxFbGVtZW50PigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFwb3J0YWxOb2RlKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRhbFwiKTtcclxuICAgICAgaWYgKG5vZGUpIHNldFBvcnRhbE5vZGUobm9kZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgIHBvcnRhbE5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3J0YWxOb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9LCBbb3BlbmVkLCBwb3J0YWxOb2RlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9ydGFsPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotNDAgZmxleCBtaW4taC1mdWxsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svODBcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsKHsgbW9kYWw6IDw+PC8+LCBvcGVuZWQ6IGZhbHNlIH0pfVxyXG4gICAgICAgIHZhcmlhbnRzPXtiZ0FuaW1hdGlvbn1cclxuICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcclxuICAgICAgICBhbmltYXRlPXtvcGVuZWQgPyBcIm9wZW5lZFwiIDogXCJjbG9zZWRcIn1cclxuICAgICAgPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICB2YXJpYW50cz17bW9kYWxBbmltYXRpb259XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cIm9wZW5lZFwiXHJcbiAgICAgICAgICAgICAgZXhpdD1cImV4aXRlZFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttb2RhbH1cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9Qb3J0YWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsTWFuYWdlcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlUmVjb2lsU3RhdGUiLCJtb2RhbEF0b20iLCJQb3J0YWwiLCJiZ0FuaW1hdGlvbiIsIm1vZGFsQW5pbWF0aW9uIiwiTW9kYWxNYW5hZ2VyIiwib3BlbmVkIiwibW9kYWwiLCJzZXRNb2RhbCIsInBvcnRhbE5vZGUiLCJzZXRQb3J0YWxOb2RlIiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/components/modal/components/ModalManager.tsx\n");

/***/ }),

/***/ "./common/components/portal/components/Portal.ts":
/*!*******************************************************!*\
  !*** ./common/components/portal/components/Portal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Portal = ({ children  })=>{\n    const { 0: portal , 1: setPortal  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const node = document.getElementById(\"portal\");\n        if (node) setPortal(node);\n    }, []);\n    if (!portal) return null;\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9wb3J0YWwvY29tcG9uZW50cy9Qb3J0YWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDSDtBQUN4QyxLQUFLLENBQUNHLE1BQU0sSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBNEMsQ0FBQyxHQUFLLENBQUM7SUFDM0UsS0FBSyxNQUFFQyxNQUFNLE1BQUVDLFNBQVMsTUFBSUwsK0NBQVE7SUFDcENELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ08sSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFRO1FBQzdDLEVBQUUsRUFBRUYsSUFBSSxFQUFFRCxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsRUFBRSxHQUFHRixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDeEIsTUFBTSxDQUFDSCx1REFBWSxDQUFDRSxRQUFRLEVBQUVDLE1BQU07QUFDdEMsQ0FBQztBQUVELGlFQUFlRixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XaGl0ZWJvYXJkLy4vY29tbW9uL2NvbXBvbmVudHMvcG9ydGFsL2NvbXBvbmVudHMvUG9ydGFsLnRzP2Y1OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmNvbnN0IFBvcnRhbCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9KSA9PiB7XHJcbiAgY29uc3QgW3BvcnRhbCwgc2V0UG9ydGFsXSA9IHVzZVN0YXRlPEhUTUxFbGVtZW50PigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0YWxcIik7XHJcbiAgICBpZiAobm9kZSkgc2V0UG9ydGFsKG5vZGUpO1xyXG4gIH0sIFtdKTtcclxuICBpZiAoIXBvcnRhbCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgcG9ydGFsKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRhbDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUG9ydGFsIiwiUG9ydGFsIiwiY2hpbGRyZW4iLCJwb3J0YWwiLCJzZXRQb3J0YWwiLCJub2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/components/portal/components/Portal.ts\n");

/***/ }),

/***/ "./common/constants/easings.ts":
/*!*************************************!*\
  !*** ./common/constants/easings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_EASE\": () => (/* binding */ DEFAULT_EASE)\n/* harmony export */ });\nconst DEFAULT_EASE = [\n    0.6,\n    0.01,\n    -0.05,\n    0.9\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsWUFBWSxHQUFHLENBQUM7QUFBQSxPQUFHO0FBQUUsUUFBSTtLQUFHLElBQUk7QUFBRSxPQUFHO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1doaXRlYm9hcmQvLi9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3MudHM/NjM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgREVGQVVMVF9FQVNFID0gWzAuNiwgMC4wMSwgLTAuMDUsIDAuOV07XHJcbiJdLCJuYW1lcyI6WyJERUZBVUxUX0VBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/constants/easings.ts\n");

/***/ }),

/***/ "./common/recoil/modal/index.ts":
/*!**************************************!*\
  !*** ./common/recoil/modal/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useModal\": () => (/* reexport safe */ _modal_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)\n/* harmony export */ });\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.atom */ \"./common/recoil/modal/modal.atom.tsx\");\n/* harmony import */ var _modal_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.hooks */ \"./common/recoil/modal/modal.hooks.tsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_modal_atom__WEBPACK_IMPORTED_MODULE_0__.modalAtom);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDQTtBQUV4QyxpRUFBZUEsa0RBQVMsRUFBQztBQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2hpdGVib2FyZC8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvaW5kZXgudHM/MmFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RhbEF0b20gfSBmcm9tIFwiLi9tb2RhbC5hdG9tXCI7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWwuaG9va3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZGFsQXRvbTtcclxuXHJcbmV4cG9ydCB7IHVzZU1vZGFsIH07XHJcbiJdLCJuYW1lcyI6WyJtb2RhbEF0b20iLCJ1c2VNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/recoil/modal/index.ts\n");

/***/ }),

/***/ "./common/recoil/modal/modal.atom.tsx":
/*!********************************************!*\
  !*** ./common/recoil/modal/modal.atom.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalAtom\": () => (/* binding */ modalAtom)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst modalAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    key: \"modal\",\n    default: {\n        modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        opened: false\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL21vZGFsLmF0b20udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUV0QixLQUFLLENBQUNDLFNBQVMsR0FBR0QsNENBQUksQ0FHMUIsQ0FBQztJQUNGRSxHQUFHLEVBQUUsQ0FBTztJQUNaQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxLQUFLO1FBQ0xDLE1BQU0sRUFBRSxLQUFLO0lBQ2YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XaGl0ZWJvYXJkLy4vY29tbW9uL3JlY29pbC9tb2RhbC9tb2RhbC5hdG9tLnRzeD8wMTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kYWxBdG9tID0gYXRvbTx7XHJcbiAgbW9kYWw6IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXTtcclxuICBvcGVuZWQ6IGJvb2xlYW47XHJcbn0+KHtcclxuICBrZXk6IFwibW9kYWxcIixcclxuICBkZWZhdWx0OiB7XHJcbiAgICBtb2RhbDogPD48Lz4sXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiYXRvbSIsIm1vZGFsQXRvbSIsImtleSIsImRlZmF1bHQiLCJtb2RhbCIsIm9wZW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/recoil/modal/modal.atom.tsx\n");

/***/ }),

/***/ "./common/recoil/modal/modal.hooks.tsx":
/*!*********************************************!*\
  !*** ./common/recoil/modal/modal.hooks.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModal\": () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.atom */ \"./common/recoil/modal/modal.atom.tsx\");\n\n\n\nconst useModal = ()=>{\n    const setModal = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_modal_atom__WEBPACK_IMPORTED_MODULE_2__.modalAtom);\n    const openModal = (modal)=>setModal({\n            modal,\n            opened: true\n        })\n    ;\n    const closeModal = ()=>setModal({\n            modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            opened: false\n        })\n    ;\n    return {\n        openModal,\n        closeModal\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL21vZGFsLmhvb2tzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBDO0FBRUY7QUFFeEMsS0FBSyxDQUFDRSxRQUFRLE9BQVMsQ0FBQztJQUN0QixLQUFLLENBQUNDLFFBQVEsR0FBR0gseURBQWlCLENBQUNDLGtEQUFTO0lBRTVDLEtBQUssQ0FBQ0csU0FBUyxJQUFJQyxLQUFrQyxHQUNuREYsUUFBUSxDQUFDLENBQUM7WUFBQ0UsS0FBSztZQUFFQyxNQUFNLEVBQUUsSUFBSTtRQUFDLENBQUM7O0lBRWxDLEtBQUssQ0FBQ0MsVUFBVSxPQUFTSixRQUFRLENBQUMsQ0FBQztZQUFDRSxLQUFLO1lBQVNDLE1BQU0sRUFBRSxLQUFLO1FBQUMsQ0FBQzs7SUFFakUsTUFBTSxDQUFDLENBQUM7UUFBQ0YsU0FBUztRQUFFRyxVQUFVO0lBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2hpdGVib2FyZC8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvbW9kYWwuaG9va3MudHN4Pzg1NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5pbXBvcnQgeyBtb2RhbEF0b20gfSBmcm9tIFwiLi9tb2RhbC5hdG9tXCI7XHJcblxyXG5jb25zdCB1c2VNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBzZXRNb2RhbCA9IHVzZVNldFJlY29pbFN0YXRlKG1vZGFsQXRvbSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChtb2RhbDogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdKSA9PlxyXG4gICAgc2V0TW9kYWwoeyBtb2RhbCwgb3BlbmVkOiB0cnVlIH0pO1xyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoeyBtb2RhbDogPD48Lz4sIG9wZW5lZDogZmFsc2UgfSk7XHJcblxyXG4gIHJldHVybiB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlTW9kYWwgfTtcclxuIl0sIm5hbWVzIjpbInVzZVNldFJlY29pbFN0YXRlIiwibW9kYWxBdG9tIiwidXNlTW9kYWwiLCJzZXRNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwib3BlbmVkIiwiY2xvc2VNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/recoil/modal/modal.hooks.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/styles/global.css */ \"./common/styles/global.css\");\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components/modal/components/ModalManager */ \"./common/components/modal/components/ModalManager.tsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__]);\n_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"ThinkPad | Real-Time Whiteboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\huehue\\\\hehehe\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFUjtBQUNtQjtBQUNaO0FBRXlDO0FBRTFCO0FBRWxELEtBQUssQ0FBQ0ksR0FBRyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxHQUFLLENBQUM7SUFDbkQsTUFBTTs7d0ZBRUROLGtEQUFJOztnR0FDRk8sQ0FBSztrQ0FBQyxDQUErQjs7Ozs7O2dHQUNyQ0MsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBRXJDUiw4Q0FBVTs7Z0dBQ1JELDBEQUFjOzs7OztnR0FDZEUsd0ZBQVk7Ozs7O2dHQUNaRSxTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1doaXRlYm9hcmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2NvbW1vbi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSBcIkAvY29tbW9uL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9Nb2RhbE1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGhpbmtQYWQgfCBSZWFsLVRpbWUgV2hpdGVib2FyZDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxSZWNvaWxSb290PlxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDxNb2RhbE1hbmFnZXIgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUmVjb2lsUm9vdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVG9hc3RDb250YWluZXIiLCJSZWNvaWxSb290IiwiTW9kYWxNYW5hZ2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./common/styles/global.css":
/*!**********************************!*\
  !*** ./common/styles/global.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();