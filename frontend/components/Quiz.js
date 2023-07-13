import React from 'react'
import reducer, {initialSelectedAnswerState} from '../state/reducer'
import { useReducer, useState } from 'react';
import {selectAnswer} from '../state/action-creators'
export default function Quiz(props) {
  const [state, dispatch] = useReducer(reducer, {selectedAnswer: initialSelectedAnswerState})
  const [selectOne, setSelectOne] = useState(false)
  const [selectTwo, setSelectTwo] = useState(false)

  const handleSelectedAnswerOne = () => {
    selectOne === false ? setSelectOne(true) && setSelectTwo(false) : setSelectOne(false)
    return dispatch(selectAnswer())
  }

  const handleSelectedAnswerTwo = () => {
    selectTwo === false ? setSelectTwo(true) && setSelectOne(false) : setSelectTwo(false)
    return dispatch(selectAnswer())
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className={state.selectedAnswer === true ? "answer selected" : "answer"}>
                A function
                <button onClick={handleSelectedAnswerOne}>
                  {state.selectedAnswer === true && selectOne === true ? 'Selected' : 'Select'}
                </button>
              </div>

              <div className={state.selectedAnswer === true ? "answer selected" : "answer"}>
                An elephant
                <button onClick={handleSelectedAnswerTwo}>
                  {state.selectedAnswer === true && selectTwo === true ? 'Selected' : 'Select'}
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
