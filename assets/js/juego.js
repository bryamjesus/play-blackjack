/**
 * 2c = two of clubs (trebols)
 * 2d = two of diamoons)
 * 2h = two of hearts
 * 2s = two of spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (const especial of especiales) {
      deck.push(especial + tipo);
    }
  }
};

crearDeck();

console.log(deck);
