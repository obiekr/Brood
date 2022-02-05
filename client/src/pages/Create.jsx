import React, { useState, useEffect } from 'react'
import "./Create.css"


export default function Create(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState("")
    const [op, setOp] = useState('')
    const [tags, setTags] = useState("")

    useEffect(() => {
        setOp(props.id)
    }, [props])

    async function createPost(e){
        e.preventDefault()
        const res = await fetch(props.backend+"/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title, 
                content: content, 
                op: op, 
                tags: tags
            }),
        })
        const data = await res.json()
        window.location.href = "/main"
    }

    return(
        <form id="body" onSubmit={createPost}> 
            <div className="d-flex justify-content-center border-1 mt-5" id="box1">
                <form id="mainBox" style={{width: "800px"}} className="p-3 mb-2 border">
                    <div>
                        <h2>Tell Us About Your Day!</h2>
                        <input id="editor1" type="text" placeholder="Title" className='form-control mb-3' required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="What's your story?" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                        
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center border-1" id="box1">
                <div id="mainBox" style={{width: "800px"}} className="p-3 mb-2 border"> 
                    <h3>Tag</h3>
                    <input id="editor1" type="text" placeholder="ex: #anxious #happy" className='form-control' required style={{marginTop: "10px"}} value={tags} onChange={(e)=>setTags(e.target.value)}></input>
                </div>
            </div>
            <br/>
            <div className="container-fluid">
            <div id="switch" className="d-flex justify-content-left">
                <div className="form-check form-switch" >
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" for="flexSwitchCheckDefault">Turn Off Comment</label>
                </div>
            </div>
            <div id="switch" className="d-flex justify-content-left">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" for="flexSwitchCheckDefault">Hide Your Name</label>
                </div> 
            </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <button id="button" type="button" className="btn btn-white" value="">Cancel</button>
                <button id="button" type="submit" className="btn btn-dark" style={{marginLeft: "5px"}} value="">Submit</button>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
            
        </form>
    )
}