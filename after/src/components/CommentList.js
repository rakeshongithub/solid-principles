import React from "react";
import useCommentList from "../hooks/useCommentList";
import Loading from "./Loading";
import CommentItems from "./CommentItems";

function CommentList({ postId }) {
  const { comments, error, loading } = useCommentList(postId);

  if (loading) {
    return <Loading>Comments loading...</Loading>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
