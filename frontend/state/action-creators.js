// ❗ You don't need to add extra action creators to achieve MVP
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_Q_CHANGE,
  INPUT_T_CHANGE,
  INPUT_F_CHANGE,
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

export function setMessage(message) {
  return({type: SET_INFO_MESSAGE, payload: message})
 }

export function setQuiz(quiz) {
  return({type: SET_QUIZ_INTO_STATE, payload: quiz})
 }

export function inputQChange(change) {
  return({type: INPUT_Q_CHANGE, payload: change})
 }

 export function inputTChange(change){
  return ({type: INPUT_T_CHANGE, payload: change})
 }

export function inputFChange(change){
  return ({type: INPUT_F_CHANGE, payload: change})
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
          // - Dispatch an action to set the server message to state
          dispatch(setMessage(res.data.message))
          // - Dispatch the fetching of the next quiz
          dispatch(fetchQuiz())
        })  
    


  }
}
export function postQuiz(question_text, true_answer_text, false_answer_text) {
  return function (dispatch) {
    // On successful POST:
      axios.post('http://localhost:9000/api/quiz/new', {question_text, true_answer_text, false_answer_text})
        .then(res => {console.log(res)
            // - Dispatch the correct message to the the appropriate state
            dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
            // - Dispatch the resetting of the form
            dispatch(resetForm())
            })
    // ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
          .catch((res) => {dispatch(setMessage(res.response.data.message))})
  }         
}
