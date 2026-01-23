import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../app/store";
import { setFilter } from "../features/tasks/taskSlice";
import { type TaskFilter } from "../features/tasks/taskTypes";

const filters: TaskFilter[] = ["all", "active", "completed"];

const TaskFilterButtons = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state: RootState) => state.tasks.filter);

  return (
    <div className="flex justify-center gap-3 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch(setFilter(filter))}
          className={`px-4 py-1 rounded-full capitalize ${
            activeFilter === filter
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TaskFilterButtons;
