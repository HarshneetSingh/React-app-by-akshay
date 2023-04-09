import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/body/Home";
import Search from "./components/body/Search";
import Error from "./components/body/Error";
import RestaurantMenu from "./components/body/bodyInnerComps/RestaurantUI/Shimmer";
import Help from "./components/body/Help";
import Offers from "./components/body/Offers";
import Shimmer from "./components/body/bodyInnerComps/RestaurantUI/Shimmer";
import RestaurantList from "./components/body/bodyInnerComps/RestaurantUI/RestaurantList"
import Location from "./components/header/headerComp/Location";
import FilterBar from "./components/body/bodyInnerComps/RestaurantUI/FilterBar";



// made npm formic page  
// How do you create Nested Routes react-router-dom cofiguration , had to make main swiggy page with nested routing for relevant and all


const Cart = lazy(() => import("./components/body/Cart"))
const App = () => {
    const [locationBarState, setLocationBar] = useState(false)
    const [filterBarState, setFilterBar] = useState(false)
    return (
        <div className="overflow-x-hidden">
            {/* location bar  */}
            <Location locationBarState={locationBarState} setLocationBar={setLocationBar} />
            <FilterBar filterBarState={filterBarState} setFilterBar={setFilterBar} />
            <div className={`  ${(locationBarState === true) ? "pointer-events-none opacity-10  overflow-hidden  " : " opacity-1"}  h-[1300px]  global   `}
                onClick={() => {
                    if (locationBarState === true) {
                        setLocationBar(false)
                    }
                }}>

                {/* Header */}
                <Header locBarStateFunc={setLocationBar} />

                {/* Body */}
                <div className="pt-20">
                    <Outlet context={[setFilterBar]} />
                </div>
                {/* footer */}
                <Footer />
            </div>
        </div>

    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/",
                        element: <RestaurantList />
                    },
                    {
                        path: "/?sortBy=:res",
                        element: <RestaurantList />
                    }
                ]
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/offers",
                element: <Offers />
            },
            {
                path: "/cart",
                element: <Suspense fallback={<Shimmer />}><Cart /></Suspense>

            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/restaurant/:stringResid",
                element: <RestaurantMenu />
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


