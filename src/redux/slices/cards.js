import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export  const fetchCards = createAsyncThunk('cards/fetchCards',
    async (id) =>{
        const {data} = await axios.get(`/cards/${id}`)
        return data
    })

export  const fetchDeleteCard = createAsyncThunk('cards/fetchDeleteCard',
    async (id) => {
        await axios.delete(`/cards/${id}`)
    })

export  const fetchEditCards = createAsyncThunk('cards/fetchEditCards',
    async (id) =>{
        const {data} = await axios.patch(`/cards/${id}`)
        return data
    })

const initialState = {
    cards: {
        items: [],
        status: 'Loading'
    }
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCards.pending]: (state) => {
            state.cards.items = []
            state.cards.status = 'loading'
        },
        [fetchCards.fulfilled]: (state, action) => {
            state.cards.items = action.payload
            state.cards.status = 'loaded'
        },
        [fetchCards.rejected]: (state) => {
            state.cards.items = []
            state.cards.status = 'error'
        },

        [fetchDeleteCard.pending]: (state, action) => {
            state.cards.items = state.cards.items.filter(card => card._id !== action.meta.arg)
        },

        [fetchEditCards.pending]: (state) => {
            state.cards.items = []
            state.cards.status = 'loading'
        },
        [fetchEditCards.fulfilled]: (state, action) => {
            state.cards.items = action.payload
            state.cards.status = 'loaded'
        },
        [fetchEditCards.rejected]: (state) => {
            state.cards.items = []
            state.cards.status = 'error'
        },
    }
})

export const cardsReducer = cardsSlice.reducer