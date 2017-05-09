import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receive, removeTodo }) => (
  <div className="todo-list">
    <ul>
      {todos.map((el, idx) =>
        <TodoListItem todo={el} removeTodo={removeTodo} receiveTodo={receive} key={idx}/>
      )}
    </ul>
    <TodoForm receiveTodo={receive}/>
  </div>
);

export default TodoList;
