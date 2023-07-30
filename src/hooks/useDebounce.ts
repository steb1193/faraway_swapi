import { useRef } from 'react';

export const useDebounce = (ms = 500) => {
  const timeoutLink = useRef<NodeJS.Timeout>();
  return (cb: VoidFunction) => {
    timeoutLink.current && clearTimeout(timeoutLink.current);
    timeoutLink.current = setTimeout(cb, ms);
  };
};
