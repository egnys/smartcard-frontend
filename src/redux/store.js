import {configureStore} from "@reduxjs/toolkit";
import {cardsReducer} from './slices/cards.js'
import {authReducer} from "./slices/auth.js";


const store = configureStore({
    reducer: {
        cards: cardsReducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>   // Для решения ошибки A non-serializable value was detected in an action, in the path: `payload.headers`. Value:
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store