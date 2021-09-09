import React from 'react';
import ToDoIndex from './ToDoIndex';
import ToDo from './ToDo';

class ToDoList extends React.Component{

    state = {
        todos: []
    };

    addTodo = todo => {
        this.setState({
            //create a copy of array so state is not mutated
            //add a todo at the beginning and then copy the rest
            todos: [todo, ...this.state.todos]
        });
    };

    toggleComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    //keeps the same id and text and updates complete state
                    return{ ...todo, complete: !todo.complete };
                }else{
                    return todo;
                }
            })
        });
    };

    render(){
        return(
            <div>
                <ToDoIndex onSubmit={this.addTodo} />
                {this.state.todos.map(todo => (
                    <ToDo 
                        key={todo.id} 
                        toggleComplete={() => this.toggleComplete(todo.id)} 
                        todo={todo} 
                    />
                ))}
            </div>
        );
    }
}

export default ToDoList;