import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { styles } from '../utils/styles'


class DeckItem extends Component {

  render() {
    const { name, count, onDeckItemPress } = this.props

    return (
      <View style={styles.deckItemContainer}>
        <View style={styles.deckItem}>
          <TouchableOpacity onPress={() => onDeckItemPress({ name })}>
            <Text style={styles.deckItemTitle}>{name}</Text>
            <Text style={styles.deckItemSubTitle}>{count} cards</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default connect()(DeckItem)
