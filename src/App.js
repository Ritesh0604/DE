import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./pages/Root";
import Block from "./components/Block/Block";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import Department from "./components/Department/Department";
const router = createBrowserRouter(
    [{
        path: '/',
        element:<Root/>,
        children:[
            {path:'',element: <Home/>},
            {path:'navigate',element: <Block/>},
            {path:'login',element: <Login/>},
            {path:'form',element: <Form/>},
            {path: 'navigate/:navigateBlock',element:<Department/>}
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
