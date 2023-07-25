import React from 'react'
import {setMessage} from '../state/action-creators'
import { connect } from 'react-redux';

function Message(props) {
  return <div id="message">{props.message}</div>
}

const mapStateToProps = state => {
  return {
    message: state.infoMessage
  }
}

export default connect(mapStateToProps, {setMessage})(Message)

