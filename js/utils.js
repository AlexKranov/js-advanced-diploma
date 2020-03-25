"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcTileType = calcTileType;
exports.calcHealthLevel = calcHealthLevel;

function calcTileType(index, boardSize) {
  // TODO: write logic here
  return 'center';
}

function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}