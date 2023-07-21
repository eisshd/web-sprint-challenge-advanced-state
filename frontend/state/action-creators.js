// ❗ You don't need to add extra action creators to achieve MVP
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM
} from './action-types'
import axios from 'axios';

export function moveClockwise() {
  return({type: MOVE_CLOCKWISE})
 }

export function moveCounterClockwise() {
  return({type: MOVE_COUNTERCLOCKWISE})
 }

export function selectAnswer(answer) {
  return({type: SET_SELECTED_ANSWER, payload: answer})
 }

export function setMessage(action) {
  return({type: SET_INFO_MESSAGE, payload: action})
 }

export function setQuiz(quiz) {
  return({type: SET_QUIZ_INTO_STATE, payload: quiz})
 }

export function inputChange(action) {
  return({type: INPUT_CHANGE, payload: action})
 }

export function resetForm() {
  return({type: RESET_FORM})
 }

// ❗ Async action creators
export function fetchQuiz() {
  
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch(setQuiz(null))
    axios.get('http://localhost:9000/api/quiz/next')
        .then(res => {
              dispatch(setQuiz(res.data))
        })
        .catch(err => {console.log(err)})
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state

  }
}
export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    // On successful POST:
    axios.post('http://localhost:9000/api/quiz/answer', {quiz_id: quiz_id, answer_id: answer_id})
        .then(res => {
          // - Dispatch an action to reset the selected answer state
          dispatch(selectAnswer(null))
          console.log('postAnswer', res.data.message)
          // - Dispatch an action to set the server message to state
          
          // - Dispatch the fetching of the next quiz
        })  
    


  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
