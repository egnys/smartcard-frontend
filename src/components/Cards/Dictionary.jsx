import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "../../redux/slices/cards";
import CardContainer from "./CardContainer";
import jwt_decode from "jwt-decode";


const Dictionary = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cards)

    const token = window.localStorage.getItem('token')
    const decoded = jwt_decode(token, "ecqwe21e1")
    const myId = decoded._id
    const myCards = cards.cards.items.filter(card => card.user._id === myId)

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
        </div>
    );
};

export default Dictionary;