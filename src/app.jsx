import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import { RouterProvider ,createBrowserRouter, Outlet} from "react-router-dom";
import Search from "./components/body/Search";
import Error from "./components/body/Error";
import Outlett from "./components/body/bodyComp/Outlett";
// made npm formic page  

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
                element:<Outlett/>
            }
        ]
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


