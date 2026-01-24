import type { Student } from "../models/Student";

interface StudentCardProps {
  student: Student;
  onEdit: (student: Student) => void;
}

const StudentCard = ({ student, onEdit }: StudentCardProps) => {
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {student.year}
        </span>
      </div>

      <p className="text-gray-600 mb-1">📧 {student.email}</p>
      <p className="text-gray-600 mb-3">🏬 {student.department}</p>

      <button onClick={() => onEdit(student)} className="btn-secondary w-full">
        Edit Profile
      </button>
    </div>
  );
};

export default StudentCard;
