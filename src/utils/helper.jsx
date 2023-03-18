export const filterData = (restaurants, input) => {
    let result = restaurants.filter((restaurant) => {
        return restaurant.data.data.name.toLowerCase().includes(input.toLowerCase());
    })

    return result;
}