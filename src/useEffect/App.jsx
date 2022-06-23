import { useEffect, useState } from 'react';

const App = () => {
  const [key, setKey] = useState('');
  const [gameStarted, setGameStarted] = useState('false');
  const [count, setCount] = useState(0);

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    const randomKey = generateRandomKey();
    setKey(randomKey);
  }, [count]);

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown(e));
    return () => {
      window.removeEventListener('keydown', (e) => handleKeyDown(e));
    };
  }, [key]);

  const generateRandomKey = () => {
    const randomKey = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    return randomKey;
  };

  const handleKeyDown = (e) => {
    if (e.key === key) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <h2>Press:</h2>
      <h1>{key}</h1>
    </>
  );
};

export default App;
