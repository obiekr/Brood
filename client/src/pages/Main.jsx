import React, { useState, useEffect } from 'react'
import Threads from '../components/Threads'

import "./Main.css"

export default function Main(props){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch(props.backend+"/api/main")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return(
        <div className='mainBody'>
            {
            posts.map(post => (
                <Threads 
                post={{content: post.content, title: post.title, date: post.date, id:post._id}} 
                opId={post.op} 
                login={props.login}
                userId={props.id}
                backend={props.backend}
                />
            ))
        }
        </div>
    )
}