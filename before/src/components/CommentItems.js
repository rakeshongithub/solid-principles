import React from 'react'

function CommentItems({comment}) {
  return (
    <li className='comment-items'>{comment.body} - <span className='comment-email'>by {comment.email}</span></li>
  )
}

export default CommentItems