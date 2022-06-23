import { useEffect, useRef, useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const prevName = useRef(null);
  const inputRef = useRef(null);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
  });

  const handleClick = () => {
    setName('');
    inputRef.current.focus();
    prevName.current = name;
  };

  return (
    <>
      <h1>Render Count: {renderCount.current}</h1>
      <input
        type='text'
        value={name}
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Clear</button>
      {prevName.current && <h2>Previous Name was: {prevName.current}</h2>}
    </>
  );
};

export default App;
