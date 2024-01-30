import React from 'react';
const Key = () => {
    console.log('Key pressed!');
  return (
    <div>
      <input type="text" onKeyPress={Key}  />
    </div>
  );
};
export default Key;
