import { useState, createContext } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export const AppContext = createContext(null);

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      <AppContext.Provider value={{ username, setUsername }}>
        <Page1 />
        <Page2 />
        <Page3 />
      </AppContext.Provider>
    </>
  );
};

export default App;
