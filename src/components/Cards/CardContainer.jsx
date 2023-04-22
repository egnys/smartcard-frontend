import React, {useState} from 'react';
import AddCard from "./AddCard";
import CardItem from "./CardItem";
import EditCard from "./EditCard";

const CardContainer = ({myCards , updateInfo}) => {
    const [addWord, setAddWord] = useState(false)
    const [edit, setEdit] = useState(false)
    const addNewWord = () => {
        setAddWord(true)
    }
    const editWord = () => {
        setEdit(true)
    }
    const [id, setId] = useState('')
    const [word, setWord] = useState('')
    const [translation, setTranslation] = useState('')
    return (
        <>
            {addWord ? <AddCard addword={addWord} setAddWord={setAddWord} updateInfo={updateInfo}/> : false}
            {edit ? <EditCard edit={edit}
                              setEdit={setEdit}
                              updateInfo={updateInfo}
                              id={id}
                              word={word}
                              translation={translation}
            /> : false}
            <div className="w-3/5 max-md:w-5/6 max-lg:w-full m-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption
                        className="p-2 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        <button
                            onClick={addNewWord}
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Додати слово
                        </span>
                        </button>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Слово
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Переклад
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Прослухати
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Прогрес
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Дії</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Видалити</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {myCards.map(card => <CardItem key={card._id}
                                                       word={card.word}
                                                       translation={card.translation}
                                                       keyId={card._id}
                                                       editWord={editWord}
                                                       setId={setId}
                                                       setWord={setWord}
                                                       setTranslation={setTranslation}
                                                       learningRate={card.learningRate}
                                            />
                        )}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default CardContainer;