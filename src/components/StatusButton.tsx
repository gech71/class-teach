interface StatusButtonProps {
  isActive: boolean;
}

const StatusButton = ({ isActive }: StatusButtonProps) => {
  const buttonColor = isActive
    ? "bg-green-500 hover:bg-green-600"
    : "bg-gray-400 hover:bg-gray-500";
  return (
    <button
      className={`text-white font-medium py-2 px-4 rounded ${buttonColor}`}
    >
      {isActive ? "Online" : "Offline"}
    </button>
  );
};

export default StatusButton;
