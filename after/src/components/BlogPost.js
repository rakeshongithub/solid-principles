import React from 'react';
import PostDetail from './PostDetail';
import AddComment from './AddComment';
import CommentListWithHoc from './CommentListWithHoc';
import PostDetailWithHoc from './PostDetailWithHoc';

export default function BlogPost({ postId }) {

  return (
    <div className='blog-post-wrapper'>
      {/* <PostDetail postId={postId} /> */}
      <PostDetailWithHoc postId={postId} />
      <CommentListWithHoc postId={postId} />
      <AddComment postId={postId} />
    </div>
  );
}