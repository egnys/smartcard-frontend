import React, {useState} from 'react';
import close from '../../img/close.png'
import {useDispatch, useSelector} from "react-redux";
import {selectorIsAuth} from "../../redux/slices/auth";
import {Navigate} from "react-router-dom";
import EditForm from "./EditForm";
const EditCard = ({edit, setEdit, updateInfo, id, word, translation }) => {
    const isAuth = useSelector(selectorIsAuth)
    const dispatch = useDispatch()
    if (!window.localStorage.getItem('token') & !isAuth){
        return <Navigate to='/signin'/>
    }

    return (
        <div className='absolute inset-0 z-10 transition-transform'>
            {edit ? <EditForm
                edit={edit}
                setEdit={setEdit}
                updateInfo={updateInfo}
                id={id}
                word={word}
                translation={translation}
            /> : false}
        </div>
    );
};

export default EditCard;