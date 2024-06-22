import React, { Component } from 'react';

const question = {
  text: "Is this a good question?",
  answers: [
    "Yes",
    "No",
    "I don't know"
  ]
}

class Answer extends Component {
  render() {
    return (
      <div>
        {this.props.answer}
      </div>
    );
  }
}

class QuestionSet extends Component {
  render() {
    return (
      <div className="container">
        <h1>{question.text}</h1>
        {question.answers.forEach((answer, index) => (
          <Answer key={index} answer={answer} />
        ))}
      </div>
    );
  }
}

export default QuestionSet;
