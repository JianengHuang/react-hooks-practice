import { useContext } from 'react';
import { AppContext } from './App';

const Page2 = () => {
  const { username, setUsername } = useContext(AppContext);
  return (
    <>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
};

export default Page2;
