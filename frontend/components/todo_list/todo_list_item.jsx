import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.removeTodo = props.removeTodo;
    this.receiveTodo = props.receiveTodo;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleDelete(event){
    event.preventDefault();
    this.removeTodo(this.props.todo);
  }

  handleToggle(event){
    let newTodo = {};
    if (this.props.todo.done) {
      Object.assign(newTodo, this.props.todo, {done: false});
    } else {
      Object.assign(newTodo, this.props.todo, {done: true});
    }
    this.receiveTodo(newTodo);
  }

  render(){
    let toggle = "";
    if (this.props.todo.done) {
      toggle = "Done";
    } else {
      toggle = "Undone";
    }
    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleToggle}>{toggle}</button>
      </li>
    );
  }
}

export default TodoListItem;
