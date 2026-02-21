import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>seconds: {second}</h1>
    </div>
  );
};

export default Timer;