import React from 'react'
import combineReducers, {initialWheelState} from '../state/reducer'
import { useReducer } from 'react';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

export default function Wheel(props) {
  const [state, dispatch] = useReducer(combineReducers, initialWheelState)
  
  const handleCtrClockwise = () => {
    return dispatch(moveCounterClockwise())
  }

  const handleClockwise = () => {
    return dispatch(moveClockwise())
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        {/* change state of B to value between 0 and 5 */}
        {/* change class name from cog to cog active if state of B is equal to number */}
        <div className={initialWheelState === 0 ? 'cog active' : 'cog'} style={{ "--i": 0 }}>{initialWheelState === 0 ? 'B' : ""}</div>
        <div className={initialWheelState === 1 ? 'cog active' : 'cog'} style={{ "--i": 1 }}>{initialWheelState === 1 ? 'B' : ""}</div>
        <div className={initialWheelState === 2 ? 'cog active' : 'cog'} style={{ "--i": 2 }}>{initialWheelState === 2 ? 'B' : ""}</div>
        <div className={initialWheelState === 3 ? 'cog active' : 'cog'} style={{ "--i": 3 }}>{initialWheelState === 3 ? 'B' : ""}</div>
        <div className={initialWheelState === 4 ? 'cog active' : 'cog'} style={{ "--i": 4 }}>{initialWheelState === 4 ? 'B' : ""}</div>
        <div className={initialWheelState === 5 ? 'cog active' : 'cog'} style={{ "--i": 5 }}>{initialWheelState === 5 ? 'B' : ""}</div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        {/* create an onClick that updates the state of B */}
        {/* Clockwise = value + 1  */}
        {/* counterClockwise = value - 1 */}
        <button id="counterClockwiseBtn" onClick={handleCtrClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn"onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
