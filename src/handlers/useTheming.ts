import { useEffect } from "react";

import light from "!css-loader!src/style/light.css";
import dark from "!css-loader!src/style/dark.css";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "@redux/layout/layoutSelectors";
import { setTheme } from "@redux/layout/layoutActions";

const themes: Record<string, string> = {
  light,
  dark,
};

export const useTheming = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const changeTheme = (newTheme: string) => {
    dispatch(setTheme(newTheme));
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
