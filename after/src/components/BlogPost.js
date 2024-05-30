import React from "react";
import PostDetail from "./PostDetail";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default function BlogPost({ postId }) {
  return (
    <div className="blog-post-wrapper">
      <PostDetail postId={postId} />
      <CommentList postId={postId} />
      <AddComment postId={postId} />
    </div>
  );
}
