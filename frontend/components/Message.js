import React from 'react'
import { useReducer } from 'react';
import {setMessage} from '../state/action-creators'
import reducer, {initialMessageState} from '../state/reducer'
import { connect } from 'react-redux';

function Message({message}) {
  const [state, dispatch] = useReducer(reducer, {infoMessage: initialMessageState})

  return <div id="message">{state.infoMessage}</div>
}

const mapStateToProps = state => {
  return {message: state.infoMessage}
}

export default connect(mapStateToProps)(Message)


