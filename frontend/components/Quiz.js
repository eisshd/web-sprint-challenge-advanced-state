import React from 'react'
import {useEffect } from 'react';
import {selectAnswer, setMessage, fetchQuiz, postAnswer} from '../state/action-creators'
import { connect } from 'react-redux';

function Quiz(props) {
  const {fetchQuiz, quiz, selectedAnswer, selectAnswer, postAnswer} = props
  console.log(props)

  useEffect(() => {
    if(!quiz){
      fetchQuiz()
    }
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    postAnswer(quiz.quiz_id, selectedAnswer.answer_id)
  }




  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${selectedAnswer?.answer_id === quiz.answers[0].answer_id ? ' selected' : ''}`}>
                {quiz.answers[0].text}
                <button onClick={() => selectAnswer(quiz.answers[0])}>
                  {selectedAnswer?.answer_id === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer${selectedAnswer?.answer_id === quiz.answers[1].answer_id ? ' selected' : ''}`}>
              {quiz.answers[1].text}
                <button onClick={() => selectAnswer(quiz.answers[1])}>
                {selectedAnswer?.answer_id === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={!selectedAnswer ? true : false}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    setMessage: state.message
  }
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer, postAnswer, setMessage})(Quiz)