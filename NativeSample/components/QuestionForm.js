import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').heigjt;

class QuestionForm extends React.Component {
  constructor(props){
    super(props);
  }
  QuestionSelect() {
    return (
      <View style={styles.question}>
        <Text style={{fontSize: 30}}>
            {this.props.quizSet[this.props.currentNum].q}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.QuestionSelect()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    flex: 1,
    backgroundColor: 'blue',
    width: SCREEN_WIDTH,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // fontWeight:'700',
  },
});

export default QuestionForm;