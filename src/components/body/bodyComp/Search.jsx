import { useState } from "react"
import { filterData } from "../../../utils/helper"


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
            <button type="submit"
                onClick={() => {
                    props.setFilteredRestaurants(filterData(props.restaurants, input))
                }}
            >
                search
            </button>


        </div>
    )
}

export default Search