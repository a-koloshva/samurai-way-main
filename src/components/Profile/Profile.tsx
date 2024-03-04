import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { PostsDataType } from '../..';

type ProfileProps = {
  postsData: PostsDataType[];
};

export const Profile = (props: ProfileProps) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  );
};
