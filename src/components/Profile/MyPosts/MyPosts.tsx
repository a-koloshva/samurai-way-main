import React from 'react';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostsDataType } from '../../../redux/state';

type MyPostsProps = {
    postsData: PostsDataType[];
    addPost: (postMessage: string) => void;
};

export const MyPosts = (props: MyPostsProps) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const AddPostHandler = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.addPost(text);
        }
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={AddPostHandler}>addpost</button>
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
