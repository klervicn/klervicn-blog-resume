"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _TitleSection = require("../components/TitleSection");

var _TitleSection2 = _interopRequireDefault(_TitleSection);

var _HeadSection = require("../components/HeadSection");

var _HeadSection2 = _interopRequireDefault(_HeadSection);

var _LineLabel = require("../components/LineLabel");

var _LineLabel2 = _interopRequireDefault(_LineLabel);

var _Line = require("../components/Line");

var _Line2 = _interopRequireDefault(_Line);

var _CaptionLine = require("../components/CaptionLine");

var _CaptionLine2 = _interopRequireDefault(_CaptionLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Klervi\\JS\\klervicn-resume\\pages\\index.js?entry";


var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "Klervi Corbel"))), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_TitleSection2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement("div", { className: "PersonalInformation", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_HeadSection2.default, { name: "Informations personnelles", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Adresse", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(_Line2.default, { content: "6 rue Delouvain 75019 Paris", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_CaptionLine2.default, { caption: "Ecole CS2i", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Mail", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Age", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Tel", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Permis", __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement("div", { className: "Studies", __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_HeadSection2.default, { name: "Formation", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "2015", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "2014", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), _react2.default.createElement("div", { className: "Skills", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_HeadSection2.default, { name: "Comp\xE9tences techniques", __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Anglais", __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Espagnol", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Langages", __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Logiciels", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement("div", { className: "ProfessionalExperiences", __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_HeadSection2.default, { name: "Exp\xE9riences Professionnelles", __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Ubisoft", __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Cognizant", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Auto-entrepreneur", __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Gamac Informatique", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement("div", { className: "Others", __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_HeadSection2.default, { name: "Loisirs et autres activit\xE9s", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Loutres", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Bernards l'ermite", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Emeus", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_LineLabel2.default, { label: "Sharkyfication", __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })));
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;