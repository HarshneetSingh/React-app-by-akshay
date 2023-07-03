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
import Shimmer from "./components/body/bodyInnerComps/RestaurantUI/HomeMainShimmer";
import FilterBar from "./components/body/bodyInnerComps/RestaurantUI/FilterBar";
import LocationBar from "./components/header/headerComp/LocationBar";
import RestaurantMenu from "./components/body/bodyInnerComps/RestaurantUI/RestaurantMenu";
import AllRestaurantsContext from "./utils/AllRestroContext";
import OfferModalContext from "./utils/OfferModalContext";

import LocationContext from "./utils/LocationContext";
import Collection from "./components/body/bodyInnerComps/RestaurantUI/Collection";
import HomeMain from "./components/body/bodyInnerComps/RestaurantUI/HomeMain";
import useRestaurant from "./utils/useRestaurant";
import OfferModalCard from "./components/body/bodyInnerComps/OffersUI/OfferModalCard";
import SortFilterContext from "./utils/SortFilterContext";

AllRestaurantsContext.displayName = "RestaurantContext";

// made npm formic page  


const Cart = lazy(() => import("./components/body/Cart"))
const App = () => {
    const [restaurantContext, setRestaurantContext] = useState(null)
    const [locationBarState, setLocationBar] = useState(false)

    const [filterBarState, setFilterBar] = useState(false)
    const [filterArr, setFilterArr] = useState(
        [
            { CUISINES: [] },
            { SHOW_RESTAURANTS_WITH: [] }
        ]
    )
    const [selectedSort, setSelectedSort] = useState({
        sort: "RELEVANCE",
        filter: undefined
    })
    const [offerModalState, setOfferModalState] = useState(false)
    const [offerModalData, setOfferModalData] = useState(null)
    const [copied, setCopied] = useState("")

    const [location, setLocation] = useState({
        name: ["Other", "New Delhi, Delhi, India"],
        lat: '28.6139391',
        lng: '77.2090212'
    })
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants,setRestaurants] = useRestaurant(location, setRestaurantContext)

    return (
        <AllRestaurantsContext.Provider value={[restaurantContext, setRestaurantContext]} >
            <LocationContext.Provider value={[location, setLocation]}>
                <OfferModalContext.Provider value={{ offerModalData, setOfferModalData, offerModalState, setOfferModalState, copied, setCopied }}>
                    <SortFilterContext.Provider value={[selectedSort, setSelectedSort]}>
                        <div className="overflow-hidden  w-screen relative">
                            {/* location bar  */}
                            <LocationBar locationBarState={locationBarState} setLocationBar={setLocationBar} useRestaurant={[setFilteredRestaurants, setRestaurants]} />
                            <FilterBar location={location} filterBarState={filterBarState} setFilterBar={setFilterBar} filterArr={[filterArr, setFilterArr]} setFilteredRestaurants={setFilteredRestaurants} />
                            <OfferModalCard offerModalState={offerModalState} copied={copied} setCopied={setCopied} />
                            <div className={`  ${(locationBarState === true || filterBarState === true || offerModalState === true) ? `pointer-events-none  h-screen ` : " opacity-1 "}  `}
                            >
                                {/* Header */}
                                <Header locBarStateFunc={setLocationBar} />

                                {/* Body */}
                                <div className="pt-20">

                                    <Outlet context={[setFilterBar, [allRestaurants, filteredRestaurants, setFilteredRestaurants], [filterArr, setFilterArr]]} />
                                </div>
                                {/* footer */}
                                <Footer />
                            </div>
                        </div>
                    </SortFilterContext.Provider>
                </OfferModalContext.Provider>
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


