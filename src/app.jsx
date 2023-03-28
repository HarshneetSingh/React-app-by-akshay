import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider ,createBrowserRouter, Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Search from "./components/body/Search";
import Error from "./components/body/Error";
import RestaurantMenu from "./components/body/bodyComp/RestaurantMenu";
import Shimmer from "./components/body/bodyComp/Shimmer";
import  Help  from "./components/body/Help";



// made npm formic page  
// How do you create Nested Routes react-router-dom cofiguration , had to make main swiggy page with nested routing for relevant and all


const Cart=lazy(()=>import("./components/body/Cart"))
const App = () => {
    return (
        <>
        <Header />
        <Outlet/>
        <Footer />
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/search",
                element:<Search/>
            },
            {
                path: "/restaurant/:stringResid",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element: <Suspense fallback={<Shimmer/>}><Cart/></Suspense>
               
            },
            {
                path:"/help",
                element:<Help/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


