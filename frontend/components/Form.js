import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import {inputChange} from '../state/action-creators'
import axios from 'axios'
import { useReducer, useState } from 'react';
import reducer, {initialFormState} from '../state/reducer';

export function Form(props) {
  const [state, dispatch] = useReducer(reducer, {form: initialFormState})
  const [newQuestion, setNewQuestion] = useState('')
  const [newTrueAnswer, setNewTrueAnswer] = useState('')
  const [newFalseAnswer, setNewFalseAnswer] = useState('')

  const onChange = evt => {
    return inputChange(evt.target.value),
    console.log(state.form)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    axios.post('http://localhost:9000/api/quiz/new')
         .then((res) => {res.data, state.form})
         .catch((err) => {})
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={state.form.newQuestion === '' && state.form.newTrueAnswer === '' && state.form.newFalseAnswer === '' ? true : false}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
