//import react and dom 
import React from 'react';
import faker from 'faker'
// creact react component

const CommentDetail= props=>{
    
    return(
        <div className="comment" >
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">{faker.name.firstName()}</a>
       
        <div className="metadata">
          <span className="date">Today at 6 pm</span>
        </div>
        <div className="text">
         {faker.lorem.paragraph()}
        </div>
        <div className="actions">
          <a href="/" className="reply">Reply</a>
        </div>
        </div>
      </div>  
    )
}

export default CommentDetail;