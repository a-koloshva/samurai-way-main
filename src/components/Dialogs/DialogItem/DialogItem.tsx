import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemProps = {
  name: string;
  id: number;
};

export const DialogItem = (props: DialogItemProps) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
