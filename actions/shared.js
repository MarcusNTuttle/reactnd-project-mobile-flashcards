import { getInitialDataAPI, saveDeckTitleAPI, saveCardToDeckAPI } from '../utils/api'
import { addCard } from '../actions/cards'
import { receiveDecks, addDeck } from '../actions/decks'


export function handleInitialData() {
  return (dispatch) => {
    return getInitialDataAPI()
      .then(({ decks }) => {
        dispatch(receiveDecks(decks))
      })
  }
}

export function handleSaveDeckTitleAPI(title) {
  return (dispatch) => {
    return saveDeckTitleAPI({title})
    .then((title) => {
      dispatch(addDeck(title))
    })
  }
}

export function handleSaveCardToDeckAPI(title, card) {
  return (dispatch) => {
    return saveCardToDeckAPI({ title })
      .then((title) => {
        dispatch(addCard(title))
      })
  }
}