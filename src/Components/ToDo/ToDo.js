import React, {useState} from 'react';
import {Container} from 'reactstrap';

//renders second component to hold the actual list of tasks
function ToDo(props) {
  return(
    <Container className="App">
      <br />     
      
      <div style={{textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete}> 
          {props.todo.text}
      </div>
    </Container> 
  );
}

export default ToDo; 
