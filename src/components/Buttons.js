import React, { useState } from "react";

function Buttons( { video } ) {

  const [ upVote , setUpVote ] = useState(video.upvotes)
  const [ downVote , setDownVote ] = useState(video.downvotes)
  
  function handleUpVote() {
    setUpVote(upVote => upVote + 1)
  }

  function handleDownVote() {
    setDownVote(downVote => downVote + 1)
  }

  return (
    <>
      <div className="buttonsDiv">
        <button onClick={handleUpVote} name="up">{upVote}👍</button>  
        <button onClick={handleDownVote} name="down">{downVote}👎</button>
      </div>
      <button>Hide Comments</button>
    </>
      
  )
}
  
export default Buttons;
  