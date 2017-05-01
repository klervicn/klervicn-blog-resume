"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Klervi\\JS\\klervicn-resume\\components\\LineContent.js";

exports.default = function (_ref) {
  var children = _ref.children,
      caption = _ref.caption,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = (0, _objectWithoutProperties3.default)(_ref, ["children", "caption", "style"]);

  return _react2.default.createElement("div", {
    style: {
      display: "table-cell",
      paddingLeft: 30,
      textAlign: "justify",
      fontSize: 13
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, children, _react2.default.createElement("p", {
    style: {
      display: "table-cell",
      textAlign: "justify",
      fontSize: 11,
      fontStyle: "italic"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, caption));
};