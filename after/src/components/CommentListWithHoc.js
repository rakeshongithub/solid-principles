import React from 'react'
import Loading from './Loading';
import CommentItems from './CommentItems';
import DataFetcher from '../hoc/DataFetcher';

function CommentList({data: comments}) {

    if (!comments?.length) return <Loading>Comments loading...</Loading>;

  return (
    <section className='comment-section'>
        <h3>Recent Comments</h3>
        <ul>
            {comments.map((comment) => (
            comment?.body && <CommentItems key={comment?.id} comment={comment} />
            ))}
        </ul>
    </section>
  )
}


const reqUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments?_limit=2'

const CommentListWithHoc = DataFetcher(CommentList, reqUrl);

export default CommentListWithHoc