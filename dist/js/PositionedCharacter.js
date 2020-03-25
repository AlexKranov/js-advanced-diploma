"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Character = _interopRequireDefault(require("./Character"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PositionedCharacter = function PositionedCharacter(character, position) {
  _classCallCheck(this, PositionedCharacter);

  if (!(character instanceof _Character["default"])) {
    throw new Error('character must be instance of Character or its children');
  }

  if (typeof position !== 'number') {
    throw new Error('position must be a number');
  }

  this.character = character;
  this.position = position;
};

exports["default"] = PositionedCharacter;