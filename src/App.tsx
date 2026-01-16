import { useEffect, useState } from "react";
import Button from "./components/Button";
import ButtonWithTailwind from "./components/ButtonWithTailwind";
import CardModern from "./components/CardModern";
import CardTraditional from "./components/CardTraditional";
import Lab2Button from "./components/Lab2Button";
import Lab2Tailwind from "./components/Lab2Tailwind";
import LabButton from "./components/LabButton";
import MyCard from "./components/MyCard";
import Responseive from "./components/Responseive";
import StatusButton from "./components/StatusButton";
import CompButton from "./components/Reusables/CompButton";
import Card from "./components/Reusables/Card";
import Forms from "./components/Reusables/Forms";
import LayoutContainers from "./components/Reusables/LayoutContainers";
import ReusableUIPatterns from "./components/Reusables/ReusableUIPatterns";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
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
      <ButtonWithTailwind />
      <CardTraditional />
      <CardModern />
      <MyCard />
      <StatusButton isActive={true} />
      <StatusButton isActive={false} />
      <Responseive />
      <Lab2Button size="medium">Medium Button</Lab2Button>
      <Lab2Button size="large">Large Button</Lab2Button>
      <Lab2Tailwind size="medium">Medium Tailwind Button</Lab2Tailwind>
      <Lab2Tailwind size="large">Large Tailwind Button</Lab2Tailwind>

      <div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Theme ({theme})
        </button>

        <h1 className="text-3xl font-bold mt-4">Hello World</h1>
        <p className="mt-2">This is {theme} mode content</p>
      </div>
      <CompButton variant="primary" onClick={() => alert("Primary Clicked")}>
        Primary Button
      </CompButton>
      <CompButton
        variant="secondary"
        onClick={() => alert("Secondary Clicked")}
      >
        Secondary Button
      </CompButton>
      <CompButton variant="danger" onClick={() => alert("Danger Clicked")}>
        Danger Button
      </CompButton>
      <CompButton disabled>Disabled Button</CompButton>
      <Card />
      <Forms />
      <LayoutContainers />
      <ReusableUIPatterns />
    </div>
  );
};

export default App;
