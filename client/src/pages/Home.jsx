import React, { useState, useEffect } from 'react'
import icon1 from "../resourceLandingPage/icon1.png"
import icon2 from "../resourceLandingPage/icon2.png"
import icon3 from "../resourceLandingPage/icon3.png"
import title1 from "../resourceLandingPage/title1.png"
import bird from "../resourceLandingPage/bird.png"
import "./Home.css"

export default function Home(){
    return(

        <div className='homeBody'>
            
            <div className="container">
                <div className="row homecontent">
                    <div className="col-2"></div>
                    <div className="col-4 d-flex justify-content-center"></div>
                    <img src={title1} id="hometagline" className="img-fluid"></img>
                    <div className="container d-flex justify-content-center">
                        <a href="/main" className="btn btn-pill btn-dark px-5 py-3 mt-5">Get Started</a>
                    </div>
                </div>
                    <div className="col-6"></div>
            </div>

            <div className="container-fluid w-75 mb-5">
                <div className="container text-center" style={{marginTop: "120px"}}>
                    <h1 id="homefeatures">Our Features</h1>
                    <p className="pt-2 homep">Some Features</p>
                </div>
                <div id= "logo" className="container-fluid text-center pt-4 ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-3 mx-5" id="homelogo1">
                            <img src={icon1} className="img-fluid mb-3"></img>
                            <h3 className='homeh3'>Chat / Connect</h3>
                            <p className='homep'>
                                Connect yourself to others. Don’t hide yourself in your blanket, communicating with others with the same problem can help you see yourself in a different light, that you’re not alone.
                            </p>
                        </div>
                        <div className="col-3 mx-5" id="homelogo2">
                            <img src={icon2} className="img-fluid  mb-3"></img>
                            <h3 className='homeh3'>Sharing</h3>
                            <p className='homep'>
                                Share it! Do you know that sharing your stories with others can help you overcome discomfort, shame, fear, or embarrassment?                    </p>
                        </div>
                        <div className="col-3 mx-5" id="homelogo3">
                            <img src={icon3} className="img-fluid mb-3"></img>
                            <h3 className='homeh3'>Anonymous</h3>
                            <p className='homep'>
                                Don’t be afraid. Nobody can see you now John Cena, just let go of your emotion. If somediv’s judging you, let them. Cause nodiv knows who you really are.                    </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">'
                <div className="homeparallax">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-8 text-center">
                            <h1 id="homegoal">Making You live in Tranquility is</h1>
                        </div>
                        <div className="col-4 mx-5">
                            <h1 id="homegoal">Our Goal...</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <h1 id="homestyle2">Our Objective</h1>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <p id="homestyle3" style={{width: "30vw"}} className="pb-4 homep">
                            We want to offer a solution that is more comforting and easier for someone who are afraid to communicate face to face to other people and tell their stories.
                        </p>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="homeparallax2 text-center">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-4 pt-1">
                            <img src={bird} className="img-fluid"></img>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-5">
                            <h2 id="homeworld">Across The World</h2>
                            <p id="homedesc">
                                Oh come on, it’s the 21st century, everything and everyone is connected. Nowadays, you can make new friends online and even get someone who can understand you and your problems better.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5 mb-4">
                    <div className="col-4 text-center">
                        <h1 id="homecontact" className="pt-3">Contact Us</h1>
                        <p id="homecontact1">
                            Openess and sharing anything is our motto. Feel free to share your ideas with us or have any queries regarding our product and features - We're ready to answer you!
                        </p>
                    </div>
                    <div className="col-8 mt-3">
                        <input type="text" className="mr-4 py-2 px-3 mb-3 homeinput" placeholder="Name"></input>
                        <input type="text" className="py-2 px-3 homeinput" placeholder="Email"></input>
                        <textarea className="mt-3 py-3 px-3 hometextarea" rows="7" placeholder="Message"></textarea>
                    </div>
                    <div className="col-9 pt-2">
                        <button type="submit" className="btn btn-dark" style={{marginLeft: "1200px"}} >Send</button>
                    </div>
                </div>
            </div>

            <div className="footer"></div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </div>
    )
}

