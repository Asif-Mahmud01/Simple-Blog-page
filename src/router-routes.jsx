import { createBrowserRouter } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Main from "./Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/post/:id",
                element: <Single></Single>
            },
            {
                path: "/write",
                element: <Write></Write>
            },
            {
                path: "/settings",
                element: <Settings></Settings>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])