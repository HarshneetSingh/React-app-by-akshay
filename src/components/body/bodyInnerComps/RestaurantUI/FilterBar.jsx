import React, { useContext } from "react";
import AllRestaurantsContext from "../../../../utils/AllRestroContext";
import SortFilterContext from "../../../../utils/SortFilterContext";
import {updateRestroByfiltering} from "../../../../utils/helper";
import FilterBarBttn from "./FilterBarBttn";
import { useSearchParams } from "react-router-dom";

const FilterBar = (props) => {
    const [restaurantContext, setRestaurantContext] = useContext(AllRestaurantsContext);
    const [selectedSort, setSelectedSort] = useContext(SortFilterContext)
    const filterData = restaurantContext?.filters;
    const [url, setUrl] = useSearchParams();
    const [filterArr, setFilterArr] = props.filterArr;
    return (
        <>
            <div
                className={`fixed w-2/5 h-full top-0 right-0 bg-white z-50 transition-all duration-[400ms] overflow-auto ${props.filterBarState === false
                    ? "translate-x-[620px] opacity-0"
                    : "translate-x-0 "
                    }`}
            >
                {/* filter header */}
                <div className="flex pl-10  w-full h-14 items-center  border">
                    <button onClick={() => props.setFilterBar((prevState) => !prevState)}>
                        <i className="fa-regular fa-x" />
                    </button>
                    <p>Filters</p>
                </div>

                {/* filter Body */}

                <div className="pl-10 ">
                    {filterData?.map((filterName, index) => {
                        return (
                            <div key={index}>
                                <div>{filterName.title}</div>
                                <div className="w-full  grid grid-cols-2">
                                    {filterName?.options.map((filter, index) => {
                                        return (
                                            <FilterBarBttn
                                                key={index}
                                                index={index}
                                                filterName={filterName}
                                                filterArr={filterArr}
                                                setFilterArr={setFilterArr}
                                                filter={filter}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Filter footer */}
                <div className=" pl-10 absolute bottom-0 font-bold bg-white text-sm w-full py-5 shadow-[0_-2px_4px_0_#e9e9eb] left-0  ">
                    <button
                        className="h-[50px]  border border-lightColor px-7 mr-4   text-lightColor opacity-50"
                        onClick={() => {
                            setFilterArr([{ CUISINES: [] }, { SHOW_RESTAURANTS_WITH: [] }]);
                        }}
                    >
                        CLEAR
                    </button>
                    <button
                        onClick={() => {
                            updateRestroByfiltering(filterArr, props.setFilteredRestaurants,setUrl,url,props.location,selectedSort,setSelectedSort)
                            props.setFilterBar((prevState) => {
                                if (prevState === true) return false;
                            })
                        }}
                        className="h-[50px] px-10 text-white bg-headerHoverColor  border-headerHoverColor shadow-[0_1px_3px_0_rgba(0,0,0,.12)] hover:shadow-[0_2px_8px_#d4d5d9] border"
                    >
                        SHOW RESTAURANTS
                    </button>
                </div>
            </div>

            <div
                className={` ${props.filterBarState === true
                    ? "z-40 fixed h-full w-full bg-slate-800 opacity-70  top-0 left-0 right-0 bottom-0"
                    : ""
                    }`}
                onClick={() =>
                    props.setFilterBar((prevState) => {
                        if (prevState === true) return false;
                    })
                }
            />
        </>
    );
};

export default FilterBar;

