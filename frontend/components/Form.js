import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'
import { useReducer, useState } from 'react';
import reducer, {initialFormState} from '../state/reducer';

export function Form(props) {
  const [state, dispatch] = useReducer(reducer, {form: initialFormState})
  const [newQuestion, setNewQuestion] = useState(state.form.newQuestion)
  const [newTrueAnswer, setNewTrueAnswer] = useState(state.form.newTrueAnswer)
  const [newFalseAnswer, setNewFalseAnswer] = useState(state.form.newFalseAnswer)

  const onQChange = evt => {
    return setNewQuestion(evt.target.value)
  }

  const onTChange = evt => {
    return setNewTrueAnswer(evt.target.value)
  }

  const onFChange = evt => {
    return setNewFalseAnswer(evt.target.value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    axios.post('http://localhost:9000/api/quiz/new')
         .then((res) => {res.data, state.form}, console.log(state.form))
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onQChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onTChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onFChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
