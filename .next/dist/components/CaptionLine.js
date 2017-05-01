"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Klervi\\JS\\klervicn-resume\\components\\CaptionLine.js";

exports.default = function (_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === undefined ? {} : _ref$children,
      props = (0, _objectWithoutProperties3.default)(_ref, ["children"]);

  return _react2.default.createElement("div", {
    style: {
      display: "table-cell",
      paddingLeft: 10,
      textAlign: "justify",
      fontSize: 12,
      fontStyle: "italic"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, children);
};