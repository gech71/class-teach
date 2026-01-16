import React from "react";

interface Lab2TailwindProps {
  children: React.ReactNode;
  size?: "medium" | "large";
}
const Lab2Tailwind = ({ children, size = "medium" }: Lab2TailwindProps) => {
  const baseClasses =
    "bg-blue-500 text-white py-2 px-4 rounded font-semibold border-none cursor-pointer hover:bg-blue-600 transition-colors";
  const sizeClasses = size === "large" ? "py-3 px-6 text-lg" : "";

  return (
    <button className={`${baseClasses} ${sizeClasses}`}>{children}</button>
  );
};

export default Lab2Tailwind;
