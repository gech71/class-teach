import { useState } from "react";

export const useTaskForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!title.trim()) {
      setError("Task title is required");
      return false;
    }
    if (title.length < 3) {
      setError("Task title must be at least 3 characters");
      return false;
    }
    setError("");
    return true;
  };

  return {
    title,
    setTitle,
    error,
    validate,
  };
};
