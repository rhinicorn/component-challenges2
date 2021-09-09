import React, { useState } from 'react';
import { Container } from 'reactstrap';
import shortid from 'shortid';

class ToDoIndex extends React.Component{
    
    state={
        text: ""
    };

    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //3rd party library- shortid- for array ids instead of manual loop generation
    handleSubmit= (e) =>{
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
    };


    render(){
        return(
        <Container className="App">
            <br />
            <h1 className="App-intro">
                In this challenge your goal is to create a to do list: 
            </h1>
            <hr />
            <ul>
            <li>
            ability to accept a task from a user
            </li>
            <li>
                ability to add this to the state
            </li>
            <li>
                ability to display all of the tasks
            </li>
            <li>
                ability to evaluated if a task was completed and update the state
            </li>
            </ul>
            <hr />
            <div>
            <h3>Submit a task and click it in the list to mark it complete.</h3>
            <form >
                <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="Enter a task"/>
                <button onClick={this.handleSubmit}>Submit Task</button>
            </form>
            </div>
        </Container>
        );
    }
}


export default ToDoIndex;