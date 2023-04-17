import React, { lazy, Suspense, useState } from "react";
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
import AllRestaurantsContext from "./utils/AllRestroContext";
import LocationContext from "./utils/LocationContext";

AllRestaurantsContext.displayName = "RestaurantContext";

// made npm formic page  
// How do you create Nested Routes react-router-dom cofiguration , had to make main swiggy page with nested routing for relevant and all


const Cart = lazy(() => import("./components/body/Cart"))
const App = () => {
    const [restaurantContext, setRestaurantContext] = useState(null)
    const [locationBarState, setLocationBar] = useState(false)
    const [location,setLocation]=useState({
        name:["Other","New Delhi, Delhi, India"],
        lat:'28.5649034',
        lng:'77.2403317'
    })

    const [filterBarState, setFilterBar] = useState(false)
    return (
        <AllRestaurantsContext.Provider value={[restaurantContext, setRestaurantContext]} >
            <LocationContext.Provider value={[location,setLocation]}>
                <div className="overflow-hidden w-screen relative">
                    {/* location bar  */}
                    <LocationBar locationBarState={locationBarState} setLocationBar={setLocationBar} />
                    {/* <FilterBar filterBarState={filterBarState} setFilterBar={setFilterBar} /> */}

                    <div className={`  ${(locationBarState === true || filterBarState === true) ? `pointer-events-none  h-screen ` : " opacity-1 "}  `}
                    >
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
            </LocationContext.Provider>
        </AllRestaurantsContext.Provider>
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
                element: <RestaurantMenu />
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


