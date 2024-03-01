import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New posts</div>
      <div className={s.posts}>
        <Post message="Hello" likeCount={5} />
        <Post message="i love Vlada" likeCount={15} />
      </div>
    </div>
  );
};
