import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dogs",
    body: "with shampoo",
    done: true
  }
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      let oldState = Object.assign({}, state);
      let newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return Object.assign(oldState, newTodo);
    case REMOVE_TODO:
      let removeItem = {};
      Object.assign(removeItem, state);
      let item = action.todo.id;
      delete removeItem[item];
      return removeItem;
    default:
      return state;
  }
};

export default todosReducer;
