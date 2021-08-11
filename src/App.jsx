import './App.css';
import Counter from './components/Counter';
import React, { useState } from 'react';

function App() {
  const [allCounters, setAllCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0, special: 2 },
  ]);
  const [idGiven, setIdGiven] = useState(3);
  const [countersSum, setCountersSum] = useState(0);

  const handleCount = (id, operation, val = 1) => {
    const countersCopy = [...allCounters];
    countersCopy.map((c) => {
      if (c.id === id) {
        if (operation === '+') c.value += val;
        if (operation === '-') c.value -= val;
        if (operation === 'rs') c.value = 0;
        if (operation === 'startOver') c.value = 'start over';
        if (operation === 'resetStr') c.value = 2;
      }
      return c;
    });
    setAllCounters(countersCopy);
  };

  const addCounter = () => {
    setAllCounters([...allCounters, { id: idGiven, value: 0 }]);
    setIdGiven(idGiven + 1);
  };

  const resetAll = () => {
    const allCountersReset = allCounters.map((c) => ({ ...c, value: c.special ? 'start over' : 0 }));
    setAllCounters(allCountersReset);
  };

  return (
    <div className='App' id='App'>
      <h1>CounterS:</h1>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={resetAll}>Reset All</button>
      <h3>All counters sum: {countersSum}</h3>
      <div className='all-counters'>
        {allCounters.map((c) => (
          <Counter key={c.id} counterValue={c.value} id={c.id} handleCount={handleCount} special={c.special || false} />
        ))}
      </div>
    </div>
  );
}

export default App;
