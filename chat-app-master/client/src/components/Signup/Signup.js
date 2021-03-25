import React from 'react';
import { Link } from "react-router-dom";

import './Join.css';

class Signup extends React.Component{
  render(){
    return(
      <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" />
        </div>
        <div>
          <input placeholder="password" className="joinInput" type="text"  />
        </div>
        <div>
          <input placeholder="gmail" className="joinInput mt-20" type="text" o />
        </div>
        <Link >
          <button className={'button mt-20'} type="submit">Sign Up</button>
        </Link>
        

        
      </div>
    </div>
    );
  }
}