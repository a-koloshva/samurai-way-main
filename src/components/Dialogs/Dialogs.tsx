import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemProps = {
  name: string;
  id: string;
};

const DialogItem = (props: DialogItemProps) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Andrey" id="1" />
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Vlada</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Tamara</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.messages}>Hi</div>
        <div className={s.messages}>Kak dela</div>
        <div className={s.messages}>Norm</div>
      </div>
    </div>
  );
};
