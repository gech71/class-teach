import { useState } from "react";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";
import { studentsData } from "./data/students";
import { type Student } from "./models/Student";


const App = () => {
  const [students, setStudents] = useState<Student[]>(studentsData);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleSave = (student: Student) => {
    if (student.id) {
      setStudents(students.map((s) => (s.id === student.id ? student : s)));
    } else {
      setStudents([...students, { ...student, id: Date.now() }]);
    }
    setSelectedStudent(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          🎓  Student Profile Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <StudentForm
              onSubmit={handleSave}
              selectedStudent={selectedStudent}
            />
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {students.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onEdit={setSelectedStudent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
