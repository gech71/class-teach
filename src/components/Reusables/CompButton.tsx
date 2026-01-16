import React from "react";
const VARIANT_STYLES = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400",
  secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800 focus:ring-gray-400",
  danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400",
  disabled: "bg-gray-200 text-gray-400 cursor-not-allowed",
};
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const CompButton = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-75";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${
        disabled ? VARIANT_STYLES.disabled : VARIANT_STYLES[variant]
      }`}
    >
      {children}
    </button>
  );
};

export default CompButton;
