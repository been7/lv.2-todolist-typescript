import { v4 as uuidv4 } from "uuid";

// Action value
const ADD_TODO = "ADD_TODO" as const;
const DEL_TODO = "DEL_TODO" as const;
const TOGGLE_TODO = "TOGGLE_TODO" as const;

//Action Creator
export const addTodo = (payload: Todo) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload: Todo["id"]) => {
  return {
    type: DEL_TODO,
    payload,
  };
};

export const toggleTodo = (payload: Todo["id"]) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleTodo>;

// interface TodoAction {
//   type: "ADD_TODO" | "DEL_TODO" | "TOGGLE_TODO";
//   payload: Todo | string;
// }

export type Todo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

// export interface Todo {
//   id: string;
//   title: string;
//   contents: string;
//   isDone: boolean;
// }

type TodoState = Todo[];

// 초기 상태값
const initialState: TodoState = [
  {
    id: uuidv4(),
    title: "리액트",
    contents: "리액트 화이팅!",
    isDone: false,
  },
];

// 리듀서
const todos = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO: {
      const newTodos = state.filter(
        (filteredTodo) => filteredTodo.id !== action.payload
      );
      return newTodos;
    }
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    }
    default:
      return state;
  }
};

export default todos;
