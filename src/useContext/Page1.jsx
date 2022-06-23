import { useContext } from 'react';
import { AppContext } from './App';

const Page1 = () => {
  const { username } = useContext(AppContext);
  return <h1>Username: {username}</h1>;
};

export default Page1;
