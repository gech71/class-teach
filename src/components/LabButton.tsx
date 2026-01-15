import styles from "./LabButton.module.css";
interface LabButtonProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "danger";
}

const LabButton = ({ children, variant = "default" }: LabButtonProps) => {
  // Combine base style with the chosen variant style
  const buttonClass = `${styles.base} ${styles[variant] || styles.base}`;

  return <button className={buttonClass}>{children}</button>;
};

export default LabButton;
