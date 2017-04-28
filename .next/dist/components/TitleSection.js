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

var _Name = require("../components/Name");

var _Name2 = _interopRequireDefault(_Name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\kcorbel\\Documents\\JS\\klervicn-resume\\components\\TitleSection.js";

exports.default = function (_ref) {
  var style = _ref.style,
      title = _ref.title,
      _ref$name = _ref.name,
      name = _ref$name === undefined ? {} : _ref$name,
      props = (0, _objectWithoutProperties3.default)(_ref, ["style", "title", "name"]);

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("div", { style: { display: "table-cell" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("img", {
    style: {
      height: 128
    },
    src: "../static/picture.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), _react2.default.createElement("div", {
    style: {
      display: "table-cell",
      verticalAlign: "top",
      paddingLeft: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_Name2.default, { style: {}, name: name, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement("h2", { style: {}, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, title)));
};