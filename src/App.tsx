import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilterButtons from "./components/TaskFilter";
import { fetchTasks } from "./features/tasks/taskThunk";

const App = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-silver-400 p-6">
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
