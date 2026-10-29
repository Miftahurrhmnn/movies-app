import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Film from "../pages/Film";
import Detailfilm from "../pages/DetailFilm";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/film',
        element: <Film/>
    },
    {
        path: '/film/:id',
        element: <Detailfilm/>
    }
];

export default routes;