import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  return (
    <>
      <h1>Your name is: {name}</h1>
      <form>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
};

export default App;
