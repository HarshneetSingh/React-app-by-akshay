import { useState } from "react"

function filterData(restaurants, input, fullRestaurantList) {
    let result;
    if (input === "") {
        result = fullRestaurantList;
        console.log(fullRestaurantList)
    } else {
        result = restaurants.filter((restaurant) => {
          return   restaurant.data.data.name.toLowerCase().includes(input.toLowerCase());
            
        })
    }
    return result;
}

const Search = (props) => {
    const { restaurants, setRestaurants, fullRestaurantList } = props;
    const [input, setInput] = useState("")


    return (
        <div>
            <input
                type="text"
                placeholder="kfc"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
            />
            <button type="submit" onClick={
                () => {
                    setRestaurants(filterData(restaurants, input, fullRestaurantList))
                }
            }>serch</button>


        </div>
    )
}

export default Search