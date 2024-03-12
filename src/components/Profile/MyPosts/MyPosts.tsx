import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostsDataType } from '../../../redux/state';

type MyPostsProps = {
    postsData: PostsDataType[];
};

export const MyPosts = (props: MyPostsProps) => {
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
                    <Post
                        key={post.id}
                        id={post.id}
                        message={post.message}
                        likeCount={post.likeCount}
                    />
                ))}
            </div>
        </div>
    );
};
