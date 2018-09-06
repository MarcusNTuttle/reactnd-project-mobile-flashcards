import { ADD_CARD } from '../actions/cards'

export default function cards(state = {}, action) {

  switch (action.type) {

    case ADD_CARD:
      const { question, answer, deck } = action.card
  
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [...state[deck].questions, { question, answer }]
        }
      }
    default:
      return state
  }
}