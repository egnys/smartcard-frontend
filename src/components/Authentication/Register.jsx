import React from 'react';
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchRegister, selectorIsAuth} from "../../redux/slices/auth.js";
import {useForm} from "react-hook-form";

const Register = () => {
    const isAuth = useSelector(selectorIsAuth)
    const dispatch = useDispatch()
    const { register, handleSubmit} = useForm({
        defaultValues:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        mode: 'onChange'
    })
    const onSubmit = async (values) =>{
        const data = await dispatch(fetchRegister(values))
        if (!data.payload){
            return alert('Не вдалося створити обліковий запис')
        }
        if ('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    if (isAuth){
        return <Navigate to='/'/>
    }
    return (
        <div
            className="m-auto mt-28 max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="src/components#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create an account</h5>
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="text" className="block w-60 mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Keanu"
                            {...register('firstName', {required: "Вкажіть ім'я"})}
                            required/>
                    </div>
                    <div>
                        <label htmlFor="text" className="block w-60 mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Reeves"
                            {...register('lastName', {required: "Вкажіть прізвище"})}
                            required/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        {...register('email', {required: "Вкажіть пошту"})}
                        required/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register('password', {required: "Вкажіть пароль"})}
                        required/>
                </div>
                {/*<div>*/}
                {/*    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password*/}
                {/*    </label>*/}
                {/*    <input type="password" name="password" id="password" placeholder="••••••••"*/}
                {/*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"*/}
                {/*           required/>*/}
                {/*</div>*/}
                {/*<div className="flex items-start">*/}
                {/*    <div className="flex items-start">*/}
                {/*        <div className="flex items-center h-5">*/}
                {/*            <input id="remember" type="checkbox" value=""*/}
                {/*                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"*/}
                {/*                   required/>*/}
                {/*        </div>*/}
                {/*        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">*/}
                {/*            I accept the Terms and Conditions</label>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <button type="submit"
                        className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Create account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Already have an account?
                    <Link to='/signin' className="text-blue-700 hover:underline dark:text-blue-500">
                        Login here.
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;