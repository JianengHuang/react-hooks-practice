import { useContext, useRef } from 'react';
import App, { AppContext } from './App';
const Page3 = () => {
  const prevName = useRef(null);
  const { username, setUsername } = useContext(AppContext);

  const handleClick = () => {
    prevName.current = username;
    setUsername('');
  };

  return (
    <div>
      <button onClick={handleClick}>Clear</button>
      <br />
      <h2>Previous username was: {prevName.current}</h2>
    </div>
  );
};

export default Page3;
