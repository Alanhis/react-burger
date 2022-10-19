import { checkResponce } from "./checkResponse"
export const sendOrder = async (ingredient, url) => {

    ingredient.push(ingredient[0])
    const returnedData = { "ingredients": ingredient.map(data => data._id) }

    return (fetch(url + '/orders', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(returnedData)
    }).then(checkResponce))


}

