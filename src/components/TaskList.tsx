import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import type { TaskState } from "../features/tasks/taskSlice";
import TaskListLoading from "./TaskListLoading";

const TaskList = () => {
  const { tasks, loading, filter, error } = useSelector(
    (state: { tasks: TaskState }) => state.tasks,
  );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  if (loading) return <TaskListLoading />;

  if (error)
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-lg shadow-md">
        <p className="text-red-700 font-semibold text-lg">Error</p>
        <p className="text-red-600 mt-1">{error}</p>
      </div>
    );
  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
