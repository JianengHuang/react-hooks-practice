import { useState, useCallback } from 'react';
import Child from './Child';

const App = () => {
  const [count, setCount] = useState(0);
  const [incrementNumber, setIncrementNumber] = useState(0);

  const increment = useCallback(
    (increment) => {
      setCount((prevCount) => prevCount + increment);
    },
    [setIncrementNumber]
  );

  return (
    <>
      <h1>Count: {count}</h1>
      <Child
        increment={increment}
        incrementNumber={incrementNumber}
        setIncrementNumber={setIncrementNumber}
      />
    </>
  );
};

export default App;
