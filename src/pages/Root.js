import React from "react";
import MainHeader from "../components/MainNavigation/MainHeader";
import { Outlet } from "react-router-dom";
const Root = () => {

    return (
        <>
            <MainHeader></MainHeader>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );

}
export default Root;
