import React from 'react'
import GridLayout from "react-grid-layout";
import Avatar from '@mui/material/Avatar';


function Review({comment}) {
    
  return (

       <div className="review-card" >
        <div className="review-header inline-flex items-center ">
            <Avatar sx={{ bgcolor: "white" }}>{comment.avatar}</Avatar>
            <h1 className="text-2xl font-bold  text-slate-200 mx-10">{comment.name}</h1>
            </div>
            <p className="review-body text-xl font-bold  text-slate-500 my-10">{comment.comment}</p>

       </div>

  )
}

export default Review