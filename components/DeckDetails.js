import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Animated
 } from 'react-native'

import { connect } from 'react-redux'
import { styles } from '../utils/styles'

class DeckDetail extends Component {

  onAddCard = () => {
    const { name, count } = this.props.navigation.state.params
    this.props.navigation.navigate('AddCard', { name })
  }

  onStartQuiz = () => {
    const { name } = this.props.navigation.state.params
    this.props.navigation.navigate('Quiz', { name })
  }


  render() {
    const { name } = this.props.navigation.state.params
    const { decks } = this.props
    const count = decks[name].questions.length

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.card}>{decks[name].questions.length} Cards</Text>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.onAddCard} style={styles.button}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          {count > 0 && (
            <TouchableOpacity onPress={this.onStartQuiz} style={styles.button}>
            <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (decks) => {
  return { 
    decks
  }
}
export default connect(mapStateToProps)(DeckDetail)
