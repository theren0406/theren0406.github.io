import React, { Component } from 'react';

export default function Modal(props) {
  const className = `modal-dialog ${props.size}`;
	return (
		<div className="modal fade" id={props.id} tabIndex="-1" role="dialog">
  			<div className={className}>
    			<div className="modal-content">
    				<div className="modal-header">
              <p className="modalTitle">{props.title}</p>
       				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
         				<span aria-hidden="true">&times;</span>
       				</button>
     				</div>
      			<div className="modal-body">{props.children}</div>
   				</div>
 				</div>
			</div>
	);
}