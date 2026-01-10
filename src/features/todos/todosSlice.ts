import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

const todoSSlice = createSlice({
  name: "todos",
  initialState: [] as { id: number; text: string; completed: boolean }[],
  reducers: {
    addTodo(state, action: { payload: string }) {
      state.push({
        id: nextTodoId++,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action: { payload: number }) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action: { payload: number }) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSSlice.actions;
export default todoSSlice.reducer;
