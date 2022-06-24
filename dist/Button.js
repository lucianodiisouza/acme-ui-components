"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(props) {
  var type = props.type;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type || 'submit',
    className: "acme-button"
  }, props.children);
};

var _default = Button;
exports["default"] = _default;