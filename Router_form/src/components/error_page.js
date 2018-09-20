import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div className="errorContent">
      <h1>404</h1>
      <p>NOT FOUND</p>
      <Link className="btn btn-custom" to="/">Back To Home</Link>
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
    </div>
  );
}