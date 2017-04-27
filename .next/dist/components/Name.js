"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _colors = require("../styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Nayru\\Documents\\JS\\klervicn-resume\\components\\Name.js";

exports.default = function (_ref) {
  var name = _ref.name,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = (0, _objectWithoutProperties3.default)(_ref, ["name", "style"]);

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("h1", { style: { color: _colors.titlesColor }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, name));
};