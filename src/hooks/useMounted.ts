import { useState } from 'react';
import useTimeout from './useTimeout';

const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useTimeout(() => {
    setIsMounted(true);
  }, 0);
  return isMounted;
};

export default useMounted;
