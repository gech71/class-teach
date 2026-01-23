import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "./features/tasks/taskSlice";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilterButtons from "./components/TaskFilter";

const App = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-blue-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center">
          ✅ Task Manager
        </h1>

        <TaskForm />
        <TaskFilterButtons />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
