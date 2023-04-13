import React, { lazy, Suspense,  useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/body/Home";
import Search from "./components/body/Search";
import Error from "./components/body/Error";
import Help from "./components/body/Help";
import Offers from "./components/body/Offers";
import Shimmer from "./components/body/bodyInnerComps/RestaurantUI/Shimmer";
import FilterBar from "./components/body/bodyInnerComps/RestaurantUI/FilterBar";
import LocationBar from "./components/header/headerComp/LocationBar";
import RestaurantMenu from "./components/body/bodyInnerComps/RestaurantUI/RestaurantMenu";



// made npm formic page  
// How do you create Nested Routes react-router-dom cofiguration , had to make main swiggy page with nested routing for relevant and all


const Cart = lazy(() => import("./components/body/Cart"))
const App = () => {
    const [locationBarState, setLocationBar] = useState(false)
    const [filterBarState, setFilterBar] = useState(false)
    return (
        <div className="overflow-hidden relative">
            {/* location bar  */}
            <LocationBar locationBarState={locationBarState} setLocationBar={setLocationBar} />
            <FilterBar filterBarState={filterBarState} setFilterBar={setFilterBar} />
            <div className={`  ${(locationBarState === true || filterBarState === true) ?  `pointer-events-none h-screen overflow-y-hidden ` : " opacity-1" }  `}
               >
                {/* Header */}
                <Header locBarStateFunc={setLocationBar}  />

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
                // children: [
                //     {
                        
                //         path: "/",
                //         element: <RestaurantList />
                //     },
                //     {
                //         path: "/?sortBy=:res",
                //         element: <RestaurantList />
                //     }
                // ]
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
                element: <RestaurantMenu/>
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


