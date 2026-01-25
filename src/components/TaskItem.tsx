import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../features/tasks/taskSlice";
import { type Task } from "../features/tasks/taskTypes";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleSave = () => {
    if (title.trim().length >= 3) {
      dispatch(editTask({ id: task.id, title }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
      {isEditing ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 mr-2 px-2 py-1 rounded border"
        />
      ) : (
        <div
          onClick={() => dispatch(toggleTask(task.id))}
          className={`flex-1 cursor-pointer ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </div>
      )}

      {isEditing ? (
        <button onClick={handleSave} className="text-green-600 font-bold mr-2">
          ✔️
        </button>
      ) : (
        task.completed || (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 mr-2"
          >
            ✏️
          </button>
        )
      )}

      {!task.completed && (
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-500"
        >
          ❌
        </button>
      )}
    </div>
  );
};

export default TaskItem;
