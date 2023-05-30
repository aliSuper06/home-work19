import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completed: (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id === action.payload ? { ...el, completed: !el.completed } : el
      );
    },
    edit: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.newText }
          : todo
      );
    },
  },
});

export const AcitonTypeTodo = todoSlice.actions;
