import { useState, useEffect, forwardRef, useContext } from 'react';
import React from 'react';
import { Context } from './App';

export const Counter = forwardRef(({ cnt, name }, ref) => {
  const { state, dispatch } = useContext(Context);
  const [count, setCount] = useState(cnt);

  useEffect(() => {
    if (name !== state.active || !state.isRunning) return;

    ref.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(ref.current);
          dispatch({
            type: 'change',
            payload: {
              active: name === 'session' ? 'break' : 'session',
            },
          });
          return cnt;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(ref.current);
  }, [state.active, state.isRunning]);
  useEffect(() => {
    setCount(state[name]);
  }, [state.sit]);

  useEffect(() => {
    setCount(cnt);
  }, [cnt]);

  return (
    <h1>
      {name} - {count}
    </h1>
  );
});
