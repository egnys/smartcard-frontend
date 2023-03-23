import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "../../redux/slices/cards";
import CardContainer from "./CardContainer";
import jwt_decode from "jwt-decode";
import {selectorIsAuth} from "../../redux/slices/auth";
import {Navigate} from "react-router-dom";


const Dictionary = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cards)

    const token = window.localStorage.getItem('token')
    console.log(token)
    const decoded = token ? jwt_decode(token, "ecqwe21e1") : 0
    console.log(decoded)
    const myId = decoded ? decoded._id : 0
    console.log(myId)
    const myCards = myId ? cards.cards.items.filter(card => card.user._id === myId) : []

    const updateInfo = () => {
        dispatch(fetchCards())
    }


    // const isCardsLoading = cards.status === 'loading'
    React.useEffect(() => {
        dispatch(fetchCards())
    }, [])

    return (
        <div>
            {/*<Navbar/>*/}
            <CardContainer myCards={myCards} updateInfo={updateInfo}/>
            {myId !== 0 ? true : <Navigate to='/signin'/>}
        </div>
    );
};

export default Dictionary;