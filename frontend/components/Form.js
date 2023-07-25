import React, {useState} from 'react'
import { connect } from 'react-redux'
import {postQuiz, inputQChange, inputTChange, inputFChange} from '../state/action-creators'

export function Form(props) {
  console.log('Form', props)
  const {form, postQuiz, inputQChange, inputTChange, inputFChange} = props


  const onQChange = evt => {
    inputQChange(evt.target.value)
  }

  const onTChange = evt => {
    inputTChange(evt.target.value)
  }

  const onFChange = evt => {
    inputFChange(evt.target.value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz(form.newQuestion, form.newTrueAnswer, form.newFalseAnswer)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onQChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onTChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onFChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={form.newQuestion.trim() === '' || form.newTrueAnswer.trim() === '' || form.newFalseAnswer.trim() === '' ? true : false}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state)=> {
  return {
    form: state.form
  }
}

export default connect(mapStateToProps, {postQuiz, inputQChange, inputTChange, inputFChange})(Form)
