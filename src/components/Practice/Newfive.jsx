import React from 'react';
import {Link} from "react-router-dom";
import listen from "../../img/volume-up.png";

const Newfive = () => {
    function listenTo() {

    }

    return (
        <div className='flex m-auto justify-between w-5/12'>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-3/4">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Обери правильний переклад:
                </h5>
                <div className='flex justify-between'>
                    <div className='flex flex-col items-center'>
                        <h3 className='mt-9'>Як перекласти слово ХХХ?</h3>
                        <button className='mt-5' onClick={listenTo}>
                            <img className='w-8' src={listen} alt="Listen"/>
                        </button>
                    </div>
                    <div className='flex flex-col'>
                        <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative
                        </button>
                        <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative
                        </button>
                        <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative
                        </button>
                        <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative
                        </button>
                        <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newfive;