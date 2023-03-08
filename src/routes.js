import React, {useState,useEffect} from 'react'
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom"
import Login from './components/login/login';
import Navigation from './components/navigation/navigation';
import SignUpScreen from './components/signup/signup';
const AppRoutes = () => {
const[authUser,setAuthUser] = useState(null);
useEffect(() =>{
  if(localStorage.getItem("ABC")!=null){
    let fetchUser = localStorage.getItem("ABC");
    let dataInJSON = JSON.parse(fetchUser);
    if(dataInJSON) setAuthUser(dataInJSON);
  } 
  else{
    let authenticatedUser = null;
    let dataInStr = JSON.stringify(authenticatedUser);
    localStorage.setItem("AuthenticatedUser",dataInStr);
  }
},[]);

useEffect(() => console.log(authUser),[authUser]);
  return (
    <>
    <Router>
      <Navigation userStatus = {authUser} />
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='sign-up' element={<SignUpScreen/>}/>
  </Routes>
</Router>
    </>
  )
}

export default AppRoutes  