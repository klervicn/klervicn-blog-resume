"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Klervi\\JS\\klervicn-resume\\components\\LineLabel.js";

// Aligné à gacuche, en gras ?
exports.default = function (_ref) {
  var label = _ref.label,
      style = _ref.style,
      _ref$picto = _ref.picto,
      picto = _ref$picto === undefined ? {} : _ref$picto,
      props = (0, _objectWithoutProperties3.default)(_ref, ["label", "style", "picto"]);

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, label));
};