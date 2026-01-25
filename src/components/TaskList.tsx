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

  if (error) return <p className="text-red-500">Error: {error}</p>;
  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
