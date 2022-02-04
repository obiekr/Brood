import React, { useState } from 'react'
import logo from '../brood.png' 

export default function Register(props){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [age, setAge] = useState()

    async function loginUser(e){
        const res = await fetch('http://localhost:1337/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password
            }),
        })
        const data = await res.json()
        if (data.user){
            localStorage.setItem("token", data.user)
            window.location.href = "/main"
            props.setLogin(true)
        }
    }

    async function registerUser(e){
        e.preventDefault()
        const res = await fetch('http://localhost:1337/api/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, age, email, password
            }),
        })
        const data = await res.json()
        if (data.status === "ok"){
            loginUser()
        }

    }

    return(
        <div className="Auth">
            <div className="container-fluid m-0 p-0">
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="logo" className="w-25 d-inline-block" />
                </div>
                <div className="d-flex justify-content-center">
                    <form className="w-25" onSubmit={registerUser}>
                        <div className="form-group">
                            <input type="text" className="form-control text-center rounded-pill" aria-describedby="emailHelp" placeholder="Name" value={name}  onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group mt-3">
                            <input type="number" className="form-control text-center rounded-pill" placeholder="How old are you?" value={age} onChange={(e)=>setAge(e.target.value)} min="1"/>
                        </div>
                        <div className="form-group mt-3">
                            <input type="email" className="form-control text-center rounded-pill" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group mt-3">
                            <input type="password" className="form-control text-center rounded-pill" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPasword(e.target.value)}/>
                        </div>
                        

                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary rounded-pill w-100">Register</button>
                        </div>
                        <div className="text-center mt-3">
                            <button className="btn btn-dark rounded-pill w-100"><i className="fa fa-google"></i>      Continue with Google</button>
                        </div>

                    </form>
                    
                </div>
                <div className="container w-25 mt-4">
                    <div className="d-flex justify-content-center text-center">
                        <a href="/login" className="btn btn-warning px-4 rounded-pill">Log In</a>
                    </div>
                </div>
        </div>
    </div>
    )
}