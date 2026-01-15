import Button from "./components/Button";
import LabButton from "./components/LabButton";

const App = () => {
  return (
    <div>
      <h1>Welcome to CSS Modules Demo</h1>
      <Button>Default Button</Button>
      <Button type="primary">Primary Button</Button>
      <br />
      <br />
      <div style={{ display: "flex", gap: "10px" }}>
        <h1>Styled Buttons with CSS Modules</h1>
        <LabButton variant="primary">Primary Action</LabButton>
        <LabButton variant="secondary">Secondary Action</LabButton>
        <LabButton variant="danger">Delete Item</LabButton>
        <LabButton>Default LabButton</LabButton>
      </div>
    </div>
  );
};

export default App;
