import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';

type ProfileProps = {
    data: ProfilePageType;
    addPost: (postMessage: string) => void;
};

export const Profile = (props: ProfileProps) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={props.data.postsData} addPost={props.addPost} />
        </div>
    );
};
