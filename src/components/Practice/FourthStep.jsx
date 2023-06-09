import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "../../redux/slices/cards";
import jwt_decode from "jwt-decode";
import {v4} from 'uuid'
import listen from '../../img/volume-up.png'
import axios from "../../axios";
import {useSpeechSynthesis} from "react-speech-kit";


const FourthStep = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cards.cards.items)

    const {speak} = useSpeechSynthesis()

    const token = window.localStorage.getItem('token')
    const decoded = token ? jwt_decode(token, "ecqwe21e1") : 0
    const myId = decoded ? decoded._id : 0

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [end, setEnd] = useState(false)
    const [learnedWords, setLearnedWords] = useState([])
    const quiz = [...cards].sort((a,b) => a.learningRate - b.learningRate).slice(0,5).map(card =>{
        return {
            questionWord: card.word,
            answerOption:[{
                questionWord: card.word,
                answer: card.translation,
                questionWord_id: card._id,
                questionWord_lr: card.learningRate,
            }]
        }
    })
    const addLearningRate = async(ansop) => {
        try {
            const fields = {learningRate: ansop.questionWord_lr + 2}
            await axios.patch(`/card/${ansop.questionWord_id}`, fields)
        } catch (err){
            console.warn(err)
        }
    }
    const delLearningRate = async(ansop) => {
        try {
            const fields = {learningRate: ansop.questionWord_lr === 0 ? 0 : ansop.questionWord_lr - 1}
            await axios.patch(`/card/${ansop.questionWord_id}`, fields)
        } catch (err){
            console.warn(err)
        }
    }
    const handleAnswerOptionClick = (ansop) =>{
        let answer = document.getElementById('inp_answ').value
        if (ansop.answer === answer){
            addLearningRate(ansop)
            setLearnedWords([...learnedWords, [ansop.questionWord, <span className='text-green-400'>+2%</span>]])
            if (answer !== ''){
                document.getElementById('inp_answ').value = ''
            }
        } else{
            delLearningRate(ansop)
            setLearnedWords([...learnedWords, [ansop.questionWord, ansop.questionWord_lr === 0 ? '0%' : <span className='text-red-400'>-1%</span>]])
            document.getElementById('inp_answ').value = ''
        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < quiz.length){
            setCurrentQuestion(nextQuestion)
        } else {
            setEnd(true)
        }

    }
    const listenTo = (word) => {
        speak({text: word})
    }
    React.useEffect(() => {
        dispatch(fetchCards(myId))
    }, [])
    return (
        <div className='flex mt-20 justify-between'>
            {quiz.length > 0 ? <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-2/4 max-md:w-full m-auto dark:bg-navbar">
                {end ? <div className='w-3/5'>
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                        Ваш результат:
                    </h5>
                    <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <ul>
                                    {learnedWords.map(el => (
                                        <li key={v4()} className='text-xl dark:text-white'>{el[0]}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <ul>
                                    {learnedWords.map(el => (
                                        <li key={v4()} className='text-xl'>{el[1]}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                </div> : ''}
                {end ? '' : <div className='dark:bg-navbar'>
                        <div className='flex justify-between flex-row-reverse'>
                            <h5 className="mb-2 text-3xl max-md:text-xl text-right  tracking-tight text-gray-900 dark:text-white">
                                {currentQuestion + 1} / {quiz.length}
                            </h5>
                            <h5 className="mb-2 text-2xl tracking-tight max-md:text-xl text-gray-900 dark:text-white">
                                Правильно написати переклад:
                            </h5>
                        </div>
                        <hr className="w-full h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        {quiz.length > 0 ? quiz[currentQuestion].answerOption.map(ansop => (
                            <div className='flex flex-col items-center' key={v4()}>
                                <div className=''>
                                        <h3 className='mt-9 mb-5 text-xl flex items-center dark:text-white'>
                                        Прослухати слово
                                        <button className='ml-2' onClick={() => listenTo(ansop.questionWord)}>
                                            <img className='w-8' src={listen} alt="Listen"/>
                                        </button>:
                                    </h3>
                                </div>
                                <div className=''>
                                    <input className='border text-3xl text-center max-sm:text-xl' type="text" name="" id="inp_answ"/>
                                </div>
                                <button type="button" id={ansop.questionWord_id}
                                    onClick={() => handleAnswerOptionClick(ansop)}
                                    className="py-2.5 px-5 mr-2 mb-2 mt-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:text-blue-700">
                                        Далі
                                </button>
                            </div>
                        )): ''}
                        
                    </div>}
            </div> : ''}
        </div>
    );
};

export default FourthStep;