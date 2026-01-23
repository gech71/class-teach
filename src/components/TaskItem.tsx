import { type Task } from "../features/tasks/taskTypes";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/tasks/taskSlice";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
      <div
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => dispatch(toggleTask(task.id))}
      >
        {task.title}
      </div>

      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
};

export default TaskItem;
