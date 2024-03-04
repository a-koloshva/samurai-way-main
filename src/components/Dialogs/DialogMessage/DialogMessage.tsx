import React from 'react';
import s from './DialogMessage.module.css';

type MessageProps = {
  text: string;
  id: number;
};

export const Message = (props: MessageProps) => {
  return <div className={s.message}>{props.text}</div>;
};
