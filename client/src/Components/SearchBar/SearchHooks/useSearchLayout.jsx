import { useState } from 'react';

function useSearchLayout() {
  const [barOpen, setBarOpen] = useState(false);
  const [barHeight, setBarHeight] = useState(false);

  const showBoxUp = () => {
    setBarOpen((value) => !value);
  };

  const hideBoxDown = () => {
    setBarOpen(false);
  };

  return [barOpen, barHeight, setBarOpen, setBarHeight, showBoxUp, hideBoxDown];
}

export default useSearchLayout;
