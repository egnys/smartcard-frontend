import React from 'react';
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectorIsAuth} from "../redux/slices/auth";
import icon from '../../src/img/dictionary.png'
const Navbar = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(selectorIsAuth)
    const onClickLogOut = () => {
        if (window.confirm('Ви впевнені що хочете вийти?')){
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    }
    const [theme, setTheme] = React.useState('light')
    const moon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    const sun = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  
    React.useEffect(() => {
        theme === 'dark' ?  document.documentElement.classList.add('dark'): document.documentElement.classList.remove('dark')
    },[theme])

    const switchTheme = () => {
        setTheme( theme === 'dark' ? 'light' : 'dark')
    }
    const toggle = (element) =>{
        const el = document.getElementById(element)
        el.classList.contains('hidden') ? el.classList.remove('hidden') : el.classList.add('hidden')
      }
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded sticky z-10 top-0 dark:bg-navbar">
            <div className='flex justify-between md:hidden'>
                <Link to="/" className="flex items-center">
                            <img src={icon} className="h-10 mr-3 sm:h-10"
                                alt="SmartCard Logo"/>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SmartCard</span>
                </Link>
                <button  onClick={() => toggle('navbar-default')} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 dark:text-black rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">
                        Open main menu
                    </span>
                    <svg className="w-6 h-6 dark:fill-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                    </path>
                    </svg>
                </button>
            </div>
            <div className="hidden w-full md:block md:w-auto ml-36 max-md:m-0" id="navbar-default">
            <ul className=" max-md:h-screen font-medium flex items-center flex-col p-4 md:p-0 mt-4 border md:hidden border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-navbar dark:border-gray-700 ">
                <li onClick={() => toggle('navbar-default')}>
                <Link to='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Головна</Link>
                </li>
                <li onClick={() => toggle('navbar-default')}>
                <Link to='/dictionary' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Словник</Link>
                </li>
                <li onClick={() => toggle('navbar-default')}>
                <Link to='/practice' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Вправи</Link>
                </li>
                <li onClick={() => toggle('navbar-default')}>
                    <div className='flex flex-col md:hidden '>
                        <button onClick={switchTheme} className='flex justify-center'>
                        {theme === 'light' ? moon : sun}
                        </button>
                    </div>
                </li>
            </ul>
            </div>
                <div className="container flex flex-wrap items-center justify-between mx-auto max-md:hidden">
                    <Link to="/" className="flex items-center">
                        <img src={icon} className="h-10 mr-3 sm:h-10"
                            alt="SmartCard Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SmartCard</span>
                    </Link>
                    <div className="flex items-center md:order-2">
                        {isAuth ? 
                        <div className='flex flex-row items-center'>
                            <button onClick={switchTheme} className='flex mr-4'>
                                {theme === 'light' ? moon : sun}
                            </button> 
                            <Link to='/' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">                   
                                <span
                                    onClick={onClickLogOut}
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Вийти
                                </span>
                            </Link>
                        </div> :
                            <Link to='/signin'
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">

                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Увійти
                            </span>
                            </Link>}
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
                        id="mobile-menu-2">
                        <ul className="flex flex-col  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-navbar">
                            <li>
                                <Link to='/'
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Головна</Link>
                            </li>
                            <li>
                                <Link to="/dictionary"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Словник</Link>
                            </li>
                            <li>
                                <Link to="/practice"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Вправи</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;