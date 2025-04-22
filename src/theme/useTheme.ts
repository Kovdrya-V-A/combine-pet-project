import { useContext } from "react";
import { ETheme, LOCAL_THEME_KEY, ThemeContext } from "./ThemeContext";

interface IResultTheme {
    theme: ETheme;
    toggleTheme: (theme: ETheme) => void;
}

export function useTheme () : IResultTheme {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (theme: ETheme) => {
        setTheme(theme)
        localStorage.setItem(LOCAL_THEME_KEY, theme);
    };

    return {
        theme,
        toggleTheme,
    };
}