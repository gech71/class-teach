import type { Student } from "../../models/Student";

export const validateStudent = (values: Student) => {
  const errors: Partial<Record<keyof Student, string>> = {};

  // Name
  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Email
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  // Department (letters only, min 3 chars)
  if (!values.department.trim()) {
    errors.department = "Department is required";
  } else if (values.department.length < 3) {
    errors.department = "Department must be at least 3 characters";
  } else if (!/^[A-Za-z\s]+$/.test(values.department)) {
    errors.department = "Department must contain only letters";
  }

  // Academic Year (number between 1–5)
  if (!values.year.trim()) {
    errors.year = "Academic year is required";
  } else if (!/^[0-9]+$/.test(values.year)) {
    errors.year = "Academic year must be a number";
  } else {
    const yearNumber = Number(values.year);
    if (yearNumber < 1 || yearNumber > 5) {
      errors.year = "Academic year must be between 1 and 5";
    }
  }

  return errors;
};
