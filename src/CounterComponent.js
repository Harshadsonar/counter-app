import React from 'react';


function CounterComponent({count, incrementCount, decrementCount, resetCount}) {
  return (
    <div className='counter-component'>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <div className='reset'>
      <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  )
}

export default CounterComponent;