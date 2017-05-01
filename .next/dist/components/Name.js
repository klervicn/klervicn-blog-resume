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

var _jsxFileName = "C:\\Users\\Klervi\\JS\\klervicn-resume\\components\\Name.js";

exports.default = function (_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? {} : _ref$name,
      props = (0, _objectWithoutProperties3.default)(_ref, ["name"]);

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