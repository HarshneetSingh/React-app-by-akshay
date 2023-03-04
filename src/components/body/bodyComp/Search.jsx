import { useState } from "react"

function filterData(restaurants, input) {
    let result = restaurants.filter((restaurant) => {
        return restaurant.data.data.name.toLowerCase().includes(input.toLowerCase());
    })

    return result;
}

const Search = (props) => {
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
                    props.setFilteredRestaurants(filterData(props.restaurants, input))
                }
            }>serch</button>


        </div>
    )
}

export default Search