import { conductorReducer } from './conductor'
import * as type from './conductor'

test('Должен возращать изначальное значение', () => {
    expect(conductorReducer(undefined, { type: undefined })).toEqual(
        {
            orderDetails: []
        }
    )
})
test('Должен работать при добавлении ингредиента в  изначальное значение', () => {
    const initialState = { orderDetails: [] }
    expect(conductorReducer(initialState, {
        type: 'ADD_COMPONENT', item: {
            "_id": "60d3b41abdacab0026a733cd",
            "name": "Соус фирменный Space Sauce",
            "type": "sauce",
            "proteins": 50,
            "fat": 22,
            "carbohydrates": 11,
            "calories": 14,
            "price": 80,
            "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            "__v": 0,
            "dragId": "62c15290-55b2-49ba-8373-e81c438f713b"
        }
    })).toEqual(
        {
            orderDetails: [{
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "62c15290-55b2-49ba-8373-e81c438f713b"
            }]
        }
    )
})
test('Должен работать при удалении ингредиента ', () => {
    const initialState = {
        "orderDetails": [
            {
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "5b80bc31-2643-4cb9-bc74-2cf39b9950b6"
            },
            {
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "db3891e9-1713-4ea8-afca-0b4cc9a020a1"
            }
        ]
    }
    expect(conductorReducer(initialState, {
        type: "DELETE_COMPONENT", action: {
            "_id": "60d3b41abdacab0026a733cd",
            "name": "Соус фирменный Space Sauce",
            "type": "sauce",
            "proteins": 50,
            "fat": 22,
            "carbohydrates": 11,
            "calories": 14,
            "price": 80,
            "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            "__v": 0,
            "dragId": "db3891e9-1713-4ea8-afca-0b4cc9a020a1"
        }
    })).toEqual(
        {
            orderDetails: [{
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "5b80bc31-2643-4cb9-bc74-2cf39b9950b6"
            }]
        }
    )
})

test('Должен работать при перемещении ингредиента ', () => {
    const initialState = {
        "orderDetails": [
            {
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "5b80bc31-2643-4cb9-bc74-2cf39b9950b6"
            },
            {
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "db3891e9-1713-4ea8-afca-0b4cc9a020a1"
            }
        ]
    }
    expect(conductorReducer(initialState, {
        type: "UPDATE_CONSTRUCTOR_LIST", item: [{
            "_id": "60d3b41abdacab0026a733cd",
            "name": "Соус фирменный Space Sauce",
            "type": "sauce",
            "proteins": 50,
            "fat": 22,
            "carbohydrates": 11,
            "calories": 14,
            "price": 80,
            "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            "__v": 0,
            "dragId": "db3891e9-1713-4ea8-afca-0b4cc9a020a1"
        }, {
            "_id": "60d3b41abdacab0026a733cd",
            "name": "Соус фирменный Space Sauce",
            "type": "sauce",
            "proteins": 50,
            "fat": 22,
            "carbohydrates": 11,
            "calories": 14,
            "price": 80,
            "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            "__v": 0,
            "dragId": "5b80bc31-2643-4cb9-bc74-2cf39b9950b6"
        }]
    })).toEqual(
        {
            orderDetails: [{
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "db3891e9-1713-4ea8-afca-0b4cc9a020a1"
            }, {
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "5b80bc31-2643-4cb9-bc74-2cf39b9950b6"
            }]
        }
    )
})

test('Должен работать при удалении булки ', () => {
    const initialState = {
        "orderDetails": [{
            "_id": "60d3b41abdacab0026a733c6",
            "name": "Краторная булка N-200i",
            "type": "bun",
            "proteins": 80,
            "fat": 24,
            "carbohydrates": 53,
            "calories": 420,
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": 0
        },
        {
            "_id": "60d3b41abdacab0026a733cd",
            "name": "Соус фирменный Space Sauce",
            "type": "sauce",
            "proteins": 50,
            "fat": 22,
            "carbohydrates": 11,
            "calories": 14,
            "price": 80,
            "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            "__v": 0,
            "dragId": "5b80bc31-2643-4cb9-bc74-2cf39b9950b6"
        },
        {
            "_id": "60d3b41abdacab0026a733cd",
            "name": "Соус фирменный Space Sauce",
            "type": "sauce",
            "proteins": 50,
            "fat": 22,
            "carbohydrates": 11,
            "calories": 14,
            "price": 80,
            "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            "__v": 0,
            "dragId": "db3891e9-1713-4ea8-afca-0b4cc9a020a1"
        }
        ]
    }
    expect(conductorReducer(initialState, {
        type: "DELETE_BUN", item: [
            {
                "_id": "60d3b41abdacab0026a733c6",
                "name": "Краторная булка N-200i",
                "type": "bun",
                "proteins": 80,
                "fat": 24,
                "carbohydrates": 53,
                "calories": 420,
                "price": 1255,
                "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                "__v": 0
            }]
    })).toEqual(
        {
            orderDetails: [{
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "5b80bc31-2643-4cb9-bc74-2cf39b9950b6"
            },
            {
                "_id": "60d3b41abdacab0026a733cd",
                "name": "Соус фирменный Space Sauce",
                "type": "sauce",
                "proteins": 50,
                "fat": 22,
                "carbohydrates": 11,
                "calories": 14,
                "price": 80,
                "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v": 0,
                "dragId": "db3891e9-1713-4ea8-afca-0b4cc9a020a1"
            }]
        }
    )
})