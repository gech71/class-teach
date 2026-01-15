// Button.js

import styles from "./Button.module.css"; // 'styles' is an object

interface ButtonProps {
  type?: "default" | "primary";
  children: React.ReactNode;
}
function Button({ type = "default", children }: ButtonProps) {
  const buttonClass = type === "primary" ? styles.primary : styles.button;
  return <button className={buttonClass}>{children}</button>;
}

export default Button;
