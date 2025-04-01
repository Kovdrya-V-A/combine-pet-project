import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { AppRoutes } from "./enums/routes";
import { MainPageLazy } from "./components/pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./components/pages/AboutPage/AboutPage.lazy";
//INFO: в версии css-loader 7.0.0+ необходим именованный иморт
import * as style from "./App.module.scss"

const InnerApp = () => {

    const Layout = () => (
        <div className={style.layout}>
            <Outlet />
        </div>
    );
    return ( 
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout />
                    }>
                        <Route path="/" element={<MainPageLazy/>}/>
                        <Route path={AppRoutes.About} element={<AboutPageLazy/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
};

function App() {
    return (
        <BrowserRouter>
            <InnerApp />
        </BrowserRouter>
    );
}

export default App;
