import { Route } from "react-router";
import { About } from "../Pages/About";
import Home from "../Pages/Home";

enum MainRoutPaths {
    HOME = "home",
    ABOUT = "about"
}

const MainRoute = [
    <Route key={0} path="/" element={<Home />} />,
    <Route key={1} path={MainRoutPaths.HOME} element={<Home />} />,
    <Route key={2} path={MainRoutPaths.ABOUT} element={<About />} />,
]

export { MainRoute, MainRoutPaths };