
import React from 'react'
import { blue, white } from '../utils/colors'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './DeckList'
import DeckDetails from './DeckDetails'
import AddCard from './AddCard'
import AddDeck from './AddDeck'
import Quiz from './Quiz'


const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })

export const MainNavigator = StackNavigator({
  DeckList: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      title: `Decks`,
      headerStyle: {
        backgroundColor: blue,
      }
    })
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      title: `${navigation.state.params.name}`,
      headerStyle: {
        backgroundColor: blue,
      }
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      title: `Add Card to ${navigation.state.params.name}`,
      headerStyle: {
        backgroundColor: blue,
      }
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      title: `Quiz - ${navigation.state.params.name}`,
      headerStyle: {
        backgroundColor: blue,
      }
    })
  }
})
