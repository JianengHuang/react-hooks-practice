import { useReducer } from 'react';
import reducer from './reducer';

const initalState = {
  count: 0,
  text: '',
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <h1>{state.count}</h1>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'ADD', payload: 'Added one to count' });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'SUBRACT', payload: 'Subtracted one to count' });
          }}
        >
          -1
        </button>
        <h2>{state.text}</h2>
      </div>
    </>
  );
};

export default App;
