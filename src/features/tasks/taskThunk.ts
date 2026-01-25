import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Task } from "./taskTypes";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=15",
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const response: Task[] = await res.json();
    return response;
  } catch (error) {
    throw error;
  }
});
