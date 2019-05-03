import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import QuestionForm from './components/QuestionForm';
import ChoicesForm from './components/ChoicesForm';
import SubmitButton from './components/SubmitButton';

const quizSet = [
  {q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖']},
  {q: '2の8乗は？', c: ['256', '64', '1024']},
  {q: 'いま、何問目？', c: ['3問目', '4問目', '5問目']},
];

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
        quizSet : quizSet,
        currentNum : 0,
        isAnswered : 0,
        score : 0,
        choicesId : 0,
        tfflag: 0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <QuestionForm 
          quizSet = {this.state.quizSet}
          currentNum = {this.state.currentNum}
          />
        <ChoicesForm 
          quizSet = {this.state.quizSet}
          currentNum = {this.state.currentNum}
          score = {this.state.score}　　
          isAnswered = {this.state.isAnswered}　　　　　　　　　　　　　　　　　　　　　　
          checkAnswer = {this.checkAnswer}
          />
        <SubmitButton 
          quizSet = {this.state.quizSet}
          currentNum = {this.state.currentNum}
          />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'efdec1',
    fontSize: 14,
    fontFamily: 'sans-serif',
  },
});