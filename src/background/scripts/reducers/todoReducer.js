// Action types
const TOGGLE_OPEN_TODOS = "TOGGLE_OPEN_TODOS";
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO_DONE = "TOGGLE_TODO_DONE";
const DELETE_TODO = "DELETE_TODO";
const OPEN_ACTIVE_TODO = "OPEN_ACTIVE_TODO";
const ADD_SUB_TASK = "ADD_SUB_TASK";
const DONE_SUB_TASK = "DONE_SUB_TASK";

const initialState = {
  todos: [
    {
      id: "1",
      value: "Make an extension",
      done: false,
      subTasks: ["Learn How", "Make"],
    },
  ],
  activeTodo: "",
  isTodosOpen: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, done: !todo.done };
          } else return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case OPEN_ACTIVE_TODO:
      return {
        ...state,
        activeTodo: action.payload,
      };
    case ADD_SUB_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.todoId) {
            return {
              ...todo,
              subTasks: [...todo.subTasks, action.payload.subTask],
            };
          } else return todo;
        }),
      };
    case DONE_SUB_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.todoId) {
            return {
              ...todo,
              subTasks: todo.subTasks.filter(
                (task) => task !== action.payload.subTask
              ),
            };
          } else return todo;
        }),
      };
    case TOGGLE_OPEN_TODOS:
      return {
        ...state,
        isTodosOpen: !state.isTodosOpen,
      };
    default:
      return state;
  }
};

// Action creators
export const toggleOpenTodos = () => {
  return {
    type: TOGGLE_OPEN_TODOS
  }
}
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  }
}
export const toggleTodoDone = (payload) => {
  return {
    type: TOGGLE_TODO_DONE,
    payload
  }
}
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  }
}
export const openActiveTodo = (payload) => {
  return {
    type: OPEN_ACTIVE_TODO,
    payload
  }
}
export const addSubTask = (payload) => {
  return {
    type: ADD_SUB_TASK,
    payload
  }
}
export const doneSubTask = (payload) => {
  return {
    type: DONE_SUB_TASK,
    payload
  }
}