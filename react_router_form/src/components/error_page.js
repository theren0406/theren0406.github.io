import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div className="errorContent">
      <h1>404</h1>
      <p>NOT FOUND</p>
      <Link className="btn btn-custom" to="/">Back To Home</Link>
      <div className="cloud x1"></div>
      <div className="cloud x1_5"></div>
      <div className="cloud x2"></div>
    </div>
  );
}