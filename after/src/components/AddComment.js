import React, { useState } from "react";
import ButtonWithLoader from "./ButtonWithLoader";
import Button from "./Button";
import usePostComment from "../hooks/usePostComment";

function AddComment({ postId }) {
  const [newComment, setNewComment] = useState("");
  const { postData, isLoading } = usePostComment(`/posts/${postId}/comments`);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    console.log("New Comment =>", { text: newComment });
    await postData({ text: newComment });
    setNewComment("");
  };

  return (
    <form className="form-section" onSubmit={handleCommentSubmit}>
      <input type="text" value={newComment} onChange={handleCommentChange} />
      {/* <Button type="submit" disabled={isLoading}>
        {isLoading ? "adding comment in-progress..." : "Add Comment"}
      </Button> */}
      <ButtonWithLoader
        type="submit"
        disabled={isLoading}
        isLoading={isLoading}
      ></ButtonWithLoader>
    </form>
  );
}

export default AddComment;
