import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "../../redux/slices/cards";
import jwt_decode from "jwt-decode";
import {v4} from 'uuid'
import axios from "../../axios";

const SecondStep = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.cards.cards.items)

    const token = window.localStorage.getItem('token')
    const decoded = token ? jwt_decode(token, "ecqwe21e1") : 0
    const myId = decoded ? decoded._id : 0

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [end, setEnd] = useState(false)
    const [learnedWords, setLearnedWords] = useState([])
    const quiz = [...cards].sort((a,b) => a.learningRate - b.learningRate).slice(0,5).map(card => {
        return {
            questionWord: card.word,
            answerOptions: shuffle([...cards].sort((a,b) => a.learningRate - b.learningRate).slice(0,5).map(el => {
                return {
                    id: el._id,
                    questionWord_id: card._id,
                    questionWord_lr: card.learningRate,
                    learningRate: el.learningRate,
                    answerWord: el.translation,
                    originalWord: card.word,
                    isCorrect: card._id === el._id ? true: false,
                }
            }))
        }
    })
    function shuffle(array){
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    const addLearningRate = async(ansop) => {
        try {
            const fields = {learningRate: ansop.learningRate + 2}
            await axios.patch(`/card/${ansop.id}`, fields)
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
        if (ansop.isCorrect){
            addLearningRate(ansop)
            setLearnedWords([...learnedWords, [ansop.originalWord, <span className='text-green-400'>+2%</span>]])
        } else{
            delLearningRate(ansop)
            setLearnedWords([...learnedWords, [ansop.originalWord, ansop.learningRate === 0 ? '0%' : <span className='text-red-400'>-1%</span>]])
        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < quiz.length){
            setCurrentQuestion(nextQuestion)
        } else {
            setEnd(true)
        }
    }
    React.useEffect(() => {
        dispatch(fetchCards(myId))
    }, [])
    return (
        <div className='flex mt-20 justify-between'>
            {quiz.length > 0 ? <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-2/4 m-auto">
                {end ? <div className='w-3/5'>
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                        Ваш результат:
                    </h5>
                    <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <ul>
                                    {learnedWords.map(el => (
                                        <li key={v4()} className='text-xl'>{el[0]}</li>
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
                {end ? '' : <div>
                        <div className='flex justify-between flex-row-reverse'>
                            <h5 className="mb-2 text-3xl text-right  tracking-tight text-gray-900 dark:text-white">
                                {currentQuestion + 1} / {quiz.length}
                            </h5>
                            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                                Обери правильний переклад:
                            </h5>
                        </div>
                        <hr className="w-full h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center'>
                                <h3 className='mt-9 text-xl'>Як перекласти слово <span className='font-bold'>{quiz[currentQuestion].questionWord}</span>?</h3>
                            </div>
                            <div className='flex flex-col'>
                                {quiz.length > 0 ? quiz[currentQuestion].answerOptions.map( ansop => (
                                    <button key={v4()} type="button" id={ansop.id}
                                    onClick={() => handleAnswerOptionClick(ansop)}
                                        className="py-2.5 px-5 mr-2 mb-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                            {ansop.answerWord}
                                    </button>
                                )): ''}
                            </div>
                        </div>
                    </div>}
            </div> : ''}
        </div>
    );
};

export default SecondStep;