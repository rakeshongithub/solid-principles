import React from "react";
import usePost from "../hooks/usePost";
import Loading from "./Loading";

function PostDetail({ postId }) {
  const { post, loading, error } = usePost(postId);
  if (loading) {
    return <Loading>Post detail loading...</Loading>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <a href="#">Read More</a>
    </section>
  );
}

export default PostDetail;
