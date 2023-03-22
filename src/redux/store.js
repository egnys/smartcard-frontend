import {configureStore} from "@reduxjs/toolkit";
import {cardsReducer} from './slices/cards.js'
import {authRedicer} from "./slices/auth.js";


const store = configureStore({
    reducer: {
        cards: cardsReducer,
        auth: authRedicer
    },
    middleware: getDefaultMiddleware =>   // Для решения ошибки A non-serializable value was detected in an action, in the path: `payload.headers`. Value:
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store