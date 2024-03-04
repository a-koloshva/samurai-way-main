import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsDataType = {
  id: number;
  message: string;
  likeCount: number;
};

const postsData = [
  { id: 1, message: 'Hello', likeCount: 5 },
  { id: 2, message: 'i love Vlada', likeCount: 10 },
  { id: 3, message: 'kak you', likeCount: 15 },
  { id: 4, message: 'i fine ty', likeCount: 15 },
];

ReactDOM.render(<App postsData={postsData} />, document.getElementById('root'));
