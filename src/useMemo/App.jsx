import { useMemo, useState } from 'react';

const App = () => {
  const [words, setWords] = useState(['']);
  const [word, setWord] = useState('');
  const [show, setShow] = useState(true);

  const findLongestWord = (words) => {
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    console.log('searched');
    return longestWord;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWords((prevWords) => [...words, word]);
    setWord('');
  };

  const getLongestWord = useMemo(() => {
    return findLongestWord(words);
  }, [words]);

  return (
    <>
      <h1>LongestWord: {getLongestWord}</h1>
      <h1>Words:</h1>
      <button onClick={() => setShow(!show)}>Hide Words</button>
      {show &&
        words.map((word, index) => {
          return <h2 key={index}>{word}</h2>;
        })}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </form>
    </>
  );
};

export default App;
