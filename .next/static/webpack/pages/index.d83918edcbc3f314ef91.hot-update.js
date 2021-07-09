self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/containers/HomeComp/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/HomeComp/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_angel_projects_web3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/angel/projects/web3/src/containers/HomeComp/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var HomeComp = function HomeComp() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (true) {
      var ethField = document.getElementsByClassName("ethField")[0];

      (0,_home_angel_projects_web3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(80)).forEach(function () {
        var eth = document.createElement("img");
        eth.setAttribute("src", "/eth.png");
        eth.setAttribute("class", "star");
        eth.style.height = "4rem";
        eth.style.opacity = "0.2";
        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(eth, {
          autoAlpha: 0,
          x: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random([100, 200, 300, 400, 500]),
          y: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random([100, 200, 300, 400, 500])
        }, {
          autoAlpha: 0.2,
          duration: 1
        });
        console.log("hello");
        ethField.appendChild(eth);
      });
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EthField, {
      className: "ethField",
      zIndex: 1,
      height: "100vh",
      border: "1px solid black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
      column: true,
      center: true,
      textAlign: "center",
      mx: "1.8rem",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
        maxWidth: "110rem",
        fontSize: {
          mobileXs: "3.2rem",
          tabletMd: "6.8rem"
        },
        mt: ["14rem", "26rem"],
        color: "purple-text",
        children: "Interact Your Apps with the Ethereum Blockchain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
        fontSize: {
          mobileXs: "1.6rem",
          tabletMd: "2.4rem"
        },
        maxWidth: "60rem",
        fontWeight: "6000",
        mt: {
          mobileXs: "2rem",
          tabletMd: "5rem"
        },
        color: "purple-50",
        children: "Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://web3js.readthedocs.io/en/v1.3.4/",
        target: "_self",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DocumentationButton, {
          as: "button",
          bg: "purple-text",
          fontSize: {
            mobileXs: "1.6rem",
            tabletMd: "2rem"
          },
          p: {
            mobileXs: "1rem",
            tabletMd: "2rem"
          },
          mt: {
            mobileXs: "2rem",
            tabletMd: "4rem"
          },
          border: "none",
          borderRadius: "0.5rem",
          color: "white-100",
          cursor: "pointer",
          children: "Documentation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(HomeComp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = HomeComp;
var DocumentationButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default)(function (props) {
  return "\n    transition: transform ease-in 150ms;\n    transform-origin: 50% 50%;\n    \n    &:hover {\n        transform: scale(1.05);\n    }\n";
});
var EthField = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default)(function (pros) {
  return "\n    position: fixed;\n\n";
});
/* harmony default export */ __webpack_exports__["default"] = (HomeComp);

var _c;

$RefreshReg$(_c, "HomeComp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZUNvbXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVDb21wIiwidXNlRWZmZWN0IiwiZXRoRmllbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBcnJheSIsImZvckVhY2giLCJldGgiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiZ3NhcCIsImF1dG9BbHBoYSIsIngiLCJ5IiwiZHVyYXRpb24iLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJtb2JpbGVYcyIsInRhYmxldE1kIiwiRG9jdW1lbnRhdGlvbkJ1dHRvbiIsInN0eWxlZCIsIkJveCIsInByb3BzIiwiRXRoRmllbGQiLCJwcm9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkJDLGtEQUFTLENBQUMsWUFBTTtBQUNaLGNBQXFCO0FBQ2pCLFVBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxVQUFoQyxFQUE0QyxDQUE1QyxDQUFqQjs7QUFFQSxrSUFBSUMsS0FBSyxDQUFDLEVBQUQsQ0FBVCxFQUFlQyxPQUFmLENBQXVCLFlBQU07QUFDekIsWUFBTUMsR0FBRyxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRCxXQUFHLENBQUNFLFlBQUosQ0FBaUIsS0FBakIsRUFBd0IsVUFBeEI7QUFDQUYsV0FBRyxDQUFDRSxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLE1BQTFCO0FBQ0FGLFdBQUcsQ0FBQ0csS0FBSixDQUFVQyxNQUFWLEdBQW1CLE1BQW5CO0FBQ0FKLFdBQUcsQ0FBQ0csS0FBSixDQUFVRSxPQUFWLEdBQW9CLEtBQXBCO0FB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R0FBR0gsMERBQU0sQ0FBQ0Msb0RBQUQsQ0FBTixDQUFZLFVBQUFHLElBQUk7QUFBQTtBQUFBLENBQWhCLENBQWpCO0FBSUEsK0RBQWU1QixRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ4MzkxOGVkY2JjM2YzMTRlZjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAL2NvbXBvbmVudHMvQm94JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcblxuY29uc3QgSG9tZUNvbXAgPSAoKSA9PiB7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICBjb25zdCBldGhGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJldGhGaWVsZFwiKVswXTtcblxuICAgICAgICAgICAgWy4uLkFycmF5KDgwKV0uZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBldGguc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL2V0aC5wbmdcIik7XG4gICAgICAgICAgICAgICAgZXRoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3RhclwiKTtcbiAgICAgICAgICAgICAgICBldGguc3R5bGUuaGVpZ2h0ID0gXCI0cmVtXCI7XG4gICAgICAgICAgICAgICAgZXRoLnN0eWxlLm9wYWNpdHkgPSBcIjAuMlwiO1xuICAgICAgICAgICAgICAgIGdzYXAuZnJvbVRvKGV0aCwgeyBhdXRvQWxwaGE6IDAsIHg6IGdzYXAudXRpbHMucmFuZG9tKFsxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMF0pLCB5OiBnc2FwLnV0aWxzLnJhbmRvbShbMTAwLCAyMDAsIDMwMCwgNDAwLCA1MDBdKSB9LCB7IGF1dG9BbHBoYTogMC4yLCBkdXJhdGlvbjogMSB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgICAgICAgICAgICAgIGV0aEZpZWxkLmFwcGVuZENoaWxkKGV0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxFdGhGaWVsZCBjbGFzc05hbWU9XCJldGhGaWVsZFwiIHpJbmRleD17MX0gaGVpZ2h0PVwiMTAwdmhcIiBib3JkZXI9XCIxcHggc29saWQgYmxhY2tcIiAvPlxuICAgICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgICAgPEJveCBjb2x1bW4gY2VudGVyIHRleHRBbGlnbj1cImNlbnRlclwiIG14PVwiMS44cmVtXCI+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjExMHJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IG1vYmlsZVhzOiBcIjMuMnJlbVwiLCB0YWJsZXRNZDogXCI2LjhyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICBtdD17W1wiMTRyZW1cIiwgXCIyNnJlbVwiXX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwdXJwbGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBJbnRlcmFjdCBZb3VyIEFwcHMgd2l0aCB0aGUgRXRoZXJldW0gQmxvY2tjaGFpblxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMS42cmVtXCIsIHRhYmxldE1kOiBcIjIuNHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNjByZW1cIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwMFwiXG4gICAgICAgICAgICAgICAgICAgIG10PXt7IG1vYmlsZVhzOiBcIjJyZW1cIiwgdGFibGV0TWQ6IFwiNXJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHVycGxlLTUwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFdlYjMuanMgaXMgYSBjb2xsZWN0aW9uIG9mIGxpYnJhcmllcyB0aGF0IGFsbG93IHlvdSB0byBpbnRlcmFjdCB3aXRoIGEgbG9jYWwgb3IgcmVtb3RlIGV0aGVyZXVtIG5vZGUgdXNpbmcgSFRUUCwgSVBDIG9yIFdlYlNvY2tldC5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93ZWIzanMucmVhZHRoZWRvY3MuaW8vZW4vdjEuMy40L1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEb2N1bWVudGF0aW9uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiZz1cInB1cnBsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IG1vYmlsZVhzOiBcIjEuNnJlbVwiLCB0YWJsZXRNZDogXCIycmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHA9e3sgbW9iaWxlWHM6IFwiMXJlbVwiLCB0YWJsZXRNZDogXCIycmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG10PXt7IG1vYmlsZVhzOiBcIjJyZW1cIiwgdGFibGV0TWQ6IFwiNHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICA8L0RvY3VtZW50YXRpb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94ID5cbiAgICApO1xufVxuXG5cbmNvbnN0IERvY3VtZW50YXRpb25CdXR0b24gPSBzdHlsZWQoQm94KShwcm9wcyA9PiBgXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gMTUwbXM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG5gKVxuXG5jb25zdCBFdGhGaWVsZCA9IHN0eWxlZChCb3gpKHByb3MgPT4gYFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuYCk7XG5leHBvcnQgZGVmYXVsdCBIb21lQ29tcDsiXSwic291cmNlUm9vdCI6IiJ9