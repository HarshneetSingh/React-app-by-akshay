export const filterData = (allRestaurants, input) => {

    let result = allRestaurants.filter((restaurant) => {
        
        return restaurant?.data?.data?.name?.toLowerCase()?.includes(input?.toLowerCase());
    })

    return result;
}