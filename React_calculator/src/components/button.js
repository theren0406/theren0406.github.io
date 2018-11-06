import React from 'react';

const button = props => {
  let className = '';
  switch (props.className) {
    case 'isEqual': 
      className = 'my-btn equal-btn';
      break;
    case 'isOperator': 
      className = 'my-btn operator-btn';
      break;
    default:
      className ='my-btn';
  }
  
  return (
    <div className={className} onClick={props.click}>
      {props.content}
    </div>
  );
};

export default button;