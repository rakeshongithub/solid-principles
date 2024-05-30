import React, { useState } from "react";
import axios from "axios";

function AddComment({ postId }) {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    console.log("New Comment =>", { text: newComment });
    // trigger api call
    await axios.post(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      { text: newComment }
    );
    setNewComment("");
  };

  return (
    <form className="form-section" onSubmit={handleCommentSubmit}>
      <input type="text" value={newComment} onChange={handleCommentChange} />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default AddComment;
