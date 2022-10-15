import { useState, useEffect } from "react";
export const PostLogic = async (ingredient, url) => {

    ingredient.push(ingredient[0])
    const returnedData = { "ingredients": ingredient.map(data => data._id) }



    return (
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(returnedData)
        }).then(res => res.json())
    )
}

