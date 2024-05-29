import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import CommentItems from "./CommentItems";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`
      );
      setComments(response.data);
    }

    fetchComments();
  }, [postId]);

  if (!comments?.length) return <Loading>Comments loading...</Loading>;

  return (
    <section className="comment-section">
      <h3>Recent Comments</h3>
      <ul>
        {comments.map((comment) => (
          // const {postId, id, name, email, body } = comment
          <CommentItems
            key={comment?.id}
            body={comment.body}
            email={comment.email}
          />
        ))}
      </ul>
    </section>
  );
}

export default CommentList;
