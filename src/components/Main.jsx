import React from 'react';
import {Link} from "react-router-dom";


const Main = () => {

    return (
        <div>
            <div className='m-auto w-3/4 mt-20'>
                <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-8xl">SmartCard</span>
                </h1>
                <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Твій особистий словник</span>
                </h2>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Вчи англійську мову граючись.</p>
            </div>
            <div className='flex justify-between w-3/4 m-auto mt-16'>
                <Link to="/signin"
                   className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Створи обліковий запис
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Щоб мати доступ до платформи SmartCard потрібно створити обліковий запис </p>
                </Link>
                <Link to="/dictionary"
                   className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Додавай нові слова у словник</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                        acquisitions of 2021 so far, in reverse chronological order.</p>
                </Link>
                <Link to="/practice"
                   className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Запам'ятовуй їх за подомогою різних ігор</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">На платформі SmartCard доступно багато різних способів вивчати слова</p>
                </Link>
            </div>
        </div>
    );
};

export default Main;