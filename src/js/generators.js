/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const typePlayer = Math.floor(Math.random() * allowedTypes.length);
    const level = Math.floor(Math.random() * maxLevel) + 1;
    yield new allowedTypes[typePlayer](level);
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const hero = characterGenerator(allowedTypes, maxLevel);
  const playerTeam = [];

  for (let i = 0; i < characterCount; i += 1) {
    playerTeam.push(hero.next().value);
  }
  return playerTeam;
}
