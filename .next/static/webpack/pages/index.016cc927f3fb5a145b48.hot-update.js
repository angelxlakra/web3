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
          x: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random(100, 200),
          y: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random(100, 200)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZUNvbXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVDb21wIiwidXNlRWZmZWN0IiwiZXRoRmllbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBcnJheSIsImZvckVhY2giLCJldGgiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiZ3NhcCIsImF1dG9BbHBoYSIsIngiLCJ5IiwiZHVyYXRpb24iLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJtb2JpbGVYcyIsInRhYmxldE1kIiwiRG9jdW1lbnRhdGlvbkJ1dHRvbiIsInN0eWxlZCIsIkJveCIsInByb3BzIiwiRXRoRmllbGQiLCJwcm9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkJDLGtEQUFTLENBQUMsWUFBTTtBQUNaLGNBQXFCO0FBQ2pCLFVBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxVQUFoQyxFQUE0QyxDQUE1QyxDQUFqQjs7QUFFQSxrSUFBSUMsS0FBSyxDQUFDLEVBQUQsQ0FBVCxFQUFlQyxPQUFmLENBQXVCLFlBQU07QUFDekIsWUFBTUMsR0FBRyxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRCxXQUFHLENBQUNFLFlBQUosQ0FBaUIsS0FBakIsRUFBd0IsVUFBeEI7QUFDQUYsV0FBRyxDQUFDRSxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLE1BQTFCO0FBQ0FGLFdBQUcsQ0FBQ0csS0FBSixDQUFVQyxNQUFWLEdBQW1CLE1BQW5CO0FBQ0FKLFdBQUcsQ0FBQ0csS0FBSixDQUFVRSxPQUFWLEdBQW9CLEtBQXBCO0FB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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxNmNjOTI3ZjNmYjVhMTQ1YjQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAL2NvbXBvbmVudHMvQm94JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcblxuY29uc3QgSG9tZUNvbXAgPSAoKSA9PiB7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICBjb25zdCBldGhGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJldGhGaWVsZFwiKVswXTtcblxuICAgICAgICAgICAgWy4uLkFycmF5KDgwKV0uZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBldGguc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiL2V0aC5wbmdcIik7XG4gICAgICAgICAgICAgICAgZXRoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3RhclwiKTtcbiAgICAgICAgICAgICAgICBldGguc3R5bGUuaGVpZ2h0ID0gXCI0cmVtXCI7XG4gICAgICAgICAgICAgICAgZXRoLnN0eWxlLm9wYWNpdHkgPSBcIjAuMlwiO1xuICAgICAgICAgICAgICAgIGdzYXAuZnJvbVRvKGV0aCwgeyBhdXRvQWxwaGE6IDAsIHg6IGdzYXAudXRpbHMucmFuZG9tKDEwMCwgMjAwKSwgeTogZ3NhcC51dGlscy5yYW5kb20oMTAwLCAyMDApIH0sIHsgYXV0b0FscGhhOiAwLjIsIGR1cmF0aW9uOiAxIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgICAgICAgICAgZXRoRmllbGQuYXBwZW5kQ2hpbGQoZXRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEV0aEZpZWxkIGNsYXNzTmFtZT1cImV0aEZpZWxkXCIgekluZGV4PXsxfSBoZWlnaHQ9XCIxMDB2aFwiIGJvcmRlcj1cIjFweCBzb2xpZCBibGFja1wiIC8+XG4gICAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgICA8Qm94IGNvbHVtbiBjZW50ZXIgdGV4dEFsaWduPVwiY2VudGVyXCIgbXg9XCIxLjhyZW1cIj5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiMTEwcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMy4ycmVtXCIsIHRhYmxldE1kOiBcIjYuOHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIG10PXtbXCIxNHJlbVwiLCBcIjI2cmVtXCJdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInB1cnBsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEludGVyYWN0IFlvdXIgQXBwcyB3aXRoIHRoZSBFdGhlcmV1bSBCbG9ja2NoYWluXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBtb2JpbGVYczogXCIxLjZyZW1cIiwgdGFibGV0TWQ6IFwiMi40cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MHJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDAwXCJcbiAgICAgICAgICAgICAgICAgICAgbXQ9e3sgbW9iaWxlWHM6IFwiMnJlbVwiLCB0YWJsZXRNZDogXCI1cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwdXJwbGUtNTBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgV2ViMy5qcyBpcyBhIGNvbGxlY3Rpb24gb2YgbGlicmFyaWVzIHRoYXQgYWxsb3cgeW91IHRvIGludGVyYWN0IHdpdGggYSBsb2NhbCBvciByZW1vdGUgZXRoZXJldW0gbm9kZSB1c2luZyBIVFRQLCBJUEMgb3IgV2ViU29ja2V0LlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYjNqcy5yZWFkdGhlZG9jcy5pby9lbi92MS4zLjQvXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgPERvY3VtZW50YXRpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnPVwicHVycGxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMS42cmVtXCIsIHRhYmxldE1kOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcD17eyBtb2JpbGVYczogXCIxcmVtXCIsIHRhYmxldE1kOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9e3sgbW9iaWxlWHM6IFwiMnJlbVwiLCB0YWJsZXRNZDogXCI0cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3ggPlxuICAgICk7XG59XG5cblxuY29uc3QgRG9jdW1lbnRhdGlvbkJ1dHRvbiA9IHN0eWxlZChCb3gpKHByb3BzID0+IGBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAxNTBtcztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbmApXG5cbmNvbnN0IEV0aEZpZWxkID0gc3R5bGVkKEJveCkocHJvcyA9PiBgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG5gKTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb21wOyJdLCJzb3VyY2VSb290IjoiIn0=