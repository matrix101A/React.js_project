//import react and dom 
import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from "./CommentDetail";
 // eslint-disable-next-line
import ApprovalCard from "./ApprovalCard"
// creact react component


const App = function(){
    return ( <div className="ui container comments" style={{padding:'10%'}}>
            <ApprovalCard>
            <CommentDetail  author="Abhinav" content="Yo"/>
            </ApprovalCard>
            <CommentDetail  author="Vatsal" />
            <CommentDetail   />
          <div className="comments" style={{padding:'5%'}} >
          <CommentDetail   />
          <CommentDetail  />
          </div>
        </div>
  );
};


//Show comp on screen

ReactDom.render(
    <App/>,
    document.querySelector('#root')
);