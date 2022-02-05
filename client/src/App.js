import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Navbar from './components/Navbar';
import Create from './pages/Create';
import Home from './pages/Home';
import Login from "./pages/Login";
import Main from './pages/Main';
import Register from "./pages/Register";


function parseJwt(token) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}



function App() {
  const backend = "https://broodmood.herokuapp.com"
  const [login, setLogin] = useState(false)
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(true)
  const getUser = async (email) => {
    await fetch(backend+"/api/user", {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                  {email:email}
                ),
            })
      .then(res => res.json())
      .then(data => {
        setUserData(data.user)
        if(userData){
            setLoading(false)
        }

      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      const user = parseJwt(token)
      getUser(user.email)
      setLogin(true)
    }else{
      setLoading(true)
    }
}, [loading])

  return (
    
      <BrowserRouter>
      <Navbar userData={userData} login={login} setLogin={setLogin}/>
      <Routes>
      <Route path="/" exact element={<Home backend={backend}/>}></Route>
      <Route path="/login" exact element={<Login setLogin={setLogin} backend={backend}/>}></Route>
      <Route path="/register" exact element={<Register setLogin={setLogin} backend={backend}/>}></Route>
      <Route path="/main" exact element={<Main login={login} id={userData._id} backend={backend}/>}></Route>
      <Route path="/create" exact element={<Create id={userData._id} backend={backend}/>}></Route>
      </Routes>
      <div className='mb-5'></div>
      </BrowserRouter>
  );
}

export default App;
