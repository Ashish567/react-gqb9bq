import React, { useRef, useReducer, createContext } from 'react';
import './style.css';
import { Counter } from './Counter';
import Timer from './Timer';
import Accordian from './Accordian';
import Accordian2 from './Accordian2';
import StarRating from './StarRating'

export const Context = createContext(null);

export default function App() {
  const timerOne = useRef(null);
  const timerTwo = useRef(null);

  const [state, dispatch] = useReducer(reducer, {
    active: 'session',
    session: 10,
    break: 5,
    isRunning: false,
    sit: false,
  });

  return (
    <>
      {/* <Context.Provider value={{ state, dispatch }}>
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Timers complex</p>
          <Counter ref={timerOne} cnt={state.session} name="session" />
          <Counter ref={timerTwo} cnt={state.break} name="break" />
          <div>
            <button onClick={() => dispatch({ type: 'start' })}>Start</button>
            <button onClick={() => dispatch({ type: 'pause' })}>Pause</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
          </div>
        </div>
      </Context.Provider>
      <div>
        <p>Simple Timer</p>
        <Timer />
      </div> */}
      {/* <Accordian />
      <Accordian2 /> */}
      {/* <StarRating/> */}
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'change': {
      return {
        ...state,
        ...action.payload,
        isRunning: true,
      };
    }
    case 'pause': {
      return {
        ...state,
        isRunning: false,
      };
    }
    case 'reset': {
      console.log(state);
      return {
        ...state,
        active: 'session',
        isRunning: false,
        session: 10,
        break: 5,
        sit: !state.sit,
      };
    }
    case 'start': {
      return {
        ...state,
        isRunning: true,
      };
    }
    default:
      return state;
  }
}
