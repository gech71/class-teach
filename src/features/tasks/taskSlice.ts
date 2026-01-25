import { createSlice } from "@reduxjs/toolkit";
import { type Task, type TaskFilter } from "./taskTypes";
import { fetchTasks } from "./taskThunk";

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  filter: TaskFilter;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: { payload: string }) => {
      state.tasks.unshift({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action: { payload: number }) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action: { payload: number }) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action: { payload: TaskFilter }) => {
      state.filter = action.payload;
    },
    editTask: (state, action: { payload: { id: number; title: string } }) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task && !task.completed) {
        task.title = action.payload.title;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.tasks = [];
        state.error = action.error.message || "Failed to fetch tasks";
      });
  },
});

export const { addTask, toggleTask, deleteTask, setFilter, editTask } =
  taskSlice.actions;
export default taskSlice.reducer;
