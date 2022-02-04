import React from 'react'

export default function Comment(props){
    var localDate = new Date(props.com.date)
    return(
        <div className="border border-info rounded-pill mb-2 border-3 mt-3">
            <div className="mb-1 mx-4 text-justify pt-2 ">{props.com.content}</div>
            <div className="mx-4 pb-2 text-weight-5 d-flex justify-content-end text-danger">{localDate.toLocaleString()}</div>
        </div>
    )
}