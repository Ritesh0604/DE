import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainNavigation/MainHeader";
import Root from "./pages/Root";
import Block from "./components/Block/Block";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";

const router = createBrowserRouter(
    [{
        path: '/',
        element:<Root/>,
        children:[
            {path:'',element: <Home/>},
            {path:'navigate',element: <Block/>},
            {path:'login',element: <Login/>},
            {path:'form',element: <Form/>},
            
        ]
    }
]);

function App() {
    return (
        // <React.Fragment>
        //     <MainHeader />
        //     <main>
        //         <Home />
        //     </main>
        // </React.Fragment>
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
