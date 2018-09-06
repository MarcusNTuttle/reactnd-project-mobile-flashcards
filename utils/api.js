import {
  _getDecks,
  _saveDeckTitle,
  _saveCardToDeck,
} from './_DATA.js'


export function getInitialDataAPI() {
  return _getDecks()
    .then(decks => ({ decks }))
}

export function saveDeckTitleAPI(title) {
  return _saveDeckTitle(title)
}

export function saveCardToDeckAPI(title, card) {
  return _saveCardToDeck(title, card)
}