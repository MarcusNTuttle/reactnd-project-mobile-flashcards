import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../utils/styles'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

class Quiz extends Component {

  state = {
    count: 0,
    showAnswer: false,
    finished: false,
    correct: 0,
  }

  onBackToDeck = () => {
    this.props.navigation.goBack()
  }

  onRestart = () => {
    this.setState({ count: 0, showAnswer: false, finished: false, correct: 0 })
  }

  renderAnswerOptions() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'green'}]} onPress={() => this.onPressSelectAnswer(true)}>
          <Text style={[styles.buttonText, {color: 'white'}]}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]} onPress={() => this.onPressSelectAnswer(false)}>
          <Text style={[styles.buttonText, {color: 'white'}]}>Wrong</Text>
        </TouchableOpacity>
      </View>
    )

  }

  onPressSelectAnswer = (selectedAnswer) => {
    const { count } = this.state
    const { decks } = this.props
    const { name } = this.props.navigation.state.params

    const length = decks[name].questions.length
    const answer = decks[name].questions[count].answer

    if (selectedAnswer) {
      this.setState({ correct: this.state.correct + 1 })
    }

    if (count >= length - 1) {
      this.setState({ finished: true })

    } else {
      this.setState({ count: this.state.count + 1 })
    }
  }

  onPressShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  renderShowAnswerBtn(onPress) {
    const { showAnswer } = this.state

    return (
      <View >
        <TouchableOpacity onPress={onPress}>
          {showAnswer ? <Text style={styles.buttonText}>Show Question</Text> : <Text style={styles.buttonText}>Show Answer</Text>}
        </TouchableOpacity>
      </View>
    )
  }

  renderProgressBar() {
    const { count } = this.state
    const { decks } = this.props
    const { name } = this.props.navigation.state.params
    const length = decks[name].questions.length

    return (
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{count + 1}/{length}</Text>
      </View>
    )
  }

  renderAnswer() {
    const { count, showAnswer, opacity, finished, correct } = this.state
    const { decks } = this.props
    const { name } = this.props.navigation.state.params

    let answer = '';

    if (typeof decks[name].questions[count].answer === "boolean") {
      answer = decks[name].questions[count].answer ? "Yes!" : "No!"
    } else {
      answer = decks[name].questions[count].answer
    }

    return (
      <Text style={styles.title}>{answer}</Text>
    )
  }

  renderQuestion() {
    const { count } = this.state
    const { decks } = this.props
    const { name } = this.props.navigation.state.params
    const question = decks[name].questions[count].question

    return (
      <Text style={styles.title}>{question}</Text>
    )
  }

  renderFinish() {
    const { decks } = this.props
    const { name } = this.props.navigation.state.params
    const { correct } = this.state
    const length = decks[name].questions.length

    return (
      <View>
        <Text style={styles.title}>Score: {correct} / {length}</Text>
          <TouchableOpacity style={styles.button} onPress={this.onRestart}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onBackToDeck}>
            <Text style={styles.buttonText}>Back to Deck</Text>
          </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { finished, showAnswer } = this.state

    if (finished) {
      return (
        <View style={styles.container}>
          {this.renderFinish()}
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        {this.renderProgressBar()}
        <View style={styles.quizContainer}>

          <View styles={styles.quizTitleContainer}>
            {showAnswer ? this.renderAnswer() : this.renderQuestion()}
          </View>

          {this.renderShowAnswerBtn(this.onPressShowAnswer)}

          {this.renderAnswerOptions()}

        </View>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Quiz)

