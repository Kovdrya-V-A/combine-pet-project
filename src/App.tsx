import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./enums/routes";
import { MainPageLazy } from "./components/pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./components/pages/AboutPage/AboutPage.lazy";
import { useTheme } from "./theme/useTheme";
import { Suspense } from "react";
import ThemeProvider from "./theme/ThemeProvider";
import MainLoader from "./components/loders/MainLoader/MainLoader";
import Header from "./components/Header/Header";
import "./styles/index.scss";


const InnerApp = () => {
    const { theme } = useTheme()

    const Layout = () => (
        <div className={`app ${theme}`}>
            <Header/>
            <div className="contentWrapper">
                <Suspense fallback={<MainLoader />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout />
                }>
                <Route path="/" element={<MainPageLazy />} />
                <Route path={AppRoutes.About} element={<AboutPageLazy />} />
            </Route>
        </Routes>
    );
};

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <InnerApp />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
