import { ADD_DECK, RECEIVE_DECKS } from '../actions/decks'

export default function decks(state = {}, action) {
  const { type, decks, deck } = action

  switch (type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...decks
      }

    case ADD_DECK:
      const newDeck = {
        [deck]: {
          title: deck,
          questions: []
        }
      }
      return {
        ...state,
        ...newDeck
      }

    default:
      return state
  }
}