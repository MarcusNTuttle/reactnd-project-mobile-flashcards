
import { AsyncStorage } from 'react-native'
const DECKS_STORAGE_KEY = 'UdaciCards:flashcards'

let testData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'Does React work with Android?',
        answer: true
      },
      {
        question: 'React is a Framework developed by Google?',
        answer: false
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'Closure is a combination of function?',
        answer: true
      }
    ]
  }
}

export function formatDeckResults(results) {
  if (results === null) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(testData))
    return testData
  } else {
    return JSON.parse(results)
  }
}

export function _getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDeckResults)
}

export function _saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function _saveCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results)

      data[title].questions.push(card)
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
      return data
    })
}
