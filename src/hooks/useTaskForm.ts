import { useState } from "react";

export const useTaskForm = () => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titleValue = e.target.value;
    setTitle(titleValue);
    validate(titleValue);
  };

  const validate = (title: string) => {
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
    handleChange,
    validate,
  };
};
