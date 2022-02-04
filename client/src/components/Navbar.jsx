import React, { useState, useEffect } from 'react'
import { useNavigate   } from 'react-router-dom'
import logo from "../logo.png"
import add from "../add.png"
import "./Navbar.css"

export default function Navbar(props){
    const navigate = useNavigate()
    function logOut(e){
        localStorage.removeItem("token")
        props.setLogin(false)
        navigate("/")
    }
    return(
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <a href="/" className="brand right">
                    <img src={logo} alt="Brood Logo" width="50" className="d-inline-block align-top"/><span className="blank"></span></a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMovileMenu"
                    aria-expanded="false"
                    aria-lable="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav ms-auto">
                        
                        {props.login ? 
                        <>
                        <li>
                            <a className="btn" href='/create'>
                                <img src={add} alt="addLogo" width="30" className="d-inline-block"/>Add Story</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">{props.userData.name}</a>
                        </li>
                        <li>
                            <span className="nav-link">{props.userData.reputation}</span>
                        </li>
                        </>
                        :
                        <>
                        <li>
                             <a href='/login' className='btn'>Login</a>
                         </li>
                            <li>
                             <a href='/register' className='btn'>Register</a>
                         </li>
                        </>
                        }
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>&#8942;</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><a className="dropdown-item" href="#">Setting</a></li>
                              <li><a className="dropdown-item" href="#">Help</a></li>
                              <li><button className="dropdown-item" onClick={logOut}>Log Out</button></li>
                            </ul>
                          </li>
                    </ul>
                    </div>
            </nav>
        </div>
    )
    // }else{
    //     return(
    //         <div className="container">
    //         <nav className="navbar navbar-expand-md navbar-light">
    //             <a href="/" className="brand right">
    //                 <img src={logo} alt="Brood Logo" width="50" className="d-inline-block align-top"/><span className="blank"></span></a>
    //                 <form className="d-flex">
    //                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
    //                     <button className="btn btn-outline-success" type="submit">Search</button>
    //                 </form>
    //             <button
    //                 className="navbar-toggler"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#toggleMobileMenu"
    //                 aria-controls="toggleMovileMenu"
    //                 aria-expanded="false"
    //                 aria-lable="Toggle navigation"
    //             >
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="toggleMobileMenu">
    //                 <ul className="navbar-nav ms-auto">
    //                     <li>
    //                         <a href='/login' className='btn'>Login</a>
    //                     </li>
    //                     <li>
    //                         <a href='/register' className='btn'>Register</a>
    //                     </li>
    //                     {/* <li>
    //                         <a className="btn" href='/create'>
    //                             <img src={add} alt="addLogo" width="30" className="d-inline-block"/>Add Story</a>
    //                     </li>
    //                     <li>
    //                         <a href="#" className="nav-link">{props.name}</a>
    //                     </li>
    //                     <li>
    //                         <a href="#" className="nav-link">Rating</a>
    //                     </li> */}
    //                     <li className="nav-item dropdown">
    //                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                             <span>&#8942;</span>
    //                         </a>
    //                         <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //                           <li><a className="dropdown-item" href="#">Setting</a></li>
    //                           <li><a className="dropdown-item" href="#">Help</a></li>
    //                           {/* <li><button className="dropdown-item" onClick={logOut}>Log Out</button></li> */}
    //                         </ul>
    //                       </li>
    //                 </ul>
    //                 </div>
    //         </nav>
    //     </div>
    //     )
    // }

    
}

