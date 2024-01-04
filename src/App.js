import "./App.css";
import React, { useEffect, useState } from "react";
import CounterComponent from "./CounterComponent";

const App = () => {
  const [count, setCount] = useState(Number(localStorage.getItem("count")));

useEffect(() => {
  const storedCount= localStorage.getItem("count");
  if(storedCount){
    setCount(parseInt(storedCount));
  }
},[setCount])

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count",newCount);
  };

  const decrementCount = () => {
    const newCount = count - 1;
    setCount(newCount);
    localStorage.setItem("count",newCount);
  };

  const resetCount = () => {
    const newCount = 0;
    setCount(newCount);
    localStorage.setItem("count",newCount);
  };
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <CounterComponent
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
      />
    </div>
  );
}

export default App;
