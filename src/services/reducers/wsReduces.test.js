import { wsReducer } from './wsReduces'
const messageData = {
    "success": true,
    "orders": [
        {
            "_id": "63a17f4399a25c001cd6af83",
            "ingredients": [
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2022-12-20T09:24:19.144Z",
            "updatedAt": "2022-12-20T09:24:23.360Z",
            "number": 34877
        },
        {
            "_id": "63a0bbf699a25c001cd6ae18",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2022-12-19T19:31:02.221Z",
            "updatedAt": "2022-12-19T19:31:02.602Z",
            "number": 34841
        },
        {
            "_id": "63a0bbef99a25c001cd6ae17",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Space краторный бургер",
            "createdAt": "2022-12-19T19:30:55.077Z",
            "updatedAt": "2022-12-19T19:30:55.562Z",
            "number": 34840
        }
    ],
    "total": 34798,
    "totalToday": 133
}
// Проверка на первичное значение
test('Должен возращать изначальное значение', () => {
    expect(wsReducer(undefined, { type: undefined })).toEqual(
        {
            wsConnected: false,
            messages: []
        }
    )
})
test('Должен отображать подключение', () => {
    const initialState = {
        wsConnected: false,
        messages: []
    }
    expect(wsReducer(initialState, { type: 'WS_CONNECTION_SUCCESS' })).toEqual(
        {
            wsConnected: true,
            messages: []
        }
    )
})
test('Должен отображать ошибку при подключении', () => {
    const initialState = {
        wsConnected: true,
        messages: []
    }
    expect(wsReducer(initialState, { type: 'WS_CONNECTION_ERROR' })).toEqual(
        {
            wsConnected: false,
            messages: []
        }
    )
})
test('Должен отображать отключение', () => {
    const initialState = {
        wsConnected: true,
        messages: []
    }
    expect(wsReducer(initialState, { type: 'WS_CONNECTION_CLOSED' })).toEqual(
        {
            wsConnected: false,
            messages: []
        }
    )
})
test('Должен отображать ответ сервера', () => {
    const initialState = {
        wsConnected: false,
        messages: []
    }
    expect(wsReducer(initialState, { type: 'WS_GET_MESSAGE', payload: messageData })).toEqual(
        {
            wsConnected: false,
            messages: [messageData]
        }
    )
})