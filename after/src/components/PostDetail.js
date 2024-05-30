import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

function PostDetail({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(response.data);
    }

    fetchPost();
  }, [postId]);

  if (!post) return <Loading>Post detail loading...</Loading>;

  return (
    <section className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <a href="#">Read More</a>
    </section>
  );
}

export default PostDetail;
