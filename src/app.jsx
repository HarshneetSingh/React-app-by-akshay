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
import Collection from "./components/body/bodyInnerComps/RestaurantUI/Collection";
import HomeMain from "./components/body/bodyInnerComps/RestaurantUI/HomeMain";
import useRestaurant from "./utils/useRestaurant";

AllRestaurantsContext.displayName = "RestaurantContext";

// made npm formic page  


const Cart = lazy(() => import("./components/body/Cart"))
const App = () => {
    const [restaurantContext, setRestaurantContext] = useState(null)
    const [locationBarState, setLocationBar] = useState(false)
    const [filterBarState, setFilterBar] = useState(false)
    const [location, setLocation] = useState({
        name: ["Other", "New Delhi, Delhi, India"],
        lat: '28.6139391',
        lng: '77.2090212'
    })
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurant(location,setRestaurantContext)

    return (
        <AllRestaurantsContext.Provider value={[restaurantContext, setRestaurantContext]} >
            <LocationContext.Provider value={[location, setLocation]}>
                <div className="overflow-hidden  w-screen relative">
                    {/* location bar  */}
                    <LocationBar locationBarState={locationBarState} setLocationBar={setLocationBar} />
                    {/* <FilterBar filterBarState={filterBarState} setFilterBar={setFilterBar} /> */}

                    <div className={`  ${(locationBarState === true || filterBarState === true) ? `pointer-events-none  h-screen ` : " opacity-1 "}  `}
                    >
                        {/* Header */}
                        <Header locBarStateFunc={setLocationBar} />

                        {/* Body */}
                        <div className="pt-20">
                            <Outlet context={[setFilterBar,[allRestaurants, filteredRestaurants, setFilteredRestaurants]]} />
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
                children: [
                    {
                        path: "/",
                        element: <HomeMain />
                        
                    },
                    {
                        path: "/restaurant/:stringResid",
                        element: <RestaurantMenu />
                    },
                    {
                        path: "/collections/:resid",
                        element: <Collection />
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
            }
        ]
    }   
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


