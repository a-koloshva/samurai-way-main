import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostsDataType } from '../../..';

type MyPostsProps = {
  postsData: PostsDataType[];
};

export const MyPosts = (props: MyPostsProps) => {
  // const postsData = [
  //   { id: 1, message: 'Hello', likeCount: 5 },
  //   { id: 2, message: 'i love Vlada', likeCount: 10 },
  //   { id: 3, message: 'kak you', likeCount: 15 },
  //   { id: 4, message: 'i fine ty', likeCount: 15 },
  // ];

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>addpost</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.postsData.map((post) => (
          <Post key={post.id} id={post.id} message={post.message} likeCount={post.likeCount} />
        ))}
      </div>
    </div>
  );
};
