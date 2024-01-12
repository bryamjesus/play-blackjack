/**
 * 2c = two of clubs (trebols)
 * 2d = two of diamoons)
 * 2h = two of hearts
 * 2s = two of spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

/**
 * Esta funcion crea la baraja
 */
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
  console.time('HOLA');
  deck = _.shuffle(deck);
  console.timeEnd('HOLA');
  console.log(deck);
};

crearDeck();

const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  const numRandom = Math.round(Math.random() * 52);
  const carta = deck[numRandom];

  deck.splice(numRandom, 1);
  console.log({ numRandom, carta, deck });
  return '';
};
pedirCarta();
