import React from 'react';
import './UserInput.scss'

const UserInput = (ps) => {
  let Input_style = {
    border: '2px solid #b1d9fb',
  }
  return (
    <div className="userInput">
        <input style={Input_style}
        className="uname-p" 
        type="text" 
        placeholder="Text ...🖥" 
        onChange={ps.typing} 
        value={ps.currentText}/>
    </div>
  );
};
export default UserInput;
