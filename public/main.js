let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let suits = ['diamonds', 'hearts', 'spades', 'clubs']
let deck = []

const buildDeck = () => {
	deck = []

	for (let i = 0; i < suits.length; i++) {
		for (let x = 0; x < cards.length; x++) {
			var card = {
				Value: cards[x],
				Suit: suits[i]
			};
			deck.push(card);
		}
	}
	return deck
}

const shuffle = () => {
	for (let i = 0; i < 1000; i++) {
		let location1 = Math.floor(Math.random() * deck.length)
		let location2 = Math.floor(Math.random() * deck.length)
		let temp = deck[location1]
		deck[location1] = deck[location2]
		deck[location2] = temp
	}

	dealCards()
}

const dealCards = () => {
	document.getElementById('deck').innerHTML = ''
	for (let i = 0; i < deck.length; i++) {
		let card = document.createElement('div')
		let icon = ''
		if (deck[i].Suit === 'hearts') icon = '&hearts;'
		else if (deck[i].suit === 'spades') {
			icon = '&spades;'
		} else if (deck[i].suit === 'diamonds') {
			icon = '&diams;'
		} else {
			icon = '&clubs;'
		}

		card.innerHTML = deck[i].Value + '' + icon
		card.className = 'card'

		document.getElementById('deck').appendChild(card)
	}
}

const load = () => {
	deck = buildDeck()
	shuffle()
	dealCards()
}

window.onload = load