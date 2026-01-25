import { useState } from "react";

export const useTaskForm = () => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!title.trim()) {
      setError("Task title is required");
      return false;
    }
    if (title.length < 3) {
      setError("Task title must be at least 3 characters");
      return false;
    }
    setError(null);
    return true;
  };

  return {
    title,
    setTitle,
    error,
    validate,
  };
};
