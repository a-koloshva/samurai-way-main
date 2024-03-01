import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="/" alt="backgroung" />
      </div>
      <div>ava + info</div>
      <MyPosts />
    </div>
  );
};
