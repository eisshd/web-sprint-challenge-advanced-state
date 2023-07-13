import React from 'react'
import reducer from '../state/reducer'
import { useReducer } from 'react';
import { SET_SELECTED_ANSWER } from '../state/action-types';
export default function Quiz(props) {
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  {'' === true ? 'Selected' : 'Select'}
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  {'' === true ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
