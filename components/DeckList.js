import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { styles } from '../utils/styles'

import DeckItem from './DeckItem'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'


class DeckList extends Component {

  componentDidMount() {
    getDecks()
      .then(decks => this.props.receiveDecks(decks))
  }

  onDeckItemPress = ({ name }) => {
    this.props.navigation.navigate('DeckDetails', { name })
  }

  render() {
    const { decks } = this.props

    if (Object.keys(decks).length !== 0) {
      return (
        <ScrollView style={{ flex: 1 }}>
          {Object.keys(decks).map(deck => <DeckItem
            key={decks[deck].title}
            name={decks[deck].title}
            count={decks[deck].questions.length}
            onDeckItemPress={this.onDeckItemPress}
          />)}
        </ScrollView>
      )
    } else {
      return (
        <View style={styles.center}>
          <Text>Items are loading...</Text>
        </View>
      )
    }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    receiveDecks: (decks) => dispatch(receiveDecks(decks))
  }
}

const mapStateToProps = decks => ({ decks })

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)


