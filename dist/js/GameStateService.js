"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameStateService = /*#__PURE__*/function () {
  function GameStateService(storage) {
    _classCallCheck(this, GameStateService);

    this.storage = storage;
  }

  _createClass(GameStateService, [{
    key: "save",
    value: function save(state) {
      this.storage.setItem('state', JSON.stringify(state));
    }
  }, {
    key: "load",
    value: function load() {
      try {
        return JSON.parse(this.storage.getItem('state'));
      } catch (e) {
        throw new Error('Invalid state');
      }
    }
  }]);

  return GameStateService;
}();

exports["default"] = GameStateService;