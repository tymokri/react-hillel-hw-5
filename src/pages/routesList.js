import Home from "./Home/Home";
import Popular from "./Popular/Popular";
import Battle from "./Battle/Battle";
import Nav from "../components/Nav/Nav";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "popular",
                element: <Popular />
            },
            {
                path: "battle",
                element: <Battle />
            },
            {
                path: "*",
                element: <h2>This page doesn't seem to exist</h2>
            }
        ]
    }
]);

export const pages = [
    {
        id: 1,
        rout: "/",
        title: "Home"
    },
    {
        id: 2,
        rout: "popular",
        title: "Popular"
    },
    {
        id: 3,
        rout: "battle",
        title: "Battle"
    }
];