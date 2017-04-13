"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _colors = require("../styles/colors");

var _Name = require("../components/Name");

var _Name2 = _interopRequireDefault(_Name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Klervi\\JS\\klervicn-resume\\components\\TitleSection.js";

// Remplacer par des sections génériques ou garder ça ?
exports.default = function (_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = (0, _objectWithoutProperties3.default)(_ref, ["style"]);

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Name2.default, { name: "Klervi Corbel", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Titre"), _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Photo"));
};