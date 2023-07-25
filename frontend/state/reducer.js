// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
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


export const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case(MOVE_CLOCKWISE):
    return (state === 5 ? state - 5 : state + 1)
    case(MOVE_COUNTERCLOCKWISE):
    return (state === 0 ? state + 5 : state - 1)
    default: return state
  }
}

export const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case(SET_QUIZ_INTO_STATE):
    return action.payload
    default: return state
  } 
}

export const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case(SET_SELECTED_ANSWER):
    return action.payload
    default: return state
  } 
}

export const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case(SET_INFO_MESSAGE):
    return action.payload
    default: return state
  } 
}

export const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case(INPUT_Q_CHANGE):
    return ({...state, newQuestion: action.payload})
    case(INPUT_T_CHANGE):
    return({...state, newTrueAnswer: action.payload})
    case(INPUT_F_CHANGE):
    return({...state, newFalseAnswer: action.payload})
    case(RESET_FORM):
    return({...state, state: state})
    default: return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
