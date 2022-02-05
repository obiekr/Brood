import React, { useState, useEffect } from 'react'
import "./Threads.css"
import Comment from './Comment';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify'

export default function Threads({post, opId, login, userId, backend}){
    const [opName, setOpName] = useState("")
    const [toggleComment, setToggleComment] = useState(false)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")

    
    const isOp = opId == userId
    var localDate = new Date(post.date)

    useEffect(()=>{
        fetch(backend+"/api/op", {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                  {op: opId}
                ),
        })
            .then(res => res.json())
            .then(data => setOpName(data.name))

        fetch(backend+"/api/getComment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: post.id
                }),
            })
                .then(res => res.json())
                .then(data => setComments(data))
    }, [])


    function htmlFrom(htmlString){
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
          { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }

    async function createComment(e){
        e.preventDefault()
        const res = await fetch(backend+'/api/createComment', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: comment,
                post: post.id,
                op: userId,
            }),
        })
        window.location.href = '/main'
    }
    
    return(
        <div className='threadsBody'>
            <div className="post">
                <div className="nickname-rep" align="right">
                    <div>
                    </div>
                    <div>
                        {opName}
                    </div>
                </div>
                
                <div class="story-header">
                    <div className="story-title">
                        <font>{post.title}</font>
                        <br />
                        <font className="date-posted">{localDate.toLocaleString()}</font>
                    </div>
                </div>

                <div className="content">
                    <hr />
                    {post.content && htmlFrom(post.content)}
                    <hr />
                </div>
                
                {login && <button className="btn btn-cst" onClick={(e)=>setToggleComment(!toggleComment)}>Comment</button>}
                
                {isOp &&  <a className="btn btn-cst">Edit post</a>}
                {toggleComment && 
                <form onSubmit={createComment}>
                    <div className="form-group my-2">
                        <input type="text" className="form-control my-2" placeholder="Comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                        <button type="submit" className="btn btn-primary rounded-pill my-2">Send</button>
                    </div>
                </form>
                }
                {/* <Comment id={post.id} /> */}
                {comments.map(com => 
                    <Comment com={com}/>
                    )
                }
            </div>
        </div>
    )
}