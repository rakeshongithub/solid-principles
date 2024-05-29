import React from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import PostDetailWithBanner from "./PostDetailWithBanner";

export default function BlogPost({ postId }) {
  return (
    <div className="blog-post-wrapper">
      <PostDetailWithBanner postId={postId} />
      <CommentList postId={postId} />
      <AddComment postId={postId} />
    </div>
  );
}
