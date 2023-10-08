import Root from "../Layouts/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceInfo from "../Pages/Home/Components/Details/ServiceInfo";


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
                element : <ServiceInfo></ServiceInfo>,
                loader: () => fetch('arena.json')
            },
        ]
    }
])

export default routes;