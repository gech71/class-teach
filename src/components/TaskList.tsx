import { useSelector } from "react-redux";
import { type RootState } from "../app/store";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, loading } = useSelector(
    (state: RootState) => state.tasks
  );

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
