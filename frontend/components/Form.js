import React from 'react'
import { connect } from 'react-redux'
import {postQuiz, inputChange} from '../state/action-creators'

export function Form(props) {
  console.log('Form', props)
  const {form, postQuiz, inputChange} = props


  const onChange = evt => {
    console.log(props.form.newQuestion)
    inputChange(evt.target.value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={!form ? true : false}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state)=> {
  return {
    form: state.form
  }
}

export default connect(mapStateToProps, {postQuiz, inputChange})(Form)
