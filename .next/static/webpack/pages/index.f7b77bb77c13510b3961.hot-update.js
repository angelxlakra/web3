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

      (0,_home_angel_projects_web3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(60)).forEach(function () {
        var eth = document.createElement("img");
        eth.setAttribute("src", "/eth.png");
        eth.setAttribute("class", "star");
        eth.style.height = "4rem";
        eth.style.position = "absolute";
        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(eth, {
          autoAlpha: 0,
          x: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random(0, 2000, 200),
          y: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random(0, 1000, 150)
        }, {
          autoAlpha: 0.1,
          duration: 1
        });
        console.log("hello");
        ethField.appendChild(eth);
      });
    }
  });

  var handleMouseMove = function handleMouseMove() {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EthField, {
      className: "ethField",
      zIndex: 1,
      height: "100vh",
      onMouseMove: handleMouseMove
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
        lineNumber: 34,
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
        lineNumber: 42,
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
          lineNumber: 52,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZUNvbXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVDb21wIiwidXNlRWZmZWN0IiwiZXRoRmllbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBcnJheSIsImZvckVhY2giLCJldGgiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImdzYXAiLCJhdXRvQWxwaGEiLCJ4IiwieSIsImR1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwiaGFuZGxlTW91c2VNb3ZlIiwibW9iaWxlWHMiLCJ0YWJsZXRNZCIsIkRvY3VtZW50YXRpb25CdXR0b24iLCJzdHlsZWQiLCJCb3giLCJwcm9wcyIsIkV0aEZpZWxkIiwicHJvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CQyxrREFBUyxDQUFDLFlBQU07QUFDWixjQUFxQjtBQUNqQixVQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsRUFBNEMsQ0FBNUMsQ0FBakI7O0FBRUEsa0lBQUlDLEtBQUssQ0FBQyxFQUFELENBQVQsRUFBZUMsT0FBZixDQUF1QixZQUFNO0FBQ3pCLFlBQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsV0FBRyxDQUFDRSxZQUFKLENBQWlCLEtBQWpCLEVBQXdCLFVBQXhCO0FBQ0FGLFdBQUcsQ0FBQ0UsWUFBSixDQUFpQixPQUFqQixFQUEwQixNQUExQjtBQUNBRixXQUFHLENBQUNHLEtBQUosQ0FBVUMsTUFBVixHQUFtQixNQUFuQjtBQUNBSixXQUFHLENBQUNHLEtBQUosQ0FBVUUs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QSxJQUFNQyxRQUFRLEdBQUdILDBEQUFNLENBQUNDLG9EQUFELENBQU4sQ0FBWSxVQUFBRyxJQUFJO0FBQUE7QUFBQSxDQUFoQixDQUFqQjtBQUlBLCtEQUFlN0IsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mN2I3N2JiNzdjMTM1MTBiMzk2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQC9jb21wb25lbnRzL0JveCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IEhvbWVDb21wID0gKCkgPT4ge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgY29uc3QgZXRoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXRoRmllbGRcIilbMF07XG5cbiAgICAgICAgICAgIFsuLi5BcnJheSg2MCldLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgZXRoLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9ldGgucG5nXCIpO1xuICAgICAgICAgICAgICAgIGV0aC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN0YXJcIik7XG4gICAgICAgICAgICAgICAgZXRoLnN0eWxlLmhlaWdodCA9IFwiNHJlbVwiO1xuICAgICAgICAgICAgICAgIGV0aC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICBnc2FwLmZyb21UbyhldGgsIHsgYXV0b0FscGhhOiAwLCB4OiBnc2FwLnV0aWxzLnJhbmRvbSgwLCAyMDAwLCAyMDApLCB5OiBnc2FwLnV0aWxzLnJhbmRvbSgwLCAxMDAwLCAxNTApIH0sIHsgYXV0b0FscGhhOiAwLjEsIGR1cmF0aW9uOiAxIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgICAgICAgICAgZXRoRmllbGQuYXBwZW5kQ2hpbGQoZXRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoKSA9PiB7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxFdGhGaWVsZCBjbGFzc05hbWU9XCJldGhGaWVsZFwiIHpJbmRleD17MX0gaGVpZ2h0PVwiMTAwdmhcIiBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfS8+XG4gICAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgICA8Qm94IGNvbHVtbiBjZW50ZXIgdGV4dEFsaWduPVwiY2VudGVyXCIgbXg9XCIxLjhyZW1cIj5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiMTEwcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMy4ycmVtXCIsIHRhYmxldE1kOiBcIjYuOHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIG10PXtbXCIxNHJlbVwiLCBcIjI2cmVtXCJdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInB1cnBsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEludGVyYWN0IFlvdXIgQXBwcyB3aXRoIHRoZSBFdGhlcmV1bSBCbG9ja2NoYWluXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBtb2JpbGVYczogXCIxLjZyZW1cIiwgdGFibGV0TWQ6IFwiMi40cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MHJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDAwXCJcbiAgICAgICAgICAgICAgICAgICAgbXQ9e3sgbW9iaWxlWHM6IFwiMnJlbVwiLCB0YWJsZXRNZDogXCI1cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwdXJwbGUtNTBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgV2ViMy5qcyBpcyBhIGNvbGxlY3Rpb24gb2YgbGlicmFyaWVzIHRoYXQgYWxsb3cgeW91IHRvIGludGVyYWN0IHdpdGggYSBsb2NhbCBvciByZW1vdGUgZXRoZXJldW0gbm9kZSB1c2luZyBIVFRQLCBJUEMgb3IgV2ViU29ja2V0LlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYjNqcy5yZWFkdGhlZG9jcy5pby9lbi92MS4zLjQvXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgPERvY3VtZW50YXRpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnPVwicHVycGxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMS42cmVtXCIsIHRhYmxldE1kOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcD17eyBtb2JpbGVYczogXCIxcmVtXCIsIHRhYmxldE1kOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9e3sgbW9iaWxlWHM6IFwiMnJlbVwiLCB0YWJsZXRNZDogXCI0cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3ggPlxuICAgICk7XG59XG5cblxuY29uc3QgRG9jdW1lbnRhdGlvbkJ1dHRvbiA9IHN0eWxlZChCb3gpKHByb3BzID0+IGBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAxNTBtcztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbmApXG5cbmNvbnN0IEV0aEZpZWxkID0gc3R5bGVkKEJveCkocHJvcyA9PiBgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG5gKTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb21wOyJdLCJzb3VyY2VSb290IjoiIn0=