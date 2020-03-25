"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function Character(level) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'generic';

  _classCallCheck(this, Character);

  this.level = level;
  this.attack = 0;
  this.defence = 0;
  this.health = 50;
  this.type = type; // TODO: throw error if user use "new Character()"
};

exports["default"] = Character;