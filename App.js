import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { View, Platform } from 'react-native'
import { setLocalNotification } from './utils/helpers'
import { blue, white } from './utils/colors'


import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import Quiz from './components/Quiz'

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

const MainNavigator = StackNavigator({
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

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}


