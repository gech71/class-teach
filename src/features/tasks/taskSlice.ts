import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type Task, type TaskFilter } from "./taskTypes";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );
  return (await res.json()) as Task[];
});

interface TaskState {
  tasks: Task[];
  loading: boolean;
  filter: TaskFilter;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.unshift({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<TaskFilter>) => {
      state.filter = action.payload;
    },
    editTask: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      });
  },
});

export const { addTask, toggleTask, deleteTask, setFilter, editTask } = taskSlice.actions;
export default taskSlice.reducer;
