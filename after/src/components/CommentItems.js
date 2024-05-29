import React from "react";

function CommentItems({ body, email }) {
  return (
    <li className="comment-items">
      {body} - <span className="comment-email">by {email}</span>
    </li>
  );
}

export default CommentItems;
