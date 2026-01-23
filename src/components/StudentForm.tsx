import { useEffect } from "react";
import { type Student } from "../models/Student";
import { useForm } from "../hooks/useForm";
import { formatAcademicYear } from "../utils/yearFormatter";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  selectedStudent: Student | null;
}

const StudentForm = ({ onSubmit, selectedStudent }: StudentFormProps) => {
  const validateStudent = (values: Student) => {
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

  const { values, setValues, errors, handleChange, handleSubmitValidation } =
    useForm<Student>(
      {
        name: "",
        email: "",
        department: "",
        year: "",
      },
      validateStudent,
    );

  useEffect(() => {
    if (selectedStudent) {
      setValues(selectedStudent);
    }
  }, [selectedStudent, setValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleSubmitValidation()) {
      const formattedStudent: Student = {
        ...values,
        year: formatAcademicYear(Number(values.year)),
      };
      onSubmit(formattedStudent);
      setValues({ name: "", email: "", department: "", year: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="text-2xl font-bold mb-4">
        {selectedStudent ? "✏️ Edit Student" : "➕ Add Student"}
      </h2>

      <input
        name="name"
        placeholder="Full Name"
        value={values.name}
        onChange={handleChange}
        className={`input ${errors.name ? "border-red-500 ring-red-300" : ""}`}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        name="email"
        placeholder="Email Address"
        value={values.email}
        onChange={handleChange}
        className={`input ${errors.email ? "border-red-500 ring-red-300" : ""}`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        name="department"
        placeholder="Department"
        value={values.department}
        onChange={handleChange}
        className={`input ${
          errors.department ? "border-red-500 ring-red-300" : ""
        }`}
      />
      {errors.department && (
        <p className="text-red-500 text-sm">{errors.department}</p>
      )}

      <input
        name="year"
        placeholder="Academic Year (1 - 5)"
        value={values.year}
        onChange={handleChange}
        className={`input ${errors.year ? "border-red-500 ring-red-300" : ""}`}
      />
      {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}

      <button className="btn-primary w-full mt-4">Save Student</button>
    </form>
  );
};

export default StudentForm;
