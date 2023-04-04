import { useContext, useState } from "react"
import { filterData } from "../../../../utils/helper"
import UserContext from "../../../../utils/userContext"


const SearchEngine = () => {
    const [input, setInput] = useState("")
    const userContext = useContext(UserContext)
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
                    userContext.setFilteredRestaurants(filterData(userContext.allRestaurants, input))
                }}
            >
                search
            </button>


        </div>

    )
}

export default SearchEngine