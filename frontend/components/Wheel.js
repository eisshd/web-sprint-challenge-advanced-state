import React from 'react'
import reducer, {initialWheelState} from '../state/reducer'
import { useReducer } from 'react';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';
import { connect } from 'react-redux';


function Wheel(props) {
  console.log('wheel', props)
  const {wheel, moveClockwise, moveCounterClockwise} = props
  
  const handleCtrClockwise = () => {
    return moveCounterClockwise()
  }

  const handleClockwise = () => {
    return moveClockwise()
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={wheel === 0 ? 'cog active' : 'cog'} style={{ "--i": 0 }}>{wheel === 0 ? 'B' : ""}</div>
        <div className={wheel === 1 ? 'cog active' : 'cog'} style={{ "--i": 1 }}>{wheel === 1 ? 'B' : ""}</div>
        <div className={wheel === 2 ? 'cog active' : 'cog'} style={{ "--i": 2 }}>{wheel === 2 ? 'B' : ""}</div>
        <div className={wheel === 3 ? 'cog active' : 'cog'} style={{ "--i": 3 }}>{wheel === 3 ? 'B' : ""}</div>
        <div className={wheel === 4 ? 'cog active' : 'cog'} style={{ "--i": 4 }}>{wheel === 4 ? 'B' : ""}</div>
        <div className={wheel === 5 ? 'cog active' : 'cog'} style={{ "--i": 5 }}>{wheel === 5 ? 'B' : ""}</div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCtrClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn"onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    wheel: state.wheel
  }
  
}

export default connect(mapStateToProps, {moveCounterClockwise, moveClockwise})(Wheel)
