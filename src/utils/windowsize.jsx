import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  
  const [window_size, setWindow_size] = useState({width:0 , height:0});

  
  useEffect(() => {

    setWindow_size({
      width: window.innerWidth,
      height: window.innerHeight
    });
    const handleResize = () => {
      setWindow_size({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {width : window_size.width , height :window_size.height}
  
};

export default WindowSize;
