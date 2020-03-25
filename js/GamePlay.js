"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GamePlay = /*#__PURE__*/function () {
  function GamePlay() {
    _classCallCheck(this, GamePlay);

    this.boardSize = 8;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
    this.cellClickListeners = [];
    this.cellEnterListeners = [];
    this.cellLeaveListeners = [];
    this.newGameListeners = [];
    this.saveGameListeners = [];
    this.loadGameListeners = [];
  }

  _createClass(GamePlay, [{
    key: "bindToDOM",
    value: function bindToDOM(container) {
      if (!(container instanceof HTMLElement)) {
        throw new Error('container is not HTMLElement');
      }

      this.container = container;
    }
    /**
     * Draws boardEl with specific theme
     *
     * @param theme
     */

  }, {
    key: "drawUi",
    value: function drawUi(theme) {
      var _this = this;

      this.checkBinding();
      this.container.innerHTML = "\n      <div class=\"controls\">\n        <button data-id=\"action-restart\" class=\"btn\">New Game</button>\n        <button data-id=\"action-save\" class=\"btn\">Save Game</button>\n        <button data-id=\"action-load\" class=\"btn\">Load Game</button>\n      </div>\n      <div class=\"board-container\">\n        <div data-id=\"board\" class=\"board\"></div>\n      </div>\n    ";
      this.newGameEl = this.container.querySelector('[data-id=action-restart]');
      this.saveGameEl = this.container.querySelector('[data-id=action-save]');
      this.loadGameEl = this.container.querySelector('[data-id=action-load]');
      this.newGameEl.addEventListener('click', function (event) {
        return _this.onNewGameClick(event);
      });
      this.saveGameEl.addEventListener('click', function (event) {
        return _this.onSaveGameClick(event);
      });
      this.loadGameEl.addEventListener('click', function (event) {
        return _this.onLoadGameClick(event);
      });
      this.boardEl = this.container.querySelector('[data-id=board]');
      this.boardEl.classList.add(theme);

      for (var i = 0; i < Math.pow(this.boardSize, 2); i += 1) {
        var cellEl = document.createElement('div');
        cellEl.classList.add('cell', 'map-tile', "map-tile-".concat((0, _utils.calcTileType)(i, this.boardSize)));
        cellEl.addEventListener('mouseenter', function (event) {
          return _this.onCellEnter(event);
        });
        cellEl.addEventListener('mouseleave', function (event) {
          return _this.onCellLeave(event);
        });
        cellEl.addEventListener('click', function (event) {
          return _this.onCellClick(event);
        });
        this.boardEl.appendChild(cellEl);
      }

      this.cells = Array.from(this.boardEl.children);
    }
    /**
     * Draws positions (with chars) on boardEl
     *
     * @param positions array of PositionedCharacter objects
     */

  }, {
    key: "redrawPositions",
    value: function redrawPositions(positions) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.cells[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cell = _step.value;
          cell.innerHTML = '';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = positions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var position = _step2.value;
          var cellEl = this.boardEl.children[position.position];
          var charEl = document.createElement('div');
          charEl.classList.add('character', position.character.type);
          var healthEl = document.createElement('div');
          healthEl.classList.add('health-level');
          var healthIndicatorEl = document.createElement('div');
          healthIndicatorEl.classList.add('health-level-indicator', "health-level-indicator-".concat((0, _utils.calcHealthLevel)(position.character.health)));
          healthIndicatorEl.style.width = "".concat(position.character.health, "%");
          healthEl.appendChild(healthIndicatorEl);
          charEl.appendChild(healthEl);
          cellEl.appendChild(charEl);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
    /**
     * Add listener to mouse enter for cell
     *
     * @param callback
     */

  }, {
    key: "addCellEnterListener",
    value: function addCellEnterListener(callback) {
      this.cellEnterListeners.push(callback);
    }
    /**
     * Add listener to mouse leave for cell
     *
     * @param callback
     */

  }, {
    key: "addCellLeaveListener",
    value: function addCellLeaveListener(callback) {
      this.cellLeaveListeners.push(callback);
    }
    /**
     * Add listener to mouse click for cell
     *
     * @param callback
     */

  }, {
    key: "addCellClickListener",
    value: function addCellClickListener(callback) {
      this.cellClickListeners.push(callback);
    }
    /**
     * Add listener to "New Game" button click
     *
     * @param callback
     */

  }, {
    key: "addNewGameListener",
    value: function addNewGameListener(callback) {
      this.newGameListeners.push(callback);
    }
    /**
     * Add listener to "Save Game" button click
     *
     * @param callback
     */

  }, {
    key: "addSaveGameListener",
    value: function addSaveGameListener(callback) {
      this.saveGameListeners.push(callback);
    }
    /**
     * Add listener to "Load Game" button click
     *
     * @param callback
     */

  }, {
    key: "addLoadGameListener",
    value: function addLoadGameListener(callback) {
      this.loadGameListeners.push(callback);
    }
  }, {
    key: "onCellEnter",
    value: function onCellEnter(event) {
      event.preventDefault();
      var index = this.cells.indexOf(event.currentTarget);
      this.cellEnterListeners.forEach(function (o) {
        return o.call(null, index);
      });
    }
  }, {
    key: "onCellLeave",
    value: function onCellLeave(event) {
      event.preventDefault();
      var index = this.cells.indexOf(event.currentTarget);
      this.cellLeaveListeners.forEach(function (o) {
        return o.call(null, index);
      });
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(event) {
      var index = this.cells.indexOf(event.currentTarget);
      this.cellClickListeners.forEach(function (o) {
        return o.call(null, index);
      });
    }
  }, {
    key: "onNewGameClick",
    value: function onNewGameClick(event) {
      event.preventDefault();
      this.newGameListeners.forEach(function (o) {
        return o.call(null);
      });
    }
  }, {
    key: "onSaveGameClick",
    value: function onSaveGameClick(event) {
      event.preventDefault();
      this.saveGameListeners.forEach(function (o) {
        return o.call(null);
      });
    }
  }, {
    key: "onLoadGameClick",
    value: function onLoadGameClick(event) {
      event.preventDefault();
      this.loadGameListeners.forEach(function (o) {
        return o.call(null);
      });
    }
  }, {
    key: "selectCell",
    value: function selectCell(index) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yellow';
      this.deselectCell(index);
      this.cells[index].classList.add('selected', "selected-".concat(color));
    }
  }, {
    key: "deselectCell",
    value: function deselectCell(index) {
      var _cell$classList;

      var cell = this.cells[index];

      (_cell$classList = cell.classList).remove.apply(_cell$classList, _toConsumableArray(Array.from(cell.classList).filter(function (o) {
        return o.startsWith('selected');
      })));
    }
  }, {
    key: "showCellTooltip",
    value: function showCellTooltip(message, index) {
      this.cells[index].title = message;
    }
  }, {
    key: "hideCellTooltip",
    value: function hideCellTooltip(index) {
      this.cells[index].title = '';
    }
  }, {
    key: "showDamage",
    value: function showDamage(index, damage) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var cell = _this2.cells[index];
        var damageEl = document.createElement('span');
        damageEl.textContent = damage;
        damageEl.classList.add('damage');
        cell.appendChild(damageEl);
        damageEl.addEventListener('animationend', function () {
          cell.removeChild(damageEl);
          resolve();
        });
      });
    }
  }, {
    key: "setCursor",
    value: function setCursor(cursor) {
      this.boardEl.style.cursor = cursor;
    }
  }, {
    key: "checkBinding",
    value: function checkBinding() {
      if (this.container === null) {
        throw new Error('GamePlay not bind to DOM');
      }
    }
  }], [{
    key: "showError",
    value: function showError(message) {
      alert(message);
    }
  }, {
    key: "showMessage",
    value: function showMessage(message) {
      alert(message);
    }
  }]);

  return GamePlay;
}();

exports["default"] = GamePlay;