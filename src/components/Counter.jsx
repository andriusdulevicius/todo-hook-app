import React from 'react';

const Counter = ({ special, counterValue, handleCount, id }) => {
  return (
    <div className='counter-container'>
      {special ? (
        <>
          <h2>Special Counter</h2>
          <h2>{counterValue}</h2>
          <button onClick={() => (isNaN(counterValue) ? handleCount(id, 'resetStr') : handleCount(id, '+', special))}>
            +
          </button>
          {counterValue > 0 && <button onClick={() => handleCount(id, '-', special)}>-</button>}
          <button onClick={() => handleCount(id, 'startOver')}>Reset</button>
        </>
      ) : (
        <>
          <h2>Counter</h2>
          <h2>{counterValue}</h2>
          <button onClick={() => handleCount(id, '+')}>+</button>
          <button onClick={() => handleCount(id, '-')}>-</button>
          <button onClick={() => handleCount(id, 'rs')}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Counter;
