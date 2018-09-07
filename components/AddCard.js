import React, { Component } from 'react'
import {  KeyboardAvoidingView, View, Text, TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import { styles } from '../utils/styles'

import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  onQuestionChange = (text) => {

    this.setState({ question: text })
  }

  onAnswerChange = (text) => {
    this.setState({ answer: text })
  }

  onAddtButton = () => {
    const { question, answer } = this.state
    if(question && answer) {
      const deck = this.props.navigation.state.params.name
      this.props.addCard({ question, answer, deck })
      addCardToDeck(deck, { question, answer })
      this.props.navigation.goBack()
    }
  }

  render() {
    const { text } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Question'
            onChangeText={this.onQuestionChange}
            style={styles.input}/>

          <TextInput
            placeholder='Answer'
            onChangeText={this.onAnswerChange}
            style={styles.input} />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity 
            onPress={this.onAddtButton}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>   
        </View>
      </KeyboardAvoidingView>
    )
  }
}



export default connect(null, { addCard })(AddCard)
