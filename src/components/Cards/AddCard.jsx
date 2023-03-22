import React, {useState} from 'react';
import close from '../../img/close.png'
import {useDispatch, useSelector} from "react-redux";
import {selectorIsAuth} from "../../redux/slices/auth";
import {Navigate} from "react-router-dom";
import AddForm from "./AddForm";
const AddCard = ({addword, setAddWord, updateInfo}) => {
    const isAuth = useSelector(selectorIsAuth)
    const dispatch = useDispatch()
    if (!window.localStorage.getItem('token') & !isAuth){
        return <Navigate to='/signin'/>
    }

    return (
        <div className='absolute inset-0 z-10 transition-transform'>
            {addword ? <AddForm addword={addword} setAddWord={setAddWord} updateInfo={updateInfo}/> : false}
        </div>
    );
};

export default AddCard;