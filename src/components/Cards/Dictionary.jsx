import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "../../redux/slices/cards";
import CardContainer from "./CardContainer";
import jwt_decode from "jwt-decode";
import {selectorIsAuth} from "../../redux/slices/auth";
import {Navigate} from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'

const Dictionary = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cards)

    const token = window.localStorage.getItem('token')
    const decoded = token ? jwt_decode(token, "ecqwe21e1") : 0
    const myId = decoded ? decoded._id : 0

    const updateInfo = () => {
        dispatch(fetchCards(myId))
    }

    React.useEffect(() => {
        dispatch(fetchCards(myId))
    }, [])
    return (
        <div>
            {cards.cards.status === 'loaded' 
            ? 
            <CardContainer myCards={cards.cards.items} updateInfo={updateInfo}/> 
            : 
            <div className='flex justify-center mt-28'>
                <TailSpin
                height="60"
                width="60"
                color="#51E5FF"
                ariaLabel="tail-spin-loading"
                radius="1"
                visible={true}
            />
            </div>
            }
            {myId !== 0 ? true : <Navigate to='/signin'/>}
        </div>
    );
};

export default Dictionary;