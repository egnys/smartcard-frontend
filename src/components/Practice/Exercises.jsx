import React from 'react';
import {Link} from "react-router-dom";

const Exercises = () => {
    return (
        <div>
            <div className='flex  justify-between w-3/4 max-lg:flex-col max-lg:w-1/2 m-auto mt-16'>
                <Link to="/first-step" id='first-step'
                      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Перший крок
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Перекласти слова на англійську</p>
                </Link>
                <Link to="/second-step"
                      className="max-lg:mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Другий крок
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Перекласти слова з англійської</p>
                </Link>
                <Link to="/signin"
                      className="max-lg:mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        3й крок
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Нова п'ятірка</p>
                </Link>
                <Link to="/signin"
                      className="max-lg:mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        4й крок
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Нова п'ятірка</p>
                </Link>
            </div>
        </div>
    );
};

export default Exercises;