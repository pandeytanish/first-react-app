import React, { useRef } from 'react';

function Counter() {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current += 1;
    console.log(`Button clicked ${clickCount.current} times.`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Counter;
