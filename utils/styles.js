
import { StyleSheet } from 'react-native'
import { blue, white } from '../utils/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 36,
    textAlign: 'center'
  },
  card: {
    fontSize: 22
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: white,
    borderColor: blue,
    padding: 10,
    borderRadius: 10,
    height: 50,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50
  },
  buttonText: {
    color: blue,
    fontSize: 24,
    textAlign: 'center'
  },
  deckContainer: {
    flex: 1,
  },
  deckItemContainer: {
    height: 100,
    borderWidth: 1,
    borderColor: '#c5c6b6'
  },
  deckItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  deckItemTitle: {
    fontSize: 24,
    textAlign: 'center'
  },
  deckItemSubTitle: {
    fontSize: 18,
    textAlign: 'center'
  },
  inputContainer: {
    flex: 1,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainerDeck: {
    flex: 1,
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#c5c6b6',
    margin: 20,
    fontSize: 20,
    borderRadius: 10,
  },
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    height: 50
  },
  progressText: {
    fontSize: 18,
    color: blue
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },

  quizTitleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50
  },
})