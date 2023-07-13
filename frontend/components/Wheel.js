import React from 'react'
import reducer, {initialWheelState} from '../state/reducer'
import { useReducer } from 'react';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

export default function Wheel(props) {
  const [state, dispatch] = useReducer(reducer, {wheel: initialWheelState})
  
  const handleCtrClockwise = () => {
    console.log(state.wheel)
    return dispatch(moveCounterClockwise())
  }

  const handleClockwise = () => {
    console.log(state.wheel)
    return dispatch(moveClockwise())
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={state.wheel === 0 ? 'cog active' : 'cog'} style={{ "--i": 0 }}>{state.wheel === 0 ? 'B' : ""}</div>
        <div className={state.wheel === 1 ? 'cog active' : 'cog'} style={{ "--i": 1 }}>{state.wheel === 1 ? 'B' : ""}</div>
        <div className={state.wheel === 2 ? 'cog active' : 'cog'} style={{ "--i": 2 }}>{state.wheel === 2 ? 'B' : ""}</div>
        <div className={state.wheel === 3 ? 'cog active' : 'cog'} style={{ "--i": 3 }}>{state.wheel === 3 ? 'B' : ""}</div>
        <div className={state.wheel === 4 ? 'cog active' : 'cog'} style={{ "--i": 4 }}>{state.wheel === 4 ? 'B' : ""}</div>
        <div className={state.wheel === 5 ? 'cog active' : 'cog'} style={{ "--i": 5 }}>{state.wheel === 5 ? 'B' : ""}</div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCtrClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn"onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
