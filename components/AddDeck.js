import React, { Component } from 'react'
import { KeyboardAvoidingView, View, Text, TextInput,StyleSheet, TouchableOpacity} from 'react-native'

import { styles } from '../utils/styles'

import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'

class AddDeck extends Component {
  state = {
    text: ''
  }

  onInputChange = (text) => {
    this.setState({ text })
  }

  onSubmitButton = () => {
    const { text } = this.state
    if(text) {
      this.props.addDeck(text)
      saveDeckTitle(text)
      this.props.navigation.navigate('DeckDetails', { name: text })
    }
  }

  render() {
    const { text } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.center}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What is your new Deck called?</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder='Deck Title'
            onChangeText={this.onInputChange}
            style={styles.input}/>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity 
            onPress={this.onSubmitButton}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Deck</Text>
          </TouchableOpacity>          
        </View>
      </KeyboardAvoidingView>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck))
  }
}

export default connect(null, mapDispatchToProps)(AddDeck)
