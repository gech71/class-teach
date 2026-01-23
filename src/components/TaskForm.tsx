import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { useTaskForm } from "../hooks/useTaskForm";

const TaskForm = () => {
  const dispatch = useDispatch();
  const { title, setTitle, error, validate } = useTaskForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-2">➕ Add Task</h2>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter task..."
        className={`w-full px-4 py-2 border rounded-lg ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
