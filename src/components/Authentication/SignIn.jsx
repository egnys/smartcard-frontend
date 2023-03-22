import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, selectorIsAuth} from "../../redux/slices/auth";
import {Navigate} from "react-router-dom";

const SignIn = () => {
    const isAuth = useSelector(selectorIsAuth)
    const dispatch = useDispatch()
    const { register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues:{
            email: '',
            password: '',
        },
        mode: 'onChange'
    })
    const onSubmit = async (values) =>{
        const data = await dispatch(fetchAuth(values))

        if (!data.payload){
            return alert('Не вдалося авторизуватися')
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
            className="m-auto mt-28 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                action="src/components#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Створи аккаунт SmartCard</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваша пошта</label>
                    <input type="email" name="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           placeholder="name@company.com" required
                           {...register('email', {required: 'Вкажіть пошту'})}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Ваш пароль
                    </label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           required
                           {...register('password', {required: 'Вкажіть пароль'})}
                    />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                   />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Запам'ятати мене
                        </label>
                    </div>
                    <Link to='/lostpassword' className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                        Забули пароль?
                    </Link>
                </div>
                <button type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Ще не зареєстровані?
                    <Link to='/register' className="text-blue-700 hover:underline dark:text-blue-500">
                        Створити аккаунт
                    </Link>
                </div>
            </form>
        </div>

);
};

export default SignIn;