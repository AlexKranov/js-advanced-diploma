export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    this.walkRange = 0;
    this.attackRange = 0;
    // TODO: throw error if user use "new Character()"
    if (new.target === Character) {
      throw new Error('Ошибка - new Character()');
    }
  }

  showInfo() {
    return `🎖 ${this.level} ⚔ ${this.attack} 🛡 ${this.defence} ❤ ${this.health}`;
  }


  getRange() {
    return { walk: this.walkRange, attack: this.attackRange };
  }
}
