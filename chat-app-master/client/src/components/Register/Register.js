import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export const Register = () => {
  var name=''
  const handleSubmit =function (event)  {
    alert('Giá trị đã được submit: '+name );
    event.preventDefault();
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Register</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Name" className="joinInput" type="text"  onChange={(event) => {name =event.target.value}}/>
        </div>
        <div>
          <input placeholder="password" className="joinInput mt-20" type="text"  />
        </div>
        <div>
          <input placeholder="email" className="joinInput mt-20" type="text"  />
        </div>
          <button className={'button mt-20'} type="submit">Sign Up</button>
        <Link  to={`/`}>
          <button className={'button mt-20'} >Sign In</button>
        </Link></form>
      </div>
    </div>
  );
}