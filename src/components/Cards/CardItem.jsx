import React from 'react';
import {useDispatch} from "react-redux";
import {fetchDeleteCard} from "../../redux/slices/cards";
import listen from '../../img/volume-up.png'
import {useSpeechSynthesis} from "react-speech-kit";
import './CardItem.css'
import 'react-circular-progressbar/dist/styles.css';
import axios from "../../axios";


const CardItem = ({keyId, word, translation, editWord, setWord, setTranslation, setId, learningRate}) => {
    const dispatch = useDispatch()
    const {speak} = useSpeechSynthesis()
    const deleteWord = async (key) => {
        if (window.confirm('Ви дійсно хочете видалил слово?')){
            dispatch(fetchDeleteCard(key))
        }
    }
    const edit = () => {
        setId(keyId)
        setWord(word)
        setTranslation(translation)

        editWord(keyId)
    }
    const listenTo = () => {
        speak({text:word})
    }
        return (
            <>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                        {word}
                    </th>
                    <td className="px-6 py-4 text-lg">
                        {translation}
                    </td>
                    <td className="px-6 py-4 ">
                        <button className='' onClick={listenTo}>
                            <img className='w-8' src={listen} alt="Listen"/>
                        </button>
                    </td>
                    <td className="px-6 py-4 text-lg">
                        {learningRate} %
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a href="#" onClick={edit} className="font-medium  text-blue-600 dark:text-blue-500 hover:underline">Змінити</a>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a href="#" onClick={() => deleteWord(keyId)} className="font-medium  text-blue-600 dark:text-blue-500 hover:underline">Видалити</a>
                    </td>
                </tr>
            </>
        );
};

export default CardItem;