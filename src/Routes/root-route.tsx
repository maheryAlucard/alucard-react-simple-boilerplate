import { Route, Routes } from "react-router";
import { MainContainer } from "../RoutesContainers/MainContainer";
import { MainRoute } from "./main-route";

enum RootRoutPaths {
    MAIN = "/",
}

const RootRoute = () => {
    return (
        <Routes>
            <Route path={RootRoutPaths.MAIN} element={<MainContainer />}>
                {MainRoute}
            </Route>
        </Routes>
    )
}

export { RootRoute, RootRoutPaths };