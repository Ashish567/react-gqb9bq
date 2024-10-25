import React, { useState, useRef, useEffect } from 'react';
export default function Timer() {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(5);
  const [active, setActive] = useState(null);
  const [running, setRunning] = useState('');
  const ref = useRef();

  useEffect(() => {
    if (active == null || active == 'pause') return;
    ref.current = setInterval(() => {
      if (active == 'session') {
        setCount1((count1) => count1 - 1);
      } else {
        setCount2((count2) => count2 - 1);
      }
    }, 1000);
    return () => clearInterval(ref.current);
  }, [active]);
  useEffect(() => {
    if (count1 < 1 || count2 < 1) {
      clearInterval(ref.current);
      setActive(active == 'session' ? 'break' : 'session');
      setCount1(10);
      setCount2(5);
    }
  }, [count1, count2]);

  return (
    <>
      <h2>Timer 2</h2>
      <p>Session - {count1}</p>
      <p>Break - {count2}</p>
      <div
        style={{
          display: 'flex',
        }}
      >
        <button
          onClick={() => {
            if (active == null) {
              setActive('session');
            } else if (active == 'pause') {
              setActive(running);
            } else {
              setActive(active == 'session' ? 'break' : 'session');
            }
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            clearInterval(ref.current);
            setActive('pause');
            setRunning(active);
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            setActive(null);
            setCount1(10);
            setCount2(5);
            clearInterval(ref.current);
            setRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
