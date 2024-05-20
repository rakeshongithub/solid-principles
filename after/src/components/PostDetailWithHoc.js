import React from 'react'
import Loading from './Loading';
import DataFetcher from '../hoc/DataFetcher';

function PostDetail({data: post}) {

  if (!post) return <Loading>Post detail loading...</Loading>;
      
  return (
    <section className='post-detail'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <a href='#'>Read More</a>
    </section>
  )
}

const reqUrl = 'https://jsonplaceholder.typicode.com/posts/1'

const PostDetailWithHoc = DataFetcher(PostDetail, reqUrl);

export default PostDetailWithHoc