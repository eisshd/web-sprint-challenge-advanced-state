import React from 'react'
import reducer, {initialSelectedAnswerState, initialQuizState, initialMessageState} from '../state/reducer'
import { useReducer, useState } from 'react';
import {selectAnswer, setQuiz, setMessage} from '../state/action-creators'
import axios from 'axios';

export default function Quiz(props) {
  const [state, dispatch] = useReducer(reducer, {selectedAnswer: initialSelectedAnswerState, quiz: initialQuizState, infoMessage: initialMessageState})
  const [selectOne, setSelectOne] = useState(false)
  const [selectTwo, setSelectTwo] = useState(false)
  const [question, setQuestion] = useState('What is a closure')
  const [answerOne, setAnswerOne] = useState('A function')
  const [answerTwo, setAnswerTwo] = useState('An elephant')
  

  const handleSelectedAnswerOne = () => {
     return dispatch(selectAnswer()), setSelectOne(true), setSelectTwo(false)
} 

  const handleSelectedAnswerTwo = () => {
    return dispatch(selectAnswer()), setSelectTwo(true), setSelectOne(false)
  }

  const handleSubmit = () => {

    return selectOne === true ? dispatch(setMessage('Nice Job')) : console.log('Failed'), 
    dispatch(setQuiz(false)),
    axios.get('http://localhost:9000/api/quiz/next')
        .then(res => {
          setQuestion(res.data.question),
            setAnswerOne(res.data.answers[0].text),
            setAnswerTwo(res.data.answers[1].text)
        })
        .catch(err => {
          // todo: dispatch getPersonError
          console.log(err)
        })
        .finally(() => dispatch(setQuiz(true)))
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        state.quiz === true ? (
          <>
            <h2>{question}</h2>

            <div id="quizAnswers">
              <div className={selectOne === true && selectTwo === false ? "answer selected" : "answer"}>
                {answerOne}
                <button onClick={handleSelectedAnswerOne}>
                  {state.selectedAnswer === true && selectOne === true && selectTwo === false ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={selectTwo === true && selectOne === false ? "answer selected" : "answer"}>
              {answerTwo}
                <button onClick={handleSelectedAnswerTwo}>
                  {state.selectedAnswer === true && selectTwo === true && selectOne === false ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={selectOne === false && selectTwo === false ? true : false}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


