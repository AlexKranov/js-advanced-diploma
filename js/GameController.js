"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameController = /*#__PURE__*/function () {
  function GameController(gamePlay, stateService) {
    _classCallCheck(this, GameController);

    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  _createClass(GameController, [{
    key: "init",
    value: function init() {// TODO: add event listeners to gamePlay events
      // TODO: load saved stated from stateService
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(index) {// TODO: react to click
    }
  }, {
    key: "onCellEnter",
    value: function onCellEnter(index) {// TODO: react to mouse enter
    }
  }, {
    key: "onCellLeave",
    value: function onCellLeave(index) {// TODO: react to mouse leave
    }
  }]);

  return GameController;
}();

exports["default"] = GameController;