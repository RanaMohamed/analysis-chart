import { useEffect, useState } from "react";

import light from "!css-loader!src/style/light.css";
import dark from "!css-loader!src/style/dark.css";

const themes: Record<string, string> = {
  light,
  dark,
};

export const useTheming = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    const styleElement = document.createElement("style");

    styleElement.innerHTML = themes[theme];

    document.head.append(styleElement);

    return () => styleElement.remove();
  }, [theme]);

  return {
    theme,
    otherTheme: theme === "light" ? "dark" : "light",
    changeTheme,
  };
};
