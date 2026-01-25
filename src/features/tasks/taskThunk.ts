import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Task } from "./taskTypes";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=15",
  );
  const response: Task[] = await res.json();
  return response;
});
