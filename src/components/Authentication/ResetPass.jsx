import React from 'react';
import {Link} from "react-router-dom";

const ResetPass = () => {
    return (
        <div
            className="m-auto mt-28 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="src/components#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Forgot your password?</h5>
                <p>Type in your email in the field below and we will send you a code to reset your password.</p>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" name="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           placeholder="name@company.com" required/>
                </div>
                <button type="submit"
                        className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Send code
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    <Link to='/register'>
                        <p className="text-right text-blue-700 hover:underline dark:text-blue-500">Back to Login</p>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ResetPass;