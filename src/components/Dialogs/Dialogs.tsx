import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './DialogMessage/DialogMessage';

export const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Vlada' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Tamara' },
  ];

  const messagesData = [
    { id: 1, text: 'hi' },
    { id: 2, text: 'hey' },
    { id: 3, text: 'hello' },
    { id: 4, text: 'hay' },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsData.map((dialog) => (
          <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={s.messages}>
        {messagesData.map((message) => (
          <Message key={message.id} id={message.id} text={message.text} />
        ))}
      </div>
    </div>
  );
};
