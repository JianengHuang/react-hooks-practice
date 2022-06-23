import { useRef } from 'react';

const useCountRenders = () => {
  const renders = useRef(0);
  console.log('Renders: ', renders.current++);
};

export default useCountRenders;
