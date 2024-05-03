import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BlogPost({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPost(response.data);
    }

    fetchPost();
  }, [postId]);

  useEffect(() => {
    async function fetchComments() {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      setComments(response.data);
    }

    fetchComments();
  }, [postId]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    console.log('New Comment =>', { text: newComment })
    // trigger api call
    // await axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, { text: newComment });
    setNewComment('');
  };

  if (!post) return null;

  return (
    <div className='blog-post-wrapper'>
      <section className='post-detail'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>

      <section className='comment-section'>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            comment?.body && <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </section>

      <form className='form-section' onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}