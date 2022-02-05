import React, { useState } from 'react'
import logo from '../brood.png' 
import "./Login.css"

export default function Login(props){
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [invalid, setInvalid] = useState(false)

    async function loginUser(e){
        e.preventDefault()
        const res = await fetch(props.backend+"/api/login", {
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
        }else{
            setInvalid(true)
        }

        console.log(data)
    }

    return(
        <div className="Auth">
            <div className="container-fluid m-0 p-0">
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="logo" className="w-25 d-inline-block" />
                </div>
                <div className="d-flex justify-content-center">
                    <form className="w-25" onSubmit={loginUser}>
                        {invalid && <div className='warning'>Invalid email or password</div>}
                        <div className="form-group mt-4">
                            <input type="email" className="form-control text-center rounded-pill" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group mt-3">
                            <input type="password" className="form-control text-center rounded-pill"  placeholder="Password" value={password} onChange={(e)=>setPasword(e.target.value)}/>
                        </div>

                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary rounded-pill w-100" value="Login">Login</button>
                        </div>
                        <div className="text-center mt-3">
                            <button className="btn btn-dark rounded-pill w-100"><i className="fa fa-google"></i>      Continue with Google</button>
                        </div>
                    </form>
                    
                </div>
                <div className="container w-25 mt-4">
                    <div className="d-flex justify-content-center text-center">
                        <a href="/register" className="btn btn-warning px-4 rounded-pill">Sign Up</a>
                    </div>
                </div>
        </div>
    </div>
    )
}