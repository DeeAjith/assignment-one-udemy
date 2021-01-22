import React from 'react';
import './UserOutput.scss';

const UserOutput = (ps) => {

  return (
    <div className="userOutput">
        <p>Username : {ps.uName}</p>
        <p>Length: {ps.lengthOf}</p>
    </div>
  );
};
export default UserOutput;
