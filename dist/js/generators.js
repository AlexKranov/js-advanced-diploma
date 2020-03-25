"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.characterGenerator = characterGenerator;
exports.generateTeam = generateTeam;

require("regenerator-runtime/runtime");

var _marked = /*#__PURE__*/regeneratorRuntime.mark(characterGenerator);

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
function characterGenerator(allowedTypes, maxLevel) {
  return regeneratorRuntime.wrap(function characterGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function generateTeam(allowedTypes, maxLevel, characterCount) {// TODO: write logic here
}