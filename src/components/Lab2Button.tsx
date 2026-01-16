import styles from "./Lab2Button.module.css";

interface Lab2ButtonProps {
  children: React.ReactNode;
  size?: "medium" | "large";
}
function Lab2Button({ children, size = "medium" }: Lab2ButtonProps) {
  const buttonClass =
    size === "large" ? `${styles.button} ${styles.buttonLarge}` : styles.button;

  return <button className={buttonClass}>{children}</button>;
}

export default Lab2Button;
