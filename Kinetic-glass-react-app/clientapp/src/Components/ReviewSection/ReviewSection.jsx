import React from 'react'
import Review from './Review'
import './style.css'
import {comments} from './Data'
function ReviewSection() {

    const [userComments,setUserComments] = React.useState(comments);
  return (
    <div className="review-container">

      {userComments.map(comment =><Review comment={comment}></Review>)}
        
    </div>
  )
}

export default ReviewSection