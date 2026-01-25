const TaskListLoading = () => {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
        >
          {/* Text placeholder */}
          <div className="flex-1 h-4 bg-gray-200 rounded-md mr-4"></div>

          {/* Action buttons */}
          <div className="bg-gray-200 mr-2 w-8 h-5 rounded-2xl"></div>
          <div className="bg-gray-200 w-8 h-5 rounded-2xl"></div>
        </div>
      ))}
    </div>
  );
};

export default TaskListLoading;
