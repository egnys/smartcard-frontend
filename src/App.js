import './App.css';
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/Authentication/SignIn";
import Main from "./components/Main";
import Register from "./components/Authentication/Register";
import ResetPass from "./components/Authentication/ResetPass";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe, selectorIsAuth} from "./redux/slices/auth";
import {useEffect} from "react";
import Navbar from "./components/Navbar";
import Dictionary from "./components/Cards/Dictionary";
import Exercises from "./components/Practice/Exercises";
import FirstStep from './components/Practice/firstStep';
import SecondStep from './components/Practice/SecondStep';
import ThirdStep from './components/Practice/ThirdStep';
import FourthStep from './components/Practice/FourthStep';
function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectorIsAuth)
    useEffect(() => {
        dispatch(fetchAuthMe())
    },[])
  return (
      <div className='dark:bg-div min-h-screen'>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/dictionary' element={<Dictionary/>}/>
              <Route path='/signin' element={<SignIn/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/lostpassword' element={<ResetPass/>}/>
              <Route path='/practice' element={<Exercises/>}/>
              <Route path='/first-step' element={<FirstStep/>}/>
              <Route path='/second-step' element={<SecondStep/>}/>
              <Route path='/third-step' element={<ThirdStep/>}/>
              <Route path='/fourth-step' element={<FourthStep/>}/>
          </Routes>
      </div>
  );
}

export default App;
