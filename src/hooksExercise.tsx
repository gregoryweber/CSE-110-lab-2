import React, { useState, useEffect, useContext } from "react";
import { ThemeContext, themes } from "./ThemeContext";

function ClickCounter() {
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div
      style={{
        background: theme.background,
        color: theme.foreground,
        padding: "20px",
      }}>
      <p>You clicked {count} times </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ background: theme.foreground, color: theme.background }}>
        Click me
      </button>
    </div>
  );
}

// Wrapper component to provide context
function ToggleTheme({ setCurrentTheme }: { setCurrentTheme: any }) {
  const currentTheme = useContext(ThemeContext);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <button onClick={toggleTheme}> Toggle Theme </button>
      <ClickCounter />
    </ThemeContext.Provider>
  );
}

export default ToggleTheme;
