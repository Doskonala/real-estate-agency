import React, { useState } from 'react';
import Comment from "../../components/comment-component/Comment"

const AboutComponent = () => { 

   const [commentator, setCommentator] = useState("");
   const [comment, setComment] = useState("");

    return ( 
      <React.Fragment>
         <div> 
            Агенство засноване 2022 року. У нас працюють найкращі ріелтори Івано-Франківської області.
         </div> 
         <p>Ім'я
            <input type="text" value={commentator} onChange={(evt)=>{setCommentator(evt.target.value)}}/>
         </p>
         <p>Відгук
            <input type="text" value={comment} onChange={(evt)=>{setComment(evt.target.value)}}/>
         </p>
         <Comment prop1={commentator} prop2={comment}/>
      </React.Fragment>
    ); 
 }; 
 export default AboutComponent;