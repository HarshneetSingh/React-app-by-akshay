import { useState } from "react"
import { filterData } from "../../../utils/helper"


const SearchEngine = (props) => {
    const [input, setInput] = useState("")

    return (

        <div className=" bg-red-300 py-10 my-6">
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

export default SearchEngine