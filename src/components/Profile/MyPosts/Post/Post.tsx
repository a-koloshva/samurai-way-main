import React from 'react';
import s from './Post.module.css';

type PostProps = {
  message: string;
  likeCount: number;
};

export const Post = (props: PostProps) => {
  return (
    <div className={s.item}>
      {props.message}, {props.likeCount}
    </div>
  );
};
