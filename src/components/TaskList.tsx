import { useSelector } from "react-redux";
import { type RootState } from "../app/store";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, loading, filter } = useSelector(
    (state: RootState) => state.tasks,
  );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
