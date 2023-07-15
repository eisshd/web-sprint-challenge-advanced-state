import React from 'react'
import reducer, {initialSelectedAnswerState} from '../state/reducer'
import { useReducer, useState } from 'react';
import {selectAnswer} from '../state/action-creators'
export default function Quiz(props) {
  const [state, dispatch] = useReducer(reducer, {selectedAnswer: initialSelectedAnswerState})
  const [selectOne, setSelectOne] = useState(false)
  const [selectTwo, setSelectTwo] = useState(false)

  const handleSelectedAnswerOne = () => {
     return dispatch(selectAnswer()), setSelectOne(true), setSelectTwo(false)
} 

  const handleSelectedAnswerTwo = () => {
    return dispatch(selectAnswer()), setSelectTwo(true), setSelectOne(false)
  }

  const handleSubmit = () => {
    // selectOne === true && selected answser === initialFormState.newTrueAnswer show Message Component
    // then load the 
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className={selectOne === true && selectTwo === false ? "answer selected" : "answer"}>
                A function
                <button onClick={handleSelectedAnswerOne}>
                  {state.selectedAnswer === true && selectOne === true && selectTwo === false ? 'Selected' : 'Select'}
                </button>
              </div>

              <div className={selectTwo === true && selectOne === false ? "answer selected" : "answer"}>
                An elephant
                <button onClick={handleSelectedAnswerTwo}>
                  {state.selectedAnswer === true && selectTwo === true && selectOne === false ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={selectOne === false && selectTwo === false ? true : false}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
