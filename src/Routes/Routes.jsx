import Root from "../Layouts/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Info from "../Pages/Home/Components/Details/Info";


const routes = createBrowserRouter([
    {
        path : '/',
        element:  <Root></Root>,
        children :[
            {
                path : '/',
                element : <Home></Home>,
                loader: () => fetch('/arena.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path: '/serviceinfo/:id',
                element : <PrivateRoute><Info></Info></PrivateRoute>,
            },
        ]
    }
])

export default routes;