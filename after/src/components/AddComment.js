import React, { useState } from "react";
import axios from "axios";
import ButtonWithLoader from "./ButtonWithLoader";
import Button from "./Button";

function AddComment({ postId }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    console.log("New Comment =>", { text: newComment });
    setIsLoading(!isLoading);
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
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "adding comment in-progress..." : "Add Comment"}
      </Button>
      {/* <ButtonWithLoader
        type="submit"
        disabled={isLoading}
        isLoading={isLoading}
      ></ButtonWithLoader> */}
    </form>
  );
}

export default AddComment;
