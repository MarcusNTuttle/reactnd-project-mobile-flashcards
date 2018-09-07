import { AsyncStorage } from 'react-native'
const UDACICARDS_STORAGE_KEY = 'UdaciCards:flashcards'

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function getDecks() {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
    .then(results => {
      if(results === null) {
        AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(initialData))
        return initialData
      } else {
        return JSON.parse(results)
      }
    })
}

export function saveDeckTitle(title) {
 return AsyncStorage.mergeItem(UDACICARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
    .then(results => JSON.parse(results))
    .then(results => {
      results[title].questions.push(card)
      AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(results))
      return results
    })
}
