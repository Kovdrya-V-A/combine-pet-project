import { createContext} from "react";

export enum ETheme {
    LIGHT = "light",
    DARK = "dark",
}

export interface IThemeContext {
    theme?: ETheme;
    setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_THEME_KEY = "theme";