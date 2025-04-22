import { FC, ReactNode, useMemo, useState } from "react";
import { ETheme, LOCAL_THEME_KEY, ThemeContext } from "./ThemeContext";


const defaultTheme = localStorage.getItem(LOCAL_THEME_KEY) as ETheme || ETheme.LIGHT;

interface IProps {
    children: ReactNode;
}

const ThemeProvider: FC<IProps> = ({ children }) => {
    const [theme, setTheme] = useState<ETheme>(defaultTheme);

    const themeProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;