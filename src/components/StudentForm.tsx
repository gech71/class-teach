import { useEffect } from "react";
import { type Student } from "../models/Student";
import { useForm } from "../hooks/useForm";
import { formatAcademicYear } from "../utils/yearFormatter";
import { validateStudent } from "../utils/validators/studentValidator";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  selectedStudent: Student | null;
}

const StudentForm = ({ onSubmit, selectedStudent }: StudentFormProps) => {
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
